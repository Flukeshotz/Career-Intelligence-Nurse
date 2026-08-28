import * as React from 'react';
export interface SectionDividerProps {
  className?: string;
  style?: React.CSSProperties;
  breakpoint?: "desktop" | "mobile";
}
export declare const SectionDivider: React.FC<SectionDividerProps>;
export default SectionDivider;
