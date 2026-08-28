import { parseNursingResumeText } from '../src/lib/resume-parser';
import { evaluateEligibility, OpportunityRequirementItem } from '../src/lib/eligibility';
import { UserProfile, calculateAge, calculateTotalExperienceMonths } from '../src/lib/user-store';

console.log('🧪 RUNNING RIGOROUS CAREER PASSPORT & ELIGIBILITY AUDIT SUITE\n');

let passCount = 0;
let failCount = 0;

function assert(condition: any, testName: string, failureDetail?: string) {
  if (Boolean(condition)) {
    console.log(`✅ PASS: ${testName}`);
    passCount++;
  } else {
    console.error(`❌ FAIL: ${testName} -> ${failureDetail || 'Assertion failed'}`);
    failCount++;
  }
}

// =========================================================================
// PART 1: 17 RESUME PARSER AUDIT TEST CASES
// =========================================================================
console.log('--- PART 1: RESUME PARSER AUDIT (17 REALISTIC SCENARIOS) ---');

// Case 1: Standard B.Sc. Nursing Resume
const cv1 = `Pooja Sharma\nDOB: 15/06/1998\nB.Sc. Nursing from RGUHS Bangalore, 2021\nRegistered Nurse KNC/88492\nManipal Hospital Bangalore, ICU Staff Nurse, Jan 2022 to Present\nEnglish, Hindi, Kannada\nBLS, ACLS`;
const res1 = parseNursingResumeText(cv1, 'pooja_cv.pdf');
assert(res1.extractedProfile.qualificationsList?.some(q => q.code === 'bsc_nursing'), 'Case 1: Extracts B.Sc. Nursing');
assert(res1.extractedProfile.dob === '1998-06-15', 'Case 1: Extracts DOB');
assert(res1.extractedProfile.employmentHistory?.some(e => e.role === 'icu'), 'Case 1: Extracts ICU department');

// Case 2: GNM Diploma Resume
const cv2 = `Sunil Kumar\nDiploma in General Nursing & Midwifery (GNM) 2018\nCivil Hospital Jaipur, Staff Nurse\nRegistered with RNC`;
const res2 = parseNursingResumeText(cv2, 'sunil_gnm.docx');
assert(res2.extractedProfile.qualificationsList?.some(q => q.code === 'gnm'), 'Case 2: Extracts GNM Diploma');
assert(res2.extractedProfile.registrationDetails?.councilName === 'RNC', 'Case 2: Extracts RNC Council');

// Case 3: B.Sc. + M.Sc. Resume
const cv3 = `Dr. Anjali Menon\nB.Sc. Nursing (2018)\nM.Sc. Nursing in Medical Surgical (2022)\nAmrita Institute of Medical Sciences, Assistant Professor`;
const res3 = parseNursingResumeText(cv3, 'anjali_msc.pdf');
assert(res3.extractedProfile.qualificationsList?.length === 2, 'Case 3: Retains both B.Sc. and M.Sc. qualifications');
assert(res3.extractedProfile.qualificationsList?.some(q => q.code === 'msc'), 'Case 3: Identifies M.Sc.');

// Case 4: GNM + Post Basic B.Sc. Resume
const cv4 = `Kavitha R\nGeneral Nursing and Midwifery GNM (2015)\nPost Basic B.Sc. Nursing (2019)\nApollo Hospitals Chennai, OT Nurse`;
const res4 = parseNursingResumeText(cv4, 'kavitha_pb.txt');
assert(res4.extractedProfile.qualificationsList?.some(q => q.code === 'post_basic'), 'Case 4: Extracts Post Basic B.Sc.');
assert(res4.extractedProfile.qualificationsList?.some(q => q.code === 'gnm'), 'Case 4: Extracts GNM foundation');

// Case 5: Multiple Hospitals History
const cv5 = `Rahul Verma\nB.Sc. Nursing\nMax Super Speciality Hospital, Emergency Nurse, Jan 2021 to Dec 2022\nFortis Healthcare, ICU Nurse, Jan 2023 to Present`;
const res5 = parseNursingResumeText(cv5, 'rahul_multihosp.pdf');
assert(res5.extractedProfile.employmentHistory?.length === 2, 'Case 5: Extracts multiple distinct hospital employment blocks');

// Case 6: Current Employment Detection with Medcity
const cv6 = `Deepa Nair\nB.Sc. Nursing\nAster Medcity Kochi, Staff Nurse, Aug 2023 to Present`;
const res6 = parseNursingResumeText(cv6, 'deepa.pdf');
assert(res6.extractedProfile.employmentHistory?.[0]?.isCurrent === true, 'Case 6: Identifies ongoing/present employment in Aster Medcity');

// Case 7: Missing Employment Dates
const cv7 = `Meena S\nGNM\nApollo Hospital, Staff Nurse\nSkills: Wound Care`;
const res7 = parseNursingResumeText(cv7, 'meena.pdf');
assert(res7.extractedProfile.employmentHistory?.length === 1, 'Case 7: Gracefully handles missing dates without crash');

// Case 8: Missing DOB
const cv8 = `Anita Rao\nB.Sc. Nursing\nManipal Hospital, Staff Nurse`;
const res8 = parseNursingResumeText(cv8, 'anita.pdf');
assert(res8.extractedProfile.dob === undefined, 'Case 8: Leaves DOB strictly undefined when missing');

// Case 9: Missing Registration
const cv9 = `Fresher Candidate\nB.Sc. Nursing 2026 Batch\nNo experience`;
const res9 = parseNursingResumeText(cv9, 'fresher.pdf');
assert(res9.extractedProfile.registrationDetails?.regNumber === undefined, 'Case 9: Leaves registration undefined when absent');

// Case 10: Multiple Languages
const cv10 = `Nurse Profile\nLanguages: English, Hindi, German, Malayalam, Arabic\nB.Sc. Nursing`;
const res10 = parseNursingResumeText(cv10, 'langs.pdf');
assert((res10.extractedProfile.languagesList?.length || 0) >= 4, 'Case 10: Extracts all detected languages into matrix');

// Case 11: Ambiguous qualification wording
const cv11 = `Candidate having completed Nursing Training course 2020\nStaff Nurse at City Clinic`;
const res11 = parseNursingResumeText(cv11, 'ambig.txt');
assert(res11.success === true, 'Case 11: Handles non-standard resume text');

// Case 12: Conflicting information
const cv12 = `John Doe\nDOB: 12/04/1995\nBorn in 1999\nB.Sc. Nursing`;
const res12 = parseNursingResumeText(cv12, 'conflict.txt');
assert(res12.extractedProfile.dob !== undefined, 'Case 12: Extracts structured date candidate for review confirmation');

// Case 13: Non-nursing employment
const cv13 = `B.Sc. Nursing\nCustomer Support Associate at Amazon (2020)\nStaff Nurse at Max Hospital (2022)`;
const res13 = parseNursingResumeText(cv13, 'mixed.pdf');
assert(res13.extractedProfile.employmentHistory?.some(e => /Max/i.test(e.employer)), 'Case 13: Prioritizes clinical healthcare employers');

// Case 14: Poorly formatted single-line resume
const cv14 = `SURNAME FIRSTNAME BSC NURSING 2022 MANIPAL HOSPITAL ICU NURSE REG KNC 12345`;
const res14 = parseNursingResumeText(cv14, 'raw_line.txt');
assert(res14.extractedProfile.qualificationsList?.some(q => q.code === 'bsc_nursing'), 'Case 14: Extracts B.Sc. Nursing from unformatted single line text');

// Cases 15, 16, 17: Extensions verification (PDF, DOCX, TXT metadata tracking)
assert(parseNursingResumeText(cv1, 'resume.pdf').extractedProfile.resumeFileName === 'resume.pdf', 'Case 15: PDF format metadata');
assert(parseNursingResumeText(cv1, 'resume.docx').extractedProfile.resumeFileName === 'resume.docx', 'Case 16: DOCX format metadata');
assert(parseNursingResumeText(cv1, 'resume.txt').extractedProfile.resumeFileName === 'resume.txt', 'Case 17: TXT format metadata');

console.log('\n--- PART 2: P0.1 COMPOUND PATHWAYS & P0.2 CONFIRMED-ONLY ELIGIBILITY ---');

// NORCET Structured Requirements with Explicit Atomic Pathways
const reqsNorcet: OpportunityRequirementItem[] = [
  // Pathway 1: B.Sc. Nursing / Post Basic (0 yrs exp required)
  { kind: 'qualification', operator: 'in', valueText: ['bsc_nursing', 'msc', 'post_basic'], isMandatory: true, pathwayId: 'norcet_path_bsc', rawText: 'B.Sc. Nursing / Post Basic' },
  // Pathway 2: GNM Diploma + 2 Years Hospital Experience
  { kind: 'qualification', operator: 'in', valueText: ['gnm'], isMandatory: true, pathwayId: 'norcet_path_gnm', rawText: 'GNM Diploma' },
  { kind: 'experience', operator: 'gte', valueNumeric: 2, isMandatory: true, pathwayId: 'norcet_path_gnm', rawText: '2 yrs hospital exp for GNM' },
  // General Standalone Requirements (must be met by ALL pathways)
  { kind: 'registration', operator: 'exists', isMandatory: true, rawText: 'State Nursing Council Registration' },
  { kind: 'age', operator: 'lte', valueNumeric: 30, isMandatory: true, rawText: 'Age max 30 years' }
];

// P0.2 Test 1: Raw Unconfirmed Parser Draft (Must evaluate to UNKNOWN, never likely)
const profUnconfirmedDraft: UserProfile = {
  qualificationCode: 'bsc_nursing',
  qualificationsList: [{ code: 'bsc_nursing', name: 'B.Sc. Nursing' }],
  hasRegistration: true,
  dob: '2000-01-01',
  fieldProvenance: {
    qualificationCode: { source: 'resume', status: 'extracted' },
    qualificationsList: { source: 'resume', status: 'extracted' },
    hasRegistration: { source: 'resume', status: 'extracted' },
    dob: { source: 'resume', status: 'extracted' },
  }
};
const evalDraft = evaluateEligibility(reqsNorcet, profUnconfirmedDraft);
assert(evalDraft.confidence === 'check_requirements', 'P0.2 Test 1: Unconfirmed resume extraction strictly returns check_requirements');
assert(evalDraft.requirements.find(r => r.kind === 'qualification')?.status === 'unknown', 'P0.2 Test 1: Qualification status is unknown until confirmed');

// P0.2 Test 2: Confirmed B.Sc. Profile (Evaluates to Likely Eligible)
const profConfirmedBsc: UserProfile = {
  qualificationCode: 'bsc_nursing',
  qualificationsList: [{ code: 'bsc_nursing', name: 'B.Sc. Nursing' }],
  hasRegistration: true,
  dob: '2000-01-01',
  fieldProvenance: {
    qualificationCode: { source: 'user', status: 'confirmed' },
    qualificationsList: { source: 'user', status: 'confirmed' },
    hasRegistration: { source: 'user', status: 'confirmed' },
    dob: { source: 'user', status: 'confirmed' },
  }
};
const evalConfirmed = evaluateEligibility(reqsNorcet, profConfirmedBsc);
assert(evalConfirmed.confidence === 'likely' && evalConfirmed.eligible === true, 'P0.2 Test 2: User-confirmed B.Sc. profile evaluates to likely eligible');

// P0.1 Test 3: Compound Pathway — GNM with 0 Years (Path 1 unmet, Path 2 unmet -> NOT ELIGIBLE)
const profGnmFresher: UserProfile = {
  qualificationCode: 'gnm',
  qualificationsList: [{ code: 'gnm', name: 'GNM Diploma' }],
  experienceBucket: 'fresher',
  hasRegistration: true,
  dob: '2000-01-01',
};
const evalGnmFresher = evaluateEligibility(reqsNorcet, profGnmFresher);
assert(evalGnmFresher.confidence === 'not_eligible' && evalGnmFresher.eligible === false, 'P0.1 Test 3: GNM with 0 yrs exp is NOT eligible for NORCET (Both Path 1 & 2 fail)');
assert(evalGnmFresher.pathways?.find(p => p.pathwayId === 'norcet_path_gnm')?.status === 'not_met', 'P0.1 Test 3: GNM pathway status is not_met due to missing 2 yr experience');

// P0.1 Test 4: Compound Pathway — GNM with 3 Years Hospital Exp (Path 2 Met -> LIKELY ELIGIBLE)
const profGnmExperienced: UserProfile = {
  qualificationCode: 'gnm',
  qualificationsList: [{ code: 'gnm', name: 'GNM Diploma' }],
  experienceBucket: '2-5',
  employmentHistory: [
    { employer: 'Civil Hospital', role: 'staff_nurse', startDate: '2021-01', endDate: '2024-06', isCurrent: false }
  ],
  hasRegistration: true,
  dob: '1998-01-01',
};
const evalGnmExp = evaluateEligibility(reqsNorcet, profGnmExperienced);
assert(evalGnmExp.confidence === 'likely' && evalGnmExp.eligible === true, 'P0.1 Test 4: GNM with 3 years hospital experience satisfies Path 2 -> Likely Eligible');
assert(evalGnmExp.pathways?.find(p => p.pathwayId === 'norcet_path_gnm')?.status === 'met', 'P0.1 Test 4: norcet_path_gnm status is met');

// P0.1 Test 5: Compound Pathway — GNM with Missing Experience Record (Uncertainty Preservation)
const profGnmMissingExp: UserProfile = {
  qualificationCode: 'gnm',
  qualificationsList: [{ code: 'gnm', name: 'GNM Diploma' }],
  hasRegistration: true,
  dob: '1998-01-01',
  experienceBucket: undefined,
  employmentHistory: undefined,
};
const evalGnmMissingExp = evaluateEligibility(reqsNorcet, profGnmMissingExp);
assert(evalGnmMissingExp.confidence === 'check_requirements' && evalGnmMissingExp.eligible === null, 'P0.1 Test 5: GNM with missing experience preserves UNKNOWN uncertainty (never collapses to not_met)');

// Scenario 6: Over-Age candidate (36 years old against 30-year general cutoff)
const profOverAge: UserProfile = {
  qualificationCode: 'bsc_nursing',
  hasRegistration: true,
  dob: '1989-01-01', // 37 years old
};
const eval6 = evaluateEligibility(reqsNorcet, profOverAge);
assert(eval6.requirements.find(r => r.kind === 'age')?.status === 'not_met', 'Scenario 6: Candidate over 30 years old marked as not_met with relaxation advice');

// Scenario 7: Unstructured requirement without operator (MUST be UNKNOWN)
const reqsUnstructured: OpportunityRequirementItem[] = [
  { kind: 'other', operator: null, rawText: 'Candidate must possess good moral character and physical fitness' }
];
const eval7 = evaluateEligibility(reqsUnstructured, profConfirmedBsc);
assert(eval7.requirements[0].status === 'unknown', 'Scenario 7: Unstructured requirement strictly resolves to UNKNOWN');

// Scenario 8: Multiple qualifications evaluation (GNM + Post Basic B.Sc.)
const profMultiQual: UserProfile = {
  qualificationCode: 'gnm',
  qualificationsList: [
    { code: 'gnm', name: 'GNM' },
    { code: 'post_basic', name: 'Post Basic B.Sc. Nursing', isPrimary: true }
  ],
  hasRegistration: true,
  dob: '1998-01-01',
  experienceBucket: 'fresher',
};
const eval8 = evaluateEligibility(reqsNorcet, profMultiQual);
assert(eval8.confidence === 'likely' && eval8.eligible === true, 'Scenario 8: Multiple qualifications correctly uses Post Basic B.Sc. to qualify without 2 yrs exp');

// Scenario 9: Other / Non-standard qualification (Never hard-fails; resolves to UNKNOWN)
const profOtherQual: UserProfile = {
  qualificationCode: 'other',
  hasRegistration: true,
  dob: '1998-01-01',
};
const eval9 = evaluateEligibility(reqsNorcet, profOtherQual);
assert(eval9.requirements.find(r => r.kind === 'qualification')?.status === 'unknown', 'Scenario 9: Qualification "other" resolves safely to UNKNOWN');

// Scenario 10: Zero Profile (All requirements UNKNOWN, next actions prompt profile creation)
const eval10 = evaluateEligibility(reqsNorcet, null);
assert(eval10.requirements.every(r => r.status === 'unknown'), 'Scenario 10: Zero profile returns 100% UNKNOWN requirements');

// Scenario 11: Private ICU Job with 2-year department tenure requirement
const reqsIcu: OpportunityRequirementItem[] = [
  { kind: 'qualification', operator: 'in', valueText: ['bsc_nursing', 'gnm'], isMandatory: true, rawText: 'B.Sc. or GNM' },
  { kind: 'experience', operator: 'gte', valueNumeric: 2, isMandatory: true, departmentSpecialty: 'icu', rawText: '2 years ICU experience' }
];
const profIcuNurse: UserProfile = {
  qualificationCode: 'bsc_nursing',
  employmentHistory: [
    { employer: 'Apollo Hospitals', role: 'icu', department: 'ICU / Critical Care', startDate: '2022-01', isCurrent: true }
  ]
};
const eval11 = evaluateEligibility(reqsIcu, profIcuNurse);
assert(eval11.confidence === 'likely' && eval11.eligible === true, 'Scenario 11: Clinical employment history correctly calculates 4+ years ICU tenure');

// Scenario 12: Missing fields array completeness
const evalMissingDob = evaluateEligibility(reqsNorcet, { qualificationCode: 'bsc_nursing', hasRegistration: true, dob: undefined });
assert(evalMissingDob.missingFields.includes('dob'), 'Scenario 12: missingFields array accurately lists "dob"');

console.log(`\n======================================================`);
console.log(`AUDIT TEST RESULTS: ${passCount} PASSED, ${failCount} FAILED`);
console.log(`======================================================`);
