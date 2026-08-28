import posthog from 'posthog-js';

// Initialize PostHog in the browser safely
export function initPostHog() {
  if (typeof window !== 'undefined') {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

    if (key) {
      posthog.init(key, {
        api_host: host,
        capture_pageview: false, // We track explicit events with rich properties
        persistence: 'localStorage',
        autocapture: false,
      });
    }
  }
}

/**
 * Determine referrer source distinguishing organic, seeded, share, direct, ai_assistant
 */
export function detectReferrerSource(searchParams?: URLSearchParams | null): string {
  if (typeof window === 'undefined' && !searchParams) return 'direct';

  const params = searchParams || (typeof window !== 'undefined' ? new URLSearchParams(window.location.search) : null);
  
  if (params) {
    if (params.get('s') || params.get('share_token')) return 'share';
    const utmSource = params.get('utm_source')?.toLowerCase();
    const utmMedium = params.get('utm_medium')?.toLowerCase();
    if (utmSource === 'telegram' || utmSource === 'whatsapp_group' || utmMedium === 'seeded' || params.get('ref') === 'community') {
      return 'seeded';
    }
    if (utmSource === 'chatgpt' || utmSource === 'perplexity' || utmSource === 'ai') {
      return 'ai_assistant';
    }
  }

  if (typeof document !== 'undefined') {
    const referrer = document.referrer.toLowerCase();
    if (!referrer) return 'direct';
    if (referrer.includes('chatgpt.com') || referrer.includes('perplexity.ai') || referrer.includes('claude.ai')) {
      return 'ai_assistant';
    }
    if (referrer.includes('google.') || referrer.includes('bing.') || referrer.includes('duckduckgo.')) {
      return 'organic';
    }
    if (referrer.includes('t.me') || referrer.includes('telegram.org')) {
      return 'seeded';
    }
    if (referrer.includes('whatsapp.com')) {
      return 'share';
    }
  }

  return 'direct';
}

/**
 * Base tracking wrapper with mandatory properties: profession, is_authenticated, session_id
 */
export function trackEvent(eventName: string, properties: Record<string, any> = {}) {
  if (typeof window === 'undefined') return;

  const defaultProps = {
    profession: 'nursing',
    is_authenticated: Boolean(localStorage.getItem('sc_user_id') || localStorage.getItem('sc_auth_token')),
    timestamp: new Date().toISOString(),
    ...properties,
  };

  try {
    if (process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      posthog.capture(eventName, defaultProps);
    }
    // Also log in dev for clear verification
    if (process.env.NODE_ENV === 'development') {
      console.log(`[PostHog Track] ${eventName}:`, defaultProps);
    }
  } catch (err) {
    console.warn('[PostHog] Error capturing event:', err);
  }
}

// Concrete event helpers mapped directly to build_spec.md
export const analytics = {
  landingPageView: (props: {
    landing_path: string;
    opportunity_id?: string;
    opportunity_type?: string;
    referrer_source: string;
    share_token?: string;
  }) => trackEvent('landing_page_view', props),

  signupStarted: (trigger_context: 'alert_cta' | 'track_cta' | 'profile') =>
    trackEvent('signup_started', { trigger_context }),

  signupCompleted: (props: {
    qualification?: string;
    experience_bucket?: string;
    state?: string;
    preference?: string;
  }) => trackEvent('signup_completed', props),

  opportunityView: (props: {
    opportunity_id: string;
    opportunity_type: 'job' | 'exam';
    status: string;
    is_personalized: boolean;
    referrer_source?: string;
  }) => trackEvent('opportunity_view', props),

  simpleExplanationExpanded: (opportunity_id: string) =>
    trackEvent('simple_explanation_expanded', { opportunity_id }),

  officialNotificationClick: (opportunity_id: string) =>
    trackEvent('official_notification_click', { opportunity_id }),

  eligibilityCheck: (props: {
    opportunity_id: string;
    result: 'eligible' | 'not_eligible_yet' | 'unknown';
    requirements_met: number;
    requirements_unmet: number;
    requirements_unknown: number;
  }) => trackEvent('eligibility_check', props),

  remedyViewed: (opportunity_id: string, gap_kind: string) =>
    trackEvent('remedy_viewed', { opportunity_id, gap_kind }),

  applyClick: (opportunity_id: string, application_url?: string) =>
    trackEvent('apply_click', { opportunity_id, application_url }),

  trackOpportunity: (props: {
    opportunity_id: string;
    opportunity_type: 'job' | 'exam';
    initial_stage: string;
  }) => trackEvent('track_opportunity', props),

  trackStageAdvanced: (props: {
    opportunity_id: string;
    from_stage: string;
    to_stage: string;
    triggered_by: 'user' | 'system' | 'curator';
  }) => trackEvent('track_stage_advanced', props),

  alertSubscribed: (opportunity_id: string, alert_type: string) =>
    trackEvent('alert_subscribed', { opportunity_id, alert_type }),

  returnVisit: (props: { days_since_previous_visit: number; was_prompted: boolean }) =>
    trackEvent('return_visit', props),

  track: (eventName: string, props: Record<string, any> = {}) =>
    trackEvent(eventName, props),

  profileStart: (props: { entry_point: string; opportunity_id?: string; trigger?: string }) =>
    trackEvent('profile_start', props),

  resumeUpload: (props: { file_type?: string; file_size_kb?: number; entry_point?: string }) =>
    trackEvent('resume_upload', props),

  resumeParseComplete: (props: {
    parse_success: boolean;
    qualifications_count: number;
    experience_count: number;
    has_registration: boolean;
  }) => trackEvent('resume_parse_complete', props),

  profileFieldConfirmed: (props: { field?: string; method?: string; source?: string; [key: string]: any }) =>
    trackEvent('profile_field_confirmed', props),

  profileCompletion: (props: { fields_confirmed: number; eligibility_readiness: number }) =>
    trackEvent('profile_completion', props),

  eligibilityGapAction: (props: { opportunity_id: string; gap_type: string; action: string }) =>
    trackEvent('eligibility_gap_action', props),

  profileFrictionMetrics: (props: {
    fields_extracted_count: number;
    fields_confirmed_count: number;
    fields_typed_count: number;
    fields_selected_count: number;
    progressive_questions_count: number;
    has_resume: boolean;
  }) => trackEvent('profile_friction_metrics', props),

  eligibilitySpeedMetric: (props: {
    opportunity_id: string;
    time_to_first_result_ms: number;
    was_profile_complete: boolean;
  }) => trackEvent('eligibility_speed_metric', props),

  shareClick: (opportunity_id: string, channel: 'whatsapp' | 'telegram' | 'copy') =>
    trackEvent('share_click', { opportunity_id, channel }),

  shareVisit: (share_token: string, opportunity_id?: string) =>
    trackEvent('share_visit', { share_token, opportunity_id }),
};

