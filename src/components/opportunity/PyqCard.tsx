'use client';

import { useState } from 'react';
import { Download, ExternalLink, PlayCircle } from 'lucide-react';
import { ExamPaper } from '@/lib/pyq-mock-data';
import { PaperViewerModal } from './PaperViewerModal';

/** Previous-year paper in the blog card style: year chip, title, facts line, one primary action. */
export function PyqCard({ paper }: { paper: ExamPaper }) {
  // pdfDownloadUrl is '#' when no file is hosted; never present that as a working download.
  const hasPdf = !!paper.pdfDownloadUrl && paper.pdfDownloadUrl !== '#';
  const sourceHref = hasPdf ? paper.pdfDownloadUrl : paper.officialSourceUrl;
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const isMock = paper.type === 'mock';
  // "Stage 1 Prelims (15 Sep 2024 / NORCET 7)" -> "Stage 1 Prelims · 15 Sep 2024"
  const sitting = (paper.shift ?? '').replace(/\s*\(([^/)]+)(?:\/[^)]*)?\)\s*$/, (_, d) => ` · ${d.trim()}`);
  const title = paper.title.replace(/\s*Official Question Paper\s*(?:&|and)\s*Key\s*$/i, '');

  return (
    <>
      <div className="pyq-card">
        <div className="pyq-year" aria-hidden="true">
          <b>{isMock ? 'Mock' : paper.year}</b>
          <span>{isMock ? 'test' : 'paper'}</span>
        </div>

        <div className="pyq-body">
          <b className="pyq-title">{title}</b>
          {sitting && <span className="pyq-org">{sitting}</span>}
          <span className="pyq-facts">
            {paper.totalQuestions} questions · {paper.durationMinutes} minutes
            {isMock ? '' : ' · Official paper'}{paper.officialKeyAvailable ? ' with answer key' : ''}
          </span>

          <div className="pyq-actions">
            <button type="button" className="pyq-btn pyq-btn--primary" onClick={() => setIsViewerOpen(true)}>
              <PlayCircle size={16} aria-hidden="true" />
              Practise this paper
            </button>
            {sourceHref && sourceHref !== '#' && (
              <a className="pyq-btn pyq-btn--link" href={sourceHref} target="_blank" rel="noopener noreferrer">
                {hasPdf ? <Download size={15} aria-hidden="true" /> : <ExternalLink size={15} aria-hidden="true" />}
                {hasPdf ? 'Download PDF' : 'Official source'}
              </a>
            )}
          </div>
        </div>
      </div>

      {isViewerOpen && <PaperViewerModal paper={paper} isOpen={isViewerOpen} onClose={() => setIsViewerOpen(false)} />}
    </>
  );
}
