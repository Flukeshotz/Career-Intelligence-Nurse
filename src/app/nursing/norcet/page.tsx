'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Calendar,
  ExternalLink,
  ChevronRight,
  Check,
  Building2,
  Users,
  Award,
  AlertCircle,
  FileText,
  Clock,
  Download,
  Sparkles,
} from 'lucide-react';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrackButton } from '@/components/opportunity/TrackButton';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { PyqCard } from '@/components/opportunity/PyqCard';
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
    desc: 'Available on aiimsexams.ac.in candidate login.',
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
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'timeline' | 'pattern' | 'syllabus' | 'pyq' | 'guidance'>('overview');
  const norcetPapers = getPapersForExam('exam-norcet-2026');

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '20px' }}>
      {/* ── Breadcrumb ── */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--sc-ink-600)', marginBottom: '14px' }}>
        <Link href="/nursing" style={{ color: 'var(--sc-navy-700)', fontWeight: 600 }}>
          Nursing
        </Link>
        <ChevronRight size={13} />
        <Link href="/nursing/exams" style={{ color: 'var(--sc-navy-700)', fontWeight: 600 }}>
          Exams
        </Link>
        <ChevronRight size={13} />
        <span style={{ color: 'var(--sc-ink-900)', fontWeight: 700 }}>AIIMS NORCET 2026</span>
      </div>

      {/* ── 1. Scannable Hero Header (Low Cognitive Load) ── */}
      <div
        className="sc-card"
        style={{
          padding: '24px 28px',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, var(--sc-navy-700) 100%)',
          color: 'var(--sc-white)',
          borderRadius: '16px',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
              <span style={{ background: '#edb843', color: '#002856', padding: '3px 9px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 800 }}>
                🎯 Flagship Central Exam
              </span>
              <span style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--sc-white)', padding: '3px 9px', borderRadius: '100px', fontSize: '0.72rem', fontWeight: 700 }}>
                ✓ AIIMS Notice No. 82/2026
              </span>
            </div>

            <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--sc-white)', marginBottom: '4px', lineHeight: 1.25 }}>
              NORCET 2026 — Nursing Officer Common Eligibility Test
            </h1>
            <p style={{ fontSize: '0.86rem', color: '#e2e8f0', maxWidth: '680px' }}>
              Recruitment for 2,218 Nursing Officers across AIIMS New Delhi &amp; 18 Regional AIIMS. Pay Level 7.
            </p>
          </div>

          <TrackButton
            opportunityId="exam-norcet-2026"
            opportunityType="exam"
            title="NORCET 2026"
            employerOrOrg="AIIMS New Delhi & All Central Institutes"
            slug="norcet-2026-aiims-nursing-officer-recruitment"
          />
        </div>

        {/* ── 4 Big Scannable Stat Blocks (3-Second Glance) ── */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '10px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Vacancies</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sc-white)' }}>2,218 Posts</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f7d78e' }}>~₹82,000 / mo</div>
            <div style={{ fontSize: '0.66rem', color: '#cbd5e1' }}>Level 7 (₹44,900 Basic)</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Stage 1 Exam Date</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-white)' }}>12 Sep 2026</div>
            <div style={{ fontSize: '0.66rem', color: '#cbd5e1' }}>CBT Mode (90 Mins)</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Age Eligibility</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-white)' }}>18–30 Years</div>
            <div style={{ fontSize: '0.66rem', color: '#cbd5e1' }}>OBC +3 / SC/ST +5 yrs</div>
          </div>
        </div>
      </div>

      {/* ── 2. Contextual Maya Card ── */}
      <div style={{ marginBottom: '20px' }}>
        <MayaCard
          title="Questions about AIIMS NORCET 2026?"
          pageContext="norcet"
          opportunity={{
            id: 'exam-norcet-2026',
            title: 'AIIMS NORCET 2026',
            organisation: 'AIIMS New Delhi & Participating Central Hospitals',
            type: 'exam',
            vacancies: 2218,
            applicationDeadline: '2026-08-13',
            examDate: '2026-09-12',
            admitCardDate: '2026-09-09',
            salaryRaw: 'Pay Level 7 (₹44,900 - ₹1,42,400)',
            qualification: 'B.Sc. Nursing (0 exp) or GNM + 2 yrs in 50-bed hospital',
            officialNotificationUrl: 'https://www.aiimsexams.ac.in',
            lastVerified: '2026-08-28',
            requirements: NORCET_REQUIREMENTS,
          }}
          suggestedPrompts={[
            'Am I eligible for NORCET with GNM?',
            'What is the Stage 1 vs Stage 2 syllabus?',
            'What are the past year cutoff percentiles?',
            'Show me previous year question papers'
          ]}
        />
      </div>

      {/* ── 3. Navigation Tabs ── */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          borderBottom: '1px solid var(--sc-line-200)',
          paddingBottom: '8px',
          marginBottom: '20px',
        }}
      >
        {[
          { id: 'overview', label: 'Overview' },
          { id: 'eligibility', label: 'Check Eligibility' },
          { id: 'timeline', label: 'Cycle Dates' },
          { id: 'pattern', label: 'Exam Pattern' },
          { id: 'syllabus', label: 'Full Syllabus' },
          { id: 'pyq', label: '📄 PYQ Papers & Mocks' },
          { id: 'guidance', label: 'Revision Tips & FAQs' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            style={{
              padding: '8px 14px',
              borderRadius: '100px',
              fontSize: '0.80rem',
              fontWeight: activeTab === tab.id ? 800 : 600,
              background: activeTab === tab.id ? 'var(--sc-navy-700)' : 'var(--sc-surface-secondary)',
              color: activeTab === tab.id ? 'var(--sc-white)' : 'var(--sc-ink-700)',
              border: activeTab === tab.id ? '1px solid var(--sc-navy-700)' : '1px solid var(--sc-line-200)',
              whiteSpace: 'nowrap',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── TAB 1: OVERVIEW ── */}
      {activeTab === 'overview' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '860px' }}>
          <div className="sc-card" style={{ padding: '22px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '8px' }}>
              What is AIIMS NORCET?
            </h2>
            <p style={{ fontSize: '0.86rem', color: 'var(--sc-ink-700)', lineHeight: 1.6, marginBottom: '16px' }}>
              The <strong>Nursing Officer Recruitment Common Eligibility Test (NORCET)</strong> is conducted by AIIMS New Delhi as a centralized gateway for appointment to Group B Nursing Officer posts in all AIIMS across India and participating Central Government Hospitals.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '12px', marginTop: '16px' }}>
              <div style={{ background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-md)', padding: '14px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-400)', textTransform: 'uppercase', fontWeight: 700 }}>Participating Institutes</div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginTop: '2px' }}>AIIMS New Delhi + 18 AIIMS</div>
              </div>

              <div style={{ background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-md)', padding: '14px' }}>
                <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-400)', textTransform: 'uppercase', fontWeight: 700 }}>Selection Mode</div>
                <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginTop: '2px' }}>Two-Tier CBT (Prelims + Mains)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: ELIGIBILITY ── */}
      {activeTab === 'eligibility' && (
        <div style={{ maxWidth: '860px' }}>
          <EligibilitySection
            opportunityId="exam-norcet-2026"
            requirements={NORCET_REQUIREMENTS}
            officialNotificationUrl="https://www.aiimsexams.ac.in"
          />
        </div>
      )}

      {/* ── TAB 3: TIMELINE ── */}
      {activeTab === 'timeline' && (
        <div className="sc-card" style={{ padding: '22px', maxWidth: '860px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '16px' }}>
            NORCET 2026 Cycle Timeline
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {TIMELINE_STEPS.map((s) => (
              <div key={s.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '12px', background: s.status === 'current' ? '#fffbeb' : '#f8fafc', borderRadius: '10px', border: s.status === 'current' ? '1px solid #fde68a' : '1px solid #e2e8f0' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: s.status === 'current' ? '#edb843' : 'var(--sc-navy-700)', color: s.status === 'current' ? '#002856' : '#ffffff', fontWeight: 800, fontSize: '0.80rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {s.step}
                </div>
                <div>
                  <div style={{ fontSize: '0.90rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>{s.title}</div>
                  <div style={{ fontSize: '0.78rem', color: s.status === 'current' ? '#92400e' : 'var(--sc-ink-600)', fontWeight: 600 }}>{s.date}</div>
                  <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-500)', marginTop: '2px' }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 4: PATTERN ── */}
      {activeTab === 'pattern' && (
        <div className="sc-card" style={{ padding: '22px', maxWidth: '860px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '14px' }}>
            Two-Tier CBT Examination Pattern
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'var(--sc-navy-50)', padding: '16px', borderRadius: '12px', border: '1px solid var(--sc-navy-100)' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '6px' }}>Stage 1: Preliminary CBT</div>
              <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
                <div>• 100 MCQs (90 Mins) — 100 Marks</div>
                <div>• 80 Core Nursing + 20 General Aptitude/GK</div>
                <div>• Negative marking: 1/3rd mark deduction</div>
                <div>• Qualifying screening for Stage 2 (5x vacancies)</div>
              </div>
            </div>

            <div style={{ background: '#f0fdf4', padding: '16px', borderRadius: '12px', border: '1px solid #bbf7d0' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: '#166534', marginBottom: '6px' }}>Stage 2: Mains CBT</div>
              <div style={{ fontSize: '0.80rem', color: '#166534', lineHeight: 1.6 }}>
                <div>• 160 Clinical Case MCQs (180 Mins) — 160 Marks</div>
                <div>• 100% Case Scenarios across ICU, OT, Emergency</div>
                <div>• Negative marking: 1/3rd mark deduction</div>
                <div>• Final Merit based strictly on Stage 2 marks</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 5: SYLLABUS ── */}
      {activeTab === 'syllabus' && (
        <div className="sc-card" style={{ padding: '22px', maxWidth: '860px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '14px' }}>
            AIIMS NORCET Official Course Syllabus
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {NORCET_INTEL.syllabusModules.map((mod, i) => (
              <div key={i} style={{ background: 'var(--sc-surface-secondary)', borderRadius: '10px', padding: '12px 14px', border: '1px solid var(--sc-line-200)' }}>
                <div style={{ fontSize: '0.90rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '6px' }}>{mod.subject}</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {mod.highYieldTopics.map((topic, ti) => (
                    <span key={ti} style={{ fontSize: '0.72rem', background: '#ffffff', color: 'var(--sc-ink-700)', padding: '3px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 6: PREVIOUS YEARS PAPERS & MOCKS (NEW!) ── */}
      {activeTab === 'pyq' && (
        <div style={{ maxWidth: '860px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
            <div>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                NORCET Official Question Papers &amp; Mocks
              </h2>
              <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
                Verified memory-based official papers for NORCET 7, 6, 5 with answer keys.
              </div>
            </div>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-green-600)', background: 'var(--sc-green-50)', padding: '4px 10px', borderRadius: '100px' }}>
              ✓ 100% Free Access
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {norcetPapers.map(paper => (
              <PyqCard key={paper.id} paper={paper} />
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 7: GUIDANCE & FAQS ── */}
      {activeTab === 'guidance' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
          <div className="sc-card" style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '12px' }}>
              High-Yield Revision Priorities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--sc-ink-700)' }}>
              <div style={{ padding: '10px 12px', background: 'var(--sc-surface-secondary)', borderRadius: '8px' }}>
                <strong>1. Critical Care &amp; Emergency:</strong> ECG rhythms, ventilator modes, ABG analysis, fluid-electrolyte calculations.
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--sc-surface-secondary)', borderRadius: '8px' }}>
                <strong>2. OBG &amp; Pediatrics:</strong> APGAR scoring, national immunization schedule, high-risk pregnancy protocols.
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--sc-surface-secondary)', borderRadius: '8px' }}>
                <strong>3. Clinical Safety &amp; Hospital Protocols:</strong> BMW Rules 2016, infection control, BLS/ACLS algorithms.
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
