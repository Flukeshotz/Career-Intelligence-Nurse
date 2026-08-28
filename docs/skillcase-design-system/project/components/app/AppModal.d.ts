import * as React from 'react';
/**
 * Intentional addition: ported from src/components/PaywallBlocker.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface AppModalProps {
  /** URL of the Maya portrait shown in the 80px circle well (#a2c5f2). */
  mascot?: string;
  onClose?: () => void;
  /** The Figma only exposes the X for dismissal on limit modals. */
  showClose?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const AppModal: React.FC<AppModalProps>;
export default AppModal;
