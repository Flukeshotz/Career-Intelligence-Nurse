import { RawScrapedOpportunity, RawScrapedRequirement } from './types';
import { generateSlug } from '../lib/slug';

export interface NormalizedOpportunity {
  externalRef: string;
  profession: string;
  opportunityType: 'job' | 'exam';
  slug: string;
  title: string;
  organisation: string;
  jobType?: 'government' | 'private';
  locationState?: string;
  locationCity?: string;
  role?: string;
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
  status: 'open' | 'upcoming' | 'closed' | 'expired';
  descriptionSimple: string;
  officialNotificationUrl?: string | null;
  applicationUrl?: string | null;
  sourceUrl: string;
  sourceName: string;
  sourceType: 'official' | 'verified_secondary' | 'other';
  lastVerifiedAt: string;
}

export function normalizeOpportunity(raw: RawScrapedOpportunity): NormalizedOpportunity {
  const slug = generateSlug(raw.title, raw.organisation, raw.applicationDeadline || raw.examDate || new Date().getFullYear());
  
  // Format the 5-heading simple description
  const descriptionSimple = generate5HeadingSummary(raw);

  return {
    ...raw,
    slug,
    descriptionSimple,
  };
}

function generate5HeadingSummary(raw: RawScrapedOpportunity): string {
  const sector = raw.jobType === 'government' ? 'A permanent / contractual government vacancy' : raw.opportunityType === 'exam' ? 'A national / state recruitment examination' : 'A private super-speciality hospital vacancy';
  
  const datesText = raw.applicationDeadline
    ? `Applications close on ${new Date(raw.applicationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}.`
    : 'Check the official notification for exact timeline.';

  const examText = raw.examDate
    ? ` Examination scheduled for ${new Date(raw.examDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}.`
    : '';

  const vacanciesText = raw.vacancyCount ? ` (${raw.vacancyCount} posts announced)` : '';

  return `What is this?
${sector} for ${raw.title} at ${raw.organisation}${vacanciesText}.

Who can apply?
${raw.qualificationSummary}. ${raw.experienceMinYears ? `Minimum ${raw.experienceMinYears} years clinical experience required.` : 'Freshers and experienced candidates eligible.'}

Important dates:
${datesText}${examText}

What do you need?
State Nursing Council or INC registration certificate, qualification degree/diploma certificates, and government ID proof.

What happens next?
Online application submission followed by ${raw.opportunityType === 'exam' ? 'Computer-Based Test (CBT) and centralized counselling' : 'shortlisting, clinical skill evaluation, and interview'}.`;
}
