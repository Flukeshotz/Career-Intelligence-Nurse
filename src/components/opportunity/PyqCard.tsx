'use client';

import { useState } from 'react';
import { Download, ShieldCheck, Eye, ExternalLink } from 'lucide-react';
import { ExamPaper } from '@/lib/pyq-mock-data';
import { PaperViewerModal } from './PaperViewerModal';

export function PyqCard({ paper }: { paper: ExamPaper }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const isMock = paper.type === 'mock';

  return (
    <>
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1px solid #e2e8f0',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
          transition: 'all 0.12s ease',
        }}
      >
        {/* Top line: Exam Org + Tag */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: '#475569', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>{isMock ? '🎯' : '🏛️'}</span>
            <span>{paper.examName}</span>
            {paper.shift && <span style={{ color: '#94a3b8' }}>• {paper.shift}</span>}
          </div>

          <span
            style={{
              fontSize: '0.66rem',
              fontWeight: 800,
              padding: '2px 7px',
              borderRadius: '6px',
              background: isMock ? '#eff6ff' : '#f0fdf4',
              color: isMock ? '#1d4ed8' : '#166534',
              textTransform: 'uppercase',
              letterSpacing: '0.02em',
            }}
          >
            {isMock ? 'Mock Test' : `${paper.year} PYQ`}
          </span>
        </div>

        {/* Paper Title */}
        <div style={{ fontSize: '0.94rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.3 }}>
          {paper.title}
        </div>

        {/* Exam Metrics */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.74rem', color: '#64748b', flexWrap: 'wrap' }}>
          <span><strong>{paper.totalQuestions}</strong> MCQs</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span><strong>{paper.durationMinutes}</strong> Mins</span>
          <span style={{ color: '#cbd5e1' }}>•</span>
          <span style={{ color: '#16a34a', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
            <ShieldCheck size={13} />
            <span>Verified Key</span>
          </span>
        </div>

        {/* Action Buttons Grid (Strictly 50/50 Equal Height) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginTop: '2px' }}>
          <button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            style={{
              height: '40px',
              borderRadius: '10px',
              background: 'var(--sc-navy-900)',
              color: '#ffffff',
              border: 'none',
              fontSize: '0.78rem',
              fontWeight: 800,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 2px 6px rgba(8, 50, 98, 0.2)',
            }}
          >
            <Eye size={14} />
            <span>Practice CBT</span>
          </button>

          <a
            href={paper.pdfDownloadUrl || paper.officialSourceUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              height: '40px',
              borderRadius: '10px',
              background: '#f8fafc',
              color: 'var(--sc-navy-900)',
              border: '1.5px solid #cbd5e1',
              fontSize: '0.78rem',
              fontWeight: 800,
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
            }}
          >
            <Download size={14} />
            <span>Download PDF</span>
          </a>
        </div>
      </div>

      {isViewerOpen && (
        <PaperViewerModal
          paper={paper}
          isOpen={isViewerOpen}
          onClose={() => setIsViewerOpen(false)}
        />
      )}
    </>
  );
}
