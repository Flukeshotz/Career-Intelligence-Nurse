import React from 'react';

/* Conversation turn — ConversationScreen.jsx. The character speaks on the
   left: a 32px avatar in a white→orange gradient well, then a #E4EFFF bubble
   with the top-left corner square, the German line at 15px medium, an inline
   waveform button, and the English meaning under it at 50% black. The learner's
   committed reply comes back on the right as a white bubble with the top-right
   corner square. Both cap at 75% of the column. */
export function ChatBubble({ side = 'character', text = 'Guten Tag!', meaning, avatar, onPlay, style }) {
  const isChar = side === 'character';
  const bubble = {
    padding: 12, maxWidth: '75%', background: isChar ? '#E4EFFF' : '#fff',
    borderRadius: isChar ? '0 12px 12px 12px' : '12px 0 12px 12px',
    boxShadow: isChar ? 'none' : '0 2px 8px rgba(0,0,0,0.04)',
    display: 'flex', flexDirection: 'column', gap: 2, boxSizing: 'border-box',
  };
  return (
    <div style={{ width: '100%', display: 'inline-flex', justifyContent: isChar ? 'flex-start' : 'flex-end', alignItems: 'flex-start', gap: 12, marginBottom: 24, ...style }}>
      {isChar ? (
        <span style={{ width: 32, height: 32, flexShrink: 0, borderRadius: 9999, overflow: 'hidden', outline: '1px solid #d4d4d4', background: 'linear-gradient(180deg,#fff,#fdba74)', boxShadow: '0 1px 2px rgba(0,0,0,.05)' }}>
          {avatar ? <img src={avatar} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : (
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: '100%' }} fill="none"><circle cx="50" cy="50" r="50" fill="#D1D5DB" /><circle cx="50" cy="38" r="16" fill="#9CA3AF" /><ellipse cx="50" cy="78" rx="28" ry="20" fill="#9CA3AF" /></svg>
          )}
        </span>
      ) : null}
      <div style={bubble}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 16, width: '100%' }}>
          <div style={{ color: '#000', fontSize: 15, fontWeight: 500, lineHeight: '21px' }}>{text}</div>
          {isChar ? (
            <button type="button" onClick={onPlay} aria-label="Play line" style={{ background: 'none', border: 'none', padding: 2, cursor: 'pointer', flexShrink: 0, lineHeight: 0 }}>
              <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                {[0.45, 0.8, 1, 0.6].map((h, i) => <rect key={i} x={3 + i * 5} y={12 - h * 8} width="2.6" height={h * 16} rx="1.3" fill="#172554" />)}
              </svg>
            </button>
          ) : null}
        </div>
        {meaning ? <div style={{ color: 'rgba(0,0,0,0.5)', fontSize: 13, fontWeight: 500 }}>{meaning}</div> : null}
      </div>
    </div>
  );
}

export default ChatBubble;
