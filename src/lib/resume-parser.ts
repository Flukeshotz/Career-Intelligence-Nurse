import { UserProfile, QualificationItem, EmploymentItem, RegistrationDetails, LanguageSkill, FieldProvenance } from './user-store';

export interface ParsedResumeResult {
  success: boolean;
  rawTextLength: number;
  extractedProfile: Partial<UserProfile>;
  confidenceMap: Record<string, 'high' | 'medium' | 'low'>;
  unresolvedConflicts: string[];
  extractionSummary: {
    qualificationsFound: string[];
    experienceFound: string[];
    registrationFound?: string;
    languagesFound: string[];
    skillsFound: string[];
  };
}

/**
 * High-performance, deterministic parser for Indian nursing resumes.
 * Extracts evidence ONLY with 'extracted' status. NEVER makes authoritative eligibility inferences.
 */
export function parseNursingResumeText(text: string, fileName?: string): ParsedResumeResult {
  const clean = text.replace(/\r\n/g, '\n');
  const lines = clean.split('\n').map((l) => l.trim()).filter(Boolean);
  
  const provenance: Record<string, FieldProvenance> = {};
  const confidenceMap: Record<string, 'high' | 'medium' | 'low'> = {};
  const unresolvedConflicts: string[] = [];

  // 1. Extract Candidate Name (Evidence only)
  let fullName: string | undefined;
  const nameCandidate = lines.find((l) => l.length > 2 && l.length < 40 && !l.includes('@') && !/resume|curriculum|cv|profile|contact|nursing/i.test(l));
  if (nameCandidate) {
    fullName = nameCandidate.replace(/[^a-zA-Z\s.]/g, '').trim();
    provenance['fullName'] = { source: 'resume', status: 'extracted' };
    confidenceMap['fullName'] = 'medium';
  }

  // 2. Extract Date of Birth (Evidence only)
  let dob: string | undefined;
  const dobMatch = clean.match(/(?:dob|date\s*of\s*birth|birth\s*date)[\s:]*([0-9]{1,2}[-/.][0-9]{1,2}[-/.][0-9]{2,4}|[0-9]{4}[-/.][0-9]{1,2}[-/.][0-9]{1,2})/i);
  if (dobMatch) {
    const rawDate = dobMatch[1];
    dob = normalizeDateString(rawDate);
    if (dob) {
      provenance['dob'] = { source: 'resume', status: 'extracted' };
      confidenceMap['dob'] = 'high';
    }
  }

  // 3. Extract Gender (Evidence only - never inferred)
  let gender: 'female' | 'male' | 'other' | undefined;
  if (/\b(?:gender|sex)[\s:]*female\b|\bfemale\s*nurse\b/i.test(clean)) {
    gender = 'female';
    provenance['gender'] = { source: 'resume', status: 'extracted' };
  } else if (/\b(?:gender|sex)[\s:]*male\b|\bmale\s*nurse\b/i.test(clean)) {
    gender = 'male';
    provenance['gender'] = { source: 'resume', status: 'extracted' };
  }

  // 4. Extract Nursing Qualifications (Evidence only)
  const qualificationsList: QualificationItem[] = [];
  const qualStringsFound: string[] = [];

  // M.Sc. Nursing
  if (/m\.?sc\.?\s*(?:in\s*)?nursing|master\s*of\s*science\s*(?:in\s*)?nursing/i.test(clean)) {
    qualificationsList.push({
      code: 'msc',
      name: 'M.Sc. Nursing',
      institution: extractInstitutionNear(clean, 'msc'),
      yearOfPassing: extractPassingYearNear(clean, 'msc'),
      isPrimary: true,
    });
    qualStringsFound.push('M.Sc. Nursing');
  }

  // Post Basic B.Sc. Nursing
  if (/post\s*basic\s*b\.?sc\.?\s*nursing|p\.?b\.?\s*b\.?sc/i.test(clean)) {
    qualificationsList.push({
      code: 'post_basic',
      name: 'Post Basic B.Sc. Nursing',
      institution: extractInstitutionNear(clean, 'post basic'),
      yearOfPassing: extractPassingYearNear(clean, 'post basic'),
      isPrimary: qualificationsList.length === 0,
    });
    qualStringsFound.push('Post Basic B.Sc. Nursing');
  }

  // B.Sc. Nursing
  if (/\bb\.?sc\.?\s*(?:\(hons\.?\)\s*)?nursing|bachelor\s*of\s*science\s*(?:in\s*)?nursing/i.test(clean)) {
    qualificationsList.push({
      code: 'bsc_nursing',
      name: 'B.Sc. Nursing',
      institution: extractInstitutionNear(clean, 'bsc'),
      yearOfPassing: extractPassingYearNear(clean, 'bsc'),
      isPrimary: qualificationsList.length === 0,
    });
    qualStringsFound.push('B.Sc. Nursing');
  }

  // GNM
  if (/\bgeneral\s*nursing\s*(?:and|&)\s*midwifery\b|\bgnm\s*diploma\b|\bgnm\b/i.test(clean)) {
    qualificationsList.push({
      code: 'gnm',
      name: 'Diploma in General Nursing & Midwifery (GNM)',
      institution: extractInstitutionNear(clean, 'gnm'),
      yearOfPassing: extractPassingYearNear(clean, 'gnm'),
      isPrimary: qualificationsList.length === 0,
    });
    qualStringsFound.push('GNM');
  }

  if (qualificationsList.length > 1) {
    unresolvedConflicts.push(`Resume mentions multiple qualifications (${qualStringsFound.join(', ')}). Please confirm your primary qualification.`);
  }

  if (qualificationsList.length > 0) {
    provenance['qualificationsList'] = { source: 'resume', status: 'extracted' };
    provenance['qualificationCode'] = { source: 'resume', status: 'extracted' };
    confidenceMap['qualificationsList'] = 'high';
  }

  // 5. Extract Professional Registration Details (Evidence only)
  let registrationDetails: RegistrationDetails | undefined;
  let hasRegistration: boolean | undefined;
  const regMatch = clean.match(/(?:registered\s*nurse|nursing\s*council|registration\s*(?:no|number)?)[\s:]*([a-zA-Z0-9\/-]{4,25})/i);
  const councilMatch = clean.match(/\b(INC|KNC|MNC|TNC|KNMC|UPNC|RNC|WBNC|GNC|MPNC|DNC|HNRC)\b/i);

  if (regMatch || councilMatch || /registered\s*(?:nurse|as\s*rn\/rm)/i.test(clean)) {
    hasRegistration = true;
    registrationDetails = {
      isRegistered: true,
      councilName: councilMatch ? councilMatch[1].toUpperCase() : 'State Nursing Council',
      regNumber: regMatch ? regMatch[1] : undefined,
    };
    provenance['registrationDetails'] = { source: 'resume', status: 'extracted' };
    provenance['hasRegistration'] = { source: 'resume', status: 'extracted' };
    confidenceMap['registrationDetails'] = regMatch ? 'high' : 'medium';
  }

  // 6. Extract Clinical Employment History (Evidence only - NO GOVERNMENT INFERENCE)
  const employmentHistory: EmploymentItem[] = [];
  const expStringsFound: string[] = [];

  // Robust healthcare organization entity regex (Hospital, Healthcare, Medical Center, Super Speciality, Medcity, Clinic, Institute)
  const hospitalRegex = /\b([A-Z][a-zA-Z\s&.'-]+(?:Hospital|Healthcare|Medical\s*Center|Super\s*Speciality|Medcity|Health\s*City|Clinic|Institute|Infirmary|Care\s*Hospitals?))\b/g;
  const matchedHospitals = Array.from(new Set(clean.match(hospitalRegex) || []));

  for (const hosp of matchedHospitals.slice(0, 5)) {
    const hospIdx = clean.indexOf(hosp);
    const context = clean.substring(Math.max(0, hospIdx - 100), Math.min(clean.length, hospIdx + 220));

    let role = 'staff_nurse';
    let dept = 'General Ward';

    if (/icu|intensive\s*care|critical\s*care|micu|sicu/i.test(context)) {
      role = 'icu';
      dept = 'ICU / Critical Care';
    } else if (/ot|operation\s*theatre|surgical\s*theatre/i.test(context)) {
      role = 'ot';
      dept = 'Operation Theatre';
    } else if (/emergency|trauma|casualty|er\b/i.test(context)) {
      role = 'emergency';
      dept = 'Emergency & Trauma';
    } else if (/cardiac|cath\s*lab|ccu/i.test(context)) {
      role = 'cardiac_icu';
      dept = 'Cardiac Care / Cath Lab';
    } else if (/pediatric|picu|nicu/i.test(context)) {
      role = 'pediatric';
      dept = 'Pediatrics / NICU';
    } else if (/oncology|chemo/i.test(context)) {
      role = 'oncology';
      dept = 'Oncology Ward';
    }

    const isCurrent = /present|till\s*date|currently\s*working|ongoing|to\s*date/i.test(context);
    const dateRangeMatch = context.match(/((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*[0-9]{4}|[0-9]{4})\s*(?:-|–|to)\s*((?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\.?\s*[0-9]{4}|[0-9]{4}|present|current)/i);

    let startDate = '2023-01';
    let endDate: string | undefined = undefined;

    if (dateRangeMatch) {
      startDate = normalizeYearMonth(dateRangeMatch[1]);
      if (!isCurrent && dateRangeMatch[2] && !/present|current/i.test(dateRangeMatch[2])) {
        endDate = normalizeYearMonth(dateRangeMatch[2]);
      }
    }

    // P0.3: STRICTLY DO NOT INFER GOVERNMENT EMPLOYEE STATUS
    // Working at an AIIMS/Civil Hospital does not establish regular government employee reservation status
    employmentHistory.push({
      employer: hosp.trim(),
      role,
      department: dept,
      startDate,
      endDate: isCurrent ? undefined : endDate,
      isCurrent,
      isGovernment: undefined, // Must be confirmed explicitly by user
    });

    expStringsFound.push(`${hosp} — ${dept} (${isCurrent ? 'Present' : 'Past'})`);
  }

  // Fallback clinical text detection if named hospital not matched
  if (employmentHistory.length === 0 && /(?:staff\s*nurse|clinical\s*experience|icu\s*nurse)[\s\S]{1,100}(?:years?|months?)/i.test(clean)) {
    employmentHistory.push({
      employer: 'Clinical Hospital Experience',
      role: 'staff_nurse',
      department: 'Clinical Wards',
      startDate: '2023-01',
      isCurrent: true,
      isGovernment: undefined,
    });
    expStringsFound.push('Hospital Clinical Experience');
  }

  if (employmentHistory.length > 0) {
    provenance['employmentHistory'] = { source: 'resume', status: 'extracted' };
    provenance['experienceBucket'] = { source: 'resume', status: 'extracted' };
    confidenceMap['employmentHistory'] = 'high';
  }

  // 7. Extract Languages Matrix (Evidence only)
  const languagesList: LanguageSkill[] = [];
  const knownLangs = ['English', 'Hindi', 'Kannada', 'Tamil', 'Malayalam', 'Telugu', 'Marathi', 'Bengali', 'Gujarati', 'German', 'Arabic'];
  const langStringsFound: string[] = [];

  for (const lang of knownLangs) {
    if (new RegExp(`\\b${lang}\\b`, 'i').test(clean)) {
      languagesList.push({
        language: lang,
        speak: true,
        read: true,
        write: true,
      });
      langStringsFound.push(lang);
    }
  }

  // 8. Extract Location (Evidence only - NEVER infer Domicile)
  let state: string | undefined;
  let city: string | undefined;
  const stateMatch = clean.match(/\b(Karnataka|Maharashtra|Tamil Nadu|Kerala|Delhi|Uttar Pradesh|Rajasthan|West Bengal|Bihar|Telangana|Gujarat|Punjab|Haryana|Odisha|Madhya Pradesh)\b/i);
  if (stateMatch) {
    state = stateMatch[1];
    provenance['state'] = { source: 'resume', status: 'extracted' };
  }

  const cityMatch = clean.match(/\b(Bangalore|Bengaluru|Mumbai|Pune|Chennai|Delhi|New Delhi|Hyderabad|Kolkata|Jaipur|Lucknow|Ahmedabad|Kochi|Trivandrum|Chandigarh|Gurugram|Noida)\b/i);
  if (cityMatch) {
    city = cityMatch[1];
    provenance['city'] = { source: 'resume', status: 'extracted' };
  }

  // 9. Extract Clinical Skills (Evidence only)
  const skillsFound: string[] = [];
  const clinicalKeywords = ['BLS', 'ACLS', 'IV Cannulation', 'Ventilator Management', 'Infection Control', 'Medication Administration', 'Catheterization', 'ECG Interpretation', 'Wound Care', 'Triage', 'Chemotherapy'];
  for (const skill of clinicalKeywords) {
    if (new RegExp(`\\b${skill}\\b`, 'i').test(clean)) {
      skillsFound.push(skill);
    }
  }

  return {
    success: qualificationsList.length > 0 || employmentHistory.length > 0,
    rawTextLength: clean.length,
    extractedProfile: {
      fullName,
      dob,
      gender,
      state,
      city,
      hasRegistration,
      registrationDetails,
      qualificationsList,
      employmentHistory,
      languagesList: languagesList.length > 0 ? languagesList : undefined,
      fieldProvenance: provenance,
      resumeFileName: fileName,
      resumeParsedAt: new Date().toISOString(),
    },
    confidenceMap,
    unresolvedConflicts,
    extractionSummary: {
      qualificationsFound: qualStringsFound,
      experienceFound: expStringsFound,
      registrationFound: registrationDetails?.councilName ? `${registrationDetails.councilName} ${registrationDetails.regNumber || 'Registered'}` : undefined,
      languagesFound: langStringsFound,
      skillsFound,
    },
  };
}

function normalizeDateString(raw: string): string | undefined {
  const parts = raw.split(/[-/.]/);
  if (parts.length === 3) {
    if (parts[0].length === 4) {
      return `${parts[0]}-${parts[1].padStart(2, '0')}-${parts[2].padStart(2, '0')}`;
    } else if (parts[2].length === 4) {
      return `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
    }
  }
  return undefined;
}

function normalizeYearMonth(raw: string): string {
  const monthMap: Record<string, string> = {
    jan: '01', feb: '02', mar: '03', apr: '04', may: '05', jun: '06',
    jul: '07', aug: '08', sep: '09', oct: '10', nov: '11', dec: '12',
  };

  const clean = raw.toLowerCase().trim();
  const yearMatch = clean.match(/[0-9]{4}/);
  const year = yearMatch ? yearMatch[0] : '2023';

  for (const [m, num] of Object.entries(monthMap)) {
    if (clean.includes(m)) {
      return `${year}-${num}`;
    }
  }
  return `${year}-01`;
}

function extractInstitutionNear(text: string, keyword: string): string | undefined {
  const idx = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (idx === -1) return undefined;
  const context = text.substring(idx, Math.min(text.length, idx + 120));
  const instMatch = context.match(/(?:from|at|institute|college|university|school\s*of\s*nursing)[\s:]*([A-Za-z\s&.'-]+(?:College|Institute|University|School|Academy|Hospital))/i);
  return instMatch ? instMatch[1].trim() : undefined;
}

function extractPassingYearNear(text: string, keyword: string): number | undefined {
  const idx = text.toLowerCase().indexOf(keyword.toLowerCase());
  if (idx === -1) return undefined;
  const context = text.substring(idx, Math.min(text.length, idx + 100));
  const yearMatch = context.match(/\b(20[0-2][0-9]|199[0-9])\b/);
  return yearMatch ? parseInt(yearMatch[1], 10) : undefined;
}
