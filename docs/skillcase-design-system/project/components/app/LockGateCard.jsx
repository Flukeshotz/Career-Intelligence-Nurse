import React from 'react';

/* Eligibility gate — the card at the top of /jobs for A1/A2 users
   (src/pages/jobs/JobsLockedPage.jsx). A 96px illustration with a lock badge
   pinned to it, the current-level pill, a 24px headline, a grey explainer and
   a full-width navy dismiss button. */
export function LockGateCard({
  image,
  level = 'A1',
  title = 'You are not eligible for German jobs yet',
  body = 'B1 German level is the minimum requirement for German jobs.',
  ctaLabel = 'Okay',
  onCta,
  style,
}) {
  return (
    <div style={{
      alignSelf: 'stretch', padding: '24px 16px 16px', background: 'var(--ui-surface-card)', borderRadius: 12,
      display: 'flex', flexDirection: 'column', gap: 10, boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: 96, height: 96, borderRadius: 24, overflow: 'hidden', background: 'var(--ui-surface-muted)' }}>
            {image ? <img src={image} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : null}
          </div>
          <span aria-hidden="true" style={{ position: 'absolute', top: 8, left: 'calc(50% + 26px)', padding: 4, background: '#e5e5e5', borderRadius: 9999, display: 'flex' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ui-text-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
          </span>
        </div>
        <div style={{ padding: '6px 16px', background: 'var(--ui-surface-sunken)', borderRadius: 55 }}>
          <span style={{ color: 'var(--ui-text-secondary)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>You are currently at {level} German level</span>
        </div>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 288, textAlign: 'center', color: '#172554', fontSize: 24, fontWeight: 600, lineHeight: '32px' }}>{title}</div>
          <div style={{ alignSelf: 'stretch', textAlign: 'center', color: 'var(--ui-text-secondary)', fontSize: 14, lineHeight: '20px' }}>{body}</div>
        </div>
      </div>
      <button type="button" onClick={onCta} style={{
        alignSelf: 'stretch', marginTop: 20, padding: '12px 16px', background: '#172554', borderRadius: 8,
        border: 'none', cursor: 'pointer', display: 'inline-flex', justifyContent: 'center', alignItems: 'center',
      }}>
        <span style={{ color: '#fff', fontSize: 16, fontWeight: 600, lineHeight: '24px' }}>{ctaLabel}</span>
      </button>
    </div>
  );
}

export default LockGateCard;
