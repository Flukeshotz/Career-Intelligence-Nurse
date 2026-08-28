import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, Calendar, FileText, ArrowLeft, ExternalLink, Users, AlertCircle, Building2 } from 'lucide-react';
import { getExamBySlug, getRequirementsForOpportunity, INITIAL_EXAMS } from '@/lib/data';
import { generateExamJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { TrackButton } from '@/components/opportunity/TrackButton';

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
    title: `${exam.name} — ${exam.organisation}`,
    description: `Official dates, eligibility criteria, vacancies (${exam.vacancies || 'various'}), admit card release date, and syllabus for ${exam.name}.`,
    openGraph: {
      title: `${exam.name} | ${exam.organisation}`,
      description: `Exam date, syllabus, and online application portal for ${exam.name}.`,
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

      {/* ── 1. WHAT IS THIS? (Hero Intelligence Card) ── */}
      <div className="sc-card" style={{ padding: '26px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span className="badge-govt">🎯 National Recruitment Exam</span>
            <span className="badge-verified">✓ Verified Authority Notice</span>
          </div>

          <TrackButton
            opportunityId={exam.id}
            opportunityType="exam"
            title={exam.name}
            employerOrOrg={exam.organisation}
            slug={exam.slug}
          />
        </div>

        <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.3, marginBottom: '6px' }}>
          {exam.name}
        </h1>

        <div style={{ fontSize: '0.96rem', color: 'var(--sc-ink-700)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '18px' }}>
          <Building2 size={18} color="var(--sc-ink-600)" />
          <span>{exam.organisation}</span>
        </div>

        {/* Structured 4-Metric Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
            gap: '12px',
            padding: '16px',
            background: 'var(--sc-surface-secondary)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--sc-line-200)',
            marginBottom: '16px',
          }}
        >
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
              Examination Date
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <GraduationCap size={15} color="var(--sc-navy-700)" />
              <span>{examDateFormatted}</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
              Pay Scale
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--sc-green-600)', marginTop: '2px' }}>
              Level 7 / Level 8 Pay Matrix (₹44,900 - ₹1,42,400)
            </div>
          </div>

          {exam.vacancies && (
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
                Total Vacancies
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Users size={14} />
                <span>{exam.vacancies.toLocaleString('en-IN')} posts</span>
              </div>
            </div>
          )}

          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
              Application Status
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#92400e', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Calendar size={14} />
              <span>{deadlineFormatted}</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Share Box */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)' }}>
            Share exam details with nursing colleagues:
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

      {/* ── 2. CAN I APPLY? & DETAILS ── */}
      <div className="desktop-grid-2col">
        {/* Left Column: Personalized Eligibility Engine */}
        <div>
          <EligibilitySection
            opportunityId={exam.id}
            requirements={requirements}
            officialNotificationUrl={exam.officialNotificationUrl}
          />
        </div>

        {/* Right Column: Exam Details & Trust Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="sc-card" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '8px' }}>
              Examination Overview
            </h2>
            <div
              style={{
                fontSize: '0.86rem',
                color: 'var(--sc-ink-700)',
                lineHeight: 1.55,
                background: 'var(--sc-surface-secondary)',
                padding: '12px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid var(--sc-line-200)',
              }}
            >
              {exam.descriptionSimple}
            </div>
          </div>

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

      {/* ── 3. Persistent Action Footer ── */}
      <div
        style={{
          position: 'sticky',
          bottom: '76px',
          zIndex: 80,
          background: 'rgba(255, 255, 255, 0.96)',
          backdropFilter: 'blur(12px)',
          border: '1px solid var(--sc-line-200)',
          borderRadius: 'var(--radius-lg)',
          padding: '12px 18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
          boxShadow: 'var(--shadow-lifted)',
          maxWidth: '860px',
          margin: '20px auto 0',
        }}
      >
        <div style={{ fontSize: '0.84rem', color: 'var(--sc-ink-700)', fontWeight: 600 }}>
          {exam.organisation} • {exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts` : 'Selection exam'}
        </div>

        {exam.applicationUrl && (
          <a
            href={exam.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy"
            style={{ textDecoration: 'none' }}
          >
            <span>Visit Official Examination Portal</span>
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </div>
  );
}
