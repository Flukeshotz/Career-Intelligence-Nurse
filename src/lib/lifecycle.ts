/**
 * Opportunity lifecycle, derived at request time from the record's own dates.
 * Never trusts the stored `status` field (build_spec → Opportunity Lifecycle State Machine).
 *
 * Fixes two gaps in the earlier computeOpportunityStatus():
 *  - it only ever produced `closed`; a record whose window had not opened yet stayed `open`
 *  - it knew nothing about the exam itself, so NORCET read "closed" the day after its deadline
 *    and never reflected that Prelims had been held and Mains was still ahead
 */

export type LegacyStatus = 'open' | 'upcoming' | 'closed' | 'expired';

export type LifecycleStage =
  | 'upcoming' //             application window not open yet
  | 'applications_open' //    can apply now
  | 'applications_closed' //  window closed, exam still ahead
  | 'exam_held' //            exam date passed — result pending
  | 'closed'; //              window closed, no exam (a job)

export interface LifecycleInput {
  applicationStart?: string;
  applicationDeadline?: string;
  examDate?: string;
  mainsDate?: string;
  status: LegacyStatus;
}

export interface Lifecycle {
  status: LegacyStatus;
  stage: LifecycleStage;
  label: string;
  daysToDeadline?: number;
}

function ms(iso?: string): number {
  if (!iso) return NaN;
  const t = new Date(iso).getTime();
  return t;
}

function fmt(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric', timeZone: 'Asia/Kolkata' });
}

export function deriveLifecycle(item: LifecycleInput, now: number = Date.now()): Lifecycle {
  const start = ms(item.applicationStart);
  const deadline = ms(item.applicationDeadline);
  const exam = ms(item.examDate);
  const mains = ms(item.mainsDate);

  if (!isNaN(start) && now < start) {
    return { status: 'upcoming', stage: 'upcoming', label: `Applications open ${fmt(item.applicationStart!)}` };
  }

  if (!isNaN(deadline) && now <= deadline) {
    const days = Math.ceil((deadline - now) / 86_400_000);
    return {
      status: 'open',
      stage: 'applications_open',
      label: days <= 1 ? 'Closes today' : `${days} days left to apply`,
      daysToDeadline: days,
    };
  }

  if (!isNaN(deadline) && now > deadline) {
    if (!isNaN(exam)) {
      // Exam runs through the end of its day.
      if (now > exam + 86_400_000 && !isNaN(mains) && now < mains) {
        return { status: 'closed', stage: 'applications_closed', label: `Stage 1 held — Mains ${fmt(item.mainsDate!)}` };
      }
      if (now > exam + 86_400_000) {
        return { status: 'closed', stage: 'exam_held', label: `Exam held ${fmt(item.examDate!)} — result awaited` };
      }
      return { status: 'closed', stage: 'applications_closed', label: `Applications closed — exam ${fmt(item.examDate!)}` };
    }
    return { status: 'closed', stage: 'closed', label: `Applications closed ${fmt(item.applicationDeadline!)}` };
  }

  // No usable dates: fall back to the stored status rather than inventing one.
  return { status: item.status, stage: item.status === 'open' ? 'applications_open' : 'closed', label: 'Check the official notification for dates' };
}
