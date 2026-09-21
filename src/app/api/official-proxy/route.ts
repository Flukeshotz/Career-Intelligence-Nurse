/**
 * Reads a registered official notice FROM INDIA and returns its text.
 *
 * Many Indian government sites refuse servers outside India, which includes GitHub's runners. This
 * route runs in Vercel's Mumbai region (bom1), so the daily verification can still read the notice.
 *
 * Not an open proxy: it only ever fetches the URLs listed in OFFICIAL_DOCS (chosen by record id),
 * never a URL supplied by the caller.
 */
import { NextResponse } from 'next/server';
import { OFFICIAL_DOCS } from '@/refresher/official-registry';
import { fetchPageText } from '@/refresher/fetch-text';

export const dynamic = 'force-dynamic';
export const preferredRegion = 'bom1';
export const maxDuration = 60;

export async function GET(req: Request) {
  const id = new URL(req.url).searchParams.get('id') ?? '';
  const doc = OFFICIAL_DOCS[id];
  if (!doc) return NextResponse.json({ ok: false, error: 'unknown record id' }, { status: 404 });

  const page = await fetchPageText(doc.url);
  return NextResponse.json(
    { ok: page.ok, kind: page.kind, status: page.status, error: page.error, text: page.ok ? page.text.slice(0, 600_000) : '' },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}
