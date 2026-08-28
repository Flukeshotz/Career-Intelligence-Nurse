import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/jobScreening/JobScreening.jsx
 * (the progress lobby). No Figma component set exists for it.
 */
export interface JobProgressHeaderProps {
  /** The active step's subtitle from STEP_DESCRIPTIONS, printed after "Next step - ". */
  nextStep?: string;
  completed?: number;
  /** Excludes the paywall step and anything skipped, as the app does. */
  total?: number;
  style?: React.CSSProperties;
}
export declare const JobProgressHeader: React.FC<JobProgressHeaderProps>;
export default JobProgressHeader;
