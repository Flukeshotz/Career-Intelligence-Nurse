import React from 'react';

/* Security-deposit gate — the `paywall` step of the job pipeline. It is not a
   lobby row: when the candidate's current step is `paywall` this card replaces
   the whole pipeline. A white radius-24 card with Maya at 96px, a slate-50
   bubble with the tail pointing up at her, the refundable amount, the refund
   promise, a navy "Proceed to Pay" and a white call-support button below it.
   Distinct from the premium subscription paywall — this deposit is refundable
   and gates placement, not features. */
export function DepositGateCard({
  mascot,
  message = 'Please give us a try with this refundable security deposit. It ensures your commitment to the placement journey.',
  amount = '₹10,000',
  note = '100% refundable upon completing your onboarding and recruiter process.',
  supportPhone = '+919731462667',
  onPay,
  style,
}) {
  return (
    <div style={{
      width: '100%', maxWidth: 420, background: 'var(--ui-surface-card)', border: '1px solid rgba(226,232,240,0.8)', borderRadius: 24,
      boxShadow: '0 20px 40px rgba(8,50,98,.12)', padding: 32, display: 'flex', flexDirection: 'column',
      alignItems: 'center', textAlign: 'center', gap: 24, boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, width: '100%' }}>
        {mascot ? <img src={mascot} alt="" aria-hidden="true" style={{ width: 96, height: 96, objectFit: 'contain' }} /> : null}
        <div style={{ position: 'relative', background: 'var(--ui-surface-subtle)', border: '1px solid var(--ui-surface-muted)', borderRadius: 16, padding: 16, color: 'var(--ui-text-secondary)', fontSize: 12, fontWeight: 600, lineHeight: 1.6, boxShadow: '0 1px 2px rgba(0,0,0,.04)' }}>
          <div style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: 16, height: 16, background: 'var(--ui-surface-subtle)', borderTop: '1px solid var(--ui-surface-muted)', borderLeft: '1px solid var(--ui-surface-muted)' }} />
          {message}
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
          <span style={{ fontSize: 30, fontWeight: 800, color: 'var(--ui-text-brand)' }}>{amount}</span>
          <span style={{ fontSize: 12, fontWeight: 500, color: 'var(--ui-text-secondary)' }}>(Refundable)</span>
        </div>
        <p style={{ margin: 0, fontSize: 12, color: 'var(--ui-text-secondary)', maxWidth: 320, lineHeight: 1.6 }}>{note}</p>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
        <button type="button" onClick={onPay} style={{ width: '100%', height: 48, background: 'var(--ui-text-brand)', color: '#fff', borderRadius: 12, border: 'none', fontSize: 14, fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></svg>
          <span>Proceed to Pay</span>
        </button>
        <a href={'tel:' + supportPhone} style={{ width: '100%', height: 48, background: 'var(--ui-surface-card)', border: '1px solid var(--ui-border-default)', borderRadius: 12, fontSize: 12, fontWeight: 700, color: 'var(--ui-text-secondary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, boxSizing: 'border-box' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.7a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2Z" /></svg>
          <span>Call Skillcase support at {supportPhone}</span>
        </a>
      </div>
    </div>
  );
}

export default DepositGateCard;
