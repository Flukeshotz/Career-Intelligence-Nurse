'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, GraduationCap, RefreshCw, Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getTrackedOpportunities } from '@/lib/user-store';
import { GlobalSearchModal } from './GlobalSearchModal';

export function BottomNav() {
  const pathname = usePathname();
  const [trackedCount, setTrackedCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const items = getTrackedOpportunities();
    setTrackedCount(items.length);
  }, [pathname]);

  const isActive = (path: string) => {
    if (path === '/nursing') {
      return pathname === '/nursing' || pathname === '/';
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      <nav className="sc-tabbar">
        <Link href="/nursing" className={`sc-tab-item ${isActive('/nursing') ? 'active' : ''}`}>
          <Home size={22} color={isActive('/nursing') ? '#083262' : '#64748b'} />
          <span>Home</span>
        </Link>

        <Link href="/nursing/exams" className={`sc-tab-item ${isActive('/nursing/exams') ? 'active' : ''}`}>
          <GraduationCap size={22} color={isActive('/nursing/exams') ? '#083262' : '#64748b'} />
          <span>Exams</span>
        </Link>

        {/* Centre: Prominent Search Button */}
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="sc-tab-item"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '14px',
              background: 'var(--sc-navy-700)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 14px rgba(8,50,98,0.30)',
              marginTop: '-10px',
            }}
          >
            <Search size={20} color="#ffffff" />
          </div>
          <span style={{ color: 'var(--sc-navy-700)', fontWeight: 700, marginTop: '-2px' }}>Find</span>
        </button>

        <Link href="/nursing/jobs" className={`sc-tab-item ${isActive('/nursing/jobs') ? 'active' : ''}`}>
          <Briefcase size={22} color={isActive('/nursing/jobs') ? '#083262' : '#64748b'} />
          <span>Jobs</span>
        </Link>

        <Link href="/cycles" className={`sc-tab-item ${isActive('/cycles') ? 'active' : ''}`} style={{ position: 'relative' }}>
          <RefreshCw size={22} color={isActive('/cycles') ? '#083262' : '#64748b'} />
          <span>Tracked</span>
          {trackedCount > 0 && (
            <span
              style={{
                position: 'absolute',
                top: '4px',
                right: '8px',
                background: '#019035',
                color: '#ffffff',
                fontSize: '0.60rem',
                fontWeight: 800,
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {trackedCount}
            </span>
          )}
        </Link>
      </nav>

      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
