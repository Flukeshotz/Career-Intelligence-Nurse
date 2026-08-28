import React from 'react';

/* Maya speech bubble — the guide's voice, used across onboarding, the journey
   and every lesson step. A white bubble at radius 12 with Poppins Medium 17 at
   100% line-height, a 34 × 30.5 tail pointing back at Maya, and a
   0 4px 13px rgba(0,0,0,.25) drop. `side="left"` puts Maya on the left with the
   tail on the bubble's left edge (the app's default). */
export function MayaBubble({
  text = 'Welcome to Skillcase',
  image,
  side = 'left',
  avatarSize = 96,
  bubbleWidth,
  style,
}) {
  const bubble = (
    <span style={{ position: 'relative', display: 'inline-block', flexShrink: 0 }}>
      <svg width="34" height="30.5" viewBox="0 0 34 30.5" style={{
        position: 'absolute', bottom: -6, [side === 'left' ? 'left' : 'right']: -22,
        transform: side === 'left' ? 'none' : 'scaleX(-1)',
      }} fill="#fff"><path d="M 0 30.5 L 34 0 L 34 12.5 L 34 24 L 0 30.5 Z" /></svg>
      <span style={{
        position: 'relative', display: 'block', width: bubbleWidth, borderRadius: 12,
        background: 'var(--ui-surface-card)', padding: 10, boxShadow: '0 4px 13px rgba(0,0,0,0.25)',
        fontFamily: "'Poppins',sans-serif", fontWeight: 500, fontSize: 17, lineHeight: '100%', color: '#000',
      }}>{text}</span>
    </span>
  );
  const avatar = image ? (
    <img src={image} alt="Maya" style={{ width: avatarSize, height: avatarSize, objectFit: 'contain', objectPosition: 'bottom center', flexShrink: 0 }} />
  ) : null;
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 6, flexDirection: side === 'left' ? 'row' : 'row-reverse', ...style }}>
      {avatar}
      {bubble}
    </div>
  );
}

export default MayaBubble;
