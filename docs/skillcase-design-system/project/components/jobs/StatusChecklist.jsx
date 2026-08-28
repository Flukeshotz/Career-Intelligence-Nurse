import React from 'react';

/* Status checklist — the pattern behind "Profile under review", "Profile
   reviewed successfully", "Matching you with German employers" and "Interview
   completed". A pale blue card with a rounded badge, a heading, a line of
   copy, then two or three rows whose marker tells the state: a filled green
   tick when done, a ring when active, an empty ring when pending. */
export function StatusChecklist({ items = [], style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', ...style }}>
      {items.map((it, i) => {
        const st = it.state || 'pending';
        return (
          <div key={it.label || i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <span style={{ width: 18, height: 18, borderRadius: 9999, flexShrink: 0, marginTop: 2, display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              background: st === 'done' ? 'var(--ui-progress-fill-done)' : '#fff',
              border: st === 'done' ? 'none' : '2px solid ' + (st === 'active' ? 'var(--ui-text-brand)' : 'var(--ui-border-muted)') }}>
              {st === 'done' ? (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              ) : st === 'active' ? <span style={{ width: 7, height: 7, borderRadius: 9999, background: 'var(--ui-text-brand)' }} /> : null}
            </span>
            <div style={{ minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: st === 'pending' ? 'var(--ui-text-faint)' : 'var(--ui-text-body)' }}>{it.label}</div>
              {it.hint ? <div style={{ fontSize: 11, lineHeight: 1.5, color: '#8a93a0' }}>{it.hint}</div> : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatusChecklist;
