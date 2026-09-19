import Groq from 'groq-sdk';

export interface Extracted {
  matches: boolean; // does this page describe THIS recruitment
  vacancies: number | null;
  applicationStart: string | null; // YYYY-MM-DD
  applicationDeadline: string | null;
  examDate: string | null;
}

const MODEL = process.env.GROQ_MODEL || 'openai/gpt-oss-20b';

/** Trim to the part of the page that actually talks about this recruitment. */
function window(text: string, hints: string[]): string {
  const lower = text.toLowerCase();
  let at = -1;
  for (const h of hints) {
    const i = lower.indexOf(h.toLowerCase());
    if (i !== -1 && (at === -1 || i < at)) at = i;
  }
  const start = Math.max(0, at === -1 ? 0 : at - 500);
  return text.slice(start, start + 7_000);
}

const SYSTEM = `You extract facts about ONE specific government nursing recruitment from a web page.
Return JSON only, with exactly these keys:
{"matches": boolean, "vacancies": number|null, "applicationStart": "YYYY-MM-DD"|null, "applicationDeadline": "YYYY-MM-DD"|null, "examDate": "YYYY-MM-DD"|null}
Rules:
- "matches" is true only if the page is about the named recruitment for the named body and year. Pages about a different year, body or post => false.
- Use null for anything the page does not state for THIS recruitment. NEVER guess, infer, or use a date from another recruitment.
- vacancies: the number of NURSING posts for this recruitment. If the page gives a total and a nursing-only figure, use the nursing-only figure.
- applicationDeadline: the LAST date to apply. If it was extended, use the latest extended date.
- examDate: the first exam date if several are given. null if "not announced" or "to be notified".`;

export async function extractFacts(target: { name: string; organisation: string; hints: string[] }, pageText: string): Promise<Extracted | null> {
  const key = process.env.GROQ_API_KEY;
  if (!key) throw new Error('GROQ_API_KEY is not set');
  const groq = new Groq({ apiKey: key, timeout: 30_000, maxRetries: 2 });

  const res = await groq.chat.completions.create({
    model: MODEL,
    temperature: 0,
    response_format: { type: 'json_object' },
    messages: [
      { role: 'system', content: SYSTEM },
      { role: 'user', content: `Recruitment: ${target.name}\nBody: ${target.organisation}\n\nPAGE TEXT:\n${window(pageText, target.hints)}` },
    ],
  });

  try {
    const j = JSON.parse(res.choices[0]?.message?.content || '{}');
    const isDate = (v: unknown) => (typeof v === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(v) ? v : null);
    return {
      matches: j.matches === true,
      vacancies: typeof j.vacancies === 'number' && Number.isFinite(j.vacancies) && j.vacancies > 0 ? Math.round(j.vacancies) : null,
      applicationStart: isDate(j.applicationStart),
      applicationDeadline: isDate(j.applicationDeadline),
      examDate: isDate(j.examDate),
    };
  } catch {
    return null;
  }
}
