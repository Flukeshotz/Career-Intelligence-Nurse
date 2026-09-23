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
  ['Learn', '/nursing'],
  ['Opportunities', '/nursing/exams'],
  ['Resources', '/nursing/upcoming-exams'],
  ['About', '/nursing'],
];

export function ArticleHeader({ active = 'Resources' }: { active?: string }) {
  const [searchOpen, setSearchOpen] = useState(false);

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

  return (
    <>
      <header className="blog-header">
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
      </header>
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
