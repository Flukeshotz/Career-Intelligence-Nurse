import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, MapPin, Calendar, ExternalLink, ArrowLeft, Users, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';
import { getJobBySlug, getRequirementsForOpportunity, INITIAL_JOBS, INITIAL_EXAMS } from '@/lib/data';
import { generateJobPostingJsonLd, generateBreadcrumbJsonLd } from '@/lib/seo';
import { EligibilitySection } from '@/components/opportunity/EligibilitySection';
import { TrustPanel } from '@/components/opportunity/TrustPanel';
import { ShareButtons } from '@/components/opportunity/ShareButtons';
import { TrackButton } from '@/components/opportunity/TrackButton';

export const revalidate = 3600;

export async function generateStaticParams() {
  return INITIAL_JOBS.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const job = await getJobBySlug('nursing', params.slug);
  if (!job) return { title: 'Opportunity Not Found' };

  return {
    title: `${job.title} — ${job.employer}`,
    description: `Official details, eligibility criteria, vacancy count (${job.vacancyCount || 'various'}), and direct application link for ${job.title} at ${job.employer}.`,
    openGraph: {
      title: `${job.title} | ${job.employer}`,
      description: `Apply before ${job.applicationDeadline ? new Date(job.applicationDeadline).toLocaleDateString('en-IN') : 'closing date'}. Check qualification & eligibility.`,
      url: `https://skillcase.in/nursing/jobs/${job.slug}`,
      type: 'article',
    },
  };
}

export default async function JobDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const job = await getJobBySlug('nursing', params.slug);
  if (!job) {
    notFound();
  }

  const requirements = await getRequirementsForOpportunity({ jobId: job.id });
  const jobPostingJsonLd = generateJobPostingJsonLd(job);
  const breadcrumbsJsonLd = generateBreadcrumbJsonLd([
    { name: 'Home', url: '/nursing' },
    { name: 'Jobs', url: '/nursing/jobs' },
    { name: job.title, url: `/nursing/jobs/${job.slug}` },
  ]);

  const deadlineFormatted = job.applicationDeadline
    ? new Date(job.applicationDeadline).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : 'Open until filled';

  const isGov = job.type === 'government';

  // Compute linked examination for government recruitment
  let linkedExam = null;
  if (isGov) {
    const jobOrg = job.employer.toLowerCase();
    const jobTitle = job.title.toLowerCase();
    linkedExam = INITIAL_EXAMS.find(e => {
      const examOrg = e.organisation.toLowerCase();
      const examName = e.name.toLowerCase();
      return (
        (jobOrg.includes('aiims') && examName.includes('norcet')) ||
        (jobOrg.includes('railway') && examName.includes('rrb')) ||
        (jobOrg.includes('esic') && examName.includes('esic')) ||
        (jobOrg.includes('dsssb') && examName.includes('dsssb')) ||
        (jobOrg.includes('jipmer') && examName.includes('jipmer')) ||
        (jobOrg.includes('kpsc') && examName.includes('kpsc')) ||
        (jobOrg.includes('kerala') && examName.includes('kerala')) ||
        (jobOrg.includes('maharashtra') && examName.includes('maharashtra')) ||
        (jobOrg.includes('upums') && examName.includes('upums')) ||
        (jobOrg.includes('west bengal') && examName.includes('wbhrb')) ||
        (jobOrg.includes('bihar') && examName.includes('btsc')) ||
        (jobOrg.includes('odisha') && examName.includes('osssc')) ||
        (jobOrg.includes('gujarat') && examName.includes('ojas')) ||
        (jobOrg.includes('madhya pradesh') && examName.includes('mp esb')) ||
        (jobOrg.includes('national health mission') && examName.includes('nhm')) ||
        examOrg.includes(jobOrg) ||
        jobOrg.includes(examOrg)
      );
    });
  }

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '20px' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />

      {/* Back Navigation */}
      <div style={{ marginBottom: '16px' }}>
        <Link
          href="/nursing/jobs"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--sc-navy-700)', fontWeight: 700 }}
        >
          <ArrowLeft size={16} />
          <span>Back to All Jobs</span>
        </Link>
      </div>

      {/* ── 1. WHAT IS THIS? (Hero Intelligence Card) ── */}
      <div className="sc-card" style={{ padding: '26px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            <span className={isGov ? 'badge-govt' : 'badge-private'}>
              {isGov ? '🏛️ Central / State Govt' : '🏥 NABH Private Hospital'}
            </span>
            <span className="badge-verified">
              ✓ Verified Live Opportunity
            </span>
          </div>
        </div>

        <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.3, marginBottom: '6px' }}>
          {job.title}
        </h1>

        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.96rem', color: 'var(--sc-ink-700)', fontWeight: 600, marginBottom: '18px' }}>
          <Building2 size={18} color="var(--sc-ink-600)" />
          <span>{job.employer}</span>
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
              Location
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--sc-navy-900)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <MapPin size={14} color="var(--sc-navy-700)" />
              <span>{job.locationCity || 'Various Locations'}</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
              Pay Scale
            </div>
            <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--sc-green-600)', marginTop: '2px' }}>
              {job.salaryRaw || (job.salaryMin && job.salaryMax ? `₹${(job.salaryMin/100000).toFixed(1)} - ${(job.salaryMax/100000).toFixed(1)} LPA` : 'Check rules')}
            </div>
          </div>

          {job.vacancyCount && (
            <div>
              <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
                Total Vacancies
              </div>
              <div style={{ fontSize: '0.92rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Users size={14} />
                <span>{job.vacancyCount} posts</span>
              </div>
            </div>
          )}

          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', fontWeight: 700, textTransform: 'uppercase' }}>
              Deadline
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
            Share with colleagues & batchmates:
          </div>
          <ShareButtons
            opportunityId={job.id}
            opportunityType="jobs"
            title={job.title}
            employerOrOrg={job.employer}
            location={job.locationCity}
            deadline={job.applicationDeadline}
            slug={job.slug}
          />
        </div>
      </div>

      {/* ── 2. CAN I APPLY? & DETAILS ── */}
      <div className="desktop-grid-2col">
        {/* Left Column: Personalized Eligibility Engine */}
        <div>
          <EligibilitySection
            opportunityId={job.id}
            requirements={requirements}
            officialNotificationUrl={job.officialNotificationUrl}
          />
        </div>

        {/* Right Column: Opportunity Summary & Trust Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div className="sc-card" style={{ padding: '20px' }}>
            <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '8px' }}>
              Key Opportunity Highlights
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
              {job.descriptionSimple}
            </div>
          </div>

          {/* Linked Government Examination Banner */}
          {linkedExam && (
            <div
              className="sc-card"
              style={{
                padding: '18px 20px',
                background: 'linear-gradient(135deg, #f0fdf4 0%, #e0f2fe 100%)',
                border: '1.5px solid #86efac',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '1.1rem' }}>🎯</span>
                <div style={{ fontSize: '0.78rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Selection Examination Track
                </div>
              </div>
              <div style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)', marginBottom: '4px' }}>
                {linkedExam.name}
              </div>
              <p style={{ fontSize: '0.84rem', color: 'var(--sc-ink-700)', lineHeight: 1.45, marginBottom: '12px' }}>
                Selection for this {job.employer} cadre is determined through this examination. View full subject weightages, question breakdown, and marking scheme.
              </p>
              <Link
                href={`/nursing/exams/${linkedExam.slug}`}
                className="btn-navy"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontSize: '0.82rem',
                  padding: '8px 14px',
                  textDecoration: 'none',
                  borderRadius: 'var(--radius-sm)'
                }}
              >
                <span>View Exam Blueprint & Syllabus</span>
                <ExternalLink size={14} />
              </Link>
            </div>
          )}

          <TrustPanel
            source={job.source}
            sourceType={job.sourceType}
            lastVerified={job.lastVerified}
            officialNotificationUrl={job.officialNotificationUrl}
            applicationUrl={job.applicationUrl}
            status={job.status}
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
          {job.employer} • {job.vacancyCount ? `${job.vacancyCount} posts` : 'Active recruitment'}
        </div>

        {job.applicationUrl && (
          <a
            href={job.applicationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-navy"
            style={{ textDecoration: 'none' }}
          >
            <span>Apply on Official Portal</span>
            <ExternalLink size={15} />
          </a>
        )}
      </div>
    </div>
  );
}
