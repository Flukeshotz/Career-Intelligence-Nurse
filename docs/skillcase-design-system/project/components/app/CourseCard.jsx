import React from 'react';

/* Course card — the German Classes list row.
   White card, radius 12, 1px #e5e7eb border; a 76×56 thumbnail at radius 8,
   the course title with its flag emoji, level and difficulty chips, a 4px
   progress track and an "n/m videos completed" caption. */
export function CourseCard({
  title = 'German for Beginners 🇩🇪',
  level = 'A1',
  difficulty = 'Easy',
  completed = 0,
  total = 7,
  image,
  onClick,
  style,
}) {
  const pct = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <button type="button" onClick={onClick} style={{
      width: '100%', background: 'var(--ui-surface-card)', borderRadius: 12, border: '1px solid #e5e7eb',
      padding: 12, display: 'flex', gap: 14, alignItems: 'center', cursor: 'pointer',
      textAlign: 'left', boxSizing: 'border-box', ...style,
    }}>
      <span style={{
        width: 76, height: 56, borderRadius: 8, flexShrink: 0, display: 'block',
        background: image ? `url(${image}) center / cover no-repeat` : '#e8eef7',
      }} />
      <span style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 7 }}>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#111827', lineHeight: 1.3 }}>{title}</span>
        <span style={{ display: 'flex', gap: 6 }}>
          <span style={{ background: '#f1f2f4', color: '#4b5563', fontSize: 11, fontWeight: 500, padding: '2px 9px', borderRadius: 6 }}>{level}</span>
          <span style={{ background: '#f1f2f4', color: '#4b5563', fontSize: 11, fontWeight: 500, padding: '2px 9px', borderRadius: 6 }}>{difficulty}</span>
        </span>
        <span style={{ display: 'block', height: 4, borderRadius: 9999, background: '#e5e7eb', overflow: 'hidden' }}>
          <span style={{ display: 'block', height: '100%', width: pct + '%', background: 'var(--ui-surface-inverse-alt)', borderRadius: 9999 }} />
        </span>
        <span style={{ fontSize: 11, color: '#6b7280' }}>{completed}/{total} videos completed</span>
      </span>
    </button>
  );
}

export default CourseCard;
