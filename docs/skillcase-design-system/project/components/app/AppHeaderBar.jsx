import React from 'react';
import { PlanPill } from './PlanPill.jsx';

/* App navbar — src/components/NewNavbar.jsx, with the final copy decision.
   #002856, sticky, h-16 (64px) with env(safe-area-inset-top) above it.
   Left: the level title as a tappable brand link — "{level} German Level"
   over "B1 level is minimum for German jobs" at 70% white (the final edit;
   the build still shipped "German for Career Growth" at screenshot time).
   Right: the plan pill and a 28px profile avatar (grey SVG fallback). */
export function AppHeaderBar({
  level = 'A1',
  subtitle = 'B1 level is minimum for German jobs',
  plan = 'free',
  daysLeft = 5,
  avatarUrl,
  showAdmin = false,
  style,
}) {
  return (
    <header style={{ background: 'var(--ui-text-brand)', position: 'relative', zIndex: 50, flexShrink: 0, ...style }}>
      <div style={{ height: 64, width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '0 16px', boxSizing: 'border-box' }}>
        <div style={{ minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <h1 style={{ margin: 0, color: '#fff', fontSize: 16, fontWeight: 600, lineHeight: '20px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{level} German Level</h1>
          <p style={{ margin: 0, color: 'rgba(255,255,255,0.7)', fontSize: 12, lineHeight: '16px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{subtitle}</p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          {showAdmin ? (
            <span style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', padding: '6px 16px', borderRadius: 9999, fontWeight: 700, fontSize: 13 }}>Admin</span>
          ) : null}
          <PlanPill plan={plan} daysLeft={daysLeft} />
          {avatarUrl ? (
            <img src={avatarUrl} alt="Profile" style={{ width: 28, height: 28, borderRadius: 9999, objectFit: 'cover', flexShrink: 0 }} />
          ) : (
            <svg viewBox="0 0 100 100" width="28" height="28" style={{ borderRadius: 9999, flexShrink: 0 }} fill="none">
              <circle cx="50" cy="50" r="50" fill="#D1D5DB" />
              <circle cx="50" cy="38" r="16" fill="#9CA3AF" />
              <ellipse cx="50" cy="78" rx="28" ry="20" fill="#9CA3AF" />
            </svg>
          )}
        </div>
      </div>
    </header>
  );
}

export default AppHeaderBar;
