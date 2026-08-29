'use client';

export const dynamic = 'force-dynamic';

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowUpDown, SlidersHorizontal, FileText, ArrowRight, X } from 'lucide-react';
import { getExams } from '@/lib/data';
import { MockExam } from '@/lib/mock-data';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { EXAM_PAPERS } from '@/lib/pyq-mock-data';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';

type ExamSector = 'all' | 'central' | 'railways' | 'defense' | 'state' | 'entrance' | 'psu';
type SortOption = 'urgent' | 'vacancies' | 'exam_date' | 'alphabetical';
type ViewMode = 'exams' | 'pyqs';

const SECTORS: { id: ExamSector; label: string; emoji: string }[] = [
  { id: 'all', label: 'All Exams', emoji: '⭐' },
  { id: 'central', label: 'Central & AIIMS', emoji: '🏛️' },
  { id: 'railways', label: 'Railways (RRB)', emoji: '🚆' },
  { id: 'defense', label: 'Defense & Army', emoji: '🛡️' },
  { id: 'state', label: 'State PSCs', emoji: '🗺️' },
  { id: 'entrance', label: 'Admissions', emoji: '🎓' },
];

function ExamsListContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const initialSector = (searchParams.get('sector') as ExamSector) || 'all';
  const initialSort = (searchParams.get('sort') as SortOption) || 'urgent';

  const [exams, setExams] = useState<MockExam[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<ExamSector>(initialSector);
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [viewMode, setViewMode] = useState<ViewMode>('exams');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getExams({ search: searchQuery });
      setExams(res);
      setLoading(false);
    }
    load();
  }, [searchQuery]);

  // Apply Sector Filtering
  const filteredExams = useMemo(() => {
    let list = exams;

    if (selectedSector !== 'all') {
      list = list.filter((e) => {
        const name = (e.name + ' ' + e.organisation).toLowerCase();
        if (selectedSector === 'central') {
          return /aiims|norcet|esic|dsssb|jipmer|pgimer|nimhans|sctimst|neigrihms|cnci|gmch/i.test(name);
        }
        if (selectedSector === 'railways') {
          return /railway|rrb/i.test(name);
        }
        if (selectedSector === 'defense') {
          return /military|mns|itbp|bsf|crpf|ssb|army/i.test(name);
        }
        if (selectedSector === 'entrance') {
          return /entrance|neet|wbjee|cnet|admission/i.test(name);
        }
        if (selectedSector === 'psu') {
          return /isro|npcil|sail|community health|nhm/i.test(name);
        }
        if (selectedSector === 'state') {
          return /uppsc|upums|ukmssb|rsmssb|tn mrb|mhsrb|kerala|kpsc|wbhrb|btsc|osssc|ojas|dhs|esb|hssc|bfuhs|jkssb|dme|hppsc|vyapam|jssc|gmc|igims|rims/i.test(name);
        }
        return true;
      });
    }

    // Apply Sorting
    return [...list].sort((a, b) => {
      if (sortBy === 'vacancies') {
        return (b.vacancies || 0) - (a.vacancies || 0);
      }
      if (sortBy === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'exam_date') {
        const dateA = a.examDate ? new Date(a.examDate).getTime() : Infinity;
        const dateB = b.examDate ? new Date(b.examDate).getTime() : Infinity;
        return dateA - dateB;
      }
      // Default: urgent (deadline soonest)
      const dlA = a.applicationDeadline ? new Date(a.applicationDeadline).getTime() : Infinity;
      const dlB = b.applicationDeadline ? new Date(b.applicationDeadline).getTime() : Infinity;
      return dlA - dlB;
    });
  }, [exams, selectedSector, sortBy]);

  const filteredPapers = useMemo(() => {
    if (selectedSector === 'all' && !searchQuery) return EXAM_PAPERS;
    return EXAM_PAPERS.filter((p) => {
      if (selectedSector !== 'all' && p.category !== selectedSector) return false;
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        return p.title.toLowerCase().includes(q) || p.examName.toLowerCase().includes(q);
      }
      return true;
    });
  }, [selectedSector, searchQuery]);

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
              placeholder="Search 50 exams (NORCET, RRB, MNS, ESIC...)"
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

        {/* View Mode Toggle: All Exams vs PYQ Papers */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '8px' }}>
          <button
            type="button"
            onClick={() => setViewMode('exams')}
            style={{
              flex: 1,
              padding: '7px 10px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: viewMode === 'exams' ? 800 : 600,
              background: viewMode === 'exams' ? 'var(--sc-navy-700)' : '#f1f5f9',
              color: viewMode === 'exams' ? '#ffffff' : 'var(--sc-ink-700)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.12s ease',
            }}
          >
            🏛️ All Exams ({filteredExams.length})
          </button>

          <button
            type="button"
            onClick={() => setViewMode('pyqs')}
            style={{
              flex: 1,
              padding: '7px 10px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: viewMode === 'pyqs' ? 800 : 600,
              background: viewMode === 'pyqs' ? 'var(--sc-blue-600)' : '#f1f5f9',
              color: viewMode === 'pyqs' ? '#ffffff' : 'var(--sc-ink-700)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.12s ease',
            }}
          >
            📄 PYQs &amp; Mock Tests ({filteredPapers.length})
          </button>
        </div>

        {/* Sector pills */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
          {SECTORS.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSector(s.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '5px 10px',
                borderRadius: '100px',
                fontSize: '0.74rem',
                fontWeight: selectedSector === s.id ? 800 : 600,
                background: selectedSector === s.id ? '#0f172a' : '#f1f5f9',
                color: selectedSector === s.id ? '#ffffff' : '#334155',
                border: selectedSector === s.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'all 0.12s ease',
              }}
            >
              <span>{s.emoji}</span>
              <span>{s.label}</span>
            </button>
          ))}
        </div>

        {/* Sort Bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '6px', overflowX: 'auto' }}>
          <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', flexShrink: 0 }}>
            Sort:
          </span>
          {[
            { id: 'urgent', label: '⚡ Closing Soon' },
            { id: 'vacancies', label: '👥 Most Posts' },
            { id: 'exam_date', label: '📅 Exam Date' },
            { id: 'alphabetical', label: '🔤 A–Z' },
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

      {/* ── CONTENT BODY ── */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '16px 16px 0' }}>

        {/* EXAMS VIEW */}
        {viewMode === 'exams' && (
          <div>
            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[1, 2, 3].map((n) => (
                  <div key={n} style={{ height: '130px', background: '#e2e8f0', borderRadius: '14px' }} />
                ))}
              </div>
            ) : filteredExams.length === 0 ? (
              <FilterEmptyState onResetFilters={() => { setSearchQuery(''); setSelectedSector('all'); setSortBy('urgent'); }} />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredExams.map((exam) => (
                  <ExamCard key={exam.id} exam={exam} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* PYQS VIEW */}
        {viewMode === 'pyqs' && (
          <div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Official Question Papers &amp; Full Mock Tests ({filteredPapers.length})
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-600)' }}>
                Real past papers with official answer keys for practice and time management.
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredPapers.map((paper) => (
                <PyqCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Filter Drawer Modal */}
      <FilterDrawerModal
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        initialType="exams"
      />
    </div>
  );
}

export default function ExamsListPage() {
  return (
    <Suspense fallback={<div style={{ padding: '30px', textAlign: 'center' }}>Loading exams...</div>}>
      <ExamsListContent />
    </Suspense>
  );
}
