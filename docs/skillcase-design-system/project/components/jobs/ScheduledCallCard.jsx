import React from 'react';

/* Booked-call confirmation — shown after a slot is taken. Rows of icon +
   label/value for the date, the time and the host, then "Join the meeting" and
   a quieter "Add to your calendar". */
export function ScheduledCallCard({ rows = [], joinLabel = 'Join the meeting', onJoin, onCalendar, style }) {
  const ICONS = {
    date: <path d="M3 5h18v16H3zM8 3v4M16 3v4M3 11h18" />,
    time: <React.Fragment><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></React.Fragment>,
    host: <React.Fragment><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" /></React.Fragment>,
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, ...style }}>
      {rows.map((r) => (
        <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ui-text-muted)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>{ICONS[r.icon] || ICONS.date}</svg>
          <div style={{ minWidth: 0 }}>
            <div style={{ fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', color: 'var(--ui-text-faint)' }}>{r.label}</div>
            <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ui-text-body)' }}>{r.value}</div>
          </div>
        </div>
      ))}
      <button type="button" onClick={onJoin} style={{ width: '100%', padding: '12px 16px', background: 'var(--ui-text-brand)', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{joinLabel}</button>
      <button type="button" onClick={onCalendar} style={{ width: '100%', padding: '11px 16px', background: 'var(--ui-surface-card)', color: 'var(--ui-text-brand)', border: '1px solid #cbd8e8', borderRadius: 8, fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Add to your calendar</button>
    </div>
  );
}

export default ScheduledCallCard;
