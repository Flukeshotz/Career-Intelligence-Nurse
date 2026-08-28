import React from 'react';

/* Chapter row — the list item under the strip. A white card with a #dbdbdb
   hairline at radius 12, the chapter name at 14px semibold, and a pill on the
   right reading "n/m done" — amber while in progress, green once complete —
   followed by a chevron. Locked rows drop to 60% opacity, read "Locked", and
   swap the chevron for a padlock. A1 pads the list to 12 chapters so the
   locked ones are visible as a roadmap.

   Phase 7: the row is already a real <button> and `disabled` when locked, so
   keyboard reach and Enter/Space came free. What was missing is the focus
   ring — applied on :focus-visible only. */
export function ChapterRow({ name = 'Chapter 1', completed = 0, total = 0, locked = false, onClick, style }) {
  const [focus, setFocus] = React.useState(false);
  const done = total > 0 && completed >= total;
  const badge = locked
    ? { bg: '#f3f4f6', fg: '#6b7280', text: 'Locked' }
    : done
      ? { bg: 'rgba(1,144,53,0.12)', fg: 'var(--ui-progress-fill-done)', text: completed + '/' + total + ' done' }
      : { bg: 'rgba(255,235,192,0.65)', fg: '#ac8121', text: completed + '/' + total + ' done' };
  return (
    <button type="button" disabled={locked} onClick={locked ? undefined : onClick}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocus(true); }}
      onBlur={() => setFocus(false)}
      style={{
      font: 'inherit', appearance: 'none', outline: 'none', textAlign: 'left', width: '100%', display: 'block',
      minHeight: 'var(--ui-target-min)',
      background: 'var(--ui-surface-card)', border: '1px solid #dbdbdb', borderRadius: 12, padding: '20px 12px',
      boxShadow: focus ? 'var(--ui-focus-ring)' : 'none',
      opacity: locked ? 'var(--ui-opacity-locked)' : 1, cursor: locked ? 'not-allowed' : 'pointer', boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h3 style={{ margin: 0, fontSize: 14, fontWeight: 600, color: 'var(--ui-text-body)', flex: 1, paddingRight: 8, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          <span style={{ background: badge.bg, padding: '4px 10px', borderRadius: 9999 }}>
            <span style={{ fontSize: 12, fontWeight: 500, color: badge.fg, whiteSpace: 'nowrap' }}>{badge.text}</span>
          </span>
          {locked ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#414651" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          )}
        </div>
      </div>
    </button>
  );
}

export default ChapterRow;
