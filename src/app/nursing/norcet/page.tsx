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
} from 'lucide-react';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrackButton } from '@/components/opportunity/TrackButton';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import MayaCard from '@/components/maya/MayaCard';
import { INITIAL_REQUIREMENTS } from '@/lib/data';
import { DETAILED_EXAM_INTELLIGENCE } from '@/lib/exam-syllabus-data';

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
  const [activeTab, setActiveTab] = useState<'overview' | 'eligibility' | 'timeline' | 'pattern' | 'syllabus' | 'guidance'>('overview');

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
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '16px' }}>
          <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '8px' }}>
              <span style={{ background: '#edb843', color: '#002856', padding: '2px 8px', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 800 }}>
                🎯 Flagship Central Exam
              </span>
              <span style={{ background: 'rgba(255,255,255,0.15)', color: 'var(--sc-white)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                ✓ AIIMS Notice No. 82/2026
              </span>
            </div>

            <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--sc-white)', marginBottom: '4px', lineHeight: 1.25 }}>
              NORCET 2026 — Nursing Officer Common Eligibility Test
            </h1>
            <p style={{ fontSize: '0.88rem', color: '#e2e8f0', maxWidth: '680px' }}>
              Recruitment for Nursing Officers across AIIMS New Delhi & 18 Regional AIIMS Institutes.
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
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.18)',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.70rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Vacancies</div>
            <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--sc-white)' }}>2,218 Posts</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.70rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay (Gross)</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f7d78e' }}>~₹82,000 / mo</div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Level 7 (₹44,900 Basic)</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.70rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Stage 1 Exam Date</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sc-white)' }}>12 Sep 2026</div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>CBT Mode (90 Mins)</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.70rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Age Eligibility</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sc-white)' }}>18–30 Years</div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>OBC +3 / SC/ST +5 yrs</div>
          </div>
        </div>
      </div>

      {/* ── 2. Contextual Maya Card ── */}
      <div style={{ marginBottom: '20px' }}>
        <MayaCard
          title="Confused about AIIMS NORCET 2026?"
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
            officialNotificationUrl: 'https://www.aiimsexams.ac.in/advertisement/6a6350f7e5a81c4267f4ff04',
            lastVerified: '2026-08-28',
            requirements: NORCET_REQUIREMENTS,
          }}
          suggestedPrompts={[
            'Am I eligible for NORCET with GNM?',
            'What is the Stage 1 vs Stage 2 syllabus?',
            'How is negative marking calculated?',
            'What should I study first?'
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
          { id: 'eligibility', label: 'Check My Eligibility' },
          { id: 'timeline', label: 'Cycle Dates' },
          { id: 'pattern', label: 'Exam Pattern' },
          { id: 'syllabus', label: 'Full Course Syllabus' },
          { id: 'guidance', label: 'Revision Tips & FAQs' },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id as any)}
            className={`pill-selector ${activeTab === tab.id ? 'active' : ''}`}
            style={{ whiteSpace: 'nowrap', fontSize: '0.82rem', padding: '6px 12px', minHeight: '36px' }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── TAB 1: OVERVIEW ── */}
      {activeTab === 'overview' && (
        <div className="desktop-grid-2col">
          {/* Left Column: Personalized Eligibility Verdict */}
          <div>
            <EligibilitySection
              opportunityId="exam-norcet-2026"
              opportunityTitle="NORCET 2026"
              requirements={NORCET_REQUIREMENTS}
              officialNotificationUrl="https://www.aiimsexams.ac.in"
            />
          </div>

          {/* Right Column: Visual Summary & Quick Facts */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Visual Side-by-Side Pathways */}
            <div className="sc-card" style={{ padding: '20px' }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '12px' }}>
                Who Can Apply? (2 Valid Pathways)
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {/* Pathway A */}
                <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sc-line-200)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--sc-navy-900)' }}>Path A: B.Sc. Nursing Degree</strong>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-green-600)', background: 'var(--sc-green-50)', padding: '2px 6px', borderRadius: '4px' }}>
                      0 Yrs Exp Required
                    </span>
                  </div>
                  <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-700)', marginTop: '4px' }}>
                    B.Sc. (Hons) / B.Sc. Nursing / Post Basic B.Sc. + INC or State Nursing Council Registration.
                  </div>
                </div>

                {/* Pathway B */}
                <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sc-line-200)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <strong style={{ fontSize: '0.92rem', color: 'var(--sc-navy-900)' }}>Path B: GNM Diploma</strong>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#92400e', background: 'var(--sc-yellow-50)', padding: '2px 6px', borderRadius: '4px' }}>
                      2 Yrs Hospital Exp Required
                    </span>
                  </div>
                  <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-700)', marginTop: '4px' }}>
                    GNM Diploma + 2 Years experience in minimum 50-bedded hospital + Council Registration.
                  </div>
                </div>
              </div>
            </div>

            {/* Official Authority Box */}
            <div className="sc-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <ShieldCheck size={18} color="var(--sc-green-600)" />
                <h3 style={{ fontSize: '0.98rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                  Verified Authority Notice
                </h3>
              </div>

              <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-700)', lineHeight: 1.5, marginBottom: '12px' }}>
                Conducted by <strong>AIIMS New Delhi Examination Section</strong>. Official notification <strong>Notice No. 82/2026</strong>.
              </div>

              <a
                href="https://www.aiimsexams.ac.in/advertisement/6a6350f7e5a81c4267f4ff04"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-navy"
                style={{ width: '100%', fontSize: '0.84rem' }}
              >
                <span>View Official AIIMS Notification</span>
                <ExternalLink size={14} />
              </a>
            </div>

            {/* Share */}
            <div className="sc-card" style={{ padding: '16px 20px' }}>
              <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginBottom: '8px', fontWeight: 600 }}>
                Share NORCET details with batchmates:
              </div>
              <ShareButtons
                opportunityId="exam-norcet-2026"
                opportunityType="exams"
                title="AIIMS NORCET 2026 (2,218 Posts)"
                employerOrOrg="AIIMS New Delhi"
                deadline="2026-08-13"
                slug="norcet-2026-aiims-nursing-officer-recruitment"
              />
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 2: ELIGIBILITY ── */}
      {activeTab === 'eligibility' && (
        <div style={{ maxWidth: '820px' }}>
          <EligibilitySection
            opportunityId="exam-norcet-2026"
            opportunityTitle="NORCET 2026"
            requirements={NORCET_REQUIREMENTS}
            officialNotificationUrl="https://www.aiimsexams.ac.in"
          />
        </div>
      )}

      {/* ── TAB 3: TIMELINE (Scannable 4-Step Roadmap) ── */}
      {activeTab === 'timeline' && (
        <div className="sc-card" style={{ padding: '24px', maxWidth: '820px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '4px' }}>
            Recruitment Cycle Timeline
          </h2>
          <p style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)', marginBottom: '18px' }}>
            Official dates as per AIIMS Notice No. 82/2026.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {TIMELINE_STEPS.map((t) => (
              <div
                key={t.step}
                style={{
                  background: t.status === 'current' ? 'var(--sc-yellow-50)' : 'var(--sc-surface-secondary)',
                  border: t.status === 'current' ? '1px solid #fde68a' : '1px solid var(--sc-line-200)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase' }}>
                    Step {t.step}
                  </span>
                  <span
                    style={{
                      fontSize: '0.70rem',
                      fontWeight: 700,
                      padding: '2px 6px',
                      borderRadius: '4px',
                      background: t.status === 'completed' ? 'var(--sc-green-50)' : t.status === 'current' ? '#fef3c7' : 'var(--sc-white)',
                      color: t.status === 'completed' ? 'var(--sc-green-600)' : t.status === 'current' ? '#92400e' : 'var(--sc-ink-600)',
                    }}
                  >
                    {t.status === 'completed' ? '✓ Done' : t.status === 'current' ? '🔥 Active' : 'Upcoming'}
                  </span>
                </div>

                <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                  {t.title}
                </div>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-navy-700)', margin: '2px 0' }}>
                  {t.date}
                </div>
                <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-600)' }}>
                  {t.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── TAB 4: EXAM PATTERN (Clean Table) ── */}
      {activeTab === 'pattern' && (
        <div className="sc-card" style={{ padding: '24px', maxWidth: '820px' }}>
          <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '14px' }}>
            Two-Tier CBT Examination Pattern
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
            <div style={{ background: 'var(--sc-surface-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--sc-line-200)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase' }}>
                Stage 1: Preliminary CBT
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '4px 0 10px' }}>
                100 MCQs (90 Minutes)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--sc-ink-700)' }}>
                <div>• <strong>80 questions</strong>: Nursing core subjects</div>
                <div>• <strong>20 questions</strong>: General Knowledge & Aptitude</div>
                <div>• <strong>Negative marking</strong>: 1/3rd mark deduction</div>
                <div>• <strong>Cutoff</strong>: 50% UR/EWS, 45% OBC, 40% SC/ST</div>
              </div>
            </div>

            <div style={{ background: 'var(--sc-surface-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--sc-line-200)' }}>
              <div style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase' }}>
                Stage 2: Mains CBT
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '4px 0 10px' }}>
                160 MCQs (180 Minutes)
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.82rem', color: 'var(--sc-ink-700)' }}>
                <div>• <strong>100% clinical scenario & case questions</strong></div>
                <div>• ICU, OT, Emergency, Trauma, Pharmacology</div>
                <div>• <strong>Negative marking</strong>: 1/3rd mark deduction</div>
                <div>• <strong>Final Merit</strong>: Based strictly on Stage 2 marks</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 5: SYLLABUS (Full Course Breakdown) ── */}
      {activeTab === 'syllabus' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '860px' }}>
          <div className="sc-card" style={{ padding: '22px' }}>
            <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '6px' }}>
              AIIMS NORCET Official Course Syllabus
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)', marginBottom: '16px' }}>
              Structured subject-wise syllabus aligned with the Indian Nursing Council (INC) curriculum and AIIMS examination blueprint:
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {NORCET_INTEL.syllabusModules.map((mod, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--sc-surface-secondary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px 16px',
                    border: '1px solid var(--sc-line-200)',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                    <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                      {mod.subject}
                    </div>
                    {mod.questionCount && (
                      <span style={{ background: 'var(--sc-navy-100)', color: 'var(--sc-navy-900)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                        {mod.questionCount}
                      </span>
                    )}
                  </div>

                  <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.82rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
                    {mod.highYieldTopics.map((topic, ti) => (
                      <li key={ti} style={{ marginBottom: '4px' }}>
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── TAB 6: GUIDANCE & FAQS ── */}
      {activeTab === 'guidance' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '820px' }}>
          <div style={{ background: 'var(--sc-yellow-50)', border: '1px solid #fde68a', borderRadius: 'var(--radius-md)', padding: '12px 16px', fontSize: '0.82rem', color: '#92400e' }}>
            💡 <strong>SkillCase Advisory Guidance:</strong> Recommended revision priorities for working nurses balancing shifts.
          </div>

          <div className="sc-card" style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '12px' }}>
              High-Yield Revision Priorities
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.84rem', color: 'var(--sc-ink-700)' }}>
              <div style={{ padding: '10px 12px', background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-sm)' }}>
                <strong>1. Critical Care & Emergency:</strong> ECG rhythms, ventilator modes, ABG analysis, fluid-electrolyte calculations.
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-sm)' }}>
                <strong>2. OBG & Pediatrics:</strong> APGAR scoring, national immunization schedule, high-risk pregnancy protocols.
              </div>
              <div style={{ padding: '10px 12px', background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-sm)' }}>
                <strong>3. Clinical Safety & Hospital Protocols:</strong> BMW Rules 2016, infection control, BLS/ACLS algorithms.
              </div>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="sc-card" style={{ padding: '20px' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '12px' }}>
              Frequently Asked Questions (Official AIIMS Rules)
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {NORCET_INTEL.frequentlyAskedQuestions.map((faq, fi) => (
                <div key={fi} style={{ padding: '12px 14px', background: 'var(--sc-surface-secondary)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sc-line-200)' }}>
                  <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '4px' }}>
                    Q: {faq.question}
                  </div>
                  <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-700)', lineHeight: 1.55 }}>
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
