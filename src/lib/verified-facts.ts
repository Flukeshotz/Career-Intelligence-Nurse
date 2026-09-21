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
  /** Exam pattern, one line per point. Only figures that two independent sources state identically. */
  pattern?: string[];
}

export const VERIFIED_FACTS: Record<string, VerifiedFacts> = {
  'exam-norcet-2026': {
    pay: 'Pay Level 7 (starts at ₹44,900 basic)',
    payShort: 'Level 7 · from ₹44,900',
    eligibility: 'B.Sc. Nursing / Post Basic B.Sc. Nursing, or GNM with 2 years of experience',
    selection: 'Preliminary CBT (12 Sep 2026), Mains CBT (30 Sep 2026), document verification, medical examination',
    pattern: [
      'Stage 1 (Prelims): 100 MCQs — 80 on nursing and 20 on general knowledge and aptitude. It is a qualifying stage.',
      'Stage 2 (Mains): 160 nursing MCQs in 180 minutes. The Mains score decides the final merit list.',
      '1/3 mark is deducted for every wrong answer in both stages.',
    ],
  },
  'exam-rrb-nurse-2026': {
    pay: 'Pay Level 7 (initial basic ₹44,900)',
    payShort: 'Level 7 · from ₹44,900',
    age: '20–40 years as on 1 Jan 2027 (relaxations apply)',
    eligibility: 'GNM, or B.Sc./M.Sc. Nursing, and registration as a Nurse & Midwife with a State Nursing Council',
    selection: 'Computer Based Test, document verification, medical examination',
    posts: 'Nursing Superintendent (CEN 05/2026 also covers other paramedical posts)',
    pattern: [
      'Single computer-based test: 100 objective questions, 100 marks, 90 minutes.',
      'Professional Ability 70, General Awareness 10, General Arithmetic, Intelligence & Reasoning 10, General Science 10.',
      '1/3 mark is deducted for every wrong answer.',
    ],
  },
  'exam-pgimer-no-2026': {
    pay: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    payShort: 'Level 7 · ₹44,900–1,42,400',
    age: '18–35 years (relaxations apply)',
    eligibility: 'B.Sc. Nursing (Hons) or diploma, with the work experience stated in the notification',
    selection: 'One 100-mark online exam. There is no interview.',
    posts: '243 posts: UR 99, SC 36, ST 18, OBC 66, EWS 24 (10 reserved for persons with benchmark disabilities)',
    pattern: [
      'Online exam: 100 multiple-choice questions for 100 marks.',
      '0.25 mark is deducted for every wrong answer.',
    ],
  },
  'exam-osssc-nurse-2026': {
    pay: 'Pay Matrix Level 8 (₹29,200 – ₹92,300)',
    payShort: 'Level 8 · ₹29,200–92,300',
    age: '21–42 years as on 12 June 2026',
    eligibility: 'GNM or B.Sc. Nursing',
    selection: 'Written test only',
    posts: '5,989 posts, 2,001 of them for women',
    pattern: [
      'Written test: 100 MCQs, 100 marks, 2 hours.',
      'Nursing subjects 60, practical skills 25, arithmetic 10, English 5.',
      '0.25 mark is deducted for every wrong answer.',
    ],
  },
  'exam-mp-esb-nurse-2026': {
    eligibility: 'B.Sc. Nursing (4 years) or Post Basic B.Sc. Nursing, with 12th in Physics, Chemistry and Biology, and valid registration with the MP Nursing Council',
    age: '18–40 years as on 1 Jan 2026 (up to 45 for reserved categories)',
    selection: 'Computer Based Test in two shifts a day from 15 May 2026',
    posts: '2,099 Nursing Officer posts (2,317 including 218 Sister Tutor); 35% of posts are reserved for women',
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
    posts: '1,803 posts in total: 1,791 Nurse / Staff Nurse (ESI 20, Health 296, DMER 1,475) and 12 Sister Tutor',
  },
  'exam-ap-mhsrb-nurse-2026': {
    pay: '₹27,675 per month, consolidated (contract; no other allowances)',
    payShort: '₹27,675 / month',
    eligibility: 'Residents of Andhra Pradesh with GNM or B.Sc. Nursing',
    selection: 'Merit based',
    posts: '419 contract Staff Nurse posts under NHM (529 including Pharmacist and Multi Rehabilitation Worker)',
  },
};
