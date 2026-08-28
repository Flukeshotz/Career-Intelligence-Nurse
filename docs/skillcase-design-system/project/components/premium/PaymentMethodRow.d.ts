import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/payments/UpgradePlanPage.jsx.
 * No Figma component set exists for it.
 */
export interface PaymentMethodRowProps {
  /** Picks the icon well's glyph. */
  method?: 'razorpay' | 'upi' | 'card' | 'netbanking' | 'wallet';
  label?: string;
  hint?: string;
  selected?: boolean;
  onSelect?: () => void;
  style?: React.CSSProperties;
}
export declare const PaymentMethodRow: React.FC<PaymentMethodRowProps>;
export default PaymentMethodRow;
