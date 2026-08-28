import * as React from 'react';
/**
 * Intentional addition: ported from src/components/NewNavbar.jsx. The Figma
 * kit defines no component set for this; the shipping code is the source of truth.
 */
export interface AppHeaderBarProps {
  /** Proficiency level shown as "{level} German Level". B1/B2 both display "B1". */
  level?: string;
  /** Second line at 70% white. Final copy: "B1 level is minimum for German jobs". */
  subtitle?: string;
  plan?: 'premium' | 'trial' | 'free';
  daysLeft?: number;
  /** Profile photo URL; omits to the grey SVG fallback. */
  avatarUrl?: string;
  /** Shows the Admin chip (admin / super_admin roles only). */
  showAdmin?: boolean;
  style?: React.CSSProperties;
}
export declare const AppHeaderBar: React.FC<AppHeaderBarProps>;
export default AppHeaderBar;
