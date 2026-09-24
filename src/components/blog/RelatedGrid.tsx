import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export interface RelatedItem {
  title: string;
  href: string;
}

/** A monogram tile from the guide's first word (NORCET, RRB, PGIMER…) — tidier than repeating one illustration. */
function monogram(title: string): string {
  const first = title.split(/\s+/)[0].replace(/[^A-Za-z]/g, '');
  return first.length <= 6 ? first.toUpperCase() : first.slice(0, 2).toUpperCase();
}
const TONES = ['linear-gradient(145deg,#1557d6,#0b2a5b)', 'linear-gradient(145deg,#0b2a5b,#1f4f9e)', 'linear-gradient(145deg,#f7c948,#e3a008)'];

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
            <span className="blog-rel-thumb blog-rel-mono" style={{ background: TONES[i % TONES.length], color: i % TONES.length === 2 ? '#0b2a5b' : '#fff' }} aria-hidden="true">
              {monogram(item.title)}
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
