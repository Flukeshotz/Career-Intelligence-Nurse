import * as React from 'react';
/**
 * Intentional addition: the lettered answer row from QuizScreen.jsx,
 * ListenAndChooseScreen.jsx and MatchFollowingScreen.jsx. No Figma component
 * set exists for it.
 */
export interface OptionRowProps {
  label?: string;
  /** A · B · C · D. Omit for the right-hand column of match-the-following. */
  letter?: string;
  /** `matched` renders the correct palette at 40% opacity and is not clickable. */
  state?: 'default' | 'selected' | 'correct' | 'incorrect' | 'matched';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const OptionRow: React.FC<OptionRowProps>;
export default OptionRow;
