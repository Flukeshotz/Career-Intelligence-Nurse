/**
 * Verification — what SkillCase can honestly claim about a record, and the citations behind it.
 *
 * Rule: a record exists in the app only if it was verified against at least two independent sources.
 * Anything that could not be was removed rather than shown with a caveat.
 *
 * AUTOMATIC. `src/refresher` re-reads every citation on a schedule, extracts the vacancy count and
 * dates from each, and accepts a value only when at least two sources agree. The result lives in
 * refreshed-data.json and is applied over the stored record (see overlay.ts). getTrust() derives
 * `confirmed` from that consensus, so the badge and "Last updated" refresh with no human involved.
 *
 * This file holds only the human state per record. It ships in the browser bundle, so it contains no
 * third-party source names: those live in src/refresher/registry.ts (server-only), and audit
 * commentary lives in verification-internal.ts. No client component may import either.
 */

import REFRESHED from './refreshed-data.json';

export type VerificationState = 'confirmed' | 'conflict' | 'not_announced';

export interface VerificationRecord {
  state: VerificationState;
  checkedAt: string; // YYYY-MM-DD — when a human last verified it (seed value; the refresher supersedes it)
}

export const CONFIRMATION_TTL_DAYS = 14;

export const VERIFICATION: Record<string, VerificationRecord> = {
  'exam-norcet-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-rrb-nurse-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-pgimer-no-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-osssc-nurse-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-mp-esb-nurse-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-ukmssb-nurse-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-hssc-har-nurse-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
  'exam-ap-mhsrb-nurse-2026': {
    state: 'confirmed',
    checkedAt: '2026-09-19',
  },
};

export type TrustLevel = 'confirmed' | 'stale' | 'unverified' | 'not_announced' | 'conflict';

/** Customer-safe: a level, a badge, one neutral sentence, and a date. No third-party source names. */
export interface TrustSummary {
  level: TrustLevel;
  badge: string;
  message: string;
  checkedAt?: string;
  suppressFromListings: boolean;
}

interface RefreshRecord {
  status: 'consensus' | 'partial' | 'no_consensus';
  checkedAt: string;
  fields?: Record<string, { value: number | string }>;
  official?: { status: 'verified' | 'partial' | 'unreadable'; checkedAt: string; fields?: Record<string, { value: number | string }> };
}
/** A notice does not go stale by itself; it stays trusted for this long between successful reads. */
export const OFFICIAL_TTL_DAYS = 60;
const REFRESH = (REFRESHED as unknown as { records: Record<string, RefreshRecord> }).records;

function daysBetween(fromIso: string, now: number): number {
  const t = new Date(fromIso).getTime();
  return isNaN(t) ? Infinity : Math.floor((now - t) / 86_400_000);
}

export function getTrust(id: string, now: number = Date.now()): TrustSummary {
  const manual = VERIFICATION[id];

  if (manual?.state === 'conflict') {
    return { level: 'conflict', badge: 'Being updated', message: 'This listing is being updated. Please use the official site for current details.', checkedAt: manual.checkedAt, suppressFromListings: true };
  }
  if (manual?.state === 'not_announced') {
    return { level: 'not_announced', badge: 'Notification awaited', message: 'The official notification has not been released yet. We will list it as soon as it is published.', checkedAt: manual.checkedAt, suppressFromListings: true };
  }

  // Automatic: latest refresher run. A run in which sources disagree removes confirmation.
  const auto = REFRESH[id];
  if (auto?.status === 'no_consensus') {
    return { level: 'unverified', badge: 'Confirm on official site', message: 'Sources disagree on some details. Check dates and vacancies on the official site before applying.', checkedAt: auto.checkedAt, suppressFromListings: false };
  }

  // Strongest state: the numbers were found word-for-word in the official notice itself. A published
  // notice is a fixed record, so this holds until independent reports contradict it (or it goes unread
  // for a long time). A contradiction removes the badge and raises an alert (health.ts).
  if (auto?.official?.status === 'verified' && daysBetween(auto.official.checkedAt, now) <= OFFICIAL_TTL_DAYS) {
    const contradicted = Object.entries(auto.official.fields ?? {}).some(([k, ov]) => {
      const cv = auto.fields?.[k]?.value;
      return cv !== undefined && cv !== ov.value;
    });
    if (!contradicted) {
      return {
        level: 'confirmed',
        badge: 'Verified with the official notice',
        message: 'Vacancies and application dates were read directly from the official notification.',
        checkedAt: auto.official.checkedAt,
        suppressFromListings: false,
      };
    }
    return { level: 'unverified', badge: 'Confirm on official site', message: 'Recent reports differ from the official notice we read. Check dates and vacancies on the official site before applying.', checkedAt: auto.official.checkedAt, suppressFromListings: false };
  }

  const confirmedAt = auto?.status === 'consensus' ? auto.checkedAt : manual?.state === 'confirmed' ? manual.checkedAt : undefined;
  if (!confirmedAt) {
    return { level: 'unverified', badge: 'Confirm on official site', message: 'Check dates and vacancies on the official site before applying.', suppressFromListings: false };
  }

  const age = daysBetween(confirmedAt, now);
  if (age > CONFIRMATION_TTL_DAYS) {
    return { level: 'stale', badge: `Last checked ${age} days ago`, message: 'Due for a re-check. Confirm on the official site before applying.', checkedAt: confirmedAt, suppressFromListings: false };
  }
  return {
    level: 'confirmed',
    badge: age <= 0 ? 'Checked today' : `Checked ${age} day${age === 1 ? '' : 's'} ago`,
    message: 'Dates and vacancies match independent reporting of the official notification.',
    checkedAt: confirmedAt,
    suppressFromListings: false,
  };
}
