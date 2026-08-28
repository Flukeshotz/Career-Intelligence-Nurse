import { ShieldCheck, ExternalLink, Clock, FileText } from 'lucide-react';

export function TrustPanel({
  source,
  sourceType,
  lastVerified,
  officialNotificationUrl,
  applicationUrl,
  status,
}: {
  source: string;
  sourceType: 'official' | 'verified_secondary' | 'other';
  lastVerified: string;
  officialNotificationUrl?: string;
  applicationUrl?: string;
  status: string;
}) {
  const formattedDate = new Date(lastVerified).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div
      className="sc-card"
      style={{
        padding: '22px',
        marginBottom: '24px',
        border: '1px solid var(--sc-line-200)',
        background: 'var(--sc-surface-card)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <ShieldCheck size={20} color="var(--sc-green-600)" />
          <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
            Checked by SkillCase Curation
          </h3>
        </div>
        <span className="badge-verified">
          ✓ Verified Live Vacancy
        </span>
      </div>

      <p style={{ fontSize: '0.85rem', color: 'var(--sc-ink-700)', lineHeight: 1.5, marginBottom: '16px' }}>
        We verify official notification documents, vacancy sanctions, eligibility criteria, and application endpoints before publishing.
      </p>

      {/* Structured Authority Metadata */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px', fontSize: '0.86rem' }}>
        <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ color: 'var(--sc-ink-600)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            Source Authority
          </div>
          <div style={{ color: 'var(--sc-navy-900)', fontWeight: 700 }}>{source}</div>
          <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
            {sourceType === 'official' ? 'Official Government Portal' : 'Verified Hospital Employer Portal'}
          </div>
        </div>

        <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px', borderRadius: 'var(--radius-sm)' }}>
          <div style={{ color: 'var(--sc-ink-600)', fontSize: '0.72rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '2px' }}>
            Verification Timestamp
          </div>
          <div style={{ color: 'var(--sc-navy-900)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Clock size={14} color="var(--sc-green-600)" />
            <span>{formattedDate}</span>
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--sc-green-600)', fontWeight: 600, marginTop: '2px' }}>
            Human Curation Check
          </div>
        </div>
      </div>

      {/* Official Link Citation */}
      {officialNotificationUrl && (
        <div style={{ marginTop: '14px', paddingTop: '12px', borderTop: '1px solid var(--sc-line-100)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)' }}>
            Official Notification / Order Source:
          </div>
          <a
            href={officialNotificationUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              color: 'var(--sc-navy-700)',
              fontSize: '0.84rem',
              fontWeight: 700,
            }}
          >
            <span>View Official Document</span>
            <ExternalLink size={13} />
          </a>
        </div>
      )}
    </div>
  );
}
