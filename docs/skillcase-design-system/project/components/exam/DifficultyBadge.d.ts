import * as React from 'react';
/**
 * Intentional addition: the difficulty pill, whose colour helper is
 * duplicated five times across src/pages/b1/exams/. No Figma component set
 * exists for it.
 */
export interface DifficultyBadgeProps {
  /**
   * Free text from the server (`difficulty_tag`). Only `easy`,
   * `medium` and `intermediate` are recognised; EVERYTHING else — including
   * an unknown tag — falls through to the red "hard" treatment. Reproduced
   * as-is; see guidelines/defects.md.
   */
  level?: string;
  /** `sm` is the 8px paper-list scale, `md` the 12px content-header scale. */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare const DifficultyBadge: React.FC<DifficultyBadgeProps>;
export default DifficultyBadge;
