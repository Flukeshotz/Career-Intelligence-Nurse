'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Sparkles, MessageCircle } from 'lucide-react';

const MayaPanel = dynamic(() => import('@/components/maya/MayaPanel'), { ssr: false });

export function MayaFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="maya-fab-container"
        style={{
          position: 'fixed',
          bottom: '76px',
          right: '14px',
          zIndex: 90,
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
            background: 'linear-gradient(135deg, #019035 0%, #0baa45 100%)',
            color: '#ffffff',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 4px 14px rgba(1, 144, 53, 0.35)',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(1, 144, 53, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'none';
            e.currentTarget.style.boxShadow = '0 4px 14px rgba(1, 144, 53, 0.35)';
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

          <span style={{ fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.01em' }}>
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
