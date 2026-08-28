import * as React from 'react';
/**
 * Intentional addition: ported from
 * src/pages/b1/describe-speak/components/ScoreRing.jsx, which the four exam
 * results screens already import — reuse is proven in production, not inferred.
 * No Figma component set exists for it.
 */
export interface ScoreRingProps {
  score?: number;
  /** The 8px caption under the percentage, e.g. "overall writing accuracy". */
  label?: string;
  circleSize?: number;
  strokeWidth?: number;
  /**
   * Band thresholds. Defaults to describe-speak's scale, `{good:70, mid:40}`.
   * Pass `{good:75, mid:50}` to reproduce the exam screens' fork. The named
   * scales live in scoreBands.js as `scoreScales` (bundle-internal by design —
   * a threshold table is data, not a component).
   */
  bands?: { good: number; mid: number };
  style?: React.CSSProperties;
}
export declare const ScoreRing: React.FC<ScoreRingProps>;
export default ScoreRing;
