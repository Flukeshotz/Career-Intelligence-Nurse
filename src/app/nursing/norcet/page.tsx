'use client';

import React from 'react';
import Link from 'next/link';
import {
  Calendar,
  ExternalLink,
  ChevronRight,
  Building2,
  Users,
  Award,
  FileText,
  Clock,
  Download,
  Sparkles,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrackButton } from '@/components/opportunity/TrackButton';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { ExamDetailAccordion } from '@/components/opportunity/ExamDetailAccordion';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import MayaCard from '@/components/maya/MayaCard';
import { INITIAL_REQUIREMENTS } from '@/lib/data';
import { DETAILED_EXAM_INTELLIGENCE } from '@/lib/exam-syllabus-data';
import { getPapersForExam } from '@/lib/pyq-mock-data';

const NORCET_REQUIREMENTS = INITIAL_REQUIREMENTS.filter((r) => r.examId === 'exam-norcet-2026');
const NORCET_INTEL = DETAILED_EXAM_INTELLIGENCE['exam-norcet-2026'];

const TIMELINE_STEPS = [
  {
    step: '1',
    title: 'Registration & Application',
    date: '24 Jul — 13 Aug 2026',
    status: 'completed',
    desc: 'Application window closed.',
  },
  {
    step: '2',
    title: 'Admit Card Download',
    date: '09 September 2026',
    status: 'upcoming',
    desc: 'Available on aiimsexams.ac.in candidate portal.',
  },
  {
    step: '3',
    title: 'Stage 1 Preliminary CBT',
    date: '12 September 2026',
    status: 'current',
    desc: '100 MCQs (90 mins): 80 Nursing + 20 Aptitude/GK.',
  },
  {
    step: '4',
    title: 'Stage 2 Mains CBT',
    date: '30 September 2026',
    status: 'upcoming',
    desc: '160 MCQs (180 mins): 100% Clinical scenario cases.',
  },
];

export default function NorcetHubPage() {
  const norcetPapers = getPapersForExam('exam-norcet-2026');

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '860px', margin: '0 auto', paddingBottom: '100px' }}>
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

      {/* ── 1. CLEAN HERO CARD (Instant 5-Second Scannability) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, var(--sc-navy-700) 100%)',
          color: 'var(--sc-white)',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '16px',
          boxShadow: '0 4px 14px rgba(8, 50, 98, 0.15)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.70rem', fontWeight: 800, background: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.03em' }}>
              🎯 Group B Gazetted Cadre
            </span>
            <span style={{ fontSize: '0.70rem', fontWeight: 800, background: 'rgba(1,144,53,0.3)', color: '#86efac', padding: '3px 8px', borderRadius: '4px' }}>
              ✓ AIIMS Notice 82/2026
            </span>
          </div>

          <a
            href="https://www.aiimsexams.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: '#edb843',
              color: '#002856',
              padding: '6px 12px',
              borderRadius: '6px',
              fontWeight: 800,
              fontSize: '0.76rem',
              textDecoration: 'none',
            }}
          >
            <span>Official Apply Portal</span>
            <ExternalLink size={12} />
          </a>
        </div>

        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '4px' }}>
          AIIMS NORCET 2026 (Nursing Officer Recruitment Common Eligibility Test)
        </h1>

        <div style={{ fontSize: '0.84rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
          <Building2 size={15} color="#94a3b8" />
          <span>AIIMS New Delhi &amp; 18 Participating Central Hospitals</span>
        </div>

        {/* 4 Clean Stats Chips */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(115px, 1fr))',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Posts</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-white)' }}>2,218 Posts</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay</div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#f7d78e' }}>₹78k–₹85k / mo</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Stage 1 Exam</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-white)' }}>12 Sep 2026</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Age Limit</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#fca5a5' }}>18–30 Years</div>
          </div>
        </div>
      </div>

      {/* ── 2. ELIGIBILITY MATCH ENGINE ── */}
      <div style={{ marginBottom: '16px' }}>
        <EligibilitySection
          opportunityId="exam-norcet-2026"
          requirements={NORCET_REQUIREMENTS}
          officialNotificationUrl="https://www.aiimsexams.ac.in"
        />
      </div>

      {/* ── 3. PREVIOUS YEAR PAPERS & CBT TESTS ── */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={18} color="var(--sc-navy-700)" />
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
              Previous Year Papers &amp; CBT Tests
            </h2>
          </div>
          <span style={{ fontSize: '0.70rem', fontWeight: 700, color: 'var(--sc-green-600)', background: 'var(--sc-green-50)', padding: '2px 7px', borderRadius: '100px' }}>
            ✓ 100 Qs with Official Keys
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {norcetPapers.map((p) => (
            <PyqCard key={p.id} paper={p} />
          ))}
        </div>
      </div>

      {/* ── 4. EXPANDABLE SYLLABUS, PATTERN & PREPARATION ACCORDIONS ── */}
      <div style={{ marginBottom: '16px' }}>
        <ExamDetailAccordion detailed={NORCET_INTEL} />
      </div>

      {/* ── 5. TIMELINE MILESTONES ── */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid var(--sc-line-200)',
          padding: '18px 20px',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
          <Calendar size={18} color="var(--sc-navy-700)" />
          <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
            NORCET 2026 Key Dates &amp; Milestones
          </h3>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {TIMELINE_STEPS.map((step) => (
            <div
              key={step.step}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: '8px',
                background: step.status === 'current' ? '#f0fdf4' : 'var(--sc-surface-secondary)',
                border: step.status === 'current' ? '1.5px solid #86efac' : '1px solid var(--sc-line-200)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: step.status === 'current' ? 'var(--sc-green-600)' : step.status === 'completed' ? 'var(--sc-navy-700)' : '#94a3b8',
                  color: '#ffffff',
                  fontSize: '0.72rem',
                  fontWeight: 800,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '1px',
                }}
              >
                {step.step}
              </div>

              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '4px' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                    {step.title}
                  </div>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: step.status === 'current' ? 'var(--sc-green-600)' : 'var(--sc-ink-600)' }}>
                    {step.date}
                  </div>
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-500)', marginTop: '2px' }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. OFFICIAL SOURCE TRUST PANEL ── */}
      <div style={{ marginBottom: '16px' }}>
        <TrustPanel
          source="AIIMS New Delhi Examination Section"
          sourceType="official"
          lastVerified="2026-08-28"
          officialNotificationUrl="https://www.aiimsexams.ac.in"
          applicationUrl="https://www.aiimsexams.ac.in"
          status="active"
        />
      </div>

      {/* ── 7. BOTTOM ACTION BAR ── */}
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1.5px solid var(--sc-line-200)',
          padding: '16px 20px',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
        }}
      >
        <div>
          <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
            Track NORCET 2026 in &quot;My Cycles&quot;
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-500)' }}>
            Get alerts for admit card release (9 Sep) &amp; Stage 1 CBT exam updates.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TrackButton
            opportunityId="exam-norcet-2026"
            opportunityType="exam"
            title="AIIMS NORCET 2026 (Nursing Officer)"
            employerOrOrg="AIIMS New Delhi"
            slug="aiims-new-delhi-central-government-hospitals-norcet-2026-nursing-officer-recruitment-common-eligibility-test"
            nextStageName="Stage 1 CBT"
            nextStageDate="2026-09-12"
          />

          <a
            href="https://www.aiimsexams.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              background: 'var(--sc-navy-700)',
              color: '#ffffff',
              padding: '9px 16px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.80rem',
              textDecoration: 'none',
            }}
          >
            <span>Apply on Official Portal</span>
            <ExternalLink size={13} />
          </a>
        </div>
      </div>

      {/* ── 8. CONTEXTUAL MAYA INTELLIGENCE CARD ── */}
      <div>
        <MayaCard
          title="Ask Maya about AIIMS NORCET 2026"
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
            requirements: NORCET_REQUIREMENTS,
          }}
          suggestedPrompts={[
            'What are the past year cutoff percentiles?',
            'What is the Stage 1 vs Stage 2 syllabus?',
            'Am I eligible with GNM?'
          ]}
        />
      </div>
    </div>
  );
}
