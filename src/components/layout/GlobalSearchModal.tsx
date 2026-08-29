'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Search, X, GraduationCap, Briefcase, ExternalLink, ChevronRight } from 'lucide-react';
import { INITIAL_EXAMS, INITIAL_JOBS } from '@/lib/mock-data';

interface SearchResult {
  type: 'exam' | 'job' | 'portal';
  id: string;
  title: string;
  subtitle: string;
  href: string;
  tag?: string;
  external?: boolean;
}

const QUICK_PORTALS: SearchResult[] = [
  { type: 'portal', id: 'p1', title: 'AIIMS Exam Section', subtitle: 'NORCET 2026', href: 'https://www.aiimsexams.ac.in', tag: 'Central', external: true },
  { type: 'portal', id: 'p2', title: 'RRB Apply Portal', subtitle: 'Railway Nursing', href: 'https://www.rrbapply.gov.in', tag: 'Railways', external: true },
  { type: 'portal', id: 'p3', title: 'UPSC Online (ESIC)', subtitle: 'Nursing Officer', href: 'https://upsconline.nic.in', tag: 'Central', external: true },
  { type: 'portal', id: 'p4', title: 'DSSSB OARS', subtitle: 'Delhi Nursing Officer', href: 'https://dsssbonline.nic.in', tag: 'Delhi', external: true },
  { type: 'portal', id: 'p5', title: 'Join Indian Army', subtitle: 'MNS Officers', href: 'https://joinindianarmy.nic.in', tag: 'Defense', external: true },
  { type: 'portal', id: 'p6', title: 'Kerala PSC Thulasi', subtitle: 'Staff Nurse Gr.II', href: 'https://thulasi.psc.kerala.gov.in/thulasi/', tag: 'Kerala', external: true },
  { type: 'portal', id: 'p7', title: 'TN MRB', subtitle: 'Tamil Nadu Nurses', href: 'https://www.mrb.tn.gov.in', tag: 'Tamil Nadu', external: true },
  { type: 'portal', id: 'p8', title: 'NHM India (CHO)', subtitle: 'Community Health', href: 'https://nhm.gov.in', tag: 'National', external: true },
];

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function GlobalSearchModal({ isOpen, onClose }: GlobalSearchModalProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const allResults: SearchResult[] = [
    ...INITIAL_EXAMS.map(e => ({
      type: 'exam' as const,
      id: e.id,
      title: e.name,
      subtitle: e.organisation,
      href: `/nursing/exams/${e.slug}`,
      tag: e.vacancies ? `${e.vacancies.toLocaleString('en-IN')} Posts` : 'Entrance',
    })),
    ...INITIAL_JOBS.map(j => ({
      type: 'job' as const,
      id: j.id,
      title: j.title,
      subtitle: j.employer,
      href: `/nursing/jobs/${j.slug}`,
      tag: j.vacancyCount ? `${j.vacancyCount} Posts` : 'Open',
    })),
    ...QUICK_PORTALS,
  ];

  const filtered = query.trim().length > 0
    ? allResults.filter(r =>
        (r.title + r.subtitle + (r.tag || '')).toLowerCase().includes(query.toLowerCase())
      ).slice(0, 15)
    : [];

  const examResults = filtered.filter(r => r.type === 'exam');
  const jobResults = filtered.filter(r => r.type === 'job');
  const portalResults = filtered.filter(r => r.type === 'portal');

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 80);
    }
  }, [isOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  if (!isOpen) return null;

  const ResultRow = ({ result }: { result: SearchResult }) => {
    const iconBg = result.type === 'exam' ? '#eef5ff' : result.type === 'job' ? 'var(--sc-green-50)' : '#f5f3ff';
    const icon = result.type === 'exam'
      ? <GraduationCap size={16} color="var(--sc-navy-600)" />
      : result.type === 'job'
      ? <Briefcase size={16} color="var(--sc-green-600)" />
      : <ExternalLink size={16} color="#7c3aed" />;

    const inner = (
      <div style={{
        display: 'flex', alignItems: 'center', gap: '12px',
        padding: '12px 16px',
        borderBottom: '1px solid var(--sc-line-100)',
        cursor: 'pointer',
        transition: 'background 0.1s ease',
        textDecoration: 'none',
      }}
        onMouseEnter={e => (e.currentTarget.style.background = 'var(--sc-surface-secondary)')}
        onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
      >
        <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          {icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: '0.90rem', fontWeight: 700, color: 'var(--sc-ink-900)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {result.title}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-500)', marginTop: '1px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {result.subtitle}
          </div>
        </div>
        {result.tag && (
          <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '2px 8px', borderRadius: '100px', background: result.type === 'portal' ? '#ede9fe' : 'var(--sc-navy-50)', color: result.type === 'portal' ? '#7c3aed' : 'var(--sc-navy-700)', whiteSpace: 'nowrap', flexShrink: 0 }}>
            {result.tag}
          </span>
        )}
        <ChevronRight size={16} color="var(--sc-ink-300)" style={{ flexShrink: 0 }} />
      </div>
    );

    if (result.external) {
      return (
        <a href={result.href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', display: 'block' }} onClick={onClose}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={result.href} style={{ textDecoration: 'none', display: 'block' }} onClick={onClose}>
        {inner}
      </Link>
    );
  };

  const GroupLabel = ({ label }: { label: string }) => (
    <div style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--sc-ink-400)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '10px 16px 4px', background: 'var(--sc-surface-secondary)' }}>
      {label}
    </div>
  );

  return (
    /* Backdrop */
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
      }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      {/* Sheet — slides up from bottom on all screens, max 90vh */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px 20px 0 0',
          maxHeight: '90vh',
          display: 'flex', flexDirection: 'column',
          boxShadow: '0 -8px 40px rgba(0,0,0,0.18)',
          animation: 'sheetUp 0.22s cubic-bezier(0.32,0.72,0,1)',
          /* On larger screens, cap width and center */
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        {/* Drag handle */}
        <div style={{ padding: '10px 0 0', display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '40px', height: '4px', borderRadius: '2px', background: 'var(--sc-line-300)' }} />
        </div>

        {/* Search input */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 16px 10px', borderBottom: '1.5px solid var(--sc-line-100)' }}>
          <Search size={20} color="var(--sc-navy-600)" style={{ flexShrink: 0 }} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search exams, jobs, portals…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            style={{
              flex: 1, border: 'none', outline: 'none', background: 'transparent',
              fontSize: '1rem', fontFamily: 'inherit', color: 'var(--sc-ink-900)',
              minHeight: '44px',
            }}
          />
          <button
            onClick={onClose}
            style={{
              width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
              background: 'var(--sc-surface-secondary)', border: 'none', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            <X size={16} color="var(--sc-ink-600)" />
          </button>
        </div>

        {/* Results area */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          {query.trim().length === 0 ? (
            <div>
              <GroupLabel label="Quick Portal Access" />
              {QUICK_PORTALS.map(p => (
                <a key={p.id} href={p.href} target="_blank" rel="noopener noreferrer" onClick={onClose} style={{ textDecoration: 'none', display: 'block' }}>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    padding: '12px 16px',
                    borderBottom: '1px solid var(--sc-line-100)',
                    cursor: 'pointer',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'var(--sc-surface-secondary)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#7c3aed', flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--sc-ink-900)' }}>{p.title}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-500)' }}>{p.subtitle}</div>
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, padding: '2px 7px', borderRadius: '100px', background: '#ede9fe', color: '#7c3aed', flexShrink: 0 }}>
                      {p.tag}
                    </span>
                    <ExternalLink size={14} color="var(--sc-ink-400)" style={{ flexShrink: 0 }} />
                  </div>
                </a>
              ))}
              <div style={{ padding: '14px 16px', background: 'var(--sc-surface-secondary)', margin: '8px 0 0' }}>
                <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-500)' }}>
                  Search across <strong>50 exams</strong>, <strong>23 vacancies</strong>, and <strong>50+ official portals</strong>
                </div>
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '48px 16px' }}>
              <div style={{ fontSize: '2rem', marginBottom: '8px' }}>🔍</div>
              <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--sc-ink-700)' }}>No results for &ldquo;{query}&rdquo;</div>
              <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-400)', marginTop: '4px' }}>Try &ldquo;NORCET&rdquo;, &ldquo;Kerala&rdquo;, &ldquo;GNM&rdquo;, or &ldquo;DSSSB&rdquo;</div>
            </div>
          ) : (
            <>
              {examResults.length > 0 && (
                <>
                  <GroupLabel label={`Recruitment Exams (${examResults.length})`} />
                  {examResults.map(r => <ResultRow key={r.id} result={r} />)}
                </>
              )}
              {jobResults.length > 0 && (
                <>
                  <GroupLabel label={`Hospital Vacancies (${jobResults.length})`} />
                  {jobResults.map(r => <ResultRow key={r.id} result={r} />)}
                </>
              )}
              {portalResults.length > 0 && (
                <>
                  <GroupLabel label={`Official Portals (${portalResults.length})`} />
                  {portalResults.map(r => <ResultRow key={r.id} result={r} />)}
                </>
              )}
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes sheetUp {
          from { transform: translateY(40px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        /* On wider screens: center the sheet like a modal */
        @media (min-width: 640px) {
          .search-sheet-wrap {
            align-items: center !important;
            justify-content: center !important;
            padding: 40px 16px;
          }
        }
      `}</style>
    </div>
  );
}
