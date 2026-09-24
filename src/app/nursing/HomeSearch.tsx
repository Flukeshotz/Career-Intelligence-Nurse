'use client';

import { useEffect, useState } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { GlobalSearchModal } from '@/components/layout/GlobalSearchModal';
import { FilterDrawerModal } from '@/components/layout/FilterDrawerModal';
import { getUserProfile } from '@/lib/user-store';

/** Search + filter entry points for the home hero, and a greeting only if the nurse saved a name. */
export function HomeSearch() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [name, setName] = useState<string | null>(null);

  useEffect(() => {
    const p = getUserProfile();
    if (p?.fullName) setName(p.fullName.split(' ')[0]);
  }, []);

  return (
    <>
      {name && <p className="home-greet">Welcome back, {name}.</p>}
      <div className="home-search">
        <button type="button" className="home-search-box" onClick={() => setSearchOpen(true)}>
          <Search size={18} />
          <span>Search exams, jobs, papers…</span>
        </button>
        <button type="button" className="home-search-filter" onClick={() => setFilterOpen(true)} aria-label="Filters">
          <SlidersHorizontal size={18} />
        </button>
      </div>
      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <FilterDrawerModal isOpen={filterOpen} onClose={() => setFilterOpen(false)} />
    </>
  );
}
