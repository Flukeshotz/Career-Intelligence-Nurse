import * as React from 'react';
/**
 * Intentional addition: extracted from repeated production markup. The `row`
 * variant appears in src/pages/b1/exams/PaperSelect.jsx,
 * b1/read-listen/ReadListenTopicSelect.jsx,
 * b1/describe-speak/DescribeSpeakSelect.jsx and pages/interviewSelect.jsx; the
 * `card` variant in b1/exams/ExamSelect.jsx. No Figma component set exists.
 *
 * NOT the only skeleton in the product. src/components/a1/ChapterSelectTemplate
 * ships its own six-row variant on a white fill with a #dbdbdb border, and the
 * flashcard/pronounce surfaces use a single large card placeholder. Those are
 * deliberately out of scope here — see guidelines/state-primitives.html.
 */
export interface SkeletonListProps {
  variant?: 'row' | 'card';
  count?: number;
  /** Tracks the real heading length per surface (144 or 128 in production). */
  titleWidth?: number;
  /** ExamSelect renders cards in a 2-column grid at sm and up. */
  columns?: number;
  style?: React.CSSProperties;
}
export declare const SkeletonList: React.FC<SkeletonListProps>;
export default SkeletonList;
