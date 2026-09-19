/**
 * One place that turns a record's dates into the exact wording shown to nurses, in India time.
 * A two-day exam reads "22–23 Sept 2026", not "22 Sept"; a two-stage exam shows both stages; an
 * open-ended exam ("from 15 May") says so; an unannounced one says so instead of staying blank.
 */
const TZ = 'Asia/Kolkata';

interface DateFields {
  applicationStart?: string;
  applicationDeadline?: string;
  examDate?: string;
  examEndDate?: string;
  mainsDate?: string;
  examDateOpenEnded?: boolean;
}

const dayNum = (iso: string) => Number(new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', timeZone: TZ }));
const monthOf = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { month: 'short', timeZone: TZ });
const yearOf = (iso: string) => new Date(iso).toLocaleDateString('en-IN', { year: 'numeric', timeZone: TZ });

export function formatDay(iso: string, withYear = true): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', ...(withYear ? { year: 'numeric' } : {}), timeZone: TZ });
}

export function formatRange(startIso: string, endIso: string): string {
  const sameYear = yearOf(startIso) === yearOf(endIso);
  const sameMonth = sameYear && monthOf(startIso) === monthOf(endIso);
  if (sameMonth) return `${dayNum(startIso)}–${dayNum(endIso)} ${monthOf(startIso)} ${yearOf(startIso)}`;
  return `${formatDay(startIso, !sameYear)} – ${formatDay(endIso)}`;
}

export function examDateText(e: DateFields): string {
  if (!e.examDate) return 'Not announced yet';
  if (e.mainsDate) return `Prelims ${formatDay(e.examDate, false)} · Mains ${formatDay(e.mainsDate)}`;
  if (e.examEndDate && e.examEndDate !== e.examDate) return formatRange(e.examDate, e.examEndDate);
  if (e.examDateOpenEnded) return `From ${formatDay(e.examDate)}`;
  return formatDay(e.examDate);
}

export function applyWindowText(e: DateFields): string {
  if (e.applicationStart && e.applicationDeadline) return formatRange(e.applicationStart, e.applicationDeadline);
  if (e.applicationDeadline) return `Until ${formatDay(e.applicationDeadline)}`;
  return 'See notice';
}
