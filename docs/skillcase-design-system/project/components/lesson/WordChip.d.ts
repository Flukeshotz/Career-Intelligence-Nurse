import * as React from 'react';
/**
 * Intentional addition: the unjumble / match-image word pill, from
 * UnjumbleScreen.jsx and shared/DraggablePill.jsx. No Figma component set
 * exists for it.
 */
export interface WordChipProps {
  label?: string;
  /** bank → placed → correct/incorrect; `spent` is the bank placeholder. */
  state?: 'bank' | 'placed' | 'spent' | 'correct' | 'incorrect' | 'dragging';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const WordChip: React.FC<WordChipProps>;
export default WordChip;
