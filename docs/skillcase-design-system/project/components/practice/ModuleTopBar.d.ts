import * as React from 'react';
/**
 * Intentional addition: ported from src/components/a1/ChapterSelectTemplate.jsx.
 * No Figma component set exists for the practice module chrome.
 */
export interface ModuleTopBarProps {
  /** The module's name — Flashcards, Grammar, Listening, Speaking, Reading, Test. */
  title?: string;
  onBack?: () => void;
  style?: React.CSSProperties;
}
export declare const ModuleTopBar: React.FC<ModuleTopBarProps>;
export default ModuleTopBar;
