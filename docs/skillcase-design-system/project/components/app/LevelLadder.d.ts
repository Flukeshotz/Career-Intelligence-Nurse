import * as React from 'react';
/**
 * Intentional addition: ported from src/pages/landing/components/LevelProgress.jsx.
 * The Figma kit has no component set for the A1→B2 ladder; the shipping code is
 * the source of truth.
 */
export interface LevelLadderProps {
  /** The user's `user_prof_level`. B2 fills the whole ladder. */
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  /** 0–100. Only read in the `dynamic` variant. */
  progress?: number;
  /** Slate track + green fill + percentage labels + live amber ball. */
  dynamic?: boolean;
  style?: React.CSSProperties;
}
export declare const LevelLadder: React.FC<LevelLadderProps>;
export default LevelLadder;
