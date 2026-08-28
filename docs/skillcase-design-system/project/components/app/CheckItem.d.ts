import * as React from 'react';
/**
 * Intentional addition: ported from src/components/ui/CheckItem.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface CheckItemProps {
  /** `dark` is for navy panels (gold tick, 80% white copy). */
  variant?: 'light' | 'dark' | 'accent';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const CheckItem: React.FC<CheckItemProps>;
export default CheckItem;
