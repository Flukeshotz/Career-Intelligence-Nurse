import React from 'react';

/* Document upload row — "Upload your documents". Each required document is a
   labelled block with a status chip (green `approved`, amber `pending`) and,
   while unfilled, a dashed drop zone stating the accepted formats. Once a file
   is attached the zone is replaced by the file chip. */
export function UploadRow({ label = 'Resume', status = 'pending', file, formats = 'PDF, JPG, PNG', onPick, style }) {
  const chip = status === 'approved'
    ? { bg: 'rgba(1,144,53,0.12)', fg: 'var(--ui-progress-fill-done)', text: 'approved' }
    : status === 'rejected'
      ? { bg: 'var(--ui-danger-surface)', fg: '#dc2626', text: 'rejected' }
      : { bg: 'rgba(255,235,192,0.65)', fg: '#ac8121', text: 'pending' };
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--ui-text-body)' }}>{label}</div>
        <span style={{ background: chip.bg, color: chip.fg, fontSize: 11, fontWeight: 600, padding: '3px 9px', borderRadius: 9999 }}>{chip.text}</span>
      </div>
      {file ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid var(--ui-border-default)', borderRadius: 8, padding: '10px 12px', background: 'var(--ui-surface-card)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ui-text-muted)" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /></svg>
          <span style={{ fontSize: 12, color: 'var(--ui-text-secondary)', flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{file}</span>
        </div>
      ) : (
        <button type="button" onClick={onPick} style={{ width: '100%', border: '1px dashed #b9c6d8', borderRadius: 10, background: '#f8fbff', padding: '18px 12px', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#002856" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 16V4M7 9l5-5 5 5" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" /></svg>
          <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Click to upload</span>
          <span style={{ fontSize: 10, color: '#8a93a0' }}>{formats}</span>
        </button>
      )}
    </div>
  );
}

export default UploadRow;
