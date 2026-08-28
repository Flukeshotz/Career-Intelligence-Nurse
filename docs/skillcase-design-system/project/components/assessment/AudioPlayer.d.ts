import * as React from 'react';
/**
 * Intentional addition: ported from
 * src/pages/b1/describe-speak/components/AudioPlayer.jsx, also imported by
 * ExamSpeakingWorkspace and ExamSpeakingResults. No Figma component set exists.
 *
 * Production takes a `formatSeconds` function from timeUtils; this port
 * formats internally (m:ss) since the helper is not part of the design system.
 */
export interface AudioPlayerProps {
  playing?: boolean;
  /** Seconds elapsed. */
  time?: number;
  /** Seconds total. */
  duration?: number;
  label?: string;
  onPlayPause?: () => void;
  variant?: 'workspace' | 'review';
  style?: React.CSSProperties;
}
export declare const AudioPlayer: React.FC<AudioPlayerProps>;
export default AudioPlayer;
