import React from 'react';

/* Guided German journey card — the level cards on the /learn-german path.
   White card, radius 20, 8px padding; a 3D isometric scene image at radius 12;
   a grey "Level n completed" pill; the level title in bold navy; then a row of
   a circular restart button and a wide Recap button. A green check badge
   overhangs the top-right corner when the level is done. Cards alternate
   left/right down a white curved path on the pale blue map background. */
export function JourneyCard({
  title = 'At the Airport Entrance',
  status = 'Level 1 completed',
  image,
  state = 'completed',
  primaryLabel = 'Recap',
  onPrimary,
  onRestart,
  style,
}) {
  const done = state === 'completed';
  const locked = state === 'locked';
  return (
    <div style={{ position: 'relative', width: 200, flexShrink: 0, ...style }}>
      <div style={{
        background: 'var(--ui-surface-card)', borderRadius: 20, padding: 8,
        boxShadow: '0 6px 20px rgba(8,50,98,0.10)',
        display: 'flex', flexDirection: 'column', gap: 10,
        opacity: locked ? 0.55 : 1,
      }}>
        <span style={{
          height: 96, borderRadius: 12, display: 'block',
          background: image ? `url(${image}) center / cover no-repeat` : '#e8eef7',
        }} />
        <span style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 4px 6px' }}>
          <span style={{ background: '#f1f2f4', color: '#6b7280', fontSize: 11, fontWeight: 500, padding: '4px 10px', borderRadius: 8, whiteSpace: 'nowrap' }}>{status}</span>
          <span style={{ fontSize: 15, fontWeight: 700, color: 'var(--ui-surface-inverse-alt)', textAlign: 'center', lineHeight: 1.25 }}>{title}</span>
          <span style={{ display: 'flex', gap: 8, alignItems: 'center', width: '100%' }}>
            <button type="button" onClick={onRestart} aria-label="Restart lesson" style={{
              width: 40, height: 40, borderRadius: 10, background: 'var(--ui-surface-card)', border: '1px solid #e5e7eb',
              color: 'var(--ui-surface-inverse-alt)', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9 9 0 0 0-6.4 2.7L3 8" /><path d="M3 3v5h5" /></svg>
            </button>
            <button type="button" onClick={onPrimary} style={{
              flex: 1, height: 40, borderRadius: 10, background: 'var(--ui-surface-card)', border: '1px solid #e5e7eb',
              color: '#111827', fontWeight: 700, fontSize: 15, cursor: 'pointer',
            }}>{primaryLabel}</button>
          </span>
        </span>
      </div>
      {done ? (
        <span style={{
          position: 'absolute', top: -10, right: -6, width: 30, height: 30, borderRadius: 9999,
          background: '#22c55e', border: '3px solid #fff', display: 'inline-flex',
          alignItems: 'center', justifyContent: 'center',
        }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
        </span>
      ) : null}
    </div>
  );
}

export default JourneyCard;
