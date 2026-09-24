/**
 * Readable paragraphs for each section of an exam guide.
 *
 * Every sentence is either a verified fact (verified-facts.ts / the record's own dates) or plain
 * arithmetic on one (days between two dates, a share of a vacancy table, a percentage of the paper's
 * marks). Advice is phrased as advice ("it helps to…"), never as a claim about the exam. Nothing here
 * may introduce a new fact.
 */
import type { MockExam } from './mock-data';
import type { VerifiedFacts } from './verified-facts';
import { formatDay, examDateText } from './format-dates';
import { deriveLifecycle } from './lifecycle';

const DAY = 86_400_000;
const pct = (a: number, b: number) => Math.round((a / b) * 100);
const num = (s: string) => Number(String(s).replace(/,/g, ''));
const nf = (n: number) => n.toLocaleString('en-IN');
/** Calendar days between two ISO dates in India time, counting both ends. */
function daysInclusive(startIso: string, endIso: string): number {
  const d = (iso: string) => new Date(new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })).getTime();
  return Math.round((d(endIso) - d(startIso)) / DAY) + 1;
}
function daysUntil(iso: string, now: number): number {
  const d = (t: number) => new Date(new Date(t).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' })).getTime();
  return Math.round((d(new Date(iso).getTime()) - d(now)) / DAY);
}

export function datesProse(e: MockExam, now = Date.now()): string[] {
  const out: string[] = [];
  const life = deriveLifecycle(e, now);
  if (e.applicationStart && e.applicationDeadline) {
    const len = daysInclusive(e.applicationStart, e.applicationDeadline);
    const lead = `The application window runs from ${formatDay(e.applicationStart)} to ${formatDay(e.applicationDeadline)} — **${len} days** in all.`;
    if (life.stage === 'applications_open' && life.daysToDeadline !== undefined) {
      out.push(`${lead} It is open now, with **${life.daysToDeadline} day${life.daysToDeadline === 1 ? '' : 's'} left**. Don't leave it to the last day — portals can get slow close to a deadline.`);
    } else if (life.stage === 'upcoming') {
      out.push(`${lead} It has not opened yet.`);
    } else {
      out.push(lead.replace('runs from', 'ran from') + ' It has now closed.');
    }
  }
  if (e.examDate) {
    const away = daysUntil(e.examDate, now);
    if (e.mainsDate) {
      const gap = daysInclusive(e.examDate, e.mainsDate) - 1;
      out.push(`The exam is in two stages: Prelims on **${formatDay(e.examDate)}** and Mains on **${formatDay(e.mainsDate)}**, ${gap} days later.${daysUntil(e.mainsDate, now) > 0 ? ` Mains is **${daysUntil(e.mainsDate, now)} days away**.` : ''}`);
    } else if (away > 0) {
      out.push(`The exam is on **${examDateText(e)}** — ${away} day${away === 1 ? '' : 's'} from today.`);
    } else {
      out.push(`The exam date is **${examDateText(e)}**.`);
    }
  } else {
    out.push('We have not confirmed an exam date yet. This page is re-checked every day, so the date will appear here once independent sources or the official notice confirm it.');
  }
  return out;
}

export function vacancyProse(e: MockExam, f: VerifiedFacts): string[] {
  const out: string[] = [];
  const t = f.vacancyTable;
  if (!t) return out;
  const totalRow = t.rows.find((r) => /^total$/i.test(r[0]));
  const body = t.rows.filter((r) => r !== totalRow);
  const total = totalRow ? num(totalRow[1]) : e.vacancies ?? 0;
  if (!total) return out;

  if (t.head.length === 2) {
    // Category table: Category | Posts
    const parts = body.map((r) => `${r[0]} ${r[1]} (${pct(num(r[1]), total)}%)`);
    out.push(`Of the ${nf(total)} posts, the split by category is: ${parts.join(', ')}.`);
    const ur = body.find((r) => /^(ur|general|unreserved)$/i.test(r[0]));
    if (ur) out.push(`So about **${pct(num(ur[1]), total)}%** of posts are unreserved and the rest are reserved for specific categories.`);
  } else {
    // Post × category table with a Total column and a General column.
    const iTotal = t.head.findIndex((h) => /^total$/i.test(h));
    const iGen = t.head.findIndex((h) => /general|unreserved|^ur$/i.test(h));
    const biggest = [...body].sort((a, b) => num(b[iTotal]) - num(a[iTotal]))[0];
    out.push(`The largest group is ${biggest[0]} with **${biggest[iTotal]} of the ${nf(total)} posts** (${pct(num(biggest[iTotal]), total)}%).`);
    const female = body.filter((r) => /female/i.test(r[0])).reduce((n, r) => n + num(r[iTotal]), 0);
    if (female) out.push(`**${female} posts (${pct(female, total)}%)** are for women and **${total - female} (${pct(total - female, total)}%)** for men.`);
    if (iGen >= 0 && totalRow) out.push(`**${totalRow[iGen]} posts (${pct(num(totalRow[iGen]), total)}%)** are unreserved; the rest are reserved for SC, ST, OBC and EWS candidates.`);
  }
  return out;
}

export function eligibilityProse(f: VerifiedFacts): string[] {
  const out: string[] = [];
  if (f.eligibility) {
    // Notices with several post groups read "Post A: rules. Post B: rules." — one labelled line each.
    // Split only before a "Label:" so abbreviations like "B.Sc. (Hons)" stay intact.
    const parts = f.eligibility.replace(/\.$/, '').split(/\.\s+(?=[A-Z][^.:]{1,45}:\s)/);
    for (const part of parts) {
      const m = part.match(/^([A-Z][^.:]{1,45}):\s+(.*)$/);
      out.push(m ? `**${m[1]}:** ${m[2]}.` : `**Who can apply:** ${part}.`);
    }
  }
  if (f.age) out.push(`**Age:** ${f.age.replace(/\.$/, '')}.`);
  out.push('The checker below compares these rules with your Career Passport. Anything it cannot confirm is marked **Need details** — it never marks you eligible on a guess.');
  return out;
}

export function feeProse(f: VerifiedFacts): string[] {
  if (!f.fee) return [];
  if (f.fee.length === 1) return [`${f.fee[0].replace(/\.$/, '')}.`];
  return ['The fee depends on your category. Check which category you fall under before paying — concessions are tied to the certificates you hold, and the fee is paid online on the official portal only.'];
}

export function patternProse(f: VerifiedFacts): string[] {
  const out: string[] = [];
  const s = f.scoring;
  // The pattern bullets already state questions and minutes; only repeat timing when they are absent.
  for (const t of f.pattern ? [] : s?.timing ?? []) {
    out.push(`${t.label}: **${t.questions} questions in ${t.minutes} minutes**.`);
  }
  if (f.qualifyingTable && f.totalMarks) {
    const parts = f.qualifyingTable.map((q) => `**${Math.round((q.pct / 100) * f.totalMarks!)} marks** for ${q.group}`);
    out.push(`To qualify on a ${f.totalMarks}-mark paper you need at least ${parts.slice(0, -1).join(', ')}${parts.length > 1 ? ' and ' : ''}${parts[parts.length - 1]}. That is only the minimum: clearing it does not by itself guarantee selection.`);
  }
  return out.length ? [out.join(' ')] : [];
}

export function syllabusProse(f: VerifiedFacts): string[] {
  if (!f.syllabus) return [];
  const nursing = f.syllabus.find((x) => /nurs|professional/i.test(x.section));
  const count = nursing ? nursing.topics.split(/,\s*/).length : 0;
  const first = nursing?.topics.split(/,\s*/)[0];
  const last = nursing?.topics.split(/,\s*/).pop();
  return [
    `The official notice splits the syllabus into ${f.syllabus.length} part${f.syllabus.length === 1 ? '' : 's'}.${nursing ? ` The nursing part lists **${count} subjects**, from ${first} to ${last}.` : ''} The full list, exactly as printed in the notice, is below.`,
  ];
}

export function salaryProse(f: VerifiedFacts): string[] {
  if (!f.pay) return [];
  if (/consolidated/i.test(f.pay)) {
    const amount = f.pay.match(/₹[\d,]+/)?.[0];
    return [`This is a contract post paid a fixed consolidated amount${amount ? ` of **${amount} a month**` : ''}. No separate allowances are paid on top of it.`];
  }
  return [
    `**${f.pay.replace(/\.$/, '')}** is the official pay scale for the post. The basic pay is only the starting figure: allowances are added on top, and how much they come to depends on the employer's rules and where you are posted, so your monthly salary will be higher than the basic figure.`,
  ];
}

export function applyProse(e: MockExam): string[] {
  return [
    'Applications are accepted online on the official portal only. Before you start, it helps to keep scans of your photo and signature, your nursing qualification and council registration certificates, and any category certificate you are claiming, ready — the notice lists exactly what is required.',
    'After you submit, save or print the confirmation page and your payment receipt. They are your proof if anything goes wrong later.',
  ];
}
