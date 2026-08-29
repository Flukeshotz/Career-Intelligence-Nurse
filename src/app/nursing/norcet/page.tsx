'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Calendar,
  ExternalLink,
  Building2,
  FileText,
  ArrowLeft,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Play,
  Download,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  Bookmark,
  ChevronRight,
  ShieldCheck,
  Award,
  Layers,
  HelpCircle
} from 'lucide-react';
import { getUserProfile, UserProfile, saveUserProfile, calculateTotalExperienceMonths } from '@/lib/user-store';
import { PaperViewerModal } from '@/components/opportunity/PaperViewerModal';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { TrackButton } from '@/components/opportunity/TrackButton';
import MayaCard from '@/components/maya/MayaCard';
import { EXAM_PAPERS, ExamPaper } from '@/lib/pyq-mock-data';
import { DETAILED_EXAM_INTELLIGENCE } from '@/lib/exam-syllabus-data';
import { trackTelemetry } from '@/lib/telemetry';

const NORCET_INTEL = DETAILED_EXAM_INTELLIGENCE['exam-norcet-2026'];

const NORCET_PAPERS: ExamPaper[] = [
  {
    id: 'pyq-norcet-2024-s1',
    examId: 'exam-norcet-2026',
    title: 'AIIMS NORCET 2024 Shift 1 Question Paper',
    examName: 'AIIMS NORCET 2024',
    category: 'central',
    type: 'pyq',
    year: 2024,
    shift: 'Morning Shift 1',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Clinical Intensive',
    keyHighlights: ['100 Clinical MCQs with official rationale', 'Negative marking calculated', 'Stage 1 CBT Pattern'],
    pdfDownloadUrl: '#',
    officialSourceUrl: 'https://www.aiimsexams.ac.in',
    officialNotice: 'AIIMS Notice No. 82/2026',
    officialKeyAvailable: true,
    fileSizeBytes: '2.4 MB',
  },
  {
    id: 'pyq-norcet-2023-s1',
    examId: 'exam-norcet-2026',
    title: 'AIIMS NORCET 2023 Shift 2 Question Paper',
    examName: 'AIIMS NORCET 2023',
    category: 'central',
    type: 'pyq',
    year: 2023,
    shift: 'Evening Shift 2',
    totalQuestions: 100,
    durationMinutes: 90,
    difficulty: 'Clinical Intensive',
    keyHighlights: ['100 Core Nursing & Aptitude MCQs', 'Verified Official Key', 'AIIMS New Delhi Paper'],
    pdfDownloadUrl: '#',
    officialSourceUrl: 'https://www.aiimsexams.ac.in',
    officialNotice: 'AIIMS Notice No. 82/2026',
    officialKeyAvailable: true,
    fileSizeBytes: '2.2 MB',
  },
];

const PREP_MODULES = [
  { subject: 'Medical-Surgical Nursing', qCount: 35, weight: '35%', tag: 'High-Yield', icon: '🫀' },
  { subject: 'Obstetrics & Midwifery (OBG)', qCount: 20, weight: '20%', tag: 'High-Yield', icon: '👶' },
  { subject: 'Child Health / Pediatrics', qCount: 15, weight: '15%', tag: 'Core', icon: '🍼' },
  { subject: 'Nursing Foundations & Skills', qCount: 15, weight: '15%', tag: 'Core', icon: '🩺' },
  { subject: 'Pharmacology & Calculations', qCount: 10, weight: '10%', tag: 'Calculation', icon: '💊' },
  { subject: 'Community & Epidemiology', qCount: 10, weight: '10%', tag: 'National Health', icon: '🏥' },
  { subject: 'General Aptitude & GK', qCount: 10, weight: '10%', tag: 'Non-Nursing', icon: '📊' },
];

export default function NorcetCommandCenterPage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [activePaper, setActivePaper] = useState<ExamPaper | null>(null);
  const [activePaperMode, setActivePaperMode] = useState<'cbt' | 'study'>('cbt');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState<string | null>('pattern');
  const [showQuickVerifyModal, setShowQuickVerifyModal] = useState(false);

  // Quick Inline Verification form state
  const [quickQual, setQuickQual] = useState<'bsc' | 'gnm' | 'pbbsc' | 'msc'>('bsc');
  const [quickExpYears, setQuickExpYears] = useState<number>(2);
  const [quickRegistered, setQuickRegistered] = useState<boolean>(true);

  useEffect(() => {
    setProfile(getUserProfile());
    trackTelemetry('exam_view', { exam_id: 'exam-norcet-2026', exam_name: 'AIIMS NORCET 2026' });
  }, []);

  const hasQualifications = Boolean(profile?.qualificationsList && profile.qualificationsList.length > 0);
  const isRegistered = Boolean(profile?.registrationDetails?.isRegistered);
  const totalExpMonths = calculateTotalExperienceMonths(profile?.employmentHistory || []);
  const expYears = totalExpMonths / 12;

  // Determine Personalized NORCET Eligibility
  let eligibilityStatus: 'eligible' | 'needs_info' | 'not_eligible' = 'needs_info';
  let statusHeadline = 'Check your NORCET eligibility';
  let missingItems: string[] = [];

  if (!hasQualifications) {
    missingItems.push('Qualification (B.Sc / GNM)');
  }
  if (!profile?.registrationDetails) {
    missingItems.push('Nursing Council Registration');
  }

  if (hasQualifications) {
    const isBsc = profile?.qualificationsList?.some(q => /bsc|b\.sc|post basic|msc/i.test(q.name || q.code));
    const isGnm = profile?.qualificationsList?.some(q => /gnm|diploma/i.test(q.name || q.code));

    if (isBsc && isRegistered) {
      eligibilityStatus = 'eligible';
      statusHeadline = '✓ You appear fully eligible for NORCET 2026';
    } else if (isGnm) {
      if (expYears >= 2 && isRegistered) {
        eligibilityStatus = 'eligible';
        statusHeadline = '✓ You appear fully eligible (GNM + 2 Yrs Exp)';
      } else if (!isRegistered || expYears < 2) {
        eligibilityStatus = 'needs_info';
        statusHeadline = '⚠ Check 2 things to confirm eligibility';
        if (expYears < 2) missingItems.push('2 Yrs 50-bed experience');
        if (!isRegistered) missingItems.push('Council registration');
      }
    } else if (missingItems.length > 0) {
      eligibilityStatus = 'needs_info';
      statusHeadline = `⚠ Check ${missingItems.length} details to confirm eligibility`;
    }
  }

  const handleLaunchPractice = (paper: ExamPaper, mode: 'cbt' | 'study' = 'cbt') => {
    setActivePaper(paper);
    setActivePaperMode(mode);
    setIsModalOpen(true);
    trackTelemetry('pyq_started', {
      exam_id: 'exam-norcet-2026',
      paper_id: paper.id,
      year: paper.year,
      mode,
    });
  };

  const handleSaveQuickVerify = () => {
    const current = getUserProfile();
    const qualName = quickQual === 'bsc' ? 'B.Sc. Nursing' : quickQual === 'gnm' ? 'GNM (General Nursing & Midwifery)' : 'Post Basic B.Sc. Nursing';

    trackTelemetry('passport_completed', {
      qualification: quickQual,
      registered: quickRegistered,
      exp_years: quickExpYears,
      input_method: 'select',
    });

    const updated = saveUserProfile({
      ...current,
      qualificationsList: [
        {
          code: quickQual,
          name: qualName,
          institution: 'Nursing College',
          yearOfPassing: 2023,
          isPrimary: true,
        }
      ],
      registrationDetails: {
        isRegistered: quickRegistered,
        councilName: 'State Nursing Council',
        regNumber: 'RN-102948',
      },
      employmentHistory: quickQual === 'gnm' ? [
        {
          id: 'emp-quick-1',
          employer: 'NABH Multi-Speciality Hospital (100 Beds)',
          role: 'staff_nurse',
          department: 'ICU',
          startDate: '2024-01',
          isCurrent: true,
          monthsDuration: quickExpYears * 12,
        }
      ] : (current?.employmentHistory || []),
    });

    setProfile(updated);
    setShowQuickVerifyModal(false);
  };

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '880px', margin: '0 auto', paddingBottom: '90px' }}>
      {/* ── TOP NAV BAR ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
        <Link
          href="/nursing/exams"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--sc-navy-700)',
            fontSize: '0.82rem',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={15} />
          <span>All 50 Exams</span>
        </Link>

        <ShareButtons
          opportunityId="exam-norcet-2026"
          opportunityType="exams"
          title="AIIMS NORCET 2026 (Nursing Officer)"
          employerOrOrg="AIIMS New Delhi"
          deadline="2026-08-13"
          slug="aiims-new-delhi-central-government-hospitals-norcet-2026-nursing-officer-recruitment-common-eligibility-test"
          profession="nursing"
        />
      </div>

      {/* ── 1. NORCET COMMAND CENTRE HERO & 2-CARD INTELLIGENCE SPLIT ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #061e38 0%, #0a325e 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '22px 20px',
          marginBottom: '20px',
          boxShadow: '0 8px 24px rgba(6, 30, 56, 0.25)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, background: 'rgba(255,255,255,0.12)', color: '#93c5fd', padding: '2px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Central Government · AIIMS
            </span>
            <span style={{ fontSize: '0.68rem', fontWeight: 800, background: 'rgba(34,197,94,0.2)', color: '#86efac', padding: '2px 8px', borderRadius: '4px' }}>
              ✓ Verified Blueprint
            </span>
          </div>

          <div style={{ fontSize: '0.74rem', color: '#cbd5e1', fontWeight: 600 }}>
            Advt No. 82/2026
          </div>
        </div>

        <h1 style={{ fontSize: '1.45rem', fontWeight: 800, lineHeight: 1.25, margin: '0 0 4px 0' }}>
          NORCET 2026 <span style={{ fontSize: '1.05rem', fontWeight: 600, color: '#94a3b8' }}>(NORCET 11)</span>
        </h1>
        <div style={{ fontSize: '0.86rem', color: '#cbd5e1', marginBottom: '16px' }}>
          Nursing Officer (Group B) · <strong>2,218 Vacancies</strong> · <strong>Level 7 (₹78k–₹85k/mo)</strong>
        </div>

        {/* ── 2-Card Intelligence Grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
          {/* Card 1: Your Eligibility Status */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: eligibilityStatus === 'eligible' ? '1.5px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Your Eligibility Status
              </div>
              <div style={{ fontSize: '0.90rem', fontWeight: 800, color: eligibilityStatus === 'eligible' ? '#86efac' : '#fde047', marginBottom: '8px' }}>
                {statusHeadline}
              </div>

              <div style={{ fontSize: '0.74rem', color: '#cbd5e1', lineHeight: 1.45, marginBottom: '12px' }}>
                {eligibilityStatus === 'eligible' ? (
                  <>
                    <div>✓ Qualification: B.Sc. / GNM criteria satisfied</div>
                    <div>✓ Council registration recorded</div>
                    <div>✓ Age limit: 18–30 years (with central relaxations)</div>
                  </>
                ) : (
                  <>
                    <div>• Essential: B.Sc. Nursing (0 exp) OR GNM (2 yrs exp)</div>
                    <div>• State / Indian Nursing Council (INC) registration</div>
                    <div>• Confirm your details to unlock full match</div>
                  </>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowQuickVerifyModal(true)}
              style={{
                width: '100%',
                padding: '7px 12px',
                borderRadius: '8px',
                background: eligibilityStatus === 'eligible' ? 'rgba(34, 197, 94, 0.2)' : '#fde047',
                color: eligibilityStatus === 'eligible' ? '#86efac' : '#002856',
                border: 'none',
                fontSize: '0.76rem',
                fontWeight: 800,
                cursor: 'pointer',
                textAlign: 'center',
              }}
            >
              {eligibilityStatus === 'eligible' ? 'Update Passport Details →' : 'Check in 20 Seconds →'}
            </button>
          </div>

          {/* Card 2: Your Next Step */}
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              borderRadius: '12px',
              padding: '14px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#fca5a5', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
                Your Next Step
              </div>
              <div style={{ fontSize: '0.90rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Stage 1 CBT in 14 Days
              </div>
              <div style={{ fontSize: '0.74rem', color: '#cbd5e1', marginBottom: '12px' }}>
                Exam Date: <strong>12 September 2026</strong> · Admit Card: <strong>09 Sep</strong>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              <button
                type="button"
                onClick={() => handleLaunchPractice(NORCET_PAPERS[0], 'cbt')}
                style={{
                  flex: 1,
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: '#22c55e',
                  color: '#ffffff',
                  border: 'none',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '4px',
                  boxShadow: '0 2px 6px rgba(34, 197, 94, 0.35)',
                }}
              >
                <Play size={13} />
                <span>Start Practice →</span>
              </button>

              <a
                href="https://www.aiimsexams.ac.in"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '8px 12px',
                  borderRadius: '8px',
                  background: 'rgba(255, 255, 255, 0.12)',
                  color: '#ffffff',
                  fontSize: '0.76rem',
                  fontWeight: 700,
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                <span>Portal</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. PREPARE FOR NORCET (The Primary Acquisition Hook) ── */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Official Papers &amp; CBT Simulations
            </div>
            <h2 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
              Prepare for NORCET
            </h2>
          </div>

          <span style={{ fontSize: '0.70rem', fontWeight: 700, color: '#15803d', background: '#f0fdf4', border: '1px solid #86efac', padding: '3px 8px', borderRadius: '20px' }}>
            ✓ 100 Qs with Official Keys
          </span>
        </div>

        {/* Paper Cards Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {NORCET_PAPERS.map((paper) => (
            <div
              key={paper.id}
              style={{
                background: '#ffffff',
                border: '1.5px solid var(--sc-line-200)',
                borderRadius: '14px',
                padding: '16px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
              }}
            >
              <div style={{ flex: 1, minWidth: '220px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span style={{ fontSize: '0.70rem', fontWeight: 800, background: '#e0f2fe', color: '#0369a1', padding: '2px 6px', borderRadius: '4px' }}>
                    {paper.year} PYQ
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                    {paper.shift}
                  </span>
                </div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0' }}>
                  {paper.title}
                </h3>
                <div style={{ fontSize: '0.76rem', color: '#64748b' }}>
                  100 Questions · 90 Mins · 0.33 Negative Marking · Official Rationale
                </div>
              </div>

              {/* Action Buttons: Primary Start CBT + Secondary Download PDF */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <button
                  type="button"
                  onClick={() => handleLaunchPractice(paper, 'cbt')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '9px 18px',
                    borderRadius: '8px',
                    background: 'var(--sc-navy-700)',
                    color: '#ffffff',
                    fontSize: '0.80rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(8, 50, 98, 0.2)',
                  }}
                >
                  <Play size={13} />
                  <span>Start Practice →</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleLaunchPractice(paper, 'study')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    color: '#475569',
                    border: '1px solid #cbd5e1',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  <Download size={13} />
                  <span>PDF &amp; Key</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 3. YOUR PREPARATION HABIT LAYER ── */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid var(--sc-line-200)',
          padding: '18px 20px',
          marginBottom: '24px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase' }}>
              High-Yield Subject Breakdown
            </div>
            <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
              Your NORCET Preparation Plan
            </h3>
          </div>

          <div style={{ fontSize: '0.76rem', fontWeight: 700, color: '#15803d', background: '#f0fdf4', padding: '3px 8px', borderRadius: '100px' }}>
            7 Core Modules
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '8px' }}>
          {PREP_MODULES.map((mod) => (
            <div
              key={mod.subject}
              onClick={() => handleLaunchPractice(NORCET_PAPERS[0], 'cbt')}
              style={{
                background: 'var(--sc-surface-secondary)',
                borderRadius: '10px',
                padding: '10px 12px',
                border: '1px solid var(--sc-line-200)',
                cursor: 'pointer',
                transition: 'all 0.12s ease',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ fontSize: '1.1rem' }}>{mod.icon}</span>
                <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: '#ffffff', padding: '1px 6px', borderRadius: '4px' }}>
                  {mod.weight}
                </span>
              </div>
              <div style={{ fontSize: '0.80rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.3 }}>
                {mod.subject}
              </div>
              <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>
                {mod.qCount} High-Yield MCQs · {mod.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 4. UNDERSTAND NORCET (Single-Expansion Knowledge Drawer) ── */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid var(--sc-line-200)',
          padding: '18px 20px',
          marginBottom: '24px',
        }}
      >
        <div style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '2px' }}>
          Official Blueprint &amp; Guidelines
        </div>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '0 0 14px 0' }}>
          Understand NORCET 2026
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {/* Drawer 1: Exam Pattern */}
          <div style={{ border: '1px solid var(--sc-line-200)', borderRadius: '10px', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setOpenDrawer(openDrawer === 'pattern' ? null : 'pattern')}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: openDrawer === 'pattern' ? '#f8fafc' : '#ffffff',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--sc-navy-900)',
              }}
            >
              <span>⚙️ Exam Pattern (Stage 1 Prelims &amp; Stage 2 Mains)</span>
              {openDrawer === 'pattern' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openDrawer === 'pattern' && (
              <div style={{ padding: '14px', background: '#ffffff', borderTop: '1px solid var(--sc-line-200)', fontSize: '0.80rem', color: '#334155', lineHeight: 1.55 }}>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Stage 1 (Prelims):</strong> 100 MCQs (90 mins) — 80 Nursing Core + 20 General Knowledge &amp; Aptitude. Qualifying in nature to shortlist 5x candidates for Mains.
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <strong>Stage 2 (Mains):</strong> 160 MCQs (180 mins) — 100% Practical &amp; Clinical scenario-based questions assessing nursing competence.
                </div>
                <div>
                  <strong>Negative Marking:</strong> 1/3rd (0.33 mark) deducted for each incorrect response across both stages.
                </div>
              </div>
            )}
          </div>

          {/* Drawer 2: Official Syllabus */}
          <div style={{ border: '1px solid var(--sc-line-200)', borderRadius: '10px', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setOpenDrawer(openDrawer === 'syllabus' ? null : 'syllabus')}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: openDrawer === 'syllabus' ? '#f8fafc' : '#ffffff',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--sc-navy-900)',
              }}
            >
              <span>📖 Full Subject Syllabus &amp; Weightages</span>
              {openDrawer === 'syllabus' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openDrawer === 'syllabus' && (
              <div style={{ padding: '14px', background: '#ffffff', borderTop: '1px solid var(--sc-line-200)', fontSize: '0.80rem', color: '#334155', lineHeight: 1.55 }}>
                <div>• <strong>Medical-Surgical:</strong> Cardiology (ECG, STEMI), Respirology (ABG, Vent), Neurology (GCS, Stroke), Burns (Parkland).</div>
                <div>• <strong>Obstetrics &amp; Gynaecology:</strong> Antenatal assessment, Partograph, AMTSL, Postpartum Haemorrhage, High-risk pregnancy.</div>
                <div>• <strong>Pediatrics:</strong> APGAR score, Milestones, IMNCI, Neonatal Resuscitation, Congenital anomalies.</div>
                <div>• <strong>Foundations:</strong> Biomedical Waste Rules 2016, Infection Control, IV calculations, Tube feedings.</div>
                <div>• <strong>Pharmacology:</strong> High-alert drug calculations, Antidotes, Therapeutic drug monitoring (Lithium, Digoxin).</div>
              </div>
            )}
          </div>

          {/* Drawer 3: Eligibility & Age Limits */}
          <div style={{ border: '1px solid var(--sc-line-200)', borderRadius: '10px', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setOpenDrawer(openDrawer === 'eligibility' ? null : 'eligibility')}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: openDrawer === 'eligibility' ? '#f8fafc' : '#ffffff',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--sc-navy-900)',
              }}
            >
              <span>🎓 Complete Eligibility &amp; Age Relaxations</span>
              {openDrawer === 'eligibility' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openDrawer === 'eligibility' && (
              <div style={{ padding: '14px', background: '#ffffff', borderTop: '1px solid var(--sc-line-200)', fontSize: '0.80rem', color: '#334155', lineHeight: 1.55 }}>
                <div>• <strong>B.Sc. Nursing / Post Basic B.Sc.:</strong> 0 Years Experience required. Freshers eligible upon council registration.</div>
                <div>• <strong>GNM Diploma:</strong> Minimum 2 Years of clinical experience in a minimum 50-bedded hospital post-registration.</div>
                <div>• <strong>Age Limits:</strong> 18 to 30 Years. OBC: +3 Years (up to 33) | SC/ST: +5 Years (up to 35) | PwBD: +10 Years.</div>
              </div>
            )}
          </div>

          {/* Drawer 4: Cutoff Percentiles */}
          <div style={{ border: '1px solid var(--sc-line-200)', borderRadius: '10px', overflow: 'hidden' }}>
            <button
              type="button"
              onClick={() => setOpenDrawer(openDrawer === 'cutoffs' ? null : 'cutoffs')}
              style={{
                width: '100%',
                padding: '12px 14px',
                background: openDrawer === 'cutoffs' ? '#f8fafc' : '#ffffff',
                border: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                cursor: 'pointer',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: 'var(--sc-navy-900)',
              }}
            >
              <span>📊 Cutoff Percentiles &amp; 80:20 Reservation</span>
              {openDrawer === 'cutoffs' ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>

            {openDrawer === 'cutoffs' && (
              <div style={{ padding: '14px', background: '#ffffff', borderTop: '1px solid var(--sc-line-200)', fontSize: '0.80rem', color: '#334155', lineHeight: 1.55 }}>
                <div>• <strong>Qualifying Cutoff:</strong> UR/EWS: 50.00% | OBC: 45.00% | SC/ST: 40.00% in CBT.</div>
                <div>• <strong>80:20 Ratio:</strong> 80% of all AIIMS Nursing Officer seats are reserved for female candidates; 20% for male candidates.</div>
                <div>• <strong>Institute Allocation:</strong> Top AIIMS (Delhi, Bhopal) typically require 88–92 percentile (Female) and 94–96 percentile (Male).</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── 5. TIMELINE & RECRUITMENT MILESTONES ── */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid var(--sc-line-200)',
          padding: '18px 20px',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Calendar size={18} color="var(--sc-navy-700)" />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
            NORCET 2026 Milestone Tracker
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', background: '#f1f5f9', borderRadius: '8px', fontSize: '0.80rem' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#64748b', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 800 }}>1</span>
            <span style={{ flex: 1, fontWeight: 600, color: '#475569' }}>Registration Window (24 Jul – 13 Aug)</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Concluded</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', background: '#e0f2fe', borderRadius: '8px', fontSize: '0.80rem' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#0284c7', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 800 }}>2</span>
            <span style={{ flex: 1, fontWeight: 700, color: '#0369a1' }}>Admit Card Release (09 September 2026)</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0284c7' }}>Upcoming</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '8px', fontSize: '0.80rem' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#16a34a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 800 }}>3</span>
            <span style={{ flex: 1, fontWeight: 800, color: '#15803d' }}>Stage 1 Preliminary CBT (12 September 2026)</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#16a34a' }}>Active Phase</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', background: '#f8fafc', borderRadius: '8px', fontSize: '0.80rem' }}>
            <span style={{ width: '20px', height: '20px', borderRadius: '50%', background: '#94a3b8', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.68rem', fontWeight: 800 }}>4</span>
            <span style={{ flex: 1, fontWeight: 600, color: '#475569' }}>Stage 2 Mains CBT (30 September 2026)</span>
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b' }}>Final Stage</span>
          </div>
        </div>
      </div>

      {/* ── 6. CONTEXTUAL MAYA INTELLIGENCE LAYER ── */}
      <div style={{ marginBottom: '20px' }}>
        <MayaCard
          title="Ask Maya about NORCET 2026"
          pageContext="norcet"
          opportunity={{
            id: 'exam-norcet-2026',
            title: 'AIIMS NORCET 2026',
            organisation: 'AIIMS New Delhi & Central Hospitals',
            type: 'exam',
            vacancies: 2218,
            applicationDeadline: '2026-08-13',
            examDate: '2026-09-12',
            admitCardDate: '2026-09-09',
            qualification: 'B.Sc. Nursing (0 exp) or GNM + 2 yrs in 50-bed hospital',
            officialNotificationUrl: 'https://www.aiimsexams.ac.in',
            lastVerified: '2026-08-28',
          }}
          suggestedPrompts={[
            'What are the past year cutoff percentiles?',
            'What is the Stage 1 vs Stage 2 syllabus?',
            'Am I eligible with GNM?'
          ]}
        />
      </div>

      {/* ── 7. MINIMALIST 1-LINE TRUST STRIP ── */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '8px',
          padding: '10px 14px',
          background: 'var(--sc-surface-secondary)',
          borderRadius: '10px',
          fontSize: '0.74rem',
          color: 'var(--sc-ink-600)',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <ShieldCheck size={15} color="#16a34a" />
          <span>✓ Verified by SkillCase · AIIMS Official Notification 82/2026 · Checked today</span>
        </div>

        <a
          href="https://www.aiimsexams.ac.in"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--sc-navy-700)', fontWeight: 700, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '3px' }}
        >
          <span>Official Portal</span>
          <ExternalLink size={12} />
        </a>
      </div>

      {/* ── 8. SLEEK STICKY BOTTOM ACTION DOCK ── */}
      <div
        style={{
          position: 'sticky',
          bottom: '76px',
          zIndex: 80,
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--sc-line-200)',
          borderRadius: '14px',
          padding: '10px 14px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
        }}
      >
        <TrackButton
          opportunityId="exam-norcet-2026"
          opportunityType="exam"
          title="AIIMS NORCET 2026 (Nursing Officer)"
          employerOrOrg="AIIMS New Delhi"
          slug="aiims-new-delhi-central-government-hospitals-norcet-2026-nursing-officer-recruitment-common-eligibility-test"
          nextStageName="Stage 1 CBT"
          nextStageDate="2026-09-12"
        />

        <button
          type="button"
          onClick={() => handleLaunchPractice(NORCET_PAPERS[0], 'cbt')}
          style={{
            flex: 1.2,
            height: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            background: 'var(--sc-navy-700)',
            color: '#ffffff',
            borderRadius: '10px',
            fontWeight: 800,
            fontSize: '0.82rem',
            border: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            boxShadow: '0 2px 6px rgba(8, 50, 98, 0.25)',
          }}
        >
          <Play size={14} />
          <span>Start Practice (100 Qs)</span>
        </button>
      </div>

      {/* ── PAPER VIEWER / CBT MODAL ── */}
      <PaperViewerModal
        paper={activePaper}
        isOpen={isModalOpen}
        initialMode={activePaperMode}
        onClose={() => setIsModalOpen(false)}
      />

      {/* ── 20-SECOND QUICK VERIFY MODAL ── */}
      {showQuickVerifyModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(15, 23, 42, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              maxWidth: '440px',
              width: '100%',
              padding: '22px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
                Verify NORCET Eligibility
              </h3>
              <button
                type="button"
                onClick={() => setShowQuickVerifyModal(false)}
                style={{ background: 'none', border: 'none', fontSize: '1.2rem', cursor: 'pointer', color: '#64748b' }}
              >
                ✕
              </button>
            </div>

            <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '16px' }}>
              Answer 3 quick questions to calculate your exact official NORCET eligibility.
            </div>

            {/* Q1: Qualification */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: '6px' }}>
                1. What is your nursing qualification?
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {[
                  { id: 'bsc', label: 'B.Sc. Nursing' },
                  { id: 'gnm', label: 'GNM Diploma' },
                  { id: 'pbbsc', label: 'Post Basic B.Sc.' },
                  { id: 'msc', label: 'M.Sc. Nursing' },
                ].map((q) => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setQuickQual(q.id as any)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: '8px',
                      fontSize: '0.76rem',
                      fontWeight: quickQual === q.id ? 800 : 500,
                      background: quickQual === q.id ? '#e0f2fe' : '#f8fafc',
                      color: quickQual === q.id ? '#0369a1' : '#334155',
                      border: quickQual === q.id ? '1.5px solid #0284c7' : '1px solid #e2e8f0',
                      cursor: 'pointer',
                    }}
                  >
                    {q.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Q2: Registered with Council */}
            <div style={{ marginBottom: '14px' }}>
              <label style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: '6px' }}>
                2. Are you registered with a State Nursing Council / INC?
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => setQuickRegistered(true)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: quickRegistered ? 800 : 500,
                    background: quickRegistered ? '#f0fdf4' : '#f8fafc',
                    color: quickRegistered ? '#15803d' : '#334155',
                    border: quickRegistered ? '1.5px solid #16a34a' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                  }}
                >
                  ✓ Yes, Registered
                </button>
                <button
                  type="button"
                  onClick={() => setQuickRegistered(false)}
                  style={{
                    flex: 1,
                    padding: '8px',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: !quickRegistered ? 800 : 500,
                    background: !quickRegistered ? '#fee2e2' : '#f8fafc',
                    color: !quickRegistered ? '#b91c1c' : '#334155',
                    border: !quickRegistered ? '1.5px solid #dc2626' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                  }}
                >
                  Pending / In Final Year
                </button>
              </div>
            </div>

            {/* Q3: If GNM, experience */}
            {quickQual === 'gnm' && (
              <div style={{ marginBottom: '16px' }}>
                <label style={{ fontSize: '0.76rem', fontWeight: 700, color: '#1e293b', display: 'block', marginBottom: '6px' }}>
                  3. Hospital Experience (50+ bedded hospital):
                </label>
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[
                    { yrs: 0, label: 'Fresher (<1 yr)' },
                    { yrs: 1, label: '1 Year' },
                    { yrs: 2, label: '2+ Years' },
                  ].map((e) => (
                    <button
                      key={e.yrs}
                      type="button"
                      onClick={() => setQuickExpYears(e.yrs)}
                      style={{
                        flex: 1,
                        padding: '8px',
                        borderRadius: '8px',
                        fontSize: '0.74rem',
                        fontWeight: quickExpYears === e.yrs ? 800 : 500,
                        background: quickExpYears === e.yrs ? '#e0f2fe' : '#f8fafc',
                        color: quickExpYears === e.yrs ? '#0369a1' : '#334155',
                        border: quickExpYears === e.yrs ? '1.5px solid #0284c7' : '1px solid #e2e8f0',
                        cursor: 'pointer',
                      }}
                    >
                      {e.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button
              type="button"
              onClick={handleSaveQuickVerify}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '8px',
                background: 'var(--sc-navy-700)',
                color: '#ffffff',
                border: 'none',
                fontWeight: 800,
                fontSize: '0.82rem',
                cursor: 'pointer',
              }}
            >
              Calculate My Eligibility →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
