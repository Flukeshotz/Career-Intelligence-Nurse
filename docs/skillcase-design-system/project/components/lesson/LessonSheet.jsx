import React from 'react';

/* The white task sheet every lesson screen sits in. Radius 32 on the top
   corners only, 20px padding, an upward shadow so it reads as lifted off the
   pale blue page, and space-between so the footer pins to the bottom while the
   task body takes the remaining height. */
export function LessonSheet({ children, footer, style }) {
  return (
    <div style={{
      flex: 1, minHeight: 0, width: '100%', background: 'var(--ui-surface-card)',
      borderRadius: '32px 32px 0 0', padding: 20, boxSizing: 'border-box',
      boxShadow: '0 -10px 40px rgba(0,0,0,0.08)',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center',
      position: 'relative', zIndex: 20, ...style,
    }}>
      <div style={{ width: '100%', flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', overflowY: 'auto' }}>{children}</div>
      {footer ? <div style={{ width: '100%', paddingTop: 16, flexShrink: 0 }}>{footer}</div> : null}
    </div>
  );
}

export default LessonSheet;
