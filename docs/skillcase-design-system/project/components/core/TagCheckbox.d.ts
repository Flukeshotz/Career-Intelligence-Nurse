import * as React from 'react';
export interface TagCheckboxProps {
  className?: string;
  style?: React.CSSProperties;
  checked?: boolean;
  size?: "sm" | "md" | "lg";
  state?: "default" | "hover" | "focused" | "disbaled";
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const TagCheckbox: React.FC<TagCheckboxProps>;
export default TagCheckbox;
