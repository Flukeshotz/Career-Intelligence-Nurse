import React from 'react';

/* Pipeline step — one row of the lobby checklist. A 24px connector node on the
   left (green #15803d with a tick when done, navy with the step number when
   active or in review, 10% navy with a padlock when locked) joined by a 1.5px
   rule to the next row, and a white radius-16 card on the right holding the
   step title, its description, and an uppercase status tag: done / pending /
   review / locked. The active and review cards get a navy 60% border, a soft
   shadow, and an inline navy button — "Start this step", or "Check status" on a
   review step, or the server's own button_title. */
const TAG = {
  done: { bg: '#f0fdf4', fg: 'var(--ui-success-fg)', edge: '#dcfce7', label: 'done' },
  pending: { bg: '#fffbeb', fg: '#d97706', edge: '#fef3c7', label: 'pending' },
  review: { bg: '#eff6ff', fg: '#1d4ed8', edge: 'var(--ui-surface-info)', label: 'review' },
  locked: { bg: 'var(--ui-surface-subtle)', fg: 'var(--ui-text-faint)', edge: 'var(--ui-surface-muted)', label: 'locked' },
};

export function JobStepCard({ index = 1, title = 'Profile completion', description = '', status = 'locked', buttonLabel, last = false, onStart, style }) {
  const done = status === 'done';
  const active = status === 'pending';
  const review = status === 'review';
  const locked = status === 'locked';
  const t = TAG[status] || TAG.locked;
  const nodeBg = done ? 'var(--ui-success-fg)' : active || review ? 'var(--ui-text-brand)' : 'rgba(0,40,86,0.1)';
  const nodeFg = done || active || review ? '#fff' : 'rgba(0,40,86,0.4)';
  return (
    <div style={{ alignSelf: 'stretch', display: 'flex', alignItems: 'stretch', gap: 14, width: '100%', ...style }}>
      <div style={{ width: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
        <div style={{ padding: '6px 0' }}>
          <div style={{ width: 24, height: 24, borderRadius: 9999, background: nodeBg, color: nodeFg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, boxShadow: '0 1px 2px rgba(0,0,0,.05)' }}>
            {done ? (
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
            ) : locked ? (
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
            ) : index}
          </div>
        </div>
        {last ? null : <div style={{ flex: 1, width: 1.5, background: 'rgba(0,40,86,0.2)', margin: '2px 0' }} />}
      </div>
      <div style={{ flex: 1, paddingBottom: 24, width: '100%', opacity: locked ? 0.6 : 1 }}>
        {/* No onClick here: the card already contains a real <button> for the
            same action. A clickable wrapper around a button nests two
            interactive elements and makes the card unreachable by keyboard
            except through the inner control. Phase 7. */}
        <div style={{
          padding: 16, background: 'var(--ui-surface-card)', borderRadius: 16, width: '100%', boxSizing: 'border-box',
          border: '1px solid ' + (active || review ? 'rgba(0,40,86,0.6)' : 'rgba(0,40,86,0.1)'),
          boxShadow: active || review ? '0 4px 12px rgba(0,40,86,0.06)' : '0 1px 3px rgba(0,0,0,0.02)',
          cursor: locked || done ? 'default' : 'pointer',
          display: 'flex', flexDirection: 'column', gap: 16,
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, width: '100%', textAlign: 'left' }}>
            <div style={{ flex: 1, minWidth: 0 }}>
              <h3 style={{ margin: 0, color: 'var(--ui-text-body)', fontSize: 16, fontWeight: 600, lineHeight: 1.25 }}>{title}</h3>
              {description ? <p style={{ margin: '4px 0 0', color: 'var(--ui-text-secondary)', fontSize: 12, lineHeight: 1.55 }}>{description}</p> : null}
            </div>
            <span style={{ padding: '2px 8px', borderRadius: 9999, fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', flexShrink: 0, background: t.bg, color: t.fg, border: '1px solid ' + t.edge }}>{t.label}</span>
          </div>
          {active || review ? (
            <button type="button" onClick={onStart} style={{ width: '100%', padding: '12px 0', background: 'var(--ui-text-brand)', color: '#fff', borderRadius: 8, border: 'none', fontSize: 14, fontWeight: 700, cursor: 'pointer' }}>
              {buttonLabel || (review ? 'Check status' : 'Start this step')}
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default JobStepCard;
