import { AlertTriangle } from 'lucide-react';
import { getTrust } from '@/lib/verification';

/**
 * Top-of-page warning for records we know are wrong or unpublished. Rendered above the fold so a
 * nurse never reads the (incorrect) figures below before seeing why they should not be trusted.
 */
export function TrustBanner({ recordId }: { recordId: string }) {
  const trust = getTrust(recordId);
  if (!trust.suppressFromListings) return null;
  const isConflict = trust.level === 'conflict';
  return (
    <div
      role="alert"
      style={{
        display: 'flex',
        gap: '10px',
        alignItems: 'flex-start',
        padding: '14px 16px',
        marginBottom: '16px',
        borderRadius: '12px',
        border: `1px solid ${isConflict ? 'rgba(239,68,68,0.4)' : 'rgba(245,158,11,0.5)'}`,
        background: isConflict ? 'rgba(239,68,68,0.08)' : 'rgba(245,158,11,0.10)',
        color: 'var(--sc-navy-900)',
      }}
    >
      <AlertTriangle size={20} color={isConflict ? '#B91C1C' : '#B45309'} style={{ flexShrink: 0, marginTop: '2px' }} />
      <div style={{ fontSize: '0.86rem', lineHeight: 1.5 }}>
        <strong>{trust.badge}.</strong> {trust.message}
      </div>
    </div>
  );
}
