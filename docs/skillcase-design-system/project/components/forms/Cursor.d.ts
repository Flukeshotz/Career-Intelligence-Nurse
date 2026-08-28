import * as React from 'react';
export interface CursorProps {
  className?: string;
  style?: React.CSSProperties;
  type?: "default" | "text cursor" | "text cursor custom" | "plus" | "hand point" | "hand grab" | "hand open" | "zoom in" | "zoom out" | "move" | "help" | "resize left" | "resize down" | "resize right" | "resize up" | "resize left-right" | "resize up-down" | "resize diagonal 01" | "resize diagonal 02" | "resize horizontal" | "resize vertical" | "resize single top-left" | "resize single left" | "resize single bottom-left" | "resize single down" | "resize single bottom-right" | "resize single right" | "resize single top-right" | "resize single up";
}
export declare const Cursor: React.FC<CursorProps>;
export default Cursor;
