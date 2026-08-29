'use client';

/**
 * telemetry.ts — Deterministic Event Tracking & Session Logger (Zero-PII)
 *
 * Implements the G0 event taxonomy across Acquisition, Career Passport,
 * Eligibility, PYQ Practice, and Maya Intelligence with persistent local replay storage
 * and PostHog proxying.
 */

import { analytics } from './posthog';

export type TelemetryEventName =
  // Acquisition
  | 'landing_view'
  | 'opportunity_view'
  | 'exam_view'
  | 'job_view'
  | 'source_referral'
  | 'share_open'
  | 'opportunity_shared'
  // Career Passport (Zero-Typing)
  | 'passport_started'
  | 'resume_uploaded'
  | 'resume_parsed'
  | 'profile_field_confirmed'
  | 'profile_field_edited'
  | 'passport_completed'
  // Eligibility
  | 'eligibility_started'
  | 'eligibility_completed'
  | 'eligibility_result'
  | 'eligibility_gap_clicked'
  | 'eligibility_remedy_clicked'
  // Practice & PYQ
  | 'pyq_viewed'
  | 'pyq_started'
  | 'question_answered'
  | 'pyq_completed'
  | 'answer_reviewed'
  // Tracking
  | 'opportunity_tracked'
  | 'opportunity_untracked'
  | 'cycle_stage_updated'
  // Maya Intelligence
  | 'maya_opened'
  | 'maya_question_submitted'
  | 'maya_response_received'
  | 'maya_quick_action_clicked'
  | 'maya_citation_opened'
  | 'maya_feedback'
  | 'maya_unanswered_logged';

export interface TelemetryEvent {
  id: string;
  timestamp: string;
  sessionId: string;
  anonymousUserId: string;
  eventName: TelemetryEventName;
  properties: Record<string, any>;
}

export interface MayaLogItem {
  id: string;
  timestamp: string;
  sessionId: string;
  question: string;
  intent: string;
  confidence: 'verified_official' | 'guidance' | 'unverified';
  answered: boolean;
  contextExamId?: string;
  feedback?: 'helpful' | 'not_helpful';
}

const STORAGE_KEYS = {
  ANON_ID: 'sc_anon_user_id',
  SESSION_ID: 'sc_current_session_id',
  EVENTS_LOG: 'sc_telemetry_events_v1',
  MAYA_LOG: 'sc_maya_audit_log_v1',
};

/** Get or create persistent Anonymous User ID (e.g. anon_a8f2) */
export function getAnonymousUserId(): string {
  if (typeof window === 'undefined') return 'anon_server';
  try {
    let id = localStorage.getItem(STORAGE_KEYS.ANON_ID);
    if (!id) {
      const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
      id = `anon_${rand}`;
      localStorage.setItem(STORAGE_KEYS.ANON_ID, id);
    }
    return id;
  } catch {
    return 'anon_fallback';
  }
}

/** Get or create current session ID */
export function getSessionId(): string {
  if (typeof window === 'undefined') return 'sess_server';
  try {
    let sid = sessionStorage.getItem(STORAGE_KEYS.SESSION_ID);
    if (!sid) {
      const rand = Math.random().toString(36).substring(2, 7);
      sid = `sess_${Date.now()}_${rand}`;
      sessionStorage.setItem(STORAGE_KEYS.SESSION_ID, sid);
    }
    return sid;
  } catch {
    return 'sess_fallback';
  }
}

/** Track an event deterministically with Zero PII */
export function trackTelemetry(
  eventName: TelemetryEventName,
  properties: Record<string, any> = {}
) {
  if (typeof window === 'undefined') return;

  const event: TelemetryEvent = {
    id: `ev_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    anonymousUserId: getAnonymousUserId(),
    eventName,
    properties: sanitizeProperties(properties),
  };

  // 1. PostHog forward
  analytics.track(eventName, {
    ...event.properties,
    anonymous_user_id: event.anonymousUserId,
    session_id: event.sessionId,
  });

  // 2. Persist in local telemetry queue (capped at latest 1,000 events)
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EVENTS_LOG);
    const list: TelemetryEvent[] = raw ? JSON.parse(raw) : [];
    list.unshift(event);
    if (list.length > 1000) list.pop();
    localStorage.setItem(STORAGE_KEYS.EVENTS_LOG, JSON.stringify(list));
  } catch (err) {
    console.warn('Telemetry persistence error:', err);
  }
}

/** Log Maya query for Failure Inbox & Audit */
export function logMayaInteraction(item: Omit<MayaLogItem, 'id' | 'timestamp' | 'sessionId'>) {
  if (typeof window === 'undefined') return;

  const logEntry: MayaLogItem = {
    id: `maya_${Date.now()}_${Math.random().toString(36).substr(2, 4)}`,
    timestamp: new Date().toISOString(),
    sessionId: getSessionId(),
    ...item,
  };

  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MAYA_LOG);
    const list: MayaLogItem[] = raw ? JSON.parse(raw) : [];
    list.unshift(logEntry);
    if (list.length > 500) list.pop();
    localStorage.setItem(STORAGE_KEYS.MAYA_LOG, JSON.stringify(list));
  } catch (err) {
    console.warn('Maya log persistence error:', err);
  }
}

/** Update Maya feedback (thumbs up / down) */
export function updateMayaFeedback(question: string, feedback: 'helpful' | 'not_helpful') {
  if (typeof window === 'undefined') return;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MAYA_LOG);
    const list: MayaLogItem[] = raw ? JSON.parse(raw) : [];
    const match = list.find((m) => m.question.toLowerCase() === question.toLowerCase());
    if (match) {
      match.feedback = feedback;
      localStorage.setItem(STORAGE_KEYS.MAYA_LOG, JSON.stringify(list));
    }
  } catch {}
}

/** Fetch all stored events for internal admin session viewer */
export function getAllTelemetryEvents(): TelemetryEvent[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.EVENTS_LOG);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Fetch all stored Maya interaction logs */
export function getAllMayaLogs(): MayaLogItem[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.MAYA_LOG);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

/** Strip sensitive PII before telemetry logging */
function sanitizeProperties(props: Record<string, any>): Record<string, any> {
  const sanitized = { ...props };
  const blockedKeys = ['phone', 'mobile', 'email', 'name', 'fullName', 'dob', 'address', 'regNumber', 'registrationNumber'];
  blockedKeys.forEach((k) => {
    if (k in sanitized) delete sanitized[k];
  });
  return sanitized;
}
