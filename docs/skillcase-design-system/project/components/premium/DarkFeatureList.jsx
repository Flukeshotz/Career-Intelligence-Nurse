import React from 'react';

/* Entitlement list for the navy trial and payment screens — the same rows as
   `PremiumPriceCard` but inverted: white labels, white "Unlimited", green
   tick. `capped` adds the black/60 "Premium Plan features" tab above a
   black/30 well. Used on the trial offer and the trial-started screens. */
const DEFAULTS = ['Streak Challenges', 'German Lessons', 'Flashcards', 'Pronunciation practice', 'Exam practice'];

export function DarkFeatureList({ features = DEFAULTS, capped = true, label = 'Premium Plan features', style }) {
  const rows = (
    <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 4 }}>
      {features.map((f) => (
        <div key={f} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ color: '#fff', fontSize: 14 }}>{f}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
            <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>Unlimited</span>
            <span style={{ width: 10, height: 10, borderRadius: 9999, background: 'var(--ui-success-fill)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
  if (!capped) return <div style={{ alignSelf: 'stretch', ...style }}>{rows}</div>;
  return (
    <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', ...style }}>
      <div style={{ alignSelf: 'stretch', padding: '4px 6px 8px', background: 'var(--ui-scrim)', borderRadius: '12px 12px 0 0', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fcd34d" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 12L2 9Z" /><path d="M2 9h20" /></svg>
        <span style={{ color: '#fff', fontSize: 14 }}>{label}</span>
      </div>
      <div style={{ alignSelf: 'stretch', padding: '10px 16px 16px', background: 'rgba(0,0,0,0.3)', borderRadius: '0 0 12px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, boxSizing: 'border-box' }}>{rows}</div>
    </div>
  );
}

export default DarkFeatureList;
