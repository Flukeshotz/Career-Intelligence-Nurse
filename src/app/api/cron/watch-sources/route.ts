import { NextResponse } from 'next/server';
import { runSourceWatch } from '@/lib/source-watch';

// Runs on a schedule (vercel.json). Never cached, never prerendered.
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function authorized(req: Request): boolean {
  const secret = process.env.CRON_SECRET;
  // Vercel Cron sends `Authorization: Bearer $CRON_SECRET`.
  if (!secret) return process.env.NODE_ENV !== 'production'; // open in dev, closed in production
  return req.headers.get('authorization') === `Bearer ${secret}`;
}

export async function GET(req: Request) {
  if (!authorized(req)) {
    return NextResponse.json({ error: 'unauthorized' }, { status: 401 });
  }

  const url = new URL(req.url);
  const ids = url.searchParams.get('ids')?.split(',').filter(Boolean);
  const report = await runSourceWatch({ ids, includeClosed: url.searchParams.get('all') === '1' });

  // Optional push alert so problems reach a person instead of waiting to be noticed.
  const hook = process.env.ALERT_WEBHOOK_URL;
  if (hook && report.needsAttention.length > 0) {
    const lines = report.needsAttention.slice(0, 15).map((f) => `• ${f.id}: ${f.outcome} — ${f.note}`);
    await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: `SkillCase source check: ${report.needsAttention.length}/${report.checked} need attention\n${lines.join('\n')}` }),
    }).catch(() => undefined);
  }

  return NextResponse.json(report);
}
