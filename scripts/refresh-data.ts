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

  if (write) {
    const file = path.join(process.cwd(), 'src', 'lib', 'refreshed-data.json');
    const prev = fs.existsSync(file) ? JSON.parse(fs.readFileSync(file, 'utf-8')) : { records: {} };
    fs.writeFileSync(file, JSON.stringify({ ranAt, records: { ...prev.records, ...records } }, null, 2) + '\n');
    console.log(`\nwrote ${Object.keys(records).length} records → src/lib/refreshed-data.json`);
  }
}
main();
