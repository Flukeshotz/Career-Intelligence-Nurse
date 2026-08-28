import * as React from 'react';
/**
 * Intentional addition: ported from src/components/ui/Button.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface AppButtonProps {
  /** Colour treatment. `primary` = gold on navy text (the app's main CTA). */
  variant?: 'primary' | 'secondary' | 'dark' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  /** Pill instead of the default 8px radius. */
  rounded?: boolean;
  /** Leading icon node — the app passes a lucide-react glyph. */
  icon?: React.ReactNode;
  disabled?: boolean;
  /**
   * Submitting. Production does NOT dim the button — it replaces the brand fill
   * with a pulsing blue and blocks input. Identical treatment in
   * A1Flashcard, A2Flashcard, B1Flashcard, A1TestQuestions, A2TestQuestions.
   */
  busy?: boolean;
  /** Force a visual state for specimens. Runtime uses real CSS states. */
  state?: 'default' | 'hover' | 'active';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const AppButton: React.FC<AppButtonProps>;
export default AppButton;
