import * as React from 'react';
/**
 * Intentional addition: the German Practice grid tile from the live practice
 * hub. The Figma kit defines no component set for this.
 */
export interface PracticeTileProps {
  /** e.g. Flashcards · Grammar · Listening · Speaking · Reading · Test · News. */
  title?: string;
  /** One-line description under the title, at 10px grey. */
  caption?: string;
  /** URL of the tile's photo strip. */
  image?: string;
  locked?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare const PracticeTile: React.FC<PracticeTileProps>;
export default PracticeTile;
