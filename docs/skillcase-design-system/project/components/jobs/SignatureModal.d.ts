import * as React from 'react';
/**
 * Intentional addition: the agreement / offer-letter signing modal from the job
 * pipeline. No Figma component set exists for it.
 */
export interface SignatureModalProps {
  mode?: 'type' | 'draw' | 'upload';
  /** The typed name field's value. */
  name?: string;
  /** What the preview renders in the script face. */
  signature?: string;
  /** Upload mode only: a file has landed, so Submit Sign enables and Re-upload appears. */
  submitted?: boolean;
  onMode?: (mode: 'type' | 'draw' | 'upload') => void;
  onSubmit?: () => void;
  onBack?: () => void;
  style?: React.CSSProperties;
}
export declare const SignatureModal: React.FC<SignatureModalProps>;
export default SignatureModal;
