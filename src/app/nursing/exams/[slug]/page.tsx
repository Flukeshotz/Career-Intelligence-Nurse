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
  ChevronRight
} from 'lucide-react';
import { getExamBySlug, getRequirementsForOpportunity, INITIAL_EXAMS } from '@/lib/data';
import { generateExamJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { TrackButton } from '@/components/opportunity/TrackButton';
import MayaCard from '@/components/maya/MayaCard';
import { DETAILED_EXAM_INTELLIGENCE } from '@/lib/exam-syllabus-data';

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
    title: `${exam.name} — Official Syllabus, Pattern & Eligibility | SkillCase`,
    description: `Complete official syllabus, question pattern, marking scheme, eligibility criteria, and vacancies (${exam.vacancies ? exam.vacancies.toLocaleString('en-IN') : 'various'}) for ${exam.name}.`,
    openGraph: {
      title: `${exam.name} | SkillCase Nursing`,
      description: `Official exam pattern, full course syllabus, and online application portal for ${exam.name}.`,
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

      {/* Back Navigation */}
      <div style={{ marginBottom: '16px' }}>
        <Link
          href="/nursing/exams"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--sc-navy-700)', fontWeight: 700 }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Exams</span>
        </Link>
      </div>

      {/* ── 1. HERO INTELLIGENCE CARD ── */}
      <div
        className="sc-card"
        style={{
          padding: '24px',
          marginBottom: '20px',
          background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, #082d5a 100%)',
          color: 'var(--sc-white)',
          border: 'none',
          boxShadow: 'var(--shadow-lifted)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '12px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span style={{ background: 'rgba(237, 184, 67, 0.2)', color: '#f7d78e', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 800 }}>
              🎯 Premier Recruitment Examination
            </span>
            <span style={{ background: 'rgba(1, 144, 53, 0.25)', color: '#cdf5db', padding: '4px 10px', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 800 }}>
              ✓ Verified Official Syllabus & Notice
            </span>
          </div>

          <TrackButton
            opportunityId={exam.id}
            opportunityType="exam"
            title={exam.name}
            employerOrOrg={exam.organisation}
            slug={exam.slug}
          />
        </div>

        <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--sc-white)', lineHeight: 1.3, marginBottom: '6px' }}>
          {exam.name}
        </h1>

        <div style={{ fontSize: '0.94rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '18px' }}>
          <Building2 size={17} color="#94a3b8" />
          <span>{exam.organisation}</span>
        </div>

        {/* 4 Large Glance Chips */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(135px, 1fr))',
            gap: '10px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255,255,255,0.15)',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Total Vacancies</div>
            <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--sc-white)' }}>
              {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts` : 'Official Notice'}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay (Gross)</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f7d78e' }}>
              {detailed?.grossSalaryMonthly ? detailed.grossSalaryMonthly.split('(')[0] : 'Pay Level 7 (~₹80k)'}
            </div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>{detailed?.basicPay || '₹44,900 Basic'}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Exam Date</div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-white)' }}>{examDateFormatted}</div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Computer Based Test</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '10px 14px', borderRadius: 'var(--radius-sm)' }}>
            <div style={{ fontSize: '0.68rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Registration Status</div>
            <div style={{ fontSize: '1.10rem', fontWeight: 800, color: '#fca5a5' }}>{deadlineFormatted}</div>
            <div style={{ fontSize: '0.68rem', color: '#cbd5e1' }}>Official Portal Live</div>
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
            'What should I study first?'
          ]}
        />
      </div>

      {/* ── 3. MAIN 2-COLUMN INTELLIGENCE SECTION ── */}
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
          <div className="sc-card" style={{ padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <BookOpen size={20} color="var(--sc-navy-700)" />
              <h2 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Official Course Syllabus & High-Yield Topics
              </h2>
            </div>

            <div style={{ fontSize: '0.84rem', color: 'var(--sc-ink-600)', marginBottom: '16px' }}>
              Based on the standard Indian Nursing Council (INC) curriculum and the official examination conducting body blueprint:
            </div>

            {detailed?.syllabusModules && detailed.syllabusModules.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {detailed.syllabusModules.map((mod, i) => (
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
                      {mod.weightagePercent && (
                        <span style={{ background: 'var(--sc-navy-100)', color: 'var(--sc-navy-900)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', fontSize: '0.72rem', fontWeight: 700 }}>
                          ~{mod.weightagePercent}% Weightage
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
            ) : (
              <div style={{ fontSize: '0.86rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
                Standard B.Sc. Nursing & GNM core curriculum: Medical-Surgical Nursing, Obstetrics & Gynaecology, Pediatrics, Fundamentals of Nursing, Community Health Nursing, Pharmacology, and General Aptitude.
              </div>
            )}

            {/* General Ability Syllabus if present */}
            {detailed?.generalAbilitySyllabus && detailed.generalAbilitySyllabus.length > 0 && (
              <div style={{ marginTop: '16px', paddingTop: '14px', borderTop: '1px solid var(--sc-line-200)' }}>
                <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '8px' }}>
                  General Knowledge, Science & Aptitude Syllabus
                </div>
                {detailed.generalAbilitySyllabus.map((ga, gi) => (
                  <div key={gi} style={{ marginBottom: '8px' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-ink-900)' }}>{ga.section}</div>
                    <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)' }}>
                      {ga.topics.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Exam Pattern + Preparation Strategy + Trust Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Exam Pattern & Stages Card */}
          <div className="sc-card" style={{ padding: '22px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <Layers size={20} color="var(--sc-navy-700)" />
              <h2 style={{ fontSize: '1.18rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Exam Pattern & Marking Scheme
              </h2>
            </div>

            {detailed?.stages && detailed.stages.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {detailed.stages.map((stage, si) => (
                  <div
                    key={si}
                    style={{
                      background: si === 0 ? 'var(--sc-navy-50)' : 'var(--sc-surface-secondary)',
                      borderRadius: 'var(--radius-md)',
                      padding: '14px',
                      border: si === 0 ? '1px solid var(--sc-navy-100)' : '1px solid var(--sc-line-200)',
                    }}
                  >
                    <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '4px' }}>
                      {stage.stageName}
                    </div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', marginBottom: '10px' }}>
                      {stage.description}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', fontSize: '0.78rem', marginBottom: '10px' }}>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Questions / Marks: </span>
                        <strong>{stage.totalQuestions} Qs ({stage.totalMarks} Marks)</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Duration: </span>
                        <strong>{stage.durationMinutes} Minutes</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Negative Mark: </span>
                        <strong style={{ color: '#dc2626' }}>{stage.negativeMarking}</strong>
                      </div>
                      <div>
                        <span style={{ color: 'var(--sc-ink-600)' }}>Qualifying Cutoff: </span>
                        <strong style={{ color: 'var(--sc-green-600)' }}>{stage.qualifyingMarks.split('|')[0]}</strong>
                      </div>
                    </div>

                    {stage.sections && stage.sections.length > 0 && (
                      <div style={{ borderTop: '1px solid rgba(0,0,0,0.06)', paddingTop: '8px' }}>
                        {stage.sections.map((sec, seci) => (
                          <div key={seci} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.76rem', color: 'var(--sc-ink-700)', padding: '2px 0' }}>
                            <span>{sec.name}</span>
                            <strong>{sec.questions} Qs / {sec.marks} M</strong>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ fontSize: '0.84rem', color: 'var(--sc-ink-700)', lineHeight: 1.55 }}>
                Computer-Based Test (CBT) with multiple-choice questions on Nursing Professional Ability and General Awareness.
              </div>
            )}
          </div>

          {/* Actionable Preparation Advice */}
          {detailed?.preparationStrategy && (
            <div className="sc-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <Sparkles size={18} color="#b45309" />
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                  High-Yield Preparation Strategy
                </h3>
              </div>
              <ul style={{ paddingLeft: '18px', margin: 0, fontSize: '0.82rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
                {detailed.preparationStrategy.map((strat, i) => (
                  <li key={i} style={{ marginBottom: '6px' }}>{strat}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Selection Lifecycle Steps */}
          {detailed?.selectionSteps && (
            <div className="sc-card" style={{ padding: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                <CheckCircle2 size={18} color="var(--sc-green-600)" />
                <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                  Selection Process Roadmap
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {detailed.selectionSteps.map((step, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.80rem', color: 'var(--sc-ink-700)' }}>
                    <div style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'var(--sc-navy-100)', color: 'var(--sc-navy-900)', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                      {i + 1}
                    </div>
                    <div>{step}</div>
                  </div>
                ))}
              </div>
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

          {/* Share Buttons */}
          <div className="sc-card" style={{ padding: '16px 20px' }}>
            <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginBottom: '8px', fontWeight: 600 }}>
              Share syllabus & exam pattern with nursing batchmates:
            </div>
            <ShareButtons
              opportunityId={exam.id}
              opportunityType="exams"
              title={exam.name}
              employerOrOrg={exam.organisation}
              deadline={exam.applicationDeadline}
              slug={exam.slug}
            />
          </div>
        </div>
      </div>

      {/* ── 4. STICKY PERSISTENT APPLICATION BAR ── */}
      <div
        style={{
          position: 'sticky',
          bottom: '76px',
          zIndex: 80,
          background: 'rgba(255, 255, 255, 0.98)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--sc-line-200)',
          borderRadius: 'var(--radius-lg)',
          padding: '12px 18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-lifted)',
          maxWidth: '920px',
          margin: '24px auto 0',
        }}
      >
        <div style={{ fontSize: '0.84rem', color: 'var(--sc-ink-700)', fontWeight: 600 }}>
          {exam.organisation} • {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts Announced` : 'Recruitment Examination'}
        </div>

        {exam.applicationUrl && (
          <a
            href={exam.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy"
            style={{ textDecoration: 'none', fontSize: '0.86rem' }}
          >
            <span>Apply on Official Portal</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
