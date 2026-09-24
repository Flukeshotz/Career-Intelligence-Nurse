/**
 * The ONLY exam-specific facts shown beyond vacancies and dates.
 *
 * Every entry is one of:
 *  - read from the OFFICIAL NOTICE itself (RRB CEN 05/2026, HSSC Advt 04/2026, UKMSSB Advt 21/2026,
 *    the OSSSC notice feed on osssc.gov.in) — marked `fromNotice: true`; or
 *  - stated identically by at least two independent reports of the notice (checked 2026-09-19..23).
 * Where sources disagreed, the value was left out. Anything not here is deliberately absent and the
 * page says "See official notification" instead.
 *
 * Preparation tips on the page are DERIVED from these facts (weightage, negative-marking arithmetic),
 * never written freehand, so they cannot contradict the notice.
 *
 * Add a fact only under the same rule.
 */
export interface VerifiedFacts {
  pay?: string;
  /** Compact form for the hero tile. */
  payShort?: string;
  age?: string;
  eligibility?: string;
  selection?: string;
  posts?: string;
  /** Exam pattern, one line per point. */
  pattern?: string[];
  /** Application fee, one line per category. */
  fee?: string[];
  /** Official notice / advertisement number and date. */
  notice?: string;
  /** Minimum qualifying marks. */
  qualifying?: string;
  /** The same, structured, so the page can turn percentages into marks. */
  qualifyingTable?: Array<{ group: string; pct: number }>;
  /** Total marks of the (single / deciding) paper, where verified. */
  totalMarks?: number;
  /** Syllabus as printed in the notice: section → topics. */
  syllabus?: Array<{ section: string; topics: string }>;
  /** Rules a candidate can lose marks or the application over. */
  keyRules?: string[];
  /** Official notices in date order (from the conducting body's own site). */
  timeline?: Array<{ date: string; event: string }>;
  /** Category-wise vacancy table as printed in the notice. */
  vacancyTable?: { head: string[]; rows: string[][] };
  /** Admit card / result status, only when verified (e.g. from the official notice feed). */
  admitCard?: string;
  result?: string;
  /** Facts in this record were read from the official notice itself. */
  fromNotice?: boolean;
  /** Numbers the preparation tips are derived from. Only set when the pattern is verified. */
  scoring?: {
    /** Marks lost per wrong answer, as a fraction of a question's marks (0 = none). */
    wrongPenalty: number;
    /** Marks lost for an unattempted question, if any (HSSC). */
    blankPenalty?: number;
    /** Options per question — only where the official notice states it. */
    options?: number;
    /** Largest section: its name, marks and total marks. */
    biggest?: { name: string; marks: number; of: number; unit?: 'marks' | 'questions' };
    /** Questions and minutes per paper. */
    timing?: Array<{ label: string; questions: number; minutes: number }>;
  };
}

export const VERIFIED_FACTS: Record<string, VerifiedFacts> = {
  'exam-norcet-2026': {
    notice: 'AIIMS notice No. 103/2026',
    pay: 'Pay Level 7 (starts at ₹44,900 basic)',
    payShort: 'Level 7 · from ₹44,900',
    eligibility: 'B.Sc. Nursing / Post Basic B.Sc. Nursing, or GNM with 2 years of experience',
    selection: 'Stage I is a Preliminary CBT, which is qualifying only. Stage II is the Mains CBT, which decides the merit list. Shortlisted candidates then go through document verification and a medical examination.',
    fee: ['General / OBC: ₹3,000', 'SC / ST / EWS: ₹2,400', 'Persons with benchmark disabilities: exempt'],
    pattern: [
      'Stage 1 (Prelims): 100 MCQs in 90 minutes — 80 on nursing and 20 on general knowledge and aptitude. It is a qualifying stage.',
      'Stage 2 (Mains): 160 nursing MCQs in 180 minutes. The Mains score decides the final merit list.',
      '1/3 mark is deducted for every wrong answer in both stages.',
    ],
    scoring: { wrongPenalty: 1 / 3, biggest: { name: 'Nursing in Prelims', marks: 80, of: 100, unit: 'questions' }, timing: [{ label: 'Prelims', questions: 100, minutes: 90 }, { label: 'Mains', questions: 160, minutes: 180 }] },
  },
  'exam-rrb-nurse-2026': {
    fromNotice: true,
    notice: 'CEN No. 05/2026 (Paramedical Categories), indicative notice in Employment News on 12 Sept 2026',
    pay: 'Pay Level 7 (initial basic ₹44,900)',
    payShort: 'Level 7 · from ₹44,900',
    age: '20–40 years as on 1 Jan 2027 (relaxations apply)',
    eligibility:
      'Certificate as Registered Nurse and Midwife after a 3-year GNM course from an institution recognised by the Indian Nursing Council, or B.Sc. Nursing',
    selection: 'Single-stage Computer Based Test, document verification and medical examination. Candidates equal to the number of vacancies are called for document verification.',
    posts: '365 Nursing Superintendent posts across all RRBs (medical standard C1). CEN 05/2026 also covers other paramedical posts.',
    fee: [
      'All candidates: ₹500 — ₹400 of it is refunded (minus bank charges) if you appear in the CBT',
      'SC, ST, Ex-Servicemen, PwBD, Female, Transgender, Minorities, Economically Backward Class: ₹250 — refunded in full (minus bank charges) if you appear in the CBT',
      'Only candidates who attend the CBT get a refund. Last date for fee payment: 16 Oct 2026.',
    ],
    qualifying: 'UR / EWS 40%, OBC (NCL) and SC 30%, ST 25% (may be relaxed by 2 marks for PwBD if there is a shortage)',
    qualifyingTable: [{ group: 'UR / EWS', pct: 40 }, { group: 'OBC (NCL) and SC', pct: 30 }, { group: 'ST', pct: 25 }],
    totalMarks: 100,
    pattern: [
      'Single computer-based test: 100 objective questions, 100 marks, 90 minutes (120 minutes for PwBD candidates using a scribe).',
      'Professional Ability 70, General Awareness 10, General Arithmetic, Intelligence & Reasoning 10, General Science 10.',
      '1/3 mark is deducted for every wrong answer.',
    ],
    syllabus: [
      {
        section: 'Professional Ability (Nursing Superintendent)',
        topics:
          'Anatomy, Physiology, Nutrition, Biochemistry, Nursing Foundations, Psychology, Microbiology, Sociology, Pharmacology, Pathology, Genetics, Medical-Surgical Nursing (Adult including Geriatrics)-I, Community Health Nursing, Child Health Nursing, Mental Health Nursing, Midwifery and Obstetrical Nursing, Nursing Research & Statistics, Management of Nursing Services and Education',
      },
      {
        section: 'General Arithmetic',
        topics:
          'Number systems, BODMAS, Decimals, Fractions, LCM and HCF, Ratio and Proportion, Percentages, Mensuration, Time and Work, Time and Distance, Simple and Compound Interest, Profit and Loss, Algebra, Geometry, Trigonometry, Elementary Statistics, Square Root, Age Calculations, Calendar & Clock, Pipes & Cistern',
      },
      {
        section: 'General Intelligence and Reasoning',
        topics:
          'Analogies, Alphabetical and Number Series, Coding and Decoding, Mathematical operations, Relationships, Syllogism, Jumbling, Venn Diagram, Data Interpretation and Sufficiency, Conclusions and Decision Making, Similarities and Differences, Analytical reasoning, Classification, Directions, Statement – Arguments and Assumptions',
      },
      {
        section: 'General Awareness',
        topics:
          'Current affairs, Indian geography, culture and history of India including the freedom struggle, Indian Polity and Constitution, Indian Economy, environmental issues concerning India and the World, Sports, general scientific and technological developments',
      },
      { section: 'General Science', topics: 'Physics, Chemistry and Life Sciences (up to 10th Standard CBSE syllabus)' },
    ],
    keyRules: [
      'The online application closes at 23:59 on 14 Oct 2026; the fee can be paid until 16 Oct 2026.',
      'Corrections (with a modification fee) are allowed from 17 to 26 Oct 2026. Details in the "Create an Account" form and the chosen RRB cannot be changed.',
      'Scribe details must be given on the portal between 27 and 31 Oct 2026.',
      'Ties are broken by age (older ranks higher), then alphabetically by given name.',
      'Original certificates must be produced at document verification; no extra time is given.',
    ],
    scoring: { wrongPenalty: 1 / 3, options: 4, biggest: { name: 'Professional Ability', marks: 70, of: 100 }, timing: [{ label: 'CBT', questions: 100, minutes: 90 }] },
  },
  'exam-pgimer-no-2026': {
    pay: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    payShort: 'Level 7 · ₹44,900–1,42,400',
    age: '18–35 years as on 3 Oct 2026 (relaxations apply)',
    eligibility:
      'B.Sc. (Hons) Nursing, B.Sc. Nursing or Post Basic B.Sc. Nursing with State Nursing Council registration; or GNM with registration and 1 year of experience in a hospital of at least 50 beds',
    selection: 'One 100-mark online exam (CBT), then document verification. There is no interview.',
    posts: '243 posts: UR 99, SC 36, ST 18, OBC 66, EWS 24 (10 reserved for persons with benchmark disabilities)',
    fee: ['General / OBC / EWS: ₹1,500 + transaction charges', 'SC / ST: ₹800 + transaction charges', 'Persons with benchmark disabilities: exempt'],
    qualifying: 'General / EWS 40%, SC / ST / OBC 35%',
    qualifyingTable: [{ group: 'General / EWS', pct: 40 }, { group: 'SC / ST / OBC', pct: 35 }],
    totalMarks: 100,
    vacancyTable: {
      head: ['Category', 'Posts'],
      rows: [['UR', '99'], ['SC', '36'], ['ST', '18'], ['OBC', '66'], ['EWS', '24'], ['Total', '243']],
    },
    pattern: ['Online exam: 100 multiple-choice questions, 100 marks, 100 minutes, in English only.', '0.25 mark is deducted for every wrong answer.'],
    scoring: { wrongPenalty: 0.25, timing: [{ label: 'Online exam', questions: 100, minutes: 100 }] },
  },
  'exam-osssc-nurse-2026': {
    notice: 'Short advertisement No. IIE-54/2026-1896/OSSSC, dated 11 June 2026',
    admitCard: 'Admission letters released on 11 Sept 2026 (official notice IIE-54/2026-2767)',
    pay: 'Pay Matrix Level 8 (₹29,200 – ₹92,300)',
    payShort: 'Level 8 · ₹29,200–92,300',
    age: '21–42 years as on 12 June 2026',
    eligibility: 'GNM or B.Sc. Nursing, and knowledge of Odia (for example, passing Class VII or above with Odia as a language)',
    selection: 'Written test (Computer Based Recruitment Examination), then document verification',
    posts: '5,989 district-cadre posts, 2,001 of them for women',
    totalMarks: 100,
    pattern: [
      'Written test (CBRE mode): 100 MCQs, 100 marks, 2 hours.',
      'Nursing subjects 60, practical skills 25, arithmetic 10, English 5.',
      '0.25 mark is deducted for every wrong answer.',
    ],
    timeline: [
      { date: '11 Jun 2026', event: 'Short advertisement IIE-54/2026-1896 published: 5,989 district-cadre posts of Nursing Officer' },
      { date: '6 Jul 2026', event: 'Corrigendum issued for the Nursing Officer-2026 recruitment' },
      { date: '13 Jul 2026', event: 'Deadline for registration and online applications extended' },
      { date: '10 Aug 2026', event: 'Deadline for registration and online applications extended again' },
      { date: '21 Aug 2026', event: 'Notice on conducting the written test in CBRE mode' },
      { date: '11 Sep 2026', event: 'Admission letters for the written test released' },
    ],
    scoring: { wrongPenalty: 0.25, biggest: { name: 'Nursing subjects', marks: 60, of: 100 }, timing: [{ label: 'Written test', questions: 100, minutes: 120 }] },
  },
  'exam-mp-esb-nurse-2026': {
    eligibility: 'B.Sc. Nursing (4 years) or Post Basic B.Sc. Nursing, with 12th in Physics, Chemistry and Biology, and valid registration with the MP Nursing Council',
    age: '18–40 years as on 1 Jan 2026 (up to 45 for reserved categories)',
    selection: 'Computer Based Test (in two shifts a day from 15 May 2026), then document verification',
    posts: '2,099 Nursing Officer posts (2,317 including 218 Sister Tutor); 35% of posts are reserved for women',
    fee: ['General: ₹500', 'SC / ST / OBC / EWS / PwD (MP residents): ₹250', 'Plus portal charges: ₹20 as a registered user or ₹60 at a kiosk'],
    totalMarks: 100,
    pattern: [
      'Computer based test: 100 MCQs, 100 marks, 2 hours.',
      'Part A — general subjects: 25 marks. Part B — nursing: 75 marks.',
      '0.25 mark is deducted for every wrong answer.',
    ],
    scoring: { wrongPenalty: 0.25, biggest: { name: 'Nursing (Part B)', marks: 75, of: 100 }, timing: [{ label: 'CBT', questions: 100, minutes: 120 }] },
  },
  'exam-ukmssb-nurse-2026': {
    fromNotice: true,
    notice: 'Advertisement No. 21/2026, dated 3 June 2026 (Medical Health & Family Welfare Department, Uttarakhand)',
    pay: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    payShort: 'Level 7 · ₹44,900–1,42,400',
    eligibility: 'GNM (diploma) or B.Sc. Nursing (degree)',
    posts: '196 Nursing Officer (Group C) posts — 157 for women and 39 for men, split between diploma and degree holders',
    vacancyTable: {
      head: ['Post (code)', 'Total', 'SC', 'ST', 'OBC', 'EWS', 'General'],
      rows: [
        ['Nursing Officer, Female — Diploma (801)', '126', '12', '3', '7', '5', '99'],
        ['Nursing Officer, Female — Degree (802)', '31', '4', '1', '2', '1', '23'],
        ['Nursing Officer, Male — Diploma (803)', '31', '4', '0', '2', '1', '24'],
        ['Nursing Officer, Male — Degree (804)', '8', '1', '0', '0', '0', '7'],
        ['Total', '196', '21', '4', '11', '7', '153'],
      ],
    },
    keyRules: [
      'Applications and the fee (Net Banking, Debit/Credit Card or UPI) had to be submitted by 5:00 PM on 2 July 2026 — not midnight.',
      'Corrections to submitted applications were allowed from 4 to 7 July 2026 (until 5:00 PM).',
    ],
  },
  'exam-hssc-har-nurse-2026': {
    fromNotice: true,
    notice: 'Advertisement No. 04/2026, published 6 Feb 2026 (Group C, for CET 2025 qualified candidates)',
    pay: 'Pay level FPL-7',
    payShort: 'Pay level FPL-7',
    age: '18–42 years (relaxations for Haryana residents of reserved categories)',
    eligibility:
      'Staff Nurse (ESI) and Nurse (Health): B.Sc. (Hons) Nursing, B.Sc. (Post Basic) Nursing or Diploma in General Nursing with Midwife training, and "A" division Nurse registered with the Haryana Nurses Registration Council. Nurse (DMER): A-Grade Nurse with Midwifery training, registered with the Haryana Nurses Registration Council, or B.Sc. Nursing. All posts: Hindi or Sanskrit as a subject in Matric or higher.',
    selection:
      'Only candidates who qualified CET 2025 (Group C) could apply. Up to ten times the number of posts are called for an offline (OMR) written exam.',
    posts: '1,803 posts in total: 1,791 Nurse / Staff Nurse (ESI 20, Health 296, DMER 1,475) and 12 Sister Tutor',
    fee: ['No fee for any candidate.'],
    qualifying: 'General 50%, reserved categories (vertical and horizontal) 40%',
    qualifyingTable: [{ group: 'General', pct: 50 }, { group: 'reserved categories', pct: 40 }],
    totalMarks: 100,
    pattern: [
      'Offline OMR written exam: 100 MCQs, 100 marks, 1 hour 45 minutes, in English and Hindi.',
      'Syllabus weightage: general awareness, reasoning, maths, science, Haryana-related history etc. 20%; computer basics 10%; nursing subjects 70%.',
      'No marks are deducted for a wrong answer, but every question left blank costs 1 mark — fill the fifth circle if you do not want to answer.',
    ],
    syllabus: [
      { section: 'General (20%)', topics: 'General awareness, Reasoning, Mathematics, Science, History including Haryana related history, current affairs, literature, Geography, Civics, Environment, Culture' },
      { section: 'Computer (10%)', topics: 'Computer terminology, fundamentals, word processing, Excel, PowerPoint, internet, web browsing, communication, emails, downloading and uploading data on websites' },
      {
        section: 'Nursing subjects (70%)',
        topics:
          'Anatomy, Physiology, Nutrition, Biochemistry, Nursing Foundations, Psychology, Microbiology, Sociology, Pharmacology, Pathology and Genetics, Medical Surgical Nursing (Adult including Geriatrics), Community Health Nursing, Communication & Education Technology, Child Health Nursing, Mental Health Nursing, Nursing Research and Statistics, Midwifery and Obstetrical Nursing, Management of Nursing Services and Education',
      },
    ],
    keyRules: [
      'Applications were accepted only at adv042026.hryssc.com from 9 to 23 Feb 2026 (till 11:59 PM).',
      'BC-A / BC-B / EWS certificates had to be issued between 1 Apr 2025 and the closing date; DSC / OSC certificates after 13 Nov 2024.',
      'The syllabus weightage is marked "tentative" in the notice and may vary.',
    ],
    scoring: { wrongPenalty: 0, blankPenalty: 1, options: 4, biggest: { name: 'Nursing subjects', marks: 70, of: 100 }, timing: [{ label: 'Written exam', questions: 100, minutes: 105 }] },
  },
  'exam-ap-mhsrb-nurse-2026': {
    notice: 'Notification No. 10/2026, dated 10 June 2026 (contract posts under NHM)',
    pay: '₹27,675 per month, consolidated (contract; no other allowances)',
    payShort: '₹27,675 / month',
    age: '18–42 years as on 1 Jan 2026 (5 years relaxation for SC/ST/BC/EWS, 10 years for persons with benchmark disabilities)',
    eligibility: 'Residents of Andhra Pradesh with GNM or B.Sc. Nursing',
    selection:
      'Merit out of 100 marks: marks in the qualifying examination (75), weightage for years since passing (up to 10), and weightage for contract service (up to 15).',
    posts: '419 contract Staff Nurse posts under NHM (529 including Pharmacist and Multi Rehabilitation Worker)',
    fee: ['OC: ₹1,200', 'SC / ST / BC / EWS / persons with benchmark disabilities: ₹900'],
  },
};
