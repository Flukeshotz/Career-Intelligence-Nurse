import * as React from 'react';
/**
 * Intentional addition: the agreement / offer-letter reader from the job
 * pipeline. No Figma component set exists for it.
 */
export interface DocumentReaderProps {
  /** How many page cards to stack. */
  pages?: number;
  ctaLabel?: string;
  /** False until the candidate has scrolled to the last page. */
  enabled?: boolean;
  onCta?: () => void;
  style?: React.CSSProperties;
}
export declare const DocumentReader: React.FC<DocumentReaderProps>;
export default DocumentReader;
