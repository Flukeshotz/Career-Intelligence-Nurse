import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/payments/UpgradePlanPage.jsx.
 * No Figma component set exists for it.
 */
export interface PlanSummaryCardProps {
  title?: string;
  cadence?: string;
  features?: string[];
  /** The 96px diamond bitmap. */
  image?: string;
  fee?: string;
  total?: string;
  style?: React.CSSProperties;
}
export declare const PlanSummaryCard: React.FC<PlanSummaryCardProps>;
export default PlanSummaryCard;
