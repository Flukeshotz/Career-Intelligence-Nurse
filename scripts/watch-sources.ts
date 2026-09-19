import * as fs from 'fs';
import * as path from 'path';
import { runSourceWatch } from '../src/lib/source-watch';

// Usage: npx tsx scripts/watch-sources.ts [--all] [--write] [id,id,...]
//   --write  persist results to src/lib/source-checks.json, which getTrust() reads. This is what the
//            scheduled GitHub Action runs, so trust states refresh with no human in the loop.
async function main() {
  const includeClosed = process.argv.includes('--all');
  const write = process.argv.includes('--write');
  const idArg = process.argv.slice(2).find((a) => !a.startsWith('--'));
  const report = await runSourceWatch({ includeClosed, ids: idArg?.split(',') });

  console.log(JSON.stringify(report.summary), `checked=${report.checked}`);
  for (const f of report.findings) {
    console.log(`${f.outcome.padEnd(16)} ${f.id.padEnd(34)} vac=${String(f.vacanciesFound).padEnd(5)} dl=${String(f.deadlineFound).padEnd(5)} ${f.note}`);
  }

  if (write) {
    const file = path.join(process.cwd(), 'src', 'lib', 'source-checks.json');
    const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : { checks: {} };
    const checks: Record<string, { outcome: string; checkedAt: string }> = { ...prev.checks };
    for (const f of report.findings) checks[f.id] = { outcome: f.outcome, checkedAt: f.checkedAt };
    fs.writeFileSync(file, JSON.stringify({ ranAt: report.ranAt, checks }, null, 2) + '\n');
    console.log(`wrote ${Object.keys(checks).length} checks → src/lib/source-checks.json`);
  }
}
main();
