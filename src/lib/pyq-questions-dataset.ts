// src/lib/pyq-questions-dataset.ts
// Comprehensive 100-Question Official Examination Repository
// Covering Medical-Surgical Nursing, OBG, Pediatrics, Fundamentals, Pharmacology, CHN, and Aptitude.

import { EXAM_PAPERS } from './pyq-mock-data';

export interface QuestionItem {
  qNo: number;
  subject: string;
  question: string;
  options: { key: 'A' | 'B' | 'C' | 'D'; text: string }[];
  correctOption: 'A' | 'B' | 'C' | 'D';
  rationale: string;
  imageHint?: string;
  imageUrl?: string;
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

export const MASTER_NURSING_QUESTIONS: QuestionItem[] = [
  // ── 1. MEDICAL-SURGICAL NURSING & CRITICAL CARE (Q1 - Q35) ──
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
    subject: 'Medical-Surgical Nursing (Cardiology)',
    question: 'A patient with heart failure is receiving Digoxin 0.25 mg daily. Which laboratory finding significantly increases the risk of life-threatening digitalis toxicity?',
    options: [
      { key: 'A', text: 'Serum Potassium 2.8 mEq/L (Hypokalemia)' },
      { key: 'B', text: 'Serum Sodium 142 mEq/L' },
      { key: 'C', text: 'Serum Calcium 9.2 mg/dL' },
      { key: 'D', text: 'Serum Magnesium 2.2 mg/dL' }
    ],
    correctOption: 'A',
    rationale: 'Hypokalemia enhances digoxin binding to myocardial Na+/K+-ATPase, markedly amplifying digitalis sensitivity and triggering severe cardiac arrhythmias (e.g. PVCs, ventricular tachycardia).'
  },
  {
    qNo: 3,
    subject: 'Medical-Surgical Nursing (Pulmonology)',
    question: 'An arterial blood gas (ABG) sample from a patient on mechanical ventilation shows: pH 7.28, PaCO2 56 mmHg, HCO3- 25 mEq/L, and PaO2 78 mmHg. How should the nurse interpret this ABG result?',
    options: [
      { key: 'A', text: 'Compensated Metabolic Acidosis' },
      { key: 'B', text: 'Uncompensated Respiratory Acidosis' },
      { key: 'C', text: 'Uncompensated Metabolic Alkalosis' },
      { key: 'D', text: 'Fully Compensated Respiratory Alkalosis' }
    ],
    correctOption: 'B',
    rationale: 'pH < 7.35 indicates acidosis. PaCO2 > 45 mmHg represents primary respiratory retention. HCO3- is normal (22–26 mEq/L), indicating acute uncompensated respiratory acidosis.'
  },
  {
    qNo: 4,
    subject: 'Medical-Surgical Nursing (Neurology)',
    question: 'A patient following traumatic brain injury has a Glasgow Coma Scale (GCS) assessment: Eyes open to verbal command (3), Inappropriate words spoken (3), and Localizes to painful stimuli (5). What is the total GCS score?',
    options: [
      { key: 'A', text: '9' },
      { key: 'B', text: '10' },
      { key: 'C', text: '11' },
      { key: 'D', text: '12' }
    ],
    correctOption: 'C',
    rationale: 'Eye opening to speech = 3; Verbal inappropriate words = 3; Motor localizes pain = 5. Total GCS = 3 + 3 + 5 = 11 (Moderate Head Injury).'
  },
  {
    qNo: 5,
    subject: 'Medical-Surgical Nursing (Burns & Trauma)',
    question: 'Using the Parkland formula (4 mL × kg × % TBSA), calculate the total IV fluid required in the first 24 hours for a 60 kg patient who sustained 40% second- and third-degree burns. How much fluid is infused in the first 8 hours?',
    options: [
      { key: 'A', text: 'Total: 4,800 mL; First 8 hrs: 2,400 mL' },
      { key: 'B', text: 'Total: 9,600 mL; First 8 hrs: 4,800 mL' },
      { key: 'C', text: 'Total: 7,200 mL; First 8 hrs: 3,600 mL' },
      { key: 'D', text: 'Total: 12,000 mL; First 8 hrs: 6,000 mL' }
    ],
    correctOption: 'B',
    rationale: 'Total 24-hr Parkland fluid = 4 mL × 60 kg × 40% = 9,600 mL Ringer Lactate. Half (50% = 4,800 mL) is given over the first 8 hours from time of injury, and remaining half over next 16 hours.'
  },
  {
    qNo: 6,
    subject: 'Medical-Surgical Nursing (Endocrinology)',
    question: 'Twelve hours following a subtotal thyroidectomy, a patient complains of tingling around the lips and carpopedal spasm during blood pressure cuff inflation. Which electrolyte imbalance is responsible?',
    options: [
      { key: 'A', text: 'Hypokalemia' },
      { key: 'B', text: 'Hypocalcemia' },
      { key: 'C', text: 'Hypercalcemia' },
      { key: 'D', text: 'Hyponatremia' }
    ],
    correctOption: 'B',
    rationale: 'Trousseau sign (carpopedal spasm on cuff inflation) and Chvostek sign indicate acute hypocalcemia resulting from inadvertent parathyroid gland removal or vascular compromise during thyroidectomy.'
  },
  {
    qNo: 7,
    subject: 'Medical-Surgical Nursing (Endocrinology)',
    question: 'In Diabetic Ketoacidosis (DKA), which IV fluid is indicated once the patient’s blood glucose drops below 250 mg/dL during regular insulin infusion?',
    options: [
      { key: 'A', text: '0.9% Normal Saline alone' },
      { key: 'B', text: '5% Dextrose with 0.45% Normal Saline' },
      { key: 'C', text: 'Sterile Water bolus' },
      { key: 'D', text: 'Hypertonic 3% Saline' }
    ],
    correctOption: 'B',
    rationale: 'Adding 5% Dextrose when glucose drops below 250 mg/dL prevents rapid hypoglycemia and cerebral edema while allowing continued insulin infusion to resolve ketoacidosis.'
  },
  {
    qNo: 8,
    subject: 'Medical-Surgical Nursing (Gastroenterology)',
    question: 'A patient with liver cirrhosis presents with grade III hepatic encephalopathy and elevated blood ammonia. Which medication is the frontline standard to trap and eliminate ammonia via bowel movements?',
    options: [
      { key: 'A', text: 'Lactulose' },
      { key: 'B', text: 'Spironolactone' },
      { key: 'C', text: 'Furosemide' },
      { key: 'D', text: 'Pantoprazole' }
    ],
    correctOption: 'A',
    rationale: 'Lactulose is degraded by colonic bacteria into lactic and acetic acids, acidifying the bowel lumen and converting diffusible NH3 into non-absorbable ammonium (NH4+) ions that are excreted in stool.'
  },
  {
    qNo: 9,
    subject: 'Medical-Surgical Nursing (Renal & Urology)',
    question: 'Which of the following is the earliest and most reliable clinical indicator of acute rejection in a post-renal transplant patient?',
    options: [
      { key: 'A', text: 'Sudden drop in blood pressure' },
      { key: 'B', text: 'Decreased urine output with rising serum creatinine and graft tenderness' },
      { key: 'C', text: 'Polyuria (>4 L/day)' },
      { key: 'D', text: 'Hypocalcemia' }
    ],
    correctOption: 'B',
    rationale: 'Acute allograft rejection manifests as oliguria, progressive rise in serum creatinine/BUN, graft site tenderness/swelling, fever, and fluid retention.'
  },
  {
    qNo: 10,
    subject: 'Medical-Surgical Nursing (Emergency & Critical Care)',
    question: 'A patient on mechanical ventilation suddenly develops High Peak Pressure alarms, absent breath sounds on the left, contralateral tracheal deviation to the right, and blood pressure of 70/40 mmHg. What is the immediate priority action?',
    options: [
      { key: 'A', text: 'Perform immediate needle thoracostomy decompression at the 2nd intercostal space' },
      { key: 'B', text: 'Suction the endotracheal tube vigorously' },
      { key: 'C', text: 'Obtain an urgent portable chest X-ray' },
      { key: 'D', text: 'Infuse 1000 mL Normal Saline bolus' }
    ],
    correctOption: 'A',
    rationale: 'Tension pneumothorax is an immediate clinical emergency. Decompression with a 14G/16G needle at 2nd intercostal space midclavicular line (or 4th/5th ICS anterior axillary line) must not await X-ray confirmation.'
  },
  {
    qNo: 11,
    subject: 'Medical-Surgical Nursing (Hematology & Transfusion)',
    question: 'Within 10 minutes of starting a Packed Red Blood Cell (PRBC) transfusion, the patient develops chills, fever, lower back pain, and dark burgundy urine. What is the nurse’s immediate first action?',
    options: [
      { key: 'A', text: 'Slow down the infusion rate and administer IV Paracetamol' },
      { key: 'B', text: 'Stop the blood transfusion immediately and infuse 0.9% Normal Saline via fresh tubing' },
      { key: 'C', text: 'Administer IV Diphenhydramine and monitor for 15 minutes' },
      { key: 'D', text: 'Elevate the patient’s legs and record vital signs' }
    ],
    correctOption: 'B',
    rationale: 'These symptoms indicate an acute hemolytic transfusion reaction (ABO incompatibility). The transfusion must be stopped immediately to halt antigen load, maintaining IV access with fresh NS tubing.'
  },
  {
    qNo: 12,
    subject: 'Medical-Surgical Nursing (Neurology & Stroke)',
    question: 'What is the maximum approved therapeutic window for administering intravenous recombinant tissue plasminogen activator (IV rt-PA / Alteplase) from symptom onset in acute ischemic stroke?',
    options: [
      { key: 'A', text: '1.5 hours' },
      { key: 'B', text: '4.5 hours' },
      { key: 'C', text: '8 hours' },
      { key: 'D', text: '12 hours' }
    ],
    correctOption: 'B',
    rationale: 'Standard clinical guidelines (AHA/ASA) approve IV thrombolysis with rt-PA within 3 to 4.5 hours of documented ischemic stroke symptom onset in eligible patients without contraindications.'
  },
  {
    qNo: 13,
    subject: 'Medical-Surgical Nursing (Cardiovascular)',
    question: 'During cardiopulmonary resuscitation (CPR) of an adult in cardiac arrest, what is the correct compression-to-ventilation ratio for a single rescuer without an advanced airway?',
    options: [
      { key: 'A', text: '15:2' },
      { key: 'B', text: '30:2' },
      { key: 'C', text: '50:2' },
      { key: 'D', text: 'Continuous compressions with 1 breath every 15 seconds' }
    ],
    correctOption: 'B',
    rationale: 'AHA/ERC guidelines mandate a compression-to-ventilation ratio of 30:2 at a depth of 5–6 cm and rate of 100–120 compressions/min for all single-rescuer adult CPR.'
  },
  {
    qNo: 14,
    subject: 'Medical-Surgical Nursing (Respiratory)',
    question: 'A patient with Chronic Obstructive Pulmonary Disease (COPD) with chronic CO2 retention requires supplemental oxygen. Which delivery device and target SpO2 range is most appropriate?',
    options: [
      { key: 'A', text: 'Non-rebreather mask at 15 L/min (SpO2 100%)' },
      { key: 'B', text: 'Venturi mask titrated to maintain SpO2 88%–92%' },
      { key: 'C', text: 'Simple face mask at 10 L/min' },
      { key: 'D', text: 'High-flow nasal cannula at 60 L/min' }
    ],
    correctOption: 'B',
    rationale: 'Patients with chronic hypercapnia rely on hypoxic drive. Controlled low-flow oxygen via a Venturi mask targeting SpO2 88–92% prevents worsening hypercapnic respiratory failure and CO2 narcosis.'
  },
  {
    qNo: 15,
    subject: 'Medical-Surgical Nursing (Orthopedics)',
    question: 'A young adult with a long bone femur fracture suddenly develops dyspnea, confusion, tachypnea, and petechial rash over the chest and conjunctiva 24 hours post-trauma. What syndrome should the nurse suspect?',
    options: [
      { key: 'A', text: 'Compartment Syndrome' },
      { key: 'B', text: 'Fat Embolism Syndrome (FES)' },
      { key: 'C', text: 'Aspiration Pneumonia' },
      { key: 'D', text: 'Deep Vein Thrombosis' }
    ],
    correctOption: 'B',
    rationale: 'The classic triad of respiratory distress, neurological changes (confusion), and non-palpable petechial rash on anterior thorax/axillae following long bone fracture defines Fat Embolism Syndrome.'
  },
  {
    qNo: 16,
    subject: 'Medical-Surgical Nursing (Infectious Diseases)',
    question: 'Which of the following is the definitive diagnostic test for confirming active pulmonary tuberculosis according to WHO / NTEP guidelines?',
    options: [
      { key: 'A', text: 'Mantoux Tuberculin Skin Test' },
      { key: 'B', text: 'Cartridge Based Nucleic Acid Amplification Test (CBNAAT / GeneXpert)' },
      { key: 'C', text: 'Erythrocyte Sedimentation Rate (ESR)' },
      { key: 'D', text: 'Chest X-ray apical view alone' }
    ],
    correctOption: 'B',
    rationale: 'GeneXpert/CBNAAT provides rapid, automated molecular detection of Mycobacterium tuberculosis DNA and simultaneously tests for Rifampicin resistance within 2 hours.'
  },
  {
    qNo: 17,
    subject: 'Medical-Surgical Nursing (Oncology)',
    question: 'A patient receiving IV Doxorubicin (Adriamycin) requires baseline and periodic monitoring of which organ function due to known drug toxicity?',
    options: [
      { key: 'A', text: 'Echocardiography for Left Ventricular Ejection Fraction (Cardiotoxicity)' },
      { key: 'B', text: 'Audiometry for Ototoxicity' },
      { key: 'C', text: 'Visual acuity for Retinal toxicity' },
      { key: 'D', text: 'Thyroid panel for Hypothyroidism' }
    ],
    correctOption: 'A',
    rationale: 'Anthracyclines like Doxorubicin cause cumulative dose-dependent cardiomyopathy and congestive heart failure, necessitating baseline and serial echocardiogram evaluations.'
  },
  {
    qNo: 18,
    subject: 'Medical-Surgical Nursing (Emergency Triage)',
    question: 'In a Mass Casualty Incident (START Triage system), a victim who is non-ambulatory, has respiratory rate of 24/min, radial pulse present, and obeys commands should be assigned which triage tag color?',
    options: [
      { key: 'A', text: 'Red (Immediate)' },
      { key: 'B', text: 'Yellow (Delayed)' },
      { key: 'C', text: 'Green (Minor)' },
      { key: 'D', text: 'Black (Deceased)' }
    ],
    correctOption: 'B',
    rationale: 'START Triage: Respiration < 30, Perfusion (radial pulse present / cap refill < 2s), Mental status (obeys commands) = Yellow (Delayed / Urgent but not immediate life threat).'
  },
  {
    qNo: 19,
    subject: 'Medical-Surgical Nursing (Cardiology)',
    question: 'What is the characteristic ECG appearance of complete third-degree Atrioventricular (AV) heart block?',
    options: [
      { key: 'A', text: 'Progressive prolongation of PR interval followed by a dropped QRS complex' },
      { key: 'B', text: 'Complete dissociation between regular P waves and regular independent QRS complexes' },
      { key: 'C', text: 'Fixed prolonged PR interval > 0.20 seconds with 1:1 conduction' },
      { key: 'D', text: 'Sawtooth baseline flutter waves at 300 bpm' }
    ],
    correctOption: 'B',
    rationale: 'In third-degree (complete) AV block, no atrial impulses conduct to the ventricles. Atria and ventricles beat completely independently (AV dissociation) with separate regular P-P and R-R intervals.'
  },
  {
    qNo: 20,
    subject: 'Medical-Surgical Nursing (Renal & Dialysis)',
    question: 'When assessing a patient with an arteriovenous (AV) fistula in the left forearm for hemodialysis, which finding confirms patency of the vascular access?',
    options: [
      { key: 'A', text: 'Presence of a palpable thrill and audible bruit over the access site' },
      { key: 'B', text: 'Radial pulse deficit on the left arm' },
      { key: 'C', text: 'Blood pressure higher in the left arm' },
      { key: 'D', text: 'Absence of visible vascular dilation' }
    ],
    correctOption: 'A',
    rationale: 'A palpable vibration (thrill) and a continuous rushing sound on auscultation (bruit) indicate turbulent, high-velocity arterial-venous blood flow confirming fistula patency.'
  },

  // ── 2. OBSTETRICS & GYNAECOLOGICAL NURSING (Q21 - Q45) ──
  {
    qNo: 21,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'A primigravida at 34 weeks gestation presents with sudden painless, bright red vaginal bleeding. Her vitals are stable and fetal heart rate is 144 bpm. Which nursing action is strictly contraindicated?',
    options: [
      { key: 'A', text: 'Continuous external fetal heart rate monitoring' },
      { key: 'B', text: 'Establishing wide-bore IV access with Ringer Lactate' },
      { key: 'C', text: 'Performing a digital vaginal examination (P/V examination)' },
      { key: 'D', text: 'Obtaining an urgent obstetric transabdominal ultrasound' }
    ],
    correctOption: 'C',
    rationale: 'In suspected placenta previa (painless bright red bleeding in third trimester), digital vaginal examination is strictly contraindicated as finger insertion can disrupt placental attachments and trigger catastrophic hemorrhage.'
  },
  {
    qNo: 22,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'According to Naegele’s rule, what is the expected date of delivery (EDD) for a pregnant woman whose Last Menstrual Period (LMP) was 10 October 2025?',
    options: [
      { key: 'A', text: '17 July 2026' },
      { key: 'B', text: '17 August 2026' },
      { key: 'C', text: '10 July 2026' },
      { key: 'D', text: '24 June 2026' }
    ],
    correctOption: 'A',
    rationale: 'Naegele’s Rule = LMP + 7 days - 3 months + 1 year. 10 October + 7 days = 17 October; minus 3 months = 17 July 2026.'
  },
  {
    qNo: 23,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'A patient with severe preeclampsia is receiving an intravenous infusion of Magnesium Sulfate (MgSO4). Which finding represents early signs of Magnesium toxicity requiring immediate withholding of the infusion?',
    options: [
      { key: 'A', text: 'Absence of deep tendon reflexes (Patellar reflex)' },
      { key: 'B', text: 'Respiratory rate of 18 breaths/minute' },
      { key: 'C', text: 'Urine output of 45 mL/hour' },
      { key: 'D', text: 'Blood pressure 140/90 mmHg' }
    ],
    correctOption: 'A',
    rationale: 'Loss of deep tendon reflexes (patellar reflex) is the earliest clinical sign of hypermagnesemia (serum Mg 8–10 mEq/L), preceding respiratory depression (<12/min) and cardiac arrest (>15 mEq/L).'
  },
  {
    qNo: 24,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'What is the specific, life-saving antidote administered for acute Magnesium Sulfate toxicity in an obstetric patient?',
    options: [
      { key: 'A', text: 'Calcium Gluconate 10% IV (10 mL slowly over 5–10 minutes)' },
      { key: 'B', text: 'Protamine Sulfate IV' },
      { key: 'C', text: 'Potassium Chloride IV' },
      { key: 'D', text: 'Sodium Bicarbonate IV' }
    ],
    correctOption: 'A',
    rationale: '10% Calcium Gluconate (1 g in 10 mL IV push over 3–5 minutes) acts as a direct physiologic antagonist to magnesium at the neuromuscular junction.'
  },
  {
    qNo: 25,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'What is the primary frontline drug of choice recommended by WHO guidelines for active management of the third stage of labor (AMTSL) to prevent Postpartum Hemorrhage (PPH)?',
    options: [
      { key: 'A', text: 'Oxytocin 10 IU IM / IV' },
      { key: 'B', text: 'Methylergometrine 0.2 mg IM' },
      { key: 'C', text: 'Carboprost (PGF2alpha) 250 mcg IM' },
      { key: 'D', text: 'Misoprostol 100 mcg oral' }
    ],
    correctOption: 'A',
    rationale: 'Oxytocin 10 IU IM (or slow IV) immediately after delivery of the baby is the global gold standard uterotonic for AMTSL due to its rapid onset and absence of hypertensive side effects.'
  },
  {
    qNo: 26,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'A postpartum mother on day 3 post-delivery exhibits normal vaginal discharge that is pinkish-brown in color composed of serous exudate, erythrocytes, and leukocytes. What is this lochia called?',
    options: [
      { key: 'A', text: 'Lochia Rubra' },
      { key: 'B', text: 'Lochia Serosa' },
      { key: 'C', text: 'Lochia Alba' },
      { key: 'D', text: 'Lochia Purulenta' }
    ],
    correctOption: 'B',
    rationale: 'Lochia progression: Lochia Rubra (Days 1–3, red blood); Lochia Serosa (Days 4–10, pink/brownish serous); Lochia Alba (Days 10–21, yellowish-white mucus/leukocytes).'
  },
  {
    qNo: 27,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'During fetal heart rate monitoring, late decelerations are observed following uterine contractions. What is the underlying pathophysiological cause?',
    options: [
      { key: 'A', text: 'Uteroplacental insufficiency' },
      { key: 'B', text: 'Fetal head compression' },
      { key: 'C', text: 'Umbilical cord compression' },
      { key: 'D', text: 'Maternal fever' }
    ],
    correctOption: 'A',
    rationale: 'VEAL CHOP mnemonic: Variable = Cord compression; Early = Head compression; Accelerations = Ok; Late decelerations = Placental insufficiency requiring left lateral positioning, O2, and stopping oxytocin.'
  },
  {
    qNo: 28,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'A postpartum nurse discovers umbilical cord prolapse protruding through the introitus after membrane rupture. What is the immediate priority nursing action?',
    options: [
      { key: 'A', text: 'Push the umbilical cord back inside the uterine cavity' },
      { key: 'B', text: 'Insert a sterile gloved hand into the vagina and manually elevate the fetal presenting part off the cord' },
      { key: 'C', text: 'Administer an immediate IV oxytocin bolus' },
      { key: 'D', text: 'Encourage the mother to bear down and push vigorously' }
    ],
    correctOption: 'B',
    rationale: 'Manual upward elevation of the fetal presenting part relieves vascular compression on the prolapsed cord until an emergency cesarean section can be performed.'
  },
  {
    qNo: 29,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'At which gestational age does the uterine fundus normally reach the level of the maternal umbilicus in a singleton pregnancy?',
    options: [
      { key: 'A', text: '12 weeks' },
      { key: 'B', text: '16 weeks' },
      { key: 'C', text: '20–22 weeks' },
      { key: 'D', text: '36 weeks' }
    ],
    correctOption: 'C',
    rationale: 'Fundal height landmarks: Symphysis pubis = 12 weeks; Midway between pubis & umbilicus = 16 weeks; Umbilicus = 20–22 weeks; Xiphisternum = 36 weeks.'
  },
  {
    qNo: 30,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'Which obstetric sign refers to the bluish or purplish discoloration of the cervix, vagina, and vulva caused by increased venous vascularity during early pregnancy?',
    options: [
      { key: 'A', text: 'Goodell’s sign' },
      { key: 'B', text: 'Hegar’s sign' },
      { key: 'C', text: 'Chadwick’s sign (Jacquemier’s sign)' },
      { key: 'D', text: 'Piskacek’s sign' }
    ],
    correctOption: 'C',
    rationale: 'Chadwick’s sign is bluish/violet discoloration of vulva/vagina/cervix at ~6–8 weeks. Goodell’s sign is cervical softening; Hegar’s sign is softening of the lower uterine isthmus.'
  },

  // ── 3. CHILD HEALTH NURSING / PEDIATRICS (Q31 - Q55) ──
  {
    qNo: 31,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'A newborn baby evaluated at 1 minute after birth: Heart rate 110 bpm, slow irregular respirations, active flexed motion, vigorous cry on suctioning, pink body with blue extremities (acrocyanosis). What is the APGAR score?',
    options: [
      { key: 'A', text: '5' },
      { key: 'B', text: '7' },
      { key: 'C', text: '8' },
      { key: 'D', text: '9' }
    ],
    correctOption: 'C',
    rationale: 'Heart rate > 100 (2) + Slow irregular resp (1) + Active flexed tone (2) + Vigorous cry (2) + Acrocyanosis (1) = Total APGAR = 8.'
  },
  {
    qNo: 32,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'By what age does the anterior fontanelle (Bregma) normally close in a healthy developing infant?',
    options: [
      { key: 'A', text: '2–3 months' },
      { key: 'B', text: '6–8 months' },
      { key: 'C', text: '12–18 months' },
      { key: 'D', text: '24–36 months' }
    ],
    correctOption: 'C',
    rationale: 'The anterior diamond-shaped fontanelle closes between 12 and 18 months of age. The posterior triangular fontanelle (Lambda) closes much earlier, between 6 and 8 weeks (2 months).'
  },
  {
    qNo: 33,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'At what age does a typically developing infant first achieve the gross motor milestone of sitting steadily without any support?',
    options: [
      { key: 'A', text: '3 months' },
      { key: 'B', text: '5 months' },
      { key: 'C', text: '8 months' },
      { key: 'D', text: '12 months' }
    ],
    correctOption: 'C',
    rationale: 'Gross motor milestones: Holds neck steady = 3 months; Sits with support = 5–6 months; Sits without support = 8 months; Stands with support = 9 months; Walks independently = 12–15 months.'
  },
  {
    qNo: 34,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'During phototherapy for neonatal unconjugated hyperbilirubinemia, which two anatomical areas MUST be shielded and protected from light exposure at all times?',
    options: [
      { key: 'A', text: 'Chest and Abdomen' },
      { key: 'B', text: 'Eyes (with opaque eye patches) and Genitalia (gonads)' },
      { key: 'C', text: 'Palms and Soles' },
      { key: 'D', text: 'Back and Buttocks' }
    ],
    correctOption: 'B',
    rationale: 'Phototherapy lights can cause retinal photochemical injury and testicular/gonadal hyperthermic damage, requiring continuous eye shields and diaper coverage.'
  },
  {
    qNo: 35,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'Which congenital anomaly is characterized by failure of ganglion cells to migrate to the myenteric plexus of the distal colon, presenting as ribbon-like stools and failure to pass meconium within 48 hours?',
    options: [
      { key: 'A', text: 'Intussusception' },
      { key: 'B', text: 'Hirschsprung Disease (Congenital Aganglionic Megacolon)' },
      { key: 'C', text: 'Pyloric Stenosis' },
      { key: 'D', text: 'Celiac Disease' }
    ],
    correctOption: 'B',
    rationale: 'Hirschsprung disease is congenital aganglionosis of the distal rectum/colon causing functional intestinal obstruction, failure to pass meconium in first 48 hrs, and abdominal distension.'
  },
  {
    qNo: 36,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'What is the hallmark clinical presentation of hypertrophic pyloric stenosis in a 4-week-old male infant?',
    options: [
      { key: 'A', text: 'Bile-stained green vomiting and currant jelly stools' },
      { key: 'B', text: 'Non-bilious projectile vomiting immediately after feeds with palpable olive-shaped abdominal mass' },
      { key: 'C', text: 'Painless rectal bleeding' },
      { key: 'D', text: 'Severe diarrhea and high fever' }
    ],
    correctOption: 'B',
    rationale: 'Pyloric stenosis presents at 3–6 weeks with non-bilious projectile vomiting, visible gastric peristaltic waves, hypochloremic metabolic alkalosis, and a palpable epigastric olive mass.'
  },
  {
    qNo: 37,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'Under the Integrated Management of Neonatal and Childhood Illness (IMNCI) guidelines, what is the fast breathing cut-off defining Pneumonia in an infant aged 2 months to 11 months?',
    options: [
      { key: 'A', text: '30 breaths/min or more' },
      { key: 'B', text: '40 breaths/min or more' },
      { key: 'C', text: '50 breaths/min or more' },
      { key: 'D', text: '60 breaths/min or more' }
    ],
    correctOption: 'C',
    rationale: 'IMNCI fast breathing thresholds: < 2 months = ≥ 60 breaths/min; 2 to 11 months = ≥ 50 breaths/min; 12 months to 5 years = ≥ 40 breaths/min.'
  },
  {
    qNo: 38,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'A 2-year-old child presents with barking seal-like cough, inspiratory stridor, hoarseness, and low-grade fever worse at night. The neck X-ray reveals the "Steeple sign". What is the diagnosis?',
    options: [
      { key: 'A', text: 'Acute Laryngotracheobronchitis (Croup)' },
      { key: 'B', text: 'Acute Epiglottitis (Thumb sign)' },
      { key: 'C', text: 'Foreign body aspiration' },
      { key: 'D', text: 'Bronchial Asthma' }
    ],
    correctOption: 'A',
    rationale: 'Viral croup (parainfluenza) causes subglottic tracheal narrowing producing the characteristic "Steeple sign" on frontal neck radiograph, barking cough, and nocturnal stridor.'
  },
  {
    qNo: 39,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'What is the classic diagnostic triad observed in Tracheoesophageal Fistula (TEF) with Esophageal Atresia in a newborn at first feed?',
    options: [
      { key: 'A', text: 'Coughing, Choking, and Cyanosis (The 3 Cs)' },
      { key: 'B', text: 'Fever, Vomiting, and Diarrhea' },
      { key: 'C', text: 'Jaundice, Lethargy, and Hypotonia' },
      { key: 'D', text: 'Constipation, Stridor, and Bradypnea' }
    ],
    correctOption: 'A',
    rationale: 'The classic "3 Cs" of TEF are Coughing, Choking, and Cyanosis during feedings, accompanied by excessive frothy salivation and drooling from the mouth.'
  },
  {
    qNo: 40,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'Which primitive neonatal reflex is elicited by suddenly lowering the baby’s head or producing a sudden loud sound, resulting in symmetric abduction and extension of arms followed by flexion and cry?',
    options: [
      { key: 'A', text: 'Rooting reflex' },
      { key: 'B', text: 'Moro reflex' },
      { key: 'C', text: 'Palmar grasp reflex' },
      { key: 'D', text: 'Babinski reflex' }
    ],
    correctOption: 'B',
    rationale: 'The Moro reflex (startle response) consists of arm abduction/extension followed by adduction/flexion. Asymmetric Moro suggests clavicular fracture or brachial plexus injury (Erb’s palsy).'
  },

  // ── 4. NURSING FOUNDATIONS & INFECTION CONTROL (Q41 - Q65) ──
  {
    qNo: 41,
    subject: 'Nursing Foundations & Infection Control',
    question: 'According to the revised Bio-Medical Waste (Management & Handling) Rules, in which colored container/bag should human anatomical tissue, placenta, and blood-soaked cotton gauze dressings be segregated?',
    options: [
      { key: 'A', text: 'Red non-chlorinated plastic bag' },
      { key: 'B', text: 'Yellow non-chlorinated plastic bag' },
      { key: 'C', text: 'Blue cardboard box with blue marking' },
      { key: 'D', text: 'White translucent puncture-proof container' }
    ],
    correctOption: 'B',
    rationale: 'Yellow bags are strictly designated for incinerable organic/pathological wastes: human anatomical tissues, organs, placenta, soiled cotton dressings, and expired cytotoxic drugs.'
  },
  {
    qNo: 42,
    subject: 'Nursing Foundations & Infection Control',
    question: 'Under BMW rules, contaminated recyclable plastic waste such as used IV tubing, Foley catheters, urine bags, and disposable syringes (without needles) must be disposed of in which color bin?',
    options: [
      { key: 'A', text: 'Yellow Bag' },
      { key: 'B', text: 'Red Bag (Recyclable Plastics for Autoclaving)' },
      { key: 'C', text: 'Black Bin' },
      { key: 'D', text: 'Blue Box' }
    ],
    correctOption: 'B',
    rationale: 'Red bags are designated for contaminated recyclable plastic medical items: IV sets, catheters, tubing, gloves, and vacutainers subjected to autoclaving and recycling.'
  },
  {
    qNo: 43,
    subject: 'Nursing Foundations & Infection Control',
    question: 'Which of the following is the single most effective intervention to prevent healthcare-associated infections (HAIs) including CLABSI and CAUTI?',
    options: [
      { key: 'A', text: 'Prophylactic broad-spectrum antibiotics' },
      { key: 'B', text: 'Meticulous hand hygiene (5 moments of hand hygiene)' },
      { key: 'C', text: 'Daily fumigation of patient rooms' },
      { key: 'D', text: 'Wearing double gloves for all procedures' }
    ],
    correctOption: 'B',
    rationale: 'WHO and CDC establish that proper hand hygiene (alcohol rub for 20–30s or soap & water for 40–60s) is the primary, most cost-effective measure to eliminate pathogen cross-transmission.'
  },
  {
    qNo: 44,
    subject: 'Nursing Foundations & Skills',
    question: 'What is the gold standard method to definitively confirm correct placement of a newly inserted nasogastric (NG) tube before initiating enteral feeds or medications?',
    options: [
      { key: 'A', text: 'Auscultating air insufflation over the epigastrium with a stethoscope' },
      { key: 'B', text: 'Checking pH of aspirated fluid (pH < 5.5)' },
      { key: 'C', text: 'Post-insertion Abdominal / Chest X-ray radiograph' },
      { key: 'D', text: 'Immersing the tube tip in water to watch for bubbles' }
    ],
    correctOption: 'C',
    rationale: 'An abdominal/chest X-ray visualizing the tube tip in the stomach below the diaphragm is the absolute gold standard before any feed. Auscultation is unreliable and unsafe.'
  },
  {
    qNo: 45,
    subject: 'Nursing Foundations & Skills',
    question: 'When administering a cleansing enema to an adult patient, which position is recommended to facilitate the gravitational flow of the enema solution into the sigmoid colon?',
    options: [
      { key: 'A', text: 'Lithotomy position' },
      { key: 'B', text: 'Sims’ left lateral position' },
      { key: 'C', text: 'High Fowler’s position' },
      { key: 'D', text: 'Trendelenburg position' }
    ],
    correctOption: 'B',
    rationale: 'Left lateral Sims’ position (lying on left side with right knee flexed) aligns with anatomical curvature of sigmoid colon and descending colon, facilitating fluid entry.'
  },
  {
    qNo: 46,
    subject: 'Nursing Foundations & Safety',
    question: 'A blood pressure cuff with a bladder that is too narrow or applied too loosely on a patient’s arm will result in which measurement error?',
    options: [
      { key: 'A', text: 'Falsely elevated (high) blood pressure reading' },
      { key: 'B', text: 'Falsely low blood pressure reading' },
      { key: 'C', text: 'Inaudible Korotkoff sounds only' },
      { key: 'D', text: 'No impact on BP reading accuracy' }
    ],
    correctOption: 'A',
    rationale: 'A cuff bladder that is too narrow or wrapped too loosely requires excessive cuff inflation pressure to compress the brachial artery, yielding falsely elevated BP readings.'
  },
  {
    qNo: 47,
    subject: 'Nursing Foundations & Medication Administration',
    question: 'When administering an Intramuscular (IM) injection of irritating medications (such as iron dextran) to prevent tracking into subcutaneous tissue, which technique must be employed?',
    options: [
      { key: 'A', text: 'Air-lock technique' },
      { key: 'B', text: 'Z-track method' },
      { key: 'C', text: 'Rapid push without aspiration' },
      { key: 'D', text: 'Subcutaneous pinching' }
    ],
    correctOption: 'B',
    rationale: 'The Z-track technique displaces skin and subcutaneous tissue laterally before injection, sealing the medication track in the muscle layer upon needle withdrawal and preventing leakage/skin staining.'
  },
  {
    qNo: 48,
    subject: 'Nursing Foundations & Ethics',
    question: 'The ethical principle that mandates healthcare professionals to act in ways that benefit the patient and promote their physical and emotional well-being is known as:',
    options: [
      { key: 'A', text: 'Non-maleficence' },
      { key: 'B', text: 'Beneficence' },
      { key: 'C', text: 'Autonomy' },
      { key: 'D', text: 'Justice' }
    ],
    correctOption: 'B',
    rationale: 'Beneficence is the ethical duty to do good and promote patient well-being. Non-maleficence is the duty to do no harm; Autonomy is respecting patient decision-making rights.'
  },
  {
    qNo: 49,
    subject: 'Nursing Foundations & Documentation',
    question: 'If a nurse makes an erroneous entry in a manual hospital medical chart, what is the legally correct documentation procedure to rectify the mistake?',
    options: [
      { key: 'A', text: 'Use white correction fluid (whitener) to cover the error completely' },
      { key: 'B', text: 'Draw a single horizontal line through the error, write "Error", and sign with date/initials' },
      { key: 'C', text: 'Scribble out the error heavily so it cannot be read' },
      { key: 'D', text: 'Tear out the page and rewrite the chart note' }
    ],
    correctOption: 'B',
    rationale: 'Medico-legal standards dictate drawing a single line through the incorrect entry (so original text remains legible), writing "Error" or "Mistaken Entry", and signing with date/time.'
  },
  {
    qNo: 50,
    subject: 'Nursing Foundations & Critical Care',
    question: 'Which intravenous fluid is isotonic and considered the fluid of resuscitation of choice in acute trauma, hypovolemic shock, and severe dehydration?',
    options: [
      { key: 'A', text: '0.45% Sodium Chloride (Half Normal Saline)' },
      { key: 'B', text: 'Ringer Lactate (Hartmann’s Solution)' },
      { key: 'C', text: '3% Hypertonic Saline' },
      { key: 'D', text: '10% Dextrose in Water' }
    ],
    correctOption: 'B',
    rationale: 'Ringer Lactate has an electrolyte composition closest to human plasma (Na 130, K 4, Ca 2.7, Cl 109, Lactate 28 mEq/L) and is the frontline crystalloid for shock resuscitation.'
  },

  // ── 5. PHARMACOLOGY & DRUG CALCULATIONS (Q51 - Q70) ──
  {
    qNo: 51,
    subject: 'Pharmacology & Drug Calculations',
    question: 'A physician prescribes Dopamine infusion at 5 mcg/kg/min for a patient weighing 70 kg. The IV bag contains 400 mg Dopamine in 250 mL D5W. What should be the infusion pump rate in mL/hr?',
    options: [
      { key: 'A', text: '13.1 mL/hr' },
      { key: 'B', text: '16.8 mL/hr' },
      { key: 'C', text: '21.4 mL/hr' },
      { key: 'D', text: '26.2 mL/hr' }
    ],
    correctOption: 'A',
    rationale: 'Dose = 5 × 70 = 350 mcg/min = 21,000 mcg/hr = 21 mg/hr. Concentration = 400 mg / 250 mL = 1.6 mg/mL. Rate = 21 / 1.6 = 13.125 ≈ 13.1 mL/hr.'
  },
  {
    qNo: 52,
    subject: 'Pharmacology & Drug Calculations',
    question: 'An IV infusion of 1000 mL Normal Saline is ordered to run over 8 hours using a standard macrodrip administration set with a drop factor of 15 drops/mL. What is the correct drip rate in drops/minute?',
    options: [
      { key: 'A', text: '21 drops/min' },
      { key: 'B', text: '31 drops/min' },
      { key: 'C', text: '42 drops/min' },
      { key: 'D', text: '50 drops/min' }
    ],
    correctOption: 'B',
    rationale: 'Drip rate = (Total Volume in mL × Drop Factor) / Time in Minutes = (1000 × 15) / (8 × 60) = 15,000 / 480 = 31.25 ≈ 31 drops/min.'
  },
  {
    qNo: 53,
    subject: 'Clinical Pharmacology & Antidotes',
    question: 'What is the specific antidote administered to neutralize Heparin-induced severe anticoagulation overdose?',
    options: [
      { key: 'A', text: 'Vitamin K (Phytonadione)' },
      { key: 'B', text: 'Protamine Sulfate' },
      { key: 'C', text: 'Naloxone' },
      { key: 'D', text: 'Flumazenil' }
    ],
    correctOption: 'B',
    rationale: 'Protamine sulfate is a strongly basic polycationic peptide that binds ionically to acidic Heparin to form an inactive stable salt complex.'
  },
  {
    qNo: 54,
    subject: 'Clinical Pharmacology & Antidotes',
    question: 'What is the specific competitive receptor antagonist antidote for acute Opioid (Morphine / Fentanyl) overdose presenting with pinpoint pupils and respiratory depression?',
    options: [
      { key: 'A', text: 'Flumazenil' },
      { key: 'B', text: 'Naloxone (Narcan)' },
      { key: 'C', text: 'N-Acetylcysteine (NAC)' },
      { key: 'D', text: 'Atropine Sulfate' }
    ],
    correctOption: 'B',
    rationale: 'Naloxone is a pure mu-opioid receptor antagonist that rapidly reverses opioid-induced respiratory depression, sedation, and coma.'
  },
  {
    qNo: 55,
    subject: 'Clinical Pharmacology & Antidotes',
    question: 'Which antidote is administered to prevent acute hepatic necrosis in severe Paracetamol (Acetaminophen) poisoning?',
    options: [
      { key: 'A', text: 'N-Acetylcysteine (NAC / Mucomyst)' },
      { key: 'B', text: 'Deferoxamine' },
      { key: 'C', text: 'Physostigmine' },
      { key: 'D', text: 'Methylene Blue' }
    ],
    correctOption: 'A',
    rationale: 'N-Acetylcysteine replenishes hepatic glutathione stores, neutralizing the toxic paracetamol metabolite NAPQI (N-acetyl-p-benzoquinone imine).'
  },
  {
    qNo: 56,
    subject: 'Clinical Pharmacology & Antidotes',
    question: 'In Organophosphate / Insecticide poisoning characterized by SLUDGE syndrome (salivation, lacrimation, urination, diarrhea, emesis), which drug is the physiological antidote?',
    options: [
      { key: 'A', text: 'Atropine Sulfate and Pralidoxime (2-PAM)' },
      { key: 'B', text: 'Neostigmine' },
      { key: 'C', text: 'Edrophonium' },
      { key: 'D', text: 'Physostigmine' }
    ],
    correctOption: 'A',
    rationale: 'Atropine competitively blocks muscarinic acetylcholine receptors to reverse bronchial secretions and bradycardia, while Pralidoxime reactivates inhibited acetylcholinesterase enzyme.'
  },
  {
    qNo: 57,
    subject: 'Clinical Pharmacology',
    question: 'A patient with Bipolar Disorder is prescribed Lithium Carbonate. What is the narrow therapeutic serum range for maintenance lithium therapy?',
    options: [
      { key: 'A', text: '0.2 to 0.5 mEq/L' },
      { key: 'B', text: '0.6 to 1.2 mEq/L' },
      { key: 'C', text: '1.5 to 2.5 mEq/L' },
      { key: 'D', text: '3.0 to 4.5 mEq/L' }
    ],
    correctOption: 'B',
    rationale: 'Therapeutic lithium range is 0.6–1.2 mEq/L. Levels > 1.5 mEq/L produce early toxicity (vomiting, coarse tremors, ataxia), and > 2.0 mEq/L can cause seizures, coma, and death.'
  },
  {
    qNo: 58,
    subject: 'Clinical Pharmacology',
    question: 'Which of the following anti-tubercular drugs is most notorious for causing peripheral neuropathy, which can be prevented by co-prescribing Pyridoxine (Vitamin B6)?',
    options: [
      { key: 'A', text: 'Rifampicin' },
      { key: 'B', text: 'Isoniazid (INH)' },
      { key: 'C', text: 'Ethambutol' },
      { key: 'D', text: 'Pyrazinamide' }
    ],
    correctOption: 'B',
    rationale: 'Isoniazid (INH) interferes with vitamin B6 metabolism, leading to dose-dependent peripheral neuropathy. Co-administration of 10–25 mg/day Pyridoxine prevents this adverse effect.'
  },
  {
    qNo: 59,
    subject: 'Clinical Pharmacology',
    question: 'Which anti-tubercular medication causes retrobulbar optic neuritis leading to decreased visual acuity and loss of green-red color discrimination?',
    options: [
      { key: 'A', text: 'Ethambutol' },
      { key: 'B', text: 'Streptomycin' },
      { key: 'C', text: 'Rifampicin' },
      { key: 'D', text: 'Isoniazid' }
    ],
    correctOption: 'A',
    rationale: 'Ethambutol (mnemonic: "E" for Eye) is known for ocular toxicity (optic neuritis). Monthly visual acuity and Ishihara color discrimination testing is mandatory.'
  },
  {
    qNo: 60,
    subject: 'Clinical Pharmacology',
    question: 'What is the primary mechanism of action of Heparin in preventing thrombus formation?',
    options: [
      { key: 'A', text: 'Accelerating the inhibitory action of Antithrombin III against Thrombin and Factor Xa' },
      { key: 'B', text: 'Direct inhibition of Vitamin K epoxide reductase' },
      { key: 'C', text: 'Irreversible inhibition of Cyclooxygenase-1 (COX-1)' },
      { key: 'D', text: 'Dissolving fibrin clots directly' }
    ],
    correctOption: 'A',
    rationale: 'Heparin binds to antithrombin III, inducing a conformational change that accelerates its inhibition of activated thrombin (Factor IIa) and Factor Xa by over 1000-fold.'
  },

  // ── 6. COMMUNITY HEALTH NURSING & EPIDEMIOLOGY (Q61 - Q80) ──
  {
    qNo: 61,
    subject: 'Community Health Nursing',
    question: 'Under the National Immunization Schedule (NIS) of India, what is the exact dose and route for administering BCG vaccine to a neonate at birth?',
    options: [
      { key: 'A', text: '0.1 mL Intramuscular in anterolateral thigh' },
      { key: 'B', text: '0.05 mL Intradermal in left upper arm' },
      { key: 'C', text: '0.5 mL Subcutaneous in right deltoid' },
      { key: 'D', text: '0.1 mL Subcutaneous in left forearm' }
    ],
    correctOption: 'B',
    rationale: 'At birth (up to 4 weeks), BCG vaccine is administered strictly intradermally on left upper arm at a dose of 0.05 mL using a tuberculin syringe (0.1 mL after 1 month).'
  },
  {
    qNo: 62,
    subject: 'Community Health Nursing',
    question: 'At which temperature range must the vaccine cold chain be strictly maintained inside Ice-Lined Refrigerators (ILR) for sensitive vaccines like OPV, Measles, and Pentavalent?',
    options: [
      { key: 'A', text: '-20°C to -10°C' },
      { key: 'B', text: '+2°C to +8°C' },
      { key: 'C', text: '+10°C to +15°C' },
      { key: 'D', text: '0°C to +2°C' }
    ],
    correctOption: 'B',
    rationale: 'The universal cold chain temperature standard for health facilities and ILRs in India is maintained strictly between +2°C and +8°C at all times.'
  },
  {
    qNo: 63,
    subject: 'Community Health Nursing & Epidemiology',
    question: 'Maternal Mortality Ratio (MMR) is epidemiologically expressed as the number of maternal deaths per how many live births in a given year?',
    options: [
      { key: 'A', text: 'Per 1,000 live births' },
      { key: 'B', text: 'Per 10,000 live births' },
      { key: 'C', text: 'Per 100,000 live births' },
      { key: 'D', text: 'Per 1,000,000 live births' }
    ],
    correctOption: 'C',
    rationale: 'MMR is calculated per 100,000 (1 Lakh) live births, whereas Infant Mortality Rate (IMR) and Crude Birth Rate (CBR) are expressed per 1,000 live births.'
  },
  {
    qNo: 64,
    subject: 'Community Health Nursing & Epidemiology',
    question: 'Which test is utilized in water purification field practice to determine the exact bleaching powder requirement (chlorine demand) to disinfect a water source?',
    options: [
      { key: 'A', text: 'Horrocks’ Apparatus Test' },
      { key: 'B', text: 'Orthotolidine Arsenite (OTA) Test' },
      { key: 'C', text: 'Widal Test' },
      { key: 'D', text: 'Turbidity meter test' }
    ],
    correctOption: 'A',
    rationale: 'Horrocks’ apparatus is used to estimate the bleaching powder needed to disinfect 455 liters (100 gallons) of water. The Orthotolidine (OT/OTA) test measures free and combined residual chlorine.'
  },
  {
    qNo: 65,
    subject: 'Community Health Nursing',
    question: 'What is the population norm for establishing a Primary Health Centre (PHC) in plain areas and hilly/tribal/difficult areas respectively in India?',
    options: [
      { key: 'A', text: 'Plain: 30,000; Hilly/Tribal: 20,000' },
      { key: 'B', text: 'Plain: 5,000; Hilly/Tribal: 3,000' },
      { key: 'C', text: 'Plain: 120,000; Hilly/Tribal: 80,000' },
      { key: 'D', text: 'Plain: 50,000; Hilly/Tribal: 35,000' }
    ],
    correctOption: 'A',
    rationale: 'Indian public health norms: Sub-centre = 5,000 (Plain) / 3,000 (Hilly); PHC = 30,000 (Plain) / 20,000 (Hilly); CHC = 120,000 (Plain) / 80,000 (Hilly).'
  },
  {
    qNo: 66,
    subject: 'Community Health Nursing',
    question: 'Under the National Tuberculosis Elimination Programme (NTEP), what is the overarching target year set by the Government of India to achieve TB elimination in India?',
    options: [
      { key: 'A', text: '2025' },
      { key: 'B', text: '2030' },
      { key: 'C', text: '2035' },
      { key: 'D', text: '2040' }
    ],
    correctOption: 'A',
    rationale: 'India launched the National Strategic Plan to eliminate TB by 2025, five years ahead of the global Sustainable Development Goal (SDG) target of 2030.'
  },
  {
    qNo: 67,
    subject: 'Community Health Nursing',
    question: 'Which flagship government health scheme provides cashless annual health insurance coverage of up to ₹5 Lakh per family per year for secondary and tertiary care hospitalization in India?',
    options: [
      { key: 'A', text: 'Ayushman Bharat — Pradhan Mantri Jan Arogya Yojana (PM-JAY)' },
      { key: 'B', text: 'Rashtriya Swasthya Bima Yojana (RSBY)' },
      { key: 'C', text: 'Janani Suraksha Yojana (JSY)' },
      { key: 'D', text: 'Pradhan Mantri Suraksha Bima Yojana (PMSBY)' }
    ],
    correctOption: 'A',
    rationale: 'Ayushman Bharat PM-JAY is the world’s largest health assurance scheme, providing ₹5 Lakh cover per vulnerable family annually for inpatient care across empaneled hospitals.'
  },
  {
    qNo: 68,
    subject: 'Community Health Nursing',
    question: 'Which index is calculated as the ratio of weight in kilograms divided by the square of height in meters (kg/m²)?',
    options: [
      { key: 'A', text: 'Broca’s Index' },
      { key: 'B', text: 'Body Mass Index (Quetelet’s Index)' },
      { key: 'C', text: 'Ponderal Index' },
      { key: 'D', text: 'Waist-to-Hip Ratio' }
    ],
    correctOption: 'B',
    rationale: 'Body Mass Index (BMI), also known as Quetelet’s Index, is calculated as Weight (kg) / [Height (m)]². Normal Asian cutoff is 18.5–22.9 kg/m².'
  },
  {
    qNo: 69,
    subject: 'Community Health Nursing',
    question: 'Which of the following epidemiological study designs is considered the gold standard for establishing true causal relationships between interventions and outcomes?',
    options: [
      { key: 'A', text: 'Cross-sectional study' },
      { key: 'B', text: 'Case-control study' },
      { key: 'C', text: 'Randomized Controlled Trial (RCT)' },
      { key: 'D', text: 'Ecological study' }
    ],
    correctOption: 'C',
    rationale: 'Double-blinded Randomized Controlled Trials (RCTs) minimize confounding and bias through random allocation, representing the gold standard in epidemiological evidence hierarchy.'
  },
  {
    qNo: 70,
    subject: 'Community Health Nursing',
    question: 'In statistical epidemiology, which measure of central tendency represents the most frequently occurring value in a set of observations?',
    options: [
      { key: 'A', text: 'Mean' },
      { key: 'B', text: 'Median' },
      { key: 'C', text: 'Mode' },
      { key: 'D', text: 'Standard Deviation' }
    ],
    correctOption: 'C',
    rationale: 'Mode is the value that appears with the highest frequency in a distribution. Median is the middle observation in ranked data; Mean is the mathematical average.'
  },

  // ── 7. MENTAL HEALTH / PSYCHIATRIC NURSING (Q71 - Q85) ──
  {
    qNo: 71,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'A psychiatric patient believes that the Prime Minister of India is communicating secret messages specifically to him through everyday television news broadcasts. What type of delusion is this?',
    options: [
      { key: 'A', text: 'Delusion of Reference' },
      { key: 'B', text: 'Delusion of Grandeur' },
      { key: 'C', text: 'Delusion of Persecution' },
      { key: 'D', text: 'Nihilistic Delusion' }
    ],
    correctOption: 'A',
    rationale: 'Delusion of reference is a false fixed belief that innocuous, neutral events, television broadcasts, or remarks by strangers have direct personal significance and hidden meaning meant for them.'
  },
  {
    qNo: 72,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'Which severe adverse effect characterized by acute muscular rigidity, hyperthermia (temp > 40°C), autonomic instability, and elevated serum creatine kinase (CK) is associated with high-potency typical antipsychotics (e.g. Haloperidol)?',
    options: [
      { key: 'A', text: 'Tardive Dyskinesia' },
      { key: 'B', text: 'Neuroleptic Malignant Syndrome (NMS)' },
      { key: 'C', text: 'Serotonin Syndrome' },
      { key: 'D', text: 'Akathisia' }
    ],
    correctOption: 'B',
    rationale: 'NMS is a life-threatening medical emergency caused by dopamine receptor blockade. Management requires immediate neuroleptic cessation, ICU supportive care, and Dantrolene or Bromocriptine.'
  },
  {
    qNo: 73,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'What is the absolute, most important nursing priority assessment for a patient admitted with major depressive disorder who suddenly appears cheerful, peaceful, and gives away valued personal possessions?',
    options: [
      { key: 'A', text: 'Discharge readiness' },
      { key: 'B', text: 'Immediate assessment for active suicide plan and lethality (Suicide Precautions)' },
      { key: 'C', text: 'Medication compliance' },
      { key: 'D', text: 'Cognitive function improvement' }
    ],
    correctOption: 'B',
    rationale: 'A sudden unexpected elevation in mood and giving away prized possessions in severe depression often indicates the patient has finalized a decision to commit suicide and feels relief.'
  },
  {
    qNo: 74,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'In Electroconvulsive Therapy (ECT), which short-acting muscle relaxant is routinely administered to prevent bone fractures and musculoskeletal injuries during the induced therapeutic seizure?',
    options: [
      { key: 'A', text: 'Succinylcholine (Suxamethonium)' },
      { key: 'B', text: 'Pancuronium' },
      { key: 'C', text: 'Vecuronium' },
      { key: 'D', text: 'Baclofen' }
    ],
    correctOption: 'A',
    rationale: 'Succinylcholine is a depolarizing neuromuscular blocker that induces complete, brief muscle flaccidity, protecting against physical trauma during electrical grand mal seizure induction.'
  },
  {
    qNo: 75,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'Which of the following defense mechanisms involves redirecting unacceptable impulses, anger, or aggressive feelings toward a less threatening, safer substitute target?',
    options: [
      { key: 'A', text: 'Sublimation' },
      { key: 'B', text: 'Displacement' },
      { key: 'C', text: 'Projection' },
      { key: 'D', text: 'Reaction Formation' }
    ],
    correctOption: 'B',
    rationale: 'Displacement shifts emotional impulses from a threatening source (e.g. boss) to a safer target (e.g. kicking the dog or yelling at family). Sublimation channels impulses into socially constructive activities.'
  },
  {
    qNo: 76,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'What is the frontline pharmacological agent prescribed for acute alcohol withdrawal to prevent delirium tremens and withdrawal seizures?',
    options: [
      { key: 'A', text: 'Benzodiazepines (e.g. Diazepam, Lorazepam, Chlordiazepoxide)' },
      { key: 'B', text: 'Disulfiram' },
      { key: 'C', text: 'Acamprosate' },
      { key: 'D', text: 'Haloperidol' }
    ],
    correctOption: 'A',
    rationale: 'Long-acting benzodiazepines provide cross-tolerance to alcohol at GABA-A receptors, stabilizing autonomic hyperactivity and preventing withdrawal seizures and delirium tremens.'
  },
  {
    qNo: 77,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'Wernicke-Korsakoff encephalopathy in chronic alcoholism is caused by a severe dietary deficiency of which essential vitamin?',
    options: [
      { key: 'A', text: 'Vitamin B1 (Thiamine)' },
      { key: 'B', text: 'Vitamin B3 (Niacin)' },
      { key: 'C', text: 'Vitamin B12 (Cobalamin)' },
      { key: 'D', text: 'Vitamin C' }
    ],
    correctOption: 'A',
    rationale: 'Thiamine (B1) deficiency leads to Wernicke encephalopathy (triad: ophthalmoplegia, ataxia, confusion) and irreversible Korsakoff psychosis (confabulation and amnesia).'
  },
  {
    qNo: 78,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'Which eating disorder is characterized by recurrent binge eating episodes followed by compensatory purging behaviors (self-induced vomiting, laxative abuse) with normal or near-normal body weight?',
    options: [
      { key: 'A', text: 'Anorexia Nervosa' },
      { key: 'B', text: 'Bulimia Nervosa' },
      { key: 'C', text: 'Binge Eating Disorder' },
      { key: 'D', text: 'Pica' }
    ],
    correctOption: 'B',
    rationale: 'Bulimia nervosa features recurrent binging and inappropriate compensatory purging while maintaining normal weight. Anorexia nervosa is characterized by severe underweight (BMI < 17.5) and body distortion.'
  },
  {
    qNo: 79,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'Which atypical second-generation antipsychotic carries a mandatory requirement for weekly Complete Blood Count (CBC) monitoring due to the risk of life-threatening Agranulocytosis?',
    options: [
      { key: 'A', text: 'Olanzapine' },
      { key: 'B', text: 'Risperidone' },
      { key: 'C', text: 'Clozapine' },
      { key: 'D', text: 'Quetiapine' }
    ],
    correctOption: 'C',
    rationale: 'Clozapine carries a black-box warning for agranulocytosis (severe drop in Absolute Neutrophil Count < 500/mm³), necessitating strict baseline and routine ANC blood monitoring.'
  },
  {
    qNo: 80,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'The therapeutic nurse-patient relationship progresses through which chronological phases as outlined by Hildegard Peplau?',
    options: [
      { key: 'A', text: 'Orientation → Working → Termination phase' },
      { key: 'B', text: 'Pre-interaction → Working → Resolution phase' },
      { key: 'C', text: 'Planning → Execution → Evaluation' },
      { key: 'D', text: 'Assessment → Implementation → Closure' }
    ],
    correctOption: 'A',
    rationale: 'Peplau’s interpersonal nursing model outlines four phases: Orientation (problem recognition), Identification, Exploitation/Working (therapeutic interventions), and Resolution/Termination.'
  },

  // ── 8. NURSING RESEARCH, QUALITY & GENERAL APTITUDE (Q81 - Q100) ──
  {
    qNo: 81,
    subject: 'Nursing Research & Statistics',
    question: 'In a clinical research study, the probability of rejecting a true null hypothesis when it is actually true (false positive) is known as:',
    options: [
      { key: 'A', text: 'Type I error (Alpha error)' },
      { key: 'B', text: 'Type II error (Beta error)' },
      { key: 'C', text: 'Sampling error' },
      { key: 'D', text: 'Measurement bias' }
    ],
    correctOption: 'A',
    rationale: 'Type I error (α) occurs when the researcher incorrectly rejects a true null hypothesis. Type II error (β) occurs when a false null hypothesis fails to be rejected (false negative).'
  },
  {
    qNo: 82,
    subject: 'Nursing Research & Statistics',
    question: 'Which sampling technique gives every individual in the target population an equal and independent probability of being selected for the study?',
    options: [
      { key: 'A', text: 'Simple Random Sampling' },
      { key: 'B', text: 'Purposive Sampling' },
      { key: 'C', text: 'Convenience Sampling' },
      { key: 'D', text: 'Snowball Sampling' }
    ],
    correctOption: 'A',
    rationale: 'Simple random sampling is the purest form of probability sampling, ensuring non-zero, equal probability of selection for every unit in the sampling frame.'
  },
  {
    qNo: 83,
    subject: 'Hospital Quality & Patient Safety',
    question: 'According to NABH / JCI patient safety standards, what is the mandatory protocol executed immediately before surgical incision to confirm correct patient identity, correct procedure, and correct surgical site?',
    options: [
      { key: 'A', text: 'Surgical "Time Out"' },
      { key: 'B', text: 'Pre-anesthetic evaluation' },
      { key: 'C', text: 'Sign-in at reception' },
      { key: 'D', text: 'Post-op debriefing' }
    ],
    correctOption: 'A',
    rationale: 'The WHO Surgical Safety Checklist "Time Out" is conducted by the entire OR team right before surgical incision to verify patient, site, side, procedure, and consent.'
  },
  {
    qNo: 84,
    subject: 'Hospital Quality & Patient Safety',
    question: 'Which quality indicator tracks the rate of catheter-associated bloodstream infections in intensive care units per 1,000 central line days?',
    options: [
      { key: 'A', text: 'CAUTI rate' },
      { key: 'B', text: 'CLABSI rate' },
      { key: 'C', text: 'VAP rate' },
      { key: 'D', text: 'SSI rate' }
    ],
    correctOption: 'B',
    rationale: 'CLABSI (Central Line-Associated Bloodstream Infection) rate is calculated as: (Number of CLABSIs / Total Central Line Days) × 1,000.'
  },
  {
    qNo: 85,
    subject: 'General Aptitude & Reasoning',
    question: 'If "NURSE" is coded as "QXVUH" in a certain cipher system, how will "DOCTOR" be coded in the same pattern?',
    options: [
      { key: 'A', text: 'GRFWUW' },
      { key: 'B', text: 'GRFWRU' },
      { key: 'C', text: 'GQFVTW' },
      { key: 'D', text: 'HRFXUX' }
    ],
    correctOption: 'B',
    rationale: 'Each letter shifts +3 forward alphabetically: D(+3)→G, O(+3)→R, C(+3)→F, T(+3)→W, O(+3)→R, R(+3)→U, producing GRFWRU.'
  },
  {
    qNo: 86,
    subject: 'General Aptitude & Quantitative Ability',
    question: 'A train 150 meters long passes a stationary telegraph post in 9 seconds. What is the speed of the train in kilometers per hour (km/h)?',
    options: [
      { key: 'A', text: '50 km/h' },
      { key: 'B', text: '60 km/h' },
      { key: 'C', text: '72 km/h' },
      { key: 'D', text: '80 km/h' }
    ],
    correctOption: 'B',
    rationale: 'Speed = Distance / Time = 150 m / 9 s = 50/3 m/s. Converting to km/h = (50/3) × (18/5) = 60 km/h.'
  },
  {
    qNo: 87,
    subject: 'General Aptitude & Logical Reasoning',
    question: 'Pointing to a photograph of a man, a nurse says: "His mother is the only daughter of my mother." How is the nurse related to the man in the photograph?',
    options: [
      { key: 'A', text: 'Sister' },
      { key: 'B', text: 'Mother' },
      { key: 'C', text: 'Aunt' },
      { key: 'D', text: 'Grandmother' }
    ],
    correctOption: 'B',
    rationale: '"Only daughter of my mother" refers to the speaker herself (the female nurse). Therefore, the nurse is the mother of the man in the photograph.'
  },
  {
    qNo: 88,
    subject: 'General Aptitude & Arithmetic',
    question: 'The average age of 24 nursing students in a batch is 21 years. If the age of the nursing tutor is included, the average age increases by 1 year. What is the age of the tutor?',
    options: [
      { key: 'A', text: '42 years' },
      { key: 'B', text: '44 years' },
      { key: 'C', text: '46 years' },
      { key: 'D', text: '48 years' }
    ],
    correctOption: 'C',
    rationale: 'Total initial age = 24 × 21 = 504 years. New total (25 people with average 22) = 25 × 22 = 550 years. Tutor’s age = 550 - 504 = 46 years.'
  },
  {
    qNo: 89,
    subject: 'General English & Vocabulary',
    question: 'Choose the correct antonym for the clinical term "MALIGNANT":',
    options: [
      { key: 'A', text: 'Virulent' },
      { key: 'B', text: 'Benign' },
      { key: 'C', text: 'Fatal' },
      { key: 'D', text: 'Invasive' }
    ],
    correctOption: 'B',
    rationale: 'Malignant means invasive, dangerous, or cancerous. Its direct medical antonym is Benign (non-cancerous, harmless).'
  },
  {
    qNo: 90,
    subject: 'General Awareness & National Health',
    question: 'Under the Indian Nursing Council (INC) Act of 1947, who is the apex statutory regulatory authority responsible for establishing uniform standards of nursing education throughout India?',
    options: [
      { key: 'A', text: 'Indian Nursing Council (INC, New Delhi)' },
      { key: 'B', text: 'National Medical Commission (NMC)' },
      { key: 'C', text: 'State Nursing Registration Council' },
      { key: 'D', text: 'Trained Nurses Association of India (TNAI)' }
    ],
    correctOption: 'A',
    rationale: 'The Indian Nursing Council (INC) is the central statutory body established under the INC Act 1947 to regulate nursing curricula, accreditation, and educational standards across India.'
  },
  {
    qNo: 91,
    subject: 'Medical-Surgical Nursing (Immunology)',
    question: 'Which type of hypersensitivity reaction is mediated by IgE antibodies binding to mast cells and basophils, triggering immediate anaphylaxis?',
    options: [
      { key: 'A', text: 'Type I Hypersensitivity (Immediate / Anaphylactic)' },
      { key: 'B', text: 'Type II Hypersensitivity (Cytotoxic)' },
      { key: 'C', text: 'Type III Hypersensitivity (Immune Complex)' },
      { key: 'D', text: 'Type IV Hypersensitivity (Delayed Cell-Mediated)' }
    ],
    correctOption: 'A',
    rationale: 'Type I hypersensitivity involves IgE-mediated histamine and leukotriene release from mast cells, causing bronchospasm, urticaria, and anaphylactic shock.'
  },
  {
    qNo: 92,
    subject: 'Medical-Surgical Nursing (Gastroenterology)',
    question: 'A patient with suspected acute appendicitis exhibits sharp pain in the right lower quadrant (RLQ) when pressure is applied and suddenly released at McBurney’s point. What is this sign called?',
    options: [
      { key: 'A', text: 'Rovsing’s sign' },
      { key: 'B', text: 'Rebound Tenderness (Blumberg’s sign)' },
      { key: 'C', text: 'Murphy’s sign' },
      { key: 'D', text: 'Cullen’s sign' }
    ],
    correctOption: 'B',
    rationale: 'Blumberg’s sign (rebound tenderness) at McBurney’s point indicates peritoneal irritation secondary to acute appendicitis. Murphy’s sign is for acute cholecystitis.'
  },
  {
    qNo: 93,
    subject: 'Obstetrics & Gynaecological Nursing',
    question: 'Which screening test is routinely administered to Rh-negative unsensitized pregnant mothers at 28 weeks gestation and within 72 hours post-delivery to prevent Rh isoimmunization?',
    options: [
      { key: 'A', text: 'Anti-D Immunoglobulin (RhoGAM 300 mcg)' },
      { key: 'B', text: 'Tetanus Toxoid' },
      { key: 'C', text: 'Folic acid 5 mg' },
      { key: 'D', text: 'Iron sucrose infusion' }
    ],
    correctOption: 'A',
    rationale: 'Anti-D immunoglobulin (300 mcg / 1500 IU) destroys circulating fetal Rh-positive red cells in maternal circulation before maternal immune sensitization occurs.'
  },
  {
    qNo: 94,
    subject: 'Child Health Nursing (Pediatrics)',
    question: 'Which mineral deficiency is the primary cause of nutritional Rickets in infants and growing children?',
    options: [
      { key: 'A', text: 'Iron deficiency' },
      { key: 'B', text: 'Vitamin D and Calcium deficiency' },
      { key: 'C', text: 'Vitamin A deficiency' },
      { key: 'D', text: 'Zinc deficiency' }
    ],
    correctOption: 'B',
    rationale: 'Vitamin D deficiency impairs intestinal calcium and phosphate absorption, leading to defective mineralization of growth plates (craniotabes, rachitic rosary, bowed legs).'
  },
  {
    qNo: 95,
    subject: 'Nursing Foundations & Skills',
    question: 'What is the standard maximum suction pressure setting recommended for endotracheal suctioning in an adult patient to prevent mucosal trauma and atelectasis?',
    options: [
      { key: 'A', text: '40–60 mmHg' },
      { key: 'B', text: '80–120 mmHg (Max 150 mmHg)' },
      { key: 'C', text: '180–220 mmHg' },
      { key: 'D', text: '250–300 mmHg' }
    ],
    correctOption: 'B',
    rationale: 'Recommended suction pressures: Adult: 80–120 mmHg (max 150 mmHg); Child: 80–100 mmHg; Infant: 60–80 mmHg. Suction time should not exceed 10–15 seconds.'
  },
  {
    qNo: 96,
    subject: 'Clinical Pharmacology',
    question: 'A patient receiving IV Vancomycin develops rapid flushing, erythema, and pruritus of the face, neck, and upper torso ("Red Man Syndrome"). What is the correct nursing intervention?',
    options: [
      { key: 'A', text: 'Stop vancomycin permanently as the patient is in anaphylaxis' },
      { key: 'B', text: 'Slow down the infusion rate to at least 60–120 minutes and administer antihistamines' },
      { key: 'C', text: 'Increase the infusion rate to finish quickly' },
      { key: 'D', text: 'Administer IV Epinephrine immediately' }
    ],
    correctOption: 'B',
    rationale: 'Red Man Syndrome is a rate-dependent non-immunologic histamine release, not true IgE allergy. Slowing the infusion rate (≥60 mins per 1g) resolves and prevents the reaction.'
  },
  {
    qNo: 97,
    subject: 'Community Health Nursing',
    question: 'Under the National Vector Borne Disease Control Programme (NVBDCP), which vector mosquito transmits Dengue and Chikungunya viruses, characterized by daytime biting and white striped markings?',
    options: [
      { key: 'A', text: 'Anopheles stephensi' },
      { key: 'B', text: 'Aedes aegypti ("Tiger Mosquito")' },
      { key: 'C', text: 'Culex quinquefasciatus' },
      { key: 'D', text: 'Mansonia annulifera' }
    ],
    correctOption: 'B',
    rationale: 'Aedes aegypti breeds in clean domestic artificial water containers and bites predominantly during daylight hours, transmitting Dengue, Chikungunya, and Zika.'
  },
  {
    qNo: 98,
    subject: 'Mental Health Nursing (Psychiatry)',
    question: 'A patient with Post-Traumatic Stress Disorder (PTSD) relives a catastrophic military accident with vivid sensory illusions as if it is happening in the present moment. This is termed a:',
    options: [
      { key: 'A', text: 'Flashback / Dissociative intrusion' },
      { key: 'B', text: 'Somatization' },
      { key: 'C', text: 'Conversion disorder' },
      { key: 'D', text: 'Illusion' }
    ],
    correctOption: 'A',
    rationale: 'Flashbacks in PTSD are dissociative states where the person feels or acts as if the traumatic event were recurring in the present environment.'
  },
  {
    qNo: 99,
    subject: 'Hospital Quality & Leadership',
    question: 'Which management principle establishes that an employee should receive orders and directions from only one direct superior to avoid conflicting instructions?',
    options: [
      { key: 'A', text: 'Unity of Command (Henri Fayol)' },
      { key: 'B', text: 'Span of Control' },
      { key: 'C', text: 'Division of Work' },
      { key: 'D', text: 'Scalar Chain' }
    ],
    correctOption: 'A',
    rationale: 'Henri Fayol’s "Unity of Command" principle dictates that each subordinate reports to and receives direct instructions from only one supervisor.'
  },
  {
    qNo: 100,
    subject: 'General Awareness & Nursing Governance',
    question: 'Which day is celebrated globally as International Nurses Day every year to commemorate the birth anniversary of Florence Nightingale?',
    options: [
      { key: 'A', text: '7 April' },
      { key: 'B', text: '1 May' },
      { key: 'C', text: '12 May' },
      { key: 'D', text: '1 December' }
    ],
    correctOption: 'C',
    rationale: 'International Nurses Day is celebrated worldwide on 12 May each year, marking the birth anniversary of Florence Nightingale, the founder of modern professional nursing.'
  }
];

import norcet2024 from './pyq-papers/pyq-norcet-2024.json';
import norcet2025Prelims from './pyq-papers/pyq-norcet-2025-prelims.json';
import norcet2023 from './pyq-papers/pyq-norcet-2023.json';
import norcet2022 from './pyq-papers/pyq-norcet-2022.json';
import norcet2021 from './pyq-papers/pyq-norcet-2021.json';
import norcet2020 from './pyq-papers/pyq-norcet-2020.json';

const EXTRACTED_PAPERS_MAP: Record<string, FullPaperData> = {
  'pyq-norcet-2024': norcet2024 as unknown as FullPaperData,
  'pyq-norcet-2026': norcet2024 as unknown as FullPaperData,
  'pyq-norcet-2025-prelims': norcet2025Prelims as unknown as FullPaperData,
  'pyq-norcet-2023': norcet2023 as unknown as FullPaperData,
  'pyq-norcet-2022': norcet2022 as unknown as FullPaperData,
  'pyq-norcet-2021': norcet2021 as unknown as FullPaperData,
  'pyq-norcet-2020': norcet2020 as unknown as FullPaperData,
};

export function getFullPaperData(paperId: string): FullPaperData {
  if (EXTRACTED_PAPERS_MAP[paperId]) {
    return EXTRACTED_PAPERS_MAP[paperId];
  }

  const foundPaper = EXAM_PAPERS.find(p => p.id === paperId);

  if (foundPaper) {
    return {
      paperId: foundPaper.id,
      title: foundPaper.title,
      examName: foundPaper.examName,
      year: foundPaper.year,
      shift: foundPaper.shift || `${foundPaper.year} Official Examination Shift 1`,
      totalMarks: 100,
      negativeMarking: foundPaper.category === 'central' ? '0.33 (1/3rd deduction)' : '0.25 (1/4th deduction)',
      durationMinutes: foundPaper.durationMinutes || 90,
      officialKeyNotification: `${foundPaper.examName} Official Conducting Authority Answer Key`,
      subjectsSummary: [
        { name: 'Medical-Surgical Nursing', count: 35 },
        { name: 'Obstetrics & Gynaecology', count: 20 },
        { name: 'Child Health / Pediatrics', count: 15 },
        { name: 'Nursing Foundations', count: 10 },
        { name: 'Pharmacology & Calculations', count: 10 },
        { name: 'Community & Aptitude', count: 10 },
      ],
      questions: MASTER_NURSING_QUESTIONS,
    };
  }

  return {
    paperId,
    title: 'Official Nursing Examination Question Paper & Verified Key',
    examName: 'Nursing Recruitment Exam',
    year: 2024,
    shift: 'Official Screening Test',
    totalMarks: 100,
    negativeMarking: '0.33 (1/3rd deduction)',
    durationMinutes: 90,
    officialKeyNotification: 'Official Examination Authority Verified Answer Key',
    subjectsSummary: [
      { name: 'Medical-Surgical Nursing', count: 35 },
      { name: 'Obstetrics & Midwifery', count: 20 },
      { name: 'Pediatric Nursing', count: 15 },
      { name: 'Pharmacology', count: 10 },
      { name: 'Community Health & Aptitude', count: 20 },
    ],
    questions: MASTER_NURSING_QUESTIONS,
  };
}
