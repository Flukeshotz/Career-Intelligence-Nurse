/**
 * maya-engine.ts — Authoritative Career Intelligence Engine (Deterministic First)
 *
 * Maya is the intelligence layer for SkillCase.
 * She routes intents to verified structured data sources and deterministic rules.
 * Supports typos, salary inquiries, eligibility, syllabus, cutoffs, and official citations.
 */

import { UserProfile } from './user-store';
import { INITIAL_EXAMS } from './mock-data';
import { faqs } from './exam-content';
import { logMayaInteraction, trackTelemetry } from './telemetry';

export type MayaConfidence = 'verified' | 'needs_info' | 'not_verified';
export type MayaAvatar = 'smiling' | 'wave' | 'thumbsup' | 'sad' | 'looking' | 'shocked';

export interface MayaOpportunityContext {
  id: string;
  title: string;
  organisation: string;
  type: 'exam' | 'job';
  vacancies?: number;
  applicationDeadline?: string;
  examDate?: string;
  admitCardDate?: string;
  qualification?: string;
  officialNotificationUrl?: string;
  lastVerified?: string;
  requirements?: any;
  descriptionSimple?: string;
}

export interface MayaQuickAction {
  label: string;
  action: 'view_official' | 'complete_profile' | 'navigate' | 'view_similar' | 'open_url' | 'ask_prompt' | 'view_eligibility' | 'track';
  payload?: string;
  url?: string;
  prompt?: string;
}

export interface MayaResponse {
  message: string;
  confidence: MayaConfidence;
  avatar: MayaAvatar;
  quickActions: MayaQuickAction[];
  citation?: string;
  sourceUrl?: string;
  sourceDocName?: string;
  error?: boolean;
}

export interface MayaContext {
  question: string;
  pageContext?: 'norcet' | 'job' | 'exam' | 'profile' | 'cycles' | 'general';
  opportunity?: MayaOpportunityContext;
  profile?: UserProfile | null;
  userProfile?: UserProfile | null;
  conversationHistory?: Array<{ role: 'user' | 'assistant'; text: string }>;
}

export type MayaIntent =
  | 'salary_inquiry'
  | 'eligibility_check'
  | 'exam_cutoff'
  | 'exam_pattern_syllabus'
  | 'prep_recommendation'
  | 'pyq_retrieve'
  | 'timeline_milestones'
  | 'general_guidance'
  | 'unsupported_query';

/** Typo-Tolerant Intent Classifier */
export function classifyMayaIntent(query: string): MayaIntent {
  const q = query.toLowerCase().trim();

  // Salary & Pay Inquiries (handles slaary, salarty, pay, etc.)
  if (/sal|slaary|salarty|sallary|pay|scale|in\s*hand|ctc|allowance|grade\s*pay|level\s*7|level\s*8|monthly|stipend|income|earn/i.test(q)) {
    return 'salary_inquiry';
  }
  // Cutoffs & Percentiles
  if (/cutoff|cut\s*off|cut-off|percentile|marks|qualifying|rank|merit|score|80:20|reservation/i.test(q)) {
    return 'exam_cutoff';
  }
  // Eligibility & Qualifications
  if (/eligib|elgible|eligible|apply|qualification|qualifiction|bsc|b\.sc|gnm|post basic|msc|age|experience|bed|criteria/i.test(q)) {
    return 'eligibility_check';
  }
  // PYQ & Question Papers
  if (/pyq|previous year|question paper|questin|paper|mock|sample|question booklet|cbt paper|test paper/i.test(q)) {
    return 'pyq_retrieve';
  }
  // Pattern & Syllabus
  if (/syllabus|sylabus|pattern|scheme|stage 1|stage 2|negative marking|subject|topics|marking/i.test(q)) {
    return 'exam_pattern_syllabus';
  }
  // Prep Strategy & High-Yield Topics
  if (/how to prepare|strategy|study plan|important topics|high yield|books|revision|tips/i.test(q)) {
    return 'prep_recommendation';
  }
  // Timeline & Dates
  if (/date|admit card|admit|when is|schedule|result|timeline|deadline|last date/i.test(q)) {
    return 'timeline_milestones';
  }
  return 'general_guidance';
}

/**
 * Deterministic Answer Composer.
 * Answers come only from the exam's own checked record (same source as the page's FAQs). Nothing
 * here is exam-specific by hand: cut-offs, exam pattern, syllabus and prep advice are not
 * available for any exam yet, so Maya says so instead of answering from memory.
 */
const NOT_YET: Partial<Record<MayaIntent, string>> = {
  exam_cutoff: "We don't have checked cut-off figures for this exam yet, so I won't guess. Please see the official result notice.",
  exam_pattern_syllabus: "We don't have a checked exam pattern or syllabus for this exam yet. Please see the official notification.",
  prep_recommendation: "We don't have checked preparation guidance for this exam yet.",
  pyq_retrieve: 'Previous-year papers are listed on an exam page only when they come from the official question booklet.',
};

const FAQ_KEY: Partial<Record<MayaIntent, RegExp>> = {
  salary_inquiry: /salary/i,
  timeline_milestones: /last date|exam\?$|when is/i,
};

export function generateDeterministicMayaResponse(context: MayaContext): MayaResponse {
  const { question, opportunity } = context;
  const intent = classifyMayaIntent(question);
  const q = question.toLowerCase();
  const exam = opportunity ? INITIAL_EXAMS.find((e) => e.id === opportunity.id) : undefined;
  const officialUrl = exam?.officialNotificationUrl || opportunity?.officialNotificationUrl;
  const official: MayaQuickAction[] = officialUrl ? [{ label: 'Open official website', action: 'open_url', url: officialUrl }] : [];

  let response: MayaResponse;

  if (!exam) {
    response = {
      message: 'Open a specific recruitment page and I can answer from its checked details.',
      confidence: 'needs_info',
      avatar: 'wave',
      quickActions: [],
    };
  } else if (/leak|cancel|paper out|cheating|court stay|bribe|consultant|agent fee/i.test(q)) {
    response = {
      message: "I can't verify that from the official notification. Please rely on the official website.",
      confidence: 'not_verified',
      avatar: 'shocked',
      quickActions: official,
    };
  } else if (NOT_YET[intent]) {
    response = { message: NOT_YET[intent]!, confidence: 'not_verified', avatar: 'looking', quickActions: official };
  } else {
    const list = faqs(exam);
    const dates = /date|deadline|last|admit|when|schedule|exam/i.test(q);
    const key = intent === 'eligibility_check' ? /who can apply|age/i : FAQ_KEY[intent] ?? (dates ? /last date|exam/i : /vacanc/i);
    const hits = list.filter((f) => key.test(f.q));
    const chosen = intent === 'eligibility_check' ? hits : hits.slice(0, 2);
    if (chosen.length) {
      response = {
        message: chosen.map((f) => f.a).join(' '),
        confidence: 'verified',
        avatar: 'thumbsup',
        sourceDocName: 'Official notification, as reported by independent sources',
        quickActions: official,
      };
    } else {
      response = {
        message: "I don't have a checked answer for that. Please see the official notification.",
        confidence: 'not_verified',
        avatar: 'looking',
        quickActions: official,
      };
    }
  }

  // Safe client-only logging
  if (typeof window !== 'undefined') {
    try {
      logMayaInteraction({
        question,
        intent,
        confidence: response.confidence === 'verified' ? 'verified_official' : response.confidence === 'needs_info' ? 'guidance' : 'unverified',
        answered: response.confidence !== 'not_verified',
        contextExamId: opportunity?.id,
      });

      trackTelemetry('maya_question_submitted', {
        question,
        intent,
        confidence: response.confidence,
        exam_id: opportunity?.id,
      });
    } catch {
      // Safe fallback
    }
  }

  return response;
}

/** Main async entry point */
export async function askMaya(context: MayaContext): Promise<MayaResponse> {
  return generateDeterministicMayaResponse(context);
}
