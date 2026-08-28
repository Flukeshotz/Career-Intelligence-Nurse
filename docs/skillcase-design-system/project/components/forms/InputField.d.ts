import * as React from 'react';
export interface InputFieldProps {
  className?: string;
  style?: React.CSSProperties;
  iconLeading?: boolean;
  iconSwap?: React.ReactNode;
  label?: boolean;
  size?: "sm" | "md";
  required?: boolean;
  hintText?: boolean;
  type?: "default" | "leading dropdown" | "trailing dropdown" | "leading text" | "payment input" | "tags" | "trailing button";
  state?: "placeholder" | "filled" | "focused" | "disabled";
  helpIcon?: boolean;
  destructive?: boolean;
  /** Text content; defaults to "Email". */
  text1?: string;
  /** Text content; defaults to "*". */
  text2?: string;
  /** Text content; defaults to "olivia@untitledui.com". */
  text3?: string;
  /** Text content; defaults to "This is a hint text to help user.". */
  text4?: string;
  /** Swappable nested instance; defaults to the design's. */
  icon1?: React.ReactNode;
  /** Swappable nested instance; defaults to the design's. */
  icon2?: React.ReactNode;
}
export declare const InputField: React.FC<InputFieldProps>;
export default InputField;
