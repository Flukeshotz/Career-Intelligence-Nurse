import React from 'react';

/* Module top bar — src/components/a1/ChapterSelectTemplate.jsx (and its a2
   twin). Every practice module select screen opens with this: a chevron "Back"
   on the left in #181d27 semibold, and the module's own name on the right in
   grey. It sits on white above the level hero, and is not the navy app header —
   module screens leave the shell behind. */
export function ModuleTopBar({ title = 'Flashcards', onBack, style }) {
  return (
    <div style={{ padding: '10px 16px', flexShrink: 0, background: 'var(--ui-surface-card)', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button type="button" onClick={onBack} style={{ display: 'flex', alignItems: 'center', gap: 8, background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontSize: 14, fontWeight: 600, color: 'var(--ui-text-body)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          <span>Back</span>
        </button>
        <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--ui-text-faint)' }}>{title}</span>
      </div>
    </div>
  );
}

export default ModuleTopBar;
