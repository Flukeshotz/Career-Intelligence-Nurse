import { ShieldCheck, ShieldAlert, ExternalLink, Clock } from 'lucide-react';
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
    <div className={`src-box src-box--${trust.level}`}>
      <div className="src-head">
        <Icon size={18} color={style.color} aria-hidden="true" />
        <b>{trust.badge}</b>
      </div>
      <p className="src-msg">{trust.message}</p>
      <dl className="src-facts">
        <div>
          <dt>Published by</dt>
          <dd>{source}</dd>
        </div>
        <div>
          <dt>Last checked</dt>
          <dd>
            {longDate(updatedIso)}
            {updatedRel && <span> · {updatedRel}</span>}
          </dd>
        </div>
      </dl>
      {officialNotificationUrl && (
        <a className="src-link" href={officialNotificationUrl} target="_blank" rel="noopener noreferrer">
          {isSiteRoot(officialNotificationUrl) ? 'Visit the official website' : 'Read the official notification'}
          <ExternalLink size={14} aria-hidden="true" />
        </a>
      )}
    </div>
  );
}
