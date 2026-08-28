import * as React from 'react';
/**
 * Intentional addition: the section countdown chip repeated verbatim in
 * src/pages/b1/exams/Exam{Reading,Writing,Listening,Speaking}Workspace.jsx.
 * No Figma component set exists for it.
 */
export interface ExamTimerPillProps {
  /** Remaining time in seconds; rendered mm:ss with tabular figures. */
  seconds?: number;
  /**
   * Production ships `neutral` only — the timer never changes appearance as
   * time runs out. `warning`/`critical` are a proposed extension, not
   * observed behaviour; see guidelines/exam-system-audit.html.
   */
  tone?: 'neutral' | 'warning' | 'critical';
  style?: React.CSSProperties;
}
export declare const ExamTimerPill: React.FC<ExamTimerPillProps>;
export default ExamTimerPill;
