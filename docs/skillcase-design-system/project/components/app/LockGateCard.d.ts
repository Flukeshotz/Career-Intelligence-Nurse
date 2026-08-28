import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/jobs/JobsLockedPage.jsx. No Figma
 * component set exists for it.
 */
export interface LockGateCardProps {
  /** The 96px illustration (the app uses assets/bag.webp). */
  image?: string;
  /** Shown in the pill: "You are currently at {level} German level". */
  level?: 'A1' | 'A2';
  title?: string;
  body?: string;
  ctaLabel?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}
export declare const LockGateCard: React.FC<LockGateCardProps>;
export default LockGateCard;
