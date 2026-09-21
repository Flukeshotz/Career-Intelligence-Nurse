import * as fs from 'fs';
import { INITIAL_EXAMS } from '../src/lib/mock-data';
import { getTrust } from '../src/lib/verification';
import { deriveLifecycle } from '../src/lib/lifecycle';
import REFRESHED from '../src/lib/refreshed-data.json';

/**
 * Turns "do I need to look at this?" into a yes/no. Writes health-report.md ONLY when something
 * needs a human; an empty file means all is well. The workflow opens/updates a GitHub issue from it
 * (GitHub emails you) and closes the issue again when the problems clear.
 *
 * Only live recruitments matter: a closed one going "stale" is not a problem.
 */
interface Rec {
  status: string;
  checkedAt: string;
  fields?: Record<string, { value: number | string }>;
  held?: string[];
  official?: { status: string; checkedAt: string; fields?: Record<string, { value: number | string; quote: string }>; rejected?: string[]; note?: string };
}
const records = (REFRESHED as unknown as { records: Record<string, Rec> }).records;
const problems: string[] = [];

for (const e of INITIAL_EXAMS) {
  const lc = deriveLifecycle(e);
  const live = lc.stage === 'upcoming' || lc.stage === 'applications_open' || lc.stage === 'applications_closed';
  const t = getTrust(e.id);
  const r = records[e.id];

  // Held changes: third-party sources moved a lot, the site kept the old value until the notice confirms.
  if (r?.held?.length) problems.push(`**${e.name}** — a big change was NOT applied (${r.held.join('; ')}). Sources moved sharply; the site still shows the old value. Check the official notice.`);
  // Official notice vs third-party agreement: the notice wins on the site, but someone should know.
  for (const [k, ov] of Object.entries(r?.official?.fields ?? {})) {
    const cv = r?.fields?.[k]?.value;
    if (cv !== undefined && cv !== ov.value) problems.push(`**${e.name}** — the official notice says ${k}=${ov.value} ("${ov.quote.slice(0, 90)}") but independent reports say ${cv}. The site shows the official value.`);
  }
  for (const c of (r?.official as { factChecks?: Array<{ fact: string; text: string; missing: string[] }> } | undefined)?.factChecks ?? []) {
    if (c.missing.length) problems.push(`**${e.name}** — our text for ${c.fact} ("${c.text.slice(0, 80)}") has figures not found in the official notice: ${c.missing.join(', ')}.`);
  }
  // Some government sites refuse GitHub's (non-Indian) servers. A single failed read is fine: the last
  // good result is kept. Only alert when the notice has gone unread for more than 10 days.
  if (live && r?.official?.status === 'verified') {
    const days = Math.floor((Date.now() - new Date(r.official.checkedAt).getTime()) / 86_400_000);
    if (days > 10) problems.push(`**${e.name}** — the official notice has not been re-read for ${days} days (the site may block automated servers). Run \`npx tsx scripts/verify-official.ts --write\` on your computer and commit the result.`);
  }

  if (r?.status === 'no_consensus') problems.push(`**${e.name}** — sources disagree on a number. Its confirmed badge was removed until they agree. Check the official notice.`);
  else if (live && t.level === 'stale') problems.push(`**${e.name}** — not re-confirmed for over 14 days (${lc.label}). The refresher could not read enough sources; add another source or check the official site.`);
  else if (live && t.level === 'unverified') problems.push(`**${e.name}** — never confirmed automatically (${lc.label}).`);
  else if (live && r?.checkedAt) {
    const days = Math.floor((Date.now() - new Date(r.checkedAt).getTime()) / 86_400_000);
    if (days >= 8) problems.push(`**${e.name}** — last automatic confirmation was ${days} days ago; it will show "stale" soon.`);
  }
}

const out = problems.length ? ['### Data needs attention', '', ...problems.map((p) => `- ${p}`), '', '_Opened automatically by the data refresh. It closes itself once these clear._'].join('\n') : '';
fs.writeFileSync('health-report.md', out);
console.log(problems.length ? `${problems.length} problem(s)\n${out}` : 'all live records healthy');
