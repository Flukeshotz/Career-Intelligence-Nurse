'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, Upload, AlertCircle, ChevronRight, Search, FileText, Download, Sparkles, Filter } from 'lucide-react';
import { INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/mock-data';
import { EXAM_PAPERS, ExamPaper, getAllPapers } from '@/lib/pyq-mock-data';
import { getTrackedOpportunities, getUserProfile, UserProfile } from '@/lib/user-store';
import { JobCard } from '@/components/opportunity/JobCard';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';
import { OfficialPortalsDirectory } from '@/components/opportunity/OfficialPortalsDirectory';

type Tab = 'exams' | 'jobs' | 'pyq' | 'portals' | 'norcet';
type Qualification = 'all' | 'bsc' | 'gnm' | 'admissions';

const QUAL_OPTIONS: { id: Qualification; label: string; emoji: string; desc: string }[] = [
  { id: 'all', emoji: '⭐', label: 'All Nurses', desc: 'All 50 national & state opportunities' },
  { id: 'bsc', emoji: '🩺', label: 'B.Sc. Nursing', desc: '0 Exp required for central Level 7 posts' },
  { id: 'gnm', emoji: '📋', label: 'GNM Diploma', desc: 'RRB (0 Exp) & NORCET (2 Yr in 50-bed)' },
  { id: 'admissions', emoji: '🎓', label: '10+2 / Entrances', desc: 'NEET, AIIMS B.Sc., WBJEE & state CNET' },
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
    { id: 'pyq', emoji: '📝', label: 'PYQ & Mocks', count: EXAM_PAPERS.length },
    { id: 'portals', emoji: '🌐', label: 'Official Portals' },
    { id: 'norcet', emoji: '⚡', label: 'NORCET Hub' },
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh' }}>

      {/* ── 1. CLEAN APP HERO (Non-sticky, spacious, elegant) ── */}
      <div
        style={{
          background: 'linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%)',
          borderBottom: '1px solid #e2e8f0',
          padding: '24px 16px 16px',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto' }}>
          
          {/* Clean Header Bar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
            <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--sc-navy-900)', letterSpacing: '-0.02em', margin: 0 }}>
              {profile?.fullName ? `Welcome, ${profile.fullName}` : 'Nursing Gateway'}
            </h1>

            <span style={{ fontSize: '0.72rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px', background: '#e6f4ea', color: '#137333' }}>
              🟢 50 Exams · 23 Jobs Live
            </span>
          </div>

          {/* Urgent Notification Chip */}
          <div
            style={{
              background: '#fffbeb',
              border: '1px solid #fde68a',
              borderRadius: '12px',
              padding: '10px 14px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '10px',
              marginBottom: '16px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
              <AlertCircle size={16} color="#b45309" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.80rem', color: '#92400e', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                <strong>NORCET 2026:</strong> Stage 1 CBT on <strong>12 Sep 2026</strong> · 2,218 Posts
              </div>
            </div>
            <Link
              href="/nursing/norcet"
              style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#002856',
                background: '#edb843',
                padding: '5px 10px',
                borderRadius: '6px',
                whiteSpace: 'nowrap',
                textDecoration: 'none',
              }}
            >
              Roadmap →
            </Link>
          </div>

          {/* Qualification Persona Switcher (Segmented, calm pills) */}
          <div>
            <div style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-ink-400)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '6px' }}>
              Filter by Your Qualification
            </div>
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px' }}>
              {QUAL_OPTIONS.map(q => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setQualification(q.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '7px 14px',
                    borderRadius: '100px',
                    fontSize: '0.80rem',
                    fontWeight: qualification === q.id ? 800 : 600,
                    background: qualification === q.id ? 'var(--sc-navy-700)' : '#ffffff',
                    color: qualification === q.id ? '#ffffff' : 'var(--sc-ink-700)',
                    border: qualification === q.id ? '1.5px solid var(--sc-navy-700)' : '1.5px solid #cbd5e1',
                    cursor: 'pointer',
                    transition: 'all 0.12s ease',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    boxShadow: qualification === q.id ? '0 2px 8px rgba(8,50,98,0.15)' : '0 1px 2px rgba(0,0,0,0.03)',
                  }}
                >
                  <span>{q.emoji}</span>
                  <span>{q.label}</span>
                </button>
              ))}
            </div>
            {qualification !== 'all' && (
              <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', marginTop: '6px' }}>
                ℹ️ {QUAL_OPTIONS.find(q => q.id === qualification)?.desc}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── 2. STICKY SLIM TAB BAR ── */}
      <div
        style={{
          background: '#ffffff',
          borderBottom: '1.5px solid #e2e8f0',
          position: 'sticky',
          top: '64px',
          zIndex: 40,
          boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
        }}
      >
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', overflowX: 'auto' }}>
          {TABS.map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '12px 14px',
                background: 'none',
                border: 'none',
                borderBottom: activeTab === tab.id ? '3px solid var(--sc-navy-700)' : '3px solid transparent',
                cursor: 'pointer',
                transition: 'all 0.12s ease',
                whiteSpace: 'nowrap',
                minWidth: '90px',
              }}
            >
              <span style={{ fontSize: '0.92rem' }}>{tab.emoji}</span>
              <span
                style={{
                  fontSize: '0.80rem',
                  fontWeight: activeTab === tab.id ? 800 : 600,
                  color: activeTab === tab.id ? 'var(--sc-navy-700)' : 'var(--sc-ink-600)',
                }}
              >
                {tab.label}
              </span>
              {tab.count !== undefined && (
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    background: activeTab === tab.id ? 'var(--sc-navy-700)' : '#f1f5f9',
                    color: activeTab === tab.id ? '#ffffff' : 'var(--sc-ink-600)',
                    padding: '1px 6px',
                    borderRadius: '100px',
                  }}
                >
                  {tab.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. CONTENT FEED (Spacious, Zero Clutter) ── */}
      <div style={{ maxWidth: '960px', margin: '0 auto', padding: '20px 16px 80px' }}>

        {/* Quick Upload CTA (clean card) */}
        {!profile && (
          <div
            style={{
              background: 'linear-gradient(135deg, #002856 0%, #0d2f5e 100%)',
              borderRadius: '14px',
              padding: '16px 20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              marginBottom: '20px',
              color: '#ffffff',
            }}
          >
            <div>
              <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#edb843', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                Instant Eligibility Engine
              </div>
              <div style={{ fontSize: '0.94rem', fontWeight: 800, marginTop: '2px' }}>
                Check Your Eligibility Across All 50 Exams
              </div>
              <div style={{ fontSize: '0.76rem', color: '#cbd5e1', marginTop: '2px' }}>
                Upload your CV to verify GNM vs B.Sc. rules in 2 seconds.
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 14px',
                borderRadius: '8px',
                background: '#ffffff',
                color: 'var(--sc-navy-900)',
                fontWeight: 700,
                fontSize: '0.80rem',
                border: 'none',
                cursor: 'pointer',
                flexShrink: 0,
                whiteSpace: 'nowrap',
              }}
            >
              <Upload size={14} />
              <span>Upload CV</span>
            </button>
          </div>
        )}

        {/* ── TAB 1: GOVT RECRUITMENT EXAMS ── */}
        {activeTab === 'exams' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                National & State Recruitment Exams ({filteredExams.length})
              </div>
              <Link href="/nursing/exams" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sc-navy-700)', textDecoration: 'none' }}>
                Full Catalog →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredExams.map(exam => (
                <ExamCard key={exam.id} exam={exam} />
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 2: HOSPITAL JOBS ── */}
        {activeTab === 'jobs' && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
              <div style={{ fontSize: '0.84rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Verified Hospital & Staff Nurse Vacancies ({filteredJobs.length})
              </div>
              <Link href="/nursing/jobs" style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sc-navy-700)', textDecoration: 'none' }}>
                Full Directory →
              </Link>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredJobs.map(job => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 3: PREVIOUS YEARS QUESTION PAPERS & MOCKS (NEW!) ── */}
        {activeTab === 'pyq' && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-blue-600)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                Official Papers & Practice
              </div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Previous Years Papers (PYQs) &amp; Mock Tests
              </h2>
              <p style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
                Download real official question papers with verified answer keys for AIIMS NORCET, RRB, ESIC, DSSSB, MNS, and state PSCs.
              </p>
            </div>

            {/* PYQ Filters */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '12px', marginBottom: '8px' }}>
              {[
                { id: 'all', label: 'All Exams' },
                { id: 'norcet', label: 'NORCET (Stage 1 & 2)' },
                { id: 'rrb', label: 'RRB Staff Nurse' },
                { id: 'esic', label: 'UPSC ESIC' },
                { id: 'dsssb', label: 'DSSSB Delhi' },
                { id: 'mns', label: 'MNS Army' },
                { id: 'state', label: 'State PSCs' },
              ].map(f => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setPyqExamFilter(f.id)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '100px',
                    fontSize: '0.75rem',
                    fontWeight: pyqExamFilter === f.id ? 800 : 600,
                    background: pyqExamFilter === f.id ? 'var(--sc-navy-700)' : '#ffffff',
                    color: pyqExamFilter === f.id ? '#ffffff' : 'var(--sc-ink-700)',
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

            {/* Type selector (All / PYQ / Mock) */}
            <div style={{ display: 'flex', gap: '6px', marginBottom: '16px' }}>
              {[
                { id: 'all', label: 'All Formats' },
                { id: 'pyq', label: '📄 Official PYQ Papers' },
                { id: 'mock', label: '🎯 Full Mock Tests' },
              ].map(t => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setPyqTypeFilter(t.id as any)}
                  style={{
                    padding: '5px 10px',
                    borderRadius: '6px',
                    fontSize: '0.72rem',
                    fontWeight: pyqTypeFilter === t.id ? 800 : 600,
                    background: pyqTypeFilter === t.id ? '#eef5ff' : 'transparent',
                    color: pyqTypeFilter === t.id ? 'var(--sc-navy-700)' : 'var(--sc-ink-600)',
                    border: pyqTypeFilter === t.id ? '1px solid var(--sc-navy-600)' : '1px solid transparent',
                    cursor: 'pointer',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Papers List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {filteredPapers.length === 0 ? (
                <div style={{ textAlign: 'center', padding: '36px 16px', color: 'var(--sc-ink-600)' }}>
                  <FileText size={32} color="#94a3b8" style={{ marginBottom: '8px' }} />
                  <div style={{ fontWeight: 700 }}>No papers match this filter</div>
                  <button onClick={() => { setPyqExamFilter('all'); setPyqTypeFilter('all'); }} style={{ color: 'var(--sc-navy-700)', fontWeight: 700, background: 'none', border: 'none', cursor: 'pointer', marginTop: '6px' }}>
                    Reset Filters →
                  </button>
                </div>
              ) : (
                filteredPapers.map(paper => (
                  <PyqCard key={paper.id} paper={paper} />
                ))
              )}
            </div>
          </div>
        )}

        {/* ── TAB 4: OFFICIAL PORTALS DIRECTORY ── */}
        {activeTab === 'portals' && (
          <div>
            <div style={{ marginBottom: '16px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-green-600)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>
                Zero Redirects · Verified .gov.in Gateways
              </div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Official Government Recruitment Portals
              </h2>
              <p style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
                1-tap direct access to official recruitment boards across India.
              </p>
            </div>
            <OfficialPortalsDirectory />
          </div>
        )}

        {/* ── TAB 5: NORCET AUTHORITY HUB ── */}
        {activeTab === 'norcet' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div
              style={{
                background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, #0d2f5e 100%)',
                borderRadius: '16px',
                padding: '24px',
                color: '#ffffff',
              }}
            >
              <div style={{ fontSize: '0.70rem', fontWeight: 800, color: '#edb843', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '4px' }}>
                Flagship National Examination
              </div>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.25, marginBottom: '8px' }}>
                AIIMS NORCET 2026 Authority Hub
              </h2>
              <p style={{ fontSize: '0.84rem', color: '#cbd5e1', marginBottom: '18px' }}>
                2,218 Nursing Officer Posts across AIIMS New Delhi & 20+ participating AIIMS. 7th CPC Pay Level 7.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))', gap: '8px', marginBottom: '18px' }}>
                {[
                  { v: '2,218', l: 'Vacancies' },
                  { v: '12 Sep 2026', l: 'Stage 1 CBT' },
                  { v: '₹78k–₹85k', l: 'Gross / Month' },
                  { v: '160 MCQs', l: 'Stage 2 Mains' },
                ].map(c => (
                  <div key={c.l} style={{ background: 'rgba(255,255,255,0.08)', borderRadius: '10px', padding: '10px 12px' }}>
                    <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#ffffff' }}>{c.v}</div>
                    <div style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: '2px' }}>{c.l}</div>
                  </div>
                ))}
              </div>

              <Link
                href="/nursing/norcet"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  background: '#edb843',
                  color: '#002856',
                  padding: '12px 18px',
                  borderRadius: '10px',
                  fontWeight: 800,
                  fontSize: '0.88rem',
                  textDecoration: 'none',
                }}
              >
                <span>Open Full NORCET Blueprint</span>
                <ArrowRight size={15} />
              </Link>
            </div>

            {/* Key Jump Links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { href: '/nursing/norcet#eligibility', emoji: '✅', title: 'Eligibility Evaluator', desc: 'B.Sc. (0 exp) vs GNM (2 yr in 50-bed)' },
                { href: '/nursing/norcet#syllabus', emoji: '📚', title: 'Subject Syllabus & Weightages', desc: 'MSN, OBG, Peds, Community, Pharmacology breakdown' },
                { href: '/nursing/norcet#pattern', emoji: '🎯', title: 'Two-Tier Exam Pattern', desc: 'Stage 1 (100 MCQs) & Stage 2 (160 Clinical MCQs)' },
                { href: 'https://www.aiimsexams.ac.in', emoji: '🏛️', title: 'Official AIIMS Exam Portal', desc: 'aiimsexams.ac.in — notices, admit cards, results' },
              ].map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    style={{
                      background: '#ffffff',
                      borderRadius: '12px',
                      border: '1.5px solid #e2e8f0',
                      padding: '14px 16px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                    }}
                  >
                    <span style={{ fontSize: '1.4rem' }}>{item.emoji}</span>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>{item.title}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>{item.desc}</div>
                    </div>
                    <ChevronRight size={16} color="var(--sc-ink-400)" />
                  </div>
                </Link>
              ))}
            </div>
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
