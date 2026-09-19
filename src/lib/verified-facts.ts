/**
 * The ONLY exam-specific facts shown beyond vacancies and dates: statements that were checked
 * against independent reports of the official notification (2026-09-19).
 *
 * Anything not listed here is deliberately absent, and the page says "See official notification"
 * instead. That includes pay, age limits, exam pattern, negative marking and cut-offs for exams
 * where they were not confirmed. The old hand-written per-exam detail file
 * (exam-syllabus-data.ts) contained many unverified and some wrong figures (e.g. it gave OSSSC an
 * age limit of 21–38 and pay of ₹45–52k; the notice says 21–42 and does not state that pay), so it
 * is no longer shown.
 *
 * Add a fact here only when at least two sources state it.
 */
export interface VerifiedFacts {
  pay?: string;
  /** Compact form for the hero tile. */
  payShort?: string;
  age?: string;
  eligibility?: string;
  selection?: string;
  posts?: string;
}

export const VERIFIED_FACTS: Record<string, VerifiedFacts> = {
  'exam-norcet-2026': {
    pay: 'Pay Level 7 (starts at ₹44,900 basic)',
    payShort: 'Level 7 · from ₹44,900',
    eligibility: 'B.Sc. Nursing / Post Basic B.Sc. Nursing, or GNM with 2 years of experience',
    selection: 'Preliminary CBT (12 Sep 2026), Mains CBT (30 Sep 2026), document verification, medical examination',
  },
  'exam-rrb-nurse-2026': {
    pay: 'Pay Level 7 (initial basic ₹44,900)',
    payShort: 'Level 7 · from ₹44,900',
    age: '20–40 years as on 1 Jan 2027 (relaxations apply)',
    eligibility: 'GNM, or B.Sc./M.Sc. Nursing, and registration as a Nurse & Midwife with a State Nursing Council',
    selection: 'Computer Based Test, document verification, medical examination',
    posts: 'Nursing Superintendent (CEN 05/2026 also covers other paramedical posts)',
  },
  'exam-pgimer-no-2026': {
    pay: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    payShort: 'Level 7 · ₹44,900–1,42,400',
    age: '18–35 years (relaxations apply)',
    eligibility: 'B.Sc. Nursing (Hons) or diploma, with the work experience stated in the notification',
    selection: 'One 100-mark online exam. There is no interview.',
    posts: '243 posts: UR 99, SC 36, ST 18, OBC 66, EWS 24 (10 reserved for persons with benchmark disabilities)',
  },
  'exam-osssc-nurse-2026': {
    pay: 'Pay Matrix Level 8 (₹29,200 – ₹92,300)',
    payShort: 'Level 8 · ₹29,200–92,300',
    age: '21–42 years as on 12 June 2026',
    eligibility: 'GNM or B.Sc. Nursing',
    selection: 'Written test only',
    posts: '5,989 posts, 2,001 of them for women',
  },
  'exam-mp-esb-nurse-2026': {
    selection: 'Computer Based Test in two shifts a day from 15 May 2026',
    posts: '2,099 Nursing Officer posts for women (2,317 including 218 Sister Tutor)',
  },
  'exam-ukmssb-nurse-2026': {
    pay: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    payShort: 'Level 7 · ₹44,900–1,42,400',
    eligibility: 'GNM or B.Sc. Nursing',
    posts: '196 Nursing Officer (Group C) posts, male and female',
  },
  'exam-hssc-har-nurse-2026': {
    pay: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    payShort: 'Level 7 · ₹44,900–1,42,400',
    eligibility: 'B.Sc. Nursing or Diploma in General Nursing, registered with the Haryana Nurses & Nurse-Midwives Council',
    selection: 'Written exam (CET Phase-II Group C). No application fee.',
    posts: '1,803 posts across Health, ESI and DMER',
  },
  'exam-ap-mhsrb-nurse-2026': {
    pay: '₹27,675 per month, consolidated (contract; no other allowances)',
    payShort: '₹27,675 / month',
    eligibility: 'Residents of Andhra Pradesh with GNM or B.Sc. Nursing',
    selection: 'Merit based',
    posts: '419 contract Staff Nurse posts under NHM (529 including Pharmacist and Multi Rehabilitation Worker)',
  },
};
