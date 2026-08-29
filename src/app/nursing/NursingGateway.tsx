'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Upload, AlertCircle, ChevronRight, Search, FileText, Download, Sparkles, Filter } from 'lucide-react';
import { INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/mock-data';
import { EXAM_PAPERS, ExamPaper } from '@/lib/pyq-mock-data';
import { getUserProfile, UserProfile } from '@/lib/user-store';
import { JobCard } from '@/components/opportunity/JobCard';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';
import { OfficialPortalsDirectory } from '@/components/opportunity/OfficialPortalsDirectory';

type Tab = 'exams' | 'jobs' | 'pyq' | 'portals';
type Qualification = 'all' | 'bsc' | 'gnm' | 'admissions';

const QUAL_OPTIONS: { id: Qualification; label: string; emoji: string }[] = [
  { id: 'all', emoji: '⭐', label: 'All' },
  { id: 'bsc', emoji: '🩺', label: 'B.Sc. Nursing' },
  { id: 'gnm', emoji: '📋', label: 'GNM Diploma' },
  { id: 'admissions', emoji: '🎓', label: '10+2 / Entrances' },
];

export default function NursingGateway() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('exams');
  const [qualification, setQualification] = useState<Qualification>('all');
  const [pyqExamFilter, setPyqExamFilter] = useState<string>('all');
  const [pyqTypeFilter, setPyqTypeFilter] = useState<'all' | 'pyq' | 'mock'>('all');

  useEffect(() => {
    setProfile(getUserProfile());
  }, []);

  const filteredExams = useMemo(() => {
    if (qualification === 'admissions') {
      return INITIAL_EXAMS.filter(e => {
        const n = (e.name + e.organisation).toLowerCase();
        return n.includes('neet') || n.includes('wbjee') || n.includes('cnet') || n.includes('b.sc.') || n.includes('entrance');
      });
    }
    if (qualification === 'bsc') {
      return INITIAL_EXAMS.filter(e => {
        const q = (e.qualification || '').toLowerCase();
        return q.includes('b.sc') || q.includes('bsc') || !q.includes('gnm');
      });
    }
    if (qualification === 'gnm') {
      return INITIAL_EXAMS.filter(e => {
        const q = (e.qualification || '').toLowerCase();
        return q.includes('gnm') || q.includes('diploma');
      });
    }
    return INITIAL_EXAMS;
  }, [qualification]);

  const filteredJobs = useMemo(() => {
    if (qualification === 'admissions') return [];
    if (qualification === 'bsc') {
      return INITIAL_JOBS.filter(j => {
        const q = (j.qualification || '').toLowerCase();
        return q.includes('b.sc') || q.includes('bsc');
      });
    }
    if (qualification === 'gnm') {
      return INITIAL_JOBS.filter(j => {
        const q = (j.qualification || '').toLowerCase();
        return q.includes('gnm') || q.includes('diploma');
      });
    }
    return INITIAL_JOBS;
  }, [qualification]);

  const filteredPapers = useMemo(() => {
    return EXAM_PAPERS.filter(p => {
      if (pyqTypeFilter !== 'all' && p.type !== pyqTypeFilter) return false;
      if (pyqExamFilter !== 'all' && !p.examName.toLowerCase().includes(pyqExamFilter.toLowerCase())) return false;
      return true;
    });
  }, [pyqExamFilter, pyqTypeFilter]);

  const TABS: { id: Tab; emoji: string; label: string; count?: number }[] = [
    { id: 'exams', emoji: '🏛️', label: 'Govt Exams', count: filteredExams.length },
    { id: 'jobs', emoji: '🏥', label: 'Hospital Jobs', count: filteredJobs.length },
    { id: 'pyq', emoji: '📄', label: 'PYQs & Mocks', count: EXAM_PAPERS.length },
    { id: 'portals', emoji: '🌐', label: 'Official Portals', count: 50 },
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '90px' }}>

      {/* ── 1. CLEAN APP HERO (Zero Clutter) ── */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '16px 16px 12px' }}>
        <div style={{ maxWidth: '860px', margin: '0 auto' }}>
          
          {/* Top Bar: Title + Qualification Switcher */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <div>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>
                {profile?.fullName ? `Hello, ${profile.fullName}` : 'Nursing Opportunities'}
              </h1>
              <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                50 Central &amp; State Exams • 23 Hospital Vacancies
              </div>
            </div>

            {/* Micro Eligibility Check button */}
            {!profile && (
              <button
                type="button"
                onClick={() => setIsResumeModalOpen(true)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '6px 12px',
                  borderRadius: '100px',
                  background: 'var(--sc-navy-50)',
                  color: 'var(--sc-navy-700)',
                  border: '1px solid var(--sc-navy-100)',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                <Upload size={12} />
                <span>Auto-Match CV</span>
              </button>
            )}
          </div>

          {/* Urgent NORCET 2026 Highlight Bar */}
          <Link
            href="/nursing/norcet"
            style={{
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '10px',
              padding: '8px 12px',
              marginBottom: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <span style={{ fontSize: '0.9rem' }}>⚡</span>
              <div style={{ fontSize: '0.78rem', color: '#92400e', fontWeight: 700, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <strong>AIIMS NORCET 2026:</strong> Stage 1 CBT on <strong>12 Sep</strong> (2,218 Posts)
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#b45309', display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
              Hub <ChevronRight size={13} />
            </span>
          </Link>

          {/* Qualification Filter Strip */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '2px' }}>
            {QUAL_OPTIONS.map(q => (
              <button
                key={q.id}
                type="button"
                onClick={() => setQualification(q.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '5px 12px',
                  borderRadius: '100px',
                  fontSize: '0.76rem',
                  fontWeight: qualification === q.id ? 800 : 600,
                  background: qualification === q.id ? 'var(--sc-navy-700)' : '#f1f5f9',
                  color: qualification === q.id ? '#ffffff' : '#475569',
                  border: qualification === q.id ? '1px solid var(--sc-navy-700)' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.12s ease',
                }}
              >
                <span>{q.emoji}</span>
                <span>{q.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── 2. CLEAN HORIZONTAL TAB BAR (Zero Text Overlap, No Smashed Layout) ── */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          position: 'sticky',
          top: '60px',
          zIndex: 40,
          boxShadow: '0 2px 4px rgba(0,0,0,0.02)',
        }}
      >
        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'flex',
            gap: '8px',
            overflowX: 'auto',
            padding: '8px 16px',
            scrollbarWidth: 'none',
          }}
        >
          {TABS.map(tab => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 14px',
                  borderRadius: '100px',
                  fontSize: '0.80rem',
                  fontWeight: isSelected ? 800 : 600,
                  background: isSelected ? '#0f172a' : '#f8fafc',
                  color: isSelected ? '#ffffff' : '#334155',
                  border: isSelected ? '1px solid #0f172a' : '1px solid #e2e8f0',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  transition: 'all 0.12s ease',
                }}
              >
                <span>{tab.emoji}</span>
                <span>{tab.label}</span>
                {tab.count !== undefined && (
                  <span
                    style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '1px 6px',
                      borderRadius: '100px',
                      background: isSelected ? 'rgba(255,255,255,0.2)' : '#e2e8f0',
                      color: isSelected ? '#ffffff' : '#475569',
                    }}
                  >
                    {tab.count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── 3. CONTENT FEED (Spacious & Clean) ── */}
      <div style={{ maxWidth: '860px', margin: '0 auto', padding: '16px 16px 0' }}>

        {/* ── TAB 1: GOVT EXAMS ── */}
        {activeTab === 'exams' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                All Recruitment Exams ({filteredExams.length})
              </div>
              <Link href="/nursing/exams" style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--sc-navy-700)', textDecoration: 'none' }}>
                Filters &amp; Search →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredExams.map(exam => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 2: HOSPITAL JOBS ── */}
        {activeTab === 'jobs' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                Hospital &amp; Clinical Vacancies ({filteredJobs.length})
              </div>
              <Link href="/nursing/jobs" style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--sc-navy-700)', textDecoration: 'none' }}>
                All Hospitals →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: PREVIOUS YEAR PAPERS & MOCKS (100% IN-APP) ── */}
        {activeTab === 'pyq' && (
          <div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                Verified Previous Year Papers &amp; Mock Tests ({filteredPapers.length})
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                Download real official examination booklets with verified answer keys directly in-app.
              </div>
            </div>

            {/* Quick Sector Filters for PYQs */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '10px', marginBottom: '6px' }}>
              {[
                { id: 'all', label: 'All Exams' },
                { id: 'norcet', label: 'NORCET' },
                { id: 'rrb', label: 'RRB' },
                { id: 'esic', label: 'ESIC' },
                { id: 'dsssb', label: 'DSSSB' },
                { id: 'mns', label: 'MNS Army' },
                { id: 'state', label: 'State PSCs' },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setPyqExamFilter(f.id)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '100px',
                    fontSize: '0.74rem',
                    fontWeight: pyqExamFilter === f.id ? 800 : 600,
                    background: pyqExamFilter === f.id ? 'var(--sc-navy-700)' : '#ffffff',
                    color: pyqExamFilter === f.id ? '#ffffff' : '#334155',
                    border: pyqExamFilter === f.id ? '1px solid var(--sc-navy-700)' : '1px solid #cbd5e1',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {f.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filteredPapers.map(paper => (
                <PyqCard key={paper.id} paper={paper} />
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 4: OFFICIAL PORTALS ── */}
        {activeTab === 'portals' && (
          <div>
            <div style={{ marginBottom: '12px' }}>
              <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                Verified Official Government Portals (50)
              </div>
              <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                Direct access to official examination portals with zero third-party redirects.
              </div>
            </div>
            <OfficialPortalsDirectory />
          </div>
        )}
      </div>

      {/* Resume Upload Modal */}
      <ResumeUploadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onProfileConfirmed={(newProfile) => {
          setProfile(newProfile);
          setIsResumeModalOpen(false);
        }}
      />
    </div>
  );
}
