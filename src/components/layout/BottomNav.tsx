'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, GraduationCap, RefreshCw, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getTrackedOpportunities } from '@/lib/user-store';

export function BottomNav() {
  const pathname = usePathname();
  const [trackedCount, setTrackedCount] = useState(0);

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
    <nav className="sc-tabbar">
      <Link href="/nursing" className={`sc-tab-item ${isActive('/nursing') ? 'active' : ''}`}>
        <Home color={isActive('/nursing') ? '#083262' : '#64748b'} />
        <span>Home</span>
      </Link>

      <Link href="/nursing/jobs" className={`sc-tab-item ${isActive('/nursing/jobs') ? 'active' : ''}`}>
        <Briefcase color={isActive('/nursing/jobs') ? '#083262' : '#64748b'} />
        <span>Jobs</span>
      </Link>

      <Link href="/nursing/exams" className={`sc-tab-item ${isActive('/nursing/exams') ? 'active' : ''}`}>
        <GraduationCap color={isActive('/nursing/exams') ? '#083262' : '#64748b'} />
        <span>Exams</span>
      </Link>

      <Link href="/cycles" className={`sc-tab-item ${isActive('/cycles') ? 'active' : ''}`} style={{ position: 'relative' }}>
        <RefreshCw color={isActive('/cycles') ? '#083262' : '#64748b'} />
        <span>My Cycles</span>
        {trackedCount > 0 && (
          <span
            style={{
              position: 'absolute',
              top: '-2px',
              right: '6px',
              background: '#019035',
              color: '#ffffff',
              fontSize: '0.65rem',
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

      <Link href="/profile" className={`sc-tab-item ${isActive('/profile') ? 'active' : ''}`}>
        <User color={isActive('/profile') ? '#083262' : '#64748b'} />
        <span>Profile</span>
      </Link>
    </nav>
  );
}
