import React from 'react';

/* Document reader — the agreement and the offer letter. Page cards stack under
   a "Page n" caption on a grey desk; the amber Read & Sign bar is pinned at the
   bottom and only enables once the candidate has reached the last page. */
export function DocumentReader({ pages = 2, ctaLabel = 'Read & Sign', enabled = true, onCta, style }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: '#e9ebef', ...style }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        {Array.from({ length: pages }).map((_, i) => (
          <div key={i}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#6b7280', marginBottom: 5 }}>Page {i + 1}</div>
            <div style={{ background: 'var(--ui-surface-card)', borderRadius: 4, boxShadow: '0 2px 8px rgba(0,0,0,.1)', padding: '16px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[100, 96, 92, 98, 70, 100, 88, 94, 60].map((w, j) => (
                <span key={j} style={{ display: 'block', height: 5, width: w + '%', borderRadius: 2, background: j === 4 || j === 8 ? '#e5e7eb' : '#eef0f3' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: 14, flexShrink: 0, background: '#e9ebef' }}>
        <button type="button" disabled={!enabled} onClick={enabled ? onCta : undefined} style={{
          width: '100%', padding: '13px 16px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: enabled ? 'pointer' : 'not-allowed',
          background: enabled ? 'linear-gradient(90deg,#fde68a,#fcd34d)' : 'var(--ui-track-ring)', color: enabled ? 'var(--ui-text-brand)' : '#8a8a92',
          border: '1px solid ' + (enabled ? 'var(--ui-progress-fill)' : 'var(--ui-track-ring)'),
        }}>{ctaLabel}</button>
      </div>
    </div>
  );
}

export default DocumentReader;
