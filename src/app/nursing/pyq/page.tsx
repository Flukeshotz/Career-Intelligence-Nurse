'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, Search, FileText } from 'lucide-react';
import { EXAM_PAPERS, ExamPaper } from '@/lib/pyq-mock-data';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { PaperViewerModal } from '@/components/opportunity/PaperViewerModal';

type CategoryFilter = 'all' | 'central' | 'railways' | 'state';
type TypeFilter = 'all' | 'pyq' | 'mock';

export default function PreviousYearPapersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [typeFilter, setTypeFilter] = useState<TypeFilter>('all');
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);

  const filteredPapers = useMemo(() => {
    return EXAM_PAPERS.filter((p) => {
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = p.title.toLowerCase().includes(q);
        const matchesExam = p.examName.toLowerCase().includes(q);
        const matchesShift = (p.shift || '').toLowerCase().includes(q);
        if (!matchesTitle && !matchesExam && !matchesShift) return false;
      }

      // Type filter
      if (typeFilter !== 'all' && p.type !== typeFilter) return false;

      // Category filter
      if (categoryFilter === 'central') {
        if (p.category !== 'central') return false;
      } else if (categoryFilter === 'railways') {
        if (!p.examName.toLowerCase().includes('railway') && !p.examName.toLowerCase().includes('rrb')) return false;
      } else if (categoryFilter === 'state') {
        if (p.category !== 'state') return false;
      }

      return true;
    });
  }, [searchQuery, categoryFilter, typeFilter]);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '860px', margin: '0 auto', paddingBottom: '90px' }}>
      
      {/* ── TOP NAV & CALM HEADER ── */}
      <div style={{ marginBottom: '16px' }}>
        <Link
          href="/nursing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--sc-navy-700)',
            fontSize: '0.80rem',
            fontWeight: 700,
            textDecoration: 'none',
            marginBottom: '8px',
          }}
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0', letterSpacing: '-0.02em' }}>
          Previous Year Question Papers
        </h1>
        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
          Official shift booklets and full-length CBT mocks with verified keys
        </p>
      </div>

      {/* ── SEARCH & FILTER CONTROLS ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
        {/* Search Field */}
        <div style={{ position: 'relative' }}>
          <Search size={16} color="#94a3b8" style={{ position: 'absolute', left: '12px', top: '13px' }} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by exam (NORCET, RRB Railways, ESIC, DSSSB...)"
            style={{
              width: '100%',
              height: '42px',
              borderRadius: '10px',
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              paddingLeft: '36px',
              paddingRight: '12px',
              fontSize: '0.84rem',
              color: '#0f172a',
              outline: 'none',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            }}
          />
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
          {[
            { id: 'all', label: 'All Papers' },
            { id: 'central', label: '🏛️ AIIMS & Central' },
            { id: 'railways', label: '🚆 RRB Railways' },
            { id: 'state', label: '🏥 State PSCs' },
          ].map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategoryFilter(cat.id as CategoryFilter)}
              style={{
                padding: '6px 12px',
                borderRadius: '100px',
                fontSize: '0.74rem',
                fontWeight: categoryFilter === cat.id ? 800 : 600,
                background: categoryFilter === cat.id ? 'var(--sc-navy-900)' : '#ffffff',
                color: categoryFilter === cat.id ? '#ffffff' : '#475569',
                border: categoryFilter === cat.id ? '1px solid var(--sc-navy-900)' : '1px solid #e2e8f0',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.12s ease',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* ── PAPERS LIST ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredPapers.length === 0 ? (
          <div style={{ background: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', padding: '30px 20px', textAlign: 'center' }}>
            <FileText size={32} color="#94a3b8" style={{ margin: '0 auto 8px' }} />
            <div style={{ fontSize: '0.90rem', fontWeight: 800, color: '#0f172a' }}>No matching question papers found</div>
            <div style={{ fontSize: '0.76rem', color: '#64748b', marginTop: '4px' }}>Try searching for &quot;NORCET&quot; or &quot;RRB&quot;</div>
          </div>
        ) : (
          filteredPapers.map((paper) => (
            <PyqCard key={paper.id} paper={paper} />
          ))
        )}
      </div>

      {selectedPaper && (
        <PaperViewerModal
          paper={selectedPaper}
          isOpen={Boolean(selectedPaper)}
          onClose={() => setSelectedPaper(null)}
        />
      )}
    </div>
  );
}
