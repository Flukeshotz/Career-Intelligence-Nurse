import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/jobs/JobsLockedPage.jsx and
 * src/pages/landing/components/JobCard.jsx. No Figma component set exists for it.
 */
export interface JobListingCardProps {
  title?: string;
  /** Rendered in the outlined pin chip beside the title. */
  location?: string;
  org?: string;
  /** Icon+label facts row: salary, required language level, contract type. */
  facts?: string[];
  /** Below B1 the CTA is the disabled "Complete German B1 to Apply" bar. */
  locked?: boolean;
  ctaLabel?: string;
  onApply?: () => void;
  style?: React.CSSProperties;
}
export declare const JobListingCard: React.FC<JobListingCardProps>;
export default JobListingCard;
