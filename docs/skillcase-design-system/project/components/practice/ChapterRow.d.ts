import * as React from 'react';
/**
 * Intentional addition: ported from src/components/a1/ChapterSelectTemplate.jsx.
 * No Figma component set exists for it.
 */
export interface ChapterRowProps {
  name?: string;
  completed?: number;
  total?: number;
  /**
   * Chapter gating. Renders at 50% opacity, per
   * src/components/a1/ChapterSelectTemplate.jsx.
   *
   * NOTE: this is NOT the same as a usage-limit lock, contrary to what these
   * docs previously claimed. ExamSelect dims a usage-locked row to 60% and
   * keeps it tappable-looking; chapter gating uses 50%. The two values are a
   * genuine (and probably accidental) divergence in production — flagged to
   * engineering, deliberately not normalised here.
   */
  locked?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const ChapterRow: React.FC<ChapterRowProps>;
export default ChapterRow;
