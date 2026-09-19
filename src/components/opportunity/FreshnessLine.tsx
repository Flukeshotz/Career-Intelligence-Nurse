import { getTrust } from '@/lib/verification';

/** "Updated 2 days ago · Not yet re-checked" — never implies a check that did not happen. */
export function FreshnessLine({ id, lastVerified }: { id: string; lastVerified: string }) {
  const trust = getTrust(id);
  const iso = trust.checkedAt ?? lastVerified;
  const t = new Date(iso).getTime();
  const days = isNaN(t) ? null : Math.floor((Date.now() - t) / 86_400_000);
  const rel = days === null ? '' : days <= 0 ? 'today' : days === 1 ? 'yesterday' : `${days} days ago`;
  const ok = trust.level === 'confirmed';
  return (
    <div style={{ fontSize: '0.7rem', color: ok ? '#15803d' : '#b45309', fontWeight: 600 }}>
      {ok ? '✓ ' : '• '}
      Updated {rel} · {trust.badge}
    </div>
  );
}
