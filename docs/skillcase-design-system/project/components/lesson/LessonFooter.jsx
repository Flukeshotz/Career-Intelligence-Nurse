import React from 'react';

/* The lesson advance row. The primary button is the amber gradient
   (#fde68a → #fcd34d) with a #eec139 hairline; disabled it drops to a flat
   grey bar. When a Prev button is present it takes 2/5 of the width as a white
   outlined button and the primary keeps the rest. Labels change per screen:
   Continue (intro), Next (vocab/match), Check (quiz/listen/unjumble),
   "Got it!" (grammar). */
export function LessonFooter({ primaryLabel = 'Check', onPrimary, disabled = false, showPrev = false, onPrev, aside, style }) {
  const primary = {
    flex: showPrev ? 1.5 : 1, padding: '14px 16px', borderRadius: 12, fontSize: 15, fontWeight: 600,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
    cursor: disabled ? 'not-allowed' : 'pointer',
    background: disabled ? '#e5e7eb' : 'linear-gradient(90deg,#fde68a,#fcd34d)',
    color: disabled ? '#9ca3af' : '#172554',
    border: disabled ? '1px solid #e5e7eb' : '1px solid #eec139',
    boxShadow: disabled ? 'none' : '0 1px 2px rgba(0,0,0,0.05)',
  };
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, ...style }}>
      {aside ? <button type="button" style={{ background: 'none', border: 'none', padding: '4px 0', fontSize: 15, fontWeight: 500, color: 'var(--ui-border-muted)', cursor: 'pointer' }}>{aside}</button> : null}
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12 }}>
        {showPrev ? (
          <button type="button" onClick={onPrev} style={{
            flex: 1, padding: '14px 16px', borderRadius: 12, border: '1px solid #d4d4d8', background: 'var(--ui-surface-card)',
            color: '#172554', fontSize: 15, fontWeight: 600, cursor: 'pointer', boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 4,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            Prev
          </button>
        ) : null}
        <button type="button" disabled={disabled} onClick={disabled ? undefined : onPrimary} style={primary}>
          <span>{primaryLabel}</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
      </div>
    </div>
  );
}

export default LessonFooter;
