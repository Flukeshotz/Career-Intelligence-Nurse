import * as React from 'react';
/**
 * Intentional addition: the advance row shared by every lesson screen in
 * src/pages/learnGerman/lesson/screens/. No Figma component set exists for it.
 */
export interface LessonFooterProps {
  /** Continue · Next · Check · "Got it!" — the label is per screen type. */
  primaryLabel?: string;
  onPrimary?: () => void;
  /** Quiz/listen/unjumble keep the CTA grey until an answer is placed. */
  disabled?: boolean;
  showPrev?: boolean;
  onPrev?: () => void;
  /** A secondary text link above the row, e.g. "Can't listen now". */
  aside?: string;
  style?: React.CSSProperties;
}
export declare const LessonFooter: React.FC<LessonFooterProps>;
export default LessonFooter;
