import React from 'react';

/* Level Complete — the modal that closes a Guided German lesson. A blue-100 →
   sky-100 sheet: the title, Maya's closing line in a bubble with a tail, Maya
   standing in two concentric white discs, then the golden stats card.
   Each stat is a black/50 track with a red→orange fill; the icon bubble rides
   the end of the fill and pokes out of the track. Streak is omitted unless the
   lesson actually extended it. */
function StatRow({ icon, label, value, width }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <span style={{ color: 'rgba(0,0,0,0.7)', fontSize: 10, fontWeight: 500 }}>{label}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, height: 16, background: 'rgba(0,0,0,0.5)', borderRadius: 9999, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 3, left: 3, height: 10, width: 'calc(' + width + ' - 6px)', background: 'linear-gradient(90deg,#f87171,#fdba74)', borderRadius: 9999 }} />
          <div style={{ position: 'absolute', top: '50%', left: width, transform: 'translate(-50%,-50%)', width: 28, height: 28, borderRadius: 9999, background: 'var(--ui-surface-card)', border: '2px solid #fdba74', boxShadow: '0 4px 6px rgba(0,0,0,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
            {icon ? <img src={icon} alt="" aria-hidden="true" style={{ width: 20, height: 20, objectFit: 'contain' }} /> : null}
          </div>
        </div>
        <span style={{ color: 'rgba(0,0,0,0.5)', fontSize: 14, fontWeight: 600, flexShrink: 0, marginLeft: 12 }}>{value}</span>
      </div>
    </div>
  );
}

export function LevelCompleteCard({
  title = 'Level Complete!',
  dialogue = 'Awesome! Now you can talk to the baker in German.',
  mascot,
  coinIcon,
  streakIcon,
  flagIcon,
  coins = 20,
  streakUpdated = true,
  vocabCount = 8,
  ctaLabel = 'Start next lesson',
  onContinue,
  onClose,
  style,
}) {
  return (
    <div style={{ width: 400, maxWidth: '100%', position: 'relative', background: 'linear-gradient(180deg,#dbeafe,#e0f2fe)', borderRadius: 24, overflow: 'hidden', boxShadow: '0 25px 50px rgba(0,0,0,.25)', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '40px 16px 24px', gap: 20, boxSizing: 'border-box', ...style }}>
      <button type="button" onClick={onClose} aria-label="Close" style={{ position: 'absolute', right: 12, top: 12, width: 24, height: 24, background: 'rgba(0,0,0,0.25)', border: 'none', borderRadius: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 50 }}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
      </button>
      <h2 style={{ margin: 0, color: '#172554', fontSize: 24, fontWeight: 700, textAlign: 'center', lineHeight: 1.15 }}>{title}</h2>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
        <div style={{ position: 'relative', zIndex: 40, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ background: 'var(--ui-surface-card)', borderRadius: 16, padding: '12px 20px', maxWidth: 270, textAlign: 'center', border: '1px solid var(--ui-border-default)', boxShadow: '0 1px 2px rgba(0,0,0,.05)' }}>
            <p style={{ margin: 0, color: '#000', fontSize: 15, fontWeight: 500, lineHeight: 1.35 }}>{dialogue}</p>
          </div>
          <div style={{ width: 0, height: 0, borderLeft: '8px solid transparent', borderRight: '8px solid transparent', borderTop: '10px solid #fff', filter: 'drop-shadow(0 1px 0 var(--ui-border-default))' }} />
        </div>
        <div style={{ position: 'relative', width: '100%', height: 156, display: 'flex', justifyContent: 'center' }}>
          <div style={{ position: 'absolute', width: 240, height: 240, background: 'rgba(255,255,255,0.4)', borderRadius: 9999, top: -60 }} />
          <div style={{ position: 'absolute', width: 160, height: 160, background: 'var(--ui-surface-card)', borderRadius: 9999, top: -20 }} />
          {mascot ? <img src={mascot} alt="" aria-hidden="true" style={{ position: 'relative', zIndex: 10, height: 160, objectFit: 'contain', alignSelf: 'flex-end', transform: 'translateY(20px)', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.2))' }} /> : null}
        </div>
      </div>
      <div style={{ width: '100%', background: 'linear-gradient(135deg,#fef08a,#fb923c)', borderRadius: 16, boxShadow: '0 10px 15px rgba(0,0,0,.1)', padding: 16, display: 'flex', flexDirection: 'column', gap: 16, outline: '4px solid #fefce8', outlineOffset: -4, boxSizing: 'border-box' }}>
        <span style={{ color: 'rgba(0,0,0,0.5)', fontSize: 12, fontWeight: 600, letterSpacing: '.1em', textAlign: 'center', textTransform: 'uppercase' }}>Today&apos;s Goal Progress</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 4px' }}>
          <StatRow icon={coinIcon} label="Coins" value={'+' + coins} width={coins > 0 ? '80%' : '0%'} />
          {streakUpdated ? <StatRow icon={streakIcon} label="Days Streak" value="+1" width="92%" /> : null}
          <StatRow icon={flagIcon} label="German words learnt" value={'+' + vocabCount} width="75%" />
        </div>
        <button type="button" onClick={onContinue} style={{ width: '100%', padding: '14px 16px', background: 'linear-gradient(90deg,#1e3a8a,#172554)', border: 'none', borderRadius: 9999, color: '#fff', fontSize: 16, fontWeight: 600, boxShadow: '0 3px 8px rgba(0,0,0,0.25)', cursor: 'pointer' }}>{ctaLabel}</button>
      </div>
    </div>
  );
}

export default LevelCompleteCard;
