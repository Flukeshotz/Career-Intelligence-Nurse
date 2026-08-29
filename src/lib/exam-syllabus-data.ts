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
  durationMinutes?: number;
  mode: string;
  negativeMarking: string;
  qualifyingMarks: string;
  description: string;
  sections?: { name: string; questions: number; marks: number }[];
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
  },

  // ─── 9. PGIMER CHANDIGARH NURSING OFFICER ──────────────────────────────────
  'exam-pgimer-no-2026': {
    examId: 'exam-pgimer-no-2026',
    officialCadre: 'Nursing Officer (Group B, INI Premier Cadre)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹80,000 – ₹88,000 / month (with Chandigarh HRA & Allowances)',
    ageLimitDetails: '18 to 35 Years as on closing date',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 100,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 (1/4th) mark deducted per wrong answer',
        qualifyingMarks: 'General/EWS: 50% (50 marks) | SC/ST/OBC: 45% (45 marks)',
        description: 'Online screening and ranking examination consisting of nursing sciences and general aptitude.',
        sections: [
          { name: 'Core Clinical Nursing Sciences', questions: 85, marks: 85 },
          { name: 'General Knowledge & Aptitude', questions: 15, marks: 15 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Advanced Clinical & Bedside Nursing',
        weightagePercent: 40,
        highYieldTopics: [
          'Critical Care: Hemodynamic monitoring, CVP calculation, arterial line management, ventilator waveforms',
          'Emergency Nursing: Advanced trauma life support (ATLS), poisonings, shock classification',
          'Infection Control & Sterilization: Autoclaving parameters, CSSD protocols, biomedical waste classification 2016'
        ]
      },
      {
        subject: 'Maternal & Child Health',
        weightagePercent: 30,
        highYieldTopics: [
          'High Risk Pregnancy: Pre-eclampsia, gestational diabetes, antepartum hemorrhage (Placenta Praevia vs Abruptio)',
          'Pediatric Emergencies: Neonatal resuscitation protocol, status epilepticus in children, phototherapy irradiance'
        ]
      }
    ],
    preparationStrategy: [
      'Focus intensely on PGIMER repeat questions and clinical algorithms.',
      'Practice 100-minute timed mock tests to manage the 1-minute-per-question speed.'
    ],
    selectionSteps: [
      'Step 1: CBT Written Examination (100 Marks)',
      'Step 2: Document Verification at PGIMER Chandigarh Campus',
      'Step 3: Medical Fitness Test & Appointment'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Does PGIMER require experience for B.Sc. Nursing graduates?',
        answer: 'No, B.Sc. Nursing / Post Basic graduates require zero experience. GNM diploma holders require 2 years experience in a minimum 50-bedded hospital.'
      }
    ]
  },

  // ─── 10. MILITARY NURSING SERVICE (MNS SSC OFFICER) ────────────────────────
  'exam-mns-ssc-2026': {
    examId: 'exam-mns-ssc-2026',
    officialCadre: 'Lieutenant (Military Nursing Service - Short Service Commission)',
    payMatrixLevel: 'Military Pay Matrix Level 10 + Military Service Pay (MSP)',
    basicPay: '₹56,100 + ₹15,500 MSP + DA + Allowances',
    grossSalaryMonthly: '₹95,000 – ₹1,10,000 / month (with Military Canteen, Ration & Medical Facilities)',
    ageLimitDetails: '21 to 35 Years on date of application',
    ageRelaxations: 'Applicable as per Armed Forces Medical Services recruitment rules',
    stages: [
      {
        stageName: 'Stage 1: Computer Based Examination (CBT by NTA)',
        totalQuestions: 150,
        totalMarks: 150,
        durationMinutes: 150,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: '50% Minimum Qualifying Score',
        description: 'National Level CBT conducted by NTA covering Nursing, General English, and General Intelligence.',
        sections: [
          { name: 'Nursing Core Subjects', questions: 100, marks: 100 },
          { name: 'General English', questions: 25, marks: 25 },
          { name: 'General Intelligence & Current Affairs', questions: 25, marks: 25 }
        ]
      },
      {
        stageName: 'Stage 2: Panel Interview & Special Medical Examination (SMB)',
        totalQuestions: 0,
        totalMarks: 100,
        durationMinutes: 30,
        mode: 'Interview / Counselling',
        negativeMarking: 'N/A',
        qualifyingMarks: 'Panel Assessment',
        description: 'Personal Interview conducted at designated Armed Forces Base Hospitals followed by Special Medical Board assessment.',
        sections: [
          { name: 'Military Suitability, Clinical Knowledge & Personality', questions: 0, marks: 100 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Military Nursing Core Subjects',
        weightagePercent: 65,
        highYieldTopics: [
          'Battlefield & Trauma Nursing: Triage in mass casualties, tourniquet application, blast & gunshot wounds',
          'Critical Care & Medical-Surgical: ACLS/BLS, emergency medications, burn management',
          'Obstetrics, Pediatrics, Community Health, and Psychology'
        ]
      },
      {
        subject: 'General English & Officer Aptitude',
        weightagePercent: 35,
        highYieldTopics: [
          'English Grammar: Sentence correction, comprehension passages, idioms & phrases, vocabulary',
          'Logical Reasoning, Military Current Affairs, Science & National Health Schemes'
        ]
      }
    ],
    preparationStrategy: [
      'Focus on English fluency and clinical confidence for the Service Interview Panel.',
      'Maintain strict physical fitness and height criteria (min 152 cm for female candidates).'
    ],
    selectionSteps: [
      'Step 1: NTA Online CBT Examination (150 Marks)',
      'Step 2: Armed Forces Panel Interview (Selected candidates)',
      'Step 3: Special Medical Board (SMB) at Base Hospital',
      'Step 4: All-India Merit List & Commissioning as Lieutenant'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Can male nurses apply for MNS SSC Officer recruitment?',
        answer: 'Currently, the Military Nursing Service (MNS) Short Service Commission is open exclusively to female nursing graduates who are citizens of India.'
      }
    ]
  },

  // ─── 11. NIMHANS BENGALURU NURSING OFFICER ─────────────────────────────────
  'exam-nimhans-no-2026': {
    examId: 'exam-nimhans-no-2026',
    officialCadre: 'Nursing Officer (INI Psychiatric & Neuro Specialty)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹78,000 – ₹86,000 / month',
    ageLimitDetails: '18 to 35 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Online Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 mark deducted per wrong answer',
        qualifyingMarks: 'UR/EWS/OBC: 50% | SC/ST: 45%',
        description: 'Comprehensive test emphasizing psychiatric nursing, neurology, and general nursing sciences.',
        sections: [
          { name: 'Psychiatric, Neurological & Core Nursing', questions: 80, marks: 80 },
          { name: 'General Aptitude & Research/Biostatistics', questions: 20, marks: 20 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Psychiatric & Mental Health Nursing (High Weightage)',
        weightagePercent: 40,
        highYieldTopics: [
          'Psychopharmacology: Lithium therapy & toxicity, Extrapyramidal symptoms (EPS), Neuroleptic Malignant Syndrome (NMS), SSRIs/TCAs',
          'Psychiatric Emergencies: Suicide risk assessment, acute psychosis, delirium tremens, violent patient de-escalation',
          'Mental Healthcare Act 2017: Advance directives, nominated representatives, admission & discharge protocols',
          'Therapeutic Modalities: Electroconvulsive Therapy (ECT pre/intra/post care), Cognitive Behavioral Therapy (CBT) basics'
        ]
      },
      {
        subject: 'Neurological & Neuro-Surgical Nursing',
        weightagePercent: 30,
        highYieldTopics: [
          'Raised ICP management (Mannitol, 3% saline, head-up position), Glasgow Coma Scale (GCS), Cranial Nerve assessment',
          'Stroke management (NIHSS scale, tPA protocol), Spinal Cord Injuries & Autonomic Dysreflexia, Post-Craniotomy care'
        ]
      }
    ],
    preparationStrategy: [
      'Master Psychiatric Nursing terminology, defense mechanisms, and psychotropic drug therapeutic ranges.',
      'Review neuro-anatomy, intracranial pressure monitoring, and ventilator care.'
    ],
    selectionSteps: [
      'Step 1: CBT Written Test (100 Marks)',
      'Step 2: Document Verification & Clinical Skill Assessment',
      'Step 3: Final Merit List'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is GNM eligible for NIMHANS Nursing Officer?',
        answer: 'Yes, GNM candidates with 2 years clinical experience in a minimum 50-bedded hospital and active state council registration are eligible.'
      }
    ]
  },

  // ─── 12. UPUMS SAIFAI NURSING OFFICER CBT EXAM ─────────────────────────────
  'exam-up-upums-nurse-2026': {
    examId: 'exam-up-upums-nurse-2026',
    officialCadre: 'Nursing Officer (Group B, UP State Cadre)',
    payMatrixLevel: '7th CPC Pay Matrix Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹75,000 – ₹82,000 / month',
    ageLimitDetails: '18 to 40 Years as on closing date',
    ageRelaxations: 'SC/ST/OBC (UP Domicile): 5 Years | PwBD: 15 Years | Ex-Servicemen: 3 Years',
    stages: [
      {
        stageName: 'Computer Based Test (CBT)',
        totalQuestions: 200,
        totalMarks: 600,
        durationMinutes: 180,
        mode: 'CBT (Online)',
        negativeMarking: '1/3rd (1 mark out of 3) deducted per wrong answer',
        qualifyingMarks: 'UR/EWS/OBC: 50% (300 Marks) | SC/ST: 45% (270 Marks)',
        description: 'Single centralized 3-hour Computer Based Test consisting of 200 MCQs carrying 3 marks each (Total 600 Marks).',
        sections: [
          { name: 'Core Nursing Subjects (B.Sc./GNM Level)', questions: 170, marks: 510 },
          { name: 'General English, GK, Reasoning & Math', questions: 30, marks: 90 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Sciences (170 Questions / 510 Marks)',
        weightagePercent: 85,
        highYieldTopics: [
          'Basic Sciences: Anatomy, Physiology, Microbiology, Biochemistry, Nutrition',
          'Clinical Sciences: Medical-Surgical Nursing, Pharmacology, Community Health Nursing',
          'Specialties: Midwifery & Gynaecological Nursing, Child Health / Pediatric Nursing, Mental Health Nursing',
          'Professional Skills: Nursing Education, Research, Biostatistics & Administration'
        ]
      },
      {
        subject: 'General Knowledge, English & Aptitude (30 Questions / 90 Marks)',
        weightagePercent: 15,
        highYieldTopics: [
          'General English: Grammar, vocabulary, active/passive voice, sentence completion',
          'General Knowledge & Current Affairs: National events, health schemes, UP state overview',
          'Reasoning & Basic Mathematics: Series, coding-decoding, percentage, ratio & proportion'
        ]
      }
    ],
    preparationStrategy: [
      'Focus heavily on the 170 core nursing questions carrying 510 marks.',
      'Practice 3-hour full-length mocks to build stamina for 200 questions.'
    ],
    selectionSteps: [
      'Step 1: 3-Hour Online CBT Examination (600 Marks)',
      'Step 2: Merit Rank List & Normalization (if multi-shift)',
      'Step 3: Document Verification at UPUMS Saifai Campus'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Can other state candidates apply for UPUMS Saifai Nursing Officer?',
        answer: 'Yes, candidates from all Indian states can apply under the Unreserved (UR) category provided they have valid registration with INC or State Nursing Council.'
      }
    ]
  },

  // ─── 13. ITBP SUB-INSPECTOR (STAFF NURSE) ──────────────────────────────────
  'exam-itbp-nurse-2026': {
    examId: 'exam-itbp-nurse-2026',
    officialCadre: 'Sub-Inspector (Staff Nurse) — Combatised Group B',
    payMatrixLevel: '7th CPC Pay Matrix Level 6 (Basic ₹35,400 - ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹62,000 – ₹72,000 / month (+ Ration Money, High Altitude Allowance & Medical)',
    ageLimitDetails: '21 to 30 Years as on cutoff date',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | Ex-Servicemen: Deduct military service + 3 yrs',
    stages: [
      {
        stageName: 'Phase 1: Physical Efficiency & Standard Test (PET/PST)',
        totalQuestions: 0,
        totalMarks: 0,
        durationMinutes: 0,
        mode: 'Physical Qualifying',
        negativeMarking: 'None (Qualifying nature)',
        qualifyingMarks: 'Pass standard PET benchmarks (100m race, 800m race, Long jump)',
        description: 'Physical screening at ITBP Force Base.'
      },
      {
        stageName: 'Phase 2: Written Examination (CBT/OMR)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT / OMR',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR/EWS/OBC: 35% | SC/ST: 33%',
        description: '100 MCQs covering General Knowledge, Reasoning, Numerical Aptitude, and Professional Nursing Knowledge.',
        sections: [
          { name: 'Core Nursing Subjects (GNM/B.Sc. Level)', questions: 60, marks: 60 },
          { name: 'General Awareness, Reasoning & Basic Math', questions: 40, marks: 40 }
        ]
      }
    ],
    syllabusModules: [
      {
        subject: 'Paramilitary Clinical Nursing & Trauma Care',
        weightagePercent: 60,
        highYieldTopics: [
          'Emergency Trauma & Battlefield First Aid: Triage in mass casualty, Hemorrhage control, Tourniquet application',
          'Medical-Surgical: Hypothermia & Frostbite management, High-altitude pulmonary/cerebral edema (HAPE/HACE)',
          'Fundamentals: Infection control, Aseptic wound dressing, Shock resuscitation'
        ]
      },
      {
        subject: 'General Awareness & Aptitude',
        weightagePercent: 40,
        highYieldTopics: [
          'General Knowledge: Indian geography, defense & border forces, current affairs',
          'Reasoning & Basic Math: Number series, coding-decoding, percentages, profit & loss'
        ]
      }
    ],
    preparationStrategy: [
      'Maintain daily cardio physical fitness for Phase 1 PET running benchmarks.',
      'Study high-altitude and emergency trauma nursing alongside general knowledge.'
    ],
    selectionSteps: [
      'Phase 1: Physical Efficiency Test (PET) and Physical Standard Test (PST)',
      'Phase 2: 100-Mark Written Examination',
      'Phase 3: Detailed Medical Examination (DME) & Review Medical Board (RME)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Are both male and female candidates eligible for ITBP Staff Nurse?',
        answer: 'Yes, both male and female candidates possessing GNM/B.Sc. Nursing and meeting physical standards are eligible.'
      }
    ]
  },

  // ─── 14. BSF SUB-INSPECTOR (STAFF NURSE) ───────────────────────────────────
  'exam-bsf-nurse-2026': {
    examId: 'exam-bsf-nurse-2026',
    officialCadre: 'Sub-Inspector (Staff Nurse, Group B Combatised)',
    payMatrixLevel: '7th CPC Level 6 (₹35,400 – ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹62,000 – ₹70,000 / month (+ Border Outpost Allowances & Free Ration)',
    ageLimitDetails: '21 to 30 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years',
    stages: [
      {
        stageName: 'Phase 1: Written Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR / CBT',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR/EWS/OBC: 45% | SC/ST: 40%',
        description: 'Section A: General Knowledge & Numerical Ability (25 Qs), Section B: Human Anatomy & Physiology (25 Qs), Section C: Professional Nursing (50 Qs).'
      },
      {
        stageName: 'Phase 2: PST, PET & Practical Trade Test',
        totalQuestions: 0,
        totalMarks: 50,
        durationMinutes: 60,
        mode: 'Physical & Skill Assessment',
        negativeMarking: 'None',
        qualifyingMarks: 'Qualifying',
        description: 'Physical testing followed by clinical procedural skill demonstration.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Professional Nursing & Anatomy (75 Marks)',
        weightagePercent: 75,
        highYieldTopics: [
          'Human Anatomy & Physiology: Vital organ systems, Circulatory pathways, Endocrine system',
          'Medical-Surgical & Critical Care: CPR algorithms, Fluid resuscitation, Trauma management, Infectious diseases',
          'Midwifery & Pediatric Nursing: Antenatal care, Neonatal resuscitation, Immunization schedules'
        ]
      },
      {
        subject: 'General Awareness & Reasoning (25 Marks)',
        weightagePercent: 25,
        highYieldTopics: [
          'Indian History, Geography, National Defense Organizations, Basic Mental Ability'
        ]
      }
    ],
    preparationStrategy: [
      'Focus equally on Human Anatomy & Physiology (25 marks) and Nursing (50 marks).',
      'Prepare for practical stations: IV cannulation, catheterization, and CPR on mannequins.'
    ],
    selectionSteps: [
      'Phase 1: 100-Mark Written Test',
      'Phase 2: Physical Standard/Efficiency Test (PST/PET) and Practical Test',
      'Phase 3: Detailed Medical Examination'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'What is the role of a BSF Staff Nurse?',
        answer: 'BSF Staff Nurses provide primary, emergency, and surgical medical care in BSF Composite Base Hospitals and Sector Border Outposts.'
      }
    ]
  },

  // ─── 15. CRPF PARAMEDICAL STAFF NURSE ──────────────────────────────────────
  'exam-crpf-nurse-2026': {
    examId: 'exam-crpf-nurse-2026',
    officialCadre: 'Sub-Inspector (Staff Nurse, Paramedical Cadre)',
    payMatrixLevel: '7th CPC Level 6',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹60,000 – ₹68,000 / month (+ Risk & Hardship Allowances)',
    ageLimitDetails: '20 to 30 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years',
    stages: [
      {
        stageName: 'Stage 1: Physical Standard Test & Physical Efficiency Test (PST/PET)',
        totalQuestions: 0,
        totalMarks: 0,
        durationMinutes: 0,
        mode: 'Physical Qualifying',
        negativeMarking: 'None',
        qualifyingMarks: 'Pass mandatory race and physical measurements',
        description: 'Qualifying physical test at designated CRPF Group Centers.'
      },
      {
        stageName: 'Stage 2: Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR/EWS/Ex-Servicemen: 45% | SC/ST/OBC: 40%',
        description: 'Part A (General Aptitude 50 Qs) + Part B (Nursing Professional 50 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing & Emergency Medicine (50 Questions)',
        weightagePercent: 50,
        highYieldTopics: [
          'Emergency Nursing: Blast injuries, Burns management, Advanced airway management',
          'Medical-Surgical: Communicable diseases (Malaria, Dengue, TB, Typhoid), Infection control'
        ]
      },
      {
        subject: 'General Intelligence, Reasoning & GK (50 Questions)',
        weightagePercent: 50,
        highYieldTopics: [
          'General Intelligence & Reasoning (10 Qs), General Awareness (10 Qs), Numerical Aptitude (15 Qs), English/Hindi Comprehension (15 Qs)'
        ]
      }
    ],
    preparationStrategy: [
      'Balance non-technical sections (50 Qs) with nursing clinical skills (50 Qs).'
    ],
    selectionSteps: [
      'Stage 1: PST/PET',
      'Stage 2: CBT Written Test',
      'Stage 3: Trade Test and Document Screening',
      'Stage 4: Medical Examination'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is GNM eligible for CRPF Sub-Inspector Staff Nurse?',
        answer: 'Yes, 10+2 with GNM or B.Sc. Nursing registered with INC or State Nursing Council is eligible.'
      }
    ]
  },

  // ─── 16. SCTIMST THIRUVANANTHAPURAM STAFF NURSE ────────────────────────────
  'exam-sctimst-nurse-2026': {
    examId: 'exam-sctimst-nurse-2026',
    officialCadre: 'Staff Nurse (Grade A, Autonomous National Institute)',
    payMatrixLevel: '7th CPC Level 7 (Basic ₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹78,000 – ₹86,000 / month',
    ageLimitDetails: 'Up to 35 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Written Examination (CBT/OMR)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'Written Objective',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR/EWS: 50% | OBC: 45% | SC/ST: 40%',
        description: 'Advanced neuro-cardiovascular clinical nursing assessment.'
      },
      {
        stageName: 'Clinical Skill & Practical Evaluation',
        totalQuestions: 0,
        totalMarks: 50,
        durationMinutes: 45,
        mode: 'Practical OSCE',
        negativeMarking: 'None',
        qualifyingMarks: 'Qualifying (50%)',
        description: 'Practical stations covering arterial line care, ventilator management, and cardiac arrest protocols.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Cardiovascular & Thoracic Nursing (CVTS)',
        weightagePercent: 50,
        highYieldTopics: [
          'ECG Interpretation: STEMI, NSTEMI, Heart blocks, VT/VF management',
          'Hemodynamic Monitoring: CVP, Arterial pressure waveform, Pulmonary artery catheter',
          'Post-Cardiac Surgery Care: Chest drain management, Inotropes and vasopressors titration'
        ]
      },
      {
        subject: 'Neurosciences & Neuro-Surgical Nursing',
        weightagePercent: 50,
        highYieldTopics: [
          'Neurological Assessment: GCS scoring, Cranial nerve assessment, Pupillary reflexes',
          'Intracranial Pressure (ICP) Management: Mannitol protocols, External ventricular drain (EVD) care, Stroke care'
        ]
      }
    ],
    preparationStrategy: [
      'Focus intensely on cardiac and neuro-surgical intensive care procedures and protocols.'
    ],
    selectionSteps: [
      'Step 1: Written Examination (100 Marks)',
      'Step 2: Practical Clinical Skill Evaluation',
      'Step 3: Document Verification'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is cardiac or neuro experience mandatory for SCTIMST?',
        answer: 'Candidates with B.Sc. Nursing or GNM who possess 2 years clinical ICU experience in cardiac, thoracic, or neuro-specialties are given direct selection preference.'
      }
    ]
  },

  // ─── 17. NEIGRIHMS SHILLONG NURSING OFFICER ────────────────────────────────
  'exam-neigrihms-nurse-2026': {
    examId: 'exam-neigrihms-nurse-2026',
    officialCadre: 'Nursing Officer (Group B, Central Autonomous INI)',
    payMatrixLevel: '7th CPC Level 7',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹76,000 – ₹84,000 / month (+ Special North-East Duty Allowance)',
    ageLimitDetails: 'Up to 35 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | Govt Servants: Up to 40 Years',
    stages: [
      {
        stageName: 'Single Stage Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR/EWS: 50% | OBC: 45% | SC/ST: 40%',
        description: '100 MCQs covering full INC syllabus followed by centralized merit rank list.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Comprehensive Clinical Nursing',
        weightagePercent: 85,
        highYieldTopics: [
          'Medical-Surgical: Fluid & electrolyte imbalances, Shock, ACLS protocols',
          'Maternal & Child Health: High-risk pregnancy, Partograph, Neonatal resuscitation',
          'Nursing Fundamentals: Biomedical waste rules, CLABSI/CAUTI prevention, Drug calculations'
        ]
      },
      {
        subject: 'General Knowledge & English Comprehension',
        weightagePercent: 15,
        highYieldTopics: [
          'Current affairs, Indian healthcare initiatives, Basic grammar'
        ]
      }
    ],
    preparationStrategy: [
      'Prepare using AIIMS NORCET level standard multiple-choice questions.'
    ],
    selectionSteps: [
      'Step 1: 100-Mark Online CBT',
      'Step 2: Document Verification at Shillong Campus'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is NEIGRIHMS a Central Government Institute?',
        answer: 'Yes, NEIGRIHMS Shillong is an autonomous premier medical institute under the Ministry of Health & Family Welfare, Govt. of India.'
      }
    ]
  },

  // ─── 18. UPPSC STAFF NURSE (MALE/FEMALE) ───────────────────────────────────
  'exam-uppsc-nurse-2026': {
    examId: 'exam-uppsc-nurse-2026',
    officialCadre: 'Staff Nurse / Nursing Officer (UP State Medical Cadre)',
    payMatrixLevel: 'Pay Matrix Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹72,000 – ₹80,000 / month',
    ageLimitDetails: '21 to 40 Years as of 1st July',
    ageRelaxations: 'SC/ST/OBC (UP Domicile): 5 Years | Skilled Players: 5 Years | PwBD: 15 Years',
    stages: [
      {
        stageName: 'Stage 1: Preliminary Objective Examination',
        totalQuestions: 170,
        totalMarks: 85,
        durationMinutes: 120,
        mode: 'OMR Written',
        negativeMarking: '1/3rd (0.33) mark deduction',
        qualifyingMarks: 'SC/ST: 35% | UR/EWS/OBC: 40%',
        description: '170 Questions carrying 0.5 marks each. 120 Nursing + 30 General Knowledge + 20 General Hindi.',
        sections: [
          { name: 'Nursing Core Subjects', questions: 120, marks: 60 },
          { name: 'General Knowledge (India & UP Specific)', questions: 30, marks: 15 },
          { name: 'General Hindi (Samanya Hindi)', questions: 20, marks: 10 }
        ]
      },
      {
        stageName: 'Stage 2: Mains Conventional Descriptive Examination',
        totalQuestions: 15,
        totalMarks: 85,
        durationMinutes: 180,
        mode: 'Pen & Paper Conventional',
        negativeMarking: 'None',
        qualifyingMarks: 'SC/ST: 35% | UR/EWS/OBC: 40%',
        description: 'Part A (5 Short Answer Questions of 5 marks each = 25 Marks) + Part B (6 Descriptive Questions of 15 marks each out of which 4 to be answered = 60 Marks).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Sciences (Prelims 60 Marks + Mains 85 Marks)',
        weightagePercent: 70,
        highYieldTopics: [
          'Anatomy & Physiology, Nutrition & Dietetics, Microbiology, Psychology & Sociology',
          'Medical-Surgical: Cardiovascular, Respiratory, GI, Renal, Nervous, Endocrine disorders',
          'Midwifery & Gynecological Nursing: Antenatal, Intra-natal, Post-natal care, Neonatal resuscitation',
          'Community Health Nursing: Epidemics, National Health Programs, Primary Health Center (PHC) setup'
        ]
      },
      {
        subject: 'General Knowledge & General Hindi (Prelims 25 Marks)',
        weightagePercent: 30,
        highYieldTopics: [
          'Samanya Hindi: Vilom shabd, Vakya shuddhi, Anek shabdon ke ek shabd, Tatbhav-Tatsam, Paryayvachi',
          'General Knowledge: Indian History, Indian Agriculture, World Geography, UP State Culture & Heritage'
        ]
      }
    ],
    preparationStrategy: [
      'Practice writing detailed descriptive answers for Stage 2 Mains conventional paper.',
      'Master UPPSC Hindi vocabulary rules (vilom, paryayvachi, tatsam).'
    ],
    selectionSteps: [
      'Step 1: Preliminary OMR Exam (85 Marks)',
      'Step 2: Mains Descriptive Examination (85 Marks)',
      'Step 3: Up to 15 Marks Service Weightage for UP Contract Nurses (3 marks per year)',
      'Step 4: Final Combined Merit List'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is registration with UP Nurses and Midwives Council required?',
        answer: 'Yes, candidates must possess registration certificate as Nurse and Midwife with UP Nurses & Midwives Council at the time of online application or document verification.'
      }
    ]
  },

  // ─── 19. UKMSSB UTTARAKHAND STAFF NURSE ────────────────────────────────────
  'exam-ukmssb-nurse-2026': {
    examId: 'exam-ukmssb-nurse-2026',
    officialCadre: 'Nursing Officer (Female & Male, Medical Health / Education)',
    payMatrixLevel: 'Pay Matrix Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹70,000 – ₹78,000 / month (+ Hill Area Allowance)',
    ageLimitDetails: '21 to 42 Years as of 1st July',
    ageRelaxations: 'SC/ST/OBC of Uttarakhand: 5 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Merit Evaluation & Written CBT Screening',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT / Academic Year Merit',
        negativeMarking: '0.25 mark deduction',
        qualifyingMarks: 'UR/OBC: 45% | SC/ST: 35%',
        description: 'Year-wise batch merit allocation or competitive CBT examination.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (B.Sc. & GNM Level)',
        weightagePercent: 80,
        highYieldTopics: [
          'Anatomy & Physiology, Community Health, Midwifery, Pediatric Care, Medical-Surgical Nursing'
        ]
      },
      {
        subject: 'General Knowledge & Uttarakhand State Overview',
        weightagePercent: 20,
        highYieldTopics: [
          'Uttarakhand geography, local dialects, health schemes, national current affairs'
        ]
      }
    ],
    preparationStrategy: [
      'Ensure Uttarakhand Nursing Council registration/renewal is updated.',
      'Review Uttarakhand state geography and public health history.'
    ],
    selectionSteps: [
      'Step 1: Online Application & Council Verification',
      'Step 2: Merit Shortlisting / CBT Screening',
      'Step 3: Document Verification at Dehradun'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Can candidates from outside Uttarakhand apply?',
        answer: 'Candidates who have completed 10th & 12th from Uttarakhand or are registered with Uttarakhand Nursing Council can apply under respective categories.'
      }
    ]
  },

  // ─── 20. WBHRB STAFF NURSE GRADE II ────────────────────────────────────────
  'exam-wbhrb-nurse-2026': {
    examId: 'exam-wbhrb-nurse-2026',
    officialCadre: 'Staff Nurse Grade II (Group B, Health & Family Welfare Dept)',
    payMatrixLevel: 'Pay Level 9 (ROPA 2019: ₹28,900 – ₹74,500)',
    basicPay: '₹28,900 – ₹74,500',
    grossSalaryMonthly: '₹42,000 – ₹48,000 / month (+ Medical Allowance, DA & HRA)',
    ageLimitDetails: '18 to 39 Years as on 1st January',
    ageRelaxations: 'SC/ST of WB: 5 Years | OBC of WB: 3 Years | PwBD: 8 Years',
    stages: [
      {
        stageName: 'Academic Score Weightage (85 Marks) + Interview (15 Marks)',
        totalQuestions: 0,
        totalMarks: 100,
        durationMinutes: 30,
        mode: 'Direct Merit & Interview',
        negativeMarking: 'None',
        qualifyingMarks: 'Overall Merit Rank',
        description: '100-point formula: Secondary (10 pts) + Higher Secondary (25 pts) + Nursing Diploma/Degree (35 pts) + Experience (15 pts) + Interview (15 pts).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Clinical Viva & Bengali/Nepali Language Assessment',
        weightagePercent: 100,
        highYieldTopics: [
          'Clinical Practical Skills: Medication administration, emergency resuscitation, obstetrical maneuvers',
          'Spoken & Written Bengali/Nepali comprehension testing'
        ]
      }
    ],
    preparationStrategy: [
      'Prepare for clinical case-based interview questions at Salt Lake, Kolkata.',
      'Ensure West Bengal Nursing Council (WBNC) registration certificate is up-to-date.'
    ],
    selectionSteps: [
      'Step 1: Academic Document Verification & Score Computation',
      'Step 2: WBHRB Selection Board Interview (15 Marks)',
      'Step 3: Final Combined Merit List & Hospital Posting'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Bengali or Nepali language knowledge mandatory for WBHRB?',
        answer: 'Yes, candidates must be able to speak, read, and write in Bengali or Nepali.'
      }
    ]
  },

  // ─── 21. BTSC BIHAR STAFF NURSE GRADE A ────────────────────────────────────
  'exam-btsc-nurse-2026': {
    examId: 'exam-btsc-nurse-2026',
    officialCadre: 'Staff Nurse Grade A (Group B, Health Dept Bihar)',
    payMatrixLevel: 'Pay Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹68,000 – ₹76,000 / month',
    ageLimitDetails: '21 to 37 Years (Male UR) | 21 to 40 Years (Female UR/OBC) | 21 to 42 Years (SC/ST)',
    ageRelaxations: 'OBC/BC: 3 Years | SC/ST: 5 Years | Female Candidates: 3 Years',
    stages: [
      {
        stageName: 'Stage 1: Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR: 40% | BC: 36.5% | EBC: 34% | SC/ST/Women: 32%',
        description: '100 MCQs based on GNM/B.Sc. Nursing curriculum.'
      },
      {
        stageName: 'Stage 2: Experience & Higher Qualification Weightage (40 Marks)',
        totalQuestions: 0,
        totalMarks: 40,
        durationMinutes: 0,
        mode: 'Document Evaluation',
        negativeMarking: 'None',
        qualifyingMarks: 'Merit',
        description: 'Higher Degree (B.Sc./M.Sc. = 15 Marks) + Bihar Government Hospital Experience (5 marks/yr up to 25 Marks).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Sciences (100 Questions)',
        weightagePercent: 100,
        highYieldTopics: [
          'Community Health Nursing & Primary Healthcare in Rural Areas',
          'Midwifery & Obstetrical Emergencies: Eclampsia, Placenta Previa, APGAR Score',
          'Medical-Surgical: Infectious diseases, Shock, Burns, Diabetes management',
          'Pharmacology: Dosage calculations, Antidotes, Emergency medications'
        ]
      }
    ],
    preparationStrategy: [
      'Focus on high-speed accurate problem solving for 100 MCQs in 120 minutes.',
      'Obtain Bihar Nurses Registration Council (BNRC) certificate.'
    ],
    selectionSteps: [
      'Step 1: CBT Written Test (60% Weightage = 60 Marks)',
      'Step 2: Higher Qualification (15 Marks) + Bihar Contract Experience (25 Marks)',
      'Step 3: Final Combined Merit List of 100 Marks'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is registration with BNRC mandatory for BTSC Staff Nurse?',
        answer: 'Yes, candidates must be registered with Bihar Nurses Registration Council (BNRC), Patna.'
      }
    ]
  },

  // ─── 22. OSSSC ODISHA NURSING OFFICER ──────────────────────────────────────
  'exam-osssc-nurse-2026': {
    examId: 'exam-osssc-nurse-2026',
    officialCadre: 'Nursing Officer (District Cadre Group C)',
    payMatrixLevel: 'Pay Matrix Level 8 (Pay Band ₹29,200 – ₹92,300)',
    basicPay: '₹29,200 – ₹92,300',
    grossSalaryMonthly: '₹45,000 – ₹52,000 / month',
    ageLimitDetails: '21 to 38 Years as on 1st January',
    ageRelaxations: 'SEBC/SC/ST/Women: 5 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Single Stage Written Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR / CBT',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR/SEBC: 35% | SC/ST/PwBD: 30%',
        description: 'Single centralized written examination. 100 MCQs covering Diploma in Nursing subjects (80 Qs) + English (10 Qs) + Arithmetic (10 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Diploma in Nursing Sciences (80 Questions / 80 Marks)',
        weightagePercent: 80,
        highYieldTopics: [
          'Anatomy & Physiology, Microbiology, Psychology, Sociology, Fundamentals of Nursing',
          'Medical-Surgical Nursing, Midwifery & Gynecological, Child Health & Community Health Nursing'
        ]
      },
      {
        subject: 'Basic Arithmetic & English (20 Questions / 20 Marks)',
        weightagePercent: 20,
        highYieldTopics: [
          'HSC Standard Arithmetic: Fractions, percentage, average, profit & loss',
          'English: Punctuation, grammar, vocabulary, sentence correction'
        ]
      }
    ],
    preparationStrategy: [
      'Master the 80 nursing questions and score 15+ in English and basic arithmetic.',
      'Ensure ONMRC (Odisha Nursing and Midwives Council) registration is active.'
    ],
    selectionSteps: [
      'Step 1: Written Examination (100 Marks)',
      'Step 2: Shortlisting for District-Wise Counseling & Document Verification',
      'Step 3: District Cadre Allocation'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Odia language standard required for OSSSC?',
        answer: 'Yes, candidate must have passed Middle School (Class 7) with Odia as a language subject or passed the Odia test conducted by BSE Odisha.'
      }
    ]
  },

  // ─── 23. GUJARAT OJAS STAFF NURSE CLASS III ────────────────────────────────
  'exam-guj-ojas-nurse-2026': {
    examId: 'exam-guj-ojas-nurse-2026',
    officialCadre: 'Staff Nurse Class III (Gujarat State Health Cadre)',
    payMatrixLevel: 'Fixed Pay ₹26,000 for 5 years, then Level 5 Regular Matrix',
    basicPay: '₹26,000 (Fixed for 5 years) -> ₹29,200 (Level 5)',
    grossSalaryMonthly: '₹26,000 / month (Fixed) -> ₹48,000 / month (Regular)',
    ageLimitDetails: '20 to 40 Years',
    ageRelaxations: 'Reserved Categories: 5 Years | Female Candidates: 5 Years',
    stages: [
      {
        stageName: 'Competitive OMR Written Examination (200 Marks)',
        totalQuestions: 200,
        totalMarks: 200,
        durationMinutes: 120,
        mode: 'OMR Written',
        negativeMarking: '0.25 mark deduction',
        qualifyingMarks: 'Merit list based on cutoffs',
        description: 'Part 1: Nursing Curriculum (100 Marks) + Part 2: Gujarati Language, Grammar, GK & Current Affairs (100 Marks).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Nursing Subjects (100 Marks)',
        weightagePercent: 50,
        highYieldTopics: [
          'Basic Nursing Sciences, Medical-Surgical, Community Health, Midwifery & Child Health'
        ]
      },
      {
        subject: 'Gujarati Grammar, Literature & General Knowledge (100 Marks)',
        weightagePercent: 50,
        highYieldTopics: [
          'Gujarati Grammar: Jodani, Samarth, Sandhi, Chhand, Alankar',
          'General Knowledge: Gujarat history, geography, governance, Indian Constitution, current events'
        ]
      }
    ],
    preparationStrategy: [
      'Focus equally on Gujarati grammar & language skills (100 marks) and Nursing fundamentals (100 marks).'
    ],
    selectionSteps: [
      'Step 1: 200-Mark Competitive OMR Exam',
      'Step 2: Document Verification at Gandhinagar'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Gujarat Nursing Council (GNC) registration required?',
        answer: 'Yes, candidate must possess active registration with Gujarat Nursing Council (GNC).'
      }
    ]
  },

  // ─── 24. KERALA PSC STAFF NURSE GRADE II ───────────────────────────────────
  'exam-kerala-psc-nurse-2026': {
    examId: 'exam-kerala-psc-nurse-2026',
    officialCadre: 'Staff Nurse Grade II (Health Services & Insurance Medical Services)',
    payMatrixLevel: 'Kerala Revised Pay Scale ₹39,300 – ₹83,000',
    basicPay: '₹39,300 – ₹83,000',
    grossSalaryMonthly: '₹55,000 – ₹62,000 / month (+ DA, HRA, Medical Allowances)',
    ageLimitDetails: '20 to 36 Years as of 1st January',
    ageRelaxations: 'OBC: 3 Years | SC/ST: 5 Years',
    stages: [
      {
        stageName: 'Direct Recruitment OMR / Online CBT Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 75,
        mode: 'OMR / Online CBT',
        negativeMarking: '0.33 (1/3rd) mark deduction',
        qualifyingMarks: 'District-specific cutoffs',
        description: '100 Questions covering GNM / B.Sc. Nursing syllabus (Part 1 100% Nursing Knowledge).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Nursing & Allied Health Sciences (100 Questions)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy & Physiology, Nutrition & Biochemistry, Microbiology, Psychology & Sociology',
          'Fundamentals of Nursing & First Aid, Medical-Surgical Nursing, Community Health Nursing',
          'Midwifery & Obstetrical Nursing, Child Health Nursing, Mental Health Nursing'
        ]
      }
    ],
    preparationStrategy: [
      'Solve previous 10 years Kerala PSC Staff Nurse question papers.',
      'Ensure KNMC (Kerala Nurses and Midwives Council) registration is valid.'
    ],
    selectionSteps: [
      'Step 1: OMR/CBT Examination (100 Marks, 75 Mins)',
      'Step 2: District-wise Probability & Ranked Lists',
      'Step 3: Document Verification (One Time Registration Thulasi Verification)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Can candidates apply to multiple districts in Kerala PSC?',
        answer: 'Candidates can submit application for only one district at a time for district cadre vacancies.'
      }
    ]
  },

  // ─── 25. AP MHSRB STAFF NURSE ──────────────────────────────────────────────
  'exam-ap-mhsrb-nurse-2026': {
    examId: 'exam-ap-mhsrb-nurse-2026',
    officialCadre: 'Staff Nurse (Directorate of Medical Education / Public Health)',
    payMatrixLevel: 'RPS 2022 Pay Scale ₹34,580 – ₹1,07,210',
    basicPay: '₹34,580 – ₹1,07,210',
    grossSalaryMonthly: '₹52,000 – ₹60,000 / month',
    ageLimitDetails: '18 to 42 Years as on 1st July',
    ageRelaxations: 'BC/SC/ST/EWS: 5 Years | PwBD: 10 Years | Ex-Servicemen: 3 Years',
    stages: [
      {
        stageName: 'Single Stage Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'OC/EWS: 40% | BC: 35% | SC/ST/PwBD: 30%',
        description: '100 MCQs covering General Nursing & B.Sc. curriculum. Maximum 15 marks service weightage for contract/outsourced nurses in AP Govt hospitals.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Sciences (100 Questions)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy & Physiology, Nutrition, Biochemistry, Microbiology',
          'Medical-Surgical Nursing: Critical Care, Emergency Nursing, Peri-operative Care',
          'Midwifery & Obstetrical Nursing, Child Health / Pediatric Care, Community Health'
        ]
      }
    ],
    preparationStrategy: [
      'Focus on clinical scenarios and community health healthcare programs in Andhra Pradesh.'
    ],
    selectionSteps: [
      'Step 1: 100-Mark Online CBT',
      'Step 2: Weightage computation (CBT score + Contract service points)',
      'Step 3: Counseling and Zone-wise Posting'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is AP Nursing Council registration required?',
        answer: 'Yes, candidates must be registered with Andhra Pradesh Nursing and Midwives Council.'
      }
    ]
  },

  // ─── 26. KPSC KARNATAKA STAFF NURSE ────────────────────────────────────────
  'exam-kpsc-kar-nurse-2026': {
    examId: 'exam-kpsc-kar-nurse-2026',
    officialCadre: 'Staff Nurse (Directorate of Health & Family Welfare Services)',
    payMatrixLevel: 'Karnataka State Revised Scale ₹33,450 – ₹62,600',
    basicPay: '₹33,450 – ₹62,600',
    grossSalaryMonthly: '₹48,000 – ₹55,000 / month',
    ageLimitDetails: '18 to 35 Years (General Merit)',
    ageRelaxations: 'Category 2A/2B/3A/3B: 3 Years (Up to 38 yrs) | SC/ST/Cat-1: 5 Years (Up to 40 yrs)',
    stages: [
      {
        stageName: 'Paper 1: General Knowledge (100 Marks)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'OMR / CBT',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: '35%',
        description: 'General Studies, Karnataka History, Geography, Indian Constitution, Mental Ability.'
      },
      {
        stageName: 'Paper 2: Professional Nursing Knowledge (100 Marks)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR / CBT',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: '35%',
        description: 'Diploma in Nursing & B.Sc. Nursing curriculum subjects.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (Paper 2)',
        weightagePercent: 50,
        highYieldTopics: [
          'Fundamentals, Med-Surg Nursing, Community Health, Midwifery, Pediatric Care'
        ]
      },
      {
        subject: 'General Knowledge & Kannada Language (Paper 1)',
        weightagePercent: 50,
        highYieldTopics: [
          'Karnataka State Schemes, History of Karnataka, Current Affairs, Kannada Language Compulsory Test'
        ]
      }
    ],
    preparationStrategy: [
      'Balance General Studies Paper 1 with Technical Nursing Paper 2.',
      'Prepare for compulsory Kannada Language test if Kannada was not studied in SSLC.'
    ],
    selectionSteps: [
      'Step 1: Competitive Written Exam (Paper 1 + Paper 2 = 200 Marks)',
      'Step 2: 1:2 Verification of Certificates at KPSC Central Office, Bangalore'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Kannada language proficiency mandatory?',
        answer: 'Yes, candidates who did not have Kannada as first or second language in 10th standard must clear the KPSC Kannada Language Exam (50 marks).'
      }
    ]
  },

  // ─── 27. MAHARASHTRA DHS AROGYA VIBHAG STAFF NURSE ─────────────────────────
  'exam-maha-dhs-nurse-2026': {
    examId: 'exam-maha-dhs-nurse-2026',
    officialCadre: 'Staff Nurse (Group C, Arogya Seva Mandal)',
    payMatrixLevel: '7th CPC Level S-10 (₹35,400 – ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹52,000 – ₹60,000 / month',
    ageLimitDetails: '18 to 38 Years (Open) | Up to 43 Years (Backward Classes)',
    ageRelaxations: 'Reserved Categories: 5 Years | PwBD: Up to 45 Years',
    stages: [
      {
        stageName: 'Single Stage Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 200,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: '45% (90 Marks out of 200)',
        description: '100 MCQs carrying 2 marks each. 80 Technical Nursing Qs (160 Marks) + 20 Non-Technical Qs (40 Marks: Marathi, English, GK, Reasoning).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (80 Questions / 160 Marks)',
        weightagePercent: 80,
        highYieldTopics: [
          'Anatomy & Physiology, Medical-Surgical Nursing, Pharmacology, Midwifery, Pediatric Care, Community Health'
        ]
      },
      {
        subject: 'General Awareness, Marathi & English (20 Questions / 40 Marks)',
        weightagePercent: 20,
        highYieldTopics: [
          'Marathi Grammar: Vyakaran, Samarthak Shabd, Prayog',
          'English Grammar, General Knowledge of Maharashtra, Basic Mental Ability'
        ]
      }
    ],
    preparationStrategy: [
      'Focus heavily on the 80 technical nursing questions carrying 160 marks.',
      'Ensure Maharashtra Nursing Council (MNC) registration certificate is up-to-date.'
    ],
    selectionSteps: [
      'Step 1: Online CBT Examination (200 Marks)',
      'Step 2: Circle-wise Merit List (Mumbai, Pune, Nashik, Kolhapur, Aurangabad, Latur, Akola, Nagpur)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is MNC registration required?',
        answer: 'Yes, registration with Maharashtra Nursing Council (MNC), Mumbai is mandatory.'
      }
    ]
  },

  // ─── 28. MP ESB VYAPAM STAFF NURSE ─────────────────────────────────────────
  'exam-mp-esb-nurse-2026': {
    examId: 'exam-mp-esb-nurse-2026',
    officialCadre: 'Staff Nurse (Group 5 Paramedical & Nursing Cadre)',
    payMatrixLevel: 'Pay Level 7 (₹28,700 – ₹91,300)',
    basicPay: '₹28,700 – ₹91,300',
    grossSalaryMonthly: '₹42,000 – ₹48,000 / month',
    ageLimitDetails: '18 to 40 Years (45 Years for Female/Reserved/Contract candidates)',
    ageRelaxations: 'MP Domicile SC/ST/OBC/Women: 5 Years',
    stages: [
      {
        stageName: 'Single Stage Online CBT Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR/EWS: 50% | SC/ST/OBC: 40%',
        description: '100 MCQs. 75 Questions Technical Nursing + 25 Questions General Section (General Knowledge, Hindi, English, Math, Science, Reasoning).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (75 Marks)',
        weightagePercent: 75,
        highYieldTopics: [
          'Anatomy, Physiology, Medical-Surgical Nursing, Community Health, Midwifery & Gynecological, Child Health'
        ]
      },
      {
        subject: 'General Section (25 Marks)',
        weightagePercent: 25,
        highYieldTopics: [
          'Samanya Gyan (MP Specific), Samanya Hindi, Samanya English, Samanya Ganit, Samanya Vigyan, Reasoning'
        ]
      }
    ],
    preparationStrategy: [
      'Solve MP ESB Vyapam previous year Group 5 question papers.',
      'Register with MP Nursing Council and keep MP Employment Portal registration live.'
    ],
    selectionSteps: [
      'Step 1: Online CBT Exam',
      'Step 2: Department-wise Merit Rank Allocation'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is MP Employment Exchange registration mandatory?',
        answer: 'Yes, active registration on the MP Rojgar Portal (MP Online) is mandatory at the time of form filling.'
      }
    ]
  },

  // ─── 29. HSSC HARYANA STAFF NURSE ──────────────────────────────────────────
  'exam-hssc-har-nurse-2026': {
    examId: 'exam-hssc-har-nurse-2026',
    officialCadre: 'Staff Nurse (Group C, Technical Health Cadre)',
    payMatrixLevel: 'Pay Matrix Level 6 (₹35,400 – ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹52,000 – ₹60,000 / month',
    ageLimitDetails: '18 to 42 Years',
    ageRelaxations: 'SC/BC of Haryana: 5 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'CET Mains Technical OMR Examination (97.5 Marks)',
        totalQuestions: 100,
        totalMarks: 97.5,
        durationMinutes: 105,
        mode: 'OMR Written',
        negativeMarking: '0.975 deduction for unattempted 5th option',
        qualifyingMarks: 'General: 50% | Reserved: 40%',
        description: '70% Technical Nursing Subject + 20% Haryana History, Culture, Geography + 10% Computer Knowledge.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Technical Nursing Subjects (70%)',
        weightagePercent: 70,
        highYieldTopics: [
          'Medical-Surgical, Community Health, Midwifery, Child Health, Mental Health, Pharmacology'
        ]
      },
      {
        subject: 'Haryana GK & Computer Literacy (30%)',
        weightagePercent: 30,
        highYieldTopics: [
          'Haryana History, Folk Dance, Monuments, Basic Computer Hardware & MS Office'
        ]
      }
    ],
    preparationStrategy: [
      'Ensure you fill the 5th bubble in OMR to avoid unattempted negative deduction.',
      'Review Haryana-specific public health initiatives.'
    ],
    selectionSteps: [
      'Step 1: CET Mains Written Examination (97.5 Marks)',
      'Step 2: Socio-Economic Criteria Verification (2.5 Marks)',
      'Step 3: Document Verification at Panchkula'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is HNRC registration mandatory?',
        answer: 'Yes, registration with Haryana Nurses and Nurse-Midwives Council is required.'
      }
    ]
  },

  // ─── 30. PUNJAB BFUHS STAFF NURSE ──────────────────────────────────────────
  'exam-punjab-bfuhs-nurse-2026': {
    examId: 'exam-punjab-bfuhs-nurse-2026',
    officialCadre: 'Staff Nurse (Department of Health & Family Welfare / Medical Education)',
    payMatrixLevel: 'Pay Matrix Level 5 (Initial Pay ₹29,200 for probation)',
    basicPay: '₹29,200 – ₹92,300',
    grossSalaryMonthly: '₹45,000 – ₹52,000 / month',
    ageLimitDetails: '18 to 37 Years as on 1st January',
    ageRelaxations: 'SC/BC of Punjab: 5 Years | State Govt Employees: Up to 45 Years',
    stages: [
      {
        stageName: 'Single Stage OMR Written Test',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR (Offline)',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR: 35% | SC/BC: 30%',
        description: '100 MCQs based on Nursing Curriculum (80 Qs) + General Knowledge & Punjabi Language (20 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Nursing Curriculum (80 Marks)',
        weightagePercent: 80,
        highYieldTopics: [
          'Anatomy, Med-Surg, OBG, Pediatrics, Fundamentals, Community Health Nursing'
        ]
      },
      {
        subject: 'Punjabi Language & GK (20 Marks)',
        weightagePercent: 20,
        highYieldTopics: [
          'Punjabi Grammar (Matric Standard), Punjab History & Culture, Current Affairs'
        ]
      }
    ],
    preparationStrategy: [
      'Ensure 10th standard Punjabi language passing certificate is available.',
      'Keep PNRC (Punjab Nurses Registration Council) certificate active.'
    ],
    selectionSteps: [
      'Step 1: OMR Written Test',
      'Step 2: 1:3 Merit List Counseling at BFUHS Faridkot'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Punjabi compulsory in 10th standard for Punjab Staff Nurse?',
        answer: 'Yes, candidate must have passed Matriculation with Punjabi as one of the compulsory subjects.'
      }
    ]
  },

  // ─── 31. JKSSB JUNIOR STAFF NURSE ──────────────────────────────────────────
  'exam-jkssb-nurse-2026': {
    examId: 'exam-jkssb-nurse-2026',
    officialCadre: 'Junior Staff Nurse (Health & Medical Education Dept, UT of J&K)',
    payMatrixLevel: 'Pay Level 4 (₹25,500 – ₹81,100)',
    basicPay: '₹25,500 – ₹81,100',
    grossSalaryMonthly: '₹38,000 – ₹45,000 / month',
    ageLimitDetails: '18 to 40 Years (Open Merit) | Up to 43 Years (RBA/SC/ST/ALC)',
    ageRelaxations: 'Reserved Categories: 3 Years | PwBD: 2 Years | Govt Servants: Up to 40 Years',
    stages: [
      {
        stageName: 'Single Stage Online Computer Based Test (CBT)',
        totalQuestions: 120,
        totalMarks: 120,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'Merit list based on cutoffs',
        description: '120 Questions covering Anatomy, Fundamentals, Med-Surg, Midwifery, Community Health, and Child Health.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Nursing & Paramedical Curriculum (120 Questions)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy & Physiology (15 Qs), Microbiology & Pathology (10 Qs), Fundamentals of Nursing (25 Qs), Medical-Surgical Nursing (30 Qs), Midwifery & Gynae (20 Qs), Community Health & Pediatrics (20 Qs)'
        ]
      }
    ],
    preparationStrategy: [
      'Focus on high-yield sections: Medical-Surgical Nursing and Fundamentals of Nursing.'
    ],
    selectionSteps: [
      'Step 1: Online CBT Examination',
      'Step 2: Document Verification for J&K Domicile Candidates'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is J&K Domicile certificate required?',
        answer: 'Yes, candidate must be a Domicile of Union Territory of Jammu & Kashmir.'
      }
    ]
  },

  // ─── 32. ASSAM DME STAFF NURSE ─────────────────────────────────────────────
  'exam-assam-dme-nurse-2026': {
    examId: 'exam-assam-dme-nurse-2026',
    officialCadre: 'Staff Nurse (Grade III, Medical College Hospitals)',
    payMatrixLevel: 'Pay Band 2 (₹14,000 – ₹60,500 + Grade Pay ₹6,800)',
    basicPay: '₹20,800 – ₹60,500',
    grossSalaryMonthly: '₹34,000 – ₹40,000 / month',
    ageLimitDetails: '18 to 40 Years as on 1st January',
    ageRelaxations: 'OBC/MOBC: 3 Years | SC/ST: 5 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Single Stage Written Examination / Skill Test',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR (Offline)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'Merit rank',
        description: '100 MCQs covering GNM/B.Sc. Nursing subjects + General English & Assam GK.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (80 Marks)',
        weightagePercent: 80,
        highYieldTopics: [
          'Basic Nursing Sciences, Medical-Surgical Nursing, Community Health, Midwifery, Pediatric Care'
        ]
      },
      {
        subject: 'General Knowledge & English (20 Marks)',
        weightagePercent: 20,
        highYieldTopics: [
          'Assam Geography, National Parks, General English Grammar'
        ]
      }
    ],
    preparationStrategy: [
      'Ensure registration with Assam Nurses, Midwives and Health Visitors Council is current.'
    ],
    selectionSteps: [
      'Step 1: OMR Written Examination',
      'Step 2: Document Verification at DME Office, Sixmile, Guwahati'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Assam Employment Exchange registration required?',
        answer: 'Yes, valid registration in any Employment Exchange in Assam is mandatory.'
      }
    ]
  },

  // ─── 33. NHM COMMUNITY HEALTH OFFICER (CHO) ────────────────────────────────
  'exam-nhm-cho-panindia-2026': {
    examId: 'exam-nhm-cho-panindia-2026',
    officialCadre: 'Community Health Officer (CHO / MLHP, Ayushman Bharat)',
    payMatrixLevel: 'Fixed Honorarium ₹25,000 + Performance Incentive up to ₹15,000/mo',
    basicPay: '₹25,000 (Fixed)',
    grossSalaryMonthly: '₹35,000 – ₹40,000 / month (with PLP Performance Linked Payment)',
    ageLimitDetails: '21 to 35 Years (40 Years for OBC/SC/ST)',
    ageRelaxations: 'Reserved Categories: 5 Years',
    stages: [
      {
        stageName: 'Common Online Screening Examination (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR: 33% | SC/ST/OBC: 30%',
        description: 'Section 1: Nursing & Public Health (80 Questions) + Section 2: General Knowledge & Aptitude (20 Questions).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Primary Healthcare & Community Health (80 Marks)',
        weightagePercent: 80,
        highYieldTopics: [
          'Ayushman Bharat & Health and Wellness Centre (HWC) guidelines',
          'Maternal Health: Antenatal care, High-risk pregnancy, Partograph, Postpartum hemorrhage',
          'Child Health: National Immunization Schedule (NIS), IMNCI, Malnutrition management (SAM/MAM)',
          'Communicable & Non-Communicable Diseases: TB (Ni-kshay), Leprosy, Hypertension, Diabetes, Cancer screening',
          'Adolescent & Family Planning: Contraceptive methods, Antara, Chhaya, Rashtriya Kishor Swasthya Karyakram (RKSK)'
        ]
      },
      {
        subject: 'General Knowledge & Basic Aptitude (20 Marks)',
        weightagePercent: 20,
        highYieldTopics: [
          'National Health Programs, Current Health Initiatives, Basic Numerical & Reasoning Skills'
        ]
      }
    ],
    preparationStrategy: [
      'Focus 80% of study time on Community Health Nursing, National Health Programs, and NCD screening guidelines.',
      'Candidates with B.Sc. Nursing with Integrated CPH (Certificate Course in Community Health) are eligible for direct posting.'
    ],
    selectionSteps: [
      'Step 1: Online CBT Screening Examination',
      'Step 2: State-wise District Allocation and 6-Month CPH Bridge Program (for non-CPH candidates)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Who is exempted from the 6-month Bridge Program (BPCCHN)?',
        answer: 'Candidates who passed B.Sc. Nursing / Post Basic B.Sc. from academic year 2020-21 onwards with integrated Certificate Program in Community Health (CPH) are eligible for direct appointment without the 6-month bridge course.'
      }
    ]
  },

  // ─── 34. HPPSC HIMACHAL PRADESH STAFF NURSE ────────────────────────────────
  'exam-hppsc-hp-nurse-2026': {
    examId: 'exam-hppsc-hp-nurse-2026',
    officialCadre: 'Staff Nurse Class III (Health & Family Welfare Dept, HP)',
    payMatrixLevel: 'Pay Level 6 (₹35,400 – ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹48,000 – ₹56,000 / month (+ Tribal / Remote Area Allowance)',
    ageLimitDetails: '18 to 45 Years as on 1st January',
    ageRelaxations: 'HP Domicile SC/ST/OBC/WFF: 5 Years',
    stages: [
      {
        stageName: 'Paper 1: General Screening Test (100 Marks)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT / OMR',
        negativeMarking: '0.25 mark deduction',
        qualifyingMarks: '35%',
        description: '80 Nursing Subject Questions + 10 HP General Knowledge + 10 National/International Affairs.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects (80 Marks)',
        weightagePercent: 80,
        highYieldTopics: [
          'Anatomy & Physiology, Med-Surg, Community Health, Midwifery, Child Health, Pharmacology'
        ]
      },
      {
        subject: 'Himachal Pradesh GK & Current Events (20 Marks)',
        weightagePercent: 20,
        highYieldTopics: [
          'Himachal Geography, Rivers, Culture, Fairs & Festivals, Himachal Health Schemes'
        ]
      }
    ],
    preparationStrategy: [
      'Study Himachal Pradesh General Knowledge (10 marks) alongside core nursing subjects.'
    ],
    selectionSteps: [
      'Step 1: Screening Test (100 Marks)',
      'Step 2: Document Verification at HPPSC Nigam Vihar, Shimla'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is registration with HPNRC required?',
        answer: 'Yes, registration with Himachal Pradesh State Nurses Registration Council (HPNRC) is mandatory.'
      }
    ]
  },

  // ─── 35. CG VYAPAM CHHATTISGARH STAFF NURSE ────────────────────────────────
  'exam-cg-vyapam-nurse-2026': {
    examId: 'exam-cg-vyapam-nurse-2026',
    officialCadre: 'Staff Nurse (Directorate of Health Services, CG)',
    payMatrixLevel: 'Pay Matrix Level 7 (₹28,700 – ₹91,300)',
    basicPay: '₹28,700 – ₹91,300',
    grossSalaryMonthly: '₹42,000 – ₹48,000 / month',
    ageLimitDetails: '18 to 35 Years (40 Years for CG Domicile Candidates)',
    ageRelaxations: 'CG SC/ST/OBC/Female: 5 Years (Up to 45 years)',
    stages: [
      {
        stageName: 'Single Stage OMR Examination (100 Marks)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR (Offline)',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR: 33% | SC/ST/OBC: 23%',
        description: '100 MCQs covering full B.Sc. Nursing curriculum.'
      }
    ],
    syllabusModules: [
      {
        subject: 'B.Sc. Nursing Curriculum (100 Questions)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy, Physiology, Biochemistry, Microbiology, Psychology, Sociology',
          'Medical-Surgical, Community Health, Midwifery & Obstetrical, Pediatric Care, Mental Health'
        ]
      }
    ],
    preparationStrategy: [
      'Practice standard B.Sc. Nursing MCQs with high accuracy to avoid negative marking.'
    ],
    selectionSteps: [
      'Step 1: CG Vyapam OMR Exam',
      'Step 2: Counseling and Division-wise Posting (Raipur, Bilaspur, Durg, Bastar, Surguja)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Chhattisgarh Nursing Council registration mandatory?',
        answer: 'Yes, registration with Chhattisgarh Nursing Council, Raipur is required.'
      }
    ]
  },

  // ─── 36. JSSC JHARKHAND STAFF NURSE GRADE A ────────────────────────────────
  'exam-jssc-jhk-nurse-2026': {
    examId: 'exam-jssc-jhk-nurse-2026',
    officialCadre: 'Staff Nurse Grade A (Jharkhand Health Services)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹65,000 – ₹72,000 / month',
    ageLimitDetails: '21 to 35 Years (General UR) | Up to 38 Years (Female UR/OBC) | Up to 40 Years (SC/ST)',
    ageRelaxations: 'OBC: 2–3 Years | SC/ST: 5 Years',
    stages: [
      {
        stageName: 'Single Stage Computer Based Test (CBT)',
        totalQuestions: 120,
        totalMarks: 360,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '1 mark deducted per wrong answer (3 marks for correct)',
        qualifyingMarks: 'UR: 40% | BC-2: 36.5% | BC-1: 34% | SC/ST/Women: 32%',
        description: '120 MCQs carrying 3 marks each (Total 360 Marks). Full nursing syllabus.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Sciences (120 Questions / 360 Marks)',
        weightagePercent: 100,
        highYieldTopics: [
          'Anatomy & Physiology, Nutrition, Microbiology, Medical-Surgical Nursing',
          'Community Health Nursing, Midwifery & Obstetrical Care, Child Health Nursing, Pharmacology'
        ]
      }
    ],
    preparationStrategy: [
      'Each question carries 3 marks with 1 mark negative deduction — avoid blind guessing.'
    ],
    selectionSteps: [
      'Step 1: 360-Mark Online CBT',
      'Step 2: Document Verification at JSSC Office, Namkum, Ranchi'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is Jharkhand Nursing Council registration required?',
        answer: 'Yes, registration with Jharkhand Nursing Council (JNC) is mandatory.'
      }
    ]
  },

  // ─── 37. GOA MEDICAL COLLEGE STAFF NURSE ───────────────────────────────────
  'exam-goa-gmc-nurse-2026': {
    examId: 'exam-goa-gmc-nurse-2026',
    officialCadre: 'Staff Nurse (Goa Medical College & DHS)',
    payMatrixLevel: 'Pay Matrix Level 6 (₹35,400 – ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹50,000 – ₹58,000 / month',
    ageLimitDetails: 'Up to 45 Years',
    ageRelaxations: 'Govt Servants: 5 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Computer Based Recruitment Test (CBRT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR: 65% | OBC: 60% | SC/ST: 55%',
        description: '100 MCQs covering Nursing Subjects (75 Qs) + English & Konkani (25 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Nursing Curriculum & Clinical Care (75 Marks)',
        weightagePercent: 75,
        highYieldTopics: [
          'Med-Surg, Critical Care, Midwifery, Pediatric Care, Fundamentals'
        ]
      },
      {
        subject: 'Konkani Language & General Ability (25 Marks)',
        weightagePercent: 25,
        highYieldTopics: [
          'Basic Konkani language comprehension, English communication, General Knowledge'
        ]
      }
    ],
    preparationStrategy: [
      'Review Konkani vocabulary alongside clinical nursing scenarios.'
    ],
    selectionSteps: [
      'Step 1: CBRT Written Examination',
      'Step 2: Document Verification at Goa PSC / GMC Bambolim'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is 15-year residence certificate required for Goa Staff Nurse?',
        answer: 'Yes, 15 years Goa residence certificate issued by the competent Mamlatdar is mandatory.'
      }
    ]
  },

  // ─── 38. GMCH SECTOR 32 CHANDIGARH NURSING OFFICER ─────────────────────────
  'exam-gmch-chd-nurse-2026': {
    examId: 'exam-gmch-chd-nurse-2026',
    officialCadre: 'Nursing Officer (Group B, Level 7)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹80,000 – ₹88,000 / month',
    ageLimitDetails: '18 to 37 Years as on 1st January',
    ageRelaxations: 'SC: 5 Years | OBC: 3 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Written Examination (100 Marks)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR Written',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR/EWS: 50% | SC/PwBD: 40%',
        description: 'Part 1: Nursing Core (70 Qs) + Part 2: Practical Clinical Assessment (30 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing & Practical Assessment',
        weightagePercent: 100,
        highYieldTopics: [
          'Medical-Surgical, OBG, Pediatrics, ICU & Emergency procedures, Drug administration'
        ]
      }
    ],
    preparationStrategy: [
      'Complete the mandatory 80-hour Course on Computer Concepts (CCC) from NIELIT before applying.'
    ],
    selectionSteps: [
      'Step 1: Written Examination (100 Marks)',
      'Step 2: Document Verification at GMCH-32 Chandigarh Campus'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is ICT computer course certificate mandatory?',
        answer: 'Yes, 80-hour Certificate Course on Computer Concepts (CCC) from a Govt-recognized institution (NIELIT) is mandatory as per Chandigarh Administration service rules.'
      }
    ]
  },

  // ─── 39. IGIMS PATNA NURSING OFFICER ───────────────────────────────────────
  'exam-igims-patna-nurse-2026': {
    examId: 'exam-igims-patna-nurse-2026',
    officialCadre: 'Nursing Officer (Group B, Autonomous Apex Institute)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹75,000 – ₹82,000 / month',
    ageLimitDetails: '18 to 37 Years (Male UR) | Up to 40 Years (Female UR/OBC) | Up to 42 Years (SC/ST)',
    ageRelaxations: 'Bihar Domicile Relaxations Apply',
    stages: [
      {
        stageName: 'Single Stage Computer Based Test (CBT)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 (1/4th) mark deduction',
        qualifyingMarks: 'UR: 40% | BC: 36.5% | EBC: 34% | SC/ST: 32%',
        description: '100 MCQs covering full B.Sc./GNM curriculum.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Clinical Nursing Sciences',
        weightagePercent: 100,
        highYieldTopics: [
          'Medical-Surgical, Critical Care, Midwifery, Pediatrics, Fundamentals'
        ]
      }
    ],
    preparationStrategy: [
      'Prepare with standard AIIMS NORCET level question banks.'
    ],
    selectionSteps: [
      'Step 1: 100-Mark Online CBT',
      'Step 2: Document Verification at IGIMS Administrative Block, Patna'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Can candidates from outside Bihar apply for IGIMS?',
        answer: 'Yes, candidates from all states can apply under Unreserved (UR) category.'
      }
    ]
  },

  // ─── 40. RIMS RANCHI STAFF NURSE GRADE A ───────────────────────────────────
  'exam-rims-ranchi-nurse-2026': {
    examId: 'exam-rims-ranchi-nurse-2026',
    officialCadre: 'Staff Nurse Grade A (Autonomous Institute of National Standing)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹74,000 – ₹82,000 / month',
    ageLimitDetails: 'Up to 35 Years (UR) | Up to 38 Years (OBC) | Up to 40 Years (SC/ST)',
    ageRelaxations: 'Reserved Categories: 3–5 Years',
    stages: [
      {
        stageName: 'Single Stage Online CBT Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 mark deduction',
        qualifyingMarks: 'UR: 40% | BC: 36.5% | SC/ST: 32%',
        description: '100 MCQs covering Nursing Subjects (80 Qs) + General Knowledge & Reasoning (20 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Core Nursing Subjects',
        weightagePercent: 80,
        highYieldTopics: [
          'Med-Surg, Emergency Trauma Care, Midwifery, Pediatrics, Fundamentals'
        ]
      },
      {
        subject: 'General Awareness & Reasoning',
        weightagePercent: 20,
        highYieldTopics: [
          'National Current Affairs, General Science, Logical Reasoning'
        ]
      }
    ],
    preparationStrategy: [
      'Focus on trauma care and emergency nursing alongside general knowledge.'
    ],
    selectionSteps: [
      'Step 1: Online CBT',
      'Step 2: Document Verification at RIMS Campus, Bariatu, Ranchi'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is GNM eligible with experience?',
        answer: 'Yes, GNM with 2 years experience in a minimum 50-bedded hospital is eligible.'
      }
    ]
  },

  // ─── 41. CNCI KOLKATA STAFF NURSE ──────────────────────────────────────────
  'exam-cnci-kolkata-nurse-2026': {
    examId: 'exam-cnci-kolkata-nurse-2026',
    officialCadre: 'Staff Nurse (Group B, National Cancer Institute)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹76,000 – ₹84,000 / month',
    ageLimitDetails: 'Up to 35 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years',
    stages: [
      {
        stageName: 'Written CBT Examination',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: '0.25 mark deduction',
        qualifyingMarks: 'UR/OBC: 50% | SC/ST: 45%',
        description: '100 MCQs with heavy focus on Oncology Nursing, Chemotherapy Handling, and Palliative Care.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Oncology & Medical-Surgical Nursing',
        weightagePercent: 70,
        highYieldTopics: [
          'Chemotherapy Administration & Extravasation Management, Radiation Safety, Neutropenic Precautions, Pain & Palliative Care'
        ]
      },
      {
        subject: 'General Nursing & Infection Control',
        weightagePercent: 30,
        highYieldTopics: [
          'CLABSI bundles, Blood Transfusion protocols, Bio-medical waste rules'
        ]
      }
    ],
    preparationStrategy: [
      'Master chemotherapy drugs, side effects, oncologic emergencies (Tumor Lysis, SVC Syndrome).'
    ],
    selectionSteps: [
      'Step 1: Written CBT Exam',
      'Step 2: Document Verification at CNCI Newtown Campus, Kolkata'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Is prior oncology experience preferred?',
        answer: 'Yes, candidates with oncology diploma or 1+ year cancer hospital ICU experience receive selection preference.'
      }
    ]
  },

  // ─── 42. SSB SUB-INSPECTOR STAFF NURSE ─────────────────────────────────────
  'exam-ssb-mha-nurse-2026': {
    examId: 'exam-ssb-mha-nurse-2026',
    officialCadre: 'Sub-Inspector (Staff Nurse, Group B Combatised)',
    payMatrixLevel: '7th CPC Level 6 (₹35,400 – ₹1,12,400)',
    basicPay: '₹35,400 – ₹1,12,400',
    grossSalaryMonthly: '₹62,000 – ₹70,000 / month (+ Ration, Border Hardship Allowance)',
    ageLimitDetails: '21 to 30 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years',
    stages: [
      {
        stageName: 'Stage 1: Physical Efficiency Test (PET/PST)',
        totalQuestions: 0,
        totalMarks: 0,
        durationMinutes: 0,
        mode: 'Physical Qualifying',
        negativeMarking: 'None',
        qualifyingMarks: 'Pass mandatory race benchmarks',
        description: 'Physical screening at SSB Frontier HQ.'
      },
      {
        stageName: 'Stage 2: Written Examination (100 Marks)',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 120,
        mode: 'OMR / CBT',
        negativeMarking: 'No negative marking',
        qualifyingMarks: 'UR/EWS/OBC: 45% | SC/ST: 40%',
        description: 'General Awareness (25 Qs) + Nursing Technical (75 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Paramilitary Nursing & Trauma Care (75 Marks)',
        weightagePercent: 75,
        highYieldTopics: [
          'Emergency Trauma, Blast Injuries, Wound Debridement, Infection Control, Medical-Surgical'
        ]
      },
      {
        subject: 'General Knowledge & Reasoning (25 Marks)',
        weightagePercent: 25,
        highYieldTopics: [
          'Indian Geography, Border Security, Basic Mental Ability'
        ]
      }
    ],
    preparationStrategy: [
      'Maintain running and physical fitness alongside nursing MCQ practice.'
    ],
    selectionSteps: [
      'Stage 1: PST/PET',
      'Stage 2: Written Examination',
      'Stage 3: Detailed Medical Examination (DME)'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Are female candidates eligible for SSB Staff Nurse?',
        answer: 'Yes, female candidates possessing GNM / B.Sc. Nursing and meeting physical standards are eligible.'
      }
    ]
  },

  // ─── 43. NPCIL NURSE 'A' (DEPT OF ATOMIC ENERGY) ───────────────────────────
  'exam-npcil-dae-nurse-2026': {
    examId: 'exam-npcil-dae-nurse-2026',
    officialCadre: 'Nurse \'A\' (Group B, Central PSU / Dept of Atomic Energy)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹78,000 – ₹86,000 / month (+ Atomic Township Quarters, Free Healthcare & Allowances)',
    ageLimitDetails: '18 to 30 Years as on closing date',
    ageRelaxations: 'SC/ST: 5 Years | OBC (NCL): 3 Years | PwBD: 10 Years',
    stages: [
      {
        stageName: 'Stage 1: Preliminary Screening Test (50 Questions / 150 Marks)',
        totalQuestions: 50,
        totalMarks: 150,
        durationMinutes: 60,
        mode: 'CBT (Online)',
        negativeMarking: '1 mark deducted per wrong answer (3 marks for correct)',
        qualifyingMarks: 'General: 40% | SC/ST/OBC: 30%',
        description: 'Mathematics (20 Qs), Science (20 Qs), General Awareness (10 Qs).'
      },
      {
        stageName: 'Stage 2: Advanced Technical Nursing Test (50 Questions / 150 Marks)',
        totalQuestions: 50,
        totalMarks: 150,
        durationMinutes: 120,
        mode: 'CBT (Online)',
        negativeMarking: '1 mark deducted per wrong answer (3 marks for correct)',
        qualifyingMarks: 'General: 30% | Reserved: 20%',
        description: '50 Advanced Technical MCQs based on B.Sc./GNM syllabus. Merit list is prepared solely on Stage 2 score.'
      },
      {
        stageName: 'Stage 3: Skill Test (Go / No-Go)',
        totalQuestions: 0,
        totalMarks: 50,
        durationMinutes: 30,
        mode: 'Skill Test / Practical',
        negativeMarking: 'None',
        qualifyingMarks: 'Qualifying',
        description: 'Practical clinical procedure evaluation on mannequins.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Advanced Nursing & Industrial Health (Stage 2)',
        weightagePercent: 100,
        highYieldTopics: [
          'Occupational Health & Radiation Safety, Emergency Trauma Care, Medical-Surgical, ICU Procedures, Pharmacology'
        ]
      }
    ],
    preparationStrategy: [
      'Master High School Mathematics and Science for Stage 1 to qualify for Stage 2 Advanced Nursing Test.'
    ],
    selectionSteps: [
      'Stage 1: Preliminary Test (Qualifying)',
      'Stage 2: Advanced Test (Merit Ranking)',
      'Stage 3: Practical Skill Test (Qualifying)',
      'Stage 4: Document Verification and Pre-Employment Medical Exam'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'What is Nursing \'A\' Certificate?',
        answer: 'Candidates with B.Sc. Nursing or 3-year GNM Diploma and valid registration with Central/State Nursing Council are recognized as possessing Nursing \'A\' certificate.'
      }
    ]
  },

  // ─── 44. ISRO NURSE 'B' (DEPT OF SPACE) ────────────────────────────────────
  'exam-isro-dos-nurse-2026': {
    examId: 'exam-isro-dos-nurse-2026',
    officialCadre: 'Nurse \'B\' (Level 7, Department of Space / ISRO)',
    payMatrixLevel: '7th CPC Level 7 (₹44,900 – ₹1,42,400)',
    basicPay: '₹44,900 – ₹1,42,400',
    grossSalaryMonthly: '₹78,000 – ₹86,000 / month (+ ISRO Quarters & Space Center Medical Benefits)',
    ageLimitDetails: '18 to 35 Years as on closing date',
    ageRelaxations: 'SC/ST: 5 Years | OBC: 3 Years | Ex-Servicemen: Deduct military service + 3 yrs',
    stages: [
      {
        stageName: 'Stage 1: Written Examination (80 Questions / 80 Marks)',
        totalQuestions: 80,
        totalMarks: 80,
        durationMinutes: 90,
        mode: 'CBT (Online)',
        negativeMarking: '0.33 (1/3rd) mark deduction',
        qualifyingMarks: 'UR: 50% (32/80) | Reserved: 40% (24/80)',
        description: '80 MCQs covering full Nursing curriculum and clinical procedures.'
      },
      {
        stageName: 'Stage 2: Skill Test (100 Marks)',
        totalQuestions: 0,
        totalMarks: 100,
        durationMinutes: 45,
        mode: 'Skill Test / Practical',
        negativeMarking: 'None',
        qualifyingMarks: '60% (60/100)',
        description: 'Practical clinical procedure evaluation on 1:5 ratio candidates based on Stage 1 written rank.'
      }
    ],
    syllabusModules: [
      {
        subject: 'Comprehensive Clinical & Aerospace First Aid Nursing',
        weightagePercent: 100,
        highYieldTopics: [
          'Emergency Resuscitation & Defibrillation, Mechanical Ventilation, Trauma & Burn Management, Pharmacology, Biomedical Waste Management'
        ]
      }
    ],
    preparationStrategy: [
      'Aim for 65+ out of 80 in Stage 1 Written Test to secure a top rank for Stage 2 Skill Test calling.'
    ],
    selectionSteps: [
      'Step 1: 80-Mark Online Written Test (CBT)',
      'Step 2: Practical Skill Test (1:5 shortlist ratio)',
      'Step 3: Document Verification and Pre-Employment Medical Fitness'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Where are ISRO Nurse \'B\' postings located?',
        answer: 'Postings are at ISRO Space Centers including SDSC SHAR Sriharikota, VSSC Thiruvananthapuram, URSC Bengaluru, SAC Ahmedabad, and LPSC Valiamala.'
      }
    ]
  },

  // ─── 45. SAIL PLANT HOSPITALS STAFF NURSE ──────────────────────────────────
  'exam-sail-med-nurse-2026': {
    examId: 'exam-sail-med-nurse-2026',
    officialCadre: 'Staff Nurse / Proficiency Trainee (SAIL 500+ Bed Plant Hospitals)',
    payMatrixLevel: 'Maharatna PSU Stipend + Regular Level S-3 Cadre upon absorption',
    basicPay: '₹26,000 (Trainee) -> ₹38,000 – ₹85,000 (Regular S-3)',
    grossSalaryMonthly: '₹35,000 – ₹55,000 / month (+ Free Hospital Accommodation & Medical)',
    ageLimitDetails: 'Up to 30 Years',
    ageRelaxations: 'SC/ST: 5 Years | OBC (NCL): 3 Years',
    stages: [
      {
        stageName: 'Written Test / Clinical Assessment & Walk-in Interview',
        totalQuestions: 100,
        totalMarks: 100,
        durationMinutes: 90,
        mode: 'CBT / Interview',
        negativeMarking: '0.25 mark deduction',
        qualifyingMarks: 'UR/OBC: 50% | SC/ST: 40%',
        description: 'Technical Nursing (75 Qs) + Industrial First Aid & General Aptitude (25 Qs).'
      }
    ],
    syllabusModules: [
      {
        subject: 'Industrial Emergency & Clinical Nursing',
        weightagePercent: 100,
        highYieldTopics: [
          'Industrial Burns & Crush Injury Management, ICU Monitoring, CPR, Inotropes, Emergency Resuscitation'
        ]
      }
    ],
    preparationStrategy: [
      'Focus on trauma, burns, and emergency ICU patient management in large hospital setups.'
    ],
    selectionSteps: [
      'Step 1: Written Examination / Clinical Assessment',
      'Step 2: Medical Fitness at Plant Base Hospital'
    ],
    frequentlyAskedQuestions: [
      {
        question: 'Which hospitals belong to SAIL?',
        answer: 'Major SAIL hospitals include JLN Hospital & Research Centre Bhilai (1,000 beds), Ispat General Hospital Rourkela (600 beds), Bokaro General Hospital (900 beds), and Durgapur Steel Plant Hospital (600 beds).'
      }
    ]
  }
};

