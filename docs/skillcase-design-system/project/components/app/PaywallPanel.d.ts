import * as React from 'react';
/**
 * Intentional addition: ported from src/components/PaywallBlocker.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface PaywallPanelProps {
  /** Uppercase pill above the headline, e.g. "Learning plan locked". */
  eyebrow?: string;
  title?: string;
  /** Localised price string as the app renders it, e.g. "₹99". */
  price?: string;
  period?: string;
  /** Entitlement rows; each renders "<feature> · Unlimited ✓". */
  features?: string[];
  ctaLabel?: string;
  secondaryLabel?: string;
  footnote?: string;
  loading?: boolean;
  onCta?: () => void;
  onSecondary?: () => void;
  style?: React.CSSProperties;
}
export declare const PaywallPanel: React.FC<PaywallPanelProps>;
export default PaywallPanel;
