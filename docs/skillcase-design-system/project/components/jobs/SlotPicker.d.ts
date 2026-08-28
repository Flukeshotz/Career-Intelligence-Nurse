import * as React from 'react';
/**
 * Intentional addition: the booking modal used by the training call, the
 * employer interview and every reschedule in the job pipeline. No Figma
 * component set exists for it.
 */
export interface SlotPickerProps {
  title?: string;
  date?: string;
  /** Time ranges in the candidate's own timezone, e.g. "11:00 AM - 12:00 PM". */
  slots?: string[];
  selected?: number;
  /** "Book call" on a training call, "Schedule interview" for an employer. */
  confirmLabel?: string;
  onSelect?: (index: number) => void;
  onConfirm?: () => void;
  onBack?: () => void;
  style?: React.CSSProperties;
}
export declare const SlotPicker: React.FC<SlotPickerProps>;
export default SlotPicker;
