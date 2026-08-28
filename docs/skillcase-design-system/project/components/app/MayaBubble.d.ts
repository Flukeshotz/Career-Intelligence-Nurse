import * as React from 'react';
/**
 * Intentional addition: Maya's speech bubble, drawn as a frame in Figma rather
 * than a component set. Used across onboarding, the journey and every lesson.
 */
export interface MayaBubbleProps {
  /** Maya's line. Poppins Medium 17 at 100% line-height. */
  text?: string;
  /** URL of the Maya render (maya-wave-head.png, mayaSmiling.webp, …). */
  image?: string;
  /** Which side Maya stands on; the tail follows her. */
  side?: 'left' | 'right';
  avatarSize?: number;
  /** Fixed bubble width when the design pins one (e.g. 138 in onboarding). */
  bubbleWidth?: number;
  style?: React.CSSProperties;
}
export declare const MayaBubble: React.FC<MayaBubbleProps>;
export default MayaBubble;
