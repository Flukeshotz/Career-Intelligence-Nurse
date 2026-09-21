import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import { refreshAll } from '../src/refresher';

config({ path: '.env.local' });
config();

// Usage: npx tsx scripts/refresh-data.ts [--write] [id,id,...]
//   --write persists consensus to src/lib/refreshed-data.json (applied over the stored records).
async function main() {
  const write = process.argv.includes('--write');
  const idArg = process.argv.slice(2).find((a) => !a.startsWith('--'));
  const { ranAt, records, log } = await refreshAll(idArg?.split(','));

  for (const l of log) {
    const x = l.extracted;
    console.log(`${l.id.padEnd(28)} ${l.outcome.padEnd(34)} ${x ? `vac=${x.vacancies} start=${x.applicationStart} dl=${x.applicationDeadline} exam=${x.examDate}` : ''}  ${l.source.slice(0, 70)}`);
  }
  console.log('');
  for (const [id, r] of Object.entries(records)) {
    const f = Object.entries(r.fields).map(([k, v]) => `${k}=${v!.value} (${v!.agreeing}/${v!.of})`).join(' ');
    console.log(`${r.status.toUpperCase().padEnd(13)} ${id.padEnd(28)} read ${r.sourcesRead}/${r.sourcesTried}  ${f}${r.disagreements.length ? '  DISAGREE: ' + r.disagreements.join(',') : ''}`);
  }

  // A broken AI provider (bad key/endpoint) must not look like a healthy quiet run.
  const llmFailures = log.filter((l) => /extract failed/.test(l.outcome));
  const anyRead = Object.values(records).some((r) => r.sourcesRead > 0);
  if (llmFailures.length > 0 && !anyRead) {
    console.error(`\nAI provider failed on every page (${llmFailures[0].outcome.slice(0, 160)}). Check the API secrets.`);
    process.exitCode = 1;
  }

  if (write) {
    const file = path.join(process.cwd(), 'src', 'lib', 'refreshed-data.json');
    const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : { records: {} };
    // An inconclusive run (too few readable sources) keeps the previous result untouched.
    const merged = { ...prev.records };
    let kept = 0;
    for (const [id, r] of Object.entries(records)) {
      if (r.status === 'partial' && merged[id]) {
        kept++;
        continue;
      }
      const before = merged[id];
      const held: string[] = [];
      // Safety gate: a big jump (>30% vacancies, or a date moving >45 days) is not applied on
      // third-party agreement alone. The old value stays and a human is told (see health.ts).
      // Once the official notice confirms the new value (verify-official), it goes through.
      if (before?.fields) {
        for (const [k, nv] of Object.entries(r.fields)) {
          const ov = before.fields[k];
          if (!ov || ov.value === nv!.value) continue;
          const officialSays = before.official?.fields?.[k]?.value;
          if (officialSays === nv!.value) continue;
          const big = typeof ov.value === 'number' ? Math.abs((nv!.value as number) - ov.value) / ov.value > 0.3 : Math.abs(new Date(nv!.value as string).getTime() - new Date(ov.value as string).getTime()) > 45 * 86_400_000;
          if (big) {
            held.push(`${k}: ${ov.value} → ${nv!.value}`);
            r.fields[k as keyof typeof r.fields] = ov;
          }
        }
      }
      merged[id] = { ...r, official: before?.official, ...(held.length ? { held } : {}) };
    }
    fs.writeFileSync(file, JSON.stringify({ ranAt, records: merged }, null, 2) + '\n');
    console.log(`\nwrote ${Object.keys(records).length - kept} records, kept ${kept} previous (inconclusive run) → src/lib/refreshed-data.json`);
  }
}
main();
