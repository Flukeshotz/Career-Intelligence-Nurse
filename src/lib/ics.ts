/**
 * Builds an .ics calendar (all-day events) from verified dates, as a data: URL a link can download.
 * Used by the blog sidebar's download card — a real file, not a promised PDF.
 */
import type { MockExam } from './mock-data';

interface IcsEvent {
  title: string;
  startIso: string;
  endIso?: string;
}

const ymd = (iso: string) => new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' }).replace(/-/g, '');
const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/[,;]/g, (m) => `\\${m}`).replace(/\n/g, '\\n');

export function buildIcs(events: IcsEvent[]): string {
  const stamp = new Date().toISOString().replace(/[-:]/g, '').replace(/\.\d+/, '');
  const body = events.map((e, i) => {
    const end = new Date(new Date(e.endIso ?? e.startIso).getTime() + 86_400_000).toISOString();
    return ['BEGIN:VEVENT', `UID:skillcase-${ymd(e.startIso)}-${i}@skillcase`, `DTSTAMP:${stamp}`, `DTSTART;VALUE=DATE:${ymd(e.startIso)}`, `DTEND;VALUE=DATE:${ymd(end)}`, `SUMMARY:${esc(e.title)}`, 'END:VEVENT'].join('\r\n');
  });
  return ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//SkillCase//Nursing dates//EN', 'CALSCALE:GREGORIAN', ...body, 'END:VCALENDAR'].join('\r\n');
}

export function icsDataUrl(events: IcsEvent[]): string {
  return `data:text/calendar;charset=utf-8,${encodeURIComponent(buildIcs(events))}`;
}

/** The dates of one exam that are still ahead. */
export function upcomingExamEvents(e: MockExam, now = Date.now()): IcsEvent[] {
  const name = e.name.replace(/\s*\(.*?\)\s*$/, '');
  const out: IcsEvent[] = [];
  if (e.applicationDeadline && +new Date(e.applicationDeadline) > now) out.push({ title: `Last date to apply: ${name}`, startIso: e.applicationDeadline });
  if (e.examDate && +new Date(e.examEndDate ?? e.examDate) > now) out.push({ title: `${e.mainsDate ? 'Prelims' : 'Exam'}: ${name}`, startIso: e.examDate, endIso: e.examEndDate });
  if (e.mainsDate && +new Date(e.mainsDate) > now) out.push({ title: `Mains: ${name}`, startIso: e.mainsDate });
  return out;
}
