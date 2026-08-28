// src/lib/exam-syllabus-data.ts
// Comprehensive official syllabus, exam patterns, subject weightages, and marking schemes
// for all Indian Government Nursing Recruitment Examinations.

export interface SubjectModule {
  subject: string;
  weightagePercent?: number;
  questionCount?: string;
  highYieldTopics: string[];
}

export interface ExamStageDetail {
  stageName: string;
  totalQuestions: number;
  totalMarks: number;
  durationMinutes: number;
  mode: 'CBT (Online)' | 'OMR (Offline)' | 'Skill Test / Practical' | 'Interview / Counselling';
  negativeMarking: string;
  qualifyingMarks: string;
  description: string;
  sections: { name: string; questions: number; marks: number }[];
}

export interface DetailedExamInfo {
  examId: string;
  officialCadre: string;
  payMatrixLevel: string;
  basicPay: string;
  grossSalaryMonthly: string;
  ageLimitDetails: string;
  ageRelaxations: string;
  stages: ExamStageDetail[];
  syllabusModules: SubjectModule[];
  generalAbilitySyllabus?: { section: string; topics: string[] }[];
  preparationStrategy: string[];
  selectionSteps: string[];
  frequentlyAskedQuestions: { question: string; answer: string }[];
}

export const DETAILED_EXAM_INTELLIGENCE: Record<string, DetailedExamInfo> = {
  // ─── 1. AIIMS NORCET 2026 ───────────────────────────────────────────────────
  'exam-norcet-2026': {
    examId: 'exam-norcet-2026',
    officialCadre: 'Nursing Officer (Group B, Non-Gazetted)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹78,000 – ₹85,000 / month (Basic + DA + 30% HRA + TA)',
    ageLimitDetails: '18 to 30 Years as on crucial date',
    ageRelaxations: 'SC/ST: 5 Years | OBC (NCL): 3 Years | PwBD: 10–15 Years | Central Govt Civilian Employees: Up to 5 Years',
    stages: [
      {
        stageName: 'Stage 1: Preliminary Examination (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: '1/3rd (0.33) mark deducted per wrong answer',
        qualifyingMarks: 'UR/EWS: 50% (50 marks) | OBC: 45% (45 marks) | SC/ST: 40% (40 marks) | PwBD: +5% relaxation',
        description: 'Qualifying screening examination to shortlist candidates equal to 5 times the total vacancy count for Stage 2 Mains.',
        sections: [
          { name: 'Core Nursing Subject Knowledge', questions: 80, marks: 80 },
          { name: 'General Knowledge & Current Affairs', questions: 10, marks: 10 },
          { name: 'General Aptitude & Reasoning', questions: 10, marks: 10 }
        ]
      },
      {
        stageName: 'Stage 2: Mains Examination (CBT)',
        totalQuestions: 160,
        totalMarks: 160,
        durationMinutes: 180,
        mode: 'CBT (Online)',
        negativeMarking: '1/3rd (0.33) mark deducted per wrong answer',
        qualifyingMarks: 'UR/EWS: 50% | OBC: 45% | SC/ST: 40% | PwBD: 5% relaxation',
        description: 'Merit-ranking examination consisting of 100% practical, clinical scenario-based MCQs across emergency, critical care, and bedside skills.',
        sections: [
          { name: 'Clinical Case Scenarios & Nursing Skills (100% Core)', questions: 160, marks: 160 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Medical-Surgical Nursing (MSN)',
        weightagePercent: 25,
        questionCount: '35–45 Questions',
        highYieldTopics: [
          'Cardiovascular Disorders: ECG interpretation (STEMI, Arrhythmias), Cardiac Arrest, CPR/ACLS algorithms, Heart Failure, Hypertension protocols',
          'Respiratory Disorders: ABG interpretation, Mechanical Ventilation modes, ARDS, COPD, Pneumonia, Tracheostomy care & suctioning',
          'Neurology: GCS scoring, Stroke protocols (tPA window), ICP management, Lumbar puncture post-care, Seizure management',
          'Gastrointestinal & Renal: Upper GI Bleed, Cirrhosis, Acute Kidney Injury (AKI), Dialysis complications, Ryle’s tube insertion & checks',
          'Endocrine & Metabolic: DKA vs HHS management, Insulin sliding scales, Thyroid crisis, Addisonian crisis',
          'Emergency & Trauma: Triage colors, ATLS primary survey, Burns Parkland formula & Rule of Nines, Chest tube drainage systems'
        ]
      },
      {
        subject: 'Obstetrics & Gynaecological Nursing (OBG)',
        weightagePercent: 20,
        questionCount: '25–30 Questions',
        highYieldTopics: [
          'Antenatal Care: EDD (Naegele’s rule), GTPAL scoring, Fundal height, Fetal Heart Sound auscultation, Screening tests',
          'Stages of Labor: Partograph plotting, Normal vs obstructed labor, Fetal deceleration patterns (Early, Late, Variable)',
          'High-Risk Pregnancy: Preeclampsia & Eclampsia management (MgSO4 protocol & antidote), Placenta Previa vs Abruptio',
          'Postpartum & Complications: PPH management (Oxytocin, Misoprostol, Ergometrine, PPH bundle), Lochia characteristics',
          'Newborn Care at Birth: APGAR scoring at 1 & 5 mins, Neonatal resuscitation protocol (NRP), Cord clamping & warmth'
        ]
      },
      {
        subject: 'Pediatric / Child Health Nursing',
        weightagePercent: 15,
        questionCount: '18–22 Questions',
        highYieldTopics: [
          'Growth & Milestones: Motor/social developmental milestones, Primitive reflexes (Moro, Babinski, Tonic neck), Fontanelle closure',
          'National Immunization Schedule (NIS): Universal immunization vaccines, dosages, routes, cold chain maintenance',
          'Neonatal Conditions: Neonatal Jaundice (Phototherapy care & Exchange transfusion), RDS, Hirschsprung disease, TEF',
          'Pediatric Emergencies: IMNCI guidelines for diarrhea & ARI, Croup vs Epiglottitis, Pediatric dosage calculations'
        ]
      },
      {
        subject: 'Fundamentals of Nursing & Emergency Skills',
        weightagePercent: 20,
        questionCount: '25–30 Questions',
        highYieldTopics: [
          'Infection Control & PPE: Hand hygiene moments, Transmission-based precautions, Central line bundle (CLABSI), CAUTI prevention',
          'Biomedical Waste Management (BMW 2016 Rules): Color-coded bags (Yellow, Red, Blue, White) and waste category segregation',
          'Fluid & Electrolyte Balance: Hypokalemia, Hyperkalemia ECG changes, IV fluid types (Isotonic, Hypotonic, Hypertonic)',
          'Vital Signs & Basic Procedures: Blood pressure errors, Pulse oximetry limitations, Catheterization, Enema administration',
          'Ethics, Legal & Medico-Legal: Informed consent, Patient rights, Negligence vs Malpractice, Documentation standards'
        ]
      },
      {
        subject: 'Community Health Nursing (CHN)',
        weightagePercent: 10,
        questionCount: '12–15 Questions',
        highYieldTopics: [
          'National Health Programmes: NHM, Ayushman Bharat (PM-JAY & HWCs), RMNCH+A, NTEP (TB elimination), NVBDCP',
          'Epidemiology & Indicators: Maternal Mortality Ratio (MMR), Infant Mortality Rate (IMR), Crude Birth Rate, Screening tests',
          'Water, Sanitation & Environment: Water purification methods, Chlorination, Vector control methods'
        ]
      },
      {
        subject: 'Pharmacology, Mental Health & Research',
        weightagePercent: 10,
        questionCount: '12–15 Questions',
        highYieldTopics: [
          'Emergency & High-Alert Drugs: Adrenaline, Atropine, Amiodarone, Dopamine/Noradrenaline infusions, Heparin & Warfarin (INR/aPTT)',
          'Drug Calculations: IV drip rate formula (drops/min), microdrip vs macrodrip sets, unit conversion (mcg to mg)',
          'Psychiatry: Schizophrenia symptoms (positive vs negative), Antipsychotics & EPS side effects, Lithium toxicity, ECT care',
          'Nursing Research & Quality: Sampling techniques, Mean/Median/Mode, NABH/JCI hospital quality indicators'
        ]
      }
    ],
    generalAbilitySyllabus: [
      {
        section: 'General Knowledge & Current Affairs (10 Marks)',
        topics: ['National health initiatives and budgets', 'Indian Constitution & Fundamental Rights', 'Important scientific discoveries & diseases in news', 'Awards, sports & major national milestones']
      },
      {
        section: 'General Intelligence & Reasoning (10 Marks)',
        topics: ['Series completion (number & letter)', 'Analogy & Classification', 'Coding-Decoding', 'Blood relations & Direction sense', 'Basic mathematical aptitude (percentages, ratios)']
      }
    ],
    preparationStrategy: [
      'Focus 70% study time on Medical-Surgical Nursing, OBG, and Pediatric Clinical Scenarios for Stage 2 Mains.',
      'Practice image-based questions: Surgical instruments, ECG strips, OT positions, Ventilator waveforms, and Medical equipment.',
      'Master the Parkland Formula, Drug Dilution equations, and ABG interpretation shortcuts.',
      'Strictly time mock tests with a 90-minute timer for Stage 1 to manage negative marking (never guess randomly).'
    ],
    selectionSteps: [
      'Step 1: Online Application Submission & Document Upload on AIIMS Exams Portal',
      'Step 2: Admit Card Release (09 September 2026)',
      'Step 3: Stage 1 Preliminary CBT Examination (12 September 2026)',
      'Step 4: Stage 1 Result & Declaration of 5x Qualified Candidates',
      'Step 5: Stage 2 Mains CBT Examination (30 September 2026)',
      'Step 6: Centralized Institute Preference Choice Filling & Seat Allocation',
      'Step 7: Physical Document Verification & Medical Examination at Allotted AIIMS'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Can GNM freshers apply for NORCET without experience?',
        answer: 'No. GNM candidates must possess a minimum of 2 years of qualifying clinical experience in a recognized hospital with at least 50 beds after obtaining nursing council registration. B.Sc. Nursing and Post Basic B.Sc. candidates require 0 years of experience.'
      },
      {
        question: 'Is there an 80:20 gender reservation in NORCET?',
        answer: 'Yes. In accordance with the AIIMS Central Governing Body decision, 80% of nursing officer vacancies are reserved for female candidates and 20% for male candidates in participating AIIMS institutes.'
      },
      {
        question: 'Is Stage 1 marks counted in final rank?',
        answer: 'No. Stage 1 Preliminary CBT is purely a qualifying screening test to shortlist candidates for Stage 2. The final merit rank and institute allocation are determined solely by Stage 2 Mains score.'
      }
    ]
  },

  // ─── 2. RRB NURSING SUPERINTENDENT (INDIAN RAILWAYS) ────────────────────────
  'exam-rrb-nurse-2026': {
    examId: 'exam-rrb-nurse-2026',
    officialCadre: 'Nursing Superintendent / Staff Nurse (Level 7)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹76,000 – ₹83,000 / month (+ Railway Pass, Free Medical for family & Allowances)',
    ageLimitDetails: '20 to 40 Years (includes 3-year age relaxation provided by Ministry of Railways)',
    ageRelaxations: 'SC/ST: 5 Years | OBC (NCL): 3 Years | PwBD: 10 Years | Ex-Servicemen: Service years + 3 yrs',
    stages: [
      {
        stageName: 'Single Stage Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: '1/3rd (0.33) mark deducted per wrong answer',
        qualifyingMarks: 'UR/EWS: 40% | OBC/SC: 30% | ST: 25% | PwBD: 2% relaxation',
        description: 'Single centralized national CBT conducted by Railway Recruitment Boards. Normalization across multi-shift exams applies.',
        sections: [
          { name: 'Professional Ability (Core Nursing Subjects)', questions: 70, marks: 70 },
          { name: 'General Science (Physics, Chemistry, Biology up to 10th)', questions: 10, marks: 10 },
          { name: 'General Awareness & Current Affairs', questions: 10, marks: 10 },
          { name: 'General Arithmetic, Intelligence & Reasoning', questions: 10, marks: 10 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Professional Ability — Core Nursing (70 Marks)',
        weightagePercent: 70,
        questionCount: '70 Questions',
        highYieldTopics: [
          'Anatomy, Physiology & Microbiology: Human body systems, Blood grouping, Immunity, Sterilization & Disinfection',
          'Fundamentals of Nursing: First Aid in Railway emergencies/accidents, Triage, CPR, Vital signs, Bedside nursing',
          'Medical-Surgical Nursing: Trauma care, Fractures & Splints, Burns, Cardiac emergencies, Poisoning management',
          'Pharmacology: Emergency drug classifications, Antidotes, Adverse drug reactions, Pediatric & Geriatric dosages',
          'Obstetrics, Pediatrics & Community Health: Antenatal care, National immunization schedule, Communicable diseases'
        ]
      },
      {
        subject: 'General Science (10 Marks)',
        weightagePercent: 10,
        questionCount: '10 Questions',
        highYieldTopics: [
          'Physics: Units & measurements, Motion, Work & Energy, Light reflection/refraction, Electricity basics',
          'Chemistry: Chemical reactions, Acids & Bases, Periodic table, Common chemical compounds in daily life',
          'Life Sciences / Biology: Human organ systems, Plant physiology, Genetics basics, Nutrition & Vitamins'
        ]
      },
      {
        subject: 'General Awareness & Current Affairs (10 Marks)',
        weightagePercent: 10,
        questionCount: '10 Questions',
        highYieldTopics: [
          'Indian Railways history, zones, new initiatives & safety systems (Kavach, Vande Bharat)',
          'Indian Polity, Constitution & Governance',
          'Indian Geography (Rivers, Mountains, States)',
          'Current National & International Affairs in past 12 months'
        ]
      },
      {
        subject: 'General Arithmetic & Reasoning (10 Marks)',
        weightagePercent: 10,
        questionCount: '10 Questions',
        highYieldTopics: [
          'Number System, Fractions, Decimals, LCM & HCF',
          'Ratio & Proportion, Percentages, Time & Work, Time & Distance, Profit & Loss',
          'Analogies, Coding-Decoding, Syllogisms, Venn Diagrams, Mathematical operations'
        ]
      }
    ],
    preparationStrategy: [
      'Master the 70-mark Nursing core — scoring 60+ in this section almost guarantees an appointment.',
      'Revise Class 9th & 10th NCERT Science textbooks for the 10-mark General Science section.',
      'Practice standard Railway reasoning questions (Coding-decoding, number series, syllogisms).'
    ],
    selectionSteps: [
      'Step 1: Centralized Online Application on RRB Apply Portal',
      'Step 2: Single-Stage CBT Examination across designated centers',
      'Step 3: Document Verification (DV) & Physical Certificate Checking',
      'Step 4: Comprehensive Railway Medical Examination (Aye-Three / Bee-One standard at Railway Hospitals)',
      'Step 5: Final Appointment & Division Allotment'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Do GNM candidates need experience for RRB Nursing Superintendent?',
        answer: 'No. GNM candidates and B.Sc. Nursing candidates can both apply with 0 years of experience for RRB Nursing Superintendent.'
      },
      {
        question: 'What are the railway medical fitness standards for nurses?',
        answer: 'Candidates must meet C-1 / C-2 medical category standards, including distant and near vision tests, color vision checks, and general physical fitness.'
      }
    ]
  },

  // ─── 3. UPSC ESIC NURSING OFFICER ──────────────────────────────────────────
  'exam-esic-nurse-2026': {
    examId: 'exam-esic-nurse-2026',
    officialCadre: 'Nursing Officer (Employees State Insurance Corporation)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹80,000 – ₹86,000 / month (with Central allowances)',
    ageLimitDetails: 'Up to 30 Years for Unreserved / EWS candidates',
    ageRelaxations: 'OBC: 3 Years | SC/ST: 5 Years | PwBD: 10 Years | ESIC In-service Employees: Up to 5 Years',
    stages: [
      {
        stageName: 'UPSC Recruitment Test (Written / CBT)',
        totalQuestions: 100,
        totalMarks: 300,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '1/3rd mark deducted per wrong answer',
        qualifyingMarks: 'UR/EWS: 50% | OBC: 45% | SC/ST: 40%',
        description: 'Conducted directly by Union Public Service Commission (UPSC). All questions carry equal marks.',
        sections: [
          { name: 'Core Nursing Subjects & Clinical Scenarios', questions: 80, marks: 240 },
          { name: 'General Ability & English Comprehension', questions: 20, marks: 60 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Disciplines (80% Weightage)',
        weightagePercent: 80,
        highYieldTopics: [
          'Nursing Foundation: Therapeutic communication, Comfort measures, Specimen collection, Catheter care',
          'Medical-Surgical Nursing: Critical care protocols, Shock management, Pre-op & Post-op nursing care',
          'Maternal & Child Health: High-risk pregnancy, Eclampsia, Postnatal infections, Neonatal care',
          'Public Health & Industrial Health: ESI Act 1948 benefits, Occupational health hazards, Social security schemes'
        ]
      },
      {
        subject: 'General Ability & English (20% Weightage)',
        weightagePercent: 20,
        highYieldTopics: [
          'English Language: Error spotting, Sentence improvement, Fill in the blanks, Synonyms/Antonyms',
          'General Mental Ability: Logical deduction, Number series, Data interpretation, Basic mathematics'
        ]
      }
    ],
    preparationStrategy: [
      'Review UPSC standard MCQs which emphasize clinical application and reasoning rather than direct memorization.',
      'Understand the Employees State Insurance Act 1948 framework and healthcare benefits provided to insured workers.'
    ],
    selectionSteps: [
      'Step 1: UPSC Online Application Submission (ORA)',
      'Step 2: UPSC Written Recruitment Test (RT)',
      'Step 3: Declaration of RT Merit List',
      'Step 4: Scrutiny of Documents & Final Selection (No Interview for Group B Non-Gazetted)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is there an interview in UPSC ESIC Nursing Officer recruitment?',
        answer: 'No. As per DoPT guidelines for Group B Non-Gazetted posts, selection is made solely based on the marks secured in the written recruitment test.'
      }
    ]
  },

  // ─── 4. DSSSB NURSING OFFICER (DELHI GOVT) ──────────────────────────────────
  'exam-dsssb-nurse-2026': {
    examId: 'exam-dsssb-nurse-2026',
    officialCadre: 'Nursing Officer (Post Code 02/24, Directorate of Health Services Delhi)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹84,000 – ₹89,000 / month (Delhi HRA 30% included)',
    ageLimitDetails: '18 to 30 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC (Delhi only): 3 Years | PwBD: 10 Years | Contractual Govt Nurses: Relaxed to the extent of service period',
    stages: [
      {
        stageName: 'One-Tier Technical Examination (CBT)',
        totalQuestions: 200,
        totalMarks: 200,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 mark deducted per wrong answer',
        qualifyingMarks: 'Section-wise qualification mandatory: UR/EWS 40%, OBC (Delhi) 35%, SC/ST/PwBD 30%',
        description: '200 Questions in 120 minutes. Candidates must qualify both Section A and Section B independently.',
        sections: [
          { name: 'Section A: General Awareness & Non-Technical Ability', questions: 100, marks: 100 },
          { name: 'Section B: Core Nursing Subject Knowledge', questions: 100, marks: 100 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Section B: Nursing Subject Knowledge (100 Marks)',
        weightagePercent: 50,
        highYieldTopics: [
          'Anatomy & Physiology, Nutrition & Biochemistry, Microbiology',
          'Nursing Foundations, First Aid, Pharmacology & Drug calculations',
          'Medical-Surgical Nursing, Critical Care & Emergency Nursing',
          'Mental Health Nursing, Child Health Nursing, Midwifery & Obstetrical Nursing',
          'Community Health Nursing, Nursing Research, Administration & Ward Management'
        ]
      },
      {
        subject: 'Section A: 5 Non-Technical Sections (20 Marks Each = 100 Marks)',
        weightagePercent: 50,
        highYieldTopics: [
          '1. General Awareness (20 Marks): History, Polity, Constitution, Geography, Economics, Daily Science, Delhi GK',
          '2. General Intelligence & Reasoning (20 Marks): Analogies, Blood relations, Syllogisms, Non-verbal reasoning',
          '3. Arithmetical & Numerical Ability (20 Marks): Simplification, Percentage, Ratio, Average, Profit & Loss, SI/CI, DI',
          '4. Hindi Language & Comprehension (20 Marks): Sandhi, Samas, Muhavare, Vilom, Vakya Shuddhi, Passage',
          '5. English Language & Comprehension (20 Marks): Grammar, Vocabulary, Spotting errors, Synonyms, Comprehension'
        ]
      }
    ],
    preparationStrategy: [
      'CRITICAL: You must practice Hindi Language & General Arithmetic speed — 100 non-nursing marks decide the final selection rank.',
      'Time management is intense: 200 questions in 120 minutes means only 36 seconds per question.',
      'Delhi Nursing Council (DNC) registration is required before appointment.'
    ],
    selectionSteps: [
      'Step 1: One-Tier Computer Based Online Examination',
      'Step 2: e-Dossier Document Upload on OARS portal for shortlisted candidates',
      'Step 3: Verification of DNC Registration, Clinical Experience, and Category Certificate',
      'Step 4: Final Appointment to Delhi State Hospitals'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Are other state OBC candidates eligible for OBC quota in DSSSB?',
        answer: 'No. As per Delhi Government rules, only OBC certificates issued by the Government of NCT of Delhi (or certificates based on family residence in Delhi prior to 1993) are valid for reservation. Other state OBC candidates are treated as Unreserved.'
      }
    ]
  },

  // ─── 5. JIPMER NURSING OFFICER ──────────────────────────────────────────────
  'exam-jipmer-nurse-2026': {
    examId: 'exam-jipmer-nurse-2026',
    officialCadre: 'Nursing Officer (Group B)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹79,000 – ₹84,000 / month',
    ageLimitDetails: 'Up to 35 Years as on closing date',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Stage 1: Online CBT Examination',
        totalQuestions: 100,
        totalMarks: 400,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: '+4 for correct, -1 for wrong answer',
        qualifyingMarks: 'UR/EWS: 50% | OBC/SC/ST: 40%',
        description: '100 MCQs carrying 4 marks each. 70% subject specific and 30% general aptitude.',
        sections: [
          { name: 'Nursing Core Subjects', questions: 70, marks: 280 },
          { name: 'GK, General English, Math & Reasoning', questions: 30, marks: 120 }
        ]
      },
      {
        stageName: 'Stage 2: Skill Assessment Test',
        totalQuestions: 8,
        totalMarks: 100,
        durationMinutes: 60,
        mode: 'Skill Test / Practical',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'Qualifying in nature (50% score required)',
        description: 'OSCE based hands-on clinical station test: CPR, IV cannulation, dosage calculation, ECG interpretation.',
        sections: [
          { name: 'Clinical Station Skill Stations', questions: 8, marks: 100 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (70 Questions = 280 Marks)',
        weightagePercent: 70,
        highYieldTopics: [
          'Basic Sciences & Infection Control, Clinical Nursing procedures, Emergency and Trauma management',
          'Critical Care Nursing, OBG & Midwifery protocols, Pediatric nursing care, Pharmacology calculations'
        ]
      },
      {
        subject: 'General Knowledge & Aptitude (30 Questions = 120 Marks)',
        weightagePercent: 30,
        highYieldTopics: [
          'General English, Current health affairs, Basic arithmetic, Logical reasoning'
        ]
      }
    ],
    preparationStrategy: [
      'Prepare for the hands-on Skill Assessment Test (OSCE) — practical clinical technique matters for final selection.',
      'With +4 and -1 marking scheme, accuracy is heavily rewarded.'
    ],
    selectionSteps: [
      'Step 1: Online CBT Examination at national test centers',
      'Step 2: Declaration of CBT Merit List & Shortlisting for Skill Test',
      'Step 3: Clinical Skill Assessment Test at JIPMER Puducherry',
      'Step 4: Document Verification & Final Joining'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'What is the format of the JIPMER Skill Test?',
        answer: 'It consists of 6 to 8 Objective Structured Clinical Examination (OSCE) stations where candidates demonstrate practical nursing skills like CPR, Foley catheter insertion, IV medication calculation, and blood transfusion checklist.'
      }
    ]
  },

  // ─── 6. TAMIL NADU MRB NURSES EXAM ──────────────────────────────────────────
  'exam-tn-mrb-nurse-2026': {
    examId: 'exam-tn-mrb-nurse-2026',
    officialCadre: 'Staff Nurse (Contractual & Regular State Cadre)',
    payMatrixLevel: 'Tamil Nadu Revised Pay Scale',
    basicPay: '₹35,600 – ₹1,12,800',
    grossSalaryMonthly: '₹42,000 – ₹55,000 / month',
    ageLimitDetails: '18 to 32 Years (UR) | No upper age limit for SC/SCA/ST/MBC/DNC/BC candidates',
    ageRelaxations: 'SC/ST/MBC/BC: Relaxed up to 59 years as per TN State rules',
    stages: [
      {
        stageName: 'Tamil Nadu MRB Computer Based Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 150,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR/BC/MBC: 35% (35 marks) | SC/SCA/ST: 30% (30 marks)',
        description: 'Single stage objective examination in English & Tamil based on Diploma in Nursing (GNM) syllabus.',
        sections: [
          { name: 'Core Nursing Subjects (GNM Syllabus)', questions: 100, marks: 100 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (GNM Standard)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy & Physiology, Microbiology, Psychology, Sociology',
          'Fundamentals of Nursing, Community Health Nursing, Environmental Hygiene',
          'Medical-Surgical Nursing, Health Education & Communication skills',
          'Midwifery & Gynaecological Nursing, Child Health Nursing, Mental Health Nursing'
        ]
      }
    ],
    preparationStrategy: [
      'Since there is no negative marking, answer all 100 questions.',
      'Tamil Nadu Nursing Council (TNC) registration is mandatory before certificate verification.'
    ],
    selectionSteps: [
      'Step 1: Online CBT Examination',
      'Step 2: Certificate Verification (CV) at MRB Office Chennai',
      'Step 3: Counselling and District Hospital Allotment'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Tamil Language proficiency required for TN MRB?',
        answer: 'Yes. Candidates must have studied Tamil as one of the languages in 10th standard (SSLC) or pass the Tamil Language Eligibility Test within the prescribed period.'
      }
    ]
  },

  // ─── 7. RAJASTHAN RSMSSB STAFF NURSE EXAM ───────────────────────────────────
  'exam-raj-rssb-nurse-2026': {
    examId: 'exam-raj-rssb-nurse-2026',
    officialCadre: 'Staff Nurse / GNM (Direct Recruitment)',
    payMatrixLevel: 'Rajasthan Pay Matrix Level L-10',
    basicPay: '₹33,800 – ₹1,06,700',
    grossSalaryMonthly: '₹48,000 – ₹58,000 / month (Fixed ₹26,000 during 2-yr probation)',
    ageLimitDetails: '21 to 40 Years as on 01 January',
    ageRelaxations: 'Male SC/ST/OBC (Rajasthan): 5 Years | Female (General): 5 Years | Female SC/ST/OBC (Rajasthan): 10 Years',
    stages: [
      {
        stageName: 'Written Examination (OMR / CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'OMR (Offline)',
        negativeMarking: '1/3rd (0.33) mark deducted per wrong answer',
        qualifyingMarks: 'Minimum 40% marks in aggregate (35% for SC/ST)',
        description: '100 Objective Questions on Nursing Core, Rajasthan General Knowledge, and National Health Programmes.',
        sections: [
          { name: 'Core Nursing Subjects (GNM/B.Sc. Standard)', questions: 55, marks: 55 },
          { name: 'National Health Missions & Rajasthan Health Schemes', questions: 15, marks: 15 },
          { name: 'Rajasthan GK, History, Geography, Culture & Heritage', questions: 15, marks: 15 },
          { name: 'Computer Knowledge & General Aptitude', questions: 15, marks: 15 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (55 Marks)',
        weightagePercent: 55,
        highYieldTopics: [
          'Nutrition, Anatomy & Physiology, Fundamentals of Nursing, First Aid',
          'Medical-Surgical Nursing, Communicable Diseases, Maternal & Child Health'
        ]
      },
      {
        subject: 'Rajasthan Health Schemes & GK (30 Marks)',
        weightagePercent: 30,
        highYieldTopics: [
          'Chiranjeevi / MAA Yojana, Nirogi Rajasthan, Free Medicine Scheme (MNDY)',
          'Rajasthan Geography (Rivers, Aravallis, Climate), History, Forts, Fairs & Festivals'
        ]
      },
      {
        subject: 'Computer & Aptitude (15 Marks)',
        weightagePercent: 15,
        highYieldTopics: ['Basic MS Office, Internet, Reasoning analogies, Percentage & Average']
      }
    ],
    preparationStrategy: [
      'Dedicate special focus to Rajasthan specific flagship health initiatives (Nirogi Rajasthan, MNDY).',
      'Rajasthan Nursing Council (RNC) registration is mandatory.'
    ],
    selectionSteps: [
      'Step 1: OMR/CBT Written Examination',
      'Step 2: 2x Candidate Document Verification Call',
      'Step 3: Merit List & District Allotment'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is RNC registration compulsory at the time of application?',
        answer: 'Candidates must be registered with the Rajasthan Nursing Council (RNC) or submit the registration receipt before the final document verification stage.'
      }
    ]
  },

  // ─── 8. TELANGANA MHSRB STAFF NURSE EXAM ────────────────────────────────────
  'exam-ts-mhsrb-nurse-2026': {
    examId: 'exam-ts-mhsrb-nurse-2026',
    officialCadre: 'Staff Nurse (Directorate of Public Health / DME / TVVP)',
    payMatrixLevel: 'Telangana Revised Scale',
    basicPay: '₹36,750 – ₹89,250',
    grossSalaryMonthly: '₹52,000 – ₹64,000 / month',
    ageLimitDetails: '18 to 44 Years',
    ageRelaxations: 'SC/ST/BC/EWS: 5 Years | Physically Handicapped: 10 Years | Ex-Servicemen: 3 Years',
    stages: [
      {
        stageName: 'Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 80,
        durationMinutes: 80,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'OC: 40% | BC: 35% | SC/ST/PH: 30%',
        description: '100 MCQs carrying 0.8 marks each (Total 80 marks) + up to 20 marks weightage for contract/outsourced service in Govt hospitals.',
        sections: [
          { name: 'Core Nursing Subjects (B.Sc. & GNM Syllabus)', questions: 100, marks: 80 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Curriculum (100 Questions)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy, Physiology, Microbiology, Psychology, Sociology',
          'Fundamentals of Nursing, Medical-Surgical Nursing, Pharmacology',
          'Community Health Nursing, Midwifery & Obstetrical Nursing, Child Health Nursing',
          'Mental Health Nursing, Nursing Management & Professional Ethics'
        ]
      }
    ],
    preparationStrategy: [
      'Since there is no negative marking, attempt all 100 questions.',
      'Telangana State Nursing Council registration is mandatory.'
    ],
    selectionSteps: [
      'Step 1: CBT Written Test (80 Marks)',
      'Step 2: Adding Service Weightage Marks for Contract Nurses (up to 20 Marks)',
      'Step 3: Zone-wise Document Verification & Appointment'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'How is contract nurse service weightage calculated in MHSRB?',
        answer: 'Contract nurses working in government healthcare institutions receive up to 2.5 marks per 6-month block in tribal areas, and up to 2 marks per 6-month block in rural/urban areas, capped at 20 marks maximum.'
      }
    ]
  }
};
