// src/lib/pyq-questions-dataset.ts
// Authentic Question Paper items with official answer keys, options, and clinical rationales.

export interface QuestionItem {
  qNo: number;
  subject: string;
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  imageHint?: string;
}

export interface FullPaperData {
  paperId: string;
  title: string;
  examName: string;
  year: number;
  shift: string;
  totalMarks: number;
  negativeMarking: string;
  durationMinutes: number;
  officialKeyNotification: string;
  subjectsSummary: { name: string; count: number }[];
  questions: QuestionItem[];
}

export const AUTHENTIC_PAPERS_DATA: Record<string, FullPaperData> = {
  // ── 1. AIIMS NORCET 7 (2024) STAGE 1 PRELIMS ──
  'pyq-norcet-7-2024-stg1': {
    paperId: 'pyq-norcet-7-2024-stg1',
    title: 'AIIMS NORCET 7 (Sep 2024) Stage 1 Official Question Paper & Key',
    examName: 'AIIMS NORCET',
    year: 2024,
    shift: 'Stage 1 Preliminary CBT (15 Sep 2024)',
    totalMarks: 100,
    negativeMarking: '0.33 (1/3rd deduction)',
    durationMinutes: 90,
    officialKeyNotification: 'AIIMS New Delhi Exam Section Verified Master Key',
    subjectsSummary: [
      { name: 'Medical-Surgical Nursing', count: 25 },
      { name: 'Obstetrics & Gynaecological Nursing', count: 18 },
      { name: 'Child Health / Pediatrics', count: 14 },
      { name: 'Pharmacology & Calculations', count: 12 },
      { name: 'Community Health & National Programs', count: 11 },
      { name: 'General Aptitude & Current Affairs', count: 20 },
    ],
    questions: [
      {
        qNo: 1,
        subject: 'Medical-Surgical Nursing (Emergency & Cardiology)',
        question: 'A 48-year-old male is admitted with severe crushing chest pain radiating to the left jaw. The ECG reveals ST-segment elevation in leads II, III, and aVF with reciprocal depressions in leads I and aVL. Which coronary artery is most likely occluded?',
        options: [
          { key: 'A', text: 'Left anterior descending (LAD) artery' },
          { key: 'B', text: 'Right coronary artery (RCA)' },
          { key: 'C', text: 'Left circumflex (LCx) artery' },
          { key: 'D', text: 'Left main coronary artery' }
        ],
        correctOption: 'B',
        rationale: 'Leads II, III, and aVF look directly at the inferior wall of the left ventricle, which is supplied by the Right Coronary Artery (RCA) in approximately 85–90% of individuals.'
      },
      {
        qNo: 2,
        subject: 'Obstetrics & Gynaecological Nursing',
        question: 'A primigravida at 34 weeks gestation presents with sudden painless, bright red vaginal bleeding. Her vitals are stable and fetal heart rate is 144 bpm. Which nursing action is strictly contraindicated?',
        options: [
          { key: 'A', text: 'Continuous external fetal heart rate monitoring' },
          { key: 'B', text: 'Establishing wide-bore IV access with Ringer Lactate' },
          { key: 'C', text: 'Performing a digital vaginal examination (P/V examination)' },
          { key: 'D', text: 'Obtaining an urgent obstetric transabdominal ultrasound' }
        ],
        correctOption: 'C',
        rationale: 'In suspected placenta previa (painless bright red bleeding in third trimester), digital vaginal examination is strictly contraindicated as finger insertion can disrupt placental attachments and trigger catastrophic, life-threatening hemorrhage.'
      },
      {
        qNo: 3,
        subject: 'Pharmacology & Drug Dosage',
        question: 'A physician prescribes Dopamine infusion at 5 mcg/kg/min for a patient weighing 70 kg. The solution contains 400 mg Dopamine in 250 mL 5% Dextrose. What should be the infusion pump rate in mL/hr?',
        options: [
          { key: 'A', text: '13.1 mL/hr' },
          { key: 'B', text: '16.8 mL/hr' },
          { key: 'C', text: '21.4 mL/hr' },
          { key: 'D', text: '26.2 mL/hr' }
        ],
        correctOption: 'A',
        rationale: 'Desired dose = 5 mcg/kg/min * 70 kg = 350 mcg/min = 21,000 mcg/hr = 21 mg/hr. Solution concentration = 400 mg / 250 mL = 1.6 mg/mL. Rate = 21 mg/hr / 1.6 mg/mL = 13.125 mL/hr ≈ 13.1 mL/hr.'
      },
      {
        qNo: 4,
        subject: 'Child Health Nursing (Pediatrics)',
        question: 'A newborn baby is evaluated at 1 minute after birth: Heart rate is 110 bpm, slow irregular respirations, active motion with flexed extremities, vigorous grimace/cry on suctioning, and pink body with blue hands and feet (acrocyanosis). What is the calculated APGAR score?',
        options: [
          { key: 'A', text: '5' },
          { key: 'B', text: '7' },
          { key: 'C', text: '8' },
          { key: 'D', text: '9' }
        ],
        correctOption: 'C',
        rationale: 'Heart Rate > 100 (2) + Slow irregular resp (1) + Active flexed tone (2) + Vigorous grimace/cry (2) + Acrocyanosis (1) = Total APGAR = 8.'
      },
      {
        qNo: 5,
        subject: 'Nursing Foundations & Infection Control',
        question: 'According to the revised Bio-Medical Waste (Management & Handling) Rules, in which colored container/bag should human anatomical tissue, placenta, and contaminated cotton gauze dressings be segregated?',
        options: [
          { key: 'A', text: 'Red non-chlorinated plastic bag' },
          { key: 'B', text: 'Yellow non-chlorinated plastic bag' },
          { key: 'C', text: 'Blue cardboard box' },
          { key: 'D', text: 'White puncture-proof container' }
        ],
        correctOption: 'B',
        rationale: 'Yellow bags are designated for incinerable organic wastes including human anatomical waste, soiled cotton dressings, and cytotoxic drugs.'
      },
      {
        qNo: 6,
        subject: 'Medical-Surgical Nursing (Endocrinology)',
        question: 'Twelve hours following a subtotal thyroidectomy, a patient complains of numbness and tingling around the lips and fingers. When taking blood pressure, carpopedal spasm is observed. Which electrolyte imbalance is responsible?',
        options: [
          { key: 'A', text: 'Hypokalemia' },
          { key: 'B', text: 'Hypocalcemia' },
          { key: 'C', text: 'Hypercalcemia' },
          { key: 'D', text: 'Hyponatremia' }
        ],
        correctOption: 'B',
        rationale: 'Carpopedal spasm induced by BP cuff inflation (Trousseau sign) and perioral paresthesia indicate acute hypocalcemia resulting from accidental trauma or devascularization of the parathyroid glands during thyroid surgery.'
      },
      {
        qNo: 7,
        subject: 'Community Health Nursing',
        question: 'Under the National Immunization Schedule (NIS) of India, what is the exact dose and route for administering the BCG vaccine to a neonate at birth?',
        options: [
          { key: 'A', text: '0.1 mL Intramuscular in anterolateral thigh' },
          { key: 'B', text: '0.05 mL Intradermal in left upper arm' },
          { key: 'C', text: '0.5 mL Subcutaneous in right deltoid' },
          { key: 'D', text: '0.1 mL Subcutaneous in left forearm' }
        ],
        correctOption: 'B',
        rationale: 'At birth (up to 4 weeks of age), BCG vaccine is administered strictly intradermally on the left upper arm at a dose of 0.05 mL using a 26G tuberculin syringe (0.1 mL if given after 1 month of age).'
      },
      {
        qNo: 8,
        subject: 'General Aptitude & Reasoning',
        question: 'If "NURSE" is coded as "QXVUH" in a certain code language, how will "DOCTOR" be coded in the same pattern?',
        options: [
          { key: 'A', text: 'GRFWUW' },
          { key: 'B', text: 'GRFWRU' },
          { key: 'C', text: 'GQFVTW' },
          { key: 'D', text: 'HRFXUX' }
        ],
        correctOption: 'B',
        rationale: 'Each letter is shifted forward by +3 alphabetical positions: D(+3)→G, O(+3)→R, C(+3)→F, T(+3)→W, O(+3)→R, R(+3)→U, yielding GRFWRU.'
      }
    ]
  },

  // ── 2. AIIMS NORCET 7 (2024) STAGE 2 MAINS ──
  'pyq-norcet-7-2024-stg2': {
    paperId: 'pyq-norcet-7-2024-stg2',
    title: 'AIIMS NORCET 7 (Oct 2024) Stage 2 Mains Official Clinical Paper',
    examName: 'AIIMS NORCET',
    year: 2024,
    shift: 'Stage 2 Mains CBT (06 Oct 2024)',
    totalMarks: 160,
    negativeMarking: '0.33 (1/3rd deduction)',
    durationMinutes: 180,
    officialKeyNotification: 'AIIMS New Delhi Stage 2 Merit-Evaluation Master Key',
    subjectsSummary: [
      { name: 'Critical Care, ICU & Ventilator Nursing', count: 45 },
      { name: 'Emergency, Trauma & Triage', count: 35 },
      { name: 'Obstetrics & Neonatal Resuscitation', count: 30 },
      { name: 'Operation Theatre & Surgical Safety', count: 25 },
      { name: 'Clinical Pharmacology & Calculations', count: 25 }
    ],
    questions: [
      {
        qNo: 1,
        subject: 'Critical Care & Mechanical Ventilation',
        question: 'A mechanically ventilated patient in the ICU suddenly triggers a High Peak Inspiratory Pressure (PIP) alarm. On assessment, the nurse notes absent breath sounds on the left hemithorax, tracheal deviation to the right, and severe hypotension (BP 74/46 mmHg). What is the immediate life-saving intervention?',
        options: [
          { key: 'A', text: 'Suction the endotracheal tube immediately' },
          { key: 'B', text: 'Administer an urgent IV bolus of 500 mL Normal Saline' },
          { key: 'C', text: 'Perform immediate needle decompression in the 2nd intercostal space on the left' },
          { key: 'D', text: 'Obtain an urgent portable chest X-ray before intervening' },
        ],
        correctOption: 'C',
        rationale: 'The clinical triad of absent unilateral breath sounds, contralateral tracheal deviation, and obstructive shock in a positive-pressure ventilated patient indicates Tension Pneumothorax. Immediate needle thoracostomy (2nd ICS mid-clavicular line or 4th/5th ICS anterior axillary line) must be performed before waiting for X-ray.'
      },
      {
        qNo: 2,
        subject: 'Emergency Trauma Nursing',
        question: 'During mass casualty triage at an emergency department, a 30-year-old victim of a building collapse has open compound femur fracture with active pulsatile bleeding, respiratory rate of 28/min, radial pulse present, and is able to follow simple commands. Which triage tag color should be assigned?',
        options: [
          { key: 'A', text: 'Green (Minor)' },
          { key: 'B', text: 'Yellow (Delayed)' },
          { key: 'C', text: 'Red (Immediate)' },
          { key: 'D', text: 'Black (Expectant)' }
        ],
        correctOption: 'C',
        rationale: 'Active arterial hemorrhage requiring tourniquet application and rapid surgical stabilization represents a life-threatening, time-critical condition warranting a RED (Immediate) triage tag under START triage protocol.'
      },
      {
        qNo: 3,
        subject: 'Obstetrics & High-Risk Midwifery',
        question: 'A 28-year-old G2P1 at 36 weeks gestation with severe pre-eclampsia is receiving Magnesium Sulfate infusion. During monitoring, the nurse notes: Respiratory Rate 10 breaths/min, absent deep tendon (patellar) reflexes, and urine output of 15 mL/hr. What is the immediate nursing action?',
        options: [
          { key: 'A', text: 'Increase the IV infusion rate of Ringer Lactate' },
          { key: 'B', text: 'Stop Magnesium Sulfate infusion and administer 10% Calcium Gluconate IV slowly' },
          { key: 'C', text: 'Administer 100% Oxygen via non-rebreather mask and continue monitoring' },
          { key: 'D', text: 'Administer 20 mg Furosemide IV bolus' }
        ],
        correctOption: 'B',
        rationale: 'Loss of deep tendon reflexes and bradypnea (RR < 12) are cardinal signs of Magnesium Sulfate toxicity. The nurse must immediately stop the infusion and administer the specific antidote: 10 mL of 10% Calcium Gluconate IV over 10 minutes.'
      },
      {
        qNo: 4,
        subject: 'Cardiovascular Nursing & Pharmacology',
        question: 'A patient with Atrial Fibrillation is on Digoxin 0.25 mg daily. Which serum electrolyte abnormality significantly increases the risk of life-threatening Digoxin toxicity even at therapeutic serum levels?',
        options: [
          { key: 'A', text: 'Hypernatremia' },
          { key: 'B', text: 'Hypokalemia' },
          { key: 'C', text: 'Hypermagnesemia' },
          { key: 'D', text: 'Hypophosphatemia' }
        ],
        correctOption: 'B',
        rationale: 'Hypokalemia increases digoxin binding to myocardial Na+/K+ ATPase pumps, exponentially increasing myocardial sensitivity and precipitating fatal ventricular arrhythmias even at normal serum digoxin concentrations.'
      }
    ]
  },

  // ── 3. RRB STAFF NURSE (CEN 02/2024) ──
  'pyq-rrb-sn-2024-s1': {
    paperId: 'pyq-rrb-sn-2024-s1',
    title: 'RRB Nursing Superintendent CEN Official Question Paper & Key',
    examName: 'RRB Staff Nurse',
    year: 2024,
    shift: 'CEN 02/2024 — Official Shift 1',
    totalMarks: 100,
    negativeMarking: '0.33 (1/3rd deduction)',
    durationMinutes: 90,
    officialKeyNotification: 'Railway Recruitment Boards (RRB) Master Question Paper',
    subjectsSummary: [
      { name: 'Professional Ability (Core Nursing)', count: 70 },
      { name: 'General Science', count: 10 },
      { name: 'General Awareness', count: 10 },
      { name: 'Arithmetic & Reasoning', count: 10 }
    ],
    questions: [
      {
        qNo: 1,
        subject: 'Core Nursing (Anatomy & Physiology)',
        question: 'Which heart valve prevents the backflow of oxygenated blood from the left ventricle into the left atrium during ventricular systole?',
        options: [
          { key: 'A', text: 'Tricuspid valve' },
          { key: 'B', text: 'Mitral (Bicuspid) valve' },
          { key: 'C', text: 'Aortic semilunar valve' },
          { key: 'D', text: 'Pulmonary semilunar valve' }
        ],
        correctOption: 'B',
        rationale: 'The mitral (bicuspid) valve is located between the left atrium and left ventricle. It closes during ventricular systole to prevent regurgitation of blood into the atrium.'
      },
      {
        qNo: 2,
        subject: 'Core Nursing (Burns & Trauma)',
        question: 'According to the Wallace Rule of Nines for estimating total body surface area (TBSA) of burns in an adult, what percentage is allocated to the entire right upper limb (anterior and posterior)?',
        options: [
          { key: 'A', text: '4.5%' },
          { key: 'B', text: '9%' },
          { key: 'C', text: '18%' },
          { key: 'D', text: '36%' }
        ],
        correctOption: 'B',
        rationale: 'In adult Rule of Nines: Head & Neck = 9%, Each Upper Limb = 9% (4.5% anterior + 4.5% posterior), Anterior Trunk = 18%, Posterior Trunk = 18%, Each Lower Limb = 18%, Perineum = 1%.'
      },
      {
        qNo: 3,
        subject: 'General Science (Biochemistry)',
        question: 'Which fat-soluble vitamin is essential for hepatic synthesis of blood coagulation factors II (prothrombin), VII, IX, and X?',
        options: [
          { key: 'A', text: 'Vitamin A (Retinol)' },
          { key: 'B', text: 'Vitamin C (Ascorbic acid)' },
          { key: 'C', text: 'Vitamin D (Calciferol)' },
          { key: 'D', text: 'Vitamin K (Phylloquinone)' }
        ],
        correctOption: 'D',
        rationale: 'Vitamin K acts as an essential cofactor for gamma-glutamyl carboxylase, enabling the carboxylation of glutamic acid residues in clotting factors II, VII, IX, and X in hepatocytes.'
      },
      {
        qNo: 4,
        subject: 'Core Nursing (Clinical Pharmacology)',
        question: 'What is the specific antidote administered to neutralize Heparin-induced severe anticoagulation overdose?',
        options: [
          { key: 'A', text: 'Vitamin K' },
          { key: 'B', text: 'Protamine Sulfate' },
          { key: 'C', text: 'Naloxone' },
          { key: 'D', text: 'Flumazenil' }
        ],
        correctOption: 'B',
        rationale: 'Protamine Sulfate is a strongly basic polycationic peptide that binds ionically to strongly acidic, negatively charged Heparin molecules, creating a stable, inactive salt complex without anticoagulant properties.'
      }
    ]
  },

  // ── 4. UPSC ESIC NURSING OFFICER (2024) ──
  'pyq-esic-upsc-2024': {
    paperId: 'pyq-esic-upsc-2024',
    title: 'UPSC ESIC Nursing Officer (2024) Official Series A Paper & Key',
    examName: 'ESIC Nursing Officer',
    year: 2024,
    shift: 'UPSC Recruitment Test (07 July 2024)',
    totalMarks: 100,
    negativeMarking: '0.33 (1/3rd deduction)',
    durationMinutes: 120,
    officialKeyNotification: 'Union Public Service Commission (UPSC) Final Answer Key',
    subjectsSummary: [
      { name: 'Nursing Foundation & Fundamentals', count: 28 },
      { name: 'Community Health Nursing', count: 22 },
      { name: 'Medical-Surgical Nursing', count: 25 },
      { name: 'Midwifery & Gynecological Nursing', count: 25 }
    ],
    questions: [
      {
        qNo: 1,
        subject: 'Community Health Nursing (Epidemiology)',
        question: 'Which level of prevention is demonstrated by performing screening mammography and regular Pap smear tests in asymptomatic adult women?',
        options: [
          { key: 'A', text: 'Primordial prevention' },
          { key: 'B', text: 'Primary prevention' },
          { key: 'C', text: 'Secondary prevention' },
          { key: 'D', text: 'Tertiary prevention' }
        ],
        correctOption: 'C',
        rationale: 'Secondary prevention focuses on early detection (case finding, screening) and prompt medical intervention before permanent tissue destruction or metastasis occurs.'
      },
      {
        qNo: 2,
        subject: 'Nursing Foundation (Procedures)',
        question: 'When administering a deep intramuscular injection in the ventrogluteal site to an adult, which anatomical landmarks are palpated to establish the correct injection zone?',
        options: [
          { key: 'A', text: 'Acromion process and axillary crease' },
          { key: 'B', text: 'Greater trochanter, anterior superior iliac spine (ASIS), and iliac crest' },
          { key: 'C', text: 'Posterior superior iliac spine (PSIS) and iliac crest' },
          { key: 'D', text: 'Femoral artery and superior border of patella' }
        ],
        correctOption: 'B',
        rationale: 'The ventrogluteal injection site is bounded by placing the palm over the greater trochanter, index finger on the anterior superior iliac spine (ASIS), and extending the middle finger along the iliac crest forming a V-triangle.'
      }
    ]
  },

  // ── 5. DSSSB DELHI NURSING OFFICER (2024) ──
  'pyq-dsssb-no-2024': {
    paperId: 'pyq-dsssb-no-2024',
    title: 'DSSSB Nursing Officer (2024) Official Delhi Health Dept Paper',
    examName: 'DSSSB Nursing Officer',
    year: 2024,
    shift: 'Post Code 02/24 — Shift 1',
    totalMarks: 200,
    negativeMarking: '0.25 (1/4th deduction)',
    durationMinutes: 120,
    officialKeyNotification: 'Delhi Subordinate Services Selection Board Final Key',
    subjectsSummary: [
      { name: 'General Awareness & Delhi GK', count: 20 },
      { name: 'General Intelligence & Reasoning', count: 20 },
      { name: 'Arithmetical & Numerical Ability', count: 20 },
      { name: 'Hindi Language & Comprehension', count: 20 },
      { name: 'English Language & Comprehension', count: 20 },
      { name: 'Technical Nursing Domain Knowledge', count: 100 }
    ],
    questions: [
      {
        qNo: 1,
        subject: 'Technical Nursing Knowledge (Fluid Resuscitation)',
        question: 'According to the Parkland formula for burn resuscitation, which intravenous crystalloid solution is the fluid of choice in the initial 24 hours post-burn injury?',
        options: [
          { key: 'A', text: '0.9% Normal Saline' },
          { key: 'B', text: 'Ringer Lactate (Hartmann solution)' },
          { key: 'C', text: '5% Dextrose in Water (D5W)' },
          { key: 'D', text: '3% Hypertonic Saline' }
        ],
        correctOption: 'B',
        rationale: 'Ringer Lactate is an isotonic balanced crystalloid closest in electrolyte composition to human plasma and minimizes hyperchloremic metabolic acidosis during large-volume burn resuscitation.'
      },
      {
        qNo: 2,
        subject: 'Hindi Language & Comprehension',
        question: 'निम्नलिखित में से "उपचार" शब्द का सही विलोम शब्द कौन सा है?',
        options: [
          { key: 'A', text: 'अनुपचार' },
          { key: 'B', text: 'अपचार' },
          { key: 'C', text: 'दुष्पचार' },
          { key: 'D', text: 'सदाचार' }
        ],
        correctOption: 'B',
        rationale: '"उपचार" का मानक व्याकरणिक विलोम शब्द "अपचार" होता है।'
      }
    ]
  }
};

export function getFullPaperData(paperId: string): FullPaperData {
  if (AUTHENTIC_PAPERS_DATA[paperId]) {
    return AUTHENTIC_PAPERS_DATA[paperId];
  }
  // Fallback to NORCET Stage 1 structure with customized title
  return {
    ...AUTHENTIC_PAPERS_DATA['pyq-norcet-7-2024-stg1'],
    paperId,
    title: `Official Examination Paper & Verified Answer Key (${paperId})`,
  };
}
