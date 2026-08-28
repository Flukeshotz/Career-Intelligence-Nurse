import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/payments/TrialOfferPage.jsx
 * (DarkFeatureRows). No Figma component set exists for it.
 */
export interface DarkFeatureListProps {
  features?: string[];
  /** The black/60 tab + black/30 well around the rows. */
  capped?: boolean;
  label?: string;
  style?: React.CSSProperties;
}
export declare const DarkFeatureList: React.FC<DarkFeatureListProps>;
export default DarkFeatureList;
