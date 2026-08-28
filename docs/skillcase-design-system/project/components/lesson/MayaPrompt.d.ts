import * as React from 'react';
/**
 * Intentional addition: Maya's lesson dialogue bubble, built from
 * src/pages/learnGerman/lesson/screens/* (shared/MayaDialogueBubble.jsx plus
 * the per-screen layout). No Figma component set exists for it.
 */
export interface MayaPromptProps {
  text?: string;
  /** Maya bitmap — mayaLooking on task screens, mayaThumbsup on intro/outro. */
  image?: string;
  /** `side` = the row above the sheet. `hero` = centred bubble over a large Maya. */
  variant?: 'side' | 'hero';
  /** Shows "tap to continue" under a hero bubble mid-monologue. */
  tapHint?: boolean;
  style?: React.CSSProperties;
}
export declare const MayaPrompt: React.FC<MayaPromptProps>;
export default MayaPrompt;
