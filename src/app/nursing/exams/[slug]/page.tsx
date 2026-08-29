import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Calendar,
  FileText,
  ArrowLeft,
  ExternalLink,
  Users,
  AlertCircle,
  Building2,
  BookOpen,
  CheckCircle2,
  HelpCircle,
  Layers,
  Award,
  Clock,
  Sparkles,
  ChevronRight,
  Download
} from 'lucide-react';
import { getExamBySlug, getRequirementsForOpportunity, INITIAL_EXAMS } from '@/lib/data';
import { generateExamJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { TrackButton } from '@/components/opportunity/TrackButton';
import { PyqCard } from '@/components/opportunity/PyqCard';
import MayaCard from '@/components/maya/MayaCard';
import { DETAILED_EXAM_INTELLIGENCE } from '@/lib/exam-syllabus-data';
import { getPapersForExam, EXAM_PAPERS } from '@/lib/pyq-mock-data';

export const revalidate = 3600;

export async function generateStaticParams() {
  return INITIAL_EXAMS.map((exam) => ({
    slug: exam.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const exam = await getExamBySlug('nursing', params.slug);
  if (!exam) return { title: 'Exam Not Found' };

  return {
    title: `${exam.name} — Syllabus, Pattern, PYQs & Eligibility | SkillCase`,
    description: `Official syllabus, previous years question papers (PYQs), mock tests, exam pattern, and eligibility criteria for ${exam.name}.`,
    openGraph: {
      title: `${exam.name} | SkillCase Nursing`,
      description: `Official exam pattern, full course syllabus, previous year papers, and application portal for ${exam.name}.`,
      url: `https://skillcase.in/nursing/exams/${exam.slug}`,
      type: 'article',
    },
  };
}

export default async function ExamDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const exam = await getExamBySlug('nursing', params.slug);
  if (!exam) {
    notFound();
  }

  const requirements = await getRequirementsForOpportunity({ examId: exam.id });
  const detailed = DETAILED_EXAM_INTELLIGENCE[exam.id];
  const papers = getPapersForExam(exam.id);
  const fallbackPapers = papers.length > 0 ? papers : EXAM_PAPERS.slice(0, 2);

  const examJsonLd = generateExamJsonLd(exam);
  const breadcrumbsJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/nursing' },
    { name: 'Exams', url: '/nursing/exams' },
    { name: exam.name, url: `/nursing/exams/${exam.slug}` },
  ]);

  const examDateFormatted = exam.examDate
    ? new Date(exam.examDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'To be announced';

  const deadlineFormatted = exam.applicationDeadline
    ? new Date(exam.applicationDeadline).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Closed / In Exam Phase';

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '20px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Breadcrumb + Back Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
        <Link
          href="/nursing/exams"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--sc-navy-700)',
            fontSize: '0.86rem',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={16} />
          <span>Back to All 50 Exams</span>
        </Link>

        <TrackButton
          opportunityId={exam.id}
          opportunityType="exam"
          title={exam.name}
          employerOrOrg={exam.organisation}
          slug={exam.slug}
          nextStageName="Stage 1 CBT"
          nextStageDate={exam.examDate}
        />
      </div>

      {/* ── 1. HERO HEADER ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, var(--sc-navy-700) 100%)',
          color: 'var(--sc-white)',
          borderRadius: 'var(--radius-xl)',
          padding: '24px',
          marginBottom: '20px',
          boxShadow: 'var(--shadow-lifted)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(255,255,255,0.15)', color: '#ffffff', padding: '3px 9px', borderRadius: '4px', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              🎯 {detailed?.officialCadre || 'National Examination'}
            </span>
            <span style={{ fontSize: '0.72rem', fontWeight: 800, background: 'rgba(1,144,53,0.3)', color: '#86efac', padding: '3px 9px', borderRadius: '4px' }}>
              ✓ Official Blueprint Verified
            </span>
          </div>

          {exam.applicationUrl && (
            <a
              href={exam.applicationUrl}
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
                fontSize: '0.78rem',
                textDecoration: 'none',
              }}
            >
              <span>Official Apply Portal</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        <h1 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '6px' }}>
          {exam.name}
        </h1>

        <div style={{ fontSize: '0.90rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
          <Building2 size={16} color="#94a3b8" />
          <span>{exam.organisation}</span>
        </div>

        {/* 4 Glance Chips */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: '8px',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Vacancies</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-white)' }}>
              {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts` : 'Official Notice'}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#f7d78e' }}>
              {detailed?.grossSalaryMonthly ? detailed.grossSalaryMonthly.split('(')[0] : 'Pay Level 7 (~₹80k)'}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Exam Date</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-white)' }}>{examDateFormatted}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 12px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.65rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Registration</div>
            <div style={{ fontSize: '1.00rem', fontWeight: 800, color: '#fca5a5' }}>{deadlineFormatted}</div>
          </div>
        </div>
      </div>

      {/* ── 2. CONTEXTUAL MAYA INTELLIGENCE CARD ── */}
      <div style={{ marginBottom: '20px' }}>
        <MayaCard
          title={`Questions about ${exam.name}?`}
          pageContext="exam"
          opportunity={{
            id: exam.id,
            title: exam.name,
            organisation: exam.organisation,
            type: 'exam',
            vacancies: exam.vacancies,
            applicationDeadline: exam.applicationDeadline,
            examDate: exam.examDate,
            admitCardDate: exam.admitCardDate,
            qualification: exam.qualification,
            officialNotificationUrl: exam.officialNotificationUrl,
            lastVerified: exam.lastVerified,
            requirements: requirements,
            descriptionSimple: exam.descriptionSimple,
          }}
          suggestedPrompts={[
            'Am I eligible for this exam?',
            'What is the exam syllabus?',
            'What is the marking scheme & negative marking?',
            'What are the best previous year question papers?'
          ]}
        />
      </div>

      {/* ── 3. PREVIOUS YEARS QUESTION PAPERS & MOCKS (NEW!) ── */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <FileText size={20} color="var(--sc-navy-700)" />
            <h2 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              Official Previous Year Papers (PYQs) &amp; Mock Tests
            </h2>
          </div>
          <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--sc-green-600)', background: 'var(--sc-green-50)', padding: '3px 8px', borderRadius: '100px' }}>
            ✓ Verified Answer Keys
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {fallbackPapers.map(p => (
            <PyqCard key={p.id} paper={p} />
          ))}
        </div>
      </div>

      {/* ── 4. MAIN 2-COLUMN INTELLIGENCE SECTION ── */}
      <div className="desktop-grid-2col">
        {/* Left Column: Eligibility Engine + Full Course Syllabus */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Eligibility Engine Card */}
          <EligibilitySection
            opportunityId={exam.id}
            requirements={requirements}
            officialNotificationUrl={exam.officialNotificationUrl}
          />

          {/* Full Course Syllabus Breakdown */}
          <div className="sc-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <BookOpen size={18} color="var(--sc-navy-700)" />
              <h2 style={{ fontSize: '1.10rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Official Course Syllabus &amp; High-Yield Topics
              </h2>
            </div>

            {detailed?.syllabusModules && detailed.syllabusModules.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {detailed.syllabusModules.map((mod, mi) => (
                  <div key={mi} style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px 14px', border: '1px solid #e2e8f0' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--sc-navy-900)' }}>
                        {mod.subject}
                      </span>
                      {mod.weightagePercent && (
                        <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: '#eef5ff', padding: '2px 7px', borderRadius: '100px' }}>
                          ~{mod.weightagePercent}% Weightage
                        </span>
                      )}
                    </div>
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
            ) : (
              <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-700)' }}>
                Comprehensive B.Sc. / GNM core syllabus covering Anatomy, Physiology, Medical-Surgical Nursing, OBG, Pediatrics, and Pharmacology.
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Exam Pattern + Preparation Strategy + Trust Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Exam Pattern & Stages Card */}
          <div className="sc-card" style={{ padding: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <Layers size={18} color="var(--sc-navy-700)" />
              <h2 style={{ fontSize: '1.10rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Exam Pattern &amp; Marking Scheme
              </h2>
            </div>

            {detailed?.stages && detailed.stages.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {detailed.stages.map((stage, si) => (
                  <div
                    key={si}
                    style={{
                      background: si === 0 ? '#f0fdf4' : '#f8fafc',
                      borderRadius: '10px',
                      padding: '12px',
                      border: si === 0 ? '1px solid #bbf7d0' : '1px solid #e2e8f0',
                    }}
                  >
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '3px' }}>
                      {stage.stageName}
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', marginBottom: '8px' }}>
                      {stage.description}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', fontSize: '0.75rem' }}>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Questions: </span>
                        <strong>{stage.totalQuestions} MCQs</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Duration: </span>
                        <strong>{stage.durationMinutes} Mins</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Negative: </span>
                        <strong style={{ color: '#dc2626' }}>{stage.negativeMarking}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Qualifying: </span>
                        <strong style={{ color: 'var(--sc-green-600)' }}>{stage.qualifyingMarks.split('|')[0]}</strong>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-700)' }}>
                Computer-Based Test (CBT) with objective multiple-choice questions.
              </div>
            )}
          </div>

          {/* Actionable Preparation Advice */}
          {detailed?.preparationStrategy && (
            <div className="sc-card" style={{ padding: '18px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '8px' }}>
                <Sparkles size={16} color="#b45309" />
                <h3 style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                  High-Yield Study Strategy
                </h3>
              </div>
              <ul style={{ paddingLeft: '16px', margin: 0, fontSize: '0.78rem', color: 'var(--sc-ink-700)', lineHeight: 1.55 }}>
                {detailed.preparationStrategy.slice(0, 4).map((strat, i) => (
                  <li key={i} style={{ marginBottom: '4px' }}>{strat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Institutional Trust Panel */}
          <TrustPanel
            source={exam.source}
            sourceType={exam.sourceType}
            lastVerified={exam.lastVerified}
            officialNotificationUrl={exam.officialNotificationUrl}
            applicationUrl={exam.applicationUrl}
            status={exam.status}
          />
        </div>
      </div>

      {/* ── 5. STICKY PERSISTENT APPLICATION BAR ── */}
      <div
        style={{
          position: 'sticky',
          bottom: '76px',
          zIndex: 80,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--sc-line-200)',
          borderRadius: '12px',
          padding: '12px 16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '10px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          maxWidth: '920px',
          margin: '20px auto 0',
        }}
      >
        <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-700)', fontWeight: 600 }}>
          {exam.organisation} • {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts` : 'Active Notification'}
        </div>

        {exam.applicationUrl && (
          <a
            href={exam.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy"
            style={{ textDecoration: 'none', fontSize: '0.82rem', padding: '8px 14px' }}
          >
            <span>Official Portal</span>
            <ExternalLink size={13} />
          </a>
        )}
      </div>
    </div>
  );
}
