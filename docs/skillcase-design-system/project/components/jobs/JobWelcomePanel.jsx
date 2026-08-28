import React from 'react';

/* The job pipeline's FIRST screen — a full-bleed navy gradient page, not a
   card. Shown while `current_step_id === 'welcome'`; completing it animates
   into the progress lobby.
   The seal is two concentric discs: a dark navy ring carrying "OPEN TO WORK"
   set around BOTH arcs (upright along the top, inverted along the bottom, with
   a dot separating them at each side), and a light-blue inner disc holding
   Maya. Below it the headline, the promise line, then two benefits side by side
   divided by a hairline: German Placement Support and Direct Recruiter Access.
   The amber CTA and a plain white Back close the screen. */
export function JobWelcomePanel({
  mascot,
  seal = 'OPEN TO WORK',
  title = 'Welcome to Skillcase Jobs',
  body = 'You are just few steps away from getting placed in Germany',
  benefits = [
    { icon: 'plane', label: 'German Placement Support' },
    { icon: 'stack', label: 'Direct Recruiter Access' },
  ],
  ctaLabel = 'Start Job Screening',
  onStart,
  onBack,
  style,
}) {
  const ICONS = {
    plane: <path d="M17.8 19.2 16 11l3.5-3.5a2.1 2.1 0 0 0-3-3L13 8 4.8 6.2a.8.8 0 0 0-.8 1.3l4.5 3.3-2 2.3-2.2-.4a.7.7 0 0 0-.7 1.1l2.2 2.6 2.6 2.2a.7.7 0 0 0 1.1-.7l-.4-2.2 2.3-2 3.3 4.5a.8.8 0 0 0 1.3-.8Z" />,
    stack: <React.Fragment><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v5c0 1.7 3.1 3 7 3s7-1.3 7-3V6" /><path d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5" /></React.Fragment>,
  };
  return (
    <div style={{
      minHeight: '100%', background: 'linear-gradient(180deg,#052252 0%,#062a63 45%,#0b3d86 100%)',
      padding: '36px 24px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center',
      justifyContent: 'space-between', gap: 32, boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 34, width: '100%' }}>
        <div style={{ position: 'relative', width: 208, height: 208, borderRadius: 9999, background: '#0a2c62', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <svg viewBox="0 0 208 208" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} aria-hidden="true">
            <defs>
              <path id="scSealTop" d="M 104,104 m -84,0 a 84,84 0 0 1 168,0" />
              <path id="scSealBottom" d="M 104,104 m 84,0 a 84,84 0 0 1 -168,0" />
            </defs>
            <text fill="#ffffff" fontSize="15" fontWeight="600" letterSpacing="5.5" textAnchor="middle">
              <textPath href="#scSealTop" startOffset="50%">{seal}</textPath>
            </text>
            <text fill="#ffffff" fontSize="15" fontWeight="600" letterSpacing="5.5" textAnchor="middle">
              <textPath href="#scSealBottom" startOffset="50%">{seal}</textPath>
            </text>
            <circle cx="17" cy="104" r="2.4" fill="#ffffff" />
            <circle cx="191" cy="104" r="2.4" fill="#ffffff" />
          </svg>
          <div style={{ width: 152, height: 152, borderRadius: 9999, overflow: 'hidden', background: 'linear-gradient(180deg,#5b9be8,#8dc0f5)', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flexShrink: 0 }}>
            {mascot ? <img src={mascot} alt="" aria-hidden="true" style={{ width: '92%', height: '96%', objectFit: 'contain', objectPosition: 'bottom' }} /> : null}
          </div>
        </div>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ margin: 0, color: '#fff', fontSize: 34, fontWeight: 700, lineHeight: 1.18, letterSpacing: '-.01em' }}>{title}</h1>
          <p style={{ margin: '14px auto 0', maxWidth: 300, color: '#93a9c9', fontSize: 15, lineHeight: 1.45 }}>{body}</p>
        </div>
        <div style={{ display: 'flex', width: '100%', maxWidth: 330, alignItems: 'stretch' }}>
          {benefits.map((b, i) => (
            <React.Fragment key={b.label}>
              {i ? <span style={{ width: 1, background: 'rgba(255,255,255,0.18)', flexShrink: 0, margin: '2px 0' }} /> : null}
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, padding: '0 10px', textAlign: 'center' }}>
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#dce7f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">{ICONS[b.icon] || ICONS.plane}</svg>
                <span style={{ color: '#a9bdd8', fontSize: 14, lineHeight: 1.35 }}>{b.label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <button type="button" onClick={onStart} style={{ width: '100%', padding: '16px 16px', background: 'linear-gradient(90deg,#f7dc95,#e8b53e)', color: '#002856', border: 'none', borderRadius: 10, fontSize: 17, fontWeight: 700, cursor: 'pointer' }}>{ctaLabel}</button>
        <button type="button" onClick={onBack} style={{ width: '100%', padding: '14px 16px', background: 'none', border: 'none', color: '#fff', fontSize: 16, fontWeight: 700, cursor: 'pointer' }}>Back</button>
      </div>
    </div>
  );
}

export default JobWelcomePanel;
