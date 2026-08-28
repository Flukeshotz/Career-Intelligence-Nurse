import * as React from 'react';
/**
 * Intentional addition: extracted from repeated inline markup rather than an
 * existing component. Production writes the same nine Tailwind classes on six
 * surfaces — ExamReadingWorkspace, ExamListeningWorkspace, VideoReader,
 * NewsArticleReader, SupportWidget, CallEndedScreen — and never componentises
 * them. The `multiline` variant comes from ExamWritingWorkspace /
 * DescribeSpeakWorkspace.
 *
 * Keeps production's shipped `ring-2 ring-blue-600` focus treatment instead of
 * the design system's dual ring: text fields are the one control class the app
 * already handles correctly. See guidelines/decisions.md D-029.
 */
export interface TextFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style' | 'onChange' | 'value'> {
  /** Visible label. Omit only when an adjacent element already names the field. */
  label?: string;
  value?: string;
  placeholder?: string;
  /** Helper text under the field. Hidden while `error` is set. */
  hint?: string;
  /** Error text. Sets aria-invalid and reddens the border. */
  error?: string;
  /** Renders the borderless textarea variant the writing workspaces use. */
  multiline?: boolean;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  style?: React.CSSProperties;
}
export declare function TextField(props: TextFieldProps): React.JSX.Element;
export default TextField;
