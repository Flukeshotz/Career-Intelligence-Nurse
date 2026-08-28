import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/jobScreening/JobScreening.jsx
 * (the lobby's timeline checklist). No Figma component set exists for it.
 */
export interface JobStepCardProps {
  /** Shown inside the node when the step is active or in review. */
  index?: number;
  title?: string;
  /** The step's line from STEP_DESCRIPTIONS. */
  description?: string;
  status?: 'done' | 'pending' | 'review' | 'locked';
  /** The server's `button_title`, when it overrides the default. */
  buttonLabel?: string;
  /** Drops the connector rule on the last row. */
  last?: boolean;
  onStart?: () => void;
  style?: React.CSSProperties;
}
export declare const JobStepCard: React.FC<JobStepCardProps>;
export default JobStepCard;
