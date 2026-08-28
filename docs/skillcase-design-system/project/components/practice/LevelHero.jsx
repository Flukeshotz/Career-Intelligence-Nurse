import React from 'react';

/* Level hero — the 140px photo band that fades to white, followed by the level
   statement: the level at 30px semibold beside "German Language Level" at 16px,
   both #002856, with the module's one-line subtitle under them at 12px/70%. */
export function LevelHero({ level = 'A1', subtitle = 'Continue your German learning journey', image, children, style }) {
  return (
    <div style={{ flexShrink: 0, background: 'var(--ui-surface-card)', ...style }}>
      <div style={{ position: 'relative', height: 140, width: '100%', overflow: 'hidden' }}>
        {image ? <img src={image} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(255,255,255,0),#fff)' }} />
      </div>
      <div style={{ padding: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 6 }}>
          <h1 style={{ margin: 0, fontSize: 30, lineHeight: '38px', fontWeight: 600, color: 'var(--ui-text-brand)' }}>{level}</h1>
          <span style={{ fontSize: 16, fontWeight: 600, color: 'var(--ui-text-brand)' }}>German Language Level</span>
        </div>
        <p style={{ margin: '0 0 16px', fontSize: 12, color: '#000', opacity: 0.7 }}>{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

export default LevelHero;
