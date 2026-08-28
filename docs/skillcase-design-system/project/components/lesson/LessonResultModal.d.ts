import * as React from 'react';
/**
 * Intentional addition: ported from
 * src/pages/learnGerman/lesson/screens/shared/QuizResultModal.jsx (and its
 * drag sibling DragResultModal.jsx). No Figma component set exists for it.
 */
export interface LessonResultModalProps {
  correct?: boolean;
  /** The right answer, printed in bold on the correct state. */
  answer?: string;
  /** What the learner actually picked; falls back to `answer`. */
  selected?: string;
  onPrimary?: () => void;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare const LessonResultModal: React.FC<LessonResultModalProps>;
export default LessonResultModal;
