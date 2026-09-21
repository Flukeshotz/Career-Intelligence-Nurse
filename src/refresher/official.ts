/**
 * Official-document verification.
 *
 * The strongest evidence SkillCase can have is the notice itself. For each record with a known
 * official document this reads it, asks the model for each value AND the exact sentence it came
 * from, then checks in plain code that (1) the sentence really occurs in the document and (2) the
 * value really occurs in that sentence. A value that fails either check is discarded, so a model
 * mistake cannot reach the site. Values that pass are stored with their evidence.
 */
import { INITIAL_EXAMS } from '../lib/mock-data';
import { VERIFIED_FACTS } from '../lib/verified-facts';
import { dateForms, vacancyForms } from '../lib/source-watch';
import { OFFICIAL_DOCS } from './official-registry';
import { fetchPageText } from './fetch-text';
import { chatJson } from './llm';

export type OfficialField = 'vacancies' | 'applicationStart' | 'applicationDeadline' | 'examDate' | 'examEndDate';
const FIELDS: OfficialField[] = ['vacancies', 'applicationStart', 'applicationDeadline', 'examDate', 'examEndDate'];

export interface OfficialValue {
  value: number | string;
  quote: string;
}
export interface OfficialRecord {
  status: 'verified' | 'partial' | 'unreadable';
  checkedAt: string;
  url: string;
  fields: Partial<Record<OfficialField, OfficialValue>>;
  /** Fields the model gave but that could not be found in the document — discarded. */
  rejected: OfficialField[];
  note?: string;
  /** Numbers in our hand-written text (pay, age, pattern…) that do NOT appear in the notice. */
  factChecks?: Array<{ fact: string; text: string; missing: string[] }>;
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

/** Keep only the parts of a long notice that can hold these facts. */
export function excerpt(text: string, hints: string[], max = 9_000): string {
  const keys = [/opening date|closing date|last date|start(ing)? date|commencement|date of (publication|advertisement)/gi, /vacanc|no\. of posts|total posts|number of posts/gi, /examination date|exam date|date of (the )?(exam|cbt|test)/gi, ...hints.map((h) => new RegExp(h.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'gi'))];
  const spans: Array<[number, number]> = [];
  for (const re of keys) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      spans.push([Math.max(0, m.index - 250), Math.min(text.length, m.index + 450)]);
      if (m[0].length === 0) re.lastIndex++;
    }
  }
  spans.sort((a, b) => a[0] - b[0]);
  const merged: Array<[number, number]> = [];
  for (const s of spans) {
    const last = merged[merged.length - 1];
    if (last && s[0] <= last[1]) last[1] = Math.max(last[1], s[1]);
    else merged.push([...s]);
  }
  let out = '';
  for (const [a, b] of merged) {
    if (out.length + (b - a) > max) break;
    out += text.slice(a, b) + ' … ';
  }
  return out || text.slice(0, max);
}

const SYSTEM = `You read an OFFICIAL government recruitment notice and report facts about ONE recruitment.
Return JSON only: {"matches": boolean, "vacancies": {"value": number, "quote": string}|null, "applicationStart": {"value": "YYYY-MM-DD", "quote": string}|null, "applicationDeadline": {...}|null, "examDate": {...}|null, "examEndDate": {...}|null}
Rules:
- "quote" MUST be copied word-for-word from the text (one line or sentence, at most 200 characters) and MUST contain the value as printed there.
- Use null for anything the document does not state. NEVER guess or compute. Do not add numbers together.
- vacancies: the number of NURSING posts for the named recruitment only (not the notice's grand total unless that is the nursing figure).
- applicationDeadline is the last date to apply. examDate is the first exam day; null if "to be notified".
- "matches" is false if the document is about another recruitment, body or year.`;

function ground(f: OfficialField, v: number | string, quote: string, docNorm: string): boolean {
  if (quote.length < 6 || !docNorm.includes(norm(quote))) return false;
  const q = quote.toLowerCase();
  if (f === 'vacancies') {
    if (typeof v !== 'number') return false;
    return vacancyForms(v).some((form) => new RegExp(`(^|[^0-9,])${form}([^0-9]|$)`).test(q));
  }
  if (typeof v !== 'string') return false;
  return dateForms(v).some((form) => q.includes(form));
}

/** Every figure in a sentence must occur in the notice; returns the ones that do not. */
export function missingNumbers(sentence: string, docText: string): string[] {
  const doc = docText.replace(/(\d),(?=\d)/g, '$1');
  const nums = (sentence.replace(/(\d),(?=\d)/g, '$1').match(/\d+(?:\.\d+)?/g) ?? []).filter((n) => n.length >= 2 && !/^20\d\d$/.test(n));
  return Array.from(new Set(nums)).filter((n) => !new RegExp(`(^|[^0-9.])${n.replace('.', '\\.')}([^0-9]|$)`).test(doc));
}

function checkFacts(id: string, docText: string): NonNullable<OfficialRecord['factChecks']> {
  const f = VERIFIED_FACTS[id];
  if (!f) return [];
  const lines: Array<[string, string]> = [];
  if (f.pay) lines.push(['pay', f.pay]);
  if (f.age) lines.push(['age', f.age]);
  (f.pattern ?? []).forEach((l, i) => lines.push([`pattern ${i + 1}`, l]));
  return lines.map(([fact, text]) => ({ fact, text, missing: missingNumbers(text, docText) }));
}

export async function verifyOfficial(id: string): Promise<OfficialRecord | null> {
  const doc = OFFICIAL_DOCS[id];
  const url = doc?.url;
  const exam = INITIAL_EXAMS.find((e) => e.id === id);
  if (!doc || !exam) return null;
  const checkedAt = new Date().toISOString().slice(0, 10);

  const page = await fetchPageText(url);
  if (!page.ok) return { status: 'unreadable', checkedAt, url, fields: {}, rejected: [], note: page.error };

  const hints = [exam.name.split('(')[0].trim(), exam.organisation.split('(')[0].trim(), 'Nursing'];
  const raw = await chatJson(SYSTEM, `Recruitment: ${exam.name}\nBody: ${exam.organisation}\n${doc.note ? `Note: ${doc.note}\n` : ''}\nDOCUMENT TEXT:\n${excerpt(page.text, hints)}`);
  let j: Record<string, unknown> = {};
  try {
    j = JSON.parse(raw || '{}');
  } catch {
    return { status: 'unreadable', checkedAt, url, fields: {}, rejected: [], note: 'model reply was not JSON' };
  }
  if (j.matches !== true) return { status: 'partial', checkedAt, url, fields: {}, rejected: [], note: 'document does not match this recruitment' };

  const docNorm = norm(page.text);
  const fields: OfficialRecord['fields'] = {};
  const rejected: OfficialField[] = [];
  for (const f of FIELDS) {
    const c = j[f] as { value?: unknown; quote?: unknown } | null | undefined;
    if (!c || c.value == null) continue;
    const value = f === 'vacancies' ? Number(c.value) : String(c.value);
    if (typeof c.quote === 'string' && (f === 'vacancies' ? Number.isFinite(value as number) : /^\d{4}-\d{2}-\d{2}$/.test(value as string)) && ground(f, value, c.quote, docNorm)) {
      fields[f] = { value, quote: c.quote.trim() };
    } else rejected.push(f);
  }
  // A record counts as verified against the notice only when the two figures that hurt most if wrong are grounded.
  const status = fields.vacancies && fields.applicationDeadline ? 'verified' : 'partial';
  return { status, checkedAt, url, fields, rejected, factChecks: fields.applicationDeadline ? checkFacts(id, page.text) : [] };
}
