import * as React from 'react';
export interface TagCloseXProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  state?: "default" | "hover";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TagCloseX: React.FC<TagCloseXProps>;
export default TagCloseX;
