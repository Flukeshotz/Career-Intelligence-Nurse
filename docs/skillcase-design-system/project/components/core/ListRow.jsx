import React from 'react';

/* The selectable list row — the most reused composition in the product and,
   until now, the least documented. The same markup
   (`w-full p-3 bg-white rounded-xl border border-zinc-200 flex gap-3`)
   carries: exam type select, paper select, describe-speak topics, read &
   listen topics and sources, video courses, video lists, notes. Ten-plus
   surfaces across six features.

   Two hover treatments ship and they disagree. The B1 surfaces lift the row
   (`hover:shadow-md hover:scale-[1.01]`); the content surfaces darken the
   border to navy. Both are reproduced as `hover` because neither is more
   correct — the divergence is recorded, not resolved (see defects.md).

   Phase 7: production builds this row as a bare clickable <div>, which is
   unreachable by keyboard on ten-plus surfaces. Here it renders as a real
   <button> when it has an onClick and a plain <div> when it does not, so the
   row is tabbable, Enter/Space activates it and the focus ring lands on it.
   The visual result is identical; the button reset is explicit below. */
export function ListRow({ media, title, meta, trailing, hover = 'lift', disabled = false, onClick, style, children }) {
  const [over, setOver] = React.useState(false);
  const [down, setDown] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const active = over && !disabled;
  const interactive = !!onClick;
  const Tag = interactive ? 'button' : 'div';
  return (
    <Tag
      type={interactive ? 'button' : undefined}
      disabled={interactive && disabled ? true : undefined}
      onClick={disabled ? undefined : onClick}
      onMouseEnter={() => setOver(true)}
      onMouseLeave={() => { setOver(false); setDown(false); }}
      onMouseDown={() => setDown(true)}
      onMouseUp={() => setDown(false)}
      onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocus(true); }}
      onBlur={() => setFocus(false)}
      style={{
        font: 'inherit', appearance: 'none', outline: 'none',
        minHeight: 'var(--ui-target-min)',
        width: '100%', padding: 12, background: 'var(--ui-surface-card)', borderRadius: 12,
        border: '1px solid ' + (active && hover === 'border' ? 'var(--ui-text-brand)' : 'var(--ui-border-default)'),
        display: 'flex', alignItems: 'flex-start', gap: 12, textAlign: 'left',
        transition: 'all .15s', flexShrink: 0,
        cursor: disabled ? 'not-allowed' : onClick ? 'pointer' : 'default',
        opacity: disabled ? 0.6 : 1,
        boxShadow: active && hover === 'lift' ? '0 4px 6px -1px rgba(0,0,0,.1)' : 'none',
        transform: !disabled && hover === 'lift' ? (down ? 'scale(.99)' : active ? 'scale(1.01)' : 'none') : 'none',
        ...(focus ? { boxShadow: 'var(--ui-focus-ring)' } : null),
        ...style,
      }}
    >
      {media ? <div style={{ flexShrink: 0 }}>{media}</div> : null}
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {title ? <span style={{ display: 'block', color: 'var(--ui-text-body)', fontSize: 14, fontWeight: 600, lineHeight: 1.35 }}>{title}</span> : null}
        {meta ? <div style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>{meta}</div> : null}
        {children}
      </div>
      {trailing ? <div style={{ flexShrink: 0, marginLeft: 8, display: 'flex', alignItems: 'center', gap: 8 }}>{trailing}</div> : null}
    </Tag>
  );
}

export default ListRow;
