/**
 * House ads — promotions for SkillCase's own programmes (first: the Germany programme for nurses),
 * shown in a fixed slot on every page.
 *
 * To run an ad, fill in its slot below. A slot set to `null` shows a neutral "advertisement space"
 * placeholder, so the layout is visible before any campaign is ready.
 *
 * Keep ads honest: no invented results, prices or guarantees — nurses read these pages to decide.
 */
export type AdSlotId = 'article-top' | 'article-mid' | 'article-bottom' | 'sidebar';

export interface HouseAd {
  /** Small label above the title, e.g. "SkillCase German". */
  eyebrow?: string;
  title: string;
  body: string;
  cta: string;
  href: string;
  /** Optional image in /public, e.g. '/ads/german-course.webp'. */
  image?: string;
}

export const HOUSE_ADS: Record<AdSlotId, HouseAd | null> = {
  'article-top': null,
  'article-mid': null,
  'article-bottom': null,
  sidebar: null,
  // Example:
  // 'article-mid': {
  //   eyebrow: 'SkillCase German',
  //   title: 'Planning to work as a nurse in Germany?',
  //   body: 'Learn German for nursing with guided daily lessons.',
  //   cta: 'Start learning',
  //   href: 'https://…',
  // },
};

/** Recommended artwork size per slot, shown in the empty placeholder. */
export const AD_SLOT_SIZE: Record<AdSlotId, string> = {
  'article-top': '728 × 90 · responsive',
  'article-mid': '728 × 200 · responsive',
  'article-bottom': '728 × 90 · responsive',
  sidebar: '250 × 250',
};
