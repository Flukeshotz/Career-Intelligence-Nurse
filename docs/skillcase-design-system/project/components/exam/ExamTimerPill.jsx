import React from 'react';

/* The section countdown chip. Identical markup in all four B1 exam
   workspaces (Reading/Writing/Listening/Speaking), each of which also
   redeclares its own formatSeconds — eight copies of the same mm:ss
   formatter ship today. The pill has ONE visual state in production: it
   does not turn amber or red as time runs out. `tone` is offered because
   a silent countdown on an assessed section is a product gap worth
   testing, not because the code has it. */
export function ExamTimerPill({ seconds = 0, tone = 'neutral', style }) {
  const total = Math.max(0, Math.round(Number(seconds) || 0));
  const mm = String(Math.floor(total / 60)).padStart(2, '0');
  const ss = String(total % 60).padStart(2, '0');
  const tones = {
    neutral: { bg: 'var(--ui-surface-sunken)', border: 'var(--ui-surface-sunken)', ink: 'var(--ui-text-primary)' },
    warning: { bg: 'rgba(252,211,77,.28)', border: 'rgba(245,158,11,.35)', ink: 'var(--ui-warning-ink)' },
    critical: { bg: 'rgba(239,68,68,.12)', border: 'rgba(239,68,68,.3)', ink: 'var(--ui-danger-ink)' },
  };
  const c = tones[tone] || tones.neutral;
  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 8px', background: c.bg, border: '1px solid ' + c.border, borderRadius: 40, ...style }}>
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={c.ink} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
      <span style={{ fontSize: 12, fontWeight: 500, lineHeight: '20px', color: c.ink, fontVariantNumeric: 'tabular-nums' }}>{mm}:{ss}</span>
    </div>
  );
}

export default ExamTimerPill;
