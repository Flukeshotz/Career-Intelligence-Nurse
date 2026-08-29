'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { FileText, ArrowRight } from 'lucide-react';
import { getExams } from '@/lib/data';
import { MockExam } from '@/lib/mock-data';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { EXAM_PAPERS } from '@/lib/pyq-mock-data';
import { FilterEmptyState } from '@/components/empty-states/EmptyState';

type ExamSector = 'all' | 'central' | 'defense' | 'state' | 'entrance' | 'psu';
type ViewMode = 'exams' | 'pyqs';

const SECTORS: { id: ExamSector; label: string; emoji: string }[] = [
  { id: 'all', label: 'All Exams', emoji: '⭐' },
  { id: 'central', label: 'Central & INIs', emoji: '🏛️' },
  { id: 'defense', label: 'Defense & Army', emoji: '🛡️' },
  { id: 'state', label: 'State PSCs', emoji: '🗺️' },
  { id: 'entrance', label: 'Entrances', emoji: '🎓' },
  { id: 'psu', label: 'PSU / NHM', emoji: '⚛️' },
];

export default function ExamsListPage() {
  const [exams, setExams] = useState<MockExam[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSector, setSelectedSector] = useState<ExamSector>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('exams');

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
        return name.includes('aiims norcet') || name.includes('rrb') || name.includes('esic') || name.includes('dsssb') || name.includes('jipmer') || name.includes('pgimer') || name.includes('nimhans') || name.includes('sctimst') || name.includes('neigrihms') || name.includes('cnci') || name.includes('gmch');
      }
      if (selectedSector === 'defense') {
        return name.includes('military nursing') || name.includes('mns') || name.includes('itbp') || name.includes('bsf') || name.includes('crpf') || name.includes('ssb');
      }
      if (selectedSector === 'entrance') {
        return name.includes('entrance') || name.includes('neet') || name.includes('wbjee') || name.includes('cnet') || name.includes('admission');
      }
      if (selectedSector === 'psu') {
        return name.includes('isro') || name.includes('npcil') || name.includes('sail') || name.includes('community health') || name.includes('nhm');
      }
      if (selectedSector === 'state') {
        return name.includes('uppsc') || name.includes('upums') || name.includes('ukmssb') || name.includes('rsmssb') || name.includes('tn mrb') || name.includes('mhsrb') || name.includes('kerala') || name.includes('kpsc') || name.includes('wbhrb') || name.includes('btsc') || name.includes('osssc') || name.includes('ojas') || name.includes('dhs') || name.includes('esb') || name.includes('hssc') || name.includes('bfuhs') || name.includes('jkssb') || name.includes('dme') || name.includes('hppsc') || name.includes('vyapam') || name.includes('jssc') || name.includes('gmc') || name.includes('igims') || name.includes('rims');
      }
      return true;
    });
  }, [exams, selectedSector]);

  const filteredPapers = useMemo(() => {
    if (selectedSector === 'all' && !searchQuery) return EXAM_PAPERS;
    return EXAM_PAPERS.filter(p => {
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
      <div style={{
        background: '#ffffff',
        borderBottom: '1.5px solid var(--sc-line-200)',
        position: 'sticky', top: '64px', zIndex: 50,
        padding: '12px 16px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
      }}>
        {/* Search bar */}
        <div style={{ position: 'relative', marginBottom: '10px' }}>
          <input
            type="search"
            placeholder="Search 50 exams — NORCET, RRB, MNS, Kerala…"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            style={{
              width: '100%', padding: '10px 14px',
              border: '1.5px solid #cbd5e1',
              borderRadius: '10px', fontSize: '0.86rem',
              background: '#f8fafc',
              color: 'var(--sc-ink-900)', outline: 'none',
              fontFamily: 'inherit', minHeight: '42px',
            }}
          />
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

        {/* Sector pills — horizontal scroll */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          {SECTORS.map(s => (
            <button
              key={s.id}
              type="button"
              onClick={() => setSelectedSector(s.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                padding: '6px 12px', borderRadius: '100px',
                fontSize: '0.76rem', fontWeight: selectedSector === s.id ? 800 : 600,
                background: selectedSector === s.id ? '#0f172a' : '#f1f5f9',
                color: selectedSector === s.id ? '#ffffff' : '#334155',
                border: selectedSector === s.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
                cursor: 'pointer', whiteSpace: 'nowrap', flexShrink: 0,
                transition: 'all 0.12s ease',
              }}
            >
              <span>{s.emoji}</span>
              <span>{s.label}</span>
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
                {[1, 2, 3].map(n => (
                  <div key={n} style={{ height: '130px', background: '#e2e8f0', borderRadius: '14px' }} />
                ))}
              </div>
            ) : filteredExams.length === 0 ? (
              <FilterEmptyState onResetFilters={() => { setSearchQuery(''); setSelectedSector('all'); }} />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {filteredExams.map(exam => <ExamCard key={exam.id} exam={exam} />)}
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
              {filteredPapers.map(paper => (
                <PyqCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
