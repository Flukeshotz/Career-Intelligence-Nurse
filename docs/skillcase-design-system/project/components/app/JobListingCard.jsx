import React from 'react';

/* Job listing card — src/pages/jobs/JobsLockedPage.jsx + landing/JobCard.jsx.
   White card at radius 16 with a 1px slate outline: the role title with a
   location chip beside it, "Organization" over the employer in bold, a row of
   icon+label facts (salary, language level, contract), and a full-width CTA.
   Below B1 the CTA is the disabled stone bar "Complete German B1 to Apply" —
   the A1/A2 teaser state; at B1/B2 it becomes the live navy apply button. */
export function JobListingCard({
  title = 'ICU Staff Nurse',
  location = 'Munich, GER',
  org = 'Elderly Care Hospital',
  facts = ['100k/month', 'Language - B2'],
  locked = true,
  ctaLabel,
  onApply,
  style,
}) {
  const pin = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#d6d3d1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
  );
  const dot = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 8v8M9.5 10.5h5M9.5 13.5h5" /></svg>
  );
  const lock = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(0,0,0,0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></svg>
  );
  return (
    <div style={{
      alignSelf: 'stretch', padding: 24, background: 'var(--ui-surface-card)', borderRadius: 16,
      outline: '1px solid var(--ui-border-default)', outlineOffset: -1,
      display: 'flex', flexDirection: 'column', gap: 20, boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1, color: 'var(--ui-text-body)', fontSize: 16, fontWeight: 600, lineHeight: '24px' }}>{title}</div>
          <div style={{ padding: '2px 8px 2px 6px', background: 'var(--ui-surface-card)', borderRadius: 6, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', outline: '1px solid var(--ui-border-default)', outlineOffset: -1, display: 'inline-flex', alignItems: 'center', gap: 6, flexShrink: 0 }}>
            {pin}<span style={{ color: 'var(--ui-text-secondary)', fontSize: 14, fontWeight: 500, lineHeight: '20px' }}>{location}</span>
          </div>
        </div>
        <div style={{ color: 'var(--ui-text-secondary)', fontSize: 16, lineHeight: '24px' }}>Organization<br /><span style={{ fontWeight: 700 }}>{org}</span></div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
        {facts.map((f) => (
          <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {dot}<span style={{ color: 'var(--ui-text-secondary)', fontSize: 14, fontWeight: 600, lineHeight: '20px' }}>{f}</span>
          </div>
        ))}
      </div>
      <button type="button" disabled={locked} onClick={locked ? undefined : onApply} style={{
        alignSelf: 'stretch', padding: '10px 12px',
        background: locked ? '#d6d3d1' : 'var(--ui-text-brand)', borderRadius: 8,
        border: locked ? '1px solid rgba(87,83,78,0.5)' : 'none',
        display: 'inline-flex', justifyContent: 'center', alignItems: 'center', gap: 8,
        cursor: locked ? 'not-allowed' : 'pointer',
      }}>
        {locked ? lock : null}
        <span style={{ textAlign: 'center', color: locked ? 'var(--ui-scrim)' : '#fff', fontSize: 14, fontWeight: 600, lineHeight: '24px' }}>
          {ctaLabel || (locked ? 'Complete German B1 to Apply' : 'Apply now')}
        </span>
      </button>
    </div>
  );
}

export default JobListingCard;
