import React from 'react';

/* The pale-blue status card those checklists live in: a 44px rounded navy
   badge, a 20px heading, a line of body copy, the slot for a checklist or
   form, an optional Maya note, and one full-width action. Used for "Profile
   under review", "Profile reviewed successfully", "Agreement signed
   successfully", "Interview under review", "Congratulations" and the rest. */
export function StatusPanel({ icon, title = 'Profile under review', body, children, note, actionLabel, actionVariant = 'primary', onAction, style }) {
  const btn = actionVariant === 'ghost'
    ? { background: 'var(--ui-surface-card)', color: 'var(--ui-text-brand)', border: '1px solid #cbd8e8' }
    : actionVariant === 'amber'
      ? { background: 'linear-gradient(90deg,#fde68a,#fcd34d)', color: 'var(--ui-text-brand)', border: '1px solid #fcd34d' }
      : { background: 'var(--ui-text-brand)', color: '#fff', border: 'none' };
  return (
    <div style={{ background: '#eff6ff', border: '1px solid #dbe8fb', borderRadius: 14, padding: 16, display: 'flex', flexDirection: 'column', gap: 14, boxSizing: 'border-box', ...style }}>
      {icon !== false ? (
        <span style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--ui-text-brand)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon || (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></svg>
          )}
        </span>
      ) : null}
      <div>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)', lineHeight: 1.3 }}>{title}</h2>
        {body ? <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: '#5b6472' }}>{body}</p> : null}
      </div>
      {children}
      {note}
      {actionLabel ? (
        <button type="button" onClick={onAction} style={{ width: '100%', padding: '12px 16px', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer', ...btn }}>{actionLabel}</button>
      ) : null}
    </div>
  );
}

export default StatusPanel;
