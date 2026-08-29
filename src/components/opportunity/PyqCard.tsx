'use client';

import { useState } from 'react';
import { Download, CheckCircle2, Clock, HelpCircle, Eye, ExternalLink, ShieldCheck } from 'lucide-react';
import { ExamPaper } from '@/lib/pyq-mock-data';
import { PaperViewerModal } from './PaperViewerModal';

export function PyqCard({ paper }: { paper: ExamPaper }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const isMock = paper.type === 'mock';

  let sourceDomain = '';
  try {
    if (paper.officialSourceUrl && paper.officialSourceUrl !== '#') {
      sourceDomain = new URL(paper.officialSourceUrl).hostname.replace('www.', '');
    }
  } catch (e) {
    sourceDomain = '';
  }

  return (
    <>
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'all 0.12s ease',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
        }}
      >
        {/* Row 1: Tag & Domain */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '6px',
                background: isMock ? '#eff6ff' : '#f0fdf4',
                color: isMock ? '#1e40af' : '#166534',
                textTransform: 'uppercase',
                letterSpacing: '0.03em',
              }}
            >
              {isMock ? '🎯 Mock Test' : `📄 ${paper.year} PYQ`}
            </span>

            {paper.shift && (
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>
                {paper.shift}
              </span>
            )}
          </div>

          {sourceDomain && (
            <a
              href={paper.officialSourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '3px',
                fontSize: '0.70rem',
                color: '#475569',
                fontWeight: 600,
                textDecoration: 'none',
                background: '#f8fafc',
                padding: '2px 6px',
                borderRadius: '4px',
                border: '1px solid #e2e8f0',
              }}
            >
              <span>🏛️ {sourceDomain}</span>
              <ExternalLink size={9} />
            </a>
          )}
        </div>

        {/* Row 2: Title */}
        <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>
          {paper.title}
        </div>

        {/* Row 3: Meta info */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.74rem', color: '#64748b', flexWrap: 'wrap' }}>
          <span><strong>{paper.totalQuestions}</strong> MCQs</span>
          <span>•</span>
          <span><strong>{paper.durationMinutes}</strong> Mins</span>
          <span>•</span>
          <span style={{ color: '#16a34a', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <ShieldCheck size={13} />
            Verified Answer Key
          </span>
        </div>

        {/* Row 4: Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '4px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
          <button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              background: 'var(--sc-navy-700)',
              color: '#ffffff',
              padding: '8px 12px',
              borderRadius: '8px',
              fontWeight: 700,
              fontSize: '0.78rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(8, 50, 98, 0.15)',
            }}
          >
            <Download size={13} />
            <span>Download Paper &amp; Key (PDF)</span>
          </button>

          <button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '4px',
              padding: '7px 10px',
              borderRadius: '8px',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              color: '#334155',
              fontWeight: 700,
              fontSize: '0.76rem',
              cursor: 'pointer',
            }}
          >
            <Eye size={13} />
            <span>View In-App</span>
          </button>
        </div>
      </div>

      <PaperViewerModal
        paper={paper}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
}
