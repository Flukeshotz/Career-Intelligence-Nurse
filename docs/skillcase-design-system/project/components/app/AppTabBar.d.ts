import * as React from 'react';
/**
 * Intentional addition: ported from src/components/BottomTabBar.jsx. The Figma
 * kit defines no component set for this; the shipping code is the source of truth.
 *
 * Routing, as wired in the app:
 * - Home  -> "/" (the German Practice hub is the home screen)
 * - Jobs  -> "/jobs" for A1/A2 (locked teaser) | "/job-screening" for B1/B2
 * - centre arch -> "/learn-german/recap", only in Guided German mode
 * - Coins -> not interactive
 * - Streak -> opens the streak leaderboard (an event, not a route)
 */
export interface AppTabBarProps {
  activeTab?: 'home' | 'jobs' | 'streak';
  /** Two-line caption under the arch, e.g. "German" / "words learnt", "Your A1" / "progress". */
  ringLine1?: string;
  ringLine2?: string;
  /** 0–1. Fills the semicircular dome arc. */
  ringProgress?: number;
  /** Only Guided German makes the centre tappable (-> recap). */
  ringEnabled?: boolean;
  coins?: number;
  streakDays?: number;
  /** Scholarship shell: every slot but Home is greyed out and inert. */
  lockedSlots?: boolean;
  /** Real product bitmaps: `{ home, jobs, ring, coins, streak }`. */
  icons?: { home?: string; jobs?: string; ring?: string; coins?: string; streak?: string };
  onSelect?: (tab: 'home' | 'jobs' | 'recap' | 'streak') => void;
  style?: React.CSSProperties;
}
export declare const AppTabBar: React.FC<AppTabBarProps>;
export default AppTabBar;
