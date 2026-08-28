import React from 'react';

/* "Please note" strip — the single most repeated element in the job pipeline.
   Maya at 40px beside a pale panel holding a bold "Please note" line and one
   or two lines of caution copy. It appears on every waiting, review and
   scheduling screen. */
export function MayaNote({ mascot, text = 'Typically takes around 24-48 hrs. You will be notified on WhatsApp.', label = 'Please note', style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, background: '#eff5ff', border: '1px solid #dbe8fb', borderRadius: 10, padding: 10, boxSizing: 'border-box', ...style }}>
      {mascot ? <img src={mascot} alt="" aria-hidden="true" style={{ width: 40, height: 40, objectFit: 'contain', flexShrink: 0 }} /> : null}
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--ui-text-brand)' }}>{label}</div>
        <div style={{ fontSize: 11, lineHeight: 1.5, color: '#5b6472' }}>{text}</div>
      </div>
    </div>
  );
}

export default MayaNote;
