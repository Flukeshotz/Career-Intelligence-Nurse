import * as React from 'react';
export interface ButtonsButtonProps {
  className?: string;
  style?: React.CSSProperties;
  iconLeading?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
  iconTrailing?: boolean;
  iconLeadingSwap?: React.ReactNode;
  loadingText?: boolean;
  hierarchy?: "primary" | "secondary" | "tertiary" | "link color" | "link gray";
  iconTrailingSwap?: React.ReactNode;
  iconOnly?: boolean;
  state?: "default" | "hover" | "focused" | "disabled" | "loading";
  /** Text content; defaults to "Button CTA". */
  text1?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
}
export declare const ButtonsButton: React.FC<ButtonsButtonProps>;
export default ButtonsButton;
