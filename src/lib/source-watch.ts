/**
 * Source watcher — automatically checks stored numbers against the official page.
 *
 * For every open/upcoming record it fetches the official notification (or application) URL and
 * looks for the two facts that hurt a nurse most when wrong: the VACANCY COUNT and the
 * APPLICATION DEADLINE. A record whose numbers don't appear on its own cited source is flagged.
 *
 * What this does:
 *  - Catches dead links, homepage-only citations, and numbers that are absent from the page.
 *  - Reads HTML, PDFs, and (when WATCH_RENDER=1 and Playwright is installed) JavaScript-only pages.
 *  - It only CHECKS. Correcting the numbers is the refresher's job (src/refresher), which changes a
 *    value only when at least two independent sources agree on it.
 *  - Politeness: one GET per URL, identifying User-Agent, low concurrency. Per-source ToS review
 *    (context.md → Data Acquisition) still applies before widening what is fetched.
 */

import { INITIAL_EXAMS, INITIAL_JOBS } from './mock-data';
import { deriveLifecycle } from './lifecycle';
import { fetchPageText } from '../refresher/fetch-text';

export type WatchOutcome =
  | 'ok' //              vacancy count and deadline both found on the page
  | 'numbers_missing' // page loaded, but one or both figures are not on it
  | 'homepage_only' //   cited URL is a site root — cannot validate anything
  | 'unparseable' //     PDF / non-HTML / JS-only page — needs a human
  | 'dead' //            4xx / 5xx
  | 'error'; //          network error / timeout

export interface WatchFinding {
  id: string;
  kind: 'exam' | 'job';
  title: string;
  url: string;
  outcome: WatchOutcome;
  httpStatus?: number;
  vacanciesFound: boolean | null;
  deadlineFound: boolean | null;
  note: string;
  checkedAt: string;
}

export interface WatchReport {
  ranAt: string;
  checked: number;
  summary: Record<WatchOutcome, number>;
  needsAttention: WatchFinding[];
  findings: WatchFinding[];
}

const MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** All the ways an Indian recruitment page writes one date. */
export function dateForms(isoDate: string): string[] {
  const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(isoDate);
  if (!m) return [];
  const [y, mo, d] = [Number(m[1]), Number(m[2]), Number(m[3])];
  const long = MONTHS_LONG[mo - 1];
  const short = long.slice(0, 3);
  return [
    `${d} ${long} ${y}`,
    `${pad(d)} ${long} ${y}`,
    `${d}${ord(d)} ${long} ${y}`,
    `${long} ${d}, ${y}`,
    `${d} ${short} ${y}`,
    `${pad(d)} ${short} ${y}`,
    `${pad(d)}-${pad(mo)}-${y}`,
    `${pad(d)}/${pad(mo)}/${y}`,
    `${pad(d)}.${pad(mo)}.${y}`,
    `${y}-${pad(mo)}-${pad(d)}`,
    `${d}-${short}-${y}`,
    `${pad(d)}-${short}-${y}`,
  ].map((s) => s.toLowerCase());
}

function ord(d: number): string {
  if (d % 100 >= 11 && d % 100 <= 13) return 'th';
  return ({ 1: 'st', 2: 'nd', 3: 'rd' } as Record<number, string>)[d % 10] ?? 'th';
}

export function vacancyForms(n: number): string[] {
  const plain = String(n);
  const grouped = n.toLocaleString('en-IN'); // 2,218 / 10,709
  const western = n.toLocaleString('en-US');
  return Array.from(new Set([plain, grouped, western]));
}

function containsNumber(text: string, forms: string[]): boolean {
  // Whole-number match so "2218" does not match inside "22180".
  return forms.some((f) => new RegExp(`(^|[^0-9,])${f.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}([^0-9]|$)`).test(text));
}

function isSiteRoot(url: string): boolean {
  try {
    const u = new URL(url);
    return u.pathname === '/' || u.pathname === '';
  } catch {
    return false;
  }
}

async function checkOne(target: {
  id: string;
  kind: 'exam' | 'job';
  title: string;
  url: string;
  vacancies?: number;
  deadline?: string;
}): Promise<WatchFinding> {
  const base = {
    id: target.id,
    kind: target.kind,
    title: target.title,
    url: target.url,
    checkedAt: new Date().toISOString(),
  };

  if (isSiteRoot(target.url)) {
    return {
      ...base,
      outcome: 'homepage_only',
      vacanciesFound: null,
      deadlineFound: null,
      note: 'Cited URL is a site homepage, not the notification. Replace with the deep link to the advertisement.',
    };
  }

  const page = await fetchPageText(target.url);
  if (!page.ok) {
    const dead = typeof page.status === 'number' && page.status >= 400;
    return {
      ...base,
      outcome: dead ? 'dead' : page.error?.startsWith('Timed out') || !page.status ? 'error' : 'unparseable',
      httpStatus: page.status,
      vacanciesFound: null,
      deadlineFound: null,
      note: dead ? `HTTP ${page.status} — link may be broken or blocked.` : page.error || 'Could not read the page.',
    };
  }

  const text = page.text.toLowerCase();
  const vacanciesFound = target.vacancies ? containsNumber(text, vacancyForms(target.vacancies)) : null;
  const deadlineFound = target.deadline ? dateForms(target.deadline).some((f) => text.includes(f)) : null;

  const missing: string[] = [];
  if (vacanciesFound === false) missing.push(`vacancy count ${target.vacancies}`);
  if (deadlineFound === false) missing.push(`deadline ${target.deadline?.slice(0, 10)}`);

  return {
    ...base,
    outcome: missing.length ? 'numbers_missing' : 'ok',
    httpStatus: page.status,
    vacanciesFound,
    deadlineFound,
    note: missing.length ? `Not found on the cited page (${page.kind}): ${missing.join(' and ')}.` : `Vacancy count and deadline both found on the cited page (${page.kind}).`,
  };
}

export interface WatchOptions {
  ids?: string[];
  /** Include already-closed records. Default false: only open/upcoming ones can hurt a nurse. */
  includeClosed?: boolean;
  concurrency?: number;
}

export async function runSourceWatch(opts: WatchOptions = {}): Promise<WatchReport> {
  const { ids, includeClosed = false, concurrency = 4 } = opts;

  const targets = [
    ...INITIAL_EXAMS.map((e) => ({
      id: e.id,
      kind: 'exam' as const,
      title: e.name,
      url: e.officialNotificationUrl || e.applicationUrl || '',
      vacancies: e.vacancies,
      deadline: e.applicationDeadline,
      live: deriveLifecycle(e).status !== 'closed' && deriveLifecycle(e).status !== 'expired',
    })),
    ...INITIAL_JOBS.map((j) => ({
      id: j.id,
      kind: 'job' as const,
      title: j.title,
      url: j.officialNotificationUrl || j.applicationUrl || '',
      vacancies: j.vacancyCount,
      deadline: j.applicationDeadline,
      live: deriveLifecycle(j).status !== 'closed' && deriveLifecycle(j).status !== 'expired',
    })),
  ].filter((t) => t.url && (ids ? ids.includes(t.id) : includeClosed || t.live));

  const findings: WatchFinding[] = [];
  let cursor = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, targets.length) }, async () => {
      while (cursor < targets.length) {
        const t = targets[cursor++];
        findings.push(await checkOne(t));
      }
    })
  );

  findings.sort((a, b) => a.id.localeCompare(b.id));
  const summary: Record<WatchOutcome, number> = { ok: 0, numbers_missing: 0, homepage_only: 0, unparseable: 0, dead: 0, error: 0 };
  for (const f of findings) summary[f.outcome]++;

  return {
    ranAt: new Date().toISOString(),
    checked: findings.length,
    summary,
    needsAttention: findings.filter((f) => f.outcome !== 'ok'),
    findings,
  };
}
