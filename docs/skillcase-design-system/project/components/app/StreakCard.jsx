import React from 'react';

/* Streak card — the navy panel StreakWidget.jsx renders on the home hub.
   #002856, radius 16, padding 20, flame + count on the left, the daily-goal
   readout on the right, and a resume link. Sits in a 16px-gutter row. */
export function StreakCard({
  streak = 4,
  todayPoints = 12,
  dailyGoal = 20,
  resumeLabel = 'Continue Chapter 3',
  onResume,
  onInfo,
  style,
}) {
  const met = todayPoints >= dailyGoal;
  const pct = dailyGoal > 0 ? Math.min(100, Math.round((todayPoints / dailyGoal) * 100)) : 0;
  return (
    <div style={{
      background: 'var(--ui-text-brand)', borderRadius: 16, padding: 20,
      boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)', border: '1px solid #f1f5f9',
      display: 'flex', flexDirection: 'column', gap: 14, boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ width: 40, height: 40, borderRadius: 9999, background: 'rgba(237,184,67,0.18)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ui-action-primary-bg)', flexShrink: 0 }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2c1 4.5 5.5 5.5 5.5 10a5.5 5.5 0 0 1-11 0c0-2.2 1.2-3.4 2.4-4.5.1 2.2 1.1 3.3 2.1 3.3 1.2 0 1.3-5.6-1-8.8z" /></svg>
          </span>
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: '#fff', lineHeight: 1 }}>{streak}</span>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#89a1bd' }}>day streak</span>
          </span>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: '#89a1bd', display: 'flex', alignItems: 'center', gap: 5, justifyContent: 'flex-end' }}>
            Daily goal
            <button type="button" onClick={onInfo} aria-label="About streaks" style={{ border: 'none', background: 'transparent', color: '#89a1bd', cursor: 'pointer', padding: 0, display: 'inline-flex' }}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M12 16v-4M12 8h.01" /></svg>
            </button>
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: met ? 'var(--ui-action-primary-bg)' : '#fff' }}>{todayPoints}/{dailyGoal} pts</div>
        </div>
      </div>
      <div style={{ height: 6, borderRadius: 9999, background: 'rgba(255,255,255,0.14)', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: pct + '%', borderRadius: 9999, background: 'var(--ui-action-primary-bg)', transition: 'width .3s' }} />
      </div>
      {resumeLabel ? (
        <button type="button" onClick={onResume} style={{
          background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: 12, height: 40,
          color: '#fff', fontWeight: 600, fontSize: 12, cursor: 'pointer',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6,
        }}>{resumeLabel}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </button>
      ) : null}
    </div>
  );
}

export default StreakCard;
