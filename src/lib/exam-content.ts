/**
 * Builds the article sections for an exam page (overview table, dates table, FAQs) from ONLY:
 * the record's own dates/vacancies, and verified-facts.ts. A row or FAQ with no verified answer is
 * not generated — there is no filler and no guessing.
 */
import type { MockExam } from './mock-data';
import { VERIFIED_FACTS } from './verified-facts';
import { applyWindowText, examDateText, formatDay } from './format-dates';
import { deriveLifecycle } from './lifecycle';

export interface Row {
  label: string;
  value: string;
  /** Optional Google Calendar link for a future date. */
  calendarUrl?: string;
}

/** Google Calendar "add event" link (all-day). Only offered for dates that are still ahead. */
export function googleCalendarUrl(title: string, startIso: string, endIso?: string): string {
  const ymd = (iso: string) => {
    const d = new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' }); // YYYY-MM-DD
    return d.replace(/-/g, '');
  };
  const start = ymd(startIso);
  // All-day events use an exclusive end date, so the day after the last day.
  const lastDay = new Date(new Date(endIso ?? startIso).getTime() + 86_400_000);
  const end = ymd(lastDay.toISOString());
  const q = new URLSearchParams({ action: 'TEMPLATE', text: title, dates: `${start}/${end}` });
  return `https://calendar.google.com/calendar/render?${q.toString()}`;
}

const future = (iso?: string) => !!iso && new Date(iso).getTime() > Date.now();

export function overviewRows(e: MockExam): Row[] {
  const f = VERIFIED_FACTS[e.id] ?? {};
  const rows: Row[] = [
    { label: 'Conducting body', value: e.organisation },
    { label: 'Recruitment', value: e.name },
    { label: 'Vacancies', value: e.vacancies ? `${e.vacancies.toLocaleString('en-IN')} posts` : 'See official notification' },
    { label: 'Applications', value: applyWindowText(e) },
    { label: 'Exam date', value: examDateText(e) },
  ];
  if (f.eligibility) rows.push({ label: 'Who can apply', value: f.eligibility });
  if (f.age) rows.push({ label: 'Age limit', value: f.age });
  if (f.pay) rows.push({ label: 'Pay', value: f.pay });
  if (f.selection) rows.push({ label: 'Selection', value: f.selection });
  rows.push({ label: 'Status now', value: deriveLifecycle(e).label });
  return rows;
}

export function importantDates(e: MockExam): Row[] {
  const rows: Row[] = [];
  if (e.applicationStart) {
    rows.push({ label: 'Applications open', value: formatDay(e.applicationStart) });
  }
  if (e.applicationDeadline) {
    rows.push({
      label: 'Last date to apply',
      value: formatDay(e.applicationDeadline),
      calendarUrl: future(e.applicationDeadline) ? googleCalendarUrl(`Last date: ${e.name}`, e.applicationDeadline) : undefined,
    });
  }
  if (e.examDate) {
    rows.push({
      label: e.mainsDate ? 'Prelims exam' : 'Exam',
      value: examDateText({ ...e, mainsDate: undefined }),
      calendarUrl: future(e.examEndDate ?? e.examDate) ? googleCalendarUrl(`Exam: ${e.name}`, e.examDate, e.examEndDate) : undefined,
    });
  } else {
    rows.push({ label: 'Exam', value: 'Not announced yet' });
  }
  if (e.mainsDate) {
    rows.push({
      label: 'Mains exam',
      value: formatDay(e.mainsDate),
      calendarUrl: future(e.mainsDate) ? googleCalendarUrl(`Mains: ${e.name}`, e.mainsDate) : undefined,
    });
  }
  rows.push({ label: 'Admit card', value: 'Not announced yet' });
  rows.push({ label: 'Result', value: 'Not announced yet' });
  return rows;
}

export interface Faq {
  q: string;
  a: string;
}

export function faqs(e: MockExam): Faq[] {
  const f = VERIFIED_FACTS[e.id] ?? {};
  const short = e.name.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\s+/g, ' ').trim();
  const out: Faq[] = [];

  if (e.vacancies) out.push({ q: `How many vacancies are there in ${short}?`, a: `${e.vacancies.toLocaleString('en-IN')} posts.${f.posts ? ` ${f.posts}.` : ''}` });

  if (e.applicationDeadline) {
    const closed = !future(e.applicationDeadline);
    out.push({
      q: `What is the last date to apply for ${short}?`,
      a: closed
        ? `Applications closed on ${formatDay(e.applicationDeadline)}. The window ran ${applyWindowText(e)}.`
        : `The last date to apply is ${formatDay(e.applicationDeadline)}. The application window is ${applyWindowText(e)}.`,
    });
  }

  out.push({
    q: `When is the ${short} exam?`,
    a: e.examDate ? `${examDateText(e)}.` : 'The exam date has not been announced yet. Check the official website for updates.',
  });

  if (f.eligibility) out.push({ q: `Who can apply for ${short}?`, a: `${f.eligibility}.` });
  if (f.age) out.push({ q: `What is the age limit for ${short}?`, a: `${f.age}.` });
  if (f.pay) out.push({ q: `What is the salary for ${short}?`, a: `${f.pay}. This is the official pay scale, not take-home pay.` });
  if (f.pattern) out.push({ q: `What is the exam pattern for ${short}?`, a: f.pattern.join(' ') });
  if (f.selection) out.push({ q: `How are candidates selected for ${short}?`, a: `${f.selection}.` });

  out.push({
    q: `Where do I apply for ${short}?`,
    a: 'Only on the official website of the conducting body. Read the official notification first, and never pay anyone other than the official application portal.',
  });
  return out;
}
