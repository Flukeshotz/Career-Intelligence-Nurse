export type OpportunityKind = 'job' | 'exam';
export type SectorType = 'government' | 'private';
export type SourceTrustTier = 'official' | 'verified_secondary' | 'other';
export type OpportunityStatus = 'open' | 'upcoming' | 'closed' | 'expired';

export interface RawScrapedOpportunity {
  externalRef: string;
  profession: string; // 'nursing'
  opportunityType: OpportunityKind;
  title: string;
  organisation: string;
  jobType?: SectorType;
  locationState?: string;
  locationCity?: string;
  role?: string; // staff_nurse, nursing_officer, icu, ot, chn, etc.
  qualificationSummary: string;
  experienceMinYears?: number | null;
  experienceMaxYears?: number | null;
  salaryMin?: number | null;
  salaryMax?: number | null;
  salaryRaw?: string | null;
  vacancyCount?: number | null;
  ageMin?: number | null;
  ageMax?: number | null;
  applicationStart?: string | null;
  applicationDeadline?: string | null;
  examDate?: string | null;
  admitCardDate?: string | null;
  admitCardUrl?: string | null;
  syllabusUrl?: string | null;
  resultDate?: string | null;
  status: OpportunityStatus;
  officialNotificationUrl?: string | null;
  applicationUrl?: string | null;
  sourceUrl: string;
  sourceName: string;
  sourceType: SourceTrustTier;
  lastVerifiedAt: string;
  rawText?: string;
  notes?: string;
}

export interface RawScrapedRequirement {
  externalRef: string;
  requirementKind: 'qualification' | 'experience' | 'registration' | 'age' | 'language' | 'document' | 'other';
  operator?: 'gte' | 'lte' | 'in' | 'eq' | 'exists' | null;
  valueNumeric?: number | null;
  valueText?: string | string[] | null; // e.g. 'bsc_nursing|post_basic'
  isMandatory: boolean;
  orGroup?: string | null;
  pathwayId?: string | null;
  rawText: string;
  simpleText?: string | null;
  remedyText?: string | null;
  notes?: string;
}

export interface ScraperSourceResult {
  sourceId: string;
  sourceName: string;
  sourceType: SourceTrustTier;
  opportunities: RawScrapedOpportunity[];
  requirements: RawScrapedRequirement[];
}
