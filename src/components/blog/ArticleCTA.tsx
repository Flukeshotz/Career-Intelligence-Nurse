import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

function Cap() {
  return (
    <svg width="96" height="76" viewBox="0 0 96 76" aria-hidden="true">
      <path d="M48 6 2 26l46 20 46-20L48 6Z" fill="#0b2a5b" />
      <path d="M22 36v18c0 7 12 13 26 13s26-6 26-13V36L48 47 22 36Z" fill="#0b2a5b" />
      <path d="M84 30v22" stroke="#f7c948" strokeWidth="3" strokeLinecap="round" />
      <circle cx="84" cy="55" r="4" fill="#f7c948" />
    </svg>
  );
}

/** "Prepare for Success" banner: cap illustration, copy, yellow button. */
export function ArticleCTA({ title, body, buttonLabel, href }: { title: string; body: string; buttonLabel: string; href: string }) {
  return (
    <div className="blog-cta">
      <div className="blog-cta-art">
        <Cap />
      </div>
      <div style={{ flex: 1, minWidth: '220px' }}>
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <Link href={href}>
        {buttonLabel} <ArrowRight size={18} />
      </Link>
    </div>
  );
}
