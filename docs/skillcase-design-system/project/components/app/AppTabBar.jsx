import React from 'react';

/* Bottom tab bar — src/components/BottomTabBar.jsx as shipped.
   Five fixed slots: Home · Jobs · centre arch · Coins · Streak.
   Home always routes to "/" (the German Practice hub — the practice hub IS
   the home screen). Jobs routes to "/jobs" for A1/A2 (locked teaser) and
   "/job-screening" for B1/B2 (the real pipeline). Streak is a button that
   fires "openLeaderboard" — it opens the streak leaderboard, it is not a
   route. Coins is a read-out, not a button.
   The centre is NOT a tab: it is a raised semicircular dome (white fill +
   12px white rim + 4px #e5e7eb track + 4px #0055d4 arc, geometry lifted
   verbatim from the shipped SVG) with the German flag over a TWO-LINE
   caption. It is only tappable in Guided German mode, where it goes to
   /learn-german/recap; in every other mode it is inert.

   Phase 7: the four tab slots and the centre dome are already real <button>s
   when interactive, so keyboard reach came free — but nothing marked focus.
   The dual ring is applied per-slot on :focus-visible. The inert slots (Coins,
   the dome outside Guided German, dimmed slots in locked mode) render as <div>
   and are deliberately NOT focusable: they are read-outs, not controls. */
export function AppTabBar({
  activeTab = 'home',
  ringLine1 = 'German',
  ringLine2 = 'words learnt',
  ringProgress = 0.62,
  ringEnabled = false,
  coins = 280,
  streakDays = 0,
  lockedSlots = false,
  icons = {},
  onSelect,
  style,
}) {
  const [focusKey, setFocusKey] = React.useState(null);
  const slot = (key, label, src, fallback, { button = true, active: forced } = {}) => {
    const active = forced !== undefined ? forced : activeTab === key;
    const dim = lockedSlots && key !== 'home';
    const Tag = button && !dim ? 'button' : 'div';
    return (
      <Tag key={key} type={Tag === 'button' ? 'button' : undefined}
        onClick={Tag === 'button' && onSelect ? () => onSelect(key) : undefined}
        onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocusKey(key); }}
        onBlur={() => setFocusKey((k) => (k === key ? null : k))}
        style={{
          width: 56, background: active ? '#f4f4f6' : 'none', border: 'none', padding: '6px 0',
          borderRadius: 8, cursor: Tag === 'button' ? 'pointer' : 'default', outline: 'none',
          boxShadow: focusKey === key ? 'var(--ui-focus-ring)' : 'none',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, flexShrink: 0,
          opacity: dim ? 0.4 : 1, filter: dim ? 'grayscale(1)' : 'none',
        }}>
        <span style={{ width: 24, height: 24, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: active ? 'var(--ui-surface-inverse-alt)' : '#78716c' }}>
          {src ? <img src={src} alt="" aria-hidden="true" style={{ width: 24, height: 24, objectFit: 'contain' }} /> : fallback}
        </span>
        <span style={{
          fontFamily: "var(--font-family, 'Poppins', sans-serif)", fontSize: 10, lineHeight: '12px',
          fontWeight: active ? 600 : 500, color: active ? '#000' : '#78716c', whiteSpace: 'nowrap',
        }}>{label}</span>
      </Tag>
    );
  };
  const p = Math.max(0, Math.min(1, ringProgress));
  const Centre = ringEnabled ? 'button' : 'div';
  return (
    <div style={{
      height: 72, flexShrink: 0, background: 'var(--ui-surface-card)',
      boxShadow: 'var(--app-tabbar-shadow, 0px -1px 58px 0px rgba(0,0,0,0.08))',
      padding: '0 16px', boxSizing: 'border-box',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', ...style,
    }}>
      {slot('home', 'Home', icons.home, <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10.5 12 3l9 7.5" /><path d="M5 9.5V21h14V9.5" /></svg>)}
      {slot('jobs', 'Jobs', icons.jobs, <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="13" rx="2" /><path d="M9 7V5h6v2" /></svg>)}
      <Centre type={ringEnabled ? 'button' : undefined}
        onClick={ringEnabled && onSelect ? () => onSelect('recap') : undefined}
        onFocus={(e) => { if (e.target.matches(':focus-visible')) setFocusKey('recap'); }}
        onBlur={() => setFocusKey((k) => (k === 'recap' ? null : k))}
        style={{
          width: 130, height: '100%', background: 'none', border: 'none', padding: 0, outline: 'none',
          borderRadius: 8, boxShadow: focusKey === 'recap' ? 'var(--ui-focus-ring)' : 'none',
          cursor: ringEnabled ? 'pointer' : 'default', position: 'relative',
          display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
        }}>
        <span style={{ position: 'absolute', top: -28, left: '50%', transform: 'translateX(-50%)', width: 130, pointerEvents: 'none', filter: 'drop-shadow(0px -3px 6px rgba(0,0,0,0.03))' }}>
          <svg width="130" height="52" viewBox="0 0 140 48" style={{ display: 'block', overflow: 'visible' }} shapeRendering="geometricPrecision">
            <path d="M 30 46 A 40 40 0 0 1 110 46 Z" fill="#ffffff" />
            <path d="M 30 46 A 40 40 0 0 1 110 46" fill="none" stroke="#ffffff" strokeWidth="12" strokeLinecap="round" />
            <path d="M 30 46 A 40 40 0 0 1 110 46" fill="none" stroke="#e5e7eb" strokeWidth="4" strokeLinecap="round" />
            <path d="M 30 46 A 40 40 0 0 1 110 46" fill="none" stroke="#0055d4" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="125.6" strokeDashoffset={125.6 * (1 - p)} />
          </svg>
        </span>
        {icons.ring ? (
          <img src={icons.ring} alt="" aria-hidden="true" style={{ width: 32, height: 20, objectFit: 'contain', borderRadius: 2, marginTop: -12, marginBottom: 2, position: 'relative', zIndex: 1 }} />
        ) : null}
        <span style={{
          fontFamily: "var(--font-family, 'Poppins', sans-serif)", fontSize: 10, lineHeight: '12px',
          fontWeight: 500, color: '#78716c', textAlign: 'center', position: 'relative', zIndex: 1,
          display: 'flex', flexDirection: 'column',
        }}><span>{ringLine1}</span>{ringLine2 ? <span>{ringLine2}</span> : null}</span>
      </Centre>
      {slot('coins', String(coins), icons.coins, <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round"><circle cx="12" cy="12" r="9" /></svg>, { button: false, active: false })}
      {slot('streak', `${streakDays} days`, icons.streak, <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2 4 14h6l-1 8 9-12h-6z" /></svg>, { active: false })}
    </div>
  );
}

export default AppTabBar;
