import * as React from 'react';
export interface TagProps {
  className?: string;
  style?: React.CSSProperties;
  flagSwap?: React.ReactNode;
  size?: "sm" | "md" | "lg";
  icon?: "false" | "country" | "avatar" | "dot";
  checkbox?: boolean;
  action?: "x close" | "text only" | "count";
  /** Text content; defaults to "Label". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon3?: React.ReactNode;
}
export declare const Tag: React.FC<TagProps>;
export default Tag;
