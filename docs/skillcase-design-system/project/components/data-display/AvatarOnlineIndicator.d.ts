import * as React from 'react';
export interface AvatarOnlineIndicatorProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  online?: boolean;
}
export declare const AvatarOnlineIndicator: React.FC<AvatarOnlineIndicatorProps>;
export default AvatarOnlineIndicator;
