import Link from 'next/link';
import { MapPin, Calendar, ChevronRight } from 'lucide-react';
import { MockJob } from '@/lib/mock-data';

export function JobCard({ job }: { job: MockJob }) {
  const isGov = job.type === 'government';
  const deadlineStr = job.applicationDeadline
    ? new Date(job.applicationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : null;

  const accentColor = isGov ? '#083262' : '#166534';

  return (
    <Link
      href={`/${job.professionCode}/jobs/${job.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1.5px solid var(--sc-line-200)',
          padding: '16px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
          transition: 'border-color 0.12s ease',
          overflow: 'hidden',
          position: 'relative',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = accentColor)}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--sc-line-200)')}
      >
        {/* Left accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
          background: accentColor, borderRadius: '14px 0 0 14px',
        }} />

        <div style={{ flex: 1, minWidth: 0, paddingLeft: '4px' }}>
          {/* Row 1: type badge + posts */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
            <span style={{
              fontSize: '0.66rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em',
              color: accentColor, background: accentColor + '14',
              padding: '2px 7px', borderRadius: '100px',
            }}>
              {isGov ? '🏛️ Govt' : '🏥 Hospital'}
            </span>
            {job.vacancyCount && (
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: accentColor, background: accentColor + '14', padding: '2px 8px', borderRadius: '100px' }}>
                {job.vacancyCount} Posts
              </span>
            )}
          </div>

          {/* Row 2: Title */}
          <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.3, marginBottom: '3px' }}>
            {job.title}
          </div>

          {/* Row 3: Employer */}
          <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', fontWeight: 500, marginBottom: '10px' }}>
            {job.employer}
          </div>

          {/* Row 4: Location + Deadline */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {job.locationCity && (
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 600,
                background: 'var(--sc-surface-secondary)', color: 'var(--sc-ink-700)',
                padding: '4px 8px', borderRadius: '8px',
              }}>
                <MapPin size={11} color="var(--sc-navy-700)" />
                {job.locationCity}{job.locationState ? `, ${job.locationState}` : ''}
              </span>
            )}
            {deadlineStr && (
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 700,
                background: '#fef3c7', color: '#92400e',
                padding: '4px 8px', borderRadius: '8px',
              }}>
                <Calendar size={11} />
                Closes {deadlineStr}
              </span>
            )}
          </div>

          {/* Row 5: Salary + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', borderTop: '1px solid var(--sc-line-100)', paddingTop: '10px' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--sc-green-600)' }}>
              {job.salaryRaw || (job.salaryMin && job.salaryMax ? `₹${(job.salaryMin / 100000).toFixed(1)}–${(job.salaryMax / 100000).toFixed(1)} LPA` : 'Check pay scale')}
            </span>
            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-navy-700)', display: 'flex', alignItems: 'center', gap: '2px' }}>
              Check Eligibility <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
