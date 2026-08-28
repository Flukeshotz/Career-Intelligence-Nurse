import * as React from 'react';
/**
 * Intentional addition: ported from src/components/a1/ChapterSelectTemplate.jsx.
 * No Figma component set exists for it.
 */
export interface LevelHeroProps {
  level?: 'A1' | 'A2' | 'B1' | 'B2';
  /** The module's own line, e.g. "Build A1 vocabulary with image-first memory cards". */
  subtitle?: string;
  /** The header photo (assets/img/headerBackground.webp in the app). */
  image?: string;
  /** Normally a `ChapterStrip`. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const LevelHero: React.FC<LevelHeroProps>;
export default LevelHero;
