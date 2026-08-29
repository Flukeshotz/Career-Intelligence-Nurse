'use client';

import { useState } from 'react';
import { X, Download, CheckCircle2, Clock, HelpCircle, FileText, Eye, EyeOff, Sparkles, Printer } from 'lucide-react';
import { ExamPaper } from '@/lib/pyq-mock-data';
import { getFullPaperData, FullPaperData, QuestionItem } from '@/lib/pyq-questions-dataset';

interface PaperViewerModalProps {
  paper: ExamPaper | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PaperViewerModal({ paper, isOpen, onClose }: PaperViewerModalProps) {
  const [showAnswers, setShowAnswers] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  if (!isOpen || !paper) return null;

  const paperData: FullPaperData = getFullPaperData(paper.id);

  const filteredQuestions = selectedSubject === 'all'
    ? paperData.questions
    : paperData.questions.filter(q => q.subject.toLowerCase().includes(selectedSubject.toLowerCase()));

  // 1-Click Direct In-App PDF Generation (No 3rd-party redirect!)
  const handleDirectDownloadPdf = () => {
    setIsGeneratingPdf(true);

    try {
      // Build printable HTML document for direct browser download / print to PDF
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Please allow popups to download this official paper PDF directly.');
        setIsGeneratingPdf(false);
        return;
      }

      const questionsHtml = paperData.questions.map((q, idx) => `
        <div style="margin-bottom: 18px; padding-bottom: 14px; border-bottom: 1px solid #e2e8f0; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748b; font-weight: bold; margin-bottom: 4px;">
            <span>QUESTION ${q.qNo}</span>
            <span>${q.subject}</span>
          </div>
          <div style="font-size: 13px; font-weight: 600; color: #0f172a; line-height: 1.45; margin-bottom: 8px;">
            ${q.question}
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 12px; margin-bottom: 8px;">
            ${q.options.map(opt => `
              <div style="padding: 6px 10px; border-radius: 4px; border: 1px solid ${opt.key === q.correctOption ? '#16a34a' : '#cbd5e1'}; background: ${opt.key === q.correctOption ? '#f0fdf4' : '#ffffff'}; font-weight: ${opt.key === q.correctOption ? 'bold' : 'normal'}; color: ${opt.key === q.correctOption ? '#15803d' : '#334155'};">
                <strong>(${opt.key})</strong> ${opt.text} ${opt.key === q.correctOption ? '✓ [OFFICIAL KEY]' : ''}
              </div>
            `).join('')}
          </div>
          <div style="background: #f8fafc; border-left: 3px solid #083262; padding: 6px 10px; font-size: 11px; color: #334155; line-height: 1.4;">
            <strong>Clinical Rationale / Explanation:</strong> ${q.rationale}
          </div>
        </div>
      `).join('');

      const docContent = `
        <!DOCTYPE html>
        <html>
          <head>
            <title>${paperData.title} — SkillCase Verified Paper</title>
            <meta charset="utf-8" />
            <style>
              @page { size: A4; margin: 15mm; }
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin: 0; padding: 10px; }
              .header { text-align: center; border-bottom: 2px solid #083262; padding-bottom: 12px; margin-bottom: 16px; }
              .header h1 { font-size: 18px; margin: 0 0 4px; color: #083262; }
              .header .meta { font-size: 12px; color: #475569; }
              .badge { display: inline-block; padding: 2px 8px; background: #e0f2fe; color: #0369a1; border-radius: 4px; font-size: 10px; font-weight: bold; margin: 4px; }
              @media print {
                body { padding: 0; }
                .no-print { display: none; }
              }
            </style>
          </head>
          <body>
            <div class="header">
              <div style="font-size: 10px; font-weight: bold; color: #0284c7; letter-spacing: 1px; text-transform: uppercase;">SKILLCASE OFFICIAL EXAMINATION REPOSITORY</div>
              <h1>${paperData.title}</h1>
              <div class="meta">
                <span><strong>Exam:</strong> ${paperData.examName}</span> | 
                <span><strong>Shift:</strong> ${paperData.shift}</span> | 
                <span><strong>Total Marks:</strong> ${paperData.totalMarks}</span> | 
                <span><strong>Negative Marking:</strong> ${paperData.negativeMarking}</span>
              </div>
              <div style="margin-top: 6px;">
                <span class="badge">✓ Official Answer Key Verified</span>
                <span class="badge">✓ Detailed Clinical Explanations</span>
                <span class="badge">Direct Download from skillcase.in</span>
              </div>
            </div>

            <div class="content">
              ${questionsHtml}
            </div>

            <div style="text-align: center; font-size: 10px; color: #94a3b8; margin-top: 24px; border-top: 1px solid #e2e8f0; padding-top: 8px;">
              SkillCase Nursing Intelligence — Downloaded on ${new Date().toLocaleDateString('en-IN')} — Verified official exam archive.
            </div>

            <script>
              window.onload = function() {
                window.print();
              };
            </script>
          </body>
        </html>
      `;

      printWindow.document.open();
      printWindow.document.write(docContent);
      printWindow.document.close();
    } catch (err) {
      console.error('Error generating PDF:', err);
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(0, 0, 0, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '12px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '20px',
          width: '100%',
          maxWidth: '840px',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.3)',
          overflow: 'hidden',
          animation: 'fadeInScale 0.18s ease-out',
        }}
      >
        {/* ── TOP HEADER ── */}
        <div
          style={{
            background: 'linear-gradient(135deg, var(--sc-navy-900) 0%, #0d2f5e 100%)',
            color: '#ffffff',
            padding: '18px 20px',
            position: 'relative',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.70rem', fontWeight: 800, background: '#edb843', color: '#002856', padding: '3px 8px', borderRadius: '4px', textTransform: 'uppercase' }}>
                Official {paper.year} Paper
              </span>
              <span style={{ fontSize: '0.70rem', fontWeight: 700, background: 'rgba(1, 144, 53, 0.3)', color: '#86efac', padding: '3px 8px', borderRadius: '4px' }}>
                ✓ Official Key Verified
              </span>
            </div>

            <button
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.12)',
                border: 'none',
                color: '#ffffff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <X size={18} />
            </button>
          </div>

          <h3 style={{ fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.3, marginBottom: '4px' }}>
            {paper.title}
          </h3>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: '#cbd5e1', flexWrap: 'wrap' }}>
            <span><strong>Exam:</strong> {paper.examName}</span>
            <span>•</span>
            <span><strong>Total:</strong> {paper.totalQuestions} Questions</span>
            <span>•</span>
            <span><strong>Duration:</strong> {paper.durationMinutes} Mins</span>
            <span>•</span>
            <span style={{ color: '#fca5a5' }}><strong>Negative:</strong> {paperData.negativeMarking}</span>
          </div>
        </div>

        {/* ── ACTION TOOLBAR ── */}
        <div
          style={{
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            padding: '10px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          {/* Answer Key Toggle */}
          <button
            type="button"
            onClick={() => setShowAnswers(!showAnswers)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 12px',
              borderRadius: '8px',
              fontSize: '0.78rem',
              fontWeight: 700,
              background: showAnswers ? '#e0f2fe' : '#ffffff',
              color: showAnswers ? '#0369a1' : 'var(--sc-ink-700)',
              border: showAnswers ? '1px solid #7dd3fc' : '1px solid #cbd5e1',
              cursor: 'pointer',
            }}
          >
            {showAnswers ? <Eye size={14} /> : <EyeOff size={14} />}
            <span>{showAnswers ? 'Official Answers Shown' : 'Test Mode (Answers Hidden)'}</span>
          </button>

          {/* Direct 1-Click PDF Download Button (ZERO external redirect!) */}
          <button
            type="button"
            onClick={handleDirectDownloadPdf}
            disabled={isGeneratingPdf}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              fontSize: '0.80rem',
              fontWeight: 800,
              background: 'var(--sc-green-600)',
              color: '#ffffff',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(1, 144, 53, 0.3)',
            }}
          >
            <Download size={14} />
            <span>{isGeneratingPdf ? 'Generating PDF…' : 'Download Complete PDF + Key'}</span>
          </button>
        </div>

        {/* ── SUBJECT FILTER STRIP ── */}
        <div
          style={{
            padding: '8px 18px',
            background: '#ffffff',
            borderBottom: '1px solid #f1f5f9',
            display: 'flex',
            gap: '6px',
            overflowX: 'auto',
          }}
        >
          <button
            type="button"
            onClick={() => setSelectedSubject('all')}
            style={{
              padding: '4px 10px',
              borderRadius: '100px',
              fontSize: '0.72rem',
              fontWeight: selectedSubject === 'all' ? 800 : 600,
              background: selectedSubject === 'all' ? 'var(--sc-navy-700)' : '#f1f5f9',
              color: selectedSubject === 'all' ? '#ffffff' : 'var(--sc-ink-700)',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            All Subjects ({paperData.questions.length})
          </button>

          {paperData.subjectsSummary.map(s => (
            <button
              key={s.name}
              type="button"
              onClick={() => setSelectedSubject(s.name)}
              style={{
                padding: '4px 10px',
                borderRadius: '100px',
                fontSize: '0.72rem',
                fontWeight: selectedSubject === s.name ? 800 : 600,
                background: selectedSubject === s.name ? 'var(--sc-navy-700)' : '#f1f5f9',
                color: selectedSubject === s.name ? '#ffffff' : 'var(--sc-ink-700)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* ── QUESTIONS LIST (Scrollable) ── */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background: '#f8fafc',
          }}
        >
          {filteredQuestions.map((q) => (
            <div
              key={q.qNo}
              style={{
                background: '#ffffff',
                borderRadius: '14px',
                border: '1px solid #e2e8f0',
                padding: '16px 18px',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.02)',
              }}
            >
              {/* Question Number + Domain Tag */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', flexWrap: 'wrap', gap: '6px' }}>
                <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '2px 8px', borderRadius: '4px' }}>
                  Q{q.qNo} of {paper.totalQuestions}
                </span>
                <span style={{ fontSize: '0.70rem', color: '#64748b', fontWeight: 600 }}>
                  {q.subject}
                </span>
              </div>

              {/* Question Text */}
              <div style={{ fontSize: '0.94rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.45, marginBottom: '14px' }}>
                {q.question}
              </div>

              {/* 4 Options Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '8px', marginBottom: '12px' }}>
                {q.options.map((opt) => {
                  const isCorrect = showAnswers && opt.key === q.correctOption;
                  return (
                    <div
                      key={opt.key}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '8px',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        border: isCorrect ? '2px solid #16a34a' : '1px solid #e2e8f0',
                        background: isCorrect ? '#f0fdf4' : '#ffffff',
                        transition: 'all 0.12s ease',
                      }}
                    >
                      <span
                        style={{
                          width: '22px',
                          height: '22px',
                          borderRadius: '50%',
                          background: isCorrect ? '#16a34a' : '#f1f5f9',
                          color: isCorrect ? '#ffffff' : '#475569',
                          fontWeight: 800,
                          fontSize: '0.72rem',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        {opt.key}
                      </span>
                      <span
                        style={{
                          fontSize: '0.84rem',
                          color: isCorrect ? '#15803d' : '#334155',
                          fontWeight: isCorrect ? 700 : 500,
                          lineHeight: 1.35,
                        }}
                      >
                        {opt.text}
                      </span>
                      {isCorrect && (
                        <CheckCircle2 size={16} color="#16a34a" style={{ marginLeft: 'auto', flexShrink: 0 }} />
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Clinical Rationale Box */}
              {showAnswers && (
                <div
                  style={{
                    background: '#f8fafc',
                    borderLeft: '3px solid var(--sc-navy-700)',
                    padding: '10px 12px',
                    borderRadius: '0 8px 8px 0',
                    fontSize: '0.80rem',
                    color: '#334155',
                    lineHeight: 1.5,
                  }}
                >
                  <div style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '2px' }}>
                    Official AIIMS / Board Rationale
                  </div>
                  {q.rationale}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── MODAL FOOTER ── */}
        <div
          style={{
            padding: '12px 20px',
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>
            {paperData.officialKeyNotification}
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '7px 16px',
              borderRadius: '8px',
              background: '#f1f5f9',
              color: '#334155',
              fontWeight: 700,
              fontSize: '0.80rem',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>

      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
