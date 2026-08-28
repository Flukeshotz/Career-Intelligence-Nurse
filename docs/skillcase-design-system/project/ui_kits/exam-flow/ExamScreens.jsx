// The B1 exam system — /b1/exams/. Four section workspaces and four results
// screens, all instances of one structure: back bar → meter row → well → footer.
const NS = () => window.SkillcaseDesignSystem_a27963 || {};

/* ── Exam screens — the eight surfaces the exam system was missing ──────────
   Built from the four workspaces and four results screens in
   src/pages/b1/exams/. Every value below is read from those files:

     back bar     ChevronLeft + "Back" at text-slate-900 14/600, section label
                  at text-neutral-500 opposite
     heading ink  text-sky-950 (#082f49) — question counter, block title,
                  greeting, review headings
     timer        px-2 py-1 bg-black/5 rounded-[40px] border border-black/5
     progress     flex-1 h-2.5 rounded-[200px], amber-300 done / zinc-100 not
     primary CTA  bg-blue-950 (#172554), white 14/600, py-3 rounded-lg shadow-md
     review CTA   bg-[#002856] — navy, NOT blue-950. A real distinction
     results well max-w-[360px] px-5 pt-8 pb-6 bg-black/5 rounded-xl
     ring         track #e2e8f0, arc #0BAA45, sky-950 24px + 8px caption
     stat tiles   green-700/10 · red-100 · neutral-400/20

   All eight are instances of ONE structure — back bar, optional meter row,
   scrolling well, footer action — which is the task template (phase 8 doc). */

const PAGE = {
  width: 390, height: 780, display: 'flex', flexDirection: 'column',
  background: 'var(--ui-surface-card)', overflow: 'hidden', position: 'relative',
  fontFamily: 'var(--font-family)', boxSizing: 'border-box',
};

function BackBar({ section }) {
  return (
    <div style={{ alignSelf: 'stretch', padding: '10px 16px', background: 'var(--ui-surface-card)', flexShrink: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button type="button" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'none', border: 0, padding: 2, cursor: 'pointer', font: 'inherit' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ui-text-body-alt)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          <span style={{ color: 'var(--ui-text-body-alt)', fontSize: 14, fontWeight: 600, lineHeight: '24px' }}>Back</span>
        </button>
        <span style={{ color: 'var(--ui-text-muted)', fontSize: 14, fontWeight: 600, lineHeight: '24px' }}>{section}</span>
      </div>
    </div>
  );
}

function MeterRow({ index, total, time }) {
  const { ExamTimerPill } = NS();
  return (
    <div style={{ alignSelf: 'stretch', padding: '4px 16px 0', display: 'flex', flexDirection: 'column', gap: 16, flexShrink: 0 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ color: 'var(--ui-text-primary)', fontSize: 16, fontWeight: 600, lineHeight: '20px', whiteSpace: 'nowrap' }}>
          Question {String(index + 1).padStart(2, '0')} of {String(total).padStart(2, '0')}
        </span>
        {ExamTimerPill ? <ExamTimerPill seconds={time} /> : null}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, paddingBottom: 16 }}>
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} style={{ flex: 1, height: 10, borderRadius: 200, background: i <= index ? 'var(--ui-progress-fill)' : 'var(--ui-exam-track)' }} />
        ))}
      </div>
    </div>
  );
}

function Footer({ primary, secondary, busy = false }) {
  const { AppButton, LiveRegion } = NS();
  return (
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 0, padding: 16, display: 'flex', flexDirection: 'column', gap: 10, zIndex: 40, background: 'linear-gradient(to top,#fff 55%,rgba(255,255,255,.95) 80%,transparent)' }}>
      {LiveRegion ? <LiveRegion message={busy ? 'Submitting your answers' : ''} /> : null}
      <button type="button" disabled={busy} style={{
        width: '100%', padding: '12px 0', borderRadius: 8, border: 0,
        background: 'var(--ui-exam-cta-bg)', color: '#fff', fontSize: 14, fontWeight: 600,
        boxShadow: '0 4px 6px -1px rgba(0,0,0,.1)', cursor: busy ? 'not-allowed' : 'pointer',
        opacity: busy ? 0.5 : 1, font: 'inherit', fontFamily: 'inherit',
        display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 'var(--ui-target-min)',
      }}>{primary}</button>
      {secondary ? (
        <button type="button" style={{
          width: '100%', padding: '12px 0', borderRadius: 8, background: 'var(--ui-surface-card)',
          border: '1px solid var(--ui-border-muted)', color: 'var(--ui-learn-ink)',
          fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          boxShadow: '0 1px 2px rgba(0,0,0,.05)', minHeight: 'var(--ui-target-min)',
        }}>{secondary}</button>
      ) : null}
      {AppButton ? null : null}
    </div>
  );
}

function Well({ children, pad = '16px 16px 140px' }) {
  return <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: pad, display: 'flex', flexDirection: 'column', gap: 16 }}>{children}</div>;
}

/* ── 1. Reading workspace ─────────────────────────────────────────────────── */
function ExamReadingWorkspace() {
  const { DifficultyBadge, OptionRow } = NS();
  return (
    <div style={PAGE}>
      <BackBar section="Reading" />
      <MeterRow index={1} total={5} time={1284} />
      <Well>
        <h1 style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>Leseverstehen — Teil 2</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: 6 }}>
            <span style={{ padding: '2px 8px', background: 'var(--ui-surface-sunken)', borderRadius: 40, color: 'var(--ui-text-muted)', fontSize: 12, fontWeight: 500 }}>B1</span>
            {DifficultyBadge ? <DifficultyBadge size="sm" level="Medium" /> : null}
          </div>
          <button type="button" style={{ height: 28, padding: '0 10px', background: 'var(--ui-surface-sunken)', border: 0, borderRadius: 8, display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontFamily: 'inherit' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ui-learn-ink)" strokeWidth="2" strokeLinecap="round"><path d="M11 5 6 9H2v6h4l5 4V5z" /><path d="M19.1 4.9a10 10 0 0 1 0 14.2" /></svg>
            <span style={{ color: 'var(--ui-learn-ink)', fontSize: 12, fontWeight: 500 }}>Listen</span>
          </button>
        </div>
        <div style={{ background: 'var(--ui-surface-card)', border: '1px solid var(--ui-border-default)', borderRadius: 12, padding: 20, boxShadow: '0 1px 2px rgba(0,0,0,.05)', fontSize: 12, lineHeight: '32px', color: 'var(--ui-text-body-alt)', textAlign: 'left' }}>
          Im Stadtzentrum von Bremen eröffnet nächsten Monat eine neue Bibliothek. Die Öffnungszeiten sind von Montag bis Freitag zwischen 9 und 19 Uhr.
        </div>
        <p style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 14, fontWeight: 600 }}>Wann ist die Bibliothek am Samstag geöffnet?</p>
        {OptionRow ? (
          <React.Fragment>
            <OptionRow letter="A" label="Von 9 bis 19 Uhr" />
            <OptionRow letter="B" label="Nur am Vormittag" state="selected" />
            <OptionRow letter="C" label="Gar nicht" />
          </React.Fragment>
        ) : null}
      </Well>
      <Footer primary="Next Question" secondary="Previous" />
    </div>
  );
}

/* ── 2. Listening workspace ───────────────────────────────────────────────── */
function ExamListeningWorkspace() {
  const { AudioPlayer, OptionRow } = NS();
  return (
    <div style={PAGE}>
      <BackBar section="Listening" />
      <MeterRow index={2} total={6} time={742} />
      <Well>
        <h1 style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>Hörverstehen — Teil 1</h1>
        {AudioPlayer ? <AudioPlayer label="Aufnahme 3" time={34} duration={96} /> : null}
        <p style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 14, fontWeight: 600 }}>Was möchte der Anrufer?</p>
        {OptionRow ? (
          <React.Fragment>
            <OptionRow letter="A" label="Einen Termin verschieben" state="selected" />
            <OptionRow letter="B" label="Eine Rechnung bezahlen" />
            <OptionRow letter="C" label="Eine Adresse ändern" />
          </React.Fragment>
        ) : null}
      </Well>
      <Footer primary="Next Question" secondary="Previous" />
    </div>
  );
}

/* ── 3. Writing workspace ─────────────────────────────────────────────────── */
function ExamWritingWorkspace() {
  const { TextField } = NS();
  return (
    <div style={PAGE}>
      <BackBar section="Writing" />
      <MeterRow index={0} total={2} time={1740} />
      <Well>
        <h1 style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>Schreiben — Aufgabe 1</h1>
        <div style={{ background: 'var(--ui-surface-subtle)', border: '1px solid var(--ui-border-default)', borderRadius: 12, padding: 16, fontSize: 12, lineHeight: '20px', color: 'var(--ui-text-body-alt)', textAlign: 'left' }}>
          Sie haben einen neuen Job in München gefunden. Schreiben Sie eine E-Mail an Ihre Freundin Anna. Schreiben Sie 30–40 Wörter.
        </div>
        {TextField ? <TextField multiline rows={8} label="Ihre Antwort" placeholder="Liebe Anna, …" hint="30–40 Wörter" /> : null}
      </Well>
      <Footer primary="Submit Writing Test" secondary="Save draft" busy />
    </div>
  );
}

/* ── 4. Speaking workspace ────────────────────────────────────────────────── */
function ExamSpeakingWorkspace() {
  const { AudioTapButton, AudioPlayer } = NS();
  return (
    <div style={PAGE}>
      <BackBar section="Speaking" />
      <MeterRow index={1} total={3} time={296} />
      <Well>
        <h1 style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 16, fontWeight: 600, lineHeight: '20px' }}>Sprechen — Teil 2</h1>
        <div style={{ background: 'var(--ui-surface-subtle)', border: '1px solid var(--ui-border-default)', borderRadius: 12, padding: 16, fontSize: 12, lineHeight: '20px', color: 'var(--ui-text-body-alt)', textAlign: 'left' }}>
          Beschreiben Sie ein Foto aus Ihrem Alltag. Sprechen Sie etwa eine Minute.
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20, padding: '20px 0' }}>
          {AudioTapButton ? <AudioTapButton size={80} /> : null}
          <span style={{ color: 'var(--ui-text-muted)', fontSize: 12, fontWeight: 500 }}>Tap to record</span>
        </div>
        {AudioPlayer ? <AudioPlayer label="Recorded Audio" time={41} duration={60} /> : null}
      </Well>
      <Footer primary="Submit Speaking Test" secondary="Re-record" />
    </div>
  );
}

/* ── Results ──────────────────────────────────────────────────────────────── */
function StatTile({ label, value, tone }) {
  const T = {
    correct: { bg: 'var(--ui-success-surface)', border: 'var(--ui-success-border)', fg: 'var(--ui-success-fg)' },
    incorrect: { bg: 'var(--ui-danger-surface)', border: 'var(--ui-danger-border)', fg: 'var(--ui-danger-fg)' },
    skipped: { bg: 'var(--ui-neutral-surface)', border: 'var(--ui-neutral-border)', fg: 'var(--ui-neutral-fg)' },
  }[tone];
  return (
    <div style={{ flex: 1, padding: 8, background: T.bg, border: '1px solid ' + T.border, borderRadius: 6, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <span style={{ color: T.fg, fontSize: 10, fontWeight: 500, lineHeight: '20px' }}>{label}</span>
      <span style={{ color: T.fg, fontSize: 20, fontWeight: 600, marginTop: 2 }}>{String(value).padStart(2, '0')}</span>
    </div>
  );
}

function ResultsSummary({ section, greeting, score, correct, incorrect, skipped, total }) {
  const { ScoreRing } = NS();
  return (
    <div style={PAGE}>
      <BackBar section={section + ' Feedback'} />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '24px 16px', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: 360, padding: '32px 20px 24px', background: 'var(--ui-exam-panel)', borderRadius: 12, border: '1px solid var(--ui-border-default)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, boxSizing: 'border-box' }}>
          <h2 style={{ margin: 0, textAlign: 'center', color: 'var(--ui-text-primary)', fontSize: 24, fontWeight: 600, lineHeight: '36px' }}>{greeting}</h2>
          {ScoreRing ? <ScoreRing score={score} circleSize={128} bands={{good:75,mid:50}} label={correct + ' of ' + total + ' correct'} /> : null}
          <div style={{ alignSelf: 'stretch', display: 'flex', alignItems: 'center', gap: 8 }}>
            <StatTile label="Correct" value={correct} tone="correct" />
            <StatTile label="Incorrect" value={incorrect} tone="incorrect" />
            <StatTile label="Skipped" value={skipped} tone="skipped" />
          </div>
          <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button type="button" style={{ padding: '12px 16px', borderRadius: 8, border: 0, background: 'var(--ui-exam-review-bg)', color: '#fff', fontSize: 12, fontWeight: 600, lineHeight: '20px', cursor: 'pointer', fontFamily: 'inherit', minHeight: 'var(--ui-target-min)' }}>Review Answers</button>
            <button type="button" style={{ padding: '12px 16px', borderRadius: 8, background: 'var(--ui-surface-card)', border: '1px solid var(--ui-border-muted)', color: 'var(--ui-learn-ink)', fontSize: 12, fontWeight: 600, lineHeight: '20px', cursor: 'pointer', fontFamily: 'inherit', minHeight: 'var(--ui-target-min)' }}>Start Next Section</button>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExamReadingResults() {
  return <ResultsSummary section="Reading" greeting="Gut gemacht!" score={80} correct={4} incorrect={1} skipped={0} total={5} />;
}
function ExamListeningResults() {
  return <ResultsSummary section="Listening" greeting="Weiter so!" score={67} correct={4} incorrect={2} skipped={0} total={6} />;
}

/* Writing results — the marked-up-text variant. `#d0021b` on `#fff0f1` with a
   dashed underline is the error mark from ExamWritingResults.jsx:62. */
function ExamWritingResults() {
  const { MetricBar } = NS();
  return (
    <div style={PAGE}>
      <BackBar section="Writing Feedback" />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '20px 16px 24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
        <h3 style={{ margin: 0, color: 'var(--ui-text-primary)', fontSize: 16, fontWeight: 600 }}>Writing Review</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {MetricBar ? (
            <React.Fragment>
              <MetricBar compact label="Task achievement" score={78} />
              <MetricBar compact label="Grammar" score={62} />
              <MetricBar compact label="Vocabulary" score={85} />
            </React.Fragment>
          ) : null}
        </div>
        <div style={{ background: 'var(--ui-surface-subtle)', border: '1px solid var(--ui-border-default)', borderRadius: 12, padding: 16, fontSize: 12, lineHeight: '22px', color: 'var(--ui-text-body-alt)', textAlign: 'left' }}>
          Liebe Anna, ich <span style={{ color: '#d0021b', background: '#fff0f1', fontWeight: 500, borderBottom: '2px dashed #d0021b' }}>habe gefunden</span> einen neuen Job in München. Ich <span style={{ color: '#d0021b', background: '#fff0f1', fontWeight: 500, borderBottom: '2px dashed #d0021b' }}>bin</span> sehr glücklich!
        </div>
        <p style={{ margin: 0, fontSize: 12, lineHeight: '20px', color: 'var(--ui-text-secondary)' }}>Word order in the perfect tense places the participle at the end. Two agreement slips are marked above.</p>
      </div>
      <Footer primary="Start Next Section" />
    </div>
  );
}

/* Speaking results — score summary plus the recording under review. */
function ExamSpeakingResults() {
  const { ScoreRing, MetricBar, AudioPlayer } = NS();
  return (
    <div style={PAGE}>
      <BackBar section="Speaking Feedback" />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '20px 16px 24px', display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'stretch' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {ScoreRing ? <ScoreRing score={71} circleSize={128} bands={{good:75,mid:50}} label="Speaking band B1" /> : null}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {MetricBar ? (
            <React.Fragment>
              <MetricBar compact label="Fluency" score={74} />
              <MetricBar compact label="Pronunciation" score={68} />
              <MetricBar compact label="Range" score={71} />
            </React.Fragment>
          ) : null}
        </div>
        {AudioPlayer ? <AudioPlayer variant="review" label="Recorded audio" time={0} duration={58} /> : null}
        <p style={{ margin: 0, fontSize: 12, lineHeight: '20px', color: 'var(--ui-text-secondary)' }}>Clear delivery throughout. Work on final consonants — <em>Tag</em> and <em>Weg</em> were softened.</p>
      </div>
      <Footer primary="Start Next Section" secondary="Re-record" />
    </div>
  );
}

Object.assign(window, {
  ExamReadingWorkspace, ExamListeningWorkspace, ExamWritingWorkspace, ExamSpeakingWorkspace,
  ExamReadingResults, ExamListeningResults, ExamWritingResults, ExamSpeakingResults,
});
