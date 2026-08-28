'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RefreshCw, ArrowRight, CheckCircle2, Clock, Check, ChevronRight } from 'lucide-react';
import { getTrackedOpportunities, advanceStage, TrackedItem } from '@/lib/user-store';
import { NoTrackedCyclesEmptyState } from '@/components/empty-states/EmptyState';

const STAGE_ORDER: Array<{ key: TrackedItem['stage']; label: string; desc: string }> = [
  { key: 'interested', label: 'Interested', desc: 'Following updates and deadlines' },
  { key: 'applied', label: 'Applied', desc: 'Official application submitted' },
  { key: 'admit_card_awaited', label: 'Admit Card', desc: 'Waiting for exam hall ticket' },
  { key: 'exam_scheduled', label: 'Exam Scheduled', desc: 'Exam date confirmed' },
  { key: 'exam_taken', label: 'Exam Attended', desc: 'Exam completed' },
  { key: 'result_awaited', label: 'Result Awaited', desc: 'Waiting for answer key & cutoff' },
  { key: 'result_out', label: 'Result Declared', desc: 'Merit list published' },
  { key: 'counselling', label: 'Counselling / DV', desc: 'Document verification & seat allotment' },
  { key: 'closed', label: 'Concluded', desc: 'Cycle completed' },
];

export default function MyCyclesPage() {
  const [items, setItems] = useState<TrackedItem[]>([]);

  useEffect(() => {
    const list = getTrackedOpportunities();
    setItems(list);
  }, []);

  const handleStageChange = (opportunityId: string, stage: TrackedItem['stage']) => {
    const updated = advanceStage(opportunityId, stage);
    if (updated) {
      const refreshed = getTrackedOpportunities();
      setItems(refreshed);
    }
  };

  const activeItems = items.filter((i) => !i.outcome && i.stage !== 'closed');
  const concludedItems = items.filter((i) => i.outcome || i.stage === 'closed');

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '24px' }}>
      {/* ── Header ── */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
          <RefreshCw size={22} color="var(--sc-navy-700)" />
          <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
            My Recruitment Cycles
          </h1>
        </div>
        <p style={{ fontSize: '0.9rem', color: 'var(--sc-ink-700)' }}>
          Track active recruitment stages, admit card releases, exam dates, answer keys, and final merit lists.
        </p>
      </div>

      {items.length === 0 ? (
        <NoTrackedCyclesEmptyState />
      ) : (
        <div>
          {/* Active Cycles List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '32px' }}>
            {activeItems.map((item) => {
              const currentStageIdx = STAGE_ORDER.findIndex((s) => s.key === item.stage);
              const nextStage = STAGE_ORDER[currentStageIdx + 1];

              return (
                <div key={item.id} className="sc-card" style={{ padding: '24px' }}>
                  {/* Top Row: Title & Action */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '12px', marginBottom: '14px' }}>
                    <div>
                      <span className="badge-govt" style={{ marginBottom: '6px', display: 'inline-block' }}>
                        {item.opportunityType === 'exam' ? '🎯 National Exam' : '🏛️ Recruitment Vacancy'}
                      </span>
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.35 }}>
                        {item.title}
                      </h2>
                      <div style={{ fontSize: '0.88rem', color: 'var(--sc-ink-700)', fontWeight: 600, marginTop: '2px' }}>
                        {item.employerOrOrg}
                      </div>
                    </div>

                    <Link
                      href={`/nursing/${item.opportunityType === 'exam' ? 'exams' : 'jobs'}/${item.slug}`}
                      className="btn-secondary"
                      style={{ padding: '8px 14px', fontSize: '0.82rem' }}
                    >
                      <span>View Opportunity</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* What happens next box */}
                  <div style={{ background: 'var(--sc-surface-secondary)', padding: '16px', borderRadius: 'var(--radius-md)', margin: '14px 0', border: '1px solid var(--sc-line-200)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px', marginBottom: '10px' }}>
                      <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', textTransform: 'uppercase', fontWeight: 700 }}>
                        Current Milestone: <strong style={{ color: 'var(--sc-navy-900)' }}>{STAGE_ORDER[currentStageIdx]?.label}</strong>
                      </div>

                      {nextStage && (
                        <button
                          type="button"
                          onClick={() => handleStageChange(item.opportunityId, nextStage.key)}
                          className="btn-navy"
                          style={{ fontSize: '0.78rem', padding: '6px 12px', minHeight: '34px' }}
                        >
                          <span>Mark as: {nextStage.label}</span>
                          <ChevronRight size={14} />
                        </button>
                      )}
                    </div>

                    {/* Step Timeline Indicator */}
                    <div style={{ display: 'flex', gap: '4px', overflowX: 'auto', paddingBottom: '4px' }}>
                      {STAGE_ORDER.slice(0, 7).map((s, idx) => {
                        const isDone = idx <= currentStageIdx;
                        const isCurrent = idx === currentStageIdx;

                        return (
                          <div
                            key={s.key}
                            style={{
                              flex: 1,
                              minWidth: '70px',
                              padding: '6px 8px',
                              borderRadius: 'var(--radius-xs)',
                              background: isCurrent
                                ? 'var(--sc-navy-700)'
                                : isDone
                                ? 'var(--sc-green-50)'
                                : 'var(--sc-white)',
                              border: isDone ? '1px solid #bbf7d0' : '1px solid var(--sc-line-200)',
                              color: isCurrent ? 'var(--sc-white)' : isDone ? 'var(--sc-green-600)' : 'var(--sc-ink-400)',
                              textAlign: 'center',
                              fontSize: '0.72rem',
                              fontWeight: 700,
                            }}
                          >
                            {isDone && !isCurrent ? '✓ ' : ''}{s.label}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Concluded Cycles */}
          {concludedItems.length > 0 && (
            <div style={{ marginTop: '32px', borderTop: '1px solid var(--sc-line-200)', paddingTop: '24px' }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-ink-700)', marginBottom: '14px' }}>
                Concluded & Historical Cycles ({concludedItems.length})
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {concludedItems.map((item) => (
                  <div
                    key={item.id}
                    className="sc-card"
                    style={{
                      padding: '16px 20px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'var(--sc-surface-secondary)',
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
                        {item.employerOrOrg} • Outcome: {item.outcome || 'Closed'}
                      </div>
                    </div>

                    <Link
                      href={`/nursing/${item.opportunityType === 'exam' ? 'exams' : 'jobs'}/${item.slug}`}
                      style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-navy-700)' }}
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
