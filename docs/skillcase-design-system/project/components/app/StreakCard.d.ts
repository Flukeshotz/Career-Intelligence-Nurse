import * as React from 'react';
/**
 * Intentional addition: ported from src/components/StreakWidget.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface StreakCardProps {
  /** Current day streak. */
  streak?: number;
  /** Points earned today. */
  todayPoints?: number;
  /** The user's daily points goal (20 by default in production). */
  dailyGoal?: number;
  /** Resume affordance label; pass "" to hide the button. */
  resumeLabel?: string;
  onResume?: () => void;
  onInfo?: () => void;
  style?: React.CSSProperties;
}
export declare const StreakCard: React.FC<StreakCardProps>;
export default StreakCard;
