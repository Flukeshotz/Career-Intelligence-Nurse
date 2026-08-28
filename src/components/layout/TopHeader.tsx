'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, Compass, Briefcase, GraduationCap, RefreshCw, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getTrackedOpportunities } from '@/lib/user-store';

export function TopHeader() {
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
    <header className="sc-header">
      <div
        className="wide-container"
        style={{
          height: '68px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Left: Brand Identity */}
        <Link href="/nursing" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              color: '#083262',
              fontSize: '1.25rem',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            S
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
                Skill<span style={{ color: '#edb843' }}>Case</span>
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  padding: '2px 8px',
                  background: 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  borderRadius: '200px',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                }}
              >
                Nursing
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: 'rgba(255, 255, 255, 0.75)', marginTop: '-1px' }}>
              Career & Recruitment Intelligence
            </div>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav-links">
          <Link
            href="/nursing"
            style={{
              fontSize: '0.9rem',
              fontWeight: isActive('/nursing') ? 700 : 500,
              color: isActive('/nursing') ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              borderBottom: isActive('/nursing') ? '2px solid #edb843' : '2px solid transparent',
              padding: '6px 0',
            }}
          >
            Home
          </Link>

          <Link
            href="/nursing/jobs"
            style={{
              fontSize: '0.9rem',
              fontWeight: isActive('/nursing/jobs') ? 700 : 500,
              color: isActive('/nursing/jobs') ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              borderBottom: isActive('/nursing/jobs') ? '2px solid #edb843' : '2px solid transparent',
              padding: '6px 0',
            }}
          >
            Jobs
          </Link>

          <Link
            href="/nursing/exams"
            style={{
              fontSize: '0.9rem',
              fontWeight: isActive('/nursing/exams') ? 700 : 500,
              color: isActive('/nursing/exams') ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              borderBottom: isActive('/nursing/exams') ? '2px solid #edb843' : '2px solid transparent',
              padding: '6px 0',
            }}
          >
            Exams
          </Link>

          <Link
            href="/cycles"
            style={{
              fontSize: '0.9rem',
              fontWeight: isActive('/cycles') ? 700 : 500,
              color: isActive('/cycles') ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              borderBottom: isActive('/cycles') ? '2px solid #edb843' : '2px solid transparent',
              padding: '6px 0',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>My Cycles</span>
            {trackedCount > 0 && (
              <span
                style={{
                  background: '#019035',
                  color: '#ffffff',
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  padding: '1px 6px',
                  borderRadius: '10px',
                }}
              >
                {trackedCount}
              </span>
            )}
          </Link>

          <Link
            href="/profile"
            style={{
              fontSize: '0.9rem',
              fontWeight: isActive('/profile') ? 700 : 500,
              color: isActive('/profile') ? '#ffffff' : 'rgba(255, 255, 255, 0.8)',
              borderBottom: isActive('/profile') ? '2px solid #edb843' : '2px solid transparent',
              padding: '6px 0',
            }}
          >
            Profile
          </Link>
        </nav>

        {/* Right Action: Verified Trust Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '200px',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#ffffff',
            }}
          >
            <ShieldCheck size={15} color="#0baa45" />
            <span>Official Verified Sources</span>
          </div>
        </div>
      </div>
    </header>
  );
}
