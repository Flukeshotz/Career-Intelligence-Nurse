import * as React from 'react';
/**
 * Intentional addition: the pre-interview / pre-training briefing block from
 * the job pipeline. No Figma component set exists for it.
 */
export interface PointsToRememberItem { label?: string; hint?: string }
export interface PointsToRememberProps {
  title?: string;
  /** The status chip beside the heading; pass "" to drop it. */
  chip?: string;
  items?: PointsToRememberItem[];
  style?: React.CSSProperties;
}
export declare const PointsToRemember: React.FC<PointsToRememberProps>;
export default PointsToRemember;
