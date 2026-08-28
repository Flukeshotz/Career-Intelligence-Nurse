import * as React from 'react';
/**
 * Intentional addition: no production counterpart — production has no
 * announcement layer at all, which is the gap this closes
 * (guidelines/defects.md, P3 "Busy and error states are not announced").
 * Justified as a required accessibility standard, not as extracted evidence.
 * One region per screen, owned by the template: two simultaneous live regions
 * interrupt each other. See guidelines/decisions.md D-028.
 */
export interface LiveRegionProps {
  /** The text to announce. Changing it re-announces; setting it to '' is silent. */
  message?: string;
  /** 'assertive' interrupts — errors that block the task only. Default 'polite'. */
  politeness?: 'polite' | 'assertive';
  style?: React.CSSProperties;
}
export declare function LiveRegion(props: LiveRegionProps): React.JSX.Element;
export default LiveRegion;
