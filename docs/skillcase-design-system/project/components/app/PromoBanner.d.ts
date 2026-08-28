import * as React from 'react';
/**
 * Intentional addition: the live event banner on the practice hub. Replaces the
 * Figma-only `EventBanner`; the Figma kit defines no component set for it.
 */
export interface PromoBannerProps {
  title?: string;
  /** Date/time line at 80% white. */
  detail?: string;
  ctaLabel?: string;
  /** URL of the Maya illustration bled to the bottom-right. */
  image?: string;
  onCta?: () => void;
  style?: React.CSSProperties;
}
export declare const PromoBanner: React.FC<PromoBannerProps>;
export default PromoBanner;
