import type { Metadata } from 'next';
import Link from 'next/link';
import { INITIAL_EXAMS } from '@/lib/mock-data';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { AdSlot } from '@/components/blog/AdSlot';
import { ArticleCTA } from '@/components/blog/ArticleCTA';

export const metadata: Metadata = {
  title: 'About SkillCase Nursing — how we check every recruitment',
  description: 'What SkillCase Nursing does and how every vacancy, date and eligibility rule on the site is checked.',
};

/** About — only statements about how the site actually works (see src/refresher and verified-facts). */
export default function AboutPage() {
  return (
    <div className="blog-page">
      <main className="blog-shell">
        <ArticleHero
          crumbs={[{ label: 'Home', href: '/nursing' }, { label: 'About' }]}
          badge="About SkillCase"
          title="One place for every"
          titleAccent="nursing recruitment"
          subtitle="SkillCase helps nurses in India find government recruitments, understand the rules and track their applications — without chasing a dozen websites."
          showShare={false}
          handwriting={['Built', 'for', 'nurses']}
        />
        <AdSlot slot="article-top" />
        <section className="blog-intro blog-prose" style={{ maxWidth: '760px' }}>
          <h2>What we do</h2>
          <p>
            We track <strong>{INITIAL_EXAMS.length} nursing recruitments</strong> across central and state bodies. For each one there is a full guide: vacancies, dates, eligibility,
            fee, exam pattern, syllabus where the notice gives it, pay, and how to apply.
          </p>
          <h2 style={{ marginTop: '22px' }}>How we check the information</h2>
          <p>Every figure comes from one of two places: the official notice itself, or at least two independent reports of it that say exactly the same thing. When sources disagree, we leave the figure out rather than guess.</p>
          <p>A job runs every day that re-reads the sources, updates a vacancy count or date only when they agree, and holds back sudden large changes until the official notice confirms them. Each guide shows when it was last checked.</p>
          <h2 style={{ marginTop: '22px' }}>What we never do</h2>
          <ul>
            <li>We never mark you eligible on a guess — anything we cannot confirm from your details says so.</li>
            <li>We never ask for money to apply. Apply only on the official portal of the conducting body.</li>
          </ul>
          <p>
            Start with the <Link href="/nursing/upcoming-exams">upcoming nursing exams</Link>, or <Link href="/profile">build your Career Passport</Link> to check your eligibility.
          </p>
        </section>
        <ArticleCTA title="Prepare for Success" body="Join SkillCase and get your Career Passport, eligibility checks and deadline alerts for every nursing recruitment in one place." buttonLabel="Explore Our Programs" href="/profile" />
      </main>
    </div>
  );
}
