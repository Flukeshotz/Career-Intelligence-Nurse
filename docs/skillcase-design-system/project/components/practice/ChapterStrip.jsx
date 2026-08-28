import React from 'react';

/* Chapter progress carousel — the row of 50px-wide bars under the level hero,
   one per chapter, each a 12px track that fills amber while in progress and
   green once the chapter is done, with "Ch. n" beneath. Locked chapters sit at
   50% opacity. It scrolls horizontally with no visible scrollbar. */
export function ChapterStrip({ chapters = [], onSelect, style }) {
  return (
    <div style={{ display: 'flex', gap: 8, overflowX: 'auto', scrollbarWidth: 'none', ...style }}>
      {chapters.map((c, i) => {
        const total = c.total || 0;
        const pct = total > 0 ? Math.min(100, (c.completed / total) * 100) : 0;
        const done = total > 0 && c.completed >= total;
        return (
          <button type="button" key={c.id || i} disabled={c.locked} aria-label={'Chapter ' + (c.number || i + 1) + (c.locked ? ' (locked)' : '')} onClick={c.locked ? undefined : () => onSelect && onSelect(c)} style={{
            font: 'inherit', appearance: 'none', background: 'none', border: 'none', padding: 0,
            flexShrink: 0, minWidth: 50, width: 50, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4,
            opacity: c.locked ? 'var(--ui-opacity-locked)' : 1, cursor: c.locked ? 'not-allowed' : 'pointer',
          }}>
            <div style={{ height: 12, width: '100%', borderRadius: 9999, background: '#f0f0f0', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: pct + '%', borderRadius: 9999, background: done ? 'var(--ui-progress-fill-done)' : 'var(--ui-action-primary-bg)', transition: 'width .3s' }} />
            </div>
            <span style={{ fontSize: 10, fontWeight: 500, color: 'var(--ui-text-brand)', whiteSpace: 'nowrap' }}>Ch. {c.number || i + 1}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ChapterStrip;
