import React from 'react';

/* Answer verdict — shared/QuizResultModal.jsx and DragResultModal.jsx.
   A radius-24 card over a blurred 60% scrim, tinted green-50 or red-50, with a
   48px filled badge, a 24px headline, the answer read back, and a full-width
   coloured button: "Next" when correct, "Try again" when not. */
export function LessonResultModal({ correct = true, answer = 'Das Brot', selected, onPrimary, onClose, style }) {
  const c = correct
    ? { bg: '#f0fdf4', badge: 'var(--ui-success-fill)', head: '#166534', body: 'rgba(22,101,52,0.8)', cta: 'var(--ui-success-fg)', label: 'Next', title: 'Correct!' }
    : { bg: '#fef2f2', badge: 'var(--ui-danger-fg)', head: 'var(--ui-danger-ink)', body: 'rgba(153,27,27,0.8)', cta: 'var(--ui-danger-fg)', label: 'Try again', title: 'Incorrect!' };
  const shown = selected || answer;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 50, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, background: 'var(--ui-scrim)', backdropFilter: 'blur(4px)', ...style }}>
      <div style={{ width: '100%', maxWidth: 340, borderRadius: 24, padding: 24, background: c.bg, boxShadow: '0 24px 48px rgba(0,0,0,.28)', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', boxSizing: 'border-box' }}>
        <button type="button" onClick={onClose} aria-label="Close" style={{ position: 'absolute', top: 16, right: 16, padding: 4, borderRadius: 9999, background: 'var(--ui-surface-sunken)', border: 'none', cursor: 'pointer', color: '#6b7280', lineHeight: 0 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
        <div style={{ width: 48, height: 48, borderRadius: 9999, background: c.badge, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
            {correct ? <path d="M20 6 9 17l-5-5" /> : <path d="M18 6 6 18M6 6l12 12" />}
          </svg>
        </div>
        <h3 style={{ margin: '0 0 12px', fontSize: 24, fontWeight: 700, color: c.head }}>{c.title}</h3>
        <div style={{ textAlign: 'center', marginBottom: 24 }}>
          {correct ? <p style={{ margin: '0 0 4px', fontWeight: 600, color: '#14532d' }}>{answer}</p> : null}
          <p style={{ margin: 0, fontSize: 14, color: c.body }}>{shown} is {correct ? '' : 'not '}the right answer</p>
        </div>
        <button type="button" onClick={onPrimary} style={{ width: '100%', padding: '14px 16px', borderRadius: 12, border: 'none', background: c.cta, color: '#fff', fontSize: 15, fontWeight: 600, cursor: 'pointer' }}>{c.label}</button>
      </div>
    </div>
  );
}

export default LessonResultModal;
