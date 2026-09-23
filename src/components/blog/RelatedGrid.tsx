import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  title: string;
  href: string;
}

// Brand illustrations stand in for article photos until each guide has its own image.
const THUMBS = ['/maya-thumbsup.webp', '/maya-looking.webp', '/maya-wave.webp'];

/** "Related Articles": three cards with a thumbnail, title and round arrow. */
export function RelatedGrid({ title = 'Related Articles', items, moreHref, moreLabel = 'View All Blogs' }: { title?: string; items: RelatedItem[]; moreHref: string; moreLabel?: string }) {
  if (items.length === 0) return null;
  return (
    <section>
      <div className="blog-rel-head">
        <h2>{title}</h2>
        <Link href={moreHref}>
          {moreLabel} <ArrowRight size={16} />
        </Link>
      </div>
      <div className="blog-rel">
        {items.slice(0, 3).map((item, i) => (
          <Link key={item.href} href={item.href} className="blog-rel-card">
            <span className="blog-rel-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={THUMBS[i % THUMBS.length]} alt="" loading="lazy" />
            </span>
            <b>{item.title}</b>
            <span className="blog-rel-go" aria-hidden="true">
              <ArrowRight size={14} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
