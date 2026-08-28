import React from 'react';

/* Payment method — one selectable row on the navy payment screen. A white
   icon well, the method's name in bold with its hint beneath, and a radio on
   the right. Selected takes a 10% white fill and an amber outline; unselected
   is transparent with a 25% white outline. Shipped methods: Razorpay, UPI,
   Card, Netbanking, Wallet. */
export function PaymentMethodRow({ method = 'razorpay', label = 'Razorpay (UPI, Cards, Netbanking etc)', hint = 'UPI, Cards, Netbanking, Wallets', selected = false, onSelect, style }) {
  const icon = () => {
    if (method === 'razorpay') return <span style={{ color: 'var(--ui-text-brand)', fontSize: 14, fontWeight: 900 }}>R</span>;
    if (method === 'upi') return <span style={{ color: 'var(--ui-text-brand)', fontSize: 8, fontWeight: 700 }}>UPI</span>;
    const path = method === 'card'
      ? <React.Fragment><rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" /></React.Fragment>
      : method === 'netbanking'
        ? <React.Fragment><path d="M3 21h18M4 10h16M12 3 3 8h18Z" /><path d="M6 10v11M10 10v11M14 10v11M18 10v11" /></React.Fragment>
        : <React.Fragment><path d="M3 7h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" /><path d="M16 13h.01" /></React.Fragment>;
    return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#002856" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">{path}</svg>;
  };
  return (
    <button type="button" onClick={onSelect} style={{
      width: '100%', padding: 10, borderRadius: 12, textAlign: 'left', cursor: 'pointer',
      background: selected ? 'rgba(255,255,255,0.1)' : 'transparent',
      border: '1px solid ' + (selected ? 'var(--ui-progress-fill)' : 'rgba(255,255,255,0.25)'),
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, boxSizing: 'border-box', ...style,
    }}>
      <span style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
        <span style={{ width: 32, height: 32, background: 'var(--ui-surface-card)', borderRadius: 4, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{icon()}</span>
        <span style={{ display: 'flex', flexDirection: 'column', gap: 4, minWidth: 0 }}>
          <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>{label}</span>
          <span style={{ color: '#fff', fontSize: 12, opacity: 0.75 }}>{hint}</span>
        </span>
      </span>
      <span style={{ width: 16, height: 16, borderRadius: 9999, border: '1px solid ' + (selected ? 'var(--ui-progress-fill)' : 'rgba(255,255,255,0.5)'), display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        {selected ? <span style={{ width: 8, height: 8, borderRadius: 9999, background: 'var(--ui-surface-card)' }} /> : null}
      </span>
    </button>
  );
}

export default PaymentMethodRow;
