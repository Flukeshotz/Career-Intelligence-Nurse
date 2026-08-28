import * as React from 'react';
export interface TooltipProps {
  className?: string;
  style?: React.CSSProperties;
  text?: string;
  supportingText?: boolean;
  arrow?: "none" | "bottom left" | "bottom right" | "left" | "right" | "bottom center" | "top center";
  /** Text content; defaults to "Tooltips are used to describe or identify an  element. In most scenarios, tooltips help the user understand meaning, function or alt-text.". */
  text1?: string;
}
export declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
