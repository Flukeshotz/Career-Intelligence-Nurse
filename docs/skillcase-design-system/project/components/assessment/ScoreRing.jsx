import React from 'react';
import { scoreColors, scoreScales } from './scoreBands.js';

/* The circular score readout at the top of every results screen. A #D4D4D8
   track under a banded arc, rotated -90° so it fills from twelve o'clock, with
   the percentage at 30px semibold and an 8px caption clamped to 80px.

   `bands` is exposed because the exam screens hand-roll their own ring at
   size 120 / stroke 10 instead of reusing this one — the geometry is
   parameterised so those can be reproduced without a second component. */
export function ScoreRing({ score = 0, label = 'overall writing accuracy', circleSize = 160, strokeWidth = 12, bands = scoreScales.canonical, style }) {
  const radius = (circleSize - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (Number(score || 0) / 100) * circumference;
  return (
    <div style={{ position: 'relative', width: circleSize, height: circleSize, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, ...style }}>
      <svg width={circleSize} height={circleSize} style={{ transform: 'rotate(-90deg)' }}>
        <circle stroke="#D4D4D8" fill="transparent" strokeWidth={strokeWidth} r={radius} cx={circleSize / 2} cy={circleSize / 2} />
        <circle stroke={scoreColors(score, bands).stroke} fill="transparent" strokeWidth={strokeWidth} strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round" r={radius} cx={circleSize / 2} cy={circleSize / 2} style={{ transition: 'stroke-dashoffset .5s ease-out' }} />
      </svg>
      <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
        <span style={{ color: 'var(--ui-text-primary)', fontSize: circleSize >= 160 ? 30 : 24, fontWeight: 600, lineHeight: 1.2 }}>{score}%</span>
        <span style={{ width: 80, textAlign: 'center', color: 'var(--ui-text-primary)', fontSize: 8, fontWeight: 600, lineHeight: 1.4 }}>{label}</span>
      </div>
    </div>
  );
}

export default ScoreRing;
