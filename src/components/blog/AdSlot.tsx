import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { HOUSE_ADS, AD_SLOT_SIZE, type AdSlotId } from '@/lib/house-ads';

/**
 * A fixed advertising position on blog pages, filled from src/lib/house-ads.ts. Always labelled
 * "Advertisement" so it is never mistaken for exam information.
 */
export function AdSlot({ slot }: { slot: AdSlotId }) {
  const ad = HOUSE_ADS[slot];
  const cls = `blog-ad blog-ad--${slot}`;

  if (!ad) {
    return (
      <aside className={`${cls} blog-ad--empty`} aria-label="Advertisement space">
        <span className="blog-ad-label">Advertisement</span>
        <span className="blog-ad-empty-text">SkillCase Germany programme — ad space</span>
        <span className="blog-ad-size">{AD_SLOT_SIZE[slot]}</span>
      </aside>
    );
  }

  const external = /^https?:/.test(ad.href);
  // Tag the link with the slot so sign-ups can be traced to the placement that drove them.
  const href = external ? `${ad.href}${ad.href.includes('?') ? '&' : '?'}utm_source=skillcase_nursing&utm_medium=house_ad&utm_campaign=germany&utm_content=${slot}` : ad.href;
  const inner = (
    <>
      <span className="blog-ad-label">Advertisement</span>
      <span className="blog-ad-body">
        {ad.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={ad.image} alt="" className="blog-ad-img" loading="lazy" />
        )}
        <span className="blog-ad-copy">
          {ad.eyebrow && <span className="blog-ad-eyebrow">{ad.eyebrow}</span>}
          <b>{ad.title}</b>
          <span>{ad.body}</span>
        </span>
        <span className="blog-ad-cta">
          {ad.cta} <ArrowRight size={15} />
        </span>
      </span>
    </>
  );
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener">
      {inner}
    </a>
  ) : (
    <Link href={ad.href} className={cls}>
      {inner}
    </Link>
  );
}
