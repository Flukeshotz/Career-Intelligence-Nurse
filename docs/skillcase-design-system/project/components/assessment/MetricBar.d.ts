import * as React from 'react';
/**
 * Intentional addition: ported from
 * src/pages/b1/describe-speak/components/MetricBar.jsx, already imported by the
 * exam results screens. No Figma component set exists for it.
 */
export interface MetricBarProps {
  label?: string;
  score?: number;
  /** `compact` (6px track) is the success/review form; `workspace` is 12px. */
  variant?: 'workspace' | 'compact';
  /**
   * Defaults to describe-speak's 70/40 scale (`scoreScales.canonical`). NOTE: the exam results screens
   * render this component at 70/40 while their surrounding chrome uses 75/50,
   * so one screen shows two scales — see guidelines/scoring-kit.html.
   */
  bands?: { good: number; mid: number };
  style?: React.CSSProperties;
}
export declare const MetricBar: React.FC<MetricBarProps>;
export default MetricBar;
