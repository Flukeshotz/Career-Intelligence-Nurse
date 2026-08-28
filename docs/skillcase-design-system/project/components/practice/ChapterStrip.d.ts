import * as React from 'react';
/**
 * Intentional addition: ported from src/components/a1/ChapterSelectTemplate.jsx.
 * No Figma component set exists for it.
 */
export interface ChapterStripItem {
  id?: string | number;
  /** Printed as "Ch. n"; falls back to the array position. */
  number?: number;
  completed?: number;
  total?: number;
  locked?: boolean;
}
export interface ChapterStripProps {
  chapters?: ChapterStripItem[];
  onSelect?: (chapter: ChapterStripItem) => void;
  style?: React.CSSProperties;
}
export declare const ChapterStrip: React.FC<ChapterStripProps>;
export default ChapterStrip;
