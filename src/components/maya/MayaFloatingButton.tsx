'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { Sparkles } from 'lucide-react';

const MayaPanel = dynamic(() => import('@/components/maya/MayaPanel'), { ssr: false });

export function MayaFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="maya-fab-container"
        style={{
          position: 'fixed',
          bottom: '80px',
          right: '16px',
          zIndex: 90,
        }}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 14px 8px 8px',
            borderRadius: '100px',
            background: 'linear-gradient(135deg, #019035 0%, #0baa45 100%)',
            color: '#ffffff',
            border: '2px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 6px 20px rgba(1, 144, 53, 0.4)',
            cursor: 'pointer',
            transition: 'all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)',
            outline: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.06) translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 10px 28px rgba(1, 144, 53, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(1, 144, 53, 0.4)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.96)';
          }}
        >
          <div
            style={{
              position: 'relative',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              overflow: 'hidden',
              background: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
              flexShrink: 0,
            }}
          >
            <img
              src="/maya-smiling.webp"
              alt="Maya AI Guide"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left' }}>
            <span style={{ fontSize: '0.82rem', fontWeight: 800, lineHeight: 1.1, display: 'flex', alignItems: 'center', gap: '3px' }}>
              Ask Maya
              <Sparkles size={11} color="#fef08a" />
            </span>
            <span style={{ fontSize: '0.62rem', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
              Career AI Guide
            </span>
          </div>
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
            bottom: 28px !important;
            right: 28px !important;
          }
        }
      `}</style>
    </>
  );
}
