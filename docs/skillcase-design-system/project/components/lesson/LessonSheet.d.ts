import * as React from 'react';
/**
 * Intentional addition: the white task sheet shared by every lesson screen in
 * src/pages/learnGerman/lesson/screens/. No Figma component set exists for it.
 */
export interface LessonSheetProps {
  children?: React.ReactNode;
  /** Pinned to the bottom of the sheet — normally a `LessonFooter`. */
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const LessonSheet: React.FC<LessonSheetProps>;
export default LessonSheet;
