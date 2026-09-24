'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { SlidersHorizontal, ArrowRight } from 'lucide-react';
import { getExams } from '@/lib/data';
import { MockExam, INITIAL_EXAMS } from '@/lib/mock-data';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { EXAM_PAPERS } from '@/lib/pyq-mock-data';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { AdSlot } from '@/components/blog/AdSlot';

export type ExamSector = 'all' | 'central' | 'railways' | 'defense' | 'state' | 'entrance' | 'psu';
export type SortOption = 'urgent' | 'vacancies' | 'exam_date' | 'alphabetical';
type ViewMode = 'exams' | 'pyqs';

const SECTORS: { id: ExamSector; label: string; emoji: string }[] = [
  { id: 'all', label: 'All', emoji: '' },
  { id: 'central', label: 'Central & AIIMS', emoji: '' },
  { id: 'railways', label: 'Railways', emoji: '' },
  { id: 'state', label: 'State boards', emoji: '' },
];

/**
 * Filters and list for /nursing/exams. The page (server) passes the full list in, so the first HTML
 * already contains every exam — search engines and slow phones see content, not a skeleton.
 */
export function ExamsClient({ initialExams, initialSector, initialSort }: { initialExams: MockExam[]; initialSector: ExamSector; initialSort: SortOption }) {
  const router = useRouter();

  const [exams, setExams] = useState<MockExam[]>(initialExams);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<ExamSector>(initialSector);
  const [sortBy, setSortBy] = useState<SortOption>(initialSort);
  const [viewMode, setViewMode] = useState<ViewMode>('exams');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      setExams(initialExams);
      return;
    }
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
    <div className="blog-page" style={{ minHeight: '100vh', paddingBottom: '90px' }}>
      <div className="blog-shell" style={{ paddingBottom: 0 }}>
        <ArticleHero
          crumbs={[{ label: 'Home', href: '/nursing' }, { label: 'Opportunities' }, { label: 'Government Exams' }]}
          badge="Government exams"
          title="Nursing recruitment exams"
          titleAccent="across India"
          subtitle="Every recruitment we track, with vacancies, dates and a full guide for each — checked against official notices and re-checked every day."
          showShare={false}
          compact
          handwriting={['Find', 'your next', 'exam']}
        />
        <AdSlot slot="article-top" />
      </div>

      {/* ── Filter bar (blog design system) ── */}
      <div className="list-bar">
        <div className="list-bar-inner">
          <div className="list-bar-row">
            <input
              type="search"
              className="list-search"
              placeholder="Search exams — NORCET, RRB, PGIMER…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search exams"
            />
            <button type="button" className="list-filter-btn" onClick={() => setIsFilterOpen(true)}>
              <SlidersHorizontal size={16} />
              <span>Filters</span>
            </button>
          </div>

          <div className="list-tabs" role="tablist">
            <button type="button" role="tab" aria-selected={viewMode === 'exams'} className={viewMode === 'exams' ? 'active' : undefined} onClick={() => setViewMode('exams')}>
              Exams ({filteredExams.length})
            </button>
            <button type="button" role="tab" aria-selected={viewMode === 'pyqs'} className={viewMode === 'pyqs' ? 'active' : undefined} onClick={() => setViewMode('pyqs')}>
              <span className="sc-hide-mobile">Previous year papers</span><span className="sc-hide-desktop">Papers</span> ({filteredPapers.length})
            </button>
          </div>

          <div className="list-chips">
            {SECTORS.map((sec) => (
              <button key={sec.id} type="button" className={selectedSector === sec.id ? 'active' : undefined} onClick={() => setSelectedSector(sec.id)}>
                {sec.label}
              </button>
            ))}
            <span className="list-sort">
              <label htmlFor="exam-sort">Sort</label>
              <select id="exam-sort" value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)}>
                <option value="urgent">Closing soon</option>
                <option value="vacancies">Most posts</option>
                <option value="exam_date">Exam date</option>
                <option value="alphabetical">A–Z</option>
              </select>
            </span>
          </div>
        </div>
      </div>

      {/* ── CONTENT BODY ── */}
      <div style={{ maxWidth: '1120px', margin: '0 auto', padding: '16px 16px 0' }}>

        <Link
          href="/nursing/upcoming-exams"
          className="list-callout"
        >
          <span>See every deadline and exam date in one calendar</span> <ArrowRight size={16} />
        </Link>

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
              <div className="home-cards">
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
                Previous year papers from the official booklets ({filteredPapers.length})
              </div>
              <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-600)' }}>
                Taken from the official question booklets, for timed practice.
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
