import React from 'react';

/* Plan summary — the black/50 card at the top of the payment screen. A gold
   gem well with "Premium Plan" and "Monthly Plan" opposite it, four ticked
   entitlements beside a 96px diamond, then a divider and the Price Details
   block: the plan fee, a rule, and the total in semibold. */
const DEFAULTS = ['Unlimited AI conversations', 'Unlimited German lessons', 'Unlimited Flashcards', 'Unlimited learning & many more'];

export function PlanSummaryCard({ title = 'Premium Plan', cadence = 'Monthly Plan', features = DEFAULTS, image, fee = '₹99', total = '₹99', style }) {
  return (
    <div style={{ padding: 16, background: 'rgba(0,0,0,0.5)', borderRadius: 12, display: 'flex', flexDirection: 'column', gap: 16, boxSizing: 'border-box', ...style }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ padding: 4, background: 'var(--ui-progress-fill)', borderRadius: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#002856" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20" /></svg>
          </span>
          <span style={{ color: '#fff', fontSize: 16, fontWeight: 600 }}>{title}</span>
        </div>
        <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: 12 }}>{cadence}</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
          {features.map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 10, height: 10, borderRadius: 9999, background: 'var(--ui-success-fill)', flexShrink: 0, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
              <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: 12 }}>{f}</span>
            </div>
          ))}
        </div>
        {image ? <img src={image} alt="" aria-hidden="true" style={{ width: 96, height: 96, borderRadius: 24, objectFit: 'cover', flexShrink: 0 }} /> : null}
      </div>
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.4)' }} />
      <span style={{ color: '#fff', fontSize: 16, fontWeight: 500 }}>Price Details</span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontSize: 12 }}>{title} fee</span>
          <span style={{ color: '#fff', fontSize: 12 }}>{fee}</span>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.4)' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>Total Amount</span>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 600 }}>{total}</span>
        </div>
      </div>
    </div>
  );
}

export default PlanSummaryCard;
