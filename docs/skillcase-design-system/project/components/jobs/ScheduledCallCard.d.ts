import * as React from 'react';
/**
 * Intentional addition: the booked-call confirmation from the job pipeline's
 * training-call and employer-interview steps. No Figma component set exists
 * for it.
 */
export interface ScheduledCallRow {
  /** Picks the glyph: date, time or host. */
  icon?: 'date' | 'time' | 'host';
  label?: string;
  value?: string;
}
export interface ScheduledCallCardProps {
  rows?: ScheduledCallRow[];
  joinLabel?: string;
  onJoin?: () => void;
  onCalendar?: () => void;
  style?: React.CSSProperties;
}
export declare const ScheduledCallCard: React.FC<ScheduledCallCardProps>;
export default ScheduledCallCard;
