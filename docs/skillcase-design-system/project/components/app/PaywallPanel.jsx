import React from 'react';

/* Paywall body — the contents of PaywallBlocker.jsx / UsageLimitModal.jsx.
   Locked pill, 26px navy headline, a #f8f9fa inset panel with the price and
   the entitlement rows, then the navy CTA, the phone fallback and the
   cancel-anytime reassurance. Drop it inside <AppModal>. */
const FEATURES = ['Streak Challenges', 'German Lessons', 'Flashcards', 'Pronunciation practice', 'Chapter tests'];

export function PaywallPanel({
  eyebrow = 'Learning plan locked',
  title = 'Subscribe for continued access',
  price = '₹99',
  period = '/ month',
  features = FEATURES,
  ctaLabel = 'Subscribe and pay',
  secondaryLabel = 'Talk to an expert',
  footnote = 'You can cancel it anytime.',
  loading = false,
  onCta,
  onSecondary,
  style,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, width: '100%', ...style }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '3px 12px', background: 'var(--ui-surface-muted)', borderRadius: 9999 }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--ui-text-muted)" strokeWidth="2.2" strokeLinecap="round"><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /></svg>
        <span style={{ fontSize: 10, fontWeight: 700, color: 'var(--ui-text-secondary)', textTransform: 'uppercase', letterSpacing: '.06em' }}>{eyebrow}</span>
      </span>
      <h2 style={{ margin: 0, fontSize: 26, fontWeight: 700, color: 'var(--ui-text-brand)', textAlign: 'center', lineHeight: 1.15, letterSpacing: '-0.02em' }}>{title}</h2>
      <div style={{ width: '100%', background: '#f8f9fa', borderRadius: 24, padding: 20, display: 'flex', flexDirection: 'column', gap: 16, boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 6 }}>
          <span style={{ fontSize: 36, fontWeight: 800, color: 'var(--ui-text-brand)' }}>{price}</span>
          <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--ui-text-faint)' }}>{period}</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(226,232,240,0.6)', width: '100%' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {features.map((f) => (
            <div key={f} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12 }}>
              <span style={{ fontWeight: 600, color: 'var(--ui-text-secondary)' }}>{f}</span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                <span style={{ fontWeight: 700, color: 'var(--ui-text-brand)' }}>Unlimited</span>
                <span style={{ width: 16, height: 16, background: '#22c55e', borderRadius: 9999, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
        <button type="button" onClick={onCta} disabled={loading} style={{
          width: '100%', height: 52, background: 'var(--ui-text-brand)', color: '#fff', border: 'none',
          borderRadius: 16, fontWeight: 700, fontSize: 14, cursor: loading ? 'default' : 'pointer',
          opacity: loading ? 0.75 : 1,
        }}>{loading ? 'Processing…' : ctaLabel}</button>
        <button type="button" onClick={onSecondary} style={{
          width: '100%', height: 52, background: 'var(--ui-surface-card)', border: '1px solid var(--ui-border-default)',
          borderRadius: 16, fontWeight: 700, fontSize: 14, color: 'var(--ui-text-brand)', cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          boxShadow: 'var(--shadow-xs, 0px 1px 2px 0px rgba(10,13,18,0.05))',
        }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.07 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
          {secondaryLabel}
        </button>
        <p style={{ margin: '4px 0 0', fontSize: 10, fontWeight: 600, color: 'var(--ui-text-faint)', textAlign: 'center' }}>{footnote}</p>
      </div>
    </div>
  );
}

export default PaywallPanel;
