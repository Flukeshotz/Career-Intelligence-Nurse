'use client';

import React from 'react';
import { HelpCircle, Users, Calendar, FileCheck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface StructuredHighlightsProps {
  descriptionSimple?: string;
  title?: string;
}

export function StructuredHighlights({ descriptionSimple, title = 'Key Opportunity Highlights' }: StructuredHighlightsProps) {
  if (!descriptionSimple) return null;

  // Parse structured Q&A sections from the text
  const sections: { title: string; content: string; icon: string; badgeColor: string }[] = [];

  const rawBlocks = descriptionSimple.split(/\n\n+/);

  rawBlocks.forEach((block) => {
    const trimmed = block.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase().startsWith('what is this?')) {
      sections.push({
        title: 'Vacancy & Overview',
        content: trimmed.replace(/^what is this\?\s*/i, '').trim(),
        icon: '📌',
        badgeColor: '#e0f2fe',
      });
    } else if (trimmed.toLowerCase().startsWith('who can apply?')) {
      sections.push({
        title: 'Who Can Apply',
        content: trimmed.replace(/^who can apply\?\s*/i, '').trim(),
        icon: '🎓',
        badgeColor: '#f0fdf4',
      });
    } else if (trimmed.toLowerCase().startsWith('important dates:')) {
      sections.push({
        title: 'Important Timeline',
        content: trimmed.replace(/^important dates:\s*/i, '').trim(),
        icon: '📅',
        badgeColor: '#fef3c7',
      });
    } else if (trimmed.toLowerCase().startsWith('what do you need?')) {
      sections.push({
        title: 'Required Documents',
        content: trimmed.replace(/^what do you need\?\s*/i, '').trim(),
        icon: '📋',
        badgeColor: '#f3e8ff',
      });
    } else if (trimmed.toLowerCase().startsWith('what happens next?')) {
      sections.push({
        title: 'Selection Process',
        content: trimmed.replace(/^what happens next\?\s*/i, '').trim(),
        icon: '🚀',
        badgeColor: '#fee2e2',
      });
    } else {
      // General paragraph
      sections.push({
        title: 'Summary',
        content: trimmed,
        icon: 'ℹ️',
        badgeColor: '#f1f5f9',
      });
    }
  });

  return (
    <div
      style={{
        background: '#ffffff',
        borderRadius: '14px',
        border: '1px solid var(--sc-line-200)',
        padding: '18px 20px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
      }}
    >
      <div style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '2px' }}>
        Plain-Language Breakdown
      </div>
      <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '0 0 14px 0' }}>
        {title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {sections.map((sec, idx) => (
          <div
            key={idx}
            style={{
              background: 'var(--sc-surface-secondary)',
              border: '1px solid var(--sc-line-200)',
              borderRadius: '10px',
              padding: '10px 12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
              <span style={{ fontSize: '0.90rem' }}>{sec.icon}</span>
              <span style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                {sec.title}
              </span>
            </div>
            <div style={{ fontSize: '0.78rem', color: '#334155', lineHeight: 1.5, paddingLeft: '22px' }}>
              {sec.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
