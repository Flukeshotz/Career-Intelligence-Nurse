'use client';

import { useState, useEffect } from 'react';
import { Bookmark, Check, ChevronDown } from 'lucide-react';
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
    { key: 'applied', label: 'Applied (Submitted)', short: 'Applied' },
    { key: 'admit_card_awaited', label: 'Admit Card Awaited', short: 'Admit Card' },
    { key: 'exam_scheduled', label: 'Exam Scheduled', short: 'Scheduled' },
    { key: 'exam_taken', label: 'Exam Attended', short: 'Attended' },
    { key: 'result_awaited', label: 'Result Awaited', short: 'Result Awaited' },
    { key: 'result_out', label: 'Result Declared', short: 'Result Out' },
    { key: 'counselling', label: 'Counselling / DV', short: 'Counselling' },
    { key: 'closed', label: 'Cycle Concluded', short: 'Closed' },
  ];

  if (trackedItem) {
    const currentStageObj = STAGES.find((s) => s.key === trackedItem.stage);

    return (
      <div style={{ position: 'relative', minWidth: 0, width: '100%' }}>
        <button
          type="button"
          onClick={() => setShowStageSelector(!showStageSelector)}
          style={{
            width: '100%',
            height: '44px',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '5px',
            background: '#f0fdf4',
            color: '#15803d',
            border: '1.5px solid #86efac',
            borderRadius: '10px',
            padding: '0 8px',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            minWidth: 0,
          }}
        >
          <span style={{ width: '15px', height: '15px', borderRadius: '50%', background: '#16a34a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.62rem', fontWeight: 900, flexShrink: 0 }}>
            ✓
          </span>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {currentStageObj?.short || 'Tracked'}
          </span>
          <ChevronDown size={13} style={{ flexShrink: 0 }} />
        </button>

        {showStageSelector && (
          <div
            style={{
              position: 'absolute',
              bottom: '100%',
              left: 0,
              marginBottom: '8px',
              zIndex: 100,
              padding: '6px',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              width: '240px',
              maxHeight: '260px',
              overflowY: 'auto',
              boxShadow: '0 12px 36px rgba(0, 0, 0, 0.18)',
              background: '#ffffff',
              borderRadius: '12px',
              border: '1px solid #e2e8f0',
            }}
          >
            <div style={{ fontSize: '0.68rem', color: '#64748b', padding: '4px 8px', fontWeight: 700, textTransform: 'uppercase' }}>
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
                  fontSize: '0.78rem',
                  color: trackedItem.stage === st.key ? '#15803d' : '#1e293b',
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
        flex: 1,
        height: '44px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        background: '#ffffff',
        color: '#0f172a',
        border: '1.5px solid #cbd5e1',
        borderRadius: '10px',
        padding: '0 14px',
        fontSize: '0.82rem',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        whiteSpace: 'nowrap',
      }}
    >
      <Bookmark size={15} />
      <span>Track {opportunityType === 'job' ? 'Job' : 'Exam'}</span>
    </button>
  );
}
