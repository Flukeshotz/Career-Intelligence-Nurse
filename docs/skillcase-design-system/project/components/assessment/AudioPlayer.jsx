import React from 'react';

/* Recorded-audio playback bar. A 48px slate square play/pause button, a label
   opposite the elapsed/total timestamp, and a 12px amber-filled track.
     workspace  white card, zinc-200 border + track, bold slate label
     review     transparent, black/20 border, zinc-300 track, inline label
   Amber fill is the same in both — only the chrome changes. */
export function AudioPlayer({ playing = false, time = 0, duration = 0, label, onPlayPause, variant = 'workspace', style }) {
  const review = variant === 'review';
  const pct = (Number(time) / (Number(duration) || 1)) * 100;
  const fmt = (s) => {
    const v = Math.max(0, Math.round(Number(s) || 0));
    return Math.floor(v / 60) + ':' + String(v % 60).padStart(2, '0');
  };
  return (
    <div style={{ width: '100%', padding: 12, background: review ? 'transparent' : '#fff', border: '1px solid ' + (review ? 'rgba(0,0,0,0.2)' : 'var(--ui-border-default)'), borderRadius: review ? 8 : 12, display: 'inline-flex', alignItems: 'center', gap: review ? 12 : 14, boxSizing: 'border-box', ...style }}>
      <button type="button" onClick={onPlayPause} aria-label={playing ? 'Pause' : 'Play'} style={{ width: 48, height: 48, background: 'var(--ui-border-default)', borderRadius: 6, border: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'pointer' }}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#172554" aria-hidden="true">{playing ? <React.Fragment><rect x="6" y="4" width="4" height="16" /><rect x="14" y="4" width="4" height="16" /></React.Fragment> : <path d="M8 5v14l11-7z" />}</svg>
      </button>
      <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: review ? 4 : 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ textAlign: 'left', color: review ? '#000' : 'var(--ui-text-body)', fontSize: 14, fontWeight: review ? 400 : 700 }}>{label || (review ? 'Recorded audio' : 'Recorded Audio')}</span>
          <span style={{ textAlign: 'right', color: review ? 'rgba(0,0,0,0.3)' : 'var(--ui-text-faint)', fontSize: review ? 14 : 13, fontWeight: review ? 400 : 500, userSelect: 'none' }}>{fmt(time)} / {fmt(duration)}</span>
        </div>
        <div style={{ width: '100%', height: 12, position: 'relative', background: review ? 'var(--ui-track-ring)' : 'var(--ui-border-default)', borderRadius: 9999, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: pct + '%', background: '#fbbf24', borderRadius: 9999, transition: 'width .075s' }} />
        </div>
      </div>
    </div>
  );
}

export default AudioPlayer;
