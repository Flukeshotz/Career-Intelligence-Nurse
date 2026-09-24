import type { Metadata } from 'next';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { AdSlot } from '@/components/blog/AdSlot';
import { PassportWizard } from './PassportWizard';

export const metadata: Metadata = {
  title: 'Career Passport — check which nursing exams you can apply for | SkillCase',
  description: 'Add your qualification, registration, date of birth and home state once. Every nursing exam guide then checks its rules against your details.',
};

export default function ProfilePage() {
  return (
    <div className="blog-page">
      <div className="blog-shell">
        <ArticleHero
          crumbs={[{ label: 'Home', href: '/nursing' }, { label: 'Career Passport' }]}
          badge="Career Passport"
          title="Check which exams"
          titleAccent="you can apply for"
          subtitle="Five quick questions. Every exam guide then checks its rules against your answers."
          showShare={false}
          compact
          handwriting={['Fill it', 'once, use', 'everywhere']}
        />
        <PassportWizard />
        <AdSlot slot="article-bottom" />
      </div>
    </div>
  );
}
