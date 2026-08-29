'use client';

export const dynamic = 'force-dynamic';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import {
  Search,
  SlidersHorizontal,
  Bell,
  Sparkles,
  ChevronRight,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Building2,
  Award,
  FileText,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/mock-data';
import { EXAM_PAPERS, ExamPaper } from '@/lib/pyq-mock-data';
import { getUserProfile, UserProfile } from '@/lib/user-store';
import { GlobalSearchModal } from '@/components/layout/GlobalSearchModal';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';
import dynamicImport from 'next/dynamic';

const MayaPanel = dynamicImport(() => import('@/components/maya/MayaPanel'), { ssr: false });
const PaperViewerModal = dynamicImport(() => import('@/components/opportunity/PaperViewerModal').then((mod) => mod.PaperViewerModal), { ssr: false });

export default function NursingGateway() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isMayaOpen, setIsMayaOpen] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState<ExamPaper | null>(null);

  useEffect(() => {
    setProfile(getUserProfile());
  }, []);

  const userName = profile?.fullName ? profile.fullName.split(' ')[0] : 'Pooja';

  // Determine Personalized NORCET Eligibility State
  const hasQualifications = Boolean(profile?.qualificationsList && profile.qualificationsList.length > 0);
  const isRegistered = Boolean(profile?.registrationDetails?.isRegistered);
  const isBsc = profile?.qualificationsList?.some(q => /bsc|b\.sc|post basic|msc/i.test(q.name || q.code));

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', padding: '16px 16px 100px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>

        {/* ── 1. GREETING ── */}
        <div style={{ paddingTop: '8px' }}>
          <h1 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>
            Good morning, {userName} 👋
          </h1>
          <div style={{ fontSize: '0.82rem', color: '#64748b', marginTop: '2px', fontWeight: 500 }}>
            Your nursing career companion
          </div>
        </div>

        {/* ── 2. SEARCH BAR & FILTER TRIGGER ── */}
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
            }}
          >
            <SlidersHorizontal size={18} />
          </button>
        </div>

        {/* ── 3. URGENT ALERT CARD (AIIMS NORCET 2026) ── */}
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

        {/* ── 4. RECOMMENDED FOR YOU (PERSONALIZED DECISION CARD) ── */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <h2 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Recommended for you
            </h2>
            <Link href="/nursing/exams" style={{ fontSize: '0.76rem', fontWeight: 700, color: '#2563eb', textDecoration: 'none' }}>
              View all
            </Link>
          </div>

          <div
            style={{
              background: '#ffffff',
              border: '1px solid #dcfce7',
              borderRadius: '16px',
              padding: '16px',
              boxShadow: '0 2px 8px rgba(16, 185, 129, 0.06)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#dcfce7',
                  color: '#16a34a',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <CheckCircle2 size={20} />
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#166534', margin: 0 }}>
                  NORCET 2026 – Nursing Officer
                </h3>
                <div style={{ fontSize: '0.76rem', color: '#15803d', fontWeight: 700, marginTop: '2px' }}>
                  You appear eligible
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', margin: '8px 0 12px 0', fontSize: '0.74rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#166534' }}>
                    <span>✓</span>
                    <span>Qualification matches (B.Sc. / GNM)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#166534' }}>
                    <span>✓</span>
                    <span>State / INC Council Registration</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#b45309' }}>
                    <span>⚠️</span>
                    <span>Add DOB in Passport to verify age limit</span>
                  </div>
                </div>

                <Link
                  href="/nursing/norcet"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    background: '#f0fdf4',
                    border: '1px solid #86efac',
                    color: '#166534',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: 800,
                    textDecoration: 'none',
                  }}
                >
                  <span>Check eligibility</span>
                  <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── 5. EXPLORE SECTION (3 CLEAN EXPLORATION ACTIONS) ── */}
        <div>
          <h2 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', margin: '0 0 10px 0' }}>
            Explore
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Row 1: 2-Column Grid for Govt Exams & Hospital Jobs */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Link
                href="/nursing/exams"
                style={{
                  background: '#ffffff',
                  border: '1px solid #e0e7ff',
                  borderRadius: '16px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '76px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.12s ease',
                  minWidth: 0,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#1e3a8a',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.05rem',
                  }}
                >
                  🏛️
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.80rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2px' }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Govt Exams</span>
                    <ChevronRight size={13} color="#94a3b8" style={{ flexShrink: 0 }} />
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    50 opportunities
                  </div>
                </div>
              </Link>

              <Link
                href="/nursing/jobs"
                style={{
                  background: '#ffffff',
                  border: '1px solid #f3e8ff',
                  borderRadius: '16px',
                  padding: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  height: '76px',
                  textDecoration: 'none',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.12s ease',
                  minWidth: 0,
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: '#7c3aed',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    fontSize: '1.05rem',
                  }}
                >
                  🏥
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.80rem', fontWeight: 800, color: '#0f172a', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2px' }}>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Hospital Jobs</span>
                    <ChevronRight size={13} color="#94a3b8" style={{ flexShrink: 0 }} />
                  </div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    23 verified posts
                  </div>
                </div>
              </Link>
            </div>

            {/* Row 2: Full-Width Abroad & Global Nursing Card */}
            <Link
              href="/nursing/abroad"
              style={{
                background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                border: '1px solid #bae6fd',
                borderRadius: '16px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(14, 165, 233, 0.06)',
                transition: 'all 0.12s ease',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#0284c7',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: '1.05rem',
                }}
              >
                ✈️
              </div>

              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>
                    Abroad &amp; Global Nursing Jobs
                  </div>
                  <ChevronRight size={15} color="#0369a1" />
                </div>
                <div style={{ fontSize: '0.74rem', color: '#0369a1', marginTop: '2px', fontWeight: 600 }}>
                  🇮🇪 Ireland · 🇩🇪 Germany · 🇦🇪 UAE (₹32L–₹48L/yr)
                </div>
              </div>
            </Link>

            {/* Row 3: Full-Width Previous Papers & PYQs Card */}
            <Link
              href="/nursing/pyq"
              style={{
                background: 'linear-gradient(135deg, #fffbeb 0%, #fef3c7 100%)',
                border: '1px solid #fde68a',
                borderRadius: '16px',
                padding: '14px 16px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                boxShadow: '0 2px 6px rgba(245,158,11,0.06)',
                transition: 'all 0.12s ease',
              }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  background: '#ea580c',
                  color: '#ffffff',
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
                  <div style={{ fontSize: '0.88rem', fontWeight: 800, color: '#0f172a' }}>
                    Previous Papers &amp; PYQs
                  </div>
                  <ChevronRight size={15} color="#b45309" />
                </div>
                <div style={{ fontSize: '0.74rem', color: '#78350f', marginTop: '2px' }}>
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

      {/* Direct PYQ Viewer Modal */}
      {selectedPaper && (
        <PaperViewerModal
          paper={selectedPaper}
          isOpen={Boolean(selectedPaper)}
          onClose={() => setSelectedPaper(null)}
        />
      )}

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
