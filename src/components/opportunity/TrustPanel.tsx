import { ShieldCheck, ShieldAlert, ExternalLink, Clock, RefreshCw } from 'lucide-react';
import { getTrust, TrustLevel } from '@/lib/verification';

const LEVEL_STYLE: Record<TrustLevel, { color: string; bg: string; Icon: typeof ShieldCheck }> = {
  confirmed: { color: 'var(--sc-green-600)', bg: 'rgba(34,160,90,0.10)', Icon: ShieldCheck },
  stale: { color: '#B45309', bg: 'rgba(245,158,11,0.12)', Icon: Clock },
  unverified: { color: '#B45309', bg: 'rgba(245,158,11,0.12)', Icon: ShieldAlert },
  not_announced: { color: '#B45309', bg: 'rgba(245,158,11,0.12)', Icon: ShieldAlert },
  conflict: { color: '#B91C1C', bg: 'rgba(239,68,68,0.10)', Icon: ShieldAlert },
};

function relativeDays(fromIso: string): string {
  const t = new Date(fromIso).getTime();
  if (isNaN(t)) return '';
  const days = Math.floor((Date.now() - t) / 86_400_000);
  if (days <= 0) return 'today';
  if (days === 1) return 'yesterday';
  return `${days} days ago`;
}

function isSiteRoot(url: string): boolean {
  try {
    const p = new URL(url).pathname;
    return p === '/' || p === '';
  } catch {
    return false;
  }
}

function longDate(iso: string): string {
  return new Date(iso).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Asia/Kolkata' });
}

export function TrustPanel({
  recordId,
  source,
  sourceType,
  lastVerified,
  officialNotificationUrl,
  applicationUrl,
}: {
  recordId: string;
  source: string;
  sourceType: 'official' | 'verified_secondary' | 'other';
  lastVerified: string;
  officialNotificationUrl?: string;
  applicationUrl?: string;
  status?: string;
}) {
  const trust = getTrust(recordId);
  const style = LEVEL_STYLE[trust.level];
  const { Icon } = style;

  // "Last updated" = the most recent time a person or the source watcher actually checked this record.
  // A recorded check wins over the (older, bulk-stamped) lastVerified field.
  const updatedIso = trust.checkedAt ?? lastVerified;
  const updatedRel = relativeDays(updatedIso);

  return (
    <div
      className="sc-card"
      style={{
        padding: '22px',
        marginBottom: '24px',
        border: `1px solid ${trust.level === 'conflict' ? 'rgba(239,68,68,0.35)' : 'var(--sc-line-200)'}`,
        background: 'var(--sc-surface-card)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Icon size={20} color={style.color} />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>Source &amp; freshness</h3>
        </div>
        <span
          style={{
            background: style.bg,
            color: style.color,
            fontSize: '0.75rem',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: '999px',
          }}
        >
          {trust.level === 'confirmed' ? '✓ ' : ''}
          {trust.badge}
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--sc-ink-700)', lineHeight: 1.5, marginBottom: '16px' }}>{trust.message}</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', fontSize: '0.86rem' }}>
        <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ color: 'var(--sc-ink-600)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            Source Authority
          </div>
          <div style={{ color: 'var(--sc-navy-900)', fontWeight: 700 }}>{source}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
            {sourceType === 'official' ? 'Official Government Portal' : 'Employer Portal'}
          </div>
        </div>

        <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ color: 'var(--sc-ink-600)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            Last updated
          </div>
          <div style={{ color: 'var(--sc-navy-900)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <RefreshCw size={14} color={style.color} />
            <span>{longDate(updatedIso)}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: style.color, fontWeight: 600, marginTop: '2px' }}>
            {updatedRel}
          </div>
        </div>
      </div>

      {officialNotificationUrl && (
        <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--sc-line-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)' }}>Official source:</div>
          <a
            href={officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--sc-navy-700)', fontSize: '0.84rem', fontWeight: 700 }}
          >
            <span>{isSiteRoot(officialNotificationUrl) ? 'Visit official website' : 'View official notification'}</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}
    </div>
  );
}
