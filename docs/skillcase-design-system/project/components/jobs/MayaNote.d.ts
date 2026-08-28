import * as React from 'react';
/**
 * Intentional addition: the "Please note" strip repeated across every job
 * pipeline waiting/review/scheduling screen. No Figma component set exists for
 * it — it is drawn as a frame.
 */
export interface MayaNoteProps {
  mascot?: string;
  text?: string;
  /** The bold lead-in; "Please note" everywhere in the shipped flow. */
  label?: string;
  style?: React.CSSProperties;
}
export declare const MayaNote: React.FC<MayaNoteProps>;
export default MayaNote;
