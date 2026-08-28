import * as React from 'react';
/**
 * Intentional addition: ported from
 * src/pages/learnGerman/lesson/screens/shared/ProgressBar.jsx. No Figma
 * component set exists for the lesson chrome.
 */
export interface LessonProgressBarProps {
  title?: string;
  /** 0–1, computed as screenIndex / totalScreens. */
  progress?: number;
  /** Omit to hide the back box (most screens have no back affordance). */
  onBack?: () => void;
  /** Conversation screens hide the bar's percentage and track. */
  hideProgress?: boolean;
  style?: React.CSSProperties;
}
export declare const LessonProgressBar: React.FC<LessonProgressBarProps>;
export default LessonProgressBar;
