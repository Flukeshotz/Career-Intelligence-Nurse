import * as React from 'react';
/**
 * Intentional addition: the tap-to-listen button plus its sonar rings and
 * handtap affordance, from VocabScreen / QuizScreen / GrammarScreen /
 * ListenAndChooseScreen. No Figma component set exists for it.
 */
export interface AudioTapButtonProps {
  /** 40 (quiz), 48 (vocab), 52 (listen-and-choose), 80 (grammar hero). */
  size?: number;
  /** While playing, the rings and hand hide and the waveform animates. */
  playing?: boolean;
  /** The handtap bitmap; omit once the user has learnt the affordance. */
  hand?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const AudioTapButton: React.FC<AudioTapButtonProps>;
export default AudioTapButton;
