/**
 * Fetch a URL and return readable text. Handles HTML and PDF. JavaScript-only pages are rendered in
 * a headless browser when WATCH_RENDER=1 and Playwright is installed (the GitHub Action does this);
 * otherwise they come back as `unreadable` rather than as a guess.
 */
import { Agent } from 'undici';

const USER_AGENT = 'SkillCaseSourceCheck/1.0 (+https://career-intelligence-nurse.vercel.app; data-accuracy check)';
const TIMEOUT_MS = 15_000;

/**
 * A few official Indian government sites serve an incomplete certificate chain (their server does not
 * send the intermediate cert), which fails strict TLS verification even though the sites are genuine
 * and reachable in an ordinary browser (browsers cache trusted intermediates; Node does not). Verified
 * independently with `openssl s_client -connect <host>:443 -servername <host>` before listing a host
 * here — each returns "unable to get local issuer certificate" / "unable to verify the first
 * certificate" against a certificate whose subject is that government domain, not a mismatched or
 * expired one. This is a read-only fetch of public information, never a channel for secrets, so
 * accepting the risk is scoped to exactly these hostnames. Approved by the SkillCase owner, 2026-09-22.
 */
const SKIP_CERT_CHECK_HOSTS = new Set(['www.osssc.gov.in', 'osssc.gov.in', 'pgimer.edu.in', 'www.pgimer.edu.in', 'esb.mp.gov.in']);
const insecureAgent = new Agent({ connect: { rejectUnauthorized: false } });

export interface FetchedText {
  ok: boolean;
  kind: 'html' | 'pdf' | 'rendered' | 'unreadable';
  text: string;
  status?: number;
  error?: string;
}

export function htmlToText(html: string): string {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/\s+/g, ' ')
    .trim();
}

async function render(url: string): Promise<string | null> {
  if (process.env.WATCH_RENDER !== '1') return null;
  try {
    const mod = 'playwright'; // variable specifier: not resolved at build time, optional dependency
    const { chromium } = await import(mod);
    const browser = await chromium.launch();
    try {
      const page = await browser.newPage({ userAgent: USER_AGENT });
      await page.goto(url, { waitUntil: 'networkidle', timeout: 25_000 });
      return htmlToText(await page.content());
    } finally {
      await browser.close();
    }
  } catch {
    return null;
  }
}

export async function fetchPageText(url: string): Promise<FetchedText> {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), TIMEOUT_MS);
  try {
    const host = new URL(url).hostname;
    const dispatcher = SKIP_CERT_CHECK_HOSTS.has(host) ? insecureAgent : undefined;
    const res = await fetch(url, { signal: ctrl.signal, redirect: 'follow', headers: { 'User-Agent': USER_AGENT }, cache: 'no-store', ...(dispatcher ? { dispatcher } : {}) });
    if (!res.ok) return { ok: false, kind: 'unreadable', text: '', status: res.status, error: `HTTP ${res.status}` };

    const type = res.headers.get('content-type') || '';
    if (/pdf/i.test(type) || url.toLowerCase().endsWith('.pdf')) {
      const { default: pdf } = await import('pdf-parse/lib/pdf-parse.js');
      const data = await pdf(Buffer.from(await res.arrayBuffer()));
      const text = data.text.replace(/\s+/g, ' ').trim();
      return text.length > 200 ? { ok: true, kind: 'pdf', text, status: res.status } : { ok: false, kind: 'unreadable', text: '', status: res.status, error: 'PDF has no extractable text (scanned image)' };
    }

    const text = htmlToText(await res.text());
    if (text.length >= 300) return { ok: true, kind: 'html', text, status: res.status };

    const rendered = await render(url);
    if (rendered && rendered.length >= 300) return { ok: true, kind: 'rendered', text: rendered, status: res.status };
    return { ok: false, kind: 'unreadable', text: '', status: res.status, error: 'JavaScript-only page' };
  } catch (e) {
    const aborted = e instanceof Error && e.name === 'AbortError';
    return { ok: false, kind: 'unreadable', text: '', error: aborted ? `Timed out after ${TIMEOUT_MS / 1000}s` : e instanceof Error ? `${e.message}${(e as { cause?: { code?: string } }).cause?.code ? ` (${(e as { cause?: { code?: string } }).cause!.code})` : ''}` : String(e) };
  } finally {
    clearTimeout(timer);
  }
}
