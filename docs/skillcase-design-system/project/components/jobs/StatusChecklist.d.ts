import * as React from 'react';
/**
 * Intentional addition: the review/waiting checklist repeated across the job
 * pipeline. No Figma component set exists for it.
 */
export interface StatusChecklistItem {
  label?: string;
  hint?: string;
  /** done = filled green tick, active = navy ring, pending = grey ring. */
  state?: 'done' | 'active' | 'pending';
}
export interface StatusChecklistProps {
  items?: StatusChecklistItem[];
  style?: React.CSSProperties;
}
export declare const StatusChecklist: React.FC<StatusChecklistProps>;
export default StatusChecklist;
