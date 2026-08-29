'use client';

import Link from 'next/link';
import { MapPin, ChevronRight } from 'lucide-react';
import { MockJob } from '@/lib/mock-data';

export function JobCard({ job }: { job: MockJob }) {
  const isGov = job.type === 'government';
  const deadlineStr = job.applicationDeadline
    ? new Date(job.applicationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : null;

  return (
    <Link
      href={`/${job.professionCode}/jobs/${job.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'all 0.12s ease',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#94a3b8';
          e.currentTarget.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.04)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.02)';
        }}
      >
        {/* Row 1: Employer & Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {job.employer}
          </div>

          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: isGov ? '#0f766e' : '#1e40af',
              background: isGov ? '#f0fdfa' : '#eff6ff',
              padding: '2px 7px',
              borderRadius: '6px',
              whiteSpace: 'nowrap',
            }}
          >
            {isGov ? '🏛️ Govt' : '🏥 Hospital'} {job.vacancyCount ? `· ${job.vacancyCount} Posts` : ''}
          </span>
        </div>

        {/* Row 2: Job Title */}
        <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>
          {job.title}
        </div>

        {/* Row 3: Location, Salary & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '2px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.74rem', color: '#475569', flexWrap: 'wrap' }}>
            {job.locationCity && (
              <span style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
                <MapPin size={11} color="#64748b" />
                {job.locationCity}{job.locationState ? `, ${job.locationState}` : ''}
              </span>
            )}
            {deadlineStr && (
              <span style={{ color: '#64748b' }}>
                · Closes {deadlineStr}
              </span>
            )}
          </div>

          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--sc-navy-700)', display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
            Details <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
