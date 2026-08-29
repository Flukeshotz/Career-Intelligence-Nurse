'use client';

import { useState } from 'react';
import { BookOpen, Layers, Award, ChevronDown, ChevronUp } from 'lucide-react';
import { DetailedExamInfo } from '@/lib/exam-syllabus-data';

interface ExamDetailAccordionProps {
  detailed?: DetailedExamInfo;
}

export function ExamDetailAccordion({ detailed }: ExamDetailAccordionProps) {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    syllabus: false,
    pattern: false,
    strategy: false,
  });

  const toggle = (key: string) => {
    setOpenSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!detailed) return null;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

      {/* ── 1. SYLLABUS ACCORDION ── */}
      {detailed.syllabusModules && detailed.syllabusModules.length > 0 && (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid var(--sc-line-200)',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
          }}
        >
          <button
            type="button"
            onClick={() => toggle('syllabus')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              background: openSections.syllabus ? 'var(--sc-surface-secondary)' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(8, 50, 98, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <BookOpen size={18} color="var(--sc-navy-700)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Official Syllabus &amp; Subject Weightages
                </h3>
                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {detailed.syllabusModules.length} Modules · Clinical, Pharmacology &amp; Foundations
                </div>
              </div>
            </div>

            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sc-surface-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {openSections.syllabus ? (
                <ChevronUp size={16} color="var(--sc-navy-700)" />
              ) : (
                <ChevronDown size={16} color="var(--sc-navy-700)" />
              )}
            </div>
          </button>

          {openSections.syllabus && (
            <div style={{ padding: '14px 16px', borderTop: '1px solid var(--sc-line-200)', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {detailed.syllabusModules.map((mod, mi) => (
                <div key={mi} style={{ background: '#f8fafc', borderRadius: '10px', padding: '10px 12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.84rem', color: 'var(--sc-navy-900)' }}>
                      {mod.subject}
                    </span>
                    {mod.weightagePercent && (
                      <span style={{ fontSize: '0.68rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: '#eef5ff', padding: '2px 7px', borderRadius: '100px' }}>
                        ~{mod.weightagePercent}% Weightage
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {mod.highYieldTopics.map((topic, ti) => (
                      <span key={ti} style={{ fontSize: '0.72rem', background: '#ffffff', color: 'var(--sc-ink-700)', padding: '3px 7px', borderRadius: '5px', border: '1px solid #e2e8f0' }}>
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── 2. EXAM PATTERN ACCORDION ── */}
      {detailed.stages && detailed.stages.length > 0 && (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid var(--sc-line-200)',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
          }}
        >
          <button
            type="button"
            onClick={() => toggle('pattern')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              background: openSections.pattern ? 'var(--sc-surface-secondary)' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(16, 102, 200, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Layers size={18} color="var(--sc-blue-600)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  Exam Pattern &amp; Marking Scheme
                </h3>
                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {detailed.stages.map(p => p.stageName).join(' · ')}
                </div>
              </div>
            </div>

            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sc-surface-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {openSections.pattern ? (
                <ChevronUp size={16} color="var(--sc-navy-700)" />
              ) : (
                <ChevronDown size={16} color="var(--sc-navy-700)" />
              )}
            </div>
          </button>

          {openSections.pattern && (
            <div style={{ padding: '14px 16px', borderTop: '1px solid var(--sc-line-200)', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {detailed.stages.map((p, pi) => (
                <div key={pi} style={{ background: '#f8fafc', borderRadius: '10px', padding: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--sc-navy-900)', marginBottom: '3px' }}>
                    {p.stageName}
                  </div>
                  <p style={{ fontSize: '0.76rem', color: '#475569', margin: '0 0 8px 0', lineHeight: 1.45 }}>
                    {p.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px' }}>
                    <div style={{ background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Questions</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>{p.totalQuestions} MCQs</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Duration</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>{p.durationMinutes || 90} Mins</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Negative Marking</div>
                      <div style={{ fontSize: '0.80rem', fontWeight: 800, color: '#dc2626' }}>{p.negativeMarking}</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '6px 8px', borderRadius: '6px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.62rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 700 }}>Qualifying Marks</div>
                      <div style={{ fontSize: '0.80rem', fontWeight: 800, color: 'var(--sc-green-600)' }}>{p.qualifyingMarks}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── 3. HIGH-YIELD STUDY STRATEGY ACCORDION ── */}
      {detailed.preparationStrategy && detailed.preparationStrategy.length > 0 && (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '14px',
            border: '1px solid var(--sc-line-200)',
            overflow: 'hidden',
            boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
          }}
        >
          <button
            type="button"
            onClick={() => toggle('strategy')}
            style={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 16px',
              background: openSections.strategy ? 'var(--sc-surface-secondary)' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              gap: '10px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0, flex: 1 }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(1, 144, 53, 0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Award size={18} color="var(--sc-green-600)" />
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h3 style={{ fontSize: '0.94rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  High-Yield Prep Strategy &amp; Tips
                </h3>
                <div style={{ fontSize: '0.74rem', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {detailed.preparationStrategy.length} Actionable Revision Steps
                </div>
              </div>
            </div>

            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--sc-surface-secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {openSections.strategy ? (
                <ChevronUp size={16} color="var(--sc-navy-700)" />
              ) : (
                <ChevronDown size={16} color="var(--sc-navy-700)" />
              )}
            </div>
          </button>

          {openSections.strategy && (
            <div style={{ padding: '14px 16px', borderTop: '1px solid var(--sc-line-200)', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {detailed.preparationStrategy.map((step, si) => (
                <div key={si} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', background: '#f8fafc', padding: '10px 12px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--sc-navy-700)', color: '#ffffff', fontSize: '0.68rem', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                    {si + 1}
                  </div>
                  <div style={{ fontSize: '0.76rem', color: '#334155', lineHeight: 1.45 }}>
                    {step}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

    </div>
  );
}
