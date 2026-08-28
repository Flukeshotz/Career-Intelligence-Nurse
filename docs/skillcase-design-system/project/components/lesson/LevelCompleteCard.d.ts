import * as React from 'react';
/**
 * Intentional addition: ported from
 * src/pages/learnGerman/lesson/screens/LevelCompleteModal.jsx. No Figma
 * component set exists for it.
 */
export interface LevelCompleteCardProps {
  title?: string;
  /** Maya's closing line; typewritten in the app. */
  dialogue?: string;
  /** Maya bitmap, standing in the two white discs. */
  mascot?: string;
  coinIcon?: string;
  streakIcon?: string;
  flagIcon?: string;
  coins?: number;
  /** Hides the streak row entirely when the lesson did not extend the streak. */
  streakUpdated?: boolean;
  vocabCount?: number;
  ctaLabel?: string;
  onContinue?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare const LevelCompleteCard: React.FC<LevelCompleteCardProps>;
export default LevelCompleteCard;
