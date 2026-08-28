import * as React from 'react';
/**
 * Intentional addition: the job pipeline's FIRST screen — the full-bleed navy
 * welcome shown while `current_step_id === 'welcome'`, before the progress
 * lobby. Ported from src/pages/jobScreening/components/WelcomeStep.jsx and the
 * B1/B2 job screens in Figma. No Figma component set exists for it.
 */
export interface JobWelcomeBenefit {
  /** plane = placement support, stack = recruiter access. */
  icon?: 'plane' | 'stack';
  label?: string;
}
export interface JobWelcomePanelProps {
  /** Maya bitmap, seated in the light-blue inner disc. */
  mascot?: string;
  /** Set around BOTH arcs of the seal — upright on top, inverted below. */
  seal?: string;
  title?: string;
  body?: string;
  /** Two benefits, divided by a hairline. */
  benefits?: JobWelcomeBenefit[];
  ctaLabel?: string;
  onStart?: () => void;
  onBack?: () => void;
  style?: React.CSSProperties;
}
export declare const JobWelcomePanel: React.FC<JobWelcomePanelProps>;
export default JobWelcomePanel;
