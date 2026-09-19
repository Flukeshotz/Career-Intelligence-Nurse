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
const records = (REFRESHED as unknown as { records: Record<string, { status: string; checkedAt: string }> }).records;
const problems: string[] = [];

for (const e of INITIAL_EXAMS) {
  const lc = deriveLifecycle(e);
  const live = lc.stage === 'upcoming' || lc.stage === 'applications_open' || lc.stage === 'applications_closed';
  const t = getTrust(e.id);
  const r = records[e.id];

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
