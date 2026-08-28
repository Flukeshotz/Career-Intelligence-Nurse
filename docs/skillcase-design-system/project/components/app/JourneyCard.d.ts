import * as React from 'react';
/**
 * Intentional addition: the Guided German level card from the live
 * /learn-german journey. The Figma kit defines no component set for this.
 */
export interface JourneyCardProps {
  /** Level title, e.g. "At the Airport Entrance". */
  title?: string;
  /** Grey status pill, e.g. "Level 1 completed". */
  status?: string;
  /** URL of the level's 3D isometric scene bitmap. */
  image?: string;
  state?: 'completed' | 'current' | 'locked';
  /** Wide button label — "Recap" once done, "Start" / "Continue" otherwise. */
  primaryLabel?: string;
  onPrimary?: () => void;
  onRestart?: () => void;
  style?: React.CSSProperties;
}
export declare const JourneyCard: React.FC<JourneyCardProps>;
export default JourneyCard;
