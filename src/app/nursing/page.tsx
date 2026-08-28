'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Clock,
  ChevronRight,
  AlertCircle,
  Upload,
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
  const matchingJobs = INITIAL_JOBS.slice(0, 4);
  const featuredExam = INITIAL_EXAMS[0];

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '20px' }}>
      {/* ── 1. Scannable Header ── */}
      <div style={{ marginBottom: '18px' }}>
        <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
          {profile?.qualificationCode ? 'Here is what changed for your career.' : 'SkillCase Nursing Intelligence'}
        </h1>
        <p style={{ fontSize: '0.88rem', color: 'var(--sc-ink-700)', marginTop: '2px' }}>
          Personalized eligibility checks across 28 verified government recruitments, national exams, and hospital networks.
        </p>
      </div>

      {/* ── 2. Urgent Attention Callout ── */}
      <div
        style={{
          background: 'var(--sc-yellow-50)',
          border: '1px solid #fde68a',
          borderRadius: 'var(--radius-md)',
          padding: '14px 18px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <AlertCircle size={18} color="#92400e" style={{ flexShrink: 0 }} />
          <div>
            <div style={{ fontSize: '0.90rem', fontWeight: 800, color: '#92400e' }}>
              NORCET 2026 Stage 1 CBT Exam: 12 September 2026
            </div>
            <div style={{ fontSize: '0.78rem', color: '#b45309' }}>
              Admit card downloads begin on 09 September. 2,218 Posts (Pay Level 7).
            </div>
          </div>
        </div>

        <Link href="/nursing/norcet" className="btn-navy" style={{ fontSize: '0.80rem', padding: '6px 14px', minHeight: '34px' }}>
          <span>NORCET Hub</span>
          <ArrowRight size={13} />
        </Link>
      </div>

      {/* ── 3. Quick Profile Setup (if no profile) ── */}
      {!profile && (
        <div
          className="sc-card"
          style={{
            padding: '16px 20px',
            marginBottom: '20px',
            borderLeft: '4px solid var(--sc-navy-700)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              Check Opportunities You Qualify For
            </div>
            <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              Upload your CV or tap your degree to see instant personalized eligibility.
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsResumeModalOpen(true)}
            className="btn-navy"
            style={{ fontSize: '0.82rem', padding: '7px 14px', minHeight: '36px' }}
          >
            <Upload size={14} />
            <span>Upload Resume (PDF)</span>
          </button>
        </div>
      )}

      {/* ── 4. Main 2-Column Grid ── */}
      <div className="desktop-grid-2col" style={{ marginBottom: '28px' }}>
        {/* Left Column: Tracked Cycles & Flagship Exam */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          {/* Tracked Cycles */}
          <div className="sc-card" style={{ padding: '18px 20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={16} color="var(--sc-navy-700)" />
                <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                  Your Tracked Cycles
                </h2>
              </div>
              <Link href="/cycles" style={{ fontSize: '0.80rem', color: 'var(--sc-navy-700)', fontWeight: 700 }}>
                View All ({trackedItems.length})
              </Link>
            </div>

            {activeCycles.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {activeCycles.slice(0, 3).map((item) => (
                  <div
                    key={item.opportunityId}
                    style={{
                      padding: '10px 12px',
                      background: 'var(--sc-surface-secondary)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--sc-line-200)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.74rem', color: 'var(--sc-ink-600)', marginTop: '1px' }}>
                        {item.employerOrOrg} • Stage: {item.stage}
                      </div>
                    </div>
                    <Link
                      href={item.opportunityType === 'exam' ? `/nursing/exams/${item.slug}` : `/nursing/jobs/${item.slug}`}
                      style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--sc-navy-700)' }}
                    >
                      Open
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ padding: '14px', background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-sm)', textAlign: 'center' }}>
                <div style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--sc-ink-700)' }}>
                  No active cycles tracked yet
                </div>
                <div style={{ fontSize: '0.74rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
                  Tap &quot;Track Opportunity&quot; on any job to monitor dates.
                </div>
              </div>
            )}
          </div>

          {/* Flagship Exam Card */}
          {featuredExam && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                  Flagship Recruitment Exam
                </h2>
                <Link href="/nursing/exams" style={{ fontSize: '0.80rem', color: 'var(--sc-navy-700)', fontWeight: 700 }}>
                  All Exams
                </Link>
              </div>
              <ExamCard exam={featuredExam} />
            </div>
          )}
        </div>

        {/* Right Column: Opportunities Matching You */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              Verified Opportunities
            </h2>
            <Link href="/nursing/jobs" style={{ fontSize: '0.80rem', color: 'var(--sc-navy-700)', fontWeight: 700 }}>
              View All 23 Jobs
            </Link>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {matchingJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
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
