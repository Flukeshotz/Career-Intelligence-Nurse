import React from 'react';

/* Usage limit / premium gate — src/components/UsageLimitModal.jsx, all three
   states it ships with:
   · `limit` — a free allowance is spent. Sad Maya with the hourglass pinned to
     her well, "You have reached today's free limit", and a live countdown to
     the reset beside the upgrade path.
   · `premium` — the feature is premium-only. A yellow "This is a premium
     feature" chip, looking Maya, no countdown, and the price well uncapped.
   · `expired` — the countdown ran out. "You're free to continue!", no pricing
     at all, one navy Continue. The flow stays celebratory.
   The dismissal is the X only; leaving a still-locked feature returns home. */
export function UsageLimitPanel({
  state = 'limit',
  mascot,
  timer,
  period = "today's",
  countdown = '02:14:36',
  price = '₹99',
  features,
  supportPhone = '+919731462667',
  onUpgrade,
  onClose,
  style,
}) {
  const isPremium = state === 'premium';
  const isExpired = state === 'expired';
  const title = isPremium ? 'Subscribe to Premium Plan for access'
    : isExpired ? "You're free to continue!"
      : 'You have reached ' + period + ' free limit';
  return (
    <div style={{ width: '100%', maxWidth: 360, background: 'var(--ui-surface-card)', borderRadius: 20, padding: 20, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', boxShadow: '0 24px 48px rgba(0,0,0,.2)', ...style }}>
      <button type="button" onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 14, right: 14, width: 26, height: 26, borderRadius: 9999, background: 'var(--ui-surface-sunken)', border: 'none', cursor: 'pointer', color: '#6b7280', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: 96, height: 96, background: 'var(--ui-surface-info)', borderRadius: 9999, overflow: 'hidden', flexShrink: 0 }}>
            {mascot ? <img src={mascot} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
          </div>
          {state === 'limit' && timer ? <img src={timer} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -6, right: -14, width: 52, height: 52, objectFit: 'contain' }} /> : null}
        </div>
        {isPremium ? (
          <div style={{ padding: '2px 8px', background: '#fef9c3', borderRadius: 40, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
            <span style={{ color: '#a16207', fontSize: 12, fontWeight: 500, lineHeight: '20px' }}>This is a premium feature</span>
          </div>
        ) : null}
        <h2 style={{ margin: 0, alignSelf: 'stretch', textAlign: 'center', color: 'var(--ui-text-brand)', fontSize: 24, fontWeight: 700, lineHeight: 1.2, letterSpacing: '-.01em' }}>{title}</h2>
        {state === 'limit' ? (
          <p style={{ margin: 0, width: 256, textAlign: 'center', color: 'var(--ui-text-brand)', fontSize: 12, lineHeight: 1.6 }}>
            Come back in <span style={{ fontWeight: 600, fontVariantNumeric: 'tabular-nums' }}>{countdown}</span> or upgrade to premium for unlimited usage.
          </p>
        ) : isExpired ? (
          <p style={{ margin: 0, width: 256, textAlign: 'center', color: 'var(--ui-text-brand)', fontSize: 12, lineHeight: 1.6 }}>Your limit has reset — go ahead and keep practicing.</p>
        ) : null}
        {isExpired ? null : <PriceSlot price={price} features={features} capped={!isPremium} />}
      </div>
      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        {isExpired ? (
          <button type="button" onClick={onClose} style={{ alignSelf: 'stretch', padding: '12px 16px', background: 'var(--ui-text-brand)', color: '#fff', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>Continue</button>
        ) : (
          <React.Fragment>
            <button type="button" onClick={onUpgrade} style={{ alignSelf: 'stretch', padding: '12px 16px', background: 'var(--ui-text-brand)', color: '#fff', border: 'none', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20" /></svg>
              <span>{isPremium ? 'Unlock Premium' : 'Upgrade to Premium'}</span>
            </button>
            <a href={'tel:' + supportPhone} style={{ alignSelf: 'stretch', padding: '12px 16px', borderRadius: 8, border: '1px solid #a1a1aa', color: 'var(--ui-text-brand)', fontSize: 16, fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, boxSizing: 'border-box' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#002856" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" /></svg>
              <span>Talk to an expert</span>
            </a>
            <p style={{ margin: 0, width: 288, textAlign: 'center', color: 'rgba(0,40,86,0.5)', fontSize: 12, fontWeight: 500 }}>You can cancel it anytime.</p>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function PriceSlot({ price, features, capped }) {
  const Card = (window.SkillcaseDesignSystem_a27963 || {}).PremiumPriceCard;
  if (!Card) return null;
  return <Card price={price} features={features} capped={capped} />;
}

export default UsageLimitPanel;
