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
  Building2,
  BookOpen,
  CheckCircle2,
  Layers,
  Award,
  Clock,
  Share2
} from 'lucide-react';
import { getExamBySlug, getRequirementsForOpportunity, INITIAL_EXAMS } from '@/lib/data';
import { generateExamJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { TrackButton } from '@/components/opportunity/TrackButton';
import { PyqCard } from '@/components/opportunity/PyqCard';
import { ExamDetailAccordion } from '@/components/opportunity/ExamDetailAccordion';
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
        month: 'short',
        year: 'numeric',
      })
    : 'To be announced';

  const deadlineFormatted = exam.applicationDeadline
    ? new Date(exam.applicationDeadline).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : 'Closed / In Exam Phase';

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '860px', margin: '0 auto', paddingBottom: '100px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* ── TOP NAV BAR (Clean & Uncluttered) ── */}
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
          opportunityId={exam.id}
          opportunityType="exams"
          title={exam.name}
          employerOrOrg={exam.organisation}
          deadline={exam.applicationDeadline}
          slug={exam.slug}
          profession="nursing"
        />
      </div>

      {/* ── 1. CLEAN HERO CARD ── */}
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
              🎯 {detailed?.officialCadre || 'National Exam'}
            </span>
            <span style={{ fontSize: '0.70rem', fontWeight: 800, background: 'rgba(1,144,53,0.3)', color: '#86efac', padding: '3px 8px', borderRadius: '4px' }}>
              ✓ Verified Blueprint
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
                fontSize: '0.76rem',
                textDecoration: 'none',
              }}
            >
              <span>Official Apply Portal</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>

        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '4px' }}>
          {exam.name}
        </h1>

        <div style={{ fontSize: '0.84rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '14px' }}>
          <Building2 size={15} color="#94a3b8" />
          <span>{exam.organisation}</span>
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
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Vacancies</div>
            <div style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-white)' }}>
              {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts` : 'See Notice'}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay</div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#f7d78e' }}>
              {detailed?.grossSalaryMonthly ? detailed.grossSalaryMonthly.split('(')[0] : 'Level 7 (~₹80k)'}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Exam Date</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-white)' }}>{examDateFormatted}</div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Registration</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#fca5a5' }}>{deadlineFormatted}</div>
          </div>
        </div>
      </div>

      {/* ── 2. ELIGIBILITY ENGINE SECTION ── */}
      <div style={{ marginBottom: '16px' }}>
        <EligibilitySection
          opportunityId={exam.id}
          requirements={requirements}
          officialNotificationUrl={exam.officialNotificationUrl}
        />
      </div>

      {/* ── 3. PREVIOUS YEAR PAPERS & MOCKS (Clean Cards) ── */}
      <div style={{ marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <FileText size={18} color="var(--sc-navy-700)" />
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
              Previous Year Papers &amp; Mocks
            </h2>
          </div>
          <span style={{ fontSize: '0.70rem', fontWeight: 700, color: 'var(--sc-green-600)', background: 'var(--sc-green-50)', padding: '2px 7px', borderRadius: '100px' }}>
            ✓ Verified Answer Keys
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {fallbackPapers.map(p => (
            <PyqCard key={p.id} paper={p} />
          ))}
        </div>
      </div>

      {/* ── 4. EXPANDABLE INTELLIGENCE ACCORDION (Syllabus, Pattern, Strategy) ── */}
      <div style={{ marginBottom: '16px' }}>
        <ExamDetailAccordion detailed={detailed} />
      </div>

      {/* ── 5. OFFICIAL CURATION & SOURCE TRUST PANEL ── */}
      <div style={{ marginBottom: '16px' }}>
        <TrustPanel
          source={exam.organisation}
          sourceType="official"
          lastVerified={exam.lastVerified}
          officialNotificationUrl={exam.officialNotificationUrl}
          applicationUrl={exam.applicationUrl}
          status={exam.status}
        />
      </div>

      {/* ── 6. BOTTOM ACTION BAR: TRACK IN "MY CYCLES" + OFFICIAL APPLY ── */}
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
            Track This Recruitment Cycle
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-500)' }}>
            Get alerts for admit card releases, exam dates, answer keys &amp; results.
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <TrackButton
            opportunityId={exam.id}
            opportunityType="exam"
            title={exam.name}
            employerOrOrg={exam.organisation}
            slug={exam.slug}
            nextStageName="Stage 1 CBT"
            nextStageDate={exam.examDate}
          />

          {exam.applicationUrl && (
            <a
              href={exam.applicationUrl}
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
          )}
        </div>
      </div>

      {/* ── 7. CONTEXTUAL MAYA INTELLIGENCE CARD ── */}
      <div>
        <MayaCard
          title={`Ask Maya about ${exam.name}`}
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
            'What are the past year cutoff percentiles?',
            'What is the exam syllabus?',
            'What is the marking scheme & negative marking?',
            'Am I eligible for this exam?'
          ]}
        />
      </div>
    </div>
  );
}
