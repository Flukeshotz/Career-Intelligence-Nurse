import * as React from 'react';
/**
 * Intentional addition: ported from src/components/UsageLimitModal.jsx. No
 * Figma component set exists for it.
 */
export interface PremiumPriceCardProps {
  price?: string;
  period?: string;
  /** Entitlement rows; each reads "Unlimited" with a green tick. */
  features?: string[];
  /** The gradient "Premium Plan" tab above the well. Hard-locked features drop it. */
  capped?: boolean;
  style?: React.CSSProperties;
}
export declare const PremiumPriceCard: React.FC<PremiumPriceCardProps>;
export default PremiumPriceCard;
