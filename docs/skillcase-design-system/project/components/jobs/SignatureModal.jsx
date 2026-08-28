import React from 'react';

/* Signature capture — the agreement and offer-letter signing modal. Three
   segmented modes: Type (the name rendered in a script face), Draw (a freehand
   pad), Upload (a dashed click-to-upload well). Submit Sign stays disabled
   until the mode has produced something; the uploaded state adds Next and
   Re-upload beneath it. */
export function SignatureModal({ mode = 'type', name = 'Avinash Rai', signature = 'Avinash Rai', submitted = false, onMode, onSubmit, onBack, style }) {
  const tab = (k, label) => (
    <button key={k} type="button" onClick={() => onMode && onMode(k)} style={{
      flex: 1, padding: '6px 10px', borderRadius: 9999, border: 'none', cursor: 'pointer', fontSize: 12,
      fontWeight: mode === k ? 700 : 500, background: mode === k ? 'var(--ui-text-brand)' : 'transparent', color: mode === k ? '#fff' : '#5b6472',
    }}>{label}</button>
  );
  const canSubmit = mode !== 'upload' || submitted;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, background: 'rgba(0,10,25,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, ...style }}>
      <div style={{ width: '100%', maxWidth: 320, background: 'var(--ui-surface-card)', borderRadius: 12, padding: 16, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 12, boxShadow: '0 24px 48px rgba(0,0,0,.24)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ui-text-brand)' }}>Sign Document</div>
          <button type="button" onClick={onBack} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ui-text-faint)', lineHeight: 0, padding: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <div style={{ display: 'flex', gap: 4, background: 'var(--ui-surface-muted)', borderRadius: 9999, padding: 3 }}>
          {[tab('type', 'Type'), tab('draw', 'Draw'), tab('upload', 'Upload')]}
        </div>
        {mode === 'type' ? (
          <React.Fragment>
            <label style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ fontSize: 11, fontWeight: 600, color: '#5b6472' }}>Type any name</span>
              <span style={{ border: '1px solid #d8e0ea', borderRadius: 8, padding: '9px 11px', fontSize: 13, color: 'var(--ui-text-body)' }}>{name}</span>
            </label>
            <div>
              <div style={{ fontSize: 11, fontWeight: 600, color: '#5b6472', marginBottom: 4 }}>Signature preview</div>
              <div style={{ border: '1px solid #d8e0ea', borderRadius: 8, height: 70, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-family-script, cursive)', fontSize: 26, color: 'var(--ui-text-body)' }}>{signature}</span>
              </div>
            </div>
          </React.Fragment>
        ) : mode === 'draw' ? (
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#5b6472', marginBottom: 4 }}>Draw here</div>
            <div style={{ border: '1px solid #d8e0ea', borderRadius: 8, height: 96, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--ui-surface-card)' }}>
              <span style={{ fontFamily: 'var(--font-family-script, cursive)', fontSize: 26, color: 'var(--ui-text-body)' }}>{signature}</span>
            </div>
          </div>
        ) : submitted ? (
          <div>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#5b6472', marginBottom: 4 }}>Uploaded signature preview</div>
            <div style={{ border: '1px solid #d8e0ea', borderRadius: 8, height: 84, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-family-script, cursive)', fontSize: 26, color: 'var(--ui-text-body)' }}>{signature}</span>
            </div>
          </div>
        ) : (
          <div style={{ border: '1px dashed #b9c6d8', borderRadius: 10, background: '#f8fbff', padding: '22px 12px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#002856" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Click to upload</span>
          </div>
        )}
        <button type="button" disabled={!canSubmit} onClick={canSubmit ? onSubmit : undefined} style={{
          width: '100%', padding: '11px 16px', borderRadius: 8, border: 'none', fontSize: 14, fontWeight: 600,
          background: canSubmit ? 'var(--ui-text-brand)' : 'var(--ui-border-default)', color: canSubmit ? '#fff' : '#a3aab5',
          cursor: canSubmit ? 'pointer' : 'not-allowed',
        }}>Submit Sign</button>
        {submitted ? (
          <button type="button" style={{ width: '100%', padding: '9px 16px', background: 'none', border: 'none', color: '#5b6472', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Re-upload</button>
        ) : (
          <button type="button" onClick={onBack} style={{ width: '100%', padding: '9px 16px', background: 'none', border: 'none', color: '#5b6472', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Back</button>
        )}
      </div>
    </div>
  );
}

export default SignatureModal;
