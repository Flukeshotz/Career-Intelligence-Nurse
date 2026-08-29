import { UserProfile, calculateAge, calculateTotalExperienceMonths, getBucketFromMonths } from './user-store';

export interface OpportunityRequirementItem {
  id?: string;
  kind: 'qualification' | 'experience' | 'age' | 'registration' | 'category' | 'domicile' | 'citizenship' | 'language' | 'document' | 'other' | string;
  operator?: 'eq' | 'gte' | 'lte' | 'in' | 'exists' | string | null;
  valueText?: string | string[];
  valueNumeric?: number;
  unit?: string;
  departmentSpecialty?: string;
  isMandatory?: boolean;
  orGroup?: string | null;
  pathwayId?: string | null;
  rawText?: string;
  simpleText?: string;
  remedyText?: string;
}

export type RequirementEvaluationStatus = 'met' | 'not_met' | 'unknown';

export interface EvaluatedRequirement {
  kind: string;
  status: RequirementEvaluationStatus;
  detail: string;
  remedy?: string;
  rawText?: string;
  missingFieldKey?: 'qualification' | 'experience' | 'age' | 'dob' | 'registration' | 'category' | 'domicile';
  pathwayId?: string | null;
}

export interface PathwayEvaluation {
  pathwayId: string;
  label?: string;
  status: RequirementEvaluationStatus;
  requirements: EvaluatedRequirement[];
}

export interface EligibilityResult {
  confidence: 'likely' | 'not_eligible' | 'check_requirements';
  label: string;
  gap_summary: string;
  next_actions: string[];
  eligible: boolean | null;
  requirements: EvaluatedRequirement[];
  pathways?: PathwayEvaluation[];
  missingFields: string[];
}

/**
 * Checks if a profile attribute is explicitly user-confirmed.
 * P0.2: Raw unconfirmed resume extractions or inferences NEVER drive authoritative eligibility.
 */
function isFieldConfirmed(profile: UserProfile | null | undefined, fieldKey: string): boolean {
  if (!profile) return false;
  const prov = profile.fieldProvenance?.[fieldKey];
  if (!prov) {
    // If no provenance object exists, check if profile has direct non-empty values
    return true;
  }
  // Only confirmed or user_edited values are authoritative
  return prov.status === 'confirmed' || prov.status === 'user_edited';
}

/**
 * Pure, deterministic evaluation of structured opportunity requirements against a user's Career Passport.
 * Supports P0.1 compound atomic pathways and P0.2 confirmed-only profile values.
 */
export function evaluateEligibility(
  requirements: OpportunityRequirementItem[],
  profile: UserProfile | null
): EligibilityResult {
  // If no requirements specified, treat as open
  if (!requirements || requirements.length === 0) {
    return {
      confidence: 'likely',
      label: 'Likely Eligible',
      gap_summary: 'No specific restrictive eligibility criteria recorded for this vacancy.',
      next_actions: ['Review official notification document and proceed to application portal.'],
      eligible: true,
      requirements: [],
      missingFields: [],
    };
  }

  // If no profile, all requirements are unknown
  if (!profile) {
    const unkReqs: EvaluatedRequirement[] = requirements.map((r) => ({
      kind: r.kind,
      status: 'unknown',
      detail: r.simpleText || r.rawText || `${r.kind} requirement`,
      remedy: r.remedyText,
      rawText: r.rawText,
      missingFieldKey: getMissingFieldKeyForKind(r.kind),
      pathwayId: r.pathwayId || r.orGroup || null,
    }));

    return {
      confidence: 'check_requirements',
      label: 'Create Profile to Check Eligibility',
      gap_summary: 'Add your qualifications and clinical experience to verify your eligibility.',
      next_actions: ['Complete your Career Passport or upload your resume to get an instant assessment.'],
      eligible: null,
      requirements: unkReqs,
      missingFields: Array.from(new Set(unkReqs.map((r) => r.missingFieldKey).filter(Boolean) as string[])),
    };
  }

  // 1. Evaluate every single atomic requirement individually
  const individualEvaluations: EvaluatedRequirement[] = requirements.map((req) =>
    evaluateSingleRequirement(req, profile)
  );

  // 2. P0.1: Partition requirements into Standalone Requirements and Atomic Compound Pathways
  const standaloneEvals: EvaluatedRequirement[] = [];
  const pathwayMap: Record<string, EvaluatedRequirement[]> = {};

  individualEvaluations.forEach((item) => {
    const pathKey = item.pathwayId;
    if (pathKey) {
      if (!pathwayMap[pathKey]) pathwayMap[pathKey] = [];
      pathwayMap[pathKey].push(item);
    } else {
      standaloneEvals.push(item);
    }
  });

  // Evaluate each pathway: ALL requirements in a pathway must be met for the pathway to be met
  const pathwayEvaluations: PathwayEvaluation[] = Object.entries(pathwayMap).map(([pathKey, reqs]) => {
    const hasNotMet = reqs.some((r) => r.status === 'not_met');
    const hasUnknown = reqs.some((r) => r.status === 'unknown');
    const allMet = reqs.every((r) => r.status === 'met');

    let status: RequirementEvaluationStatus = 'unknown';
    if (allMet) {
      status = 'met';
    } else if (hasNotMet) {
      status = 'not_met';
    } else if (hasUnknown) {
      status = 'unknown';
    }

    return {
      pathwayId: pathKey,
      status,
      requirements: reqs,
    };
  });

  // 3. Combine Standalone and Compound Pathway Evaluations
  const hasPathways = pathwayEvaluations.length > 0;
  let pathwayCompoundStatus: RequirementEvaluationStatus = 'met';

  if (hasPathways) {
    const anyPathMet = pathwayEvaluations.some((p) => p.status === 'met');
    const allPathsNotMet = pathwayEvaluations.every((p) => p.status === 'not_met');

    if (anyPathMet) {
      pathwayCompoundStatus = 'met';
    } else if (allPathsNotMet) {
      pathwayCompoundStatus = 'not_met';
    } else {
      // Uncertainty preservation: If no path is met and at least one is unknown, status is UNKNOWN
      pathwayCompoundStatus = 'unknown';
    }
  }

  const standaloneHasNotMet = standaloneEvals.some((r) => r.status === 'not_met');
  const standaloneHasUnknown = standaloneEvals.some((r) => r.status === 'unknown');

  // Overall Confidence Synthesis
  let confidence: 'likely' | 'not_eligible' | 'check_requirements' = 'likely';
  let eligible: boolean | null = true;

  if (standaloneHasNotMet || pathwayCompoundStatus === 'not_met') {
    confidence = 'not_eligible';
    eligible = false;
  } else if (standaloneHasUnknown || pathwayCompoundStatus === 'unknown') {
    confidence = 'check_requirements';
    eligible = null;
  } else {
    confidence = 'likely';
    eligible = true;
  }

  // Collect missing fields for progressive disclosure
  const missingFieldsSet = new Set<string>();
  individualEvaluations.forEach((r) => {
    if (r.status === 'unknown' && r.missingFieldKey) {
      missingFieldsSet.add(r.missingFieldKey);
    }
  });

  // Generate clear Gap and Next Actions
  const unmetStandalone = standaloneEvals.filter((r) => r.status === 'not_met');
  const unmetPathways = pathwayEvaluations.filter((p) => p.status === 'not_met');
  const unknownList = individualEvaluations.filter((r) => r.status === 'unknown');

  let gap_summary = 'You appear to meet the key requirements recorded for this opportunity.';
  const next_actions: string[] = [];

  if (confidence === 'not_eligible') {
    if (unmetStandalone.length > 0) {
      gap_summary = `Requirement gap: ${unmetStandalone.map((u) => u.detail).join('; ')}.`;
      unmetStandalone.forEach((u) => {
        if (u.remedy) next_actions.push(`Remedy: ${u.remedy}`);
      });
    } else if (unmetPathways.length > 0) {
      gap_summary = 'You do not currently satisfy any of the accepted qualification/experience pathways.';
      next_actions.push('Review available qualification pathways or gain the necessary clinical experience.');
    }
  } else if (confidence === 'check_requirements') {
    gap_summary = 'Some eligibility criteria could not be confirmed against your profile.';
    if (missingFieldsSet.has('dob')) {
      next_actions.push('Add your Date of Birth to check age cutoff compliance.');
    }
    if (missingFieldsSet.has('registration')) {
      next_actions.push('Confirm your State Nursing Council registration status.');
    }
    if (missingFieldsSet.has('qualification')) {
      next_actions.push('Confirm your primary nursing degree/diploma.');
    }
    if (missingFieldsSet.has('experience')) {
      next_actions.push('Confirm your clinical hospital experience dates.');
    }
  } else {
    next_actions.push('Review the official notification to verify category/quota relaxations and apply.');
  }

  return {
    confidence,
    label: confidence === 'likely' ? 'Likely Eligible' : confidence === 'not_eligible' ? 'Not Eligible Yet' : 'Check Requirements',
    gap_summary,
    next_actions,
    eligible,
    requirements: individualEvaluations,
    pathways: hasPathways ? pathwayEvaluations : undefined,
    missingFields: Array.from(missingFieldsSet),
  };
}

function evaluateSingleRequirement(
  req: OpportunityRequirementItem,
  profile: UserProfile
): EvaluatedRequirement {
  const { kind, operator, valueText, valueNumeric, departmentSpecialty, rawText, simpleText, remedyText, pathwayId, orGroup } = req;
  const pathKey = pathwayId || orGroup || null;

  // Unstructured requirement without operator
  if (!operator) {
    return {
      kind,
      status: 'unknown',
      detail: simpleText || rawText || 'General requirement — check official document.',
      remedy: remedyText,
      rawText,
      pathwayId: pathKey,
      missingFieldKey: getMissingFieldKeyForKind(kind),
    };
  }

  // 1. Qualification Evaluation (Supports Multiple Qualifications + Confirmed Check)
  if (kind === 'qualification') {
    if (!isFieldConfirmed(profile, 'qualificationCode') && !isFieldConfirmed(profile, 'qualificationsList')) {
      return {
        kind,
        status: 'unknown',
        detail: 'Unconfirmed qualification draft. Please confirm your qualification.',
        remedy: remedyText || 'Confirm your nursing qualification',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'qualification',
      };
    }

    const userQualCodes: string[] = [];
    if (profile.qualificationCode) userQualCodes.push(profile.qualificationCode);
    if (profile.qualificationsList) {
      profile.qualificationsList.forEach((q) => {
        if (q.code && !userQualCodes.includes(q.code)) userQualCodes.push(q.code);
      });
    }

    if (userQualCodes.length === 0) {
      return {
        kind,
        status: 'unknown',
        detail: simpleText || rawText || 'Add your nursing qualification',
        remedy: remedyText || 'Add your nursing qualification',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'qualification',
      };
    }

    if (userQualCodes.length === 1 && userQualCodes[0] === 'other') {
      return {
        kind,
        status: 'unknown',
        detail: 'Qualification marked as Other/In-progress. Check official notification for equivalence.',
        remedy: remedyText || 'Check if your qualification or diploma is accepted in the official notification.',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'qualification',
      };
    }

    if (operator === 'in' || operator === 'eq') {
      const accepted = Array.isArray(valueText)
        ? valueText
        : typeof valueText === 'string'
        ? (valueText as string).split('|')
        : [];

      const matchingQual = userQualCodes.find((c) => accepted.includes(c));

      if (matchingQual) {
        return {
          kind,
          status: 'met',
          detail: simpleText || `${formatQualName(matchingQual)} meets the qualification requirement`,
          rawText,
          pathwayId: pathKey,
        };
      } else {
        // If user has other valid qualifications that don't match this specific pathway,
        // it is not_met for this specific pathway.
        return {
          kind,
          status: 'not_met',
          detail: simpleText || `Requires ${accepted.map(formatQualName).join(' or ')}`,
          remedy: remedyText || `Qualify with ${accepted.map(formatQualName).join(' or ')}`,
          rawText,
          pathwayId: pathKey,
        };
      }
    }
  }

  // 2. Experience Evaluation (Calculated Clinical Months + Specialty check + Confirmed Check)
  if (kind === 'experience') {
    if (!isFieldConfirmed(profile, 'experienceBucket') && !isFieldConfirmed(profile, 'employmentHistory')) {
      return {
        kind,
        status: 'unknown',
        detail: 'Unconfirmed experience draft. Please confirm your clinical experience.',
        remedy: remedyText || 'Confirm your clinical employment history',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'experience',
      };
    }

    let userMonths = 0;
    if (profile.employmentHistory && profile.employmentHistory.length > 0) {
      if (departmentSpecialty) {
        userMonths = profile.employmentHistory
          .filter((e) => e.role === departmentSpecialty || (e.department && new RegExp(departmentSpecialty, 'i').test(e.department)))
          .reduce((sum, e) => {
            const start = new Date(e.startDate || '2023-01').getTime();
            const end = e.endDate ? new Date(e.endDate).getTime() : Date.now();
            return sum + Math.max(0, Math.round((end - start) / (1000 * 60 * 60 * 24 * 30.4375)));
          }, 0);
      } else {
        userMonths = calculateTotalExperienceMonths(profile.employmentHistory);
      }
    } else if (profile.experienceBucket) {
      const bucketMinMap: Record<string, number> = {
        fresher: 0,
        '0-2': 1,
        '2-5': 24,
        '5+': 60,
      };
      userMonths = bucketMinMap[profile.experienceBucket] ?? 0;
    } else {
      return {
        kind,
        status: 'unknown',
        detail: simpleText || rawText || 'Experience history missing',
        remedy: remedyText || 'Add clinical experience records',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'experience',
      };
    }

    const userYears = userMonths / 12;
    const requiredYears = valueNumeric ?? 0;

    if (operator === 'gte') {
      if (userYears >= requiredYears) {
        return {
          kind,
          status: 'met',
          detail: simpleText || `${userYears.toFixed(1)} years clinical experience meets the ${requiredYears}-year requirement`,
          rawText,
          pathwayId: pathKey,
        };
      } else {
        const gapYears = (requiredYears - userYears).toFixed(1);
        return {
          kind,
          status: 'not_met',
          detail: simpleText || `Requires ${requiredYears} years; profile has ${userYears.toFixed(1)} years (${gapYears} years remaining)`,
          remedy: remedyText || `Gain ${gapYears} more years of clinical experience in an accredited hospital.`,
          rawText,
          pathwayId: pathKey,
        };
      }
    }
  }

  // 3. Age Evaluation (Calculated from DOB + Relaxation Advice + Confirmed Check)
  if (kind === 'age') {
    if (!profile.dob || !isFieldConfirmed(profile, 'dob')) {
      return {
        kind,
        status: 'unknown',
        detail: simpleText || `Maximum age limit: ${valueNumeric} years. Date of birth required to evaluate.`,
        remedy: remedyText || 'Add your Date of Birth to check age cutoff compliance.',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'dob',
      };
    }

    const age = calculateAge(profile.dob);
    const maxAge = valueNumeric ?? 30;

    if (operator === 'lte') {
      if (age !== null && age <= maxAge) {
        return {
          kind,
          status: 'met',
          detail: simpleText || `Age ${age} is within the ${maxAge} years cutoff`,
          rawText,
          pathwayId: pathKey,
        };
      } else {
        return {
          kind,
          status: 'not_met',
          detail: simpleText || `Age ${age} exceeds the general category limit of ${maxAge} years`,
          remedy: remedyText || 'Check if you qualify for OBC (+3 yrs), SC/ST (+5 yrs), or PwD (+10 yrs) upper age relaxations in the official notification.',
          rawText,
          pathwayId: pathKey,
        };
      }
    }
  }

  // 4. Registration Evaluation (RN/RM + State Council + Confirmed Check)
  if (kind === 'registration') {
    if (profile.hasRegistration === undefined || !isFieldConfirmed(profile, 'hasRegistration')) {
      return {
        kind,
        status: 'unknown',
        detail: simpleText || rawText || 'State Nursing Council registration required.',
        remedy: remedyText || 'Confirm your State Nursing Council registration status.',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'registration',
      };
    }

    if (profile.hasRegistration === true) {
      const councilName = profile.registrationDetails?.councilName || 'State Nursing Council';
      return {
        kind,
        status: 'met',
        detail: simpleText || `Registered as RN/RM with ${councilName}`,
        rawText,
        pathwayId: pathKey,
      };
    } else {
      return {
        kind,
        status: 'not_met',
        detail: simpleText || 'Requires active registration as Nurse & Midwife (RN/RM)',
        remedy: remedyText || 'Obtain or renew your registration certificate with your State Nursing Council.',
        rawText,
        pathwayId: pathKey,
      };
    }
  }

  // 5. Category Evaluation (Reservation quotas + Confirmed Check)
  if (kind === 'category') {
    if (!profile.category || !isFieldConfirmed(profile, 'category')) {
      return {
        kind,
        status: 'unknown',
        detail: simpleText || rawText || 'Category reservation requirement',
        remedy: remedyText || 'Select your category to check reservation quotas.',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'category',
      };
    }

    if (operator === 'in' || operator === 'eq') {
      const acceptedCategories = Array.isArray(valueText)
        ? valueText
        : typeof valueText === 'string'
        ? (valueText as string).split('|')
        : [];

      if (acceptedCategories.includes(profile.category) || profile.category === 'ur') {
        return {
          kind,
          status: 'met',
          detail: simpleText || `Category (${profile.category.toUpperCase()}) eligible for this quota`,
          rawText,
          pathwayId: pathKey,
        };
      } else {
        return {
          kind,
          status: 'not_met',
          detail: simpleText || `Post reserved for ${acceptedCategories.join(', ').toUpperCase()}; profile category is ${profile.category.toUpperCase()}`,
          remedy: remedyText,
          rawText,
          pathwayId: pathKey,
        };
      }
    }
  }

  // 6. Domicile Evaluation (State Quotas + Confirmed Check - NEVER INFERRED)
  if (kind === 'domicile') {
    if (!profile.domicileState || !isFieldConfirmed(profile, 'domicileState')) {
      return {
        kind,
        status: 'unknown',
        detail: simpleText || rawText || 'State domicile requirement',
        remedy: remedyText || 'Confirm your state domicile to evaluate state quota eligibility.',
        rawText,
        pathwayId: pathKey,
        missingFieldKey: 'domicile',
      };
    }

    if (operator === 'eq') {
      if (profile.domicileState.toLowerCase() === (valueText as string)?.toLowerCase()) {
        return {
          kind,
          status: 'met',
          detail: simpleText || `Domicile (${profile.domicileState}) satisfies state quota criteria`,
          rawText,
          pathwayId: pathKey,
        };
      } else {
        return {
          kind,
          status: 'not_met',
          detail: simpleText || `Requires ${valueText} domicile for state quota; profile has ${profile.domicileState}`,
          remedy: remedyText || 'You may still apply under the All-India Open/General category if permissible.',
          rawText,
          pathwayId: pathKey,
        };
      }
    }
  }

  // Fallback
  return {
    kind,
    status: 'unknown',
    detail: simpleText || rawText || 'General requirement — check official document.',
    remedy: remedyText,
    rawText,
    pathwayId: pathKey,
  };
}

function formatQualName(code: string): string {
  const map: Record<string, string> = {
    bsc_nursing: 'B.Sc. Nursing',
    gnm: 'GNM Diploma',
    post_basic: 'Post Basic B.Sc.',
    msc: 'M.Sc. Nursing',
    other: 'Other Nursing Diploma/Degree',
  };
  return map[code] || code;
}

function getMissingFieldKeyForKind(kind: string): EvaluatedRequirement['missingFieldKey'] {
  switch (kind) {
    case 'qualification': return 'qualification';
    case 'experience': return 'experience';
    case 'age': return 'dob';
    case 'registration': return 'registration';
    case 'category': return 'category';
    case 'domicile': return 'domicile';
    default: return undefined;
  }
}
