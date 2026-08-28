import React from 'react';

/* Modal shell — the scrim + card used by PaywallBlocker, UsageLimitModal,
   TrialEndedModal and PremiumActivatedModal.
   Radial navy scrim with a small backdrop blur, a 390px white card at
   radius 32, and an optional close affordance. Entry animation in
   production is framer-motion (opacity 0 → 1, scale .96 → 1, 200ms). */
export function AppModal({
  mascot,
  onClose,
  showClose = false,
  children,
  style,
}) {
  return (
    <div style={{
      position: 'absolute', inset: 0, zIndex: 9999, display: 'flex',
      alignItems: 'center', justifyContent: 'center', padding: 16,
      backdropFilter: 'blur(2px)', WebkitBackdropFilter: 'blur(2px)',
      background: 'radial-gradient(circle, rgba(15,23,42,0.65) 0%, rgba(2,6,23,0.95) 100%)',
      ...style,
    }}>
      <div style={{
        width: '100%', maxWidth: 390, background: 'var(--ui-surface-card)',
        border: '1px solid #f1f5f9', borderRadius: 32,
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
        padding: '24px 16px', display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 20, position: 'relative', boxSizing: 'border-box',
      }}>
        {showClose ? (
          <button type="button" onClick={onClose} aria-label="Close" style={{
            position: 'absolute', top: 14, right: 14, width: 28, height: 28,
            borderRadius: 9999, border: 'none', background: 'var(--ui-surface-muted)',
            color: 'var(--ui-text-secondary)', cursor: 'pointer', display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        ) : null}
        {mascot ? (
          <span style={{
            width: 80, height: 80, borderRadius: 9999, background: '#a2c5f2',
            overflow: 'hidden', flexShrink: 0, display: 'inline-flex',
            alignItems: 'center', justifyContent: 'center',
            boxShadow: 'var(--shadow-xs, 0px 1px 2px 0px rgba(10,13,18,0.05))',
            backgroundImage: `url(${mascot})`, backgroundSize: 'cover', backgroundPosition: 'center',
          }} />
        ) : null}
        {children}
      </div>
    </div>
  );
}

export default AppModal;
