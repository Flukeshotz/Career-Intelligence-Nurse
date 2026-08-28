'use client';

import { useState, useEffect } from 'react';
import { Bookmark, Check, RefreshCw, ChevronDown } from 'lucide-react';
import { getTrackedOpportunities, trackOpportunityItem, advanceStage, TrackedItem } from '@/lib/user-store';

export function TrackButton({
  opportunityId,
  opportunityType,
  title,
  employerOrOrg,
  slug,
  nextStageName,
  nextStageDate,
}: {
  opportunityId: string;
  opportunityType: 'job' | 'exam';
  title: string;
  employerOrOrg: string;
  slug: string;
  nextStageName?: string;
  nextStageDate?: string;
}) {
  const [trackedItem, setTrackedItem] = useState<TrackedItem | null>(null);
  const [showStageSelector, setShowStageSelector] = useState(false);

  useEffect(() => {
    const list = getTrackedOpportunities();
    const found = list.find((i) => i.opportunityId === opportunityId);
    if (found) {
      setTrackedItem(found);
    }
  }, [opportunityId]);

  const handleInitialTrack = (stage: TrackedItem['stage'] = 'interested') => {
    const res = trackOpportunityItem({
      opportunityId,
      opportunityType,
      title,
      employerOrOrg,
      slug,
      initialStage: stage,
      nextStageName,
      nextStageDate,
    });
    setTrackedItem(res);
  };

  const handleAdvance = (toStage: TrackedItem['stage']) => {
    const updated = advanceStage(opportunityId, toStage);
    if (updated) {
      setTrackedItem({ ...updated });
      setShowStageSelector(false);
    }
  };

  const STAGES: Array<{ key: TrackedItem['stage']; label: string }> = [
    { key: 'interested', label: 'Interested / Following' },
    { key: 'applied', label: 'Applied (Application Submitted)' },
    { key: 'admit_card_awaited', label: 'Admit Card Awaited' },
    { key: 'exam_scheduled', label: 'Exam Scheduled' },
    { key: 'exam_taken', label: 'Exam Taken / Attended' },
    { key: 'result_awaited', label: 'Result Awaited' },
    { key: 'result_out', label: 'Result Declared' },
    { key: 'counselling', label: 'Counselling / Document Verification' },
    { key: 'closed', label: 'Cycle Concluded' },
  ];

  if (trackedItem) {
    const currentStageObj = STAGES.find((s) => s.key === trackedItem.stage);

    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <div
          style={{
            background: 'var(--sc-green-50)',
            border: '1px solid rgba(1, 144, 53, 0.3)',
            borderRadius: '12px',
            padding: '14px 18px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'var(--sc-green-600)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
              }}
            >
              ✓
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', textTransform: 'uppercase', fontWeight: 700 }}>
                Tracking in &quot;My Cycles&quot;
              </div>
              <div style={{ fontSize: '0.95rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
                Stage: <span style={{ color: 'var(--sc-green-600)' }}>{currentStageObj?.label}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setShowStageSelector(!showStageSelector)}
            className="btn-secondary"
            style={{ padding: '8px 14px', fontSize: '0.82rem' }}
          >
            <span>Update Stage</span>
            <ChevronDown size={14} />
          </button>
        </div>

        {showStageSelector && (
          <div
            className="sc-card"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              marginTop: '6px',
              zIndex: 30,
              padding: '10px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              maxHeight: '260px',
              overflowY: 'auto',
              boxShadow: 'var(--shadow-lifted)',
            }}
          >
            <div style={{ fontSize: '0.75rem', color: 'var(--sc-ink-600)', padding: '4px 8px', fontWeight: 700, textTransform: 'uppercase' }}>
              Select where you are in this recruitment:
            </div>
            {STAGES.map((st) => (
              <button
                key={st.key}
                onClick={() => handleAdvance(st.key)}
                style={{
                  textAlign: 'left',
                  padding: '8px 12px',
                  borderRadius: '8px',
                  fontSize: '0.86rem',
                  color: trackedItem.stage === st.key ? 'var(--sc-green-600)' : 'var(--sc-ink-900)',
                  background: trackedItem.stage === st.key ? 'var(--sc-green-50)' : 'transparent',
                  fontWeight: trackedItem.stage === st.key ? 800 : 500,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{st.label}</span>
                {trackedItem.stage === st.key && <Check size={16} color="#019035" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
      <button
        onClick={() => handleInitialTrack('applied')}
        className="btn-primary"
        style={{ flex: 1, padding: '14px 20px', fontSize: '0.98rem' }}
      >
        <Check size={18} />
        <span>I Applied — Track Cycle</span>
      </button>

      <button
        onClick={() => handleInitialTrack('interested')}
        className="btn-secondary"
        style={{ padding: '14px 18px', fontSize: '0.9rem' }}
        title="Follow updates for this post"
      >
        <Bookmark size={18} />
        <span>Follow</span>
      </button>
    </div>
  );
}
