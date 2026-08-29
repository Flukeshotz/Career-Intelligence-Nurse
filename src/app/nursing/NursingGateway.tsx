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
import { getUserProfile, UserProfile } from '@/lib/user-store';
import { GlobalSearchModal } from '@/components/layout/GlobalSearchModal';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';
import dynamicImport from 'next/dynamic';

const MayaPanel = dynamicImport(() => import('@/components/maya/MayaPanel'), { ssr: false });

export default function NursingGateway() {
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

        {/* ── 3. URGENT RECRUITMENT ALERT (AIIMS NORCET 2026) ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
            border: '1px solid #fde68a',
            borderRadius: '16px',
            padding: '16px',
            boxShadow: '0 2px 8px rgba(245, 158, 11, 0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                background: '#fef9c3',
                border: '1.5px solid #fef08a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                fontSize: '1.1rem',
              }}
            >
              ⚡
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px', marginBottom: '2px' }}>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  AIIMS NORCET 2026
                </h3>
                <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#b45309', background: '#fef3c7', padding: '2px 6px', borderRadius: '4px' }}>
                  Important
                </span>
              </div>

              <div style={{ fontSize: '0.78rem', color: '#475569', fontWeight: 600 }}>
                Stage 1 CBT on 12 Sep 2026
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap', gap: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.74rem', color: '#dc2626', fontWeight: 700 }}>
                  <Clock size={13} />
                  <span>14 days to go</span>
                </div>

                <Link
                  href="/nursing/norcet"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: '#fef08a',
                    color: '#854d0e',
                    border: '1px solid #fde047',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                    transition: 'all 0.12s ease',
                  }}
                >
                  <span>Open NORCET Hub</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 4. YOUR NEXT STEP (HIGH-TRUST DECISION SURFACE) ── */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h2 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Your Next Step
            </h2>
            <Link href="/profile" style={{ fontSize: '0.76rem', fontWeight: 700, color: '#2563eb', textDecoration: 'none' }}>
              Career Passport ›
            </Link>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f0fdf4',
                  color: '#16a34a',
                  border: '1px solid #bbf7d0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1rem',
                  fontWeight: 900,
                }}
              >
                ✓
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                  NORCET 2026 – Nursing Officer
                </h3>
                <div style={{ fontSize: '0.76rem', color: '#166534', fontWeight: 700, marginTop: '2px' }}>
                  Eligibility almost confirmed (2 of 3 checks passed)
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', margin: '8px 0 12px 0', fontSize: '0.74rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#166534' }}>
                    <span style={{ fontWeight: 900 }}>✓</span>
                    <span>Qualification matches (B.Sc. Nursing / GNM)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#166534' }}>
                    <span style={{ fontWeight: 900 }}>✓</span>
                    <span>Council registration matches</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#b45309' }}>
                    <span>⚠️</span>
                    <span>Add DOB to confirm age limit</span>
                  </div>
                </div>

                <Link
                  href="/profile"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: '#0f172a',
                    color: '#ffffff',
                    padding: '6px 14px',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  <span>Complete eligibility</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
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
                    23 verified openings
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
                  Practice all real exam papers with verified answer keys
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
