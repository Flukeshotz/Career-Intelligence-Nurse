/**
 * Preparation tips DERIVED from verified exam rules — arithmetic on the pattern, never opinion.
 * If a rule isn't verified (e.g. options per question for most exams), the tip that needs it is
 * simply not produced.
 */
import type { VerifiedFacts } from './verified-facts';

export interface Tip {
  title: string;
  body: string;
}

const pct = (a: number, b: number) => Math.round((a / b) * 100);
const frac = (x: number) => (Math.abs(x - 1 / 3) < 1e-9 ? '1/3' : Math.abs(x - 0.25) < 1e-9 ? '0.25' : String(x));

export function prepTips(f: VerifiedFacts): Tip[] {
  const s = f.scoring;
  if (!s) return [];
  const tips: Tip[] = [];

  if (s.biggest) {
    tips.push({
      title: 'Spend most of your time where most of the marks are',
      body: `${s.biggest.name}: ${s.biggest.marks} of ${s.biggest.of} ${s.biggest.unit ?? 'marks'} (${pct(s.biggest.marks, s.biggest.of)}%). That is the largest share of the paper, so it deserves the largest share of your study time.`,
    });
  }

  for (const t of s.timing ?? []) {
    const secs = Math.round((t.minutes * 60) / t.questions);
    tips.push({
      title: `Practise at about ${secs} seconds a question${(s.timing?.length ?? 0) > 1 ? ` (${t.label})` : ''}`,
      body: `${t.label}: ${t.questions} questions in ${t.minutes} minutes works out to roughly ${secs} seconds per question. Time your practice papers to this pace.`,
    });
  }

  if (s.blankPenalty) {
    tips.push({
      title: 'Never leave a question blank',
      body: `A wrong answer costs nothing, but every unattempted question costs ${s.blankPenalty} mark unless you fill the fifth circle.${
        s.options ? ` With ${s.options} options, even a pure guess is worth +${(1 / s.options).toFixed(2)} mark on average — better than the fifth circle, which is worth 0.` : ''
      }`,
    });
  } else if (s.wrongPenalty > 0) {
    const cancel = Math.round(1 / s.wrongPenalty);
    let body = `Each wrong answer costs ${frac(s.wrongPenalty)} mark, so ${cancel} wrong answers cancel out one correct answer.`;
    if (s.options) {
      const blind = 1 / s.options - ((s.options - 1) / s.options) * s.wrongPenalty;
      const oneOut = 1 / (s.options - 1) - ((s.options - 2) / (s.options - 1)) * s.wrongPenalty;
      body +=
        Math.abs(blind) < 1e-9
          ? ` With ${s.options} options, a blind guess gains nothing on average. Ruling out even one option makes a guess worth about +${oneOut.toFixed(2)} mark.`
          : ` With ${s.options} options, a blind guess is worth about ${blind > 0 ? '+' : ''}${blind.toFixed(2)} mark on average, and about +${oneOut.toFixed(2)} once you rule out one option.`;
    } else {
      body += ' Answer when you are reasonably sure, and avoid blind guessing.';
    }
    tips.push({ title: 'Guess carefully — wrong answers cost marks', body });
  }

  if (f.qualifying) {
    tips.push({ title: 'Know the qualifying mark', body: `Minimum qualifying marks: ${f.qualifying}. Below this you cannot be selected, whatever the cut-off turns out to be.` });
  }
  return tips;
}
