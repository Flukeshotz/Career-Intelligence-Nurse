import type { ReactNode } from 'react';
import Link from 'next/link';
import { Calendar, Clock } from 'lucide-react';
import { ShareIcons } from './ShareIcons';

export interface Crumb {
  label: string;
  href?: string;
}

/**
 * Blog hero: breadcrumb, badge, three-part title (navy / blue accent / navy), subtitle, meta row with
 * share icons, and on desktop the brand nurse (Maya) with a handwritten caption over soft blobs.
 */
export function ArticleHero({
  crumbs,
  badge,
  title,
  titleAccent,
  titleTail,
  subtitle,
  updatedLabel,
  readMinutes,
  showShare = true,
  children,
  kicker,
  compact = false,
  handwriting = ['Your', 'next step', 'in nursing'],
  shareTrackId,
}: {
  crumbs: Crumb[];
  badge: string;
  /** First line, navy. */
  title: string;
  /** Second line, brand blue. */
  titleAccent?: string;
  /** Rest of the second line, navy. */
  titleTail?: string;
  subtitle: string;
  /** Omit on non-article pages; the meta row then shows only what is given. */
  updatedLabel?: string;
  readMinutes?: number;
  /** Hide the share buttons (e.g. on app pages). */
  showShare?: boolean;
  /** Extra content under the subtitle, e.g. a search bar. */
  children?: ReactNode;
  /** Small line above the badge, e.g. a greeting. */
  kicker?: string;
  /** Shorter hero on phones — for list and app pages where content should start sooner. */
  compact?: boolean;
  handwriting?: [string, string, string] | string[];
  shareTrackId?: string;
}) {
  const shareTitle = [title, titleAccent, titleTail].filter(Boolean).join(' ');
  return (
    <section className={compact ? 'blog-hero blog-hero--compact' : 'blog-hero'}>
      {crumbs.length > 0 && (
      <nav aria-label="Breadcrumb" className="blog-crumbs">
        {crumbs.map((c, i) => (
          <span key={c.label} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            {i > 0 && <span aria-hidden="true">›</span>}
            {c.href ? <Link href={c.href}>{c.label}</Link> : <span className="here">{c.label}</span>}
          </span>
        ))}
      </nav>
      )}

      <div className="blog-hero-art" aria-hidden="true">
        <div className="sun" />
        <div className="blob2" />
        <div className="blob" />
        <div className="blog-hand">
          {handwriting.map((line) => (
            <div key={line}>{line}</div>
          ))}
          <svg width="92" height="12" viewBox="0 0 92 12">
            <path d="M2 8 C 25 2, 60 2, 90 7" stroke="var(--blog-yellow)" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/maya-smiling.webp" alt="" />
      </div>

      <div className="blog-hero-body">
        {kicker && <div className="blog-kicker">{kicker}</div>}
        <span className="blog-badge">{badge}</span>
        <h1 className="blog-h1">
          {title}
          {(titleAccent || titleTail) && <br />}
          {titleAccent && <span className="accent">{titleAccent}</span>}
          {titleTail && <> {titleTail}</>}
        </h1>
        <p className="blog-sub">{subtitle}</p>
        {children}
        {(updatedLabel || readMinutes || showShare) && (
          <div className="blog-meta">
            {updatedLabel && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Calendar size={17} /> Updated {updatedLabel}
              </span>
            )}
            {updatedLabel && readMinutes && <span className="sep" aria-hidden="true" />}
            {readMinutes && (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                <Clock size={17} /> {readMinutes} min read
              </span>
            )}
            {showShare && <ShareIcons title={shareTitle} trackId={shareTrackId} />}
          </div>
        )}
      </div>
    </section>
  );
}
