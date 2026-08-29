'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { MessageSquare, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { MayaOpportunityContext } from '@/lib/maya-engine';

const MayaPanel = dynamic(() => import('./MayaPanel'), { ssr: false });

interface MayaCardProps {
  /** Optional title override */
  title?: string;
  /** Suggested prompt chips */
  suggestedPrompts?: string[];
  /** Page context */
  pageContext: 'norcet' | 'job' | 'exam' | 'profile' | 'cycles' | 'general';
  /** Opportunity context */
  opportunity?: MayaOpportunityContext;
}

const DEFAULT_PROMPTS = [
  '🎯 Cutoffs & Percentiles',
  '📋 Check Eligibility',
  '⏱️ Stage 1 & 2 Pattern',
  '📚 High-Yield Topics',
];

export default function MayaCard({
  title = 'Ask Maya Career Co-Pilot',
  suggestedPrompts = DEFAULT_PROMPTS,
  pageContext,
  opportunity,
}: MayaCardProps) {
  const [open, setOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>();

  const openWithQuestion = (q?: string) => {
    // Strip leading emoji or symbol characters if present
    const cleaned = q ? q.replace(/^[^\w\s?]+/i, '').trim() : undefined;
    setInitialQuestion(cleaned || q);
    setOpen(true);
  };

  return (
    <>
      <div
        onClick={() => openWithQuestion(undefined)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && openWithQuestion(undefined)}
        style={{
          background: 'linear-gradient(135deg, #091b33 0%, #061528 100%)',
          borderRadius: '16px',
          padding: '16px 18px',
          border: '1px solid rgba(59, 130, 246, 0.25)',
          boxShadow: '0 4px 18px rgba(6, 21, 40, 0.3)',
          cursor: 'pointer',
          transition: 'all 0.15s ease',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
        }}
      >
        {/* Top Row: Avatar + Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={{ position: 'relative', width: '42px', height: '42px', flexShrink: 0 }}>
            <img
              src="/maya-wave.webp"
              alt="Maya"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
                background: 'rgba(255,255,255,0.1)',
                border: '1.5px solid #60a5fa',
              }}
            />
            <span
              style={{
                position: 'absolute',
                bottom: '0',
                right: '0',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#22c55e',
                border: '2px solid #091b33',
              }}
            />
          </div>

          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.66rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                AI Career Co-Pilot
              </span>
              <span style={{ fontSize: '0.64rem', color: '#4ade80', fontWeight: 700 }}>
                ● Verified Source Engine
              </span>
            </div>
            <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: '#ffffff', margin: '2px 0 0 0', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {title}
            </h3>
          </div>
        </div>

        {/* Middle: Sleek Search Bar Mock */}
        <div
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '10px',
            padding: '8px 12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '8px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', minWidth: 0 }}>
            <MessageSquare size={14} color="#94a3b8" />
            <span style={{ fontSize: '0.78rem', color: '#94a3b8', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              Ask anything about eligibility, pattern, or cutoffs...
            </span>
          </div>
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '6px',
              background: '#3b82f6',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ArrowRight size={13} />
          </div>
        </div>

        {/* Bottom: Compact 1-Tap Quick Action Chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {suggestedPrompts.slice(0, 4).map((prompt) => (
            <button
              key={prompt}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                openWithQuestion(prompt);
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                color: '#e2e8f0',
                padding: '4px 10px',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: 600,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'background 0.12s ease',
              }}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      <MayaPanel
        isOpen={open}
        onClose={() => setOpen(false)}
        initialQuestion={initialQuestion}
        pageContext={pageContext}
        opportunity={opportunity}
      />
    </>
  );
}
