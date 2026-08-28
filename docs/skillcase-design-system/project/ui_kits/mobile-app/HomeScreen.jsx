// The shipped app shell, level-aware. One component covers every level because
// the app itself is one shell: NewNavbar + TopModeSwitcher + BottomTabBar with
// the surface swapped underneath. What changes per level is the tab set, the
// tile set, the centre-arch caption and where the Jobs tab goes.
const NS = () => window.SkillcaseDesignSystem_a27963 || {};

function JourneyBackdrop({ children }) {
  return (
    <div style={{ position: 'relative', minHeight: '100%', background: 'linear-gradient(180deg,#d8e7fb 0%,#e9f2fd 100%)' }}>
      <svg viewBox="0 0 358 620" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
        <path d="M150 -20 C 240 90, 60 170, 150 280 C 240 390, 60 470, 150 620" fill="none" stroke="#ffffff" strokeWidth="34" strokeLinecap="round" opacity=".9" />
      </svg>
      <div style={{ position: 'relative', padding: '18px 16px 24px', display: 'flex', flexDirection: 'column', gap: 22 }}>{children}</div>
    </div>
  );
}

// /jobs — the A1/A2 gate. White chrome with its own back header: this screen
// replaces the shell, it does not sit inside the mode switcher.
function JobsLocked({ level, onBack }) {
  const { LockGateCard, JobListingCard } = NS();
  return (
    <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <div style={{ padding: '10px 16px 16px', background: '#fff', display: 'flex', alignItems: 'center', gap: 12, borderBottom: '1px solid #f1f5f9', flexShrink: 0 }}>
        <button type="button" onClick={onBack} aria-label="Go back" style={{ width: 28, height: 28, boxSizing: 'content-box', padding: 8, margin: -8, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 6, border: '2px solid rgba(0,0,0,0.4)', background: 'none', color: '#64748b', cursor: 'pointer' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
        </button>
        <div style={{ color: 'var(--ui-learn-ink)', fontSize: 16, fontWeight: 600 }}>Jobs</div>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '24px 16px 32px', background: 'rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <LockGateCard image={window.SC_ASSETS + 'bag.webp'} level={level} onCta={onBack} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ color: 'var(--ui-learn-ink)', fontSize: 16, fontWeight: 600, lineHeight: '24px' }}>800+ jobs in Germany are waiting for you</div>
          {window.TEASER_JOBS.map((j) => <JobListingCard key={j.title} {...j} locked />)}
        </div>
      </div>
    </div>
  );
}

// /job-screening — the B1/B2 pipeline lobby. Stays inside the navy shell,
// because B1/B2 users own the mode switcher (Job Preparation ⇄ German Jobs).
// The pale sky-to-blue gradient page, the progress ring, the connector-node
// checklist and the amber "Continue with Next Step" bar are all as shipped.
function JobsPipeline() {
  const { JobProgressHeader, JobStepCard } = NS();
  const steps = window.JOB_STEPS;
  const active = steps.find((s) => s.status === 'pending' || s.status === 'review');
  const done = steps.filter((s) => s.status === 'done').length;
  return (
    <div style={{ padding: '24px 16px 32px', background: 'linear-gradient(180deg,#e0f2fe,#dbeafe)', minHeight: '100%', display: 'flex', flexDirection: 'column', gap: 24 }}>
      <JobProgressHeader completed={done} total={steps.length} nextStep={window.JOB_STEP_SUBTITLES[active.id]} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {steps.map((s, i) => (
          <JobStepCard key={s.id} index={i + 1} title={s.title} description={s.desc} status={s.status} last={i === steps.length - 1} />
        ))}
      </div>
      <button type="button" style={{ width: '100%', height: 48, background: 'linear-gradient(90deg,#fde68a,#fcd34d)', color: 'var(--ui-text-brand)', borderRadius: 8, border: '1px solid #fcd34d', fontSize: 15, fontWeight: 700, cursor: 'pointer', boxShadow: '0 4px 12px rgba(8,50,98,.1)' }}>
        Continue with Next Step
      </button>
    </div>
  );
}

// The `paywall` step — a refundable security deposit that replaces the whole
// pipeline until it is paid. Not the premium subscription paywall.
function JobsDepositGate() {
  const { DepositGateCard } = NS();
  return (
    <div style={{ minHeight: '100%', background: 'linear-gradient(180deg,#e0f2fe,#dbeafe)', padding: '32px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <DepositGateCard mascot={window.SC_ASSETS + 'maya/mayaSmiling.webp'} />
    </div>
  );
}

// Streak leaderboard — what the Streak slot in the bottom bar opens. It fires
// an "openLeaderboard" event rather than navigating, so it is a sheet.
function StreakSheet({ onClose }) {
  const sheetRef = React.useRef(null);
  const openerRef = React.useRef(null);
  React.useEffect(() => {
    openerRef.current = document.activeElement;
    const first = sheetRef.current && sheetRef.current.querySelector('button');
    if (first) first.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') { e.stopPropagation(); onClose(); return; }
      if (e.key !== 'Tab' || !sheetRef.current) return;
      const f = sheetRef.current.querySelectorAll('button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])');
      if (!f.length) return;
      const a = f[0], z = f[f.length - 1];
      if (e.shiftKey && document.activeElement === a) { e.preventDefault(); z.focus(); }
      else if (!e.shiftKey && document.activeElement === z) { e.preventDefault(); a.focus(); }
    };
    document.addEventListener('keydown', onKey, true);
    return () => {
      document.removeEventListener('keydown', onKey, true);
      if (openerRef.current && openerRef.current.focus) openerRef.current.focus();
    };
  }, [onClose]);
  const rows = [
    { name: 'Priya S.', days: 46 }, { name: 'Ananya R.', days: 38 },
    { name: 'You', days: 31, me: true }, { name: 'Rahul K.', days: 27 }, { name: 'Meera J.', days: 22 },
  ];
  return (
    <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'rgba(0,10,25,0.45)', display: 'flex', alignItems: 'flex-end', zIndex: 200 }}>
      <div ref={sheetRef} role="dialog" aria-modal="true" aria-labelledby="streak-sheet-title" onClick={(e) => e.stopPropagation()} style={{ width: '100%', background: '#fff', borderRadius: '20px 20px 0 0', padding: '20px 16px 28px', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 id="streak-sheet-title" style={{ margin: 0, fontSize: 18, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Streak leaderboard</h2>
          <button type="button" onClick={onClose} aria-label="Close leaderboard" style={{ border: 'none', background: 'rgba(0,0,0,0.05)', width: 28, height: 28, boxSizing: 'content-box', padding: 8, margin: -8, borderRadius: 9999, cursor: 'pointer', color: 'var(--ui-text-secondary)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
          </button>
        </div>
        {rows.map((r, i) => (
          <div key={r.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 12px', borderRadius: 10, background: r.me ? '#e6efff' : 'var(--ui-surface-subtle)' }}>
            <span style={{ width: 20, fontSize: 13, fontWeight: 700, color: 'var(--ui-text-faint)' }}>{i + 1}</span>
            <span style={{ flex: 1, fontSize: 14, fontWeight: r.me ? 700 : 500, color: 'var(--ui-text-body-alt)' }}>{r.name}</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ui-text-brand)' }}>{r.days} days</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppScreen({ level = 'A1', initialSurface, plan = 'free', showAdmin = false, height = 844, deposit = false }) {
  const ns = NS();
  const { AppHeaderBar, ModeRail, AppTabBar, JourneyCard, PracticeTile, PromoBanner, CourseCard, LevelLadder } = ns;
  const model = window.LEVEL_MODEL[String(level).toUpperCase()];
  const [surface, setSurface] = React.useState(initialSurface || (model.isB1 ? 'practice' : 'practice'));
  const [streakOpen, setStreakOpen] = React.useState(false);
  if (!AppHeaderBar || !LevelLadder) return <div style={{ padding: 24, fontSize: 13, color: '#717680' }}>Loading design system…</div>;

  const A = window.SC_ASSETS;
  const modeIndex = model.modes.findIndex((m) => m.key === surface);
  const inMode = modeIndex >= 0;
  const ring = surface === 'learn' ? ['German', 'words learnt']
    : surface === 'classes' ? ['Course', 'status']
      : surface === 'jobs' ? ['Your job', 'progress'] : model.ring;
  // /jobs (A1/A2) replaces the whole shell; the B1/B2 pipeline lives inside it.
  const jobsTakesOverShell = surface === 'jobs' && model.jobs === 'locked';
  const activeTab = surface === 'jobs' ? 'jobs' : 'home';

  return (
    <div style={{ width: 390, height, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#fff', fontFamily: 'var(--font-family)', position: 'relative' }}>
      {jobsTakesOverShell ? (
        <JobsLocked level={model.headerLevel} onBack={() => setSurface('practice')} />
      ) : (
        <React.Fragment>
          <AppHeaderBar level={model.headerLevel} plan={plan} showAdmin={showAdmin} />
          <ModeRail items={model.modes} activeIndex={inMode ? modeIndex : 0} onSelect={(i) => setSurface(model.modes[i].key)} />
          <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: surface === 'learn' ? '#e9f2fd' : surface === 'jobs' ? '#f0f6ff' : '#fff' }}>
            {surface === 'learn' ? (
              <JourneyBackdrop>
                {window.JOURNEY.map((l) => (
                  <div key={l.title} style={{ display: 'flex', justifyContent: l.align }}>
                    <JourneyCard {...l} />
                  </div>
                ))}
              </JourneyBackdrop>
            ) : surface === 'classes' ? (
              <div style={{ padding: '16px 16px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
                <h2 style={{ margin: 0, textAlign: 'center', fontSize: 16, fontWeight: 700, color: '#111827' }}>German Classes</h2>
                <CourseCard image={A + 'geothe.webp'} />
              </div>
            ) : surface === 'jobs' ? (
              deposit ? <JobsDepositGate /> : <JobsPipeline />
            ) : (
              <div style={{ padding: '16px 0 24px', display: 'flex', flexDirection: 'column', gap: 18 }}>
                <LevelLadder level={String(level).toUpperCase()} />
                <div style={{ padding: '0 16px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10 }}>
                  {model.tiles.map((t) => <PracticeTile key={t.title} title={t.title} caption={t.caption} image={t.image} />)}
                </div>
                <div style={{ padding: '0 16px' }}><PromoBanner image={A + 'maya/mayaStanding.webp'} /></div>
              </div>
            )}
          </div>
        </React.Fragment>
      )}
      <AppTabBar
        activeTab={activeTab}
        ringLine1={ring[0]} ringLine2={ring[1]}
        ringEnabled={surface === 'learn'} ringProgress={0.62}
        coins={280} streakDays={31} icons={window.TAB_ICONS}
        onSelect={(k) => {
          if (k === 'home') setSurface('practice');
          else if (k === 'jobs') setSurface('jobs');
          else if (k === 'streak') setStreakOpen(true);
        }}
      />
      {streakOpen ? <StreakSheet onClose={() => setStreakOpen(false)} /> : null}
    </div>
  );
}

Object.assign(window, { AppScreen, JobsLocked, JobsPipeline, JobsDepositGate, StreakSheet, JourneyBackdrop });
