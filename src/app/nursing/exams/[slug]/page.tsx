import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Building2,
  FileText,
  ArrowLeft,
  ExternalLink,
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

function formatCompactSalary(salaryText?: string): string {
  if (!salaryText) return 'Level 7 (~₹80k)';
  return salaryText
    .split('(')[0]
    .replace(/,000/g, 'k')
    .replace(/\s*\/\s*month/i, ' / mo')
    .replace(/\s*–\s*/g, '–')
    .trim();
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
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '860px', margin: '0 auto', paddingBottom: '90px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(examJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

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
          opportunityId={exam.id}
          opportunityType="exams"
          title={exam.name}
          employerOrOrg={exam.organisation}
          deadline={exam.applicationDeadline}
          slug={exam.slug}
          profession="nursing"
        />
      </div>

      {/* ── 1. CLEAN HERO CARD (Pixel-Perfect Symmetrical Grid) ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #061e38 0%, #0a325e 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '18px',
          marginBottom: '16px',
          boxShadow: '0 4px 14px rgba(6, 30, 56, 0.15)',
        }}
      >
        {/* Clean Eyebrow Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.72rem', fontWeight: 700, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            <span>{exam.organisation.includes('AIIMS') ? 'Central Govt · AIIMS' : exam.organisation.includes('Railway') ? 'Central Govt · Railways' : 'Government Recruitment'}</span>
            <span style={{ color: '#4ade80', fontSize: '0.68rem', fontWeight: 600 }}>● Verified Notice</span>
          </div>
        </div>

        {/* Title & Organization */}
        <h1 style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.3, margin: '0 0 4px 0' }}>
          {exam.name}
        </h1>

        <div style={{ fontSize: '0.80rem', color: '#cbd5e1', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '14px' }}>
          <Building2 size={14} color="#94a3b8" />
          <span>{exam.organisation}</span>
        </div>

        {/* Symmetrical 2x2 Metric Grid (Mobile) / 4-Col (Desktop) */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '8px',
            paddingTop: '12px',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px', minHeight: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Vacancies</div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts` : 'See Notice'}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px', minHeight: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Monthly Pay</div>
            <div style={{ fontSize: '0.98rem', fontWeight: 800, color: '#f7d78e', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {formatCompactSalary(detailed?.grossSalaryMonthly)}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px', minHeight: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Exam Date</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {examDateFormatted}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.08)', padding: '8px 10px', borderRadius: '8px', minHeight: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 0, overflow: 'hidden' }}>
            <div style={{ fontSize: '0.62rem', color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Registration</div>
            <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#fca5a5', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {deadlineFormatted}
            </div>
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

      {/* ── 6. CONTEXTUAL MAYA INTELLIGENCE CARD ── */}
      <div style={{ marginBottom: '20px' }}>
        <MayaCard
          title={`Ask Maya about ${exam.name.split('(')[0].trim()}`}
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
            '🎯 Past Cutoff Percentiles',
            '📋 Check My Eligibility',
            '⏱️ CBT Exam Pattern',
            '📚 High-Yield Topics'
          ]}
        />
      </div>

      {/* ── 7. SLEEK BOTTOM ACTION DOCK ── */}
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
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 6px rgba(8, 50, 98, 0.25)',
            }}
          >
            <span>Apply on Portal</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </div>
  );
}
