import React from 'react';

/* Word pill for unjumble and match-the-image. `bank` is the draggable source
   pill; `placed` sits on the sentence underline; `spent` is the greyed
   placeholder left behind in the bank; `correct`/`incorrect` add the tick or
   cross badge after Check; `dragging` is the blue overlay under the finger. */
const P = {
  bank: { bg: '#fff', edge: 'var(--ui-track-ring)', fg: '#111827' },
  placed: { bg: '#fff', edge: 'var(--ui-track-ring)', fg: '#111827' },
  spent: { bg: '#e5e5e5', edge: 'var(--ui-track-ring)', fg: '#6b7280' },
  correct: { bg: 'rgba(209,250,229,0.5)', edge: 'var(--ui-success-fg)', fg: 'var(--ui-success-fg)' },
  incorrect: { bg: 'rgba(254,205,211,0.4)', edge: 'var(--ui-danger-fg)', fg: 'var(--ui-danger-fg)' },
  dragging: { bg: '#fff', edge: 'var(--ui-action-busy-bg)', fg: '#2563eb' },
};

export function WordChip({ label = 'Wort', state = 'bank', onClick, style }) {
  const p = P[state] || P.bank;
  const badge = state === 'correct' ? 'var(--ui-success-fg)' : state === 'incorrect' ? 'var(--ui-danger-fg)' : null;
  return (
    <button type="button" onClick={onClick} style={{
      padding: state === 'placed' || badge ? '6px 16px' : '8px 12px', borderRadius: 8,
      background: p.bg, border: (state === 'dragging' ? '2px solid ' : '1px solid ') + p.edge,
      boxShadow: state === 'dragging' ? '0 10px 24px rgba(0,0,0,.18)' : '0 1px 2px rgba(0,0,0,0.05)',
      display: 'inline-flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap',
      opacity: state === 'spent' ? 0.5 : 1, cursor: state === 'spent' ? 'default' : 'grab',
      transform: state === 'dragging' ? 'scale(1.05)' : 'none', ...style,
    }}>
      <span style={{ color: p.fg, fontSize: state === 'placed' || badge ? 15 : 14, fontWeight: 500, lineHeight: '20px' }}>{label}</span>
      {badge ? (
        <span style={{ width: 14, height: 14, borderRadius: 9999, background: badge, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {state === 'correct' ? <path d="M20 6 9 17l-5-5" /> : <path d="M18 6 6 18M6 6l12 12" />}
          </svg>
        </span>
      ) : null}
    </button>
  );
}

export default WordChip;
