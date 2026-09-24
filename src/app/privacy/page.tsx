import type { Metadata } from 'next';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { AdSlot } from '@/components/blog/AdSlot';

export const metadata: Metadata = {
  title: 'Privacy — SkillCase Nursing',
  description: 'What SkillCase Nursing stores, where, and what is sent to our servers.',
};

/**
 * Describes exactly what the code does (src/lib/user-store.ts, src/lib/posthog.ts,
 * components/profile/ResumeUploadModal.tsx, app/api/maya). Update this page if any of that changes.
 */
export default function PrivacyPage() {
  return (
    <div className="blog-page">
      <main className="blog-shell">
        <ArticleHero crumbs={[{ label: 'Home', href: '/nursing' }, { label: 'Privacy' }]} badge="Privacy" title="What we store" titleAccent="and where" subtitle="In plain words: what this site keeps, on your device and on ours." showShare={false} compact handwriting={['Your data,', 'your', 'device']} />
        <section className="blog-intro blog-prose" style={{ maxWidth: '760px' }}>
          <h2>Kept on your device</h2>
          <p>Your Career Passport (qualification, registration, date of birth and the other details you enter) and the exams you track are saved in your browser&apos;s local storage. They are not sent to our servers for storage. Clearing your browser data removes them.</p>
          <h2 style={{ marginTop: '22px' }}>Your résumé</h2>
          <p>If you upload a résumé to fill in your profile, it is read and parsed in your browser. The file itself is not uploaded. We only record that a parse happened and how many qualifications were found.</p>
          <h2 style={{ marginTop: '22px' }}>Questions to Maya</h2>
          <p>When you ask Maya a question, the question — with the exam you are looking at and your saved profile, so the answer can take your details into account — is sent to our server to work out the answer. The server does not store it.</p>
          <h2 style={{ marginTop: '22px' }}>Usage analytics</h2>
          <p>We record simple usage events — for example which page you landed on, where you came from and when you tap share — to see what is useful. Automatic capture of every click is switched off.</p>
        </section>
        <AdSlot slot="article-bottom" />
      </main>
    </div>
  );
}
