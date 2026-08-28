import React from 'react';

/* Premium price card — src/components/UsageLimitModal.jsx. A 5%-black well
   holding the price at 36px bold over a hairline divider, then one row per
   entitlement reading "Unlimited" with a 10px green tick. With `capped`, a
   navy→blue gradient "Premium Plan" tab sits on top of it; the hard-locked
   state drops the tab and shows the well alone. */
const DEFAULTS = ['Streak Challenges', 'German Lessons', 'Flashcards', 'Pronunciation practice', 'Exam practice'];

export function PremiumPriceCard({ price = '₹99', period = '/ month', features = DEFAULTS, capped = true, style }) {
  const well = (
    <div style={{ alignSelf: 'stretch', padding: capped ? '10px 16px 16px' : 16, background: 'var(--ui-surface-sunken)', borderRadius: capped ? '0 0 12px 12px' : 12, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, boxSizing: 'border-box' }}>
      <div style={{ textAlign: 'center' }}>
        <span style={{ color: 'var(--ui-text-brand)', fontSize: 36, fontWeight: 700 }}>{price} </span>
        <span style={{ color: 'var(--ui-text-brand)', fontSize: 16 }}>{period}</span>
      </div>
      <div style={{ alignSelf: 'stretch', borderTop: '1px solid #d6d3d1' }} />
      <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 4 }}>
        {features.map((f) => (
          <div key={f} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ color: 'var(--ui-text-brand)', fontSize: 12 }}>{f}</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              <span style={{ color: 'var(--ui-text-brand)', fontSize: 12, fontWeight: 500 }}>Unlimited</span>
              <span style={{ width: 10, height: 10, borderRadius: 9999, background: 'var(--ui-success-fill)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  if (!capped) return <div style={{ alignSelf: 'stretch', ...style }}>{well}</div>;
  return (
    <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', ...style }}>
      <div style={{ alignSelf: 'stretch', padding: '4px 6px', background: 'linear-gradient(90deg,#002856,#1d4ed8)', borderRadius: '12px 12px 0 0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20" /></svg>
        <span style={{ color: '#fff', fontSize: 12 }}>Premium Plan</span>
      </div>
      {well}
    </div>
  );
}

export default PremiumPriceCard;
