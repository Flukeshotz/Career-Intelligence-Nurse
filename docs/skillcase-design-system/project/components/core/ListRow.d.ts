import * as React from 'react';
/**
 * Intentional addition: the selectable list row repeated across
 * src/pages/b1/exams/{ExamSelect,PaperSelect}.jsx,
 * b1/read-listen/{ReadListenSelect,ReadListenTopicSelect}.jsx,
 * b1/describe-speak/DescribeSpeakSelect.jsx,
 * videoCourses/{CourseSelectPage,VideoListPage}.jsx and
 * notes/NotesListPage.jsx — ten-plus surfaces, six features. The single most
 * reused composition in the product. No Figma component set exists for it.
 */
export interface ListRowProps {
  /** Leading media — thumbnail, icon well, or avatar. */
  media?: React.ReactNode;
  title?: React.ReactNode;
  /** Badge/meta strip under the title (level, difficulty, duration). */
  meta?: React.ReactNode;
  /** Trailing status pill, chevron or spinner. */
  trailing?: React.ReactNode;
  /**
   * Production ships TWO hover treatments and they disagree:
   * `lift` (shadow + 1.01 scale) on the B1 learning surfaces, `border`
   * (border darkens to navy) on the content surfaces. Reproduced, not
   * unified — see guidelines/defects.md.
   */
  hover?: 'lift' | 'border';
  /** Usage-limit lock. Drops to 60% and stops responding, as production does. */
  disabled?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare const ListRow: React.FC<ListRowProps>;
export default ListRow;
