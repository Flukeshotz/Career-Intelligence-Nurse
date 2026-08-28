import React from 'react';

/* Entitlement chip — port of src/components/ui/FeatureStatusChip.jsx.
   Three mutually exclusive outcomes, in the order the app checks them:
   unlimited → "Unlimited usage", hard-locked → "Premium", capped → a daily
   limit meter. Every feature card on the home screen carries exactly one. */
function Pill({ background, color, children }) {
  return (
    <span style={{
      padding: '2px 4px', borderRadius: 40, display: 'inline-flex',
      alignItems: 'center', justifyContent: 'center', gap: 6,
      background, color,
    }}>
      <span style={{ fontFamily: "var(--font-family, 'Poppins', sans-serif)", fontSize: 8, fontWeight: 500, lineHeight: '10.4px', whiteSpace: 'nowrap' }}>{children}</span>
    </span>
  );
}

export function FeatureStatusChip({ status = 'unlimited', used = 1, limit = 3, style }) {
  if (status === 'premium') return <span style={style}><Pill background="#fef9c3" color="#a16207">Premium</Pill></span>;
  if (status === 'unlimited') return <span style={style}><Pill background="rgba(1,144,53,0.1)" color="#019035">Unlimited usage</Pill></span>;
  const pct = limit > 0 ? Math.round((Math.min(used, limit) / limit) * 100) : 0;
  return (
    <div style={{ width: 128, padding: 4, background: 'var(--ui-surface-sunken)', borderRadius: 6, display: 'flex', flexDirection: 'column', gap: 10, ...style }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 1, alignSelf: 'stretch' }}>
        <span style={{ fontFamily: "var(--font-family, 'Poppins', sans-serif)", fontSize: 8, fontWeight: 500, lineHeight: '10px', color: 'rgba(0,0,0,0.5)', whiteSpace: 'nowrap' }}>Free Plan - Daily limit</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, alignSelf: 'stretch' }}>
          <div style={{ flex: 1, height: 4, background: 'rgba(0,0,0,0.2)', borderRadius: 31, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: pct + '%', background: '#172554', borderRadius: 31, transition: 'width .3s' }} />
          </div>
          <span style={{ fontFamily: "var(--font-family, 'Poppins', sans-serif)", fontSize: 8, fontWeight: 500, lineHeight: '10px', color: 'rgba(0,0,0,0.8)' }}>{Math.min(used, limit)}/{limit}</span>
        </div>
      </div>
    </div>
  );
}

export default FeatureStatusChip;
