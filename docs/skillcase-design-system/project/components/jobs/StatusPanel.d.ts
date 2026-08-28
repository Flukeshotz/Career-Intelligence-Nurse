import * as React from 'react';
/**
 * Intentional addition: the pale-blue status card that carries most of the job
 * pipeline's step screens. No Figma component set exists for it.
 */
export interface StatusPanelProps {
  /** An SVG node, or `false` to drop the badge entirely. */
  icon?: React.ReactNode | false;
  title?: string;
  body?: string;
  /** Normally a `StatusChecklist`, a form, or a job card list. */
  children?: React.ReactNode;
  /** Normally a `MayaNote`. */
  note?: React.ReactNode;
  actionLabel?: string;
  /** primary = navy, ghost = white outlined (e.g. "Refresh status"), amber = the gold CTA. */
  actionVariant?: 'primary' | 'ghost' | 'amber';
  onAction?: () => void;
  style?: React.CSSProperties;
}
export declare const StatusPanel: React.FC<StatusPanelProps>;
export default StatusPanel;
