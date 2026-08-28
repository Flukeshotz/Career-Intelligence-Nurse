'use client';

import { analytics } from './posthog';

export interface QualificationItem {
  code: string; // 'gnm' | 'bsc_nursing' | 'post_basic' | 'msc' | 'other'
  name?: string;
  institution?: string;
  yearOfPassing?: number;
  isPrimary?: boolean;
}

export interface EmploymentItem {
  id?: string;
  employer: string;
  role: string; // 'staff_nurse' | 'nursing_officer' | 'icu' | 'ot' | 'emergency' | 'ward_nurse' | 'other'
  department?: string; // 'ICU' | 'OT' | 'Emergency' | 'Pediatrics' | 'Oncology' | 'General Ward' | 'Other'
  startDate: string; // 'YYYY-MM'
  endDate?: string; // 'YYYY-MM' or undefined if current
  isCurrent?: boolean;
  isGovernment?: boolean;
  monthsDuration?: number;
}

export interface RegistrationDetails {
  isRegistered?: boolean;
  councilName?: string; // 'INC' | 'KNC' | 'MNC' | 'TNC' | 'KNMC' | 'UPNC' | 'RNC' | 'WBNC' | 'Other'
  state?: string;
  regNumber?: string;
  expiryDate?: string;
}

export interface LanguageSkill {
  language: string; // 'Hindi' | 'English' | 'Kannada' | 'Tamil' | 'Malayalam' | 'Marathi' | 'German' | 'Arabic' | 'Other'
  speak: boolean;
  read: boolean;
  write: boolean;
}

export type FieldSource = 'resume' | 'user' | 'inferred';
export type FieldStatus = 'extracted' | 'confirmed' | 'user_edited' | 'unknown';

export interface FieldProvenance {
  source: FieldSource;
  status: FieldStatus;
  confirmedAt?: string;
}

export interface UserProfile {
  id?: string;
  email?: string;
  fullName?: string;
  dob?: string; // 'YYYY-MM-DD'
  gender?: 'female' | 'male' | 'other';
  category?: 'ur' | 'ews' | 'obc' | 'sc' | 'st' | 'pwd' | 'other';
  citizenship?: string; // 'India' | 'Other'
  domicileState?: string;
  state?: string;
  city?: string;
  
  // Legacy single fields for backward compatibility
  qualificationCode?: string; // primary qualification code
  experienceBucket?: string; // 'fresher' | '0-2' | '2-5' | '5+'
  preference?: string; // 'government' | 'private' | 'both' | 'abroad'
  abroadCountryInterest?: string;
  hasRegistration?: boolean;

  // Career Passport Multi-Entity Structure
  qualificationsList?: QualificationItem[];
  employmentHistory?: EmploymentItem[];
  registrationDetails?: RegistrationDetails;
  languagesList?: LanguageSkill[];
  specialConditions?: string[]; // ['ex_serviceman', 'central_govt_employee', 'state_govt_employee']
  
  // Field-level provenance
  fieldProvenance?: Record<string, FieldProvenance>;
  
  lastSeenAt?: string;
  resumeFileName?: string;
  resumeParsedAt?: string;
}

export interface TrackedItem {
  id: string;
  opportunityId: string;
  opportunityType: 'job' | 'exam';
  title: string;
  employerOrOrg: string;
  slug: string;
  stage:
    | 'interested'
    | 'applied'
    | 'admit_card_awaited'
    | 'exam_scheduled'
    | 'exam_taken'
    | 'result_awaited'
    | 'result_out'
    | 'counselling'
    | 'closed';
  outcome?: 'selected' | 'not_selected' | 'withdrew' | 'lapsed';
  nextStageName?: string;
  nextStageDate?: string;
  updatedAt: string;
  notes?: string;
}

const PROFILE_KEY = 'sc_user_profile';
const TRACKED_KEY = 'sc_tracked_opportunities';

export function getUserProfile(): UserProfile | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(PROFILE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function saveUserProfile(profile: Partial<UserProfile>): UserProfile {
  if (typeof window === 'undefined') return profile as UserProfile;
  const existing = getUserProfile() || {};
  
  // Calculate total clinical experience and bucket automatically from employment history if present
  let experienceBucket = profile.experienceBucket || existing.experienceBucket;
  const employmentHistory = profile.employmentHistory || existing.employmentHistory;
  
  if (employmentHistory && employmentHistory.length > 0) {
    const totalMonths = calculateTotalExperienceMonths(employmentHistory);
    experienceBucket = getBucketFromMonths(totalMonths);
  }

  // Derive primary qualification code if qualificationsList exists
  let primaryQual = profile.qualificationCode || existing.qualificationCode;
  const qualList = profile.qualificationsList || existing.qualificationsList;
  if (qualList && qualList.length > 0) {
    const primary = qualList.find((q) => q.isPrimary) || qualList[0];
    primaryQual = primary.code;
  }

  const updated: UserProfile = {
    ...existing,
    ...profile,
    qualificationCode: primaryQual,
    experienceBucket: experienceBucket || 'fresher',
    lastSeenAt: new Date().toISOString(),
  };

  localStorage.setItem(PROFILE_KEY, JSON.stringify(updated));
  return updated;
}

export function calculateAge(dobString?: string): number | null {
  if (!dobString) return null;
  const dob = new Date(dobString);
  if (isNaN(dob.getTime())) return null;
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  const m = now.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && now.getDate() < dob.getDate())) {
    age--;
  }
  return age;
}

export function calculateTotalExperienceMonths(employment: EmploymentItem[]): number {
  if (!employment || employment.length === 0) return 0;
  let totalMonths = 0;
  
  for (const item of employment) {
    if (!item.startDate) continue;
    const start = new Date(`${item.startDate}-01`);
    const end = item.isCurrent || !item.endDate ? new Date() : new Date(`${item.endDate}-01`);
    
    if (!isNaN(start.getTime()) && !isNaN(end.getTime()) && end >= start) {
      const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
      totalMonths += Math.max(0, months);
    }
  }
  return totalMonths;
}

export function getBucketFromMonths(months: number): string {
  if (months === 0) return 'fresher';
  const years = months / 12;
  if (years < 2) return '0-2';
  if (years < 5) return '2-5';
  return '5+';
}

export function calculateProfileReadiness(profile: UserProfile | null): {
  isComplete: boolean;
  score: number; // 0 - 100
  readyOpportunitiesCount: number;
  missingForGovt: string[];
  missingForExams: string[];
} {
  if (!profile) {
    return {
      isComplete: false,
      score: 0,
      readyOpportunitiesCount: 0,
      missingForGovt: ['Qualification', 'Experience', 'Registration', 'Date of Birth'],
      missingForExams: ['Qualification', 'Registration', 'Date of Birth'],
    };
  }

  const missingGovt: string[] = [];
  const missingExams: string[] = [];

  if (!profile.qualificationCode && (!profile.qualificationsList || profile.qualificationsList.length === 0)) {
    missingGovt.push('Qualification');
    missingExams.push('Qualification');
  }

  if (profile.hasRegistration == null && !profile.registrationDetails?.isRegistered) {
    missingGovt.push('Registration Status');
    missingExams.push('Registration Status');
  }

  if (!profile.dob) {
    missingGovt.push('Date of Birth (for Age limit)');
    missingExams.push('Date of Birth (for Age limit)');
  }

  if (!profile.category) {
    missingGovt.push('Category / Reservation');
  }

  // Calculate score
  let points = 0;
  if (profile.qualificationCode || profile.qualificationsList?.length) points += 30;
  if (profile.experienceBucket || profile.employmentHistory?.length) points += 25;
  if (profile.hasRegistration != null || profile.registrationDetails) points += 20;
  if (profile.dob) points += 15;
  if (profile.state) points += 10;

  return {
    isComplete: missingGovt.length === 0,
    score: Math.min(100, points),
    readyOpportunitiesCount: points > 50 ? 24 : 8,
    missingForGovt: missingGovt,
    missingForExams: missingExams,
  };
}

// ----------------------------------------------------
// Tracked Cycle Operations
// ----------------------------------------------------

export function getTrackedOpportunities(): TrackedItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(TRACKED_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function trackOpportunityItem(item: {
  opportunityId: string;
  opportunityType: 'job' | 'exam';
  title: string;
  employerOrOrg: string;
  slug: string;
  initialStage?: TrackedItem['stage'];
  nextStageName?: string;
  nextStageDate?: string;
}): TrackedItem {
  const current = getTrackedOpportunities();
  const existingIndex = current.findIndex((i) => i.opportunityId === item.opportunityId);

  const initialStage = item.initialStage || 'interested';
  const trackedRecord: TrackedItem = {
    id: `track-${Date.now()}`,
    opportunityId: item.opportunityId,
    opportunityType: item.opportunityType,
    title: item.title,
    employerOrOrg: item.employerOrOrg,
    slug: item.slug,
    stage: initialStage,
    nextStageName: item.nextStageName,
    nextStageDate: item.nextStageDate,
    updatedAt: new Date().toISOString(),
  };

  if (existingIndex >= 0) {
    current[existingIndex] = { ...current[existingIndex], ...trackedRecord };
  } else {
    current.push(trackedRecord);
  }

  localStorage.setItem(TRACKED_KEY, JSON.stringify(current));

  analytics.trackOpportunity({
    opportunity_id: item.opportunityId,
    opportunity_type: item.opportunityType,
    initial_stage: initialStage,
  });

  return trackedRecord;
}

export function advanceStage(
  opportunityId: string,
  toStage: TrackedItem['stage'],
  notes?: string
): TrackedItem | null {
  const current = getTrackedOpportunities();
  const target = current.find((i) => i.opportunityId === opportunityId);
  if (!target) return null;

  const fromStage = target.stage;
  target.stage = toStage;
  target.updatedAt = new Date().toISOString();
  if (notes) target.notes = notes;

  localStorage.setItem(TRACKED_KEY, JSON.stringify(current));

  analytics.trackStageAdvanced({
    opportunity_id: opportunityId,
    from_stage: fromStage,
    to_stage: toStage,
    triggered_by: 'user',
  });

  return target;
}
