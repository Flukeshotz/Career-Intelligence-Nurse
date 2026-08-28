import React from 'react';
import { scoreColors, scoreScales } from './scoreBands.js';

/* One scored metric: its name, an `n/100` readout in the band colour, and a
   filled track. Two variants ship in production —
     workspace  12px track on zinc-300, 12px normal-weight label
     compact     6px track on zinc-200, medium label, semibold score
   The compact form is the one used on success and review pages. */
export function MetricBar({ label = 'Grammar', score = 0, variant = 'workspace', bands = scoreScales.canonical, style }) {
  const c = scoreColors(score, bands);
  const pct = Math.min(100, Math.max(0, Number(score || 0)));
  const compact = variant === 'compact';
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 4, ...style }}>
      <div style={{ width: '100%', display: 'inline-flex', justifyContent: 'space-between', alignItems: compact ? 'center' : 'flex-start', gap: 4, fontSize: 12 }}>
        <span style={{ flex: 1, textAlign: 'left', color: compact ? 'var(--ui-text-secondary)' : '#000', fontWeight: compact ? 500 : 400, lineHeight: compact ? 1.4 : 2 }}>{label}</span>
        <span style={{ textAlign: 'right', color: c.text, fontWeight: compact ? 600 : 400, lineHeight: compact ? 1.4 : 2 }}>{score}/100</span>
      </div>
      <div style={{ width: '100%', height: compact ? 6 : 12, position: 'relative', background: compact ? 'var(--ui-border-default)' : 'var(--ui-track-ring)', borderRadius: 42, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: pct + '%', background: c.fill, borderRadius: 31, transition: 'width .5s' }} />
      </div>
    </div>
  );
}

export default MetricBar;
