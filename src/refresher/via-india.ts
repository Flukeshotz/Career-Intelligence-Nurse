/**
 * Fallback reader: asks our own Mumbai-hosted route to fetch a page that refuses GitHub's servers.
 * Only registered URLs can be requested (by record id, and source number for corroborating pages).
 * Set OFFICIAL_PROXY=off to disable (used when running from an Indian connection already).
 */
import type { FetchedText } from './fetch-text';

export async function fetchViaIndia(id: string, src?: number): Promise<FetchedText | null> {
  if (process.env.OFFICIAL_PROXY === 'off') return null;
  const base = (process.env.OFFICIAL_PROXY_URL || 'https://career-intelligence-nurse.vercel.app').replace(/\/+$/, '');
  try {
    const q = `id=${encodeURIComponent(id)}${src === undefined ? '' : `&src=${src}`}`;
    const r = await fetch(`${base}/api/official-proxy?${q}`, { signal: AbortSignal.timeout(75_000), cache: 'no-store' });
    const j = (await r.json()) as { ok: boolean; kind: FetchedText['kind']; text: string; status?: number; error?: string };
    return j.ok ? { ok: true, kind: j.kind, text: j.text, status: j.status } : null;
  } catch {
    return null;
  }
}
