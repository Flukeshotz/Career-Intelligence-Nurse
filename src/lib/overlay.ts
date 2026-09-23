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
import { applyWindowText, examDateText } from './format-dates';
import { VERIFIED_FACTS } from './verified-facts';

interface FieldConsensus {
  value: number | string;
  agreeing: number;
}
interface OfficialRecord {
  status: 'verified' | 'partial' | 'unreadable';
  fields?: Record<string, { value: number | string }>;
}
interface RefreshRecord {
  status: 'consensus' | 'partial' | 'no_consensus';
  /** Values found word-for-word in the official notice. These outrank cross-source consensus. */
  official?: OfficialRecord;
  fields?: {
    vacancies?: FieldConsensus;
    applicationStart?: FieldConsensus;
    applicationDeadline?: FieldConsensus;
    examDate?: FieldConsensus;
    examEndDate?: FieldConsensus;
  };
}
const RECORDS = (REFRESHED as unknown as { records: Record<string, RefreshRecord> }).records;


/**
 * The "Important dates" prose is rebuilt from the same structured fields the page shows, so a value
 * corrected by the refresher can never disagree with the paragraph next to it. Tense-neutral on
 * purpose: the live status label carries "open / closed", and this text is built once per deploy.
 */
function datesParagraph(e: MockExam): string {
  const parts: string[] = [];
  if (e.applicationDeadline) parts.push(`Applications: ${applyWindowText(e)}.`);
  parts.push(e.examDate ? `Exam: ${examDateText(e)}.` : 'Exam date not confirmed yet.');
  return parts.join(' ');
}

/**
 * The description is REBUILT from verified facts only. The hand-written descriptions stored in
 * mock-data.ts contained unverified details (council names, admit-card dates, a GNM route MPESB does
 * not allow), so none of that text is used any more.
 */
function buildDescription(e: MockExam): string {
  const f = VERIFIED_FACTS[e.id] ?? {};
  const posts = e.vacancies ? `${e.vacancies.toLocaleString('en-IN')} posts` : 'posts as per the official notification';
  return [
    `What is this?\n${e.organisation}: ${posts}.${f.notice ? ` ${f.notice}.` : ''}`,
    `Who can apply?\n${f.eligibility ? `${f.eligibility}.` : 'See the official notification.'}${f.age ? ` Age: ${f.age}.` : ''}`,
    `Important dates:\n${datesParagraph(e)}`,
    `What happens next?\n${f.selection ? (/[.]$/.test(f.selection) ? f.selection : `${f.selection}.`) : 'See the official notification.'}`,
  ].join('\n\n');
}

export function applyExamOverlay(exams: MockExam[]): MockExam[] {
  return exams.map((e) => {
    const rec = RECORDS[e.id];
    // The official notice, where it was readable, wins over agreement between third-party reports.
    const f = { ...(rec?.fields ?? {}), ...(rec?.official?.fields ?? {}) } as NonNullable<RefreshRecord['fields']>;
    if (!rec?.fields && !rec?.official?.fields) return { ...e, descriptionSimple: buildDescription(e) };
    const next = { ...e };
    if (typeof f.vacancies?.value === 'number') next.vacancies = f.vacancies.value;
    if (typeof f.applicationStart?.value === 'string') next.applicationStart = `${f.applicationStart.value}T00:00:00+05:30`;
    if (typeof f.applicationDeadline?.value === 'string') next.applicationDeadline = `${f.applicationDeadline.value}T23:59:59+05:30`;
    if (typeof f.examDate?.value === 'string') next.examDate = `${f.examDate.value}T09:00:00+05:30`;
    if (typeof f.examEndDate?.value === 'string') next.examEndDate = `${f.examEndDate.value}T09:00:00+05:30`;
    next.descriptionSimple = buildDescription(next);
    return next;
  });
}
