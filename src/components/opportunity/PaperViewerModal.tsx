'use client';

import { useState, useEffect } from 'react';
import {
  X,
  Download,
  CheckCircle2,
  Clock,
  HelpCircle,
  FileText,
  Eye,
  EyeOff,
  ShieldCheck,
  Check,
  Play,
  RotateCcw,
  Flag,
  ChevronLeft,
  ChevronRight,
  Award,
  AlertTriangle,
  Layers,
  BookOpen
} from 'lucide-react';
import { ExamPaper } from '@/lib/pyq-mock-data';
import { getFullPaperData, FullPaperData, QuestionItem } from '@/lib/pyq-questions-dataset';

interface PaperViewerModalProps {
  paper: ExamPaper | null;
  isOpen: boolean;
  onClose: () => void;
  initialMode?: 'study' | 'cbt';
}

type ViewMode = 'study' | 'cbt' | 'results';

export function PaperViewerModal({ paper, isOpen, onClose, initialMode = 'study' }: PaperViewerModalProps) {
  const [viewMode, setViewMode] = useState<ViewMode>(initialMode);
  const [showAnswers, setShowAnswers] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

  // Sync mode when modal opens or initialMode changes
  useEffect(() => {
    if (isOpen) {
      if (initialMode === 'cbt') {
        startCbtExam();
      } else {
        setViewMode('study');
      }
    }
  }, [isOpen, initialMode]);

  // CBT Exam State
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<Record<number, string>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<number, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState(90 * 60); // 90 minutes
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);

  // Timer Effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (viewMode === 'cbt' && isTimerRunning && timeRemainingSeconds > 0) {
      timer = setInterval(() => {
        setTimeRemainingSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(timer);
            setIsTimerRunning(false);
            setViewMode('results');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [viewMode, isTimerRunning, timeRemainingSeconds]);

  if (!isOpen || !paper) return null;

  const paperData: FullPaperData = getFullPaperData(paper.id);
  const totalQuestions = paperData.questions.length;
  const currentQuestion = paperData.questions[currentQIndex] || paperData.questions[0];

  const subjects = [
    { key: 'all', label: `All (${totalQuestions})` },
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

  // CBT Actions
  const startCbtExam = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentQIndex(0);
    setTimeRemainingSeconds((paper.durationMinutes || 90) * 60);
    setIsTimerRunning(true);
    setViewMode('cbt');
  };

  const handleSelectOption = (qNo: number, key: string) => {
    setUserAnswers(prev => ({ ...prev, [qNo]: key }));
  };

  const handleClearResponse = (qNo: number) => {
    setUserAnswers(prev => {
      const next = { ...prev };
      delete next[qNo];
      return next;
    });
  };

  const toggleMarkForReview = (qNo: number) => {
    setMarkedForReview(prev => ({ ...prev, [qNo]: !prev[qNo] }));
  };

  const handleSubmitCbt = () => {
    if (confirm('Are you sure you want to submit your CBT examination? You will receive an instant verified score and detailed clinical solution review.')) {
      setIsTimerRunning(false);
      setViewMode('results');
    }
  };

  // Score Calculations
  let correctCount = 0;
  let incorrectCount = 0;
  let skippedCount = 0;

  paperData.questions.forEach((q) => {
    const ans = userAnswers[q.qNo];
    if (!ans) {
      skippedCount++;
    } else if (ans === q.correctOption) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  });

  const negativePenalty = paper.category === 'central' ? 0.33 : 0.25;
  const rawScore = correctCount * 1 - incorrectCount * negativePenalty;
  const finalScore = Math.max(0, Number(rawScore.toFixed(2)));
  const percentage = Number(((finalScore / totalQuestions) * 100).toFixed(1));
  const accuracy = correctCount + incorrectCount > 0
    ? Number(((correctCount / (correctCount + incorrectCount)) * 100).toFixed(1))
    : 0;

  // Format Timer String
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
        padding: '12px',
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
          maxWidth: '880px',
          height: '92vh',
          maxHeight: '920px',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.35)',
          overflow: 'hidden',
        }}
      >
        {/* ── 1. TOP HEADER & MODE SWITCHER ── */}
        <div
          style={{
            padding: '14px 18px',
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
              <h3 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {paper.title}
              </h3>
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#15803d', background: '#f0fdf4', padding: '2px 6px', borderRadius: '4px', whiteSpace: 'nowrap' }}>
                ✓ 100 Official Qs
              </span>
            </div>
            <div style={{ fontSize: '0.72rem', color: '#64748b' }}>
              {paper.examName} · {totalQuestions} MCQs · {paper.durationMinutes || 90} Mins · {paperData.negativeMarking}
            </div>
          </div>

          {/* Mode Selector Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <button
              type="button"
              onClick={() => setViewMode('study')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 11px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: viewMode === 'study' ? 700 : 500,
                background: viewMode === 'study' ? '#0f172a' : '#f1f5f9',
                color: viewMode === 'study' ? '#ffffff' : '#475569',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              <BookOpen size={13} />
              <span>Browse &amp; Key</span>
            </button>

            <button
              type="button"
              onClick={startCbtExam}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                borderRadius: '8px',
                fontSize: '0.74rem',
                fontWeight: 800,
                background: viewMode === 'cbt' ? '#0f766e' : '#f0fdfa',
                color: viewMode === 'cbt' ? '#ffffff' : '#0f766e',
                border: '1px solid #99f6e4',
                cursor: 'pointer',
              }}
            >
              <Play size={13} />
              <span>{viewMode === 'cbt' ? 'CBT Active' : 'Attend CBT Test'}</span>
            </button>

            {/* Close Button */}
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
                marginLeft: '4px',
              }}
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* ── MODE 1: STUDY & BROWSE VIEW ── */}
        {viewMode === 'study' && (
          <>
            {/* Sub-Bar */}
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
              {/* Filter Pills */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  overflowX: 'auto',
                  scrollbarWidth: 'none',
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
                      }}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>

              {/* Toggles & Download */}
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
                    background: 'var(--sc-navy-700)',
                    color: '#ffffff',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Download size={13} />
                  <span>{isGeneratingPdf ? 'Generating…' : 'Download PDF'}</span>
                </button>
              </div>
            </div>

            {/* Scrollable Questions */}
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px', gap: '8px' }}>
                      <span style={{ fontSize: '0.70rem', fontWeight: 800, background: '#f1f5f9', color: '#334155', padding: '2px 7px', borderRadius: '6px' }}>
                        Q{q.qNo} of {totalQuestions}
                      </span>
                      <span style={{ fontSize: '0.70rem', fontWeight: 600, color: '#64748b' }}>
                        {q.subject}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.90rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.45, marginBottom: '12px' }}>
                      {q.question}
                    </div>

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
          </>
        )}

        {/* ── MODE 2: LIVE CBT EXAMINATION SIMULATION ── */}
        {viewMode === 'cbt' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', background: '#f8fafc', overflow: 'hidden' }}>
            {/* CBT Top Status Bar */}
            <div
              style={{
                padding: '10px 18px',
                background: '#0f172a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ fontSize: '0.80rem', fontWeight: 800, color: '#93c5fd' }}>
                  Question {currentQIndex + 1} of {totalQuestions}
                </span>
                <span style={{ fontSize: '0.72rem', color: '#94a3b8' }}>
                  ({Object.keys(userAnswers).length} Answered · {Object.values(markedForReview).filter(Boolean).length} Marked)
                </span>
              </div>

              {/* Countdown Timer */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: timeRemainingSeconds < 300 ? '#7f1d1d' : 'rgba(255,255,255,0.12)',
                    color: timeRemainingSeconds < 300 ? '#fca5a5' : '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                    fontFamily: 'monospace',
                  }}
                >
                  <Clock size={14} />
                  <span>{formatTime(timeRemainingSeconds)}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsPaletteOpen(!isPaletteOpen)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    background: isPaletteOpen ? '#334155' : 'rgba(255,255,255,0.08)',
                    color: '#ffffff',
                    border: '1px solid rgba(255,255,255,0.15)',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <Layers size={13} />
                  <span>Palette (1–100)</span>
                </button>
              </div>
            </div>

            {/* CBT Body: Question + Optional Question Palette Drawer */}
            <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
              {/* Question Screen */}
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ background: '#ffffff', borderRadius: '12px', padding: '20px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.02)', flex: 1 }}>
                  {/* Subject Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 800, color: '#0f766e', background: '#f0fdf4', padding: '2px 8px', borderRadius: '4px' }}>
                      {currentQuestion.subject}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 600 }}>
                      Marks: +1.0 | Neg: -{negativePenalty}
                    </span>
                  </div>

                  {/* Question Text */}
                  <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.45, marginBottom: '20px' }}>
                    Q{currentQuestion.qNo}. {currentQuestion.question}
                  </h4>

                  {/* 4 Interactive Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                    {currentQuestion.options.map((opt) => {
                      const isSelected = userAnswers[currentQuestion.qNo] === opt.key;

                      return (
                        <div
                          key={opt.key}
                          onClick={() => handleSelectOption(currentQuestion.qNo, opt.key)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '12px 16px',
                            borderRadius: '10px',
                            border: isSelected ? '2px solid #0f766e' : '1.5px solid #e2e8f0',
                            background: isSelected ? '#f0fdfa' : '#ffffff',
                            color: isSelected ? '#0f766e' : '#1e293b',
                            fontSize: '0.88rem',
                            fontWeight: isSelected ? 700 : 500,
                            cursor: 'pointer',
                            transition: 'all 0.12s ease',
                          }}
                        >
                          <span
                            style={{
                              width: '24px',
                              height: '24px',
                              borderRadius: '50%',
                              background: isSelected ? '#0f766e' : '#f1f5f9',
                              color: isSelected ? '#ffffff' : '#64748b',
                              fontSize: '0.75rem',
                              fontWeight: 800,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0,
                            }}
                          >
                            {opt.key}
                          </span>
                          <span>{opt.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 1–100 Question Palette Drawer (Collapsible) */}
              {isPaletteOpen && (
                <div
                  style={{
                    width: '280px',
                    borderLeft: '1px solid #e2e8f0',
                    background: '#ffffff',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                  }}
                >
                  <div style={{ padding: '12px', borderBottom: '1px solid #e2e8f0', fontSize: '0.76rem', fontWeight: 800, color: '#0f172a' }}>
                    Question Palette (1 to {totalQuestions})
                  </div>
                  <div style={{ flex: 1, overflowY: 'auto', padding: '10px', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '6px' }}>
                    {paperData.questions.map((q, idx) => {
                      const isAnswered = !!userAnswers[q.qNo];
                      const isMarked = !!markedForReview[q.qNo];
                      const isCurrent = currentQIndex === idx;

                      let bg = '#f8fafc';
                      let color = '#475569';
                      let border = '1px solid #cbd5e1';

                      if (isCurrent) {
                        bg = '#0f172a';
                        color = '#ffffff';
                        border = '1px solid #0f172a';
                      } else if (isMarked) {
                        bg = '#f3e8ff';
                        color = '#7e22ce';
                        border = '1px solid #d8b4fe';
                      } else if (isAnswered) {
                        bg = '#dcfce7';
                        color = '#15803d';
                        border = '1px solid #86efac';
                      }

                      return (
                        <button
                          key={q.qNo}
                          type="button"
                          onClick={() => setCurrentQIndex(idx)}
                          style={{
                            height: '34px',
                            borderRadius: '6px',
                            fontSize: '0.74rem',
                            fontWeight: 700,
                            background: bg,
                            color: color,
                            border: border,
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          {q.qNo}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* CBT Bottom Action Bar */}
            <div
              style={{
                padding: '12px 18px',
                background: '#ffffff',
                borderTop: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexShrink: 0,
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => toggleMarkForReview(currentQuestion.qNo)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #d8b4fe',
                    background: markedForReview[currentQuestion.qNo] ? '#7e22ce' : '#f3e8ff',
                    color: markedForReview[currentQuestion.qNo] ? '#ffffff' : '#7e22ce',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  <Flag size={13} />
                  <span>{markedForReview[currentQuestion.qNo] ? 'Marked' : 'Mark for Review'}</span>
                </button>

                <button
                  type="button"
                  onClick={() => handleClearResponse(currentQuestion.qNo)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#64748b',
                    fontSize: '0.76rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  Clear
                </button>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  type="button"
                  disabled={currentQIndex === 0}
                  onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid #cbd5e1',
                    background: '#ffffff',
                    color: '#334155',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: currentQIndex === 0 ? 'not-allowed' : 'pointer',
                    opacity: currentQIndex === 0 ? 0.5 : 1,
                  }}
                >
                  <ChevronLeft size={14} />
                  <span>Previous</span>
                </button>

                {currentQIndex < totalQuestions - 1 ? (
                  <button
                    type="button"
                    onClick={() => setCurrentQIndex(prev => Math.min(totalQuestions - 1, prev + 1))}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      background: '#0f172a',
                      color: '#ffffff',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    <span>Save &amp; Next</span>
                    <ChevronRight size={14} />
                  </button>
                ) : null}

                <button
                  type="button"
                  onClick={handleSubmitCbt}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    padding: '8px 18px',
                    borderRadius: '8px',
                    background: '#15803d',
                    color: '#ffffff',
                    fontSize: '0.80rem',
                    fontWeight: 800,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 2px 6px rgba(21,128,61,0.3)',
                  }}
                >
                  <span>Submit Test</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* ── MODE 3: CBT RESULTS & DETAILED SCORECARD ── */}
        {viewMode === 'results' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', background: '#f8fafc' }}>
            <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
              <div
                style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: percentage >= 50 ? '#dcfce7' : '#fee2e2',
                  color: percentage >= 50 ? '#15803d' : '#b91c1c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 12px auto',
                }}
              >
                <Award size={32} />
              </div>

              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                {percentage >= 50 ? '🎉 Congratulations! Examination Cleared' : 'CBT Performance Summary'}
              </h3>
              <p style={{ fontSize: '0.82rem', color: '#64748b', margin: '0 0 20px 0' }}>
                {paper.title} · Official Answer Key &amp; Negative Marking Calculated
              </p>

              {/* 4 Score Metrics Cards */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '10px', marginBottom: '20px' }}>
                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Final Score</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>
                    {finalScore} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>/ {totalQuestions}</span>
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Accuracy</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f766e' }}>
                    {accuracy}%
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Correct</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#16a34a' }}>
                    {correctCount}
                  </div>
                </div>

                <div style={{ background: '#ffffff', padding: '14px', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Incorrect</div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#dc2626' }}>
                    {incorrectCount}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => setViewMode('study')}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    background: '#0f172a',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Eye size={14} />
                  <span>Review Step-by-Step Solutions</span>
                </button>

                <button
                  type="button"
                  onClick={startCbtExam}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    background: '#ffffff',
                    color: '#0f172a',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: '1px solid #cbd5e1',
                    cursor: 'pointer',
                  }}
                >
                  <RotateCcw size={14} />
                  <span>Retake Test</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectDownloadPdf}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '10px 18px',
                    borderRadius: '8px',
                    background: 'var(--sc-green-600)',
                    color: '#ffffff',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Download size={14} />
                  <span>Download Solution PDF</span>
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
