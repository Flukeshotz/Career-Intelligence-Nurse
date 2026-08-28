import React from 'react';

/* The loading placeholder for a list surface: a title bar, then n items.
   Two item shapes exist in production and no others —

     row   →  p-4, rounded-xl, a label bar opposite a pill
              (PaperSelect, ReadListenTopicSelect, DescribeSpeakSelect,
               interviewSelect)
     card  →  p-5, rounded-2xl, an icon well above two text bars
              (ExamSelect, in a 1/2-column grid)

   Both share the slate-50 fill, slate-100 border and pulse. `titleWidth`
   varies in the source (144px / 128px) and is exposed rather than normalised,
   because it tracks the real heading length on each surface. */
const PULSE = { animation: 'sc-skeleton-pulse 2s cubic-bezier(.4,0,.6,1) infinite' };

export function SkeletonList({ variant = 'row', count = 4, titleWidth = 144, columns = 1, style }) {
  const bar = (w, h, light) => <div style={{ width: w, height: h, borderRadius: 4, background: light ? 'var(--ui-surface-muted)' : 'var(--ui-border-default)' }} />;
  return (
    <div style={{ width: '100%', ...style }}>
      <style>{'@keyframes sc-skeleton-pulse{0%,100%{opacity:1}50%{opacity:.5}}'}</style>
      <div style={{ ...PULSE, width: titleWidth, height: 24, borderRadius: 4, background: 'var(--ui-border-default)', marginBottom: 24 }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(' + columns + ',minmax(0,1fr))', gap: 16 }}>
        {Array.from({ length: count }).map((_, i) => variant === 'card' ? (
          <div key={i} style={{ ...PULSE, padding: 20, borderRadius: 16, border: '1px solid var(--ui-surface-muted)', background: 'var(--ui-surface-subtle)', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--ui-border-default)' }} />
            {bar(128, 16)}{bar(192, 12, true)}
          </div>
        ) : (
          <div key={i} style={{ ...PULSE, padding: 16, borderRadius: 12, border: '1px solid var(--ui-surface-muted)', background: 'var(--ui-surface-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {bar(144, 16)}
            <div style={{ width: 48, height: 20, borderRadius: 40, background: 'var(--ui-surface-muted)' }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkeletonList;
