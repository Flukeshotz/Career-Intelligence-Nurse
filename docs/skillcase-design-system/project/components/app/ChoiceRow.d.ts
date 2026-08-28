import * as React from 'react';
/**
 * Intentional addition: the onboarding option row / lesson answer row
 * (Figma 1:2129 default, 1:2123 selected), drawn as a frame not a component set.
 */
export interface ChoiceRowProps {
  /** Letter chip, A–D. */
  letter?: string;
  label?: string;
  /** Optional second line, e.g. "(I know a few words)". */
  hint?: string;
  /** `selected` is onboarding; `correct` / `incorrect` are lesson states. */
  state?: 'default' | 'selected' | 'correct' | 'incorrect';
  /** Trailing pill, e.g. "Recommended". */
  badge?: string;
  /** Hide the letter chip for rows the design shows without one. */
  showLetter?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const ChoiceRow: React.FC<ChoiceRowProps>;
export default ChoiceRow;
