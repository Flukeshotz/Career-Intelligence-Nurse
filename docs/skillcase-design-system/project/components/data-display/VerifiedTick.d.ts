import * as React from 'react';
export interface VerifiedTickProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
}
export declare const VerifiedTick: React.FC<VerifiedTickProps>;
export default VerifiedTick;
