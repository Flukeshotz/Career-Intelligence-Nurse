import React from 'react';

/* Promo banner — the blue event card under the practice grid.
   Navy-to-blue gradient at radius 16, 16px padding; a 16px bold white title
   over a 12px date line at 80% white, a gold Register Now button, and Maya
   standing at the right edge. Used for demo classes and webinars. */
export function PromoBanner({
  title = 'Free Demo Class for Nurses: Learn German Basics',
  detail = '25 August 2026 | 7:30 PM',
  ctaLabel = 'Register Now',
  image,
  onCta,
  style,
}) {
  return (
    <div style={{
      background: 'linear-gradient(105deg,#1d5da8 0%,#0b3b72 100%)',
      borderRadius: 16, padding: 16, display: 'flex', alignItems: 'flex-end',
      justifyContent: 'space-between', gap: 8, overflow: 'hidden', ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1, minWidth: 0 }}>
        <span style={{ fontSize: 16, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{title}</span>
        <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>{detail}</span>
        <button type="button" onClick={onCta} style={{
          alignSelf: 'flex-start', background: '#f5c13d', color: 'var(--ui-surface-inverse-alt)', border: 'none',
          borderRadius: 8, padding: '9px 16px', fontWeight: 700, fontSize: 12, cursor: 'pointer',
        }}>{ctaLabel}</button>
      </div>
      {image ? <img src={image} alt="" aria-hidden="true" style={{ width: 92, height: 116, objectFit: 'contain', objectPosition: 'bottom', flexShrink: 0, marginBottom: -16 }} /> : null}
    </div>
  );
}

export default PromoBanner;
