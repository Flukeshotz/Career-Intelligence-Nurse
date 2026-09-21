'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Search,
  SlidersHorizontal,
  ChevronRight,
  Clock,
  CheckCircle2,
  FileText,
  Globe,
  ArrowRight
} from 'lucide-react';
import { INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/mock-data';
import { deriveLifecycle } from '@/lib/lifecycle';
import { getUserProfile, UserProfile } from '@/lib/user-store';
import { GlobalSearchModal } from '@/components/layout/GlobalSearchModal';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';
import dynamicImport from 'next/dynamic';

const MayaPanel = dynamicImport(() => import('@/components/maya/MayaPanel'), { ssr: false });

function pickSpotlight() {
  const rows = INITIAL_EXAMS.map((exam) => ({ exam, life: deriveLifecycle(exam) }));
  const open = rows.filter((r) => r.life.stage === 'applications_open').sort((x, y) => (x.life.daysToDeadline ?? 999) - (y.life.daysToDeadline ?? 999))[0];
  if (open) return { ...open, tag: 'Applications open' };
  const ahead = rows.filter((r) => r.life.stage === 'applications_closed' || r.life.stage === 'upcoming').sort((x, y) => (new Date(x.exam.examDate ?? '2100-01-01').getTime()) - (new Date(y.exam.examDate ?? '2100-01-01').getTime()))[0];
  return ahead ? { ...ahead, tag: 'Coming up' } : undefined;
}

export default function NursingGateway() {
  const spotlight = pickSpotlight();
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMayaOpen, setIsMayaOpen] = useState(false);

  useEffect(() => {
    setProfile(getUserProfile());
  }, []);

  const userName = profile?.fullName ? profile.fullName.split(' ')[0] : 'Pooja';

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '16px 16px 100px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* ── 1. GREETING HEADER ── */}
        <div style={{ paddingTop: '4px' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            Good morning, {userName} 👋
          </h1>
          <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px', fontWeight: 500 }}>
            Find your next nursing opportunity
          </div>
        </div>

        {/* ── 2. SINGLE SEARCH BAR & FILTER TRIGGER ── */}
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <button
            type="button"
            onClick={() => setIsSearchOpen(true)}
            style={{
              flex: 1,
              height: '46px',
              borderRadius: '12px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '0 14px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
              textAlign: 'left',
            }}
          >
            <Search size={17} color="#94a3b8" />
            <span style={{ fontSize: '0.84rem', color: '#94a3b8', fontWeight: 500, flex: 1 }}>
              Search exams, jobs, PYQs &amp; more...
            </span>
          </button>

          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '12px',
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: '#334155',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            }}
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* ── 3. NEXT DEADLINE — derived from the checked records, never hard-coded ── */}
        {spotlight && (
          <div
            style={{
              background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
              border: '1px solid #fde68a',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 2px 8px rgba(245, 158, 11, 0.08)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>{spotlight.exam.name.replace(/\s*\(.*?\)\s*/g, ' ').trim()}</h3>
              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#b45309', background: '#fef3c7', padding: '2px 6px', borderRadius: '4px' }}>
                {spotlight.tag}
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>{spotlight.life.label}</div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
              <Link
                href={`/nursing/exams/${spotlight.exam.slug}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', background: '#fef08a', color: '#854d0e', border: '1px solid #fde047', padding: '6px 12px', borderRadius: '8px', fontSize: '0.76rem', fontWeight: 800, textDecoration: 'none' }}
              >
                <span>See details</span>
                <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        )}

        {/* ── 4. PROFILE PROMPT — no per-exam match is claimed until the nurse's own details are entered ── */}
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '14px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
          <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600 }}>Add your qualification and date of birth to check which recruitments you can apply for.</div>
          <Link href="/profile" style={{ flexShrink: 0, background: '#0f172a', color: '#ffffff', padding: '6px 14px', borderRadius: '8px', fontSize: '0.76rem', fontWeight: 800, textDecoration: 'none' }}>
            Add details
          </Link>
        </div>

        {/* ── 5. EXPLORE SECTION ── */}
        <div>
          <h2 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>
            Explore
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Row 1: 2-Column Grid for Government Exams & Hospital Jobs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Link
                href="/nursing/exams"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '14px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '6px',
                  minHeight: '84px',
                  textDecoration: 'none',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.12s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.2rem' }}>🏛️</span>
                  <ChevronRight size={14} color="#94a3b8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                    Government Exams
                  </div>
                  <div style={{ fontSize: '0.70rem', color: '#64748b', marginTop: '1px' }}>
                    50 active opportunities
                  </div>
                </div>
              </Link>

              <Link
                href="/nursing/jobs"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '16px',
                  padding: '14px 12px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '6px',
                  minHeight: '84px',
                  textDecoration: 'none',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                  transition: 'all 0.12s ease',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '1.2rem' }}>🏥</span>
                  <ChevronRight size={14} color="#94a3b8" />
                </div>
                <div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#0f172a' }}>
                    Hospital Jobs
                  </div>
                  <div style={{ fontSize: '0.70rem', color: '#64748b', marginTop: '1px' }}>
                    {INITIAL_JOBS.length > 0 ? `${INITIAL_JOBS.length} verified openings` : 'Verifying listings'}
                  </div>
                </div>
              </Link>
            </div>

            {/* Row 2: Full-Width International Opportunities Card (Subtle & Balanced) */}
            <Link
              href="/nursing/abroad"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.12s ease',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  color: '#0f172a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.05rem',
                }}
              >
                🌍
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                    International Opportunities
                  </div>
                  <ChevronRight size={14} color="#94a3b8" />
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                  Germany · UK · Ireland · UAE — Explore options abroad
                </div>
              </div>
            </Link>

            {/* Row 3: Full-Width Previous Papers & PYQs Card */}
            <Link
              href="/nursing/pyq"
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
                transition: 'all 0.12s ease',
              }}
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#fef3c7',
                  border: '1px solid #fde68a',
                  color: '#b45309',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.05rem',
                }}
              >
                📄
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: '#0f172a' }}>
                    Previous Papers &amp; PYQs
                  </div>
                  <ChevronRight size={14} color="#94a3b8" />
                </div>
                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px' }}>
                  Practice real NORCET papers taken from the official booklets
                </div>
              </div>
            </Link>
          </div>
        </div>

      </div>

      {/* Global Search Modal */}
      <GlobalSearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Filter & Sort Drawer Modal */}
      <FilterDrawerModal isOpen={isFilterOpen} onClose={() => setIsFilterOpen(false)} />

      {/* Maya Drawer Panel */}
      <MayaPanel
        isOpen={isMayaOpen}
        onClose={() => setIsMayaOpen(false)}
        pageContext="general"
      />

      {/* Resume Upload Modal */}
      <ResumeUploadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onSuccess={(p) => setProfile(p)}
        onProfileConfirmed={(p) => setProfile(p)}
      />
    </div>
  );
}
