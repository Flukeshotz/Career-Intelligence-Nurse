import { SITE_URL } from '@/lib/site';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { ExternalLink } from 'lucide-react';
import { getExamBySlug, getRequirementsForOpportunity, INITIAL_EXAMS } from '@/lib/data';
import { generateExamJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import { TrustBanner } from '@/components/opportunity/TrustBanner';
import { getTrust } from '@/lib/verification';
import { TrackButton } from '@/components/opportunity/TrackButton';
import { PyqCard } from '@/components/opportunity/PyqCard';
import MayaCard from '@/components/maya/MayaCard';
import { VERIFIED_FACTS } from '@/lib/verified-facts';
import { examDateText, applyWindowText, formatDay } from '@/lib/format-dates';
import { ExamArticle } from '@/components/opportunity/ExamArticle';
import { getPapersForExam } from '@/lib/pyq-mock-data';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { ArticleHero } from '@/components/blog/ArticleHero';

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

  const facts = [
    exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts` : null,
    `applications ${applyWindowText(exam)}`,
    `exam ${examDateText(exam)}`,
  ].filter(Boolean).join(', ');

  return {
    title: `${exam.name}: Vacancies, Dates, Eligibility & Salary | SkillCase`,
    description: `${exam.name}: ${facts}. Checked against independent sources and updated automatically.`,
    openGraph: {
      title: `${exam.name} | SkillCase Nursing`,
      description: `Vacancies, application dates, exam date and eligibility for ${exam.name}.`,
      url: `${SITE_URL}/nursing/exams/${exam.slug}`,
      type: 'article',
    },
  };
}

/** Pay is shown only when it was verified (verified-facts.ts); otherwise the tile says so. */
function payTile(examId: string): string {
  const f = VERIFIED_FACTS[examId];
  return f?.payShort ?? (f?.pay ? f.pay.split('(')[0].trim() : 'See notice');
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
  const papers = [...getPapersForExam(exam.id)].sort((a, b) => b.year - a.year);

  const examJsonLd = generateExamJsonLd(exam);
  const breadcrumbsJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/nursing' },
    { name: 'Exams', url: '/nursing/exams' },
    { name: exam.name, url: `/nursing/exams/${exam.slug}` },
  ]);

  const trust = getTrust(exam.id);
  const shortName = exam.name.replace(/\s*\(.*?\)\s*$/, '');

  const quickFacts: Array<[string, string, string]> = [
    ['Vacancies', exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} Posts` : 'See Notice', 'var(--blog-navy)'],
    ['Pay', payTile(exam.id), 'var(--blog-navy)'],
    ['Exam Date', examDateText(exam), 'var(--blog-navy)'],
    ['Applications', applyWindowText(exam), 'var(--blog-blue)'],
  ];

  return (
    <div className="blog-page">
      <ArticleHeader active="Resources" />

      <div className="blog-shell">
        {/* Never feed search engines structured data we know is wrong or unpublished */}
        {!trust.suppressFromListings && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(examJsonLd) }} />}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }} />

        <ArticleHero
          crumbs={[
            { label: 'Home', href: '/nursing' },
            { label: 'Exams', href: '/nursing/exams' },
            { label: shortName },
          ]}
          badge="Exam Guide"
          title={`${shortName}:`}
          titleAccent="Vacancies, Dates"
          titleTail="& Eligibility"
          subtitle={`Dates, eligibility, the exam paper, pay and how to apply for ${shortName} — in one guide.`}
          updatedLabel={formatDay(trust.checkedAt ?? exam.lastVerified)}
          readMinutes={6}
          handwriting={['Your', 'next step', 'in nursing']}
          shareTrackId={exam.id}
        />

        <TrustBanner recordId={exam.id} />

        <ExamArticle
          exam={exam}
          actions={
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px', marginBottom: '14px' }}>
                {quickFacts.map(([label, value, color]) => (
                  <div key={label} style={{ background: '#fff', border: '1px solid var(--blog-line)', borderRadius: '12px', padding: '12px 14px' }}>
                    <div style={{ fontSize: '0.68rem', color: 'var(--blog-gray)', textTransform: 'uppercase', fontWeight: 600, letterSpacing: '0.03em' }}>{label}</div>
                    <div style={{ fontSize: '0.92rem', fontWeight: 700, color, lineHeight: 1.3, marginTop: '2px' }}>{value}</div>
                  </div>
                ))}
              </div>
              <div id="track" className="blog-actions" style={{ display: 'grid', gridTemplateColumns: exam.applicationUrl ? '1fr 1fr' : '1fr', gap: '10px', marginBottom: '22px', scrollMarginTop: '96px' }}>
                <TrackButton opportunityId={exam.id} opportunityType="exam" title={exam.name} employerOrOrg={exam.organisation} slug={exam.slug} nextStageName="Exam" nextStageDate={exam.examDate} />
                {exam.applicationUrl && (
                  <a
                    href={exam.applicationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blog-btn-primary"
                  >
                    <span>Apply on Official Site</span>
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          }
          eligibility={<EligibilitySection opportunityId={exam.id} requirements={requirements} officialNotificationUrl={exam.officialNotificationUrl} />}
          papers={
            papers.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {papers.map((p) => (
                  <PyqCard key={p.id} paper={p} />
                ))}
              </div>
            ) : undefined
          }
          source={
            <TrustPanel
              recordId={exam.id}
              source={exam.organisation}
              sourceType="official"
              lastVerified={exam.lastVerified}
              officialNotificationUrl={exam.officialNotificationUrl}
              applicationUrl={exam.applicationUrl}
              status={exam.status}
            />
          }
          maya={
            <MayaCard
              title={`Ask Maya about ${exam.name.split('(')[0].trim()}`}
              pageContext="exam"
              variant="light"
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
              suggestedPrompts={['Am I eligible?', 'Key dates', 'Pay and posts']}
            />
          }
        />
      </div>
    </div>
  );
}
