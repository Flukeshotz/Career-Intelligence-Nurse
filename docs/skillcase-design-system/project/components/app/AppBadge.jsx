import React from 'react';

/* Production Badge — port of src/components/ui/Badge.jsx.
   10px medium text, full-radius pill, optional pinging status dot. */
const VARIANTS = {
  success: { background: '#cdf5db', color: 'var(--ui-progress-fill-done)', dot: 'var(--ui-progress-fill-done)' },
  warning: { background: '#ffebbe', color: '#c48b0e', dot: '#c48b0e' },
  neutral: { background: '#f3f4f6', color: '#4b5563', dot: '#9ca3af' },
};

export function AppBadge({ variant = 'neutral', dot = false, children = 'Label', style }) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '2px 8px', borderRadius: 9999,
      fontFamily: "var(--font-family, 'Poppins', sans-serif)",
      fontSize: 10, fontWeight: 500, whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-xs, 0px 1px 2px 0px rgba(10,13,18,0.05))',
      background: v.background, color: v.color, ...style,
    }}>
      {dot ? <span style={{ width: 8, height: 8, borderRadius: 9999, background: v.dot, flexShrink: 0 }} /> : null}
      {children}
    </span>
  );
}

export default AppBadge;
