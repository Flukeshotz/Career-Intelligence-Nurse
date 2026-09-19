import * as fs from 'fs';
import { config } from 'dotenv';
import { discover } from '../src/refresher/discover';

config({ path: '.env.local' });
config();

// Usage: npx tsx scripts/discover.ts [--write]   (--write saves discovery-report.md for the workflow)
async function main() {
  const min = Number(process.argv.find((a) => a.startsWith('--min='))?.split('=')[1] ?? 2);
  const { pagesRead, pagesTried, candidates } = await discover(undefined, min);
  console.log(`read ${pagesRead}/${pagesTried} pages; ${candidates.length} untracked recruitments mentioned by ${min}+ pages`);
  for (const c of candidates) console.log(`- ${c.name} [${c.body}] posts=${c.vacancies ?? '?'} mentioned by ${c.mentionedBy} pages ${c.timelines[0] ? '· ' + c.timelines[0] : ''}`);

  if (process.argv.includes('--write')) {
    const md = candidates.length
      ? [
          '### New nursing recruitments found (not tracked yet)',
          '',
          'Mentioned by two or more public roundup pages. **Nothing here is published.** To list one, add its record and at least two sources; the refresher then confirms the numbers automatically.',
          '',
          '| Recruitment | Body | Posts | Mentioned by | Timeline |',
          '|---|---|---|---|---|',
          ...candidates.map((c) => `| ${c.name} | ${c.body} | ${c.vacancies ?? '?'} | ${c.mentionedBy} pages | ${c.timelines[0] ?? ''} |`),
        ].join('\n')
      : '';
    fs.writeFileSync('discovery-report.md', md);
  }
}
main();
