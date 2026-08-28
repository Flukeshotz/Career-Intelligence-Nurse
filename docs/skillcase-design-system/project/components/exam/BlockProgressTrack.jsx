import React from 'react';

/* The segmented block progress bar. One segment per content block, amber
   through the current index and zinc after it. Eight production copies:
   the four exam workspaces and the four results screens' per-block review
   mode, which reuses the identical bar for a non-progress purpose (position
   in a review list). Note the fill rule is `idx <= current`, so the first
   segment is amber the moment the section opens — there is no empty state. */
export function BlockProgressTrack({ count = 5, current = 0, style }) {
  const n = Math.max(0, Math.round(Number(count) || 0));
  return (
    <div style={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', gap: 6, ...style }}>
      {Array.from({ length: n }).map((_, i) => (
        <div key={i} style={{ flex: 1, height: 10, borderRadius: 200, transition: 'all .2s', background: i <= current ? 'var(--ui-progress-fill)' : 'var(--ui-track)' }} />
      ))}
    </div>
  );
}

export default BlockProgressTrack;
