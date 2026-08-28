import * as React from 'react';
export interface TagCountProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  /** Text content; defaults to "5". */
  text1?: string;
}
export declare const TagCount: React.FC<TagCountProps>;
export default TagCount;
