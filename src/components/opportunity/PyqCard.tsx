'use client';

import { useState } from 'react';
import { FileText, Download, CheckCircle2, Clock, HelpCircle, Eye, ExternalLink, ShieldCheck } from 'lucide-react';
import { ExamPaper } from '@/lib/pyq-mock-data';
import { PaperViewerModal } from './PaperViewerModal';

export function PyqCard({ paper }: { paper: ExamPaper }) {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const isMock = paper.type === 'mock';
  const badgeBg = isMock ? 'rgba(16, 102, 200, 0.1)' : 'rgba(1, 144, 53, 0.1)';
  const badgeColor = isMock ? 'var(--sc-blue-600)' : 'var(--sc-green-600)';

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
          borderRadius: '16px',
          border: '1.5px solid var(--sc-line-200)',
          padding: '16px 18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          transition: 'all 0.15s ease',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
        }}
      >
        {/* Accent strip */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: isMock
              ? 'linear-gradient(90deg, #1066c8 0%, #3b82f6 100%)'
              : 'linear-gradient(90deg, #019035 0%, #10b981 100%)',
          }}
        />

        {/* Top Meta */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span
              style={{
                fontSize: '0.70rem',
                fontWeight: 800,
                padding: '3px 8px',
                borderRadius: '6px',
                background: badgeBg,
                color: badgeColor,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
              }}
            >
              {isMock ? '🎯 Official Mock Test' : `📄 ${paper.year} Official PYQ`}
            </span>
            {paper.shift && (
              <span style={{ fontSize: '0.72rem', color: 'var(--sc-ink-500)', fontWeight: 500 }}>
                {paper.shift}
              </span>
            )}
          </div>

          <span
            style={{
              fontSize: '0.68rem',
              fontWeight: 700,
              color: 'var(--sc-navy-700)',
              background: 'var(--sc-surface-secondary)',
              padding: '3px 8px',
              borderRadius: '100px',
            }}
          >
            {paper.examName}
          </span>
        </div>

        {/* Title */}
        <div>
          <h4 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.35, marginBottom: '4px' }}>
            {paper.title}
          </h4>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: 'var(--sc-ink-600)', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <HelpCircle size={13} color="var(--sc-navy-600)" />
              <strong>{paper.totalQuestions}</strong> MCQs
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Clock size={13} color="var(--sc-navy-600)" />
              <strong>{paper.durationMinutes}</strong> Mins
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--sc-green-600)', fontWeight: 700 }}>
              <ShieldCheck size={14} color="var(--sc-green-600)" />
              Official Key Verified
            </span>
            {sourceDomain && (
              <a
                href={paper.officialSourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '3px',
                  fontSize: '0.72rem',
                  color: 'var(--sc-navy-700)',
                  fontWeight: 600,
                  textDecoration: 'none',
                  background: '#f1f5f9',
                  padding: '2px 6px',
                  borderRadius: '4px',
                }}
              >
                <span>🏛️ {sourceDomain}</span>
                <ExternalLink size={10} />
              </a>
            )}
          </div>
        </div>

        {/* Highlights */}
        {paper.keyHighlights && paper.keyHighlights.length > 0 && (
          <div style={{ background: 'var(--sc-surface-secondary)', borderRadius: '10px', padding: '10px 12px' }}>
            <div style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-ink-400)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '4px' }}>
              Official Paper Metadata
            </div>
            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.78rem', color: 'var(--sc-ink-700)', lineHeight: 1.5 }}>
              {paper.keyHighlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Row — 100% In-App Direct Download & In-App Viewer */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '2px', paddingTop: '10px', borderTop: '1px solid var(--sc-line-100)' }}>
          <button
            type="button"
            onClick={() => setIsViewerOpen(true)}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              background: isMock ? 'var(--sc-blue-600)' : 'var(--sc-navy-700)',
              color: '#ffffff',
              padding: '10px 16px',
              borderRadius: '8px',
              fontWeight: 800,
              fontSize: '0.82rem',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(8,50,98,0.2)',
              transition: 'all 0.12s ease',
            }}
          >
            <Download size={15} />
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
              padding: '9px 12px',
              borderRadius: '8px',
              border: '1.5px solid var(--sc-line-200)',
              background: '#ffffff',
              color: 'var(--sc-navy-700)',
              fontWeight: 700,
              fontSize: '0.78rem',
              cursor: 'pointer',
            }}
          >
            <Eye size={14} />
            <span>View In-App</span>
          </button>
        </div>
      </div>

      {/* Direct In-App Paper Viewer & PDF Exporter */}
      <PaperViewerModal
        paper={paper}
        isOpen={isViewerOpen}
        onClose={() => setIsViewerOpen(false)}
      />
    </>
  );
}
