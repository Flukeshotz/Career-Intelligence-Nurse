'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, GraduationCap, ArrowRight, ShieldCheck } from 'lucide-react';
import { getExams } from '@/lib/data';
import { MockExam } from '@/lib/mock-data';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';

export default function ExamsListPage() {
  const [exams, setExams] = useState<MockExam[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getExams({ search: searchQuery });
      setExams(res);
      setLoading(false);
    }
    load();
  }, [searchQuery]);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '24px' }}>
      {/* ── Page Header ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
          National & State Recruitment Tests
        </div>
        <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
          Nursing Recruitment Examinations
        </h1>
        <p style={{ fontSize: '0.9rem', color: 'var(--sc-ink-700)', marginTop: '2px' }}>
          Track NORCET, Railway (RRB), TN MRB, and State PSC test schedules, admit card slips, syllabus, and results.
        </p>
      </div>

      {/* Flagship Callout Banner */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, var(--sc-navy-700) 100%)',
          color: 'var(--sc-white)',
          padding: '20px 24px',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
        }}
      >
        <div>
          <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#edb843', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
            Flagship Examination
          </div>
          <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-white)', marginTop: '2px' }}>
            NORCET 2026 (AIIMS New Delhi & Central Institutes)
          </div>
          <div style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: '2px' }}>
            2,218 Vacancies • Stage 1 CBT: 12 September 2026
          </div>
        </div>

        <Link
          href="/nursing/norcet"
          className="btn-primary"
          style={{ background: '#edb843', color: '#002856', border: 'none', padding: '10px 18px', fontWeight: 800 }}
        >
          <span>Open NORCET Authority Hub</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* Search Bar */}
      <div className="sc-card" style={{ padding: '16px 20px', marginBottom: '24px' }}>
        <div style={{ position: 'relative' }}>
          <Search size={16} color="var(--sc-ink-400)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search exams (e.g. NORCET 2026, RRB, AIIMS, MRB)..."
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
      </div>

      {/* Results Count */}
      <div style={{ fontSize: '0.86rem', color: 'var(--sc-ink-600)', fontWeight: 600, marginBottom: '14px' }}>
        Showing {exams.length} active recruitment examination {exams.length === 1 ? 'cycle' : 'cycles'}
      </div>

      {/* Exam Feed */}
      {loading ? (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {[1, 2, 3].map((n) => (
            <div key={n} className="sc-card" style={{ padding: '24px', height: '140px', background: 'var(--sc-surface-secondary)' }} />
          ))}
        </div>
      ) : exams.length === 0 ? (
        <FilterEmptyState onResetFilters={() => setSearchQuery('')} />
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {exams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      )}
    </div>
  );
}
