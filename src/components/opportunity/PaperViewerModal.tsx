'use client';

import { useState } from 'react';
import { X, Download, CheckCircle2, Clock, HelpCircle, FileText, Eye, EyeOff, ShieldCheck, Check } from 'lucide-react';
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
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});

  if (!isOpen || !paper) return null;

  const paperData: FullPaperData = getFullPaperData(paper.id);

  const subjects = [
    { key: 'all', label: `All (${paperData.questions.length})` },
    { key: 'medical-surgical', label: 'Med-Surg' },
    { key: 'obstetrics', label: 'OBG' },
    { key: 'child health', label: 'Pediatrics' },
    { key: 'fundamentals', label: 'Fundamentals' },
    { key: 'community', label: 'Community' },
    { key: 'pharmacology', label: 'Pharma' },
  ];

  const filteredQuestions = selectedSubject === 'all'
    ? paperData.questions
    : paperData.questions.filter(q => q.subject.toLowerCase().includes(selectedSubject.toLowerCase()));

  const handleSelectOption = (qNo: number, key: string) => {
    setUserAnswers(prev => ({ ...prev, [qNo]: key }));
  };

  // Direct In-App Printable PDF Generator
  const handleDirectDownloadPdf = () => {
    setIsGeneratingPdf(true);

    try {
      const printWindow = window.open('', '_blank');
      if (!printWindow) {
        alert('Please allow popups in your browser to print/download the official PDF directly.');
        setIsGeneratingPdf(false);
        return;
      }

      const questionsHtml = paperData.questions.map((q) => `
        <div style="margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid #e2e8f0; page-break-inside: avoid;">
          <div style="display: flex; justify-content: space-between; font-size: 11px; color: #64748b; font-weight: 700; margin-bottom: 4px;">
            <span>Q${q.qNo}</span>
            <span>${q.subject}</span>
          </div>
          <div style="font-size: 13px; font-weight: 600; color: #0f172a; line-height: 1.45; margin-bottom: 8px;">
            ${q.question}
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; font-size: 12px; margin-bottom: 8px;">
            ${q.options.map(opt => `
              <div style="padding: 6px 10px; border-radius: 4px; border: 1px solid ${opt.key === q.correctOption ? '#16a34a' : '#cbd5e1'}; background: ${opt.key === q.correctOption ? '#f0fdf4' : '#ffffff'}; font-weight: ${opt.key === q.correctOption ? 'bold' : 'normal'}; color: ${opt.key === q.correctOption ? '#15803d' : '#334155'};">
                <strong>(${opt.key})</strong> ${opt.text} ${opt.key === q.correctOption ? '✓ [OFFICIAL ANSWER]' : ''}
              </div>
            `).join('')}
          </div>
          <div style="background: #f8fafc; border-left: 3px solid #083262; padding: 6px 10px; font-size: 11px; color: #334155; line-height: 1.4;">
            <strong>Official Rationale:</strong> ${q.rationale}
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
              @page { size: A4; margin: 12mm; }
              body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: #0f172a; margin: 0; padding: 10px; }
              .header { text-align: center; border-bottom: 2px solid #083262; padding-bottom: 10px; margin-bottom: 14px; }
              .header h1 { font-size: 16px; margin: 0 0 4px; color: #083262; }
              .header .meta { font-size: 11px; color: #475569; }
              .badge { display: inline-block; padding: 2px 6px; background: #e0f2fe; color: #0369a1; border-radius: 4px; font-size: 10px; font-weight: bold; margin: 2px; }
              @media print { body { padding: 0; } }
            </style>
          </head>
          <body>
            <div class="header">
              <div style="font-size: 9px; font-weight: bold; color: #0284c7; letter-spacing: 1px; text-transform: uppercase;">SKILLCASE OFFICIAL EXAMINATION REPOSITORY</div>
              <h1>${paperData.title}</h1>
              <div class="meta">
                <span><strong>Exam:</strong> ${paperData.examName}</span> | 
                <span><strong>Shift:</strong> ${paperData.shift}</span> | 
                <span><strong>Total:</strong> ${paperData.totalMarks} MCQs</span> | 
                <span><strong>Negative Marking:</strong> ${paperData.negativeMarking}</span>
              </div>
            </div>
            <div>${questionsHtml}</div>
            <script>window.onload = function() { window.print(); };</script>
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
        background: 'rgba(15, 23, 42, 0.75)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          width: '100%',
          maxWidth: '820px',
          height: '90vh',
          maxHeight: '900px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          overflow: 'hidden',
        }}
      >
        {/* ── 1. CLEAN SLEEK HEADER ── */}
        <div
          style={{
            padding: '16px 20px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            background: '#ffffff',
            flexShrink: 0,
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {paper.title}
              </h3>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#15803d', background: '#f0fdf4', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                ✓ Official Key
              </span>
            </div>
            <div style={{ fontSize: '0.74rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span>{paper.examName}</span>
              <span>•</span>
              <span>{paper.totalQuestions} MCQs</span>
              <span>•</span>
              <span>{paper.durationMinutes} Mins</span>
              <span>•</span>
              <span style={{ color: '#dc2626' }}>{paperData.negativeMarking} Neg</span>
            </div>
          </div>

          {/* Close Icon Button */}
          <button
            onClick={onClose}
            type="button"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '8px',
              background: '#f1f5f9',
              border: 'none',
              color: '#475569',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* ── 2. SUB-BAR: CONTROLS & SUBJECT FILTER PILLS ── */}
        <div
          style={{
            padding: '10px 16px',
            background: '#f8fafc',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '10px',
            flexWrap: 'wrap',
            flexShrink: 0,
          }}
        >
          {/* Filter Pills with clean horizontal scroll */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              overflowX: 'auto',
              scrollbarWidth: 'none',
              paddingBottom: '2px',
              flex: 1,
              minWidth: '240px',
            }}
          >
            {subjects.map(s => {
              const isActive = selectedSubject === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  onClick={() => setSelectedSubject(s.key)}
                  style={{
                    padding: '5px 12px',
                    borderRadius: '20px',
                    fontSize: '0.72rem',
                    fontWeight: isActive ? 700 : 500,
                    background: isActive ? '#0f172a' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    border: isActive ? '1px solid #0f172a' : '1px solid #cbd5e1',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'all 0.12s ease',
                  }}
                >
                  {s.label}
                </button>
              );
            })}
          </div>

          {/* Actions: Answer Toggle + PDF Download */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
            <button
              type="button"
              onClick={() => setShowAnswers(!showAnswers)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 11px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 600,
                background: showAnswers ? '#e0f2fe' : '#ffffff',
                color: showAnswers ? '#0369a1' : '#475569',
                border: showAnswers ? '1px solid #7dd3fc' : '1px solid #cbd5e1',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {showAnswers ? <Eye size={13} /> : <EyeOff size={13} />}
              <span>{showAnswers ? 'Answers: ON' : 'Answers: OFF'}</span>
            </button>

            <button
              type="button"
              onClick={handleDirectDownloadPdf}
              disabled={isGeneratingPdf}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 700,
                background: '#0f766e',
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              <Download size={13} />
              <span>{isGeneratingPdf ? 'Generating…' : 'PDF'}</span>
            </button>
          </div>
        </div>

        {/* ── 3. SCROLLABLE QUESTION LIST ── */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            background: '#f8fafc',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          {filteredQuestions.map((q) => {
            const userChosen = userAnswers[q.qNo];
            const isCorrect = userChosen === q.correctOption;

            return (
              <div
                key={q.qNo}
                style={{
                  background: '#ffffff',
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  padding: '16px',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
                }}
              >
                {/* Question Header */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', gap: '8px' }}>
                  <span style={{ fontSize: '0.70rem', fontWeight: 800, background: '#f1f5f9', color: '#334155', padding: '2px 7px', borderRadius: '6px' }}>
                    Q{q.qNo} of {paper.totalQuestions}
                  </span>
                  <span style={{ fontSize: '0.70rem', fontWeight: 600, color: '#64748b' }}>
                    {q.subject}
                  </span>
                </div>

                {/* Question Text */}
                <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.45, marginBottom: '12px' }}>
                  {q.question}
                </div>

                {/* Options List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '10px' }}>
                  {q.options.map((opt) => {
                    const isOptionCorrect = opt.key === q.correctOption;
                    const isOptionSelected = userChosen === opt.key;

                    let optionBorder = '#e2e8f0';
                    let optionBg = '#ffffff';
                    let optionColor = '#334155';

                    if (showAnswers) {
                      if (isOptionCorrect) {
                        optionBorder = '#86efac';
                        optionBg = '#f0fdf4';
                        optionColor = '#15803d';
                      }
                    } else if (isOptionSelected) {
                      optionBorder = '#0f172a';
                      optionBg = '#f8fafc';
                      optionColor = '#0f172a';
                    }

                    return (
                      <div
                        key={opt.key}
                        onClick={() => handleSelectOption(q.qNo, opt.key)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '8px 12px',
                          borderRadius: '8px',
                          border: `1px solid ${optionBorder}`,
                          background: optionBg,
                          color: optionColor,
                          fontSize: '0.82rem',
                          cursor: 'pointer',
                          transition: 'all 0.1s ease',
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span
                            style={{
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              background: showAnswers && isOptionCorrect ? '#16a34a' : '#f1f5f9',
                              color: showAnswers && isOptionCorrect ? '#ffffff' : '#64748b',
                              fontSize: '0.70rem',
                              fontWeight: 800,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {opt.key}
                          </span>
                          <span style={{ fontWeight: showAnswers && isOptionCorrect ? 700 : 500 }}>
                            {opt.text}
                          </span>
                        </div>

                        {showAnswers && isOptionCorrect && (
                          <span style={{ fontSize: '0.70rem', fontWeight: 700, color: '#15803d', display: 'flex', alignItems: 'center', gap: '3px' }}>
                            <Check size={13} /> Official Key
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation / Rationale */}
                {showAnswers && q.rationale && (
                  <div
                    style={{
                      background: '#f8fafc',
                      borderRadius: '8px',
                      padding: '10px 12px',
                      borderLeft: '3px solid #0f172a',
                      fontSize: '0.76rem',
                      color: '#334155',
                      lineHeight: 1.45,
                    }}
                  >
                    <strong style={{ color: '#0f172a' }}>Clinical Rationale: </strong>
                    {q.rationale}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── 4. FOOTER NOTE ── */}
        <div
          style={{
            padding: '10px 16px',
            background: '#ffffff',
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
            color: '#64748b',
            flexShrink: 0,
          }}
        >
          <span>Official Master Answer Key verified against conducting body gazette.</span>
          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '4px 12px',
              borderRadius: '6px',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              color: '#334155',
              fontSize: '0.74rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
