import * as React from 'react';
/**
 * Intentional addition: the segmented block bar in the four B1 exam
 * workspaces and the four results screens' review mode. No Figma component
 * set exists for it.
 */
export interface BlockProgressTrackProps {
  /** Number of content blocks in the section. */
  count?: number;
  /** Zero-based index of the active block. Segments at or before it are filled. */
  current?: number;
  style?: React.CSSProperties;
}
export declare const BlockProgressTrack: React.FC<BlockProgressTrackProps>;
export default BlockProgressTrack;
