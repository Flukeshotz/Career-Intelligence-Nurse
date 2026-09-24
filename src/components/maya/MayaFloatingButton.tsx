'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import dynamic from 'next/dynamic';
import { Sparkles, MessageCircle } from 'lucide-react';

const MayaPanel = dynamic(() => import('@/components/maya/MayaPanel'), { ssr: false });

export function MayaFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [tucked, setTucked] = useState(false);
  const pathname = usePathname();

  // Get out of the way while reading: hide on scroll down, return on scroll up.
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      if (Math.abs(y - last) > 8) {
        setTucked(y > last && y > 120);
        last = y;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Suppress floating FAB on detail pages with full bottom docks
  const shouldHideFab =
    pathname?.includes('/nursing/exams/') ||
    pathname?.includes('/nursing/jobs/') ||
    pathname?.startsWith('/admin');

  if (shouldHideFab) {
    return null;
  }

  return (
    <>
      <div
        className="maya-fab-container"
        style={{
          position: 'fixed',
          bottom: 'calc(84px + env(safe-area-inset-bottom, 0px))',
          right: '14px',
          zIndex: 90,
          transform: tucked ? 'translateY(140px)' : 'none',
          opacity: tucked ? 0 : 1,
          transition: 'transform 0.25s ease, opacity 0.2s ease',
          pointerEvents: tucked ? 'none' : 'auto',
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 12px 6px 6px',
            borderRadius: '100px',
            background: 'linear-gradient(145deg, #1557d6 0%, #0b2a5b 100%)',
            color: '#ffffff',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 8px 20px rgba(21, 87, 214, 0.32)',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 24px rgba(21, 87, 214, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 8px 20px rgba(21, 87, 214, 0.32)';
          }}
        >
          <div
            style={{
              width: '26px',
              height: '26px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <img
              src="/maya-smiling.webp"
              alt="Maya AI"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <span className="maya-fab-label" style={{ fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.01em' }}>
            Ask Maya
          </span>
        </button>
      </div>

      <MayaPanel
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        pageContext="general"
      />

      <style>{`
        @media (min-width: 768px) {
          .maya-fab-container {
            bottom: 24px !important;
            right: 24px !important;
          }
        }
      `}</style>
    </>
  );
}
