import * as React from 'react';
export interface ModeRailItem {
  /** First line of the label. */
  line1: string;
  /** Optional second line — present, the label left-aligns. */
  line2?: string;
  /** URL of the tab's 36×24 illustration (book.webp, mayaSmiling.webp, class.webp, bag.webp). */
  image?: string;
}
/**
 * Intentional addition: ported from src/components/TopModeSwitcher.jsx. The Figma
 * kit defines no component set for this; the shipping code is the source of truth.
 */
export interface ModeRailProps {
  /** Defaults to Guided German · German Practice · German Classes. */
  items?: ModeRailItem[];
  activeIndex?: number;
  onSelect?: (index: number) => void;
  style?: React.CSSProperties;
}
export declare const ModeRail: React.FC<ModeRailProps>;
export default ModeRail;
