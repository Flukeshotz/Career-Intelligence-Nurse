import * as React from 'react';
export interface DotProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "sm" | "md" | "lg";
  outline?: boolean;
}
export declare const Dot: React.FC<DotProps>;
export default Dot;
