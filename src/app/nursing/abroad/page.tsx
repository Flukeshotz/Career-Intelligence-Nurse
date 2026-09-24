import { ArticleHero } from '@/components/blog/ArticleHero';
import { AdSlot } from '@/components/blog/AdSlot';

// The earlier listings (vacancy counts, salaries, benefits) were not checked against the employers'
// own notices, so they are removed. This page returns when each listing has an official source.
export default function AbroadNursingPage() {
  return (
    <div className="blog-page">
      <div className="blog-shell">
        <ArticleHero
          crumbs={[{ label: 'Home', href: '/nursing' }, { label: 'Opportunities' }, { label: 'Working Abroad' }]}
          badge="Working abroad"
          title="Nursing jobs"
          titleAccent="abroad"
          subtitle="We are verifying overseas nursing opportunities against the employers' and regulators' own notices. We only list what we can source, so nothing is shown here yet."
          showShare={false}
          handwriting={['Your', 'next step', 'abroad']}
        />
        <AdSlot slot="article-top" />
      </div>
    </div>
  );
}
