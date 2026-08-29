'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import { getJobs } from '@/lib/data';
import { MockJob } from '@/lib/mock-data';
import { JobCard } from '@/components/opportunity/JobCard';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';

type TypeFilter = 'all' | 'government' | 'private';

const TYPE_OPTIONS: { id: TypeFilter; label: string; emoji: string }[] = [
  { id: 'all', label: 'All', emoji: '⭐' },
  { id: 'government', label: 'Govt', emoji: '🏛️' },
  { id: 'private', label: 'Private', emoji: '🏥' },
];

const STATES = ['All States', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Delhi', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Bihar', 'Telangana', 'Odisha', 'Gujarat', 'Madhya Pradesh'];

export default function JobsListPage() {
  const [jobs, setJobs] = useState<MockJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [qualFilter, setQualFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getJobs({ profession: 'nursing', type: typeFilter, qualification: qualFilter, state: stateFilter, search: searchQuery });
      setJobs(res);
      setLoading(false);
    }
    load();
  }, [typeFilter, qualFilter, stateFilter, searchQuery]);

  const handleResetFilters = () => {
    setTypeFilter('all'); setQualFilter('all'); setStateFilter('all'); setSearchQuery('');
  };

  const hasActiveFilter = typeFilter !== 'all' || qualFilter !== 'all' || stateFilter !== 'all' || !!searchQuery;

  return (
    <div style={{ background: 'var(--sc-bg-page)', minHeight: '100vh', paddingBottom: '90px' }}>

      {/* ── STICKY FILTER HEADER ── */}
      <div style={{
        background: '#ffffff',
        borderBottom: '1.5px solid var(--sc-line-200)',
        position: 'sticky', top: '64px', zIndex: 50,
        padding: '10px 14px',
      }}>
        {/* Search */}
        <input
          type="search"
          placeholder="Search hospitals, cities, departments…"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          style={{
            width: '100%', padding: '11px 14px',
            border: '1.5px solid var(--sc-line-200)',
            borderRadius: '10px', fontSize: '0.88rem',
            background: 'var(--sc-surface-secondary)',
            color: 'var(--sc-ink-900)', outline: 'none',
            fontFamily: 'inherit', minHeight: '44px',
            marginBottom: '10px', display: 'block',
          }}
        />

        {/* Filters row */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', overflowX: 'auto' }}>
          {/* Type pills */}
          {TYPE_OPTIONS.map(t => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTypeFilter(t.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '7px 12px', borderRadius: '100px',
                fontSize: '0.78rem', fontWeight: 700,
                background: typeFilter === t.id ? 'var(--sc-navy-700)' : 'var(--sc-surface-secondary)',
                color: typeFilter === t.id ? '#ffffff' : 'var(--sc-ink-700)',
                border: typeFilter === t.id ? '1.5px solid var(--sc-navy-700)' : '1.5px solid var(--sc-line-200)',
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0, minHeight: '36px',
                transition: 'all 0.12s ease',
              }}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}

          {/* Qual select */}
          <select
            value={qualFilter}
            onChange={e => setQualFilter(e.target.value)}
            style={{
              padding: '7px 10px', borderRadius: '100px',
              border: qualFilter !== 'all' ? '1.5px solid var(--sc-navy-700)' : '1.5px solid var(--sc-line-200)',
              background: qualFilter !== 'all' ? 'var(--sc-navy-50)' : 'var(--sc-surface-secondary)',
              color: qualFilter !== 'all' ? 'var(--sc-navy-900)' : 'var(--sc-ink-700)',
              fontSize: '0.78rem', fontWeight: 600, fontFamily: 'inherit',
              flexShrink: 0, minHeight: '36px',
            }}
          >
            <option value="all">Any Qual.</option>
            <option value="bsc_nursing">B.Sc. Nursing</option>
            <option value="gnm">GNM</option>
            <option value="post_basic">Post Basic</option>
            <option value="msc">M.Sc.</option>
          </select>

          {/* State select */}
          <select
            value={stateFilter}
            onChange={e => setStateFilter(e.target.value)}
            style={{
              padding: '7px 10px', borderRadius: '100px',
              border: stateFilter !== 'all' ? '1.5px solid var(--sc-navy-700)' : '1.5px solid var(--sc-line-200)',
              background: stateFilter !== 'all' ? 'var(--sc-navy-50)' : 'var(--sc-surface-secondary)',
              color: stateFilter !== 'all' ? 'var(--sc-navy-900)' : 'var(--sc-ink-700)',
              fontSize: '0.78rem', fontWeight: 600, fontFamily: 'inherit',
              flexShrink: 0, minHeight: '36px',
            }}
          >
            {STATES.map(s => <option key={s} value={s === 'All States' ? 'all' : s}>{s}</option>)}
          </select>

          {hasActiveFilter && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{ fontSize: '0.76rem', color: 'var(--sc-red-500)', fontWeight: 700, whiteSpace: 'nowrap', flexShrink: 0 }}
            >
              Reset
            </button>
          )}
        </div>
      </div>

      {/* ── PAGE TITLE ── */}
      <div style={{ padding: '16px 14px 4px' }}>
        <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '2px' }}>
          Nursing Vacancies — India
        </div>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.25 }}>
          {loading ? 'Loading vacancies…' : `${jobs.length} Hospital ${jobs.length === 1 ? 'Vacancy' : 'Vacancies'}`}
        </h1>
      </div>

      {/* ── JOB LIST ── */}
      <div style={{ padding: '8px 14px 0' }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[1, 2, 3].map(n => (
              <div key={n} style={{ height: '130px', background: '#e2e8f0', borderRadius: '14px', animation: 'pulse 1.5s ease infinite' }} />
            ))}
          </div>
        ) : jobs.length > 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {jobs.map(job => <JobCard key={job.id} job={job} />)}
          </div>
        ) : (
          <FilterEmptyState onResetFilters={handleResetFilters} />
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
