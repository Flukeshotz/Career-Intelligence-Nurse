import React from 'react';

/* The easy/medium/hard pill. Five verbatim copies of getDifficultyBadgeStyle
   ship in the exam surfaces alone (PaperSelect, Reading + Writing workspaces,
   Reading + Writing results). The mapping is a three-way fallthrough: anything
   that is not easy/medium/intermediate renders as the red "hard" style,
   including an unrecognised tag — so bad data reads as a hard paper.
   `size` covers the two shipped scales: 8px in the paper list, 12px on the
   content headers. */
const styles = {
  easy: { bg: 'var(--ui-success-surface)', border: 'var(--ui-success-border)', ink: 'var(--ui-success-fg)' },
  medium: { bg: 'var(--ui-warning-surface)', border: 'var(--ui-warning-border)', ink: 'var(--ui-warning-fg)' },
  hard: { bg: 'var(--ui-danger-surface)', border: 'var(--ui-danger-border)', ink: 'var(--ui-danger-fg)' },
};

export function DifficultyBadge({ level = 'Easy', size = 'md', style }) {
  const d = String(level || 'Easy').toLowerCase();
  const key = d === 'easy' ? 'easy' : (d === 'medium' || d === 'intermediate') ? 'medium' : 'hard';
  const c = styles[key];
  const sm = size === 'sm';
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: sm ? '2px 6px' : '2px 8px', borderRadius: 40, border: '1px solid ' + c.border, background: c.bg, color: c.ink, fontSize: sm ? 8 : 12, fontWeight: 500, lineHeight: sm ? '8px' : '20px', textTransform: 'capitalize', ...style }}>{level}</span>
  );
}

export default DifficultyBadge;
