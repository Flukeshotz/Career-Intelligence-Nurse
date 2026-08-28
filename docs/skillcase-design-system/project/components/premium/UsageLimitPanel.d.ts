import * as React from 'react';
/**
 * Intentional addition: ported from src/components/UsageLimitModal.jsx. No
 * Figma component set exists for it.
 */
export interface UsageLimitPanelProps {
  /**
   * limit   — a free allowance is spent; sad Maya, hourglass, live countdown.
   * premium — the feature is premium-only; lock chip, no countdown.
   * expired — the countdown ran out; no pricing, one Continue.
   */
  state?: 'limit' | 'premium' | 'expired';
  /** mayaSad on `limit`, mayaLooking on `premium` and `expired`. */
  mascot?: string;
  /** The hourglass bitmap, pinned to Maya's well on `limit` only. */
  timer?: string;
  /** Which allowance was hit: "today's", "this week's", "this month's". */
  period?: string;
  countdown?: string;
  price?: string;
  features?: string[];
  supportPhone?: string;
  onUpgrade?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare const UsageLimitPanel: React.FC<UsageLimitPanelProps>;
export default UsageLimitPanel;
