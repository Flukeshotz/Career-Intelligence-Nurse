import React from 'react';

/* Mode switcher — src/components/TopModeSwitcher.jsx as shipped.
   Sits on the navy directly under the navbar. The ACTIVE tab is 53px tall,
   white, and melts into the page below it (no bottom edge); inactive tabs are
   44px, bg-white/10, radius 8, with an 8px bottom margin so the active tab
   reads as taller. Each tab is an illustration + one or two 10–12px lines.
   Default tabs: Guided German · German Practice · German Classes.
   B1/B2 users get a two-tab variant: Job Preparation · German Jobs. */
export function ModeRail({ items = [], activeIndex = 0, onSelect, style }) {
  const tabs = items.length ? items : [
    { line1: 'Guided', line2: 'German' },
    { line1: 'German', line2: 'Practice' },
    { line1: 'German', line2: 'Classes' },
  ];
  return (
    <div style={{ background: 'var(--ui-text-brand)', paddingTop: 4, flexShrink: 0, ...style }}>
      <div role="tablist" style={{ display: 'flex', alignItems: 'flex-end', gap: 16, padding: '0 12px', height: 57 }}>
        {tabs.map((t, i) => {
          const active = i === activeIndex;
          return (
            <button key={(t.line1 || '') + i} type="button" role="tab" aria-selected={active} onClick={() => onSelect && onSelect(i)} style={{
              position: 'relative', flex: 1, padding: '0 10px', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              height: active ? 53 : 44,
              marginBottom: active ? -1 : 8,
              background: active ? '#fff' : 'rgba(255,255,255,0.1)',
              borderRadius: active ? '12px 12px 0 0' : 8,
              zIndex: active ? 10 : 1,
            }}>
              {t.image ? (
                <img src={t.image} alt="" aria-hidden="true" style={{ width: 36, height: 24, objectFit: 'contain', flexShrink: 0, opacity: active ? 1 : 0.8 }} />
              ) : (
                <span style={{ width: 36, height: 24, borderRadius: 4, background: active ? 'rgba(0,40,86,0.08)' : 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
              )}
              <span style={{
                display: 'flex', flexDirection: 'column', textAlign: t.line2 ? 'left' : 'center',
                fontSize: 12, lineHeight: '11px',
                color: active ? 'var(--ui-text-brand)' : 'rgba(255,255,255,0.9)',
                fontWeight: active ? 700 : 500,
              }}>
                <span>{t.line1}</span>
                {t.line2 ? <span>{t.line2}</span> : null}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default ModeRail;
