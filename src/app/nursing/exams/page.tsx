'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { Search, GraduationCap, ArrowRight, ShieldCheck, Sparkles, Filter } from 'lucide-react';
import { getExams } from '@/lib/data';
import { MockExam } from '@/lib/mock-data';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';

type ExamSector = 'all' | 'central' | 'defense' | 'state' | 'entrance' | 'psu';

export default function ExamsListPage() {
  const [exams, setExams] = useState<MockExam[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<ExamSector>('all');

  useEffect(() => {
    async function load() {
      setLoading(true);
      const res = await getExams({ search: searchQuery });
      setExams(res);
      setLoading(false);
    }
    load();
  }, [searchQuery]);

  const filteredExams = useMemo(() => {
    if (selectedSector === 'all') return exams;
    return exams.filter((e) => {
      const name = (e.name + ' ' + e.organisation).toLowerCase();
      if (selectedSector === 'central') {
        return (
          name.includes('aiims norcet') ||
          name.includes('rrb') ||
          name.includes('esic') ||
          name.includes('dsssb') ||
          name.includes('jipmer') ||
          name.includes('pgimer') ||
          name.includes('nimhans') ||
          name.includes('sctimst') ||
          name.includes('neigrihms') ||
          name.includes('cnci') ||
          name.includes('gmch')
        );
      }
      if (selectedSector === 'defense') {
        return (
          name.includes('military nursing') ||
          name.includes('mns') ||
          name.includes('itbp') ||
          name.includes('bsf') ||
          name.includes('crpf') ||
          name.includes('ssb')
        );
      }
      if (selectedSector === 'entrance') {
        return (
          name.includes('entrance') ||
          name.includes('neet') ||
          name.includes('wbjee') ||
          name.includes('cnet') ||
          name.includes('admission')
        );
      }
      if (selectedSector === 'psu') {
        return (
          name.includes('isro') ||
          name.includes('npcil') ||
          name.includes('sail') ||
          name.includes('community health') ||
          name.includes('nhm')
        );
      }
      if (selectedSector === 'state') {
        return (
          name.includes('uppsc') ||
          name.includes('upums') ||
          name.includes('ukmssb') ||
          name.includes('rsmssb') ||
          name.includes('tn mrb') ||
          name.includes('mhsrb') ||
          name.includes('kerala') ||
          name.includes('kpsc') ||
          name.includes('wbhrb') ||
          name.includes('btsc') ||
          name.includes('osssc') ||
          name.includes('ojas') ||
          name.includes('dhs') ||
          name.includes('esb') ||
          name.includes('hssc') ||
          name.includes('bfuhs') ||
          name.includes('jkssb') ||
          name.includes('dme') ||
          name.includes('hppsc') ||
          name.includes('vyapam') ||
          name.includes('jssc') ||
          name.includes('gmc') ||
          name.includes('igims') ||
          name.includes('rims')
        );
      }
      return true;
    });
  }, [exams, selectedSector]);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '24px', paddingBottom: '48px' }}>
      {/* ── Page Header ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
          National & State Recruitment Tests
        </div>
        <h1 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
          Nursing Recruitment & Entrance Examinations
        </h1>
        <p style={{ fontSize: '0.90rem', color: 'var(--sc-ink-700)', marginTop: '2px' }}>
          Verified schedules, multi-tier exam patterns, subject weightages, admit card slips, and official deep links across 50 examinations.
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
            NORCET 2026 (AIIMS New Delhi & 20+ Participating AIIMS)
          </div>
          <div style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: '2px' }}>
            2,218 Vacancies • Stage 1 CBT: 12 September 2026 • Pay Level 7
          </div>
        </div>

        <Link
          href="/nursing/norcet"
          className="btn-primary"
          style={{ background: '#edb843', color: '#002856', border: 'none', padding: '10px 18px', fontWeight: 800, borderRadius: 'var(--radius-sm)' }}
        >
          <span>Open NORCET Authority Hub</span>
          <ArrowRight size={15} />
        </Link>
      </div>

      {/* ── Search & Sector Filter Ribbon ── */}
      <div className="sc-card" style={{ padding: '16px 20px', marginBottom: '24px' }}>
        <div style={{ position: 'relative', marginBottom: '14px' }}>
          <Search size={16} color="var(--sc-ink-400)" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
          <input
            type="text"
            placeholder="Search 50 examinations (e.g. NORCET, RRB, ESIC, MNS, UPPSC, Kerala PSC, NEET)..."
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

        {/* Category Pills */}
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
          {[
            { id: 'all', label: `All Exams (${exams.length})` },
            { id: 'central', label: 'Central & INIs (11)' },
            { id: 'defense', label: 'Defense & Paramilitary (5)' },
            { id: 'state', label: 'State PSCs (25)' },
            { id: 'entrance', label: 'Academic Entrances (5)' },
            { id: 'psu', label: 'PSUs & NHM (4)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSector(tab.id as ExamSector)}
              style={{
                padding: '6px 14px',
                borderRadius: 'var(--radius-pill)',
                fontSize: '0.80rem',
                fontWeight: selectedSector === tab.id ? 800 : 600,
                background: selectedSector === tab.id ? 'var(--sc-navy-700)' : 'var(--sc-surface-secondary)',
                color: selectedSector === tab.id ? 'var(--sc-white)' : 'var(--sc-ink-700)',
                border: selectedSector === tab.id ? '1px solid var(--sc-navy-700)' : '1px solid var(--sc-line-200)',
                whiteSpace: 'nowrap',
                transition: 'all 0.15s ease',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── Exams Grid ── */}
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
