import * as React from 'react';
/**
 * Intentional addition: ported from src/components/ui/FeatureStatusChip.jsx. The Figma kit defines no
 * component set for this; the shipping code is the source of truth.
 */
export interface FeatureStatusChipProps {
  /** `unlimited` = free forever · `premium` = subscriber-only · `capped` = daily-limit meter. */
  status?: 'unlimited' | 'premium' | 'capped';
  /** Uses so far today (capped only). */
  used?: number;
  /** Daily cap (capped only). */
  limit?: number;
  style?: React.CSSProperties;
}
export declare const FeatureStatusChip: React.FC<FeatureStatusChipProps>;
export default FeatureStatusChip;
