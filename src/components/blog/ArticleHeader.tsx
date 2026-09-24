'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Search, User } from 'lucide-react';
import { GlobalSearchModal } from '@/components/layout/GlobalSearchModal';

/**
 * Top nav for article / resource pages (the blog design system). Replaces the app's dark TopHeader
 * on these routes (see TopHeader.isArticlePage). Every link points at a real route.
 */
const NAV_LINKS: Array<[string, string]> = [
  ['Learn', '/nursing/pyq'],
  ['Opportunities', '/nursing/exams'],
  ['Resources', '/nursing/upcoming-exams'],
  ['About', '/about'],
];

/** Which nav item a path belongs to. */
export function activeNavFor(pathname: string | null): string | undefined {
  if (!pathname) return undefined;
  if (pathname.startsWith('/nursing/pyq')) return 'Learn';
  if (pathname === '/nursing/upcoming-exams' || /^\/nursing\/exams\/[^/]+$/.test(pathname)) return 'Resources';
  if (pathname.startsWith('/nursing/exams') || pathname.startsWith('/nursing/jobs') || pathname.startsWith('/nursing/abroad')) return 'Opportunities';
  if (pathname.startsWith('/about')) return 'About';
  return undefined;
}

export function ArticleHeader({ active }: { active?: string }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  // Same ⌘K shortcut as the app header this replaces on article pages.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  // Shadow once the page scrolls; reading progress on long articles.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 4);
      const article = document.querySelector('.blog-grid');
      if (article) {
        const top = article.getBoundingClientRect().top + y;
        const span = article.scrollHeight - window.innerHeight;
        setProgress(span > 0 ? Math.min(1, Math.max(0, (y - top + 120) / span)) : 0);
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header className={scrolled ? 'blog-header is-scrolled' : 'blog-header'}>
        <div className="blog-header-inner">
          <Link href="/nursing" className="blog-logo" aria-label="SkillCase home">
            <b>
              <span style={{ color: 'var(--blog-navy)' }}>SKILL</span>
              <span style={{ color: '#f5a524' }}>CASE</span>
            </b>
            <small>Skills for a Brighter Tomorrow</small>
          </Link>

          <nav className="blog-nav" aria-label="Main">
            {NAV_LINKS.map(([label, href]) => (
              <Link key={label} href={href} className={label === active ? 'active' : undefined}>
                {label}
              </Link>
            ))}
          </nav>

          <button type="button" className="blog-search" onClick={() => setSearchOpen(true)} aria-label="Search articles, exams and jobs">
            <Search size={16} />
            <span>Search articles, exams, jobs...</span>
          </button>
          <Link href="/profile" className="blog-avatar" aria-label="Your profile">
            <User size={18} />
          </Link>
        </div>
        {progress > 0 && <span className="blog-progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />}
      </header>
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
