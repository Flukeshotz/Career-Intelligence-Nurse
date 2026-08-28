import React from 'react';

/* "Points to remember" — the briefing block before the Skillcase interview and
   the training call. A heading with an "in progress" chip beside it, then rows
   of a small navy icon well, a bold line and a grey sub-line. */
export function PointsToRemember({ title = 'Points to remember', chip = 'in progress', items = [], style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ui-text-body)' }}>{title}</div>
        {chip ? <span style={{ background: 'rgba(255,235,192,0.65)', color: '#ac8121', fontSize: 10, fontWeight: 600, padding: '3px 8px', borderRadius: 9999 }}>{chip}</span> : null}
      </div>
      {items.map((it, i) => (
        <div key={it.label || i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
          <span style={{ width: 28, height: 28, borderRadius: 8, background: '#eef4ff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#002856" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v5M12 16h.01" /></svg>
          </span>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--ui-text-body)' }}>{it.label}</div>
            {it.hint ? <div style={{ fontSize: 11, lineHeight: 1.5, color: '#8a93a0' }}>{it.hint}</div> : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default PointsToRemember;
