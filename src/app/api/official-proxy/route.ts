/**
 * Reads a registered official notice FROM INDIA and returns its text.
 *
 * Many Indian government sites refuse servers outside India, which includes GitHub's runners. This
 * route runs in Vercel's Mumbai region (bom1), so the daily verification can still read the notice.
 *
 * Not an open proxy: it only ever fetches URLs already listed in our own registries, chosen by
 * record id (official notice) or record id + source number (corroborating page). It never fetches a
 * URL supplied by the caller.
 */
import { NextResponse } from 'next/server';
import { OFFICIAL_DOCS } from '@/refresher/official-registry';
import { REFRESH_SOURCES } from '@/refresher/registry';
import { fetchPageText } from '@/refresher/fetch-text';

export const dynamic = 'force-dynamic';
export const preferredRegion = 'bom1';
export const maxDuration = 60;

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get('id') ?? '';
  const src = new URL(req.url).searchParams.get('src');
  const url = src === null ? OFFICIAL_DOCS[id]?.url : REFRESH_SOURCES[id]?.[Number(src)]?.url;
  if (!url) return NextResponse.json({ ok: false, error: 'unknown record or source' }, { status: 404 });

  const page = await fetchPageText(url);
  return NextResponse.json(
    { ok: page.ok, kind: page.kind, status: page.status, error: page.error, text: page.ok ? page.text.slice(0, 600_000) : '' },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
