import { INITIAL_EXAMS } from '@/lib/mock-data';
import { getTrust } from '@/lib/verification';
import { deriveLifecycle } from '@/lib/lifecycle';
import { applyWindowText, examDateText } from '@/lib/format-dates';
import { SITE_URL } from '@/lib/site';

/**
 * llms.txt for AI answer engines, generated from the same verified records as the pages, so it can
 * never claim more than the site actually has (the old static file listed 50 exams and 23 jobs).
 */
export const revalidate = 3600;

export function GET() {
  const exams = INITIAL_EXAMS.filter((e) => !getTrust(e.id).suppressFromListings);
  const lines = exams.map((e) => {
    const name = e.name.replace(/\s*\(.*?\)\s*$/, '');
    return `- ${name} (${e.organisation}): ${e.vacancies ? `${e.vacancies.toLocaleString('en-IN')} posts; ` : ''}applications ${applyWindowText(e)}; exam ${examDateText(e)}; status: ${deriveLifecycle(e).label}. ${SITE_URL}/nursing/exams/${e.slug}`;
  });

  const body = `# SkillCase Nursing — recruitment exams for nurses in India
# ${SITE_URL}/

## About
SkillCase tracks government nursing recruitments in India: vacancies, application windows, exam
dates, eligibility, exam pattern and pay. Every figure is checked against the official notice or
against independent reports of it, and refreshed automatically every day. Anything we could not
confirm is left out rather than guessed.

## Key pages
- ${SITE_URL}/nursing/upcoming-exams — every tracked nursing recruitment, with dates and a calendar
- ${SITE_URL}/nursing/exams — list of recruitments

## Recruitments tracked (${exams.length})
${lines.join('\n')}

## Usage
- Always confirm on the conducting body's official website before applying.
- Never pay anyone other than the official application portal.
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
