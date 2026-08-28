import * as React from 'react';
/**
 * Intentional addition: the document upload block from the job pipeline's
 * "Upload your documents" and "Additional documents" steps. No Figma component
 * set exists for it.
 */
export interface UploadRowProps {
  /** Resume · Language Certificates · Education Certificates, etc. */
  label?: string;
  status?: 'approved' | 'pending' | 'rejected';
  /** When set, the drop zone is replaced by this file's chip. */
  file?: string;
  formats?: string;
  onPick?: () => void;
  style?: React.CSSProperties;
}
export declare const UploadRow: React.FC<UploadRowProps>;
export default UploadRow;
