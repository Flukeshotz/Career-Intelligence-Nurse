/**
 * Auto info refresher.
 *
 * For every record, re-reads each of its citations, extracts vacancies / start / deadline / exam date
 * from each page, and accepts a value ONLY when at least two independent sources agree on it.
 * That consensus rule is what makes automatic publishing safe: one wrong or stale page cannot change
 * what nurses see. A field the sources disagree on is left at its stored value and the record is
 * marked `no_consensus`, which removes its "confirmed" badge until sources agree again.
 *
 * It refreshes the records SkillCase already tracks. Discovering a brand-new recruitment is a
 * separate step: add the record and its citations, and the refresher takes it from there.
 */
import { INITIAL_EXAMS } from '../lib/mock-data';
import { REFRESH_SOURCES, Citation } from './registry';
import { fetchPageText } from './fetch-text';
import { extractFacts, Extracted } from './extract';

type FieldKey = 'vacancies' | 'applicationStart' | 'applicationDeadline' | 'examDate' | 'examEndDate';
const FIELDS: FieldKey[] = ['vacancies', 'applicationStart', 'applicationDeadline', 'examDate', 'examEndDate'];

export interface FieldConsensus {
  value: number | string;
  agreeing: number;
  of: number;
}

export interface RefreshRecord {
  status: 'consensus' | 'partial' | 'no_consensus';
  checkedAt: string;
  fields: Partial<Record<FieldKey, FieldConsensus>>;
  disagreements: FieldKey[];
  sourcesRead: number;
  sourcesTried: number;
}

export interface RefreshLog {
  id: string;
  source: string;
  outcome: string;
  extracted?: Extracted | null;
}

function decide(values: Array<number | string | null>): { value?: number | string; agreeing: number; of: number; conflict: boolean } {
  const given = values.filter((v): v is number | string => v !== null);
  if (given.length === 0) return { agreeing: 0, of: 0, conflict: false };
  const tally = new Map<number | string, number>();
  for (const v of given) tally.set(v, (tally.get(v) ?? 0) + 1);
  const [top, n] = Array.from(tally.entries()).sort((a, b) => b[1] - a[1])[0];
  // Need 2+ agreeing sources AND a strict majority of those that answered.
  if (n >= 2 && n > given.length / 2) return { value: top, agreeing: n, of: given.length, conflict: false };
  return { agreeing: n, of: given.length, conflict: given.length >= 2 };
}

export async function refreshRecord(id: string, log: RefreshLog[] = []): Promise<RefreshRecord | null> {
  const exam = INITIAL_EXAMS.find((e) => e.id === id);
  const sources = REFRESH_SOURCES[id];
  if (!exam || !sources || sources.length === 0) return null;

  const hints = [exam.organisation.split('(')[0].trim(), exam.name.split('(')[0].trim()];
  const answers: Array<{ src: Citation; facts: Extracted }> = [];

  for (const src of sources) {
    const page = await fetchPageText(src.url);
    if (!page.ok) {
      log.push({ id, source: src.url, outcome: `unreadable: ${page.error}` });
      continue;
    }
    const facts = await extractFacts({ name: exam.name, organisation: exam.organisation, hints }, page.text).catch((e) => {
      log.push({ id, source: src.url, outcome: `extract failed: ${e instanceof Error ? e.message : e}` });
      return null;
    });
    if (!facts) continue;
    log.push({ id, source: src.url, outcome: facts.matches ? 'read' : 'page is about a different recruitment', extracted: facts });
    console.log(`  ${id} ${facts.matches ? 'read' : 'different recruitment'} vac=${facts.vacancies} dl=${facts.applicationDeadline} <- ${src.url.slice(0, 60)}`);
    if (facts.matches) answers.push({ src, facts });
  }

  const fields: RefreshRecord['fields'] = {};
  const disagreements: FieldKey[] = [];

  for (const f of FIELDS) {
    const d = decide(answers.map((a) => a.facts[f]));
    if (d.value !== undefined) {
      fields[f] = { value: d.value, agreeing: d.agreeing, of: d.of };
    } else if (d.conflict) {
      disagreements.push(f);
    }
  }

  const enough = answers.length >= 2 && fields.vacancies !== undefined && fields.applicationDeadline !== undefined;
  // A conflict needs enough independent readers to mean something. With fewer than 3 readable sources
  // (others may be blocked, e.g. HTTP 403 from datacenter IPs) a 1-vs-1 split is just "not enough
  // evidence" and must not overwrite an earlier result.
  const MIN_READERS_FOR_CONFLICT = 3;
  const status: RefreshRecord['status'] =
    disagreements.length > 0 && answers.length >= MIN_READERS_FOR_CONFLICT ? 'no_consensus' : disagreements.length === 0 && enough ? 'consensus' : 'partial';

  return {
    status,
    checkedAt: new Date().toISOString().slice(0, 10),
    fields,
    disagreements,
    sourcesRead: answers.length,
    sourcesTried: sources.length,
  };
}

export async function refreshAll(ids?: string[]) {
  const log: RefreshLog[] = [];
  const records: Record<string, RefreshRecord> = {};
  const targets = Object.keys(REFRESH_SOURCES).filter((id) => !ids || ids.includes(id));
  for (const id of targets) {
    const r = await refreshRecord(id, log);
    if (r) records[id] = r;
  }
  return { ranAt: new Date().toISOString(), records, log };
}
