import * as fs from 'fs';
import * as path from 'path';
import { config } from 'dotenv';
import { OFFICIAL_DOCS } from '../src/refresher/official-registry';
import { verifyOfficial } from '../src/refresher/official';

config({ path: '.env.local' });
config();

// Usage: npx tsx scripts/verify-official.ts [--write] [id,id]
// Reads each record's official notice and stores ONLY values found verbatim in it.
async function main() {
  const write = process.argv.includes('--write');
  const idArg = process.argv.slice(2).find((a) => !a.startsWith('--'));
  const ids = Object.keys(OFFICIAL_DOCS).filter((id) => !idArg || idArg.split(',').includes(id));
  const results: Record<string, Awaited<ReturnType<typeof verifyOfficial>>> = {};

  for (const id of ids) {
    const r = await verifyOfficial(id).catch((e) => ({ status: 'unreadable' as const, checkedAt: new Date().toISOString().slice(0, 10), url: OFFICIAL_DOCS[id].url, fields: {}, rejected: [], note: String(e).slice(0, 120) }));
    results[id] = r;
    const f = Object.entries(r?.fields ?? {}).map(([k, v]) => `${k}=${(v as { value: unknown }).value}`).join(' ');
    console.log(`${(r?.status ?? '-').toUpperCase().padEnd(10)} ${id.padEnd(28)} ${f}${r?.rejected.length ? '  REJECTED(not in document): ' + r.rejected.join(',') : ''}${r?.note ? '  ' + r.note : ''}`);
  }

  if (write) {
    const file = path.join(process.cwd(), 'src', 'lib', 'refreshed-data.json');
    const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
    for (const [id, r] of Object.entries(results)) {
      if (!r) continue;
      const rec = data.records[id] ?? (data.records[id] = { status: 'partial', checkedAt: r.checkedAt, fields: {}, disagreements: [], sourcesRead: 0, sourcesTried: 0 });
      const prev = rec.official;
      // An unreadable run must not erase an earlier verified result.
      if (r.status === 'unreadable' && prev) continue;
      rec.official = r;
    }
    fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
    console.log('\nwrote official results → src/lib/refreshed-data.json');
  }
}
main();
