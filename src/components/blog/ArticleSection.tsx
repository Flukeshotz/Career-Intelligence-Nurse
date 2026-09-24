import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

/**
 * Numbered blog section: blue number, title, a large icon tile beside 2–3 summary bullets, and a
 * chevron. The full content opens below. Built on <details>, so it works without JS and is
 * keyboard / screen-reader accessible.
 */
export function ArticleSection({
  id,
  number,
  icon,
  title,
  bullets = [],
  children,
  defaultOpen = true,
}: {
  id: string;
  number: number;
  icon: ReactNode;
  title: string;
  bullets?: string[];
  children: ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <section id={id} className="blog-sec">
      <details open={defaultOpen}>
        <summary>
          <span className="blog-num">{number}</span>
          <h3 className="blog-sec-title">{title}</h3>
          <ChevronRight size={22} className="blog-chev" aria-hidden="true" />
          <span />
          <span className="blog-sec-row">
            <span className="blog-sec-ico">{icon}</span>
            <ul className="blog-bullets">
              {bullets.filter(Boolean).slice(0, 3).map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </span>
        </summary>
        <div className="blog-sec-body blog-prose">{children}</div>
      </details>
    </section>
  );
}
