/**
 * INTERNAL ONLY — curator audit commentary. Never import this from a client component or render it
 * to customers; it is deliberately kept out of verification.ts, which ships in the browser bundle.
 */

export const INTERNAL_NOTES: Record<string, string> = {
  'exam-norcet-2026':
    'Confirmed 2,218 posts; 24 Jul–13 Aug; Prelims 12 Sep; Mains 30 Sep. officialNotificationUrl is the AIIMS portal homepage — replace with the deep link to the advertisement.',
  'exam-rrb-nurse-2026':
    'Corrected from 713 posts / 16 Sep / 20 Nov. Real: CEN 05/2026, 365 Nursing Superintendent posts, 15 Sep–14 Oct, exam date not announced.',
  'exam-pgimer-no-2026': 'Corrected from 195 posts / 28 Sep / 22 Nov. Real: 243 posts, 10 Sep–3 Oct 2026, single 100-mark online exam.',
  'exam-osssc-nurse-2026':
    'Corrected from 7,483 posts / 25 Sep / 22 Nov. Real: 5,989 posts, exam 22–23 Sep. Sources disagree on the closing date (7 Jul / 27 Jul / 16 Aug, "extended") — 16 Aug used as the latest reported.',
  'exam-mp-esb-nurse-2026': 'Corrected from 1,850 posts / 30 Sep. Real: 2,317 posts incl. 218 Sister Tutor (2,099 Nursing Officer), 6–20 Apr, CBT from 15 May.',
  'exam-ukmssb-nurse-2026': 'Corrected from 1,455 posts / 24 Sep. Real: 196 posts, 12 Jun–2 Jul 2026.',
  'exam-hssc-har-nurse-2026': 'Corrected from 1,554 posts / 22 Sep. Real: 1,803 posts, 9–23 Feb 2026, correction window 16–19 Mar.',
  'exam-ap-mhsrb-nurse-2026': 'Corrected from 1,680 posts / 25 Sep. Real: Notification 10/2026, 419 Staff Nurse (529 incl. Pharmacist and MRW), 13–30 Jun 2026.',
};

export function getInternalNote(id: string): string | undefined {
  return INTERNAL_NOTES[id];
}
