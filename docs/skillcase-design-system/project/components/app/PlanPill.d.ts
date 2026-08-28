import * as React from 'react';
/**
 * Intentional addition: ported from src/components/NewNavbar.jsx. The Figma
 * kit defines no component set for this; the shipping code is the source of truth.
 */
export interface PlanPillProps {
  /** `premium` (Gem), `trial` (countdown ring), `free` (Gift) — the app's three states. */
  plan?: 'premium' | 'trial' | 'free';
  /** Days remaining, shown inside the trial ring. */
  daysLeft?: number;
  /** Trial length the ring is measured against (7 in production). */
  trialLength?: number;
  style?: React.CSSProperties;
}
export declare const PlanPill: React.FC<PlanPillProps>;
export default PlanPill;
