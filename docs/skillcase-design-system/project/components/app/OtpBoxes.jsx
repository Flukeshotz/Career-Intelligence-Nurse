import React from 'react';

/* OTP boxes — the 6-digit code entry in onboarding.
   Square boxes at radius 8 with the app's skeuomorphic field ring
   (2px #DBDBDB inset + the 18%/5% inner shadows + a 1px drop), Inter
   SemiBold 18/24. Filled boxes turn navy; the focused box rings blue. */
export function OtpBoxes({ length = 6, value = '', focusIndex = -1, style }) {
  const digits = String(value).slice(0, length).split('');
  return (
    <div style={{ display: 'flex', gap: 8, ...style }}>
      {Array.from({ length }).map((_, i) => {
        const d = digits[i];
        const focused = i === focusIndex;
        return (
          <span key={i} style={{
            flex: 1, height: 48, borderRadius: 8, background: 'var(--ui-surface-card)',
            boxShadow: focused
              ? 'inset 0 0 0 2px rgb(30,118,243), 0px 1px 2px 0px rgba(10,13,18,0.05)'
              : 'inset 0 0 0 2px rgb(219,219,219), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)',
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '24px',
            color: d ? 'var(--ui-surface-inverse-alt)' : 'rgba(24,29,39,0.5)',
          }}>{d || ''}</span>
        );
      })}
    </div>
  );
}

/* Phone field — the +91 prefix box beside the number field, same ring. */
export function PhoneField({ dialCode = '+91', value = '', placeholder = 'XXXXX-XXXXX', style }) {
  const ring = 'inset 0 0 0 2px rgb(219,219,219), inset 0px 0px 0px 1px rgba(10,13,18,0.18), inset 0px -2px 0px 0px rgba(10,13,18,0.05), 0px 1px 2px 0px rgba(10,13,18,0.05)';
  return (
    <div style={{ display: 'flex', gap: 10, ...style }}>
      <span style={{ width: 57, height: 48, borderRadius: 8, background: 'var(--ui-surface-card)', boxShadow: ring, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '24px', color: 'rgba(24,29,39,0.5)', flexShrink: 0 }}>{dialCode}</span>
      <span style={{ flex: 1, height: 48, borderRadius: 8, background: 'var(--ui-surface-card)', boxShadow: ring, display: 'inline-flex', alignItems: 'center', padding: 12, boxSizing: 'border-box', fontFamily: "'Inter',sans-serif", fontWeight: 600, fontSize: 18, lineHeight: '24px', color: value ? 'var(--ui-surface-inverse-alt)' : 'rgba(24,29,39,0.35)' }}>{value || placeholder}</span>
    </div>
  );
}

export default OtpBoxes;
