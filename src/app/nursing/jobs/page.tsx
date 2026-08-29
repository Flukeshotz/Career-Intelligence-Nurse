'use client';

import { useState, useEffect } from 'react';
import { Search, Briefcase, ChevronRight, MapPin, Building2, Calendar, ShieldCheck } from 'lucide-react';
import { getJobs } from '@/lib/data';
import { MockJob } from '@/lib/mock-data';
import { JobCard } from '@/components/opportunity/JobCard';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';

const STATES = [
  'All States',
  'Karnataka',
  'Maharashtra',
  'Tamil Nadu',
  'Kerala',
  'Delhi',
  'Uttar Pradesh',
  'Rajasthan',
  'West Bengal',
  'Bihar',
  'Telangana',
  'Odisha',
  'Gujarat',
  'Madhya Pradesh',
];

export default function JobsListPage() {
  const [jobs, setJobs] = useState<MockJob[]>([]);
  const [loading, setLoading] = useState(true);

  const [typeFilter, setTypeFilter] = useState<'all' | 'government' | 'private'>('all');
  const [qualFilter, setQualFilter] = useState<string>('all');
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getJobs({
        profession: 'nursing',
        type: typeFilter,
        qualification: qualFilter,
        state: stateFilter,
        search: searchQuery,
      });
      setJobs(res);
      setLoading(false);
    }
    load();
  }, [typeFilter, qualFilter, stateFilter, searchQuery]);

  const handleResetFilters = () => {
    setTypeFilter('all');
    setQualFilter('all');
    setStateFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '24px' }}>
      {/* ── Page Header ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
          Nursing Opportunity Intelligence
        </div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
          Nursing Jobs Across India
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--sc-ink-700)', marginTop: '2px' }}>
          Verified government hospital posts (AIIMS, ESIC, Railway) and private NABH hospital staff nurse vacancies.
        </p>
      </div>

      {/* ── Search & Filter Pill Controls ── */}
      <div className="sc-card" style={{ padding: '16px 20px', marginBottom: '24px' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative', marginBottom: '14px' }}>
          <Search size={16} color="var(--sc-ink-400)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search by hospital, department, or city (e.g. AIIMS, ICU, Bangalore, Apollo)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              background: 'var(--sc-surface-secondary)',
              border: '1px solid var(--sc-line-200)',
              borderRadius: 'var(--radius-md)',
              padding: '10px 14px 10px 40px',
              color: 'var(--sc-ink-900)',
              fontSize: '0.88rem',
              outline: 'none',
              fontFamily: 'inherit',
            }}
          />
        </div>

        {/* Quick Filter Selectors */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', alignItems: 'center' }}>
          {/* Sector Selector */}
          <div style={{ display: 'flex', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setTypeFilter('all')}
              className={`pill-selector ${typeFilter === 'all' ? 'active' : ''}`}
            >
              All Types
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter('government')}
              className={`pill-selector ${typeFilter === 'government' ? 'active' : ''}`}
            >
              🏛️ Government
            </button>
            <button
              type="button"
              onClick={() => setTypeFilter('private')}
              className={`pill-selector ${typeFilter === 'private' ? 'active' : ''}`}
            >
              🏥 Private NABH
            </button>
          </div>

          {/* Qualification Filter */}
          <select
            value={qualFilter}
            onChange={(e) => setQualFilter(e.target.value)}
            style={{
              padding: '7px 12px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--sc-line-200)',
              background: qualFilter !== 'all' ? 'var(--sc-navy-50)' : 'var(--sc-white)',
              color: qualFilter !== 'all' ? 'var(--sc-navy-900)' : 'var(--sc-ink-700)',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'inherit',
            }}
          >
            <option value="all">All Qualifications</option>
            <option value="bsc_nursing">B.Sc. Nursing</option>
            <option value="gnm">GNM Diploma</option>
            <option value="post_basic">Post Basic B.Sc.</option>
            <option value="msc">M.Sc. Nursing</option>
          </select>

          {/* State Filter */}
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            style={{
              padding: '7px 12px',
              borderRadius: 'var(--radius-pill)',
              border: '1px solid var(--sc-line-200)',
              background: stateFilter !== 'all' ? 'var(--sc-navy-50)' : 'var(--sc-white)',
              color: stateFilter !== 'all' ? 'var(--sc-navy-900)' : 'var(--sc-ink-700)',
              fontSize: '0.82rem',
              fontWeight: 600,
              fontFamily: 'inherit',
            }}
          >
            {STATES.map((s) => (
              <option key={s} value={s === 'All States' ? 'all' : s}>
                {s}
              </option>
            ))}
          </select>

          {(typeFilter !== 'all' || qualFilter !== 'all' || stateFilter !== 'all' || searchQuery) && (
            <button
              type="button"
              onClick={handleResetFilters}
              style={{ fontSize: '0.8rem', color: 'var(--sc-red-500)', fontWeight: 700, marginLeft: 'auto' }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* ── Results Count ── */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.86rem', color: 'var(--sc-ink-600)', fontWeight: 600 }}>
          Showing {jobs.length} verified {jobs.length === 1 ? 'vacancy' : 'vacancies'}
        </div>
      </div>

      {/* ── Jobs Grid ── */}
      {loading ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '16px' }}>
          {[1, 2, 3, 4].map((n) => (
            <div key={n} className="sc-card" style={{ padding: '24px', height: '140px', background: 'var(--sc-surface-secondary)' }} />
          ))}
        </div>
      ) : jobs.length > 0 ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '16px',
          }}
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      ) : (
        <FilterEmptyState onResetFilters={handleResetFilters} />
      )}
    </div>
  );
}
