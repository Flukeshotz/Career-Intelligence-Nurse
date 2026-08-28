import Link from 'next/link';
import { MapPin, Calendar, Building2, ArrowRight } from 'lucide-react';
import { MockJob } from '@/lib/mock-data';

export function JobCard({ job }: { job: MockJob }) {
  const isGov = job.type === 'government';
  const deadlineStr = job.applicationDeadline
    ? new Date(job.applicationDeadline).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
      })
    : null;

  return (
    <Link
      href={`/${job.professionCode}/jobs/${job.slug}`}
      className="sc-card sc-card-interactive"
      style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      {/* Top Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <span className={isGov ? 'badge-govt' : 'badge-private'}>
            {isGov ? '🏛️ Govt Recruitment' : '🏥 NABH Hospital'}
          </span>
          <span className="badge-verified">
            ✓ Verified
          </span>
        </div>

        {job.vacancyCount && (
          <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '3px 8px', borderRadius: 'var(--radius-sm)' }}>
            {job.vacancyCount} {job.vacancyCount === 1 ? 'post' : 'posts'}
          </span>
        )}
      </div>

      {/* Title & Employer */}
      <div>
        <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: 'var(--sc-navy-900)', lineHeight: 1.35, marginBottom: '4px' }}>
          {job.title}
        </h3>
        <div style={{ fontSize: '0.88rem', color: 'var(--sc-ink-700)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Building2 size={15} color="var(--sc-ink-600)" />
          <span>{job.employer}</span>
        </div>
      </div>

      {/* Meta Chips */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.82rem', color: 'var(--sc-ink-600)' }}>
        {job.locationCity && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--sc-surface-secondary)', padding: '3px 8px', borderRadius: 'var(--radius-sm)' }}>
            <MapPin size={13} color="var(--sc-navy-700)" />
            <span>{job.locationCity}{job.locationState ? `, ${job.locationState}` : ''}</span>
          </div>
        )}

        {deadlineStr && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--sc-yellow-50)', color: '#92400e', padding: '3px 8px', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
            <Calendar size={13} />
            <span>Closes {deadlineStr}</span>
          </div>
        )}
      </div>

      {/* Footer Strip */}
      <div
        style={{
          borderTop: '1px solid var(--sc-line-100)',
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
        }}
      >
        <div style={{ fontSize: '0.86rem', color: 'var(--sc-green-600)', fontWeight: 700 }}>
          {job.salaryRaw || (job.salaryMin && job.salaryMax ? `₹${(job.salaryMin/100000).toFixed(1)} - ${(job.salaryMax/100000).toFixed(1)} LPA` : 'Check pay scale')}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--sc-navy-700)', fontSize: '0.84rem', fontWeight: 700 }}>
          <span>Check Eligibility</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
