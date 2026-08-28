import * as React from 'react';
export interface HelpIconProps {
  className?: string;
  style?: React.CSSProperties;
  cursor?: boolean;
  open?: boolean;
  supportingText?: boolean;
  tooltip?: "top no arrow" | "top arrow" | "left" | "top left" | "bottom" | "right" | "top right";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const HelpIcon: React.FC<HelpIconProps>;
export default HelpIcon;
