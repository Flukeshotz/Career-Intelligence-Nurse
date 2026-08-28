import * as React from 'react';
/**
 * Intentional addition: ported from src/components/ui/Badge.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface AppBadgeProps {
  variant?: 'success' | 'warning' | 'neutral';
  /** Adds the status dot (the app animates it with a ping). */
  dot?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const AppBadge: React.FC<AppBadgeProps>;
export default AppBadge;
