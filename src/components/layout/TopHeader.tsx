'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search } from 'lucide-react';
import { useEffect, useState } from 'react';
import { GlobalSearchModal } from './GlobalSearchModal';

export function TopHeader() {
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === '/nursing' || pathname === '/';

  // Global ⌘K shortcut
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
      <header
        style={{
          background: 'var(--sc-navy-900)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          height: '60px',
        }}
      >
        <div
          style={{
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            padding: '0 16px',
            maxWidth: '1120px',
            margin: '0 auto',
          }}
        >
          {/* Brand */}
          <Link
            href="/nursing"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                color: '#083262',
                fontSize: '1.1rem',
                flexShrink: 0,
                boxShadow: '0 2px 6px rgba(0,0,0,0.18)',
              }}
            >
              S
            </div>
            <div style={{ lineHeight: 1.15 }}>
              <div style={{ fontWeight: 800, fontSize: '1.05rem', letterSpacing: '-0.02em', color: '#ffffff' }}>
                Skill<span style={{ color: '#edb843' }}>Case</span>
              </div>
              <div style={{ fontSize: '0.56rem', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.02em' }}>
                NURSING
              </div>
            </div>
          </Link>

          {/* ── Search Bar (Shown on Subpages, Hidden on Homepage to Prevent Duplicate Search) ── */}
          {!isHomepage && (
            <button
              onClick={() => setSearchOpen(true)}
              style={{
                flex: 1,
                maxWidth: '480px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                borderRadius: '10px',
                padding: '8px 12px',
                cursor: 'pointer',
                transition: 'background 0.12s ease',
                height: '38px',
              }}
            >
              <Search size={14} color="rgba(255,255,255,0.55)" style={{ flexShrink: 0 }} />
              <span
                style={{
                  fontSize: '0.82rem',
                  color: 'rgba(255,255,255,0.55)',
                  fontFamily: 'inherit',
                  fontWeight: 500,
                  flex: 1,
                  textAlign: 'left',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                }}
              >
                Search exams, jobs, PYQs…
              </span>
              <span
                className="cmd-k-hint"
                style={{
                  fontSize: '0.66rem',
                  fontWeight: 700,
                  padding: '1px 6px',
                  borderRadius: '4px',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'rgba(255,255,255,0.45)',
                }}
              >
                ⌘K
              </span>
            </button>
          )}

          {/* ── User Profile / Passport Link ── */}
          <Link
            href="/profile"
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: 'rgba(255, 255, 255, 0.12)',
              border: '1.5px solid rgba(255, 255, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              textDecoration: 'none',
              flexShrink: 0,
            }}
            title="My Career Passport / Profile"
          >
            <img
              src="/maya-smiling.webp"
              alt="My Profile"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>
      </header>

      <GlobalSearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      <style>{`
        .cmd-k-hint { display: none; }
        @media (min-width: 640px) {
          .cmd-k-hint { display: inline; }
        }
      `}</style>
    </>
  );
}
