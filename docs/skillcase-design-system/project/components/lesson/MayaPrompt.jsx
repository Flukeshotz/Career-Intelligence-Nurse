import React from 'react';

/* Maya + her dialogue bubble — the narrator on every lesson screen.
   `side` (the default) is the row used by vocab/quiz/grammar/match: Maya at
   96px with a white radius-12 bubble beside her and a rotated square tail on
   the bubble's left edge. `hero` is the outro/intro treatment: a centred
   bubble with the tail pointing down at a 224px Maya below it. */
export function MayaPrompt({ text = 'Quick! Before you forget…answer these!', image, variant = 'side', tapHint = false, style }) {
  if (variant === 'hero') {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', flex: 1, minHeight: 0, ...style }}>
        <div style={{ width: '100%', padding: '0 24px', marginBottom: 24, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'relative', background: 'var(--ui-surface-card)', borderRadius: 16, boxShadow: '0 10px 24px rgba(0,0,0,0.12)', padding: '16px 20px', maxWidth: 280, textAlign: 'center' }}>
            <div style={{ color: '#1f2937', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{text}</div>
            <div style={{ position: 'absolute', bottom: -8, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 16, height: 16, background: 'var(--ui-surface-card)' }} />
          </div>
        </div>
        {tapHint ? <p style={{ margin: '0 0 16px', color: 'rgba(30,58,138,0.4)', fontSize: 12, fontWeight: 500, letterSpacing: '.02em' }}>tap to continue</p> : null}
        {image ? <img src={image} alt="" aria-hidden="true" style={{ width: 224, objectFit: 'contain' }} /> : null}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '8px 16px 0', flexShrink: 0, ...style }}>
      {image ? <img src={image} alt="" aria-hidden="true" style={{ width: 96, height: 'auto', objectFit: 'contain', flexShrink: 0 }} /> : null}
      <div style={{ marginLeft: 8, background: 'var(--ui-surface-card)', padding: 12, borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,0.08)', position: 'relative', flex: 1 }}>
        <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 12, height: 12, background: 'var(--ui-surface-card)' }} />
        <div style={{ color: '#1f2937', fontSize: 13, fontWeight: 500, lineHeight: '18px' }}>{text}</div>
      </div>
    </div>
  );
}

export default MayaPrompt;
