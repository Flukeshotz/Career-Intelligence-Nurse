/**
 * Applies the refresher's cross-source consensus over the stored records, at import time.
 *
 * Dates are India dates: a deadline of "19 Aug" means end of day 19 Aug IST (23:59:59+05:30), not UTC.
 * Storing it as 23:59:59Z made every deadline read as the NEXT day in India and stay open ~5h too long.
 * A field is overridden only when at least two independent sources agree on it (enforced by the
 * refresher, not here). Everything else keeps its stored value.
 */
import type { MockExam } from './mock-data';
import REFRESHED from './refreshed-data.json';

interface FieldConsensus {
  value: number | string;
  agreeing: number;
}
interface RefreshRecord {
  status: 'consensus' | 'partial' | 'no_consensus';
  fields?: {
    vacancies?: FieldConsensus;
    applicationStart?: FieldConsensus;
    applicationDeadline?: FieldConsensus;
    examDate?: FieldConsensus;
  };
}
const RECORDS = (REFRESHED as unknown as { records: Record<string, RefreshRecord> }).records;

const IST = { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' } as const;
const fmt = (iso: string) => new Date(iso).toLocaleDateString('en-IN', IST);

/** Dates verified from sources but which are not part of the four refreshed fields. */
const EXTRA_DATES: Record<string, string> = {
  'exam-norcet-2026': 'Mains CBT on 30 September 2026.',
};

/**
 * The "Important dates" prose is rebuilt from the same structured fields the page shows, so a value
 * corrected by the refresher can never disagree with the paragraph next to it. Tense-neutral on
 * purpose: the live status label carries "open / closed", and this text is built once per deploy.
 */
function datesParagraph(e: MockExam): string {
  const parts: string[] = [];
  if (e.applicationStart && e.applicationDeadline) parts.push(`Applications ${fmt(e.applicationStart)} to ${fmt(e.applicationDeadline)}.`);
  else if (e.applicationDeadline) parts.push(`Last date to apply: ${fmt(e.applicationDeadline)}.`);
  if (e.examDate) parts.push(`Exam on ${fmt(e.examDate)}.`);
  else parts.push('Exam date not announced yet.');
  if (EXTRA_DATES[e.id]) parts.push(EXTRA_DATES[e.id]);
  return parts.join(' ');
}

function rewriteDescription(e: MockExam): string {
  const d = e.descriptionSimple;
  if (!d) return d;
  let out = d.replace(/(Important dates:\n)[\s\S]*?(\n\nWhat do you need\?)/, `$1${datesParagraph(e)}$2`);
  // Keep the headline post count in step with the structured field.
  if (e.vacancies) out = out.replace(/([\d,]{2,7})( (?:Nursing Officer |nursing |Nursing Superintendent |contract Staff Nurse )?posts?\b)/, `${e.vacancies.toLocaleString('en-IN')}$2`);
  return out;
}

export function applyExamOverlay(exams: MockExam[]): MockExam[] {
  return exams.map((e) => {
    const f = RECORDS[e.id]?.fields;
    if (!f) return e;
    const next = { ...e };
    if (typeof f.vacancies?.value === 'number') next.vacancies = f.vacancies.value;
    if (typeof f.applicationStart?.value === 'string') next.applicationStart = `${f.applicationStart.value}T00:00:00+05:30`;
    if (typeof f.applicationDeadline?.value === 'string') next.applicationDeadline = `${f.applicationDeadline.value}T23:59:59+05:30`;
    if (typeof f.examDate?.value === 'string') next.examDate = `${f.examDate.value}T09:00:00+05:30`;
    next.descriptionSimple = rewriteDescription(next);
    return next;
  });
}
