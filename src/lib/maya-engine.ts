// src/lib/maya-engine.ts
// Maya Intelligence Core — retrieves → calculates → explains
// Enforces strict AI safety guardrails, scope whitelist, and jailbreak prevention.

import Groq from 'groq-sdk';
import { UserProfile, calculateTotalExperienceMonths } from './user-store';
import { EligibilityResult, OpportunityRequirementItem, evaluateEligibility } from './eligibility';

export type MayaConfidence = 'verified' | 'needs_info' | 'not_verified';
export type MayaAvatar = 'smiling' | 'wave' | 'thumbsup' | 'sad' | 'looking' | 'shocked';

export interface MayaOpportunityContext {
  id: string;
  title: string;
  organisation: string;
  type: 'job' | 'exam';
  vacancies?: number;
  applicationDeadline?: string;
  examDate?: string;
  admitCardDate?: string;
  salaryRaw?: string;
  qualification?: string;
  officialNotificationUrl?: string;
  lastVerified?: string;
  requirements?: OpportunityRequirementItem[];
  descriptionSimple?: string;
}

export interface MayaContext {
  pageContext: 'norcet' | 'job' | 'exam' | 'profile' | 'cycles' | 'general';
  question: string;
  opportunity?: MayaOpportunityContext;
  userProfile?: UserProfile;
  eligibilityResult?: EligibilityResult;
}

export interface MayaQuickAction {
  label: string;
  action: 'track' | 'view_official' | 'view_similar' | 'complete_profile' | 'view_eligibility' | 'navigate';
  payload?: string;
}

export interface MayaResponse {
  message: string;
  confidence: MayaConfidence;
  citation?: string;
  avatar: MayaAvatar;
  quickActions: MayaQuickAction[];
  error?: boolean;
}

// ─── AI GUARDRAILS & SAFETY FILTERS ─────────────────────────────────────────

// Jailbreak / prompt injection patterns
const JAILBREAK_PATTERNS = [
  /ignore\s+(all|any|previous|prior|system|above|\s)*(instructions|rules|prompts|commands|directives)/i,
  /system\s+prompt/i,
  /reveal\s+(your|the|hidden|system)?\s*(prompt|instructions|secret|system|directives)/i,
  /\b(dan\s+mode|jailbreak|unrestricted\s+mode|bypass\s+all|override\s+rules)\b/i,
  /pretend\s+you\s+are\s+(not|an\s+unrestricted|a\s+chatbot|chatgpt|dan)/i,
  /act\s+as\s+(an\s+evil|a\s+hacker|a\s+developer|an\s+unrestricted|root|dan)/i,
  /\b(sudo|developer\s+mode|disregard\s+safety|tell\s+me\s+your\s+rules)\b/i,
  /print\s+(the\s+above|your\s+initial\s+prompt|everything\s+above)/i,
];

// Strictly off-scope topic triggers
const OFF_SCOPE_PATTERNS = [
  /\b(write\s+(python|javascript|code|sql|html|css|c\+\+|java)|debug\s+this\s+code|coding\s+solution)\b/i,
  /\b(solve\s+(this\s+math|equation|calculus|algebra|physics\s+problem)|integral\s+of|derivative\s+of)\b/i,
  /\b(stocks?|crypto|bitcoin|ethereum|forex\s+trading|stock\s+tips|buy\s+shares|mutual\s+funds)\b/i,
  /\b(recipe\s+for|how\s+to\s+bake|movie\s+recommendation|song\s+lyrics|guitar\s+chords)\b/i,
  /\b(political\s+party|who\s+should\s+i\s+vote\s+for|election\s+prediction|astrology\s+horoscope)\b/i,
];

// Valid healthcare / career keywords whitelist
const HEALTHCARE_TOPICS = [
  'nurse', 'nursing', 'norcet', 'aiims', 'rrb', 'esic', 'dsssb', 'jipmer', 'pgimer',
  'sgpgi', 'bsc', 'gnm', 'anm', 'post basic', 'msc', 'hospital', 'eligibility',
  'salary', 'pay', 'grade pay', 'level 7', 'council', 'registration', 'rnc', 'knc',
  'mnc', 'dnc', 'upnc', 'inc', 'exam', 'cbt', 'prelims', 'mains', 'syllabus', 'admit card',
  'cutoff', 'vacancy', 'vacancies', 'bed', 'clinical', 'icu', 'ot', 'ccu', 'experience',
  'age', 'relaxation', 'category', 'obc', 'sc', 'st', 'ews', 'germany', 'uk', 'nclex',
  'ielts', 'oet', 'profile', 'passport', 'apply', 'deadline', 'cycle', 'track', 'skillcase',
  'qualification', 'career', 'job', 'recruit', 'interview', 'document', 'verification'
];

interface GuardrailCheckResult {
  isSafe: boolean;
  reason?: 'jailbreak' | 'off_scope';
  fallbackResponse?: MayaResponse;
}

export function checkInputGuardrails(question: string): GuardrailCheckResult {
  const cleanQ = question.trim().toLowerCase();

  // 1. Check for prompt injection attempts
  for (const pattern of JAILBREAK_PATTERNS) {
    if (pattern.test(cleanQ)) {
      return {
        isSafe: false,
        reason: 'jailbreak',
        fallbackResponse: {
          message: "I am Maya, your SkillCase career guide. I only assist with nursing careers, government exams, eligibility checks, and hospital opportunities. How can I help with your nursing career today?",
          confidence: 'verified',
          avatar: 'smiling',
          quickActions: [
            { label: 'Check NORCET Eligibility', action: 'navigate', payload: '/nursing/norcet' },
            { label: 'Explore Govt Exams', action: 'navigate', payload: '/nursing/exams' },
            { label: 'View Career Passport', action: 'complete_profile' }
          ]
        }
      };
    }
  }

  // 2. Check for clear off-scope questions
  for (const pattern of OFF_SCOPE_PATTERNS) {
    if (pattern.test(cleanQ)) {
      return {
        isSafe: false,
        reason: 'off_scope',
        fallbackResponse: {
          message: "I can only help with nursing career decisions, government recruitment exams (like NORCET, RRB, ESIC, DSSSB), qualification rules, and hospital jobs on SkillCase. For general questions outside healthcare careers, please use a standard search assistant.",
          confidence: 'verified',
          avatar: 'looking',
          quickActions: [
            { label: 'View All Nursing Exams', action: 'navigate', payload: '/nursing/exams' },
            { label: 'Check My Eligibility', action: 'view_eligibility' }
          ]
        }
      };
    }
  }

  return { isSafe: true };
}

// ─── PROFILE & ELIGIBILITY CONTEXT BUILDERS ─────────────────────────────────

function buildProfileSummary(profile: UserProfile): string {
  const quals = profile.qualificationsList?.map((q) => q.name || q.code).join(', ') || 'not set';
  const expMonths = calculateTotalExperienceMonths(profile.employmentHistory || []);
  const expYears = (expMonths / 12).toFixed(1);
  const council = profile.registrationDetails?.isRegistered
    ? `Registered with ${profile.registrationDetails.councilName || 'State Nursing Council'}`
    : 'Council registration not confirmed';
  const dob = profile.dob || 'DOB not set';
  return `Qualifications: ${quals} | Clinical Experience: ${expYears} yrs (${expMonths} months) | Council: ${council} | DOB: ${dob}`;
}

function buildEligibilitySummary(result: EligibilityResult): string {
  const verdict = result.confidence === 'likely'
    ? 'LIKELY ELIGIBLE'
    : result.confidence === 'not_eligible'
    ? 'NOT ELIGIBLE'
    : 'CHECK REQUIREMENTS';
  const gaps = result.missingFields?.join(', ') || 'none';
  const pathwaySummary = result.pathways?.map((p: { label?: string; pathwayId: string; status: string }) =>
    `${p.label || p.pathwayId}: ${p.status}`
  ).join(' | ') || '';
  return `Verdict: ${verdict} | Missing fields: ${gaps} | Pathways: ${pathwaySummary}`;
}

import { DETAILED_EXAM_INTELLIGENCE } from './exam-syllabus-data';

function buildOpportunitySummary(opp: MayaOpportunityContext): string {
  const parts = [
    `${opp.title} at ${opp.organisation}`,
    opp.vacancies ? `${opp.vacancies} posts` : '',
    opp.salaryRaw || '',
    opp.applicationDeadline ? `Deadline: ${opp.applicationDeadline}` : '',
    opp.examDate ? `Exam date: ${opp.examDate}` : '',
    opp.admitCardDate ? `Admit card: ${opp.admitCardDate}` : '',
    opp.qualification ? `Qualification required: ${opp.qualification}` : '',
    opp.officialNotificationUrl ? `Official URL: ${opp.officialNotificationUrl}` : '',
    opp.lastVerified ? `Last verified: ${opp.lastVerified}` : '',
  ];

  const detailed = DETAILED_EXAM_INTELLIGENCE[opp.id];
  if (detailed) {
    parts.push(`Gross Pay: ${detailed.grossSalaryMonthly}`);
    parts.push(`Stages: ${detailed.stages.map(s => `${s.stageName} (${s.totalQuestions} Qs, ${s.durationMinutes} mins, ${s.negativeMarking})`).join(' | ')}`);
    parts.push(`Syllabus Modules: ${detailed.syllabusModules.map(m => `${m.subject}: ${m.highYieldTopics.slice(0, 3).join(', ')}`).join(' | ')}`);
  }

  return parts.filter(Boolean).join(' | ');
}

function detectMissingProfileFields(profile?: UserProfile): string[] {
  if (!profile) return ['qualification', 'experience', 'council registration', 'date of birth'];
  const missing: string[] = [];
  if (!profile.qualificationsList?.length) missing.push('qualification');
  if (!profile.registrationDetails?.isRegistered) missing.push('council registration');
  if (!profile.dob) missing.push('date of birth');
  return missing;
}

function buildSystemPrompt(context: MayaContext): string {
  const profileSummary = context.userProfile
    ? buildProfileSummary(context.userProfile)
    : 'No profile saved yet.';
  const eligibilitySummary = context.eligibilityResult
    ? buildEligibilitySummary(context.eligibilityResult)
    : 'Eligibility not yet calculated.';
  const opportunitySummary = context.opportunity
    ? buildOpportunitySummary(context.opportunity)
    : 'No specific opportunity context.';

  return `You are Maya, SkillCase's career guide for Indian nurses.

STRICT CONCISENESS RULE:
- Keep your answer to EXACTLY 1 to 2 SHORT, DIRECT SENTENCES (Maximum 35 words).
- Zero fluff, zero boilerplate intros ("Here is...", "I'd be glad to...").
- Direct facts, numbers, and actionable advice only.

RESPONSE FORMAT (JSON ONLY):
{
  "message": "1-2 concise, clear sentences.",
  "confidence": "verified|needs_info|not_verified",
  "citation": "Official source name or null",
  "avatar": "smiling|wave|thumbsup|sad|looking|shocked",
  "quickActions": [
    {"label": "Action label", "action": "track|view_official|view_similar|complete_profile|view_eligibility|navigate", "payload": "url_or_path"}
  ]
}

CURRENT SYSTEM CONTEXT:
Page: ${context.pageContext}
Opportunity: ${opportunitySummary}
User Profile: ${profileSummary}
Eligibility Engine Output: ${eligibilitySummary}`;
}

export async function askMaya(context: MayaContext): Promise<MayaResponse> {
  // 1. Guardrail input validation
  const guardrailCheck = checkInputGuardrails(context.question);
  if (!guardrailCheck.isSafe && guardrailCheck.fallbackResponse) {
    return guardrailCheck.fallbackResponse;
  }

  // 2. Pre-compute deterministic eligibility if profile + requirements exist
  if (context.userProfile && context.opportunity?.requirements && !context.eligibilityResult) {
    try {
      context.eligibilityResult = evaluateEligibility(
        context.opportunity.requirements,
        context.userProfile
      );
    } catch {
      // Continue safely
    }
  }

  const missingFields = detectMissingProfileFields(context.userProfile);
  const isEligibilityQuestion = /eligible|apply|qualify|can i|am i|cutoff/i.test(context.question);

  try {
    const apiKey = process.env.GROQ_API_KEY;
    if (!apiKey) throw new Error('GROQ_API_KEY not configured');

    const groq = new Groq({ apiKey });
    const systemPrompt = buildSystemPrompt(context);

    const completion = await groq.chat.completions.create({
      model: 'qwen/qwen3.8-27b',
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: context.question },
      ],
      temperature: 0.1,
      max_tokens: 200,
      response_format: { type: 'json_object' },
    });

    const raw = completion.choices[0]?.message?.content || '';
    if (!raw) throw new Error('Empty response');

    const parsed = JSON.parse(raw) as MayaResponse;

    if (parsed.confidence === 'verified' && missingFields.length > 0 && isEligibilityQuestion) {
      parsed.confidence = 'needs_info';
      if (parsed.avatar === 'thumbsup') parsed.avatar = 'looking';
    }

    return parsed;
  } catch (err) {
    return generateDeterministicMayaResponse(context);
  }
}

// ─── CONCISE 1-2 SENTENCE DETERMINISTIC INTELLIGENCE ────────────────────────

function generateDeterministicMayaResponse(context: MayaContext): MayaResponse {
  const q = context.question.toLowerCase().trim();
  const opp = context.opportunity;

  // 1. Contextual Opportunity matching
  if (opp) {
    if (/eligible|apply|qualify|can i|am i/i.test(q)) {
      if (context.eligibilityResult?.confidence === 'likely') {
        return {
          message: `Yes, you meet all eligibility criteria for ${opp.title} at ${opp.organisation}.`,
          confidence: 'verified',
          citation: opp.officialNotificationUrl || 'Official Notice',
          avatar: 'thumbsup',
          quickActions: [
            { label: 'Apply on Portal', action: 'view_official', payload: opp.officialNotificationUrl },
            { label: 'Track in My Cycles', action: 'track', payload: opp.id }
          ]
        };
      } else if (context.eligibilityResult?.confidence === 'not_eligible') {
        return {
          message: `You don't meet the requirements for ${opp.title} yet. Essential requirement: ${opp.qualification || 'Required qualification & experience'}.`,
          confidence: 'verified',
          citation: opp.officialNotificationUrl || 'Official Notice',
          avatar: 'sad',
          quickActions: [
            { label: 'View Similar Exams', action: 'view_similar' }
          ]
        };
      } else {
        return {
          message: `${opp.title} requires ${opp.qualification || 'B.Sc. (0 exp) or GNM (2 yrs exp)'}. Complete your profile to verify your match.`,
          confidence: 'verified',
          citation: opp.officialNotificationUrl || 'Official Notice',
          avatar: 'smiling',
          quickActions: [
            { label: 'Complete Profile', action: 'complete_profile' }
          ]
        };
      }
    }

    if (/syllabus|topics|subject|pattern|negative marking|marks|stage/i.test(q)) {
      return {
        message: `${opp.title} covers Core Nursing (MSN, OBG, Peds, Fundamentals, Pharma) with standard 1/3rd negative marking.`,
        confidence: 'verified',
        citation: opp.officialNotificationUrl || 'Official Blueprint',
        avatar: 'smiling',
        quickActions: [
          { label: 'View Syllabus', action: 'view_eligibility' }
        ]
      };
    }
  }

  // 2. Global Pan-India Short Answers

  // CUTOFFS & PERCENTILES
  if (/cutoff|percentile|qualifying mark|qualifying percentage|merit mark|minimum mark/i.test(q)) {
    return {
      message: "NORCET qualifying cutoffs are 50% for General/EWS, 45% for OBC, and 40% for SC/ST. Top AIIMS institutes typically allocate seats between the 88th and 95th percentile.",
      confidence: 'verified',
      citation: 'AIIMS Result Gazette',
      avatar: 'smiling',
      quickActions: [
        { label: 'NORCET Hub', action: 'navigate', payload: '/nursing/norcet' },
        { label: 'Practice PYQs', action: 'navigate', payload: '/nursing/exams' }
      ]
    };
  }

  // PREVIOUS YEAR PAPERS & MOCKS
  if (/pyq|previous year|question paper|mock test|practice test|old paper|model paper/i.test(q)) {
    return {
      message: "You can take timed 90-minute CBT practice tests with negative marking or download verified answer-key PDFs directly on each exam page.",
      confidence: 'verified',
      citation: 'SkillCase Question Repository',
      avatar: 'smiling',
      quickActions: [
        { label: 'Browse 50 Exam Papers', action: 'navigate', payload: '/nursing/exams' },
        { label: 'NORCET 2024 Paper', action: 'navigate', payload: '/nursing/norcet' }
      ]
    };
  }

  // EXPERIENCE & BED COUNT
  if (/bed|bed count|50 bed|experience required|clinical experience|gnm exp/i.test(q)) {
    return {
      message: "B.Sc. Nursing freshers need 0 experience. GNM diploma holders need 2 years in a 50+ bed hospital for NORCET/ESIC, but 0 experience for RRB Railways.",
      confidence: 'verified',
      citation: 'AIIMS & Railway Guidelines',
      avatar: 'smiling',
      quickActions: [
        { label: 'Evaluate My Profile', action: 'complete_profile' }
      ]
    };
  }

  // AGE LIMITS & RELAXATIONS
  if (/age limit|age relaxation|upper age|max age|age cutoff|obc relaxation|sc st relaxation/i.test(q)) {
    return {
      message: "General age limit is 18–30 years, with 3 years relaxation for OBC (up to 33) and 5 years for SC/ST (up to 35).",
      confidence: 'verified',
      citation: 'DoPT Recruitment Norms',
      avatar: 'smiling',
      quickActions: [
        { label: 'Check Age Eligibility', action: 'complete_profile' }
      ]
    };
  }

  // COUNCIL REGISTRATION & TRANSFER
  if (/council|registration|dnc|knc|rnc|mnc|upnc|state council|transfer/i.test(q)) {
    return {
      message: "Registration with ANY state nursing council or INC is valid for central exams like NORCET and RRB. No Delhi transfer is needed.",
      confidence: 'verified',
      citation: 'INC Guidelines',
      avatar: 'smiling',
      quickActions: [
        { label: 'Update Profile', action: 'complete_profile' }
      ]
    };
  }

  // OVERSEAS / ABROAD
  if (/abroad|germany|uk|nclex|oet|ielts|gulf|dha|middle east|overseas/i.test(q)) {
    return {
      message: "We track direct hospital routes for Germany (B2 level), UK (OET/NMC), Gulf (DHA license), and USA (NCLEX-RN).",
      confidence: 'verified',
      citation: 'Overseas Framework',
      avatar: 'smiling',
      quickActions: [
        { label: 'Join Waitlist', action: 'navigate', payload: '/nursing' }
      ]
    };
  }

  // NORCET SPECIFIC
  if (/norcet|aiims/i.test(q)) {
    return {
      message: "AIIMS NORCET recruits 2,218+ Level 7 Nursing Officers (₹78k–₹85k/mo) across two CBT stages (100 Qs Prelims, 160 Qs Mains).",
      confidence: 'verified',
      citation: 'aiimsexams.ac.in',
      avatar: 'smiling',
      quickActions: [
        { label: 'Open NORCET Hub', action: 'navigate', payload: '/nursing/norcet' }
      ]
    };
  }

  // RRB RAILWAYS
  if (/rrb|railway/i.test(q)) {
    return {
      message: "RRB recruits 713 Nursing Superintendents (Level 7, ₹76k–₹83k/mo) via a single 100-mark CBT. Both B.Sc. and GNM freshers are eligible with 0 experience.",
      confidence: 'verified',
      citation: 'rrbapply.gov.in',
      avatar: 'smiling',
      quickActions: [
        { label: 'View RRB Exam', action: 'navigate', payload: '/nursing/exams' }
      ]
    };
  }

  // ESIC
  if (/esic/i.test(q)) {
    return {
      message: "UPSC ESIC offers 1,930 Level 7 posts via a 300-mark written test (80% Nursing + 20% Aptitude) with no interview.",
      confidence: 'verified',
      citation: 'upsconline.nic.in',
      avatar: 'smiling',
      quickActions: [
        { label: 'View ESIC Exam', action: 'navigate', payload: '/nursing/exams' }
      ]
    };
  }

  // SALARY
  if (/salary|pay|gross|allowance/i.test(q)) {
    return {
      message: "Central Level 7 nursing posts (AIIMS, RRB, ESIC) pay ₹78,000–₹85,000/month gross. Military Nursing Service (MNS) starts at Level 10 (~₹95,000+/month).",
      confidence: 'verified',
      citation: '7th Pay Commission',
      avatar: 'smiling',
      quickActions: [
        { label: 'Compare Exams', action: 'navigate', payload: '/nursing/exams' }
      ]
    };
  }

  // ALL EXAMS LIST
  if (/all exams|what.*exams|which exams|list.*exams/i.test(q)) {
    return {
      message: "SkillCase indexes 50 national exams across Central (AIIMS, RRB, ESIC), Defense (MNS, BSF), 25 State PSCs, 5 Entrances, and 4 PSUs.",
      confidence: 'verified',
      citation: 'SkillCase Census',
      avatar: 'smiling',
      quickActions: [
        { label: 'Browse All 50 Exams', action: 'navigate', payload: '/nursing/exams' }
      ]
    };
  }

  return {
    message: "I can check your eligibility, salary details, cutoffs, or exam syllabus. What would you like to know?",
    confidence: 'verified',
    avatar: 'smiling',
    quickActions: [
      { label: 'NORCET 2026', action: 'navigate', payload: '/nursing/norcet' },
      { label: 'Govt Exams', action: 'navigate', payload: '/nursing/exams' },
      { label: 'Hospital Jobs', action: 'navigate', payload: '/nursing/jobs' }
    ]
  };
}
