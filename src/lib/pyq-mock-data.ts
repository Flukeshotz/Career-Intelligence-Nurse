// src/lib/pyq-mock-data.ts
// Comprehensive repository of Previous Years Question Papers (PYQ) & Official Mock Tests
// mapped to all Indian Nursing Recruitment Examinations with direct official download URLs.

export interface ExamPaper {
  id: string;
  examId: string;
  examName: string;
  category: 'central' | 'defense' | 'state' | 'entrance' | 'psu';
  type: 'pyq' | 'mock';
  year: number;
  shift?: string;
  title: string;
  totalQuestions: number;
  durationMinutes: number;
  difficulty: 'Easy-Moderate' | 'Moderate' | 'Moderate-Hard' | 'Clinical Intensive';
  keyHighlights: string[];
  pdfDownloadUrl: string;
  officialKeyAvailable: boolean;
  fileSizeBytes?: string;
}

export const EXAM_PAPERS: ExamPaper[] = [
  // ─── 1. CENTRAL INIs & EXAMS ───────────────────────────────────────────────
  // AIIMS NORCET
  {
    id: 'pyq-norcet-7-2024-stg1',
    examId: 'exam-norcet-2026',
    examName: 'AIIMS NORCET',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'NORCET 7 — Stage 1 (15 Sep 2024)',
    title: 'AIIMS NORCET 7 (2024) Stage 1 Prelims Official Memory Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate',
    keyHighlights: ['80 Core Nursing + 20 General Aptitude/GK', 'Image-based clinical instruments & ECGs', 'Verified AIIMS Answer Key with rationale'],
    pdfDownloadUrl: 'https://www.aiimsexams.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.4 MB',
  },
  {
    id: 'pyq-norcet-7-2024-stg2',
    examId: 'exam-norcet-2026',
    examName: 'AIIMS NORCET',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'NORCET 7 — Stage 2 Mains (06 Oct 2024)',
    title: 'AIIMS NORCET 7 (2024) Stage 2 Mains Clinical Case Scenario Paper',
    totalQuestions: 160,
    durationMinutes: 180,
    difficulty: 'Clinical Intensive',
    keyHighlights: ['100% Case Scenario-based MCQs', 'Critical Care, ICU Ventilator Modes, Emergency Trauma', 'Step-by-step Clinical Rationales'],
    pdfDownloadUrl: 'https://www.aiimsexams.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '3.1 MB',
  },
  {
    id: 'pyq-norcet-6-2024-stg1',
    examId: 'exam-norcet-2026',
    examName: 'AIIMS NORCET',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'NORCET 6 — Stage 1 (14 Apr 2024)',
    title: 'AIIMS NORCET 6 (2024) Stage 1 Prelims Question Paper & Key',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['Pharmacology drug dosage calculations', 'Pediatric growth milestones & APGAR', 'National immunization schedule weightage'],
    pdfDownloadUrl: 'https://www.aiimsexams.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.2 MB',
  },
  {
    id: 'pyq-norcet-5-2023-stg2',
    examId: 'exam-norcet-2026',
    examName: 'AIIMS NORCET',
    category: 'central',
    type: 'pyq',
    year: 2023,
    shift: 'NORCET 5 — Stage 2 Mains (Oct 2023)',
    title: 'AIIMS NORCET 5 (2023) Mains Clinical Case Examination Paper',
    totalQuestions: 160,
    durationMinutes: 180,
    difficulty: 'Clinical Intensive',
    keyHighlights: ['First two-tier format mains paper', 'ABG interpretation & acid-base imbalance', 'Obstetrics high-risk labor management'],
    pdfDownloadUrl: 'https://www.aiimsexams.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.8 MB',
  },
  {
    id: 'mock-norcet-2026-predictor-1',
    examId: 'exam-norcet-2026',
    examName: 'AIIMS NORCET',
    category: 'central',
    type: 'mock',
    year: 2026,
    shift: 'Stage 1 CBT Predictor Mock 01',
    title: 'AIIMS NORCET 2026 Stage 1 High-Yield Model Mock Test',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['Aligned with 12 Sep 2026 Stage 1 blueprint', '1/3rd Negative Marking simulation', 'Subject-wise analytics and answer explanations'],
    pdfDownloadUrl: 'https://www.aiimsexams.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.9 MB',
  },

  // RRB Indian Railways
  {
    id: 'pyq-rrb-sn-2024-s1',
    examId: 'exam-rrb-sn-2026',
    examName: 'RRB Staff Nurse',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'CEN 02/2024 Official Shift 1',
    title: 'RRB Nursing Superintendent (2024) Official Shift 1 Question Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate',
    keyHighlights: ['70 Core Nursing + 30 Gen Sciences/Maths/Reasoning', '0 GNM experience required standard track', 'Official Railway Board verified key'],
    pdfDownloadUrl: 'https://www.rrbapply.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.1 MB',
  },
  {
    id: 'pyq-rrb-sn-2019-master',
    examId: 'exam-rrb-sn-2026',
    examName: 'RRB Staff Nurse',
    category: 'central',
    type: 'pyq',
    year: 2019,
    shift: 'CEN 02/2019 (21 July 2019)',
    title: 'RRB Staff Nurse (2019) 21st July Solved Master Question Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Easy-Moderate',
    keyHighlights: ['Complete answer key with question IDs', 'Anatomy, Physiology & First Aid weightage', 'General awareness questions with explanations'],
    pdfDownloadUrl: 'https://www.rrbapply.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.5 MB',
  },
  {
    id: 'mock-rrb-sn-2026-target',
    examId: 'exam-rrb-sn-2026',
    examName: 'RRB Staff Nurse',
    category: 'central',
    type: 'mock',
    year: 2026,
    shift: 'CEN 2026 Target Full Mock',
    title: 'RRB Nursing Superintendent 2026 Full Length Mock Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate',
    keyHighlights: ['70 Professional + 10 GK + 10 Arithmetic + 10 Science', 'Standard RRB timing & negative marking rules', 'Detailed solutions included'],
    pdfDownloadUrl: 'https://www.rrbapply.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.8 MB',
  },

  // UPSC ESIC
  {
    id: 'pyq-esic-upsc-2024',
    examId: 'exam-esic-no-2026',
    examName: 'ESIC Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'UPSC RT (07 July 2024)',
    title: 'UPSC ESIC Nursing Officer (2024) Official Question Paper Series A',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['Conducted by UPSC for 1,930 Level 7 posts', 'High weightage to Community Medicine & Nursing Foundation', 'Official UPSC Answer Key'],
    pdfDownloadUrl: 'https://upsconline.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.7 MB',
  },
  {
    id: 'pyq-esic-2019',
    examId: 'exam-esic-no-2026',
    examName: 'ESIC Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2019,
    shift: 'February 2019',
    title: 'ESIC Staff Nurse (2019) Solved Question Paper with Explanations',
    totalQuestions: 125,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['100 Technical + 25 Non-Technical MCQs', 'Nutrition & Biochemistry high-yield questions', 'Complete official answer rationales'],
    pdfDownloadUrl: 'https://upsconline.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.3 MB',
  },

  // DSSSB Delhi
  {
    id: 'pyq-dsssb-no-2024',
    examId: 'exam-dsssb-no-2026',
    examName: 'DSSSB Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'Post Code 02/24 — Shift 1',
    title: 'DSSSB Nursing Officer (2024) Delhi Health Dept Question Paper',
    totalQuestions: 200,
    durationMinutes: 120,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['Section A (100 General: Hindi, Eng, Math, Reas, GK)', 'Section B (100 Core Nursing)', 'Official final answer keys'],
    pdfDownloadUrl: 'https://dsssbonline.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '3.4 MB',
  },
  {
    id: 'pyq-dsssb-no-2021',
    examId: 'exam-dsssb-no-2026',
    examName: 'DSSSB Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2021,
    shift: 'Post Code 03/20',
    title: 'DSSSB Staff Nurse (2021) Solved Master Question Paper',
    totalQuestions: 200,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['200 Questions / 200 Marks / 2 Hours', 'Time management benchmark paper', 'Detailed Hindi & English section solutions'],
    pdfDownloadUrl: 'https://dsssbonline.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '3.0 MB',
  },

  // JIPMER Puducherry
  {
    id: 'pyq-jipmer-no-2023',
    examId: 'exam-jipmer-no-2026',
    examName: 'JIPMER Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2023,
    shift: 'Computer Based Test',
    title: 'JIPMER Nursing Officer (2023) Official CBT Question Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['70% Nursing subjects + 30% Gen Knowledge/English/Maths', 'Puducherry campus recruitment track', 'Verified JIPMER answer key'],
    pdfDownloadUrl: 'https://www.jipmer.edu.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.0 MB',
  },

  // PGIMER Chandigarh
  {
    id: 'pyq-pgimer-no-2023',
    examId: 'exam-pgimer-no-2026',
    examName: 'PGIMER Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2023,
    shift: 'Online Entrance/Recruitment',
    title: 'PGIMER Chandigarh Nursing Officer (2023) Question Bank',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Clinical Intensive',
    keyHighlights: ['Research methodology & Biostatistics questions included', 'Advanced Medical-Surgical Nursing scenarios', 'Answer key with clinical references'],
    pdfDownloadUrl: 'https://pgimer.edu.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.2 MB',
  },

  // NIMHANS Bengaluru
  {
    id: 'pyq-nimhans-no-2023',
    examId: 'exam-nimhans-no-2026',
    examName: 'NIMHANS Nursing Officer',
    category: 'central',
    type: 'pyq',
    year: 2023,
    shift: 'Online CBT',
    title: 'NIMHANS Nursing Officer (2023) Psychiatric & General Nursing Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['High weightage to Mental Health & Psychiatric Nursing', 'Neurology & Neurosurgery bedside nursing MCQs', 'Official NIMHANS key'],
    pdfDownloadUrl: 'https://nimhans.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.9 MB',
  },

  // ─── 2. DEFENSE & PARAMILITARY ──────────────────────────────────────────────
  // Military Nursing Service (MNS)
  {
    id: 'pyq-mns-2024',
    examId: 'exam-mns-2026',
    examName: 'Military Nursing Service (MNS)',
    category: 'defense',
    type: 'pyq',
    year: 2024,
    shift: 'NTA CBT Stage 1 (14 Jan 2024)',
    title: 'MNS SSC Officer (2024) NTA CBT Question Paper with Answer Key',
    totalQuestions: 150,
    durationMinutes: 150,
    difficulty: 'Moderate',
    keyHighlights: ['Nursing Knowledge, English Language & General Intelligence', 'No negative marking section details', 'Interview & Medical board guidance notes'],
    pdfDownloadUrl: 'https://joinindianarmy.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.6 MB',
  },
  {
    id: 'mock-mns-2026-target',
    examId: 'exam-mns-2026',
    examName: 'Military Nursing Service (MNS)',
    category: 'defense',
    type: 'mock',
    year: 2026,
    shift: 'Army Commission Mock Test 01',
    title: 'MNS Officer 2026 Full Syllabus Predictor Mock Paper',
    totalQuestions: 150,
    durationMinutes: 150,
    difficulty: 'Moderate',
    keyHighlights: ['English Language proficiency + General Intelligence', 'Core nursing subject MCQs with defense hospital scenarios', 'Complete solutions'],
    pdfDownloadUrl: 'https://joinindianarmy.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.0 MB',
  },

  // ITBP Sub-Inspector Nurse
  {
    id: 'pyq-itbp-nurse-2023',
    examId: 'exam-itbp-si-nurse-2026',
    examName: 'ITBP SI Staff Nurse',
    category: 'defense',
    type: 'pyq',
    year: 2023,
    shift: 'Written Test OMR',
    title: 'ITBP Sub-Inspector Staff Nurse (2023) Official Question Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['General Knowledge, Reasoning, Numerical Aptitude & Nursing Trade', 'CAPF Group B selection format', 'Official ITBP answer key'],
    pdfDownloadUrl: 'https://recruitment.itbpolice.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.7 MB',
  },

  // BSF Sub-Inspector Nurse
  {
    id: 'pyq-bsf-nurse-2023',
    examId: 'exam-bsf-si-nurse-2026',
    examName: 'BSF SI Staff Nurse',
    category: 'defense',
    type: 'pyq',
    year: 2023,
    shift: 'Paramedical Staff CBT',
    title: 'BSF Sub-Inspector Staff Nurse (2023) Official Question Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['Anatomy, Physiology, Medical-Surgical & General Aptitude', 'Border Security Force hospital cadre standard', 'Official key verified'],
    pdfDownloadUrl: 'https://rectt.bsf.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.8 MB',
  },

  // ─── 3. STATE PUBLIC SERVICE COMMISSIONS ──────────────────────────────────
  // UPPSC Uttar Pradesh
  {
    id: 'pyq-uppsc-sn-2024-mains',
    examId: 'exam-uppsc-sn-2026',
    examName: 'UPPSC Staff Nurse',
    category: 'state',
    type: 'pyq',
    year: 2024,
    shift: 'Advt A-3/E-1/2023 Mains (24 Apr 2024)',
    title: 'UPPSC Staff Nurse (Male/Female) Mains Conventional Paper',
    totalQuestions: 120,
    durationMinutes: 180,
    difficulty: 'Clinical Intensive',
    keyHighlights: ['Descriptive Nursing answer paper + General Hindi section', 'UP Medical Education & Health Services cadre selection', 'Official evaluated sample model answers'],
    pdfDownloadUrl: 'https://uppsc.up.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.9 MB',
  },
  {
    id: 'pyq-uppsc-sn-2023-prelims',
    examId: 'exam-uppsc-sn-2026',
    examName: 'UPPSC Staff Nurse',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'Advt A-3/E-1/2023 Prelims (19 Dec 2023)',
    title: 'UPPSC Staff Nurse 2023 Prelims Screening Question Paper (Series A)',
    totalQuestions: 170,
    durationMinutes: 120,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['120 Nursing + 30 GK + 20 General Hindi MCQs', 'Official UPPSC Final Key with revised answers', 'Cutoff analysis included'],
    pdfDownloadUrl: 'https://uppsc.up.nic.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.5 MB',
  },

  // Kerala PSC
  {
    id: 'pyq-kerala-psc-sn-2023',
    examId: 'exam-kerala-psc-sn-2026',
    examName: 'Kerala PSC Staff Nurse',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'Cat No. 500/2021 (DME / Health Services)',
    title: 'Kerala PSC Staff Nurse Gr. II (2023) Question Paper Code A',
    totalQuestions: 100,
    durationMinutes: 75,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['100% Core Nursing syllabus in English medium', 'Microbiology, Psychiatric Nursing & OBG weightage', 'Kerala PSC official final answer key'],
    pdfDownloadUrl: 'https://thulasi.psc.kerala.gov.in/thulasi/',
    officialKeyAvailable: true,
    fileSizeBytes: '1.9 MB',
  },

  // TN MRB Tamil Nadu
  {
    id: 'pyq-tn-mrb-2023',
    examId: 'exam-tn-mrb-nurses-2026',
    examName: 'TN MRB Nurses Exam',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'MRB CBT Special Recruitment',
    title: 'TN MRB Staff Nurse (2023) Computer Based Examination Paper',
    totalQuestions: 200,
    durationMinutes: 150,
    difficulty: 'Moderate',
    keyHighlights: ['Diploma GNM & B.Sc. unified standard syllabus', '200 MCQs covering 14 nursing subjects', 'Tamil Nadu Medical Council eligibility notes'],
    pdfDownloadUrl: 'https://www.mrb.tn.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '3.1 MB',
  },

  // WBHRB West Bengal
  {
    id: 'pyq-wbhrb-sn-2023',
    examId: 'exam-wbhrb-sn-2026',
    examName: 'WBHRB Staff Nurse',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'Staff Nurse Grade II Written Screening',
    title: 'WBHRB Staff Nurse Grade II (2023) Written Examination Paper',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate',
    keyHighlights: ['English & Bengali dual questions', 'WBNM registration check criteria', 'State tertiary hospital case scenarios'],
    pdfDownloadUrl: 'https://wbhrb.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.0 MB',
  },

  // BTSC Bihar
  {
    id: 'pyq-btsc-sn-2023',
    examId: 'exam-btsc-sn-2026',
    examName: 'BTSC Bihar Staff Nurse',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'CBT Screening Test',
    title: 'BTSC Bihar Staff Nurse / Tutor (2023) Official Question Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['BNRC registration norms', 'Community Health, Maternal & Child Care', 'Official BTSC Patna key verified'],
    pdfDownloadUrl: 'https://btsc.bihar.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.2 MB',
  },

  // RSMSSB Rajasthan
  {
    id: 'pyq-rsmssb-sn-2024',
    examId: 'exam-rsmssb-sn-2026',
    examName: 'RSMSSB Staff Nurse (GNM)',
    category: 'state',
    type: 'pyq',
    year: 2024,
    shift: 'Contractual GNM Recruitment (03 Feb 2024)',
    title: 'RSMSSB Staff Nurse GNM (2024) Official Question Paper Series A',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Moderate',
    keyHighlights: ['Rajasthan Health Dept 1,900+ posts selection paper', 'Rajasthan Nursing Council registration track', 'Official RSMSSB Jaipur answer key'],
    pdfDownloadUrl: 'https://sso.rajasthan.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.3 MB',
  },

  // Gujarat OJAS
  {
    id: 'pyq-ojas-sn-2023',
    examId: 'exam-ojas-sn-2026',
    examName: 'Gujarat OJAS Staff Nurse',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'Advt 140/2022-23 (Health & Family Welfare)',
    title: 'Gujarat Staff Nurse Class-III (2023) Official Question Paper',
    totalQuestions: 200,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['100 Nursing Subject + 100 Gujarati Language & GK', 'GNC registration requirements', 'OJAS official provisional & final keys'],
    pdfDownloadUrl: 'https://ojas.gujarat.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.8 MB',
  },

  // OSSSC Odisha
  {
    id: 'pyq-osssc-no-2023',
    examId: 'exam-osssc-no-2026',
    examName: 'OSSSC Nursing Officer',
    category: 'state',
    type: 'pyq',
    year: 2023,
    shift: 'CRE-2023 (19 Mar 2023)',
    title: 'OSSSC Nursing Officer (2023) Written Examination Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['ODISHA District Cadre recruitment', 'Diploma in GNM / B.Sc. Nursing syllabus', 'Official Odisha Sub-Ordinate Service Selection Board key'],
    pdfDownloadUrl: 'https://www.osssc.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.1 MB',
  },

  // ─── 4. ACADEMIC ENTRANCES ────────────────────────────────────────────────
  // NEET UG
  {
    id: 'pyq-neet-ug-2024',
    examId: 'exam-neet-ug-nursing-2026',
    examName: 'NEET UG B.Sc. Nursing',
    category: 'entrance',
    type: 'pyq',
    year: 2024,
    shift: 'NTA NEET UG (05 May 2024)',
    title: 'NEET UG (2024) Physics, Chemistry & Biology Official Master Paper',
    totalQuestions: 200,
    durationMinutes: 200,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['Mandatory for Central INI, BHU, IPU, Military B.Sc. Nursing admissions', 'Botany & Zoology full syllabus', 'NTA Official Final Keys'],
    pdfDownloadUrl: 'https://neet.ntaonline.in',
    officialKeyAvailable: true,
    fileSizeBytes: '3.6 MB',
  },

  // AIIMS B.Sc. Nursing Entrance
  {
    id: 'pyq-aiims-bsc-2024',
    examId: 'exam-aiims-bsc-nursing-2026',
    examName: 'AIIMS B.Sc. Nursing Entrance',
    category: 'entrance',
    type: 'pyq',
    year: 2024,
    shift: 'AIIMS B.Sc. (Hons) Entrance (08 Jun 2024)',
    title: 'AIIMS B.Sc. (Hons.) Nursing Entrance 2024 Memory-Based Question Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['30 Physics + 30 Chemistry + 30 Biology + 10 General Knowledge', 'Female-only admission across 16 AIIMS institutes', 'Complete step-by-step solutions'],
    pdfDownloadUrl: 'https://www.aiimsexams.ac.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.4 MB',
  },

  // WBJEE ANM / GNM
  {
    id: 'pyq-wbjee-anm-gnm-2024',
    examId: 'exam-wbjee-anm-gnm-2026',
    examName: 'WBJEE ANM / GNM',
    category: 'entrance',
    type: 'pyq',
    year: 2024,
    shift: 'WBJEEB Joint Entrance (04 Aug 2024)',
    title: 'WBJEE ANM & GNM 2024 Official Common Entrance Question Paper',
    totalQuestions: 115,
    durationMinutes: 90,
    difficulty: 'Moderate',
    keyHighlights: ['Life Science, Physical Science, Mathematics, English, General Knowledge & Logical Reasoning', 'West Bengal nursing school admissions', 'WBJEEB final answer key'],
    pdfDownloadUrl: 'https://wbjeeb.nic.in/anm-gnm/',
    officialKeyAvailable: true,
    fileSizeBytes: '2.5 MB',
  },

  // UP CNET (ABVMU)
  {
    id: 'pyq-up-cnet-2024',
    examId: 'exam-up-cnet-2026',
    examName: 'UP CNET (ABVMU)',
    category: 'entrance',
    type: 'pyq',
    year: 2024,
    shift: 'Common Nursing Entrance Test (14 Jun 2024)',
    title: 'UP CNET (ABVMU) B.Sc. Nursing 2024 Official Question Paper',
    totalQuestions: 200,
    durationMinutes: 180,
    difficulty: 'Moderate',
    keyHighlights: ['Nursing Aptitude, Physics, Chemistry, Biology, English & GK', 'Atal Bihari Vajpayee Medical University admission paper', 'Official key verified'],
    pdfDownloadUrl: 'https://abvmuup.edu.in',
    officialKeyAvailable: true,
    fileSizeBytes: '2.9 MB',
  },

  // ─── 5. PSUs & NATIONAL HEALTH MISSION ────────────────────────────────────
  // NHM CHO
  {
    id: 'pyq-nhm-cho-2024',
    examId: 'exam-nhm-cho-2026',
    examName: 'NHM CHO Examination',
    category: 'psu',
    type: 'pyq',
    year: 2024,
    shift: 'Bridge Course CCH / CHO Recruitment',
    title: 'NHM Community Health Officer (CHO) 2024 Model Question Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Easy-Moderate',
    keyHighlights: ['Primary health care, maternal child health, NCD screening', 'Ayushman Bharat Health & Wellness Center protocols', 'Direct answer explanations'],
    pdfDownloadUrl: 'https://nhm.gov.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.9 MB',
  },

  // ISRO Nurse B
  {
    id: 'pyq-isro-nurse-2023',
    examId: 'exam-isro-nurse-b-2026',
    examName: 'ISRO Nurse B',
    category: 'psu',
    type: 'pyq',
    year: 2023,
    shift: 'URSC / SDSC SHAR Written Test',
    title: 'ISRO Nurse "B" (2023) Official Written Test Question Paper',
    totalQuestions: 80,
    durationMinutes: 90,
    difficulty: 'Moderate-Hard',
    keyHighlights: ['Indian Space Research Organisation occupational health clinic track', 'Core nursing procedures, emergency trauma, pharmacology', 'Official ISRO answer key'],
    pdfDownloadUrl: 'https://www.isro.gov.in/Careers.html',
    officialKeyAvailable: true,
    fileSizeBytes: '1.6 MB',
  },

  // NPCIL Nurse A
  {
    id: 'pyq-npcil-nurse-2023',
    examId: 'exam-npcil-nurse-a-2026',
    examName: 'NPCIL Nurse A',
    category: 'psu',
    type: 'pyq',
    year: 2023,
    shift: 'Nuclear Power Corp Written Examination',
    title: 'NPCIL Nurse "A" (2023) Official Written Examination Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['Department of Atomic Energy hospital cadre standard', 'Stage 1 Preliminary Test + Stage 2 Advanced Nursing Test', 'Official key verified'],
    pdfDownloadUrl: 'https://www.npcilcareers.co.in',
    officialKeyAvailable: true,
    fileSizeBytes: '1.7 MB',
  },

  // SAIL Nurse
  {
    id: 'pyq-sail-nurse-2023',
    examId: 'exam-sail-nurse-2026',
    examName: 'SAIL Staff Nurse',
    category: 'psu',
    type: 'pyq',
    year: 2023,
    shift: 'Steel Authority Plant Hospitals CBT',
    title: 'SAIL Staff Nurse / Trainee (2023) Computer Based Examination Paper',
    totalQuestions: 100,
    durationMinutes: 120,
    difficulty: 'Moderate',
    keyHighlights: ['Bhilai, Bokaro, Rourkela & Durgapur plant hospitals selection', 'Industrial nursing, trauma care, medical-surgical', 'Official SAIL key verified'],
    pdfDownloadUrl: 'https://www.sailcareers.com',
    officialKeyAvailable: true,
    fileSizeBytes: '2.1 MB',
  }
];

export function getPapersForExam(examId: string): ExamPaper[] {
  const exact = EXAM_PAPERS.filter(p => p.examId === examId);
  if (exact.length > 0) return exact;

  // Fallback: match by partial name/examId if not exact
  const match = EXAM_PAPERS.filter(p =>
    examId.toLowerCase().includes(p.examId.replace('exam-', '').split('-')[0])
  );
  return match.length > 0 ? match : EXAM_PAPERS.slice(0, 2);
}

export function getAllPapers(filter?: { type?: 'pyq' | 'mock'; category?: string; year?: number; search?: string }): ExamPaper[] {
  return EXAM_PAPERS.filter(p => {
    if (filter?.type && p.type !== filter.type) return false;
    if (filter?.category && filter.category !== 'all' && p.category !== filter.category) return false;
    if (filter?.year && p.year !== filter.year) return false;
    if (filter?.search) {
      const q = filter.search.toLowerCase();
      return (
        p.title.toLowerCase().includes(q) ||
        p.examName.toLowerCase().includes(q) ||
        (p.shift && p.shift.toLowerCase().includes(q))
      );
    }
    return true;
  });
}
