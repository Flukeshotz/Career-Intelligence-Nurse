import * as React from 'react';
/**
 * Intentional addition: ported from the `paywall` branch of
 * src/pages/jobScreening/JobScreening.jsx. Not the premium subscription
 * paywall — this deposit is refundable and gates placement, not features.
 * No Figma component set exists for it.
 */
export interface DepositGateCardProps {
  /** Maya bitmap — the app uses mayaSmiling. */
  mascot?: string;
  message?: string;
  /** The deposit, as displayed (e.g. "₹10,000"). */
  amount?: string;
  note?: string;
  supportPhone?: string;
  onPay?: () => void;
  style?: React.CSSProperties;
}
export declare const DepositGateCard: React.FC<DepositGateCardProps>;
export default DepositGateCard;
