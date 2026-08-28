import React from 'react';

/* Benefit line — port of src/components/ui/CheckItem.jsx.
   20px round icon well + 15px semibold copy, used on paywall and plan screens. */
const V = {
  light: { bg: '#f5f5f5', icon: 'var(--ui-text-brand)', text: 'var(--ui-text-secondary)', opacity: 1 },
  dark: { bg: '#003d83', icon: 'var(--ui-action-primary-bg)', text: '#ffffff', opacity: 0.8 },
  accent: { bg: '#f8f8f8', icon: 'var(--ui-action-primary-bg)', text: '#535862', opacity: 1 },
};

export function CheckItem({ variant = 'light', children = 'Unlimited lessons every day', style }) {
  const v = V[variant] || V.light;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12, ...style }}>
      <span style={{ flexShrink: 0, width: 20, height: 20, borderRadius: 9999, background: v.bg, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={v.icon} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
      </span>
      <p style={{ margin: 0, fontFamily: "var(--font-family, 'Poppins', sans-serif)", fontSize: 15, lineHeight: 1.4, fontWeight: 600, color: v.text, opacity: v.opacity }}>{children}</p>
    </div>
  );
}

export default CheckItem;
