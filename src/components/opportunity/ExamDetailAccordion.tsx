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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>

      {/* ── 1. SYLLABUS & HIGH-YIELD TOPICS ACCORDION ── */}
      {detailed.syllabusModules && detailed.syllabusModules.length > 0 && (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid var(--sc-line-200)',
            overflow: 'hidden',
            transition: 'all 0.15s ease',
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
              padding: '16px 18px',
              background: openSections.syllabus ? 'var(--sc-surface-secondary)' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'background 0.12s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
              <div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
                  Official Course Syllabus &amp; Topics
                </h3>
                <div style={{ fontSize: '0.74rem', color: 'var(--sc-ink-500)', marginTop: '2px' }}>
                  {detailed.syllabusModules.length} Modules · Med-Surg, OBG, Pediatrics &amp; Pharmacology
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '3px 8px', borderRadius: '100px' }}>
                {openSections.syllabus ? 'Hide' : 'Expand'}
              </span>
              {openSections.syllabus ? (
                <ChevronUp size={18} color="var(--sc-navy-700)" />
              ) : (
                <ChevronDown size={18} color="var(--sc-navy-700)" />
              )}
            </div>
          </button>

          {openSections.syllabus && (
            <div style={{ padding: '16px 18px', borderTop: '1px solid var(--sc-line-200)', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {detailed.syllabusModules.map((mod, mi) => (
                <div key={mi} style={{ background: '#f8fafc', borderRadius: '12px', padding: '12px 14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontWeight: 800, fontSize: '0.88rem', color: 'var(--sc-navy-900)' }}>
                      {mod.subject}
                    </span>
                    {mod.weightagePercent && (
                      <span style={{ fontSize: '0.70rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: '#eef5ff', padding: '2px 8px', borderRadius: '100px' }}>
                        ~{mod.weightagePercent}% Weightage
                      </span>
                    )}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {mod.highYieldTopics.map((topic, ti) => (
                      <span key={ti} style={{ fontSize: '0.74rem', background: '#ffffff', color: 'var(--sc-ink-700)', padding: '4px 8px', borderRadius: '6px', border: '1px solid #e2e8f0', lineHeight: 1.4 }}>
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

      {/* ── 2. EXAM PATTERN & MARKING SCHEME ACCORDION ── */}
      {detailed.stages && detailed.stages.length > 0 && (
        <div
          style={{
            background: '#ffffff',
            borderRadius: '16px',
            border: '1.5px solid var(--sc-line-200)',
            overflow: 'hidden',
            transition: 'all 0.15s ease',
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
              padding: '16px 18px',
              background: openSections.pattern ? 'var(--sc-surface-secondary)' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'background 0.12s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
              <div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
                  Exam Pattern &amp; Marking Scheme
                </h3>
                <div style={{ fontSize: '0.74rem', color: 'var(--sc-ink-500)', marginTop: '2px' }}>
                  {detailed.stages.map(p => p.stageName).join(' · ')}
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '3px 8px', borderRadius: '100px' }}>
                {openSections.pattern ? 'Hide' : 'Expand'}
              </span>
              {openSections.pattern ? (
                <ChevronUp size={18} color="var(--sc-navy-700)" />
              ) : (
                <ChevronDown size={18} color="var(--sc-navy-700)" />
              )}
            </div>
          </button>

          {openSections.pattern && (
            <div style={{ padding: '16px 18px', borderTop: '1px solid var(--sc-line-200)', background: '#ffffff', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {detailed.stages.map((p, pi) => (
                <div key={pi} style={{ background: '#f8fafc', borderRadius: '12px', padding: '14px', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontWeight: 800, fontSize: '0.92rem', color: 'var(--sc-navy-900)', marginBottom: '4px' }}>
                    {p.stageName}
                  </div>
                  <p style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', margin: '0 0 10px 0', lineHeight: 1.45 }}>
                    {p.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
                    <div style={{ background: '#ffffff', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--sc-ink-400)', textTransform: 'uppercase', fontWeight: 700 }}>Questions</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>{p.totalQuestions} MCQs</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--sc-ink-400)', textTransform: 'uppercase', fontWeight: 700 }}>Duration</div>
                      <div style={{ fontSize: '0.86rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>{p.durationMinutes || 90} Mins</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--sc-ink-400)', textTransform: 'uppercase', fontWeight: 700 }}>Negative Marking</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#dc2626' }}>{p.negativeMarking}</div>
                    </div>
                    <div style={{ background: '#ffffff', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                      <div style={{ fontSize: '0.65rem', color: 'var(--sc-ink-400)', textTransform: 'uppercase', fontWeight: 700 }}>Qualifying Marks</div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--sc-green-600)' }}>{p.qualifyingMarks}</div>
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
            borderRadius: '16px',
            border: '1.5px solid var(--sc-line-200)',
            overflow: 'hidden',
            transition: 'all 0.15s ease',
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
              padding: '16px 18px',
              background: openSections.strategy ? 'var(--sc-surface-secondary)' : '#ffffff',
              border: 'none',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'background 0.12s ease',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
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
              <div>
                <h3 style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: 0 }}>
                  High-Yield Study Strategy &amp; Tips
                </h3>
                <div style={{ fontSize: '0.74rem', color: 'var(--sc-ink-500)', marginTop: '2px' }}>
                  {detailed.preparationStrategy.length} Actionable Revision &amp; Time-Management Steps
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '3px 8px', borderRadius: '100px' }}>
                {openSections.strategy ? 'Hide' : 'Expand'}
              </span>
              {openSections.strategy ? (
                <ChevronUp size={18} color="var(--sc-navy-700)" />
              ) : (
                <ChevronDown size={18} color="var(--sc-navy-700)" />
              )}
            </div>
          </button>

          {openSections.strategy && (
            <div style={{ padding: '16px 18px', borderTop: '1px solid var(--sc-line-200)', background: '#ffffff' }}>
              <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {detailed.preparationStrategy.map((strat, si) => (
                  <li key={si} style={{ fontSize: '0.82rem', color: 'var(--sc-ink-700)', lineHeight: 1.5 }}>
                    {strat}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

    </div>
  );
}
