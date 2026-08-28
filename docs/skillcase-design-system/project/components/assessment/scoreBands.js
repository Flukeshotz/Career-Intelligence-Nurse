/* The score→colour scale. Extracted as data, not baked into the components,
   because production has SEVEN competing versions of it — four found in
   phase 2, three more by the phase 3 exam audit (see
   guidelines/exam-system-audit.html section C, and guidelines/defects.md).
   `canonical` is describe-speak's
   utils/scoreUtils.js — the only version that is actually shared between
   features, which is what makes it the reference rather than a preference.

   The others are recorded verbatim so a screen can be reproduced faithfully
   while the divergence is being resolved. Do not quietly consolidate them:
   whether a pass is 40, 50 or 75 is a product decision. */
/* Deliberately lower-case: these are DATA, not components. Capital-initial
   exports land on the design system's window namespace and get counted as
   components, which would misfile a threshold table as UI. Consumers read the
   scales through each component's `bands` prop; the literal values are
   documented in the .d.ts files and in guidelines/scoring-kit.html. */
export const scoreScales = {
  // describe-speak/utils/scoreUtils.js — getScoreColor + getScoreStrokeColor
  canonical: { good: 70, mid: 40 },
  // ExamWritingResults.jsx + ExamSpeakingResults.jsx — local getMetricColor
  examMetric: { good: 75, mid: 50 },
  // getScoreGreeting, and every exam results screen's getGreeting()
  greeting: { good: 70, mid: 50 },
  // ExamCongratulations.getScoreStyle — the 2×2 section scorecards
  scorecard: { good: 75, mid: 50 },
};

/* Three more rules exist that are not colour scales and so are not scales
   here. Recorded so nobody re-derives them:
     • per-question correctness  qScore >= 50   (ExamWriting/SpeakingResults)
     • pass / fail               score  >= 60   (pages/exam/ExamResult.jsx)
     • no scale at all           stroke #0BAA45 (ExamReading/ListeningResults
                                                 hand-rolled rings — green at
                                                 every score; a defect, P1)
   The pass mark is the open product decision. Until it is made, no component
   here renders a pass/fail verdict. */

/* Mid-tone note: production uses THREE different values for the same band —
   text `orange-400` (#FB923C) with bar `amber-300` (#FCD34D) in MetricBar,
   stroke #F59E0B in ScoreRing, and text `orange-500` (#F97316) in the exam
   locals. Reproduced per element rather than normalised. */
export const bandColors = {
  good: { text: '#15803d', fill: '#16a34a', stroke: '#16A34A' },
  mid: { text: '#fb923c', fill: '#fcd34d', stroke: '#F59E0B' },
  poor: { text: '#ef4444', fill: '#ef4444', stroke: '#EF4444' },
};

export function scoreBand(score, bands = scoreScales.canonical) {
  const v = Number(score || 0);
  if (v >= bands.good) return 'good';
  if (v >= bands.mid) return 'mid';
  return 'poor';
}

export function scoreColors(score, bands) {
  return bandColors[scoreBand(score, bands)];
}
