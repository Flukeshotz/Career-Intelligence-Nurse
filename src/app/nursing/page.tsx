'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  ChevronRight,
  AlertCircle,
  Upload,
  GraduationCap,
  Briefcase,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
  CheckCircle2,
  Users,
  Compass
} from 'lucide-react';
import { INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/mock-data';
import { getTrackedOpportunities, getUserProfile, TrackedItem, UserProfile } from '@/lib/user-store';
import { JobCard } from '@/components/opportunity/JobCard';
import { ExamCard } from '@/components/opportunity/ExamCard';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';

export default function NursingHomePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [trackedItems, setTrackedItems] = useState<TrackedItem[]>([]);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    setProfile(getUserProfile());
    setTrackedItems(getTrackedOpportunities());
  }, []);

  const activeCycles = trackedItems.filter((i) => !i.outcome && i.stage !== 'closed');
  const featuredExams = INITIAL_EXAMS.slice(0, 6);
  const featuredJobs = INITIAL_JOBS.slice(0, 4);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '24px', paddingBottom: '48px' }}>
      {/* ── 1. Clean App Header & Value Proposition ── */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Career Intelligence Platform
          </span>
          <span style={{ height: '4px', width: '4px', borderRadius: '50%', background: 'var(--sc-ink-400)' }} />
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--sc-green-600)' }}>
            🟢 50 Exams & 23 Hospital Vacancies Live
          </span>
        </div>
        <h1 style={{ fontSize: '1.85rem', fontWeight: 800, color: 'var(--sc-navy-900)', letterSpacing: '-0.02em', lineHeight: 1.25 }}>
          {profile?.qualificationCode ? `Welcome back, ${profile.fullName || 'Nurse'}!` : 'National Nursing Career Intelligence'}
        </h1>
        <p style={{ fontSize: '0.94rem', color: 'var(--sc-ink-700)', marginTop: '4px', maxWidth: '780px', lineHeight: 1.5 }}>
          Official eligibility evaluations, multi-tier exam syllabi, pay scale matrix, and direct application links across all 28 states and central institutes.
        </p>
      </div>

      {/* ── 2. Unified Quick Navigation Ribbon (4 Pillar Cards) ── */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: '14px',
          marginBottom: '24px',
        }}
      >
        <Link
          href="/nursing/exams"
          className="sc-card hover-lift"
          style={{
            padding: '18px 20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            borderLeft: '4px solid var(--sc-navy-700)',
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--sc-blue-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <GraduationCap size={22} color="var(--sc-navy-700)" />
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              50 Govt Exams
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              Central INIs, Defense, State PSCs & Entrances
            </div>
          </div>
        </Link>

        <Link
          href="/nursing/jobs"
          className="sc-card hover-lift"
          style={{
            padding: '18px 20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            borderLeft: '4px solid var(--sc-green-600)',
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--sc-green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Briefcase size={22} color="var(--sc-green-600)" />
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              23 Hospital Jobs
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              Govt Health Cadres & Top Super-Specialities
            </div>
          </div>
        </Link>

        <Link
          href="/nursing/norcet"
          className="sc-card hover-lift"
          style={{
            padding: '18px 20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            borderLeft: '4px solid var(--sc-yellow-500)',
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'var(--sc-yellow-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Sparkles size={22} color="#92400e" />
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              NORCET 2026 Hub
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              Stage 1 CBT Blueprint & 2,218 AIIMS Posts
            </div>
          </div>
        </Link>

        <Link
          href="/cycles"
          className="sc-card hover-lift"
          style={{
            padding: '18px 20px',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            borderLeft: '4px solid #8b5cf6',
          }}
        >
          <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: '#f5f3ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Clock size={22} color="#7c3aed" />
          </div>
          <div>
            <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              My Cycles ({trackedItems.length})
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              Application & Exam Timeline Tracker
            </div>
          </div>
        </Link>
      </div>

      {/* ── 3. Flagship Urgent Notice Ribbon ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
          border: '1px solid #fde68a',
          borderRadius: 'var(--radius-lg)',
          padding: '16px 20px',
          marginBottom: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: '#fef3c7', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <AlertCircle size={20} color="#b45309" />
          </div>
          <div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#92400e' }}>
              NORCET 2026 Stage 1 CBT Exam: 12 September 2026
            </div>
            <div style={{ fontSize: '0.80rem', color: '#b45309', marginTop: '1px' }}>
              Admit cards release on 09 September. 2,218 Nursing Officer Posts (7th CPC Level 7, ₹78k–₹85k/mo).
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '8px' }}>
          <Link href="/nursing/norcet" className="btn-navy" style={{ fontSize: '0.82rem', padding: '8px 16px' }}>
            <span>Open NORCET Hub</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* ── 4. Career Passport Action Card (if not filled) ── */}
      {!profile && (
        <div
          className="sc-card"
          style={{
            padding: '20px 24px',
            marginBottom: '32px',
            background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, #083262 100%)',
            color: 'var(--sc-white)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderRadius: 'var(--radius-lg)',
          }}
        >
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#edb843', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Career Passport Engine
            </div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-white)', marginTop: '2px' }}>
              Check Opportunities You Qualify For Instantly
            </div>
            <div style={{ fontSize: '0.84rem', color: '#cbd5e1', marginTop: '3px' }}>
              Upload your CV or select your qualification (B.Sc. vs GNM) for automated requirement evaluation.
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={() => setIsResumeModalOpen(true)}
              style={{
                background: 'var(--sc-white)',
                color: 'var(--sc-navy-900)',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.86rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <Upload size={16} />
              <span>Upload Resume (PDF)</span>
            </button>
            <Link
              href="/profile"
              style={{
                background: 'rgba(255,255,255,0.15)',
                color: 'var(--sc-white)',
                padding: '10px 18px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 700,
                fontSize: '0.86rem',
                border: '1px solid rgba(255,255,255,0.3)',
                textDecoration: 'none',
              }}
            >
              Manual Profile Setup
            </Link>
          </div>
        </div>
      )}

      {/* ── 5. Premier National & State Recruitment Examinations ── */}
      <div style={{ marginBottom: '36px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              National & State Examinations
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              Premier Recruitment Examinations
            </h2>
          </div>
          <Link
            href="/nursing/exams"
            style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--sc-navy-700)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Explore All 50 Exams</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '16px',
          }}
        >
          {featuredExams.map((exam) => (
            <ExamCard key={exam.id} exam={exam} />
          ))}
        </div>
      </div>

      {/* ── 6. Verified Clinical Hospital Vacancies ── */}
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-green-600)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Clinical Hospital Postings
            </div>
            <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              Top Hospital & Health Cadre Vacancies
            </h2>
          </div>
          <Link
            href="/nursing/jobs"
            style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--sc-navy-700)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
          >
            <span>Explore All 23 Jobs</span>
            <ArrowRight size={15} />
          </Link>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
            gap: '16px',
          }}
        >
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
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

