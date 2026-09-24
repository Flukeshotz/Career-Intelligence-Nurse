'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, GraduationCap, CalendarDays, UserRound, Search } from 'lucide-react';
import { useState } from 'react';
import { GlobalSearchModal } from './GlobalSearchModal';

/**
 * Phone tab bar. Every tab leads somewhere with content: the empty Jobs and Abroad listings were
 * replaced by the exam calendar and the Career Passport.
 */
const TABS = [
  { href: '/nursing', label: 'Home', Icon: Home, match: (p: string) => p === '/nursing' || p === '/' },
  { href: '/nursing/exams', label: 'Exams', Icon: GraduationCap, match: (p: string) => p.startsWith('/nursing/exams') },
  null, // search
  { href: '/nursing/upcoming-exams', label: 'Calendar', Icon: CalendarDays, match: (p: string) => p.startsWith('/nursing/upcoming-exams') },
  { href: '/profile', label: 'Passport', Icon: UserRound, match: (p: string) => p.startsWith('/profile') || p.startsWith('/cycles') },
] as const;

export function BottomNav() {
  const pathname = usePathname() ?? '';
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="sc-tabbar" aria-label="Main">
        {TABS.map((t) =>
          t === null ? (
            <button key="search" type="button" onClick={() => setSearchOpen(true)} className="sc-tab-item sc-tab-search" aria-label="Search">
              <span className="sc-tab-search-btn">
                <Search size={20} />
              </span>
              <span>Search</span>
            </button>
          ) : (
            <Link key={t.href} href={t.href} className={`sc-tab-item${t.match(pathname) ? ' active' : ''}`} aria-current={t.match(pathname) ? 'page' : undefined}>
              <span className="sc-tab-ico">
                <t.Icon size={21} />
              </span>
              <span>{t.label}</span>
            </Link>
          )
        )}
      </nav>
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
