import React from 'react';

/* Live region — the announcement layer. Phase 8.

   Not extracted from production: production has no announcement layer at all,
   which is the gap (defects.md P3 "Busy and error states are not announced").
   It is justified as a required accessibility standard rather than as evidence,
   and it is deliberately the thinnest thing that closes the gap.

   Why it exists as a component and not a prop on each control: the three
   silent surfaces — AppButton busy, SkeletonList, StateMessage — appear in
   different combinations per screen, and two simultaneous live regions
   interrupt each other. One region per screen, owned by the template, is the
   only arrangement that announces reliably. See D-028.

   `politeness="assertive"` only for errors that interrupt a task. Everything
   else is polite: a busy announcement that talks over the user is worse than
   silence. */
export function LiveRegion({ message = '', politeness = 'polite', style }) {
  return (
    <div
      role={politeness === 'assertive' ? 'alert' : 'status'}
      aria-live={politeness}
      aria-atomic="true"
      style={{
        position: 'absolute', width: 1, height: 1, margin: -1, padding: 0,
        overflow: 'hidden', clip: 'rect(0 0 0 0)', clipPath: 'inset(50%)',
        whiteSpace: 'nowrap', border: 0, ...style,
      }}
    >{message}</div>
  );
}

export default LiveRegion;
