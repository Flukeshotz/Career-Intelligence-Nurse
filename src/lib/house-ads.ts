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

/** The Germany programme — wording taken from its own page (learner.skillcase.in), no added claims. */
const GERMANY: HouseAd = {
  eyebrow: 'SkillCase Germany',
  title: 'From Day 1 to Germany',
  body: 'From your first German class to your first job in Germany — one platform for the whole journey.',
  cta: 'Start Your Journey',
  href: 'https://learner.skillcase.in/start-now',
  image: '/ads/germany-placeholder.svg', // placeholder — replace with real artwork
};

export const HOUSE_ADS: Record<AdSlotId, HouseAd | null> = {
  'article-top': GERMANY,
  'article-mid': GERMANY,
  'article-bottom': GERMANY,
  sidebar: GERMANY,
};

/** Recommended artwork size per slot, shown in the empty placeholder. */
export const AD_SLOT_SIZE: Record<AdSlotId, string> = {
  'article-top': '728 × 90 · responsive',
  'article-mid': '728 × 200 · responsive',
  'article-bottom': '728 × 90 · responsive',
  sidebar: '250 × 250',
};
