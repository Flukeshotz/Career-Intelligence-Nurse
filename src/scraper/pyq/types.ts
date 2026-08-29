// src/scraper/pyq/types.ts
// Strict Type Definitions for the SkillCase PYQ Ingestion, Verification & Publication Pipeline

export type SourceClassification =
  | 'OFFICIAL_ORIGINAL'
  | 'OFFICIAL_RESPONSE_KEY'
  | 'OFFICIAL_QUESTION_BANK'
  | 'OFFICIAL_ARCHIVE'
  | 'OFFICIALLY_PUBLISHED_MEMORY_BASED'
  | 'MEMORY_BASED_THIRD_PARTY'
  | 'RECONSTRUCTED'
  | 'UNKNOWN';

export type SourceTier =
  | 'TIER_1_OFFICIAL'
  | 'TIER_2_GOV_ARCHIVE'
  | 'TIER_3_TRUSTED_SECONDARY'
  | 'TIER_4_MEMORY_BASED'
  | 'TIER_5_NEVER_PUBLISH';

export type RedistributionStatus =
  | 'ALLOWED'
  | 'OFFICIAL_PUBLIC_ACCESS_ONLY'
  | 'LINK_ONLY'
  | 'LICENSE_UNKNOWN'
  | 'RESTRICTED';

export type ExtractionStatus =
  | 'TEXT_NATIVE'
  | 'OCR_REQUIRED'
  | 'OCR_COMPLETED'
  | 'EXTRACTION_FAILED'
  | 'NEEDS_MANUAL_REVIEW';

export type AnswerStatus =
  | 'OFFICIAL'
  | 'VERIFIED_SECONDARY'
  | 'EXPERT_REVIEWED'
  | 'UNVERIFIED'
  | 'UNKNOWN';

export type CompletenessStatus =
  | 'COMPLETE'
  | 'INCOMPLETE'
  | 'PARTIAL_INDEXED';

export type VerificationStatus =
  | 'DISCOVERED'
  | 'DOWNLOADED'
  | 'EXTRACTED'
  | 'NORMALIZED'
  | 'AUTO_VALIDATED'
  | 'NEEDS_REVIEW'
  | 'VERIFIED'
  | 'PUBLISHED'
  | 'REJECTED';

export interface ExamCycleRecord {
  cycleId: string;
  examId: string;
  cycleName: string;
  year: number;
  conductingAuthority: string;
  officialNotificationUrl?: string;
  examDate?: string;
}

export interface PaperSourceMetadata {
  sourceUrl: string;
  sourceDomain: string;
  discoveredAt: string;
  documentTitle: string;
  publicationDate?: string;
  sha256?: string;
  fileSizeBytes?: number;
  httpStatus?: number;
  sourceTier: SourceTier;
  sourceClassification: SourceClassification;
  redistributionStatus: RedistributionStatus;
}

export interface ExamPaperRecord {
  paperId: string;
  examId: string;
  cycleId: string;
  examName: string;
  year: number;
  stage: 'PRELIMS' | 'MAINS' | 'SINGLE_STAGE' | 'ENTRANCE' | 'SCREENING';
  shift: string;
  language: 'ENGLISH' | 'HINDI' | 'BILINGUAL' | 'REGIONAL';
  paperType: 'REGULAR_EXAM' | 'MODEL_PREDICTOR' | 'SAMPLE_OFFICIAL';
  sourceClassification: SourceClassification;
  sourceTier: SourceTier;
  officialSourceUrl: string;
  officialNotice: string;
  originalFilePath?: string;
  sha256?: string;
  pageCount?: number;
  questionCount: number;
  expectedQuestionCount: number;
  completenessStatus: CompletenessStatus;
  verificationStatus: VerificationStatus;
  redistributionStatus: RedistributionStatus;
  verifiedAt?: string;
  verifiedBy?: string;
  keyHighlights: string[];
  durationMinutes: number;
  totalMarks: number;
  negativeMarking: string;
}

export interface PaperQuestionRecord {
  questionId: string;
  paperId: string;
  canonicalQuestionId?: string;
  questionNumber: number;
  section: string;
  questionTextOriginal: string;
  questionTextDisplay: string;
  normalizationNotes?: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  optionE?: string;
  correctOption: 'A' | 'B' | 'C' | 'D' | 'E' | null;
  answerStatus: AnswerStatus;
  answerSource: string;
  answerSourceUrl?: string;
  answerConfidence: number; // 0.0 - 1.0
  explanation: string;
  pageReference?: number;
  sourceTextHash: string;
  extractionConfidence: number;
  reviewStatus: 'AUTO' | 'HUMAN_APPROVED' | 'FLAGGED';
}
