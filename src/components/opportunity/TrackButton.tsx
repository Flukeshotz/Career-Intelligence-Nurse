'use client';

import { useState, useEffect } from 'react';
import { Bookmark, Check, ChevronDown, Bell, BellCheck } from 'lucide-react';
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

  const handleInitialTrack = (stage: TrackedItem['stage'] = 'applied') => {
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

  const STAGES: Array<{ key: TrackedItem['stage']; label: string; short: string }> = [
    { key: 'interested', label: 'Interested / Following', short: 'Interested' },
    { key: 'applied', label: 'Applied (Application Submitted)', short: 'Applied' },
    { key: 'admit_card_awaited', label: 'Admit Card Awaited', short: 'Admit Card' },
    { key: 'exam_scheduled', label: 'Exam Scheduled', short: 'Scheduled' },
    { key: 'exam_taken', label: 'Exam Taken / Attended', short: 'Exam Taken' },
    { key: 'result_awaited', label: 'Result Awaited', short: 'Result Awaited' },
    { key: 'result_out', label: 'Result Declared', short: 'Result Out' },
    { key: 'counselling', label: 'Counselling / DV', short: 'Counselling' },
    { key: 'closed', label: 'Cycle Concluded', short: 'Closed' },
  ];

  if (trackedItem) {
    const currentStageObj = STAGES.find((s) => s.key === trackedItem.stage);

    return (
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <button
          type="button"
          onClick={() => setShowStageSelector(!showStageSelector)}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: '#f0fdf4',
            color: '#15803d',
            border: '1.5px solid #86efac',
            borderRadius: '8px',
            padding: '8px 14px',
            fontSize: '0.80rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
          }}
        >
          <span style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#16a34a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.65rem', fontWeight: 900 }}>
            ✓
          </span>
          <span>Stage: {currentStageObj?.short || 'Tracked'}</span>
          <ChevronDown size={14} />
        </button>

        {showStageSelector && (
          <div
            className="sc-card"
            style={{
              position: 'absolute',
              bottom: '100%',
              right: 0,
              marginBottom: '8px',
              zIndex: 50,
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              width: '260px',
              maxHeight: '280px',
              overflowY: 'auto',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.18)',
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid var(--sc-line-200)',
            }}
          >
            <div style={{ fontSize: '0.70rem', color: 'var(--sc-ink-500)', padding: '4px 8px', fontWeight: 700, textTransform: 'uppercase' }}>
              Update Recruitment Stage:
            </div>
            {STAGES.map((st) => (
              <button
                key={st.key}
                type="button"
                onClick={() => handleAdvance(st.key)}
                style={{
                  textAlign: 'left',
                  padding: '7px 10px',
                  borderRadius: '6px',
                  fontSize: '0.80rem',
                  color: trackedItem.stage === st.key ? '#15803d' : 'var(--sc-ink-900)',
                  background: trackedItem.stage === st.key ? '#f0fdf4' : 'transparent',
                  fontWeight: trackedItem.stage === st.key ? 800 : 500,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                <span>{st.label}</span>
                {trackedItem.stage === st.key && <Check size={14} color="#16a34a" />}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={() => handleInitialTrack('applied')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: '#ffffff',
        color: 'var(--sc-navy-700)',
        border: '1.5px solid var(--sc-line-200)',
        borderRadius: '8px',
        padding: '8px 14px',
        fontSize: '0.80rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
      }}
    >
      <Bookmark size={14} />
      <span>Track in My Cycles</span>
    </button>
  );
}
