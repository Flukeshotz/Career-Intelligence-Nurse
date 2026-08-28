import * as React from 'react';
/**
 * Intentional addition: extracted from repeated production markup in
 * src/pages/b1/exams/ExamSelect.jsx, PaperSelect.jsx, ExamBlockSelector.jsx and
 * src/pages/b1/describe-speak/DescribeSpeakSelect.jsx, where the same block
 * appears verbatim. No Figma component set exists for it.
 *
 * Empty and error are ONE component because production renders them from the
 * same frame — same width, same 48px vertical padding, same 12px semibold type.
 * Splitting them would invent a distinction the product does not make.
 */
export interface StateMessageProps {
  state?: 'empty' | 'error';
  /** Surface-specific copy. Required — there is deliberately no default. */
  message?: string;
  retryLabel?: string;
  /** Error state only. Omit to render the message without a retry affordance. */
  onRetry?: () => void;
  style?: React.CSSProperties;
}
export declare const StateMessage: React.FC<StateMessageProps>;
export default StateMessage;
