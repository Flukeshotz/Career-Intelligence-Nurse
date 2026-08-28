import * as React from 'react';
/**
 * Intentional addition: the onboarding 6-digit OTP entry, drawn as a frame in
 * Figma rather than a component set.
 */
export interface OtpBoxesProps {
  /** Number of boxes (6 in the app). */
  length?: number;
  /** Digits entered so far. */
  value?: string;
  /** Index of the focused box, or -1 for none. */
  focusIndex?: number;
  style?: React.CSSProperties;
}
export interface PhoneFieldProps {
  /** Country dial code shown in the 57px prefix box. */
  dialCode?: string;
  value?: string;
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare const OtpBoxes: React.FC<OtpBoxesProps>;
export declare const PhoneField: React.FC<PhoneFieldProps>;
export default OtpBoxes;
