import React from 'react';

/* Job pipeline header — src/pages/jobScreening/JobScreening.jsx, the progress
   lobby. "Your job progress" at 30px semibold #002856 with the next step's
   subtitle under it at 70%, and a 96px ring on the right: a white 3.2-unit
   track with a #eab308 arc over it, "n/m" in the middle above a tiny uppercase
   DONE. The count excludes the paywall step and any skipped step. */
export function JobProgressHeader({ nextStep = 'fill your education and personal details', completed = 3, total = 8, style }) {
  const pct = total > 0 ? (completed / total) * 100 : 0;
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0 12px', ...style }}>
      <div style={{ flex: 1, textAlign: 'left', minWidth: 0, paddingRight: 16 }}>
        <h2 style={{ margin: 0, color: 'var(--ui-text-brand)', fontSize: 30, fontWeight: 600, letterSpacing: '-.02em' }}>Your job progress</h2>
        <p style={{ margin: '4px 0 0', color: 'rgba(0,40,86,0.7)', fontSize: 13, fontWeight: 500, lineHeight: 1.55 }}>Next step - {nextStep}</p>
      </div>
      <div style={{ position: 'relative', width: 96, height: 96, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#ffffff" strokeWidth="3.2" />
          <circle cx="18" cy="18" r="15.915" fill="none" stroke="#eab308" strokeWidth="3.2" strokeDasharray="100" strokeDashoffset={100 - pct} strokeLinecap="round" />
        </svg>
        <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ color: 'var(--ui-text-brand)', fontSize: 16, fontWeight: 800, lineHeight: 1 }}>{completed}/{total}</span>
          <span style={{ color: 'rgba(0,40,86,0.5)', fontSize: 8, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginTop: 2 }}>Done</span>
        </div>
      </div>
    </div>
  );
}

export default JobProgressHeader;
