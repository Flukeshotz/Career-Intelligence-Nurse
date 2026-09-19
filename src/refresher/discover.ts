/**
 * Discovery: finds nursing recruitments we are NOT tracking yet.
 *
 * It reads a few public roundup pages, has the model list the recruitments each one mentions, and
 * reports those that do not match anything already tracked, requiring that at least two of the
 * pages mention it. It never publishes anything: a candidate becomes a listing only after a person
 * adds its record and sources, and the refresher then confirms the numbers with the usual
 * two-source consensus. That keeps "found" and "confirmed" separate, so an unconfirmed name from
 * one blog can never reach a nurse.
 */
import { chatJson } from './llm';
import { INITIAL_EXAMS } from '../lib/mock-data';
import { fetchPageText } from './fetch-text';

export const DISCOVERY_PAGES = [
  'https://nprep.in/blogs/upcoming-nursing-exams-and-vacancies',
  'https://www.pw.live/nursing/exams',
  'https://testbook.com/aiims-nursing-officer',
  'https://competition.careers360.com/articles/nursing-recruitment',
];

export interface Mention {
  name: string;
  body: string;
  vacancies: number | null;
  timeline: string | null;
}

export interface Candidate {
  key: string;
  name: string;
  body: string;
  vacancies: number | null;
  timelines: string[];
  mentionedBy: number;
}

const STOP = new Set(['nursing', 'officer', 'staff', 'nurse', 'recruitment', 'exam', 'examination', 'notification', 'vacancy', 'vacancies', 'posts', 'the', 'for', 'and', 'of', 'in', '2026', '2025', 'group', 'cadre']);

/** Distinctive tokens: the body's name (OSSSC, PGIMER, HSSC...), minus generic words. */
function tokens(s: string): string[] {
  return s.toLowerCase().replace(/[^a-z0-9 ]/g, ' ').split(/\s+/).filter((t) => t.length > 2 && !STOP.has(t));
}

function tracked(m: Mention): boolean {
  const mine = new Set(tokens(`${m.name} ${m.body}`));
  return INITIAL_EXAMS.some((e) => tokens(`${e.name} ${e.organisation}`).some((t) => mine.has(t)));
}

async function extract(pageText: string): Promise<Mention[]> {
  const raw = await chatJson(
    'List the Indian government NURSING recruitments (nursing officer / staff nurse / CHO nursing posts) that this page mentions as upcoming, open or recently notified in 2026. ' +
      'Reply JSON only: {"recruitments":[{"name":string,"body":string,"vacancies":number|null,"timeline":string|null}]}. ' +
      '"body" is the conducting organisation (e.g. OSSSC, PGIMER, RRB). Skip entrance exams for admission, private jobs and anything from 2024 or earlier. Use null when not stated. Never guess.',
    pageText.slice(0, 9000)
  );
  try {
    const j = JSON.parse(raw || '{}');
    return (Array.isArray(j.recruitments) ? j.recruitments : [])
      .filter((r: any) => typeof r?.name === 'string' && typeof r?.body === 'string')
      .map((r: any) => ({ name: r.name, body: r.body, vacancies: typeof r.vacancies === 'number' ? r.vacancies : null, timeline: typeof r.timeline === 'string' ? r.timeline : null }));
  } catch {
    return [];
  }
}

export async function discover(pages: string[] = DISCOVERY_PAGES, minPages = 2) {
  const byKey = new Map<string, Candidate & { pages: Set<string> }>();
  const read: string[] = [];

  for (const url of pages) {
    const page = await fetchPageText(url);
    if (!page.ok) continue;
    read.push(url);
    for (const m of await extract(page.text).catch(() => [])) {
      if (tracked(m)) continue;
      const key = tokens(m.body).slice(0, 2).join('-') || tokens(m.name).slice(0, 2).join('-');
      if (!key) continue;
      const c = byKey.get(key) ?? { key, name: m.name, body: m.body, vacancies: m.vacancies, timelines: [], mentionedBy: 0, pages: new Set<string>() };
      c.pages.add(url);
      if (m.timeline) c.timelines.push(m.timeline);
      c.vacancies = c.vacancies ?? m.vacancies;
      byKey.set(key, c);
    }
  }

  const candidates: Candidate[] = Array.from(byKey.values())
    .map((c) => ({ key: c.key, name: c.name, body: c.body, vacancies: c.vacancies, timelines: c.timelines.slice(0, 2), mentionedBy: c.pages.size }))
    .filter((c) => c.mentionedBy >= minPages) // one blog's claim is not enough
    .sort((a, b) => b.mentionedBy - a.mentionedBy);

  return { pagesRead: read.length, pagesTried: pages.length, candidates };
}
