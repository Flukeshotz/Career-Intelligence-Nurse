'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, ArrowUpDown } from 'lucide-react';
import { getJobs } from '@/lib/data';
import { MockJob } from '@/lib/mock-data';
import { JobCard } from '@/components/opportunity/JobCard';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';

type TypeFilter = 'all' | 'government' | 'private';
type SortOption = 'urgent' | 'vacancies' | 'alphabetical';

const TYPE_OPTIONS: { id: TypeFilter; label: string; emoji: string }[] = [
  { id: 'all', label: 'All Jobs', emoji: '⭐' },
  { id: 'private', label: '🏥 Super-Speciality', emoji: '🏥' },
  { id: 'government', label: '🏛️ Govt Hospitals', emoji: '🏛️' },
];

const STATES = ['All States', 'Karnataka', 'Maharashtra', 'Tamil Nadu', 'Kerala', 'Delhi', 'Uttar Pradesh', 'Rajasthan', 'West Bengal', 'Bihar', 'Telangana', 'Odisha', 'Gujarat', 'Madhya Pradesh'];

function JobsListContent() {
  const searchParams = useSearchParams();

  const initialSector = searchParams.get('sector');
  const initialType: TypeFilter = initialSector === 'private' ? 'private' : initialSector === 'central' || initialSector === 'state' ? 'government' : 'all';
  const initialQual = searchParams.get('qual') || 'all';
  const initialSort = (searchParams.get('sort') as SortOption) || 'urgent';

  const [jobs, setJobs] = useState<MockJob[]>([]);
  const [loading, setLoading] = useState(true);
  const [typeFilter, setTypeFilter] = useState<TypeFilter>(initialType);
  const [qualFilter, setQualFilter] = useState<string>(initialQual);
  const [stateFilter, setStateFilter] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getJobs({ profession: 'nursing', type: typeFilter, qualification: qualFilter, state: stateFilter, search: searchQuery });
      setJobs(res);
      setLoading(false);
    }
    load();
  }, [typeFilter, qualFilter, stateFilter, searchQuery]);

  const sortedJobs = useMemo(() => {
    return [...jobs].sort((a, b) => {
      if (sortBy === 'vacancies') {
        return (b.vacancyCount || 0) - (a.vacancyCount || 0);
      }
      if (sortBy === 'alphabetical') {
        return a.title.localeCompare(b.title);
      }
      // Default: urgent
      const dlA = a.applicationDeadline ? new Date(a.applicationDeadline).getTime() : Infinity;
      const dlB = b.applicationDeadline ? new Date(b.applicationDeadline).getTime() : Infinity;
      return dlA - dlB;
    });
  }, [jobs, sortBy]);

  const handleResetFilters = () => {
    setTypeFilter('all');
    setQualFilter('all');
    setStateFilter('all');
    setSearchQuery('');
    setSortBy('urgent');
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '90px' }}>

      {/* ── STICKY FILTER HEADER ── */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: '1.5px solid var(--sc-line-200)',
          position: 'sticky',
          top: '60px',
          zIndex: 50,
          padding: '12px 16px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
        }}
      >
        {/* Search Bar + Filter Modal Trigger */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          <div style={{ position: 'relative', flex: 1 }}>
            <input
              type="search"
              placeholder="Search hospitals, cities (Apollo, Manipal, Delhi...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '10px 14px',
                border: '1.5px solid #cbd5e1',
                borderRadius: '10px',
                fontSize: '0.84rem',
                background: '#f8fafc',
                color: 'var(--sc-ink-900)',
                outline: 'none',
                fontFamily: 'inherit',
                height: '42px',
              }}
            />
          </div>

          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            style={{
              height: '42px',
              padding: '0 12px',
              borderRadius: '10px',
              background: '#0f172a',
              color: '#ffffff',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <SlidersHorizontal size={14} />
            <span>Filters</span>
          </button>
        </div>

        {/* Filters row */}
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', overflowX: 'auto', paddingBottom: '4px' }}>
          {TYPE_OPTIONS.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTypeFilter(t.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 10px',
                borderRadius: '100px',
                fontSize: '0.74rem',
                fontWeight: typeFilter === t.id ? 800 : 600,
                background: typeFilter === t.id ? '#0f172a' : '#f1f5f9',
                color: typeFilter === t.id ? '#ffffff' : '#334155',
                border: typeFilter === t.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              <span>{t.emoji}</span>
              <span>{t.label}</span>
            </button>
          ))}

          {/* State Select */}
          <select
            value={stateFilter}
            onChange={(e) => setStateFilter(e.target.value)}
            style={{
              padding: '5px 8px',
              borderRadius: '100px',
              fontSize: '0.74rem',
              fontWeight: 600,
              background: '#f8fafc',
              border: '1px solid #cbd5e1',
              color: '#334155',
              cursor: 'pointer',
              flexShrink: 0,
              outline: 'none',
            }}
          >
            {STATES.map((s) => (
              <option key={s} value={s === 'All States' ? 'all' : s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Sort Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', overflowX: 'auto' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', flexShrink: 0 }}>
            Sort:
          </span>
          {[
            { id: 'urgent', label: '⚡ Closing Soon' },
            { id: 'vacancies', label: '👥 Most Posts' },
            { id: 'alphabetical', label: '🔤 Hospital A–Z' },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSortBy(item.id as SortOption)}
              style={{
                fontSize: '0.70rem',
                fontWeight: sortBy === item.id ? 800 : 600,
                padding: '3px 8px',
                borderRadius: '6px',
                background: sortBy === item.id ? '#eff6ff' : 'transparent',
                color: sortBy === item.id ? '#1d4ed8' : '#64748b',
                border: sortBy === item.id ? '1px solid #bfdbfe' : '1px solid transparent',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── JOBS LIST ── */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '16px 16px 0' }}>
        {loading ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[1, 2, 3].map((n) => (
              <div key={n} style={{ height: '130px', background: '#e2e8f0', borderRadius: '14px' }} />
            ))}
          </div>
        ) : sortedJobs.length === 0 ? (
          <FilterEmptyState onResetFilters={handleResetFilters} />
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {sortedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>

      {/* Filter Drawer Modal */}
      <FilterDrawerModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        initialType="jobs"
      />
    </div>
  );
}

export default function JobsListPage() {
  return (
    <Suspense fallback={<div style={{ padding: '30px', textAlign: 'center' }}>Loading jobs...</div>}>
      <JobsListContent />
    </Suspense>
  );
}
