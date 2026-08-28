import * as React from 'react';
export interface AvatarProps {
  className?: string;
  style?: React.CSSProperties;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  placeholder?: boolean;
  statusIcon?: "false" | "online indicator" | "company" | "verified";
  text?: boolean;
  /** Text content; defaults to "OR". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
