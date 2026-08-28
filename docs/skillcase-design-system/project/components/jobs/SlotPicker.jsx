import React from 'react';

/* Slot picker — the modal that books every call in the pipeline (training
   call, employer interview, reschedule). A white sheet over a scrim: a date
   field, then a radio list of times in the candidate's own timezone, a navy
   confirm and a plain Back. */
export function SlotPicker({ title = 'Select available slot', date = '22/06/2026', slots = [], selected = 0, confirmLabel = 'Book call', onSelect, onConfirm, onBack, style }) {
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 60, background: 'rgba(0,10,25,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16, ...style }}>
      <div style={{ width: '100%', maxWidth: 330, background: 'var(--ui-surface-card)', borderRadius: 14, padding: 16, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 14, boxShadow: '0 24px 48px rgba(0,0,0,.24)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--ui-text-brand)' }}>{title}</div>
          <button type="button" onClick={onBack} aria-label="Close" style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--ui-text-faint)', lineHeight: 0, padding: 0 }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#5b6472' }}>Select date</span>
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: '1px solid #d8e0ea', borderRadius: 8, padding: '9px 11px', fontSize: 13, color: 'var(--ui-text-body)' }}>
            {date}
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M8 3v4M16 3v4M3 11h18" /></svg>
          </span>
        </label>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          <span style={{ fontSize: 11, fontWeight: 600, color: '#5b6472' }}>Slots in your time</span>
          {slots.map((s, i) => (
            <button key={s} type="button" onClick={() => onSelect && onSelect(i)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%',
              border: '1px solid ' + (i === selected ? 'var(--ui-text-brand)' : 'var(--ui-border-default)'), background: i === selected ? '#f2f7ff' : '#fff',
              borderRadius: 8, padding: '9px 11px', fontSize: 13, fontWeight: i === selected ? 600 : 500,
              color: i === selected ? 'var(--ui-text-brand)' : 'var(--ui-text-secondary)', cursor: 'pointer',
            }}>
              <span>{s}</span>
              <span style={{ width: 15, height: 15, borderRadius: 9999, border: '2px solid ' + (i === selected ? 'var(--ui-text-brand)' : 'var(--ui-border-muted)'), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {i === selected ? <span style={{ width: 6, height: 6, borderRadius: 9999, background: 'var(--ui-text-brand)' }} /> : null}
              </span>
            </button>
          ))}
        </div>
        <button type="button" onClick={onConfirm} style={{ width: '100%', padding: '12px 16px', background: 'var(--ui-text-brand)', color: '#fff', border: 'none', borderRadius: 8, fontSize: 14, fontWeight: 600, cursor: 'pointer' }}>{confirmLabel}</button>
        <button type="button" onClick={onBack} style={{ width: '100%', padding: '10px 16px', background: 'none', border: 'none', color: '#5b6472', fontSize: 13, fontWeight: 600, cursor: 'pointer' }}>Back</button>
      </div>
    </div>
  );
}

export default SlotPicker;
