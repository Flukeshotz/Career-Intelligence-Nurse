import React from 'react';

/* Lesson header — src/pages/learnGerman/lesson/screens/shared/ProgressBar.jsx.
   A #F4F8FF strip with a 1px slate bottom edge: an optional 28px back box
   (2px gray-400 border, radius 6), the lesson title at 14px semibold, the
   percentage at 10px on the right, and an 85%-wide 4px track pinned to the
   bottom-right whose fill is orange-400. progress is screenIndex/totalScreens. */
export function LessonProgressBar({ title = 'The Bakery Window', progress = 0.35, onBack, hideProgress = false, style }) {
  const p = Math.max(0, Math.min(1, progress));
  return (
    <div style={{
      width: '100%', padding: '10px 16px 10px 8px', background: '#F4F8FF',
      borderBottom: '1px solid var(--ui-border-default)', flexShrink: 0, position: 'relative',
      boxSizing: 'border-box', ...style,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
        <div style={{ display: 'flex', alignItems: 'center', minWidth: 0, flex: 1 }}>
          {onBack ? (
            <button type="button" onClick={onBack} aria-label="Back" style={{
              width: 28, height: 28, borderRadius: 6, border: '2px solid #9ca3af', background: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 8, flexShrink: 0, cursor: 'pointer', color: '#9ca3af',
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
            </button>
          ) : null}
          <div style={{ color: '#111827', fontSize: 14, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</div>
        </div>
        {hideProgress ? null : <div style={{ color: '#71717a', fontSize: 10, fontWeight: 500, flexShrink: 0 }}>{Math.round(p * 100)}%</div>}
      </div>
      {hideProgress ? null : (
        <div style={{ position: 'absolute', width: '85%', height: 4, right: 14, bottom: 4, background: 'rgba(0,0,0,0.1)', borderRadius: 9999, overflow: 'hidden' }}>
          <div style={{ height: '100%', width: (p * 100) + '%', background: '#fb923c', transition: 'width .5s ease-out' }} />
        </div>
      )}
    </div>
  );
}

export default LessonProgressBar;
