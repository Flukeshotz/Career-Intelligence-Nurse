import React from 'react';

/* Tap-to-listen button. A white box with a blue-950/50 hairline and the
   animated waveform inside; while idle it emits two sonar rings and shows the
   handtap bitmap at its lower-right corner as a first-run affordance. The app
   uses four sizes: 40 (quiz question), 48 (vocab word), 52 (listen-and-choose)
   and 80 (grammar hero, 2px navy border, radius 16). */
export function AudioTapButton({ size = 48, playing = false, hand, onClick, style }) {
  const radius = size >= 80 ? 16 : size >= 48 ? 12 : 8;
  const bars = [0.45, 0.75, 1, 0.7, 0.4];
  const glyph = Math.round(size * 0.55);
  return (
    <span style={{ position: 'relative', display: 'inline-flex', flexShrink: 0, ...style }}>
      {!playing ? (
        <React.Fragment>
          <span style={{ position: 'absolute', inset: 0, borderRadius: radius, background: 'rgba(0,40,86,0.3)', animation: 'scPing 1.4s cubic-bezier(0,0,.2,1) infinite', pointerEvents: 'none' }} />
          <span style={{ position: 'absolute', inset: 0, borderRadius: radius, background: 'rgba(0,40,86,0.2)', animation: 'scPulse 2s ease-in-out infinite', pointerEvents: 'none' }} />
        </React.Fragment>
      ) : null}
      <button type="button" onClick={onClick} aria-label="Play pronunciation" style={{
        position: 'relative', zIndex: 1, width: size, height: size, borderRadius: radius, background: 'var(--ui-surface-card)',
        border: size >= 80 ? '2px solid #1e3a8a' : '1px solid rgba(0,40,86,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: 0,
      }}>
        <svg width={glyph} height={glyph} viewBox="0 0 24 24" aria-hidden="true">
          {bars.map((h, i) => (
            <rect key={i} x={2.5 + i * 4.4} y={12 - (h * 9)} width="2.6" height={h * 18} rx="1.3" fill="rgba(0,40,86,0.8)"
              data-motion-essential={playing ? '' : undefined}
              style={playing ? { animation: 'scBar .7s ease-in-out infinite', animationDelay: (i * 0.09) + 's', transformOrigin: 'center' } : undefined} />
          ))}
        </svg>
      </button>
      {!playing && hand ? (
        <img src={hand} alt="" aria-hidden="true" style={{ position: 'absolute', bottom: -27, right: -27, width: 54, pointerEvents: 'none', zIndex: 2, filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.12))', animation: 'scTap 1.5s ease-in-out infinite' }} />
      ) : null}
      <style>{'@keyframes scPing{75%,100%{transform:scale(1.7);opacity:0}}@keyframes scPulse{50%{opacity:.35}}@keyframes scBar{50%{transform:scaleY(.45)}}@keyframes scTap{50%{transform:scale(.94)}}'}</style>
    </span>
  );
}

export default AudioTapButton;
