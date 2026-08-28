// The Guided German lesson flow — /learn-german/lesson/:chapterId.
// NewLessonFlow.jsx walks a server-supplied `screens[]` array; each entry's
// `type` selects one of these layouts. Every one is composed from the lesson
// primitives, so the chrome is identical by construction, exactly as in the app.
const NS = () => window.SkillcaseDesignSystem_a27963 || {};
const A = '../../assets/img/';
const MAYA = A + 'maya/mayaLooking.webp';
const MAYA_UP = A + 'maya/mayaThumbsup.webp';
const HAND = A + 'handtap.webp';
const BAKERY = A + 'lesson-bakery.jpg';

const PAGE = { width: 390, height: 760, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'linear-gradient(180deg,#dbeafe,#e0f2fe)', fontFamily: 'var(--font-family)', position: 'relative' };
const TITLE = 'The Bakery Window';

// intro — the lesson cover: the scene photo full-bleed with a translucent
// card holding the level, title, Maya's opening line and Continue.
function IntroScreen() {
  const { LessonProgressBar, LessonFooter } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0} />
      <div style={{ flex: 1, minHeight: 0, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
        <img src={BAKERY} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'relative', width: 300, padding: '20px 0', background: 'rgba(0,0,0,0.5)', borderRadius: 20, boxShadow: '0 24px 48px rgba(0,0,0,.35)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, padding: '0 16px' }}>
            <span style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16 }}>Level 1</span>
            <h1 style={{ margin: 0, color: '#fff', fontSize: 24, fontWeight: 700, textAlign: 'center' }}>{TITLE}</h1>
          </div>
          <div style={{ position: 'relative', width: '85%', marginTop: 34, marginLeft: 24 }}>
            <div style={{ background: '#fff', borderRadius: 12, padding: '8px 16px', boxShadow: '0 10px 24px rgba(0,0,0,.2)', position: 'relative' }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: '#1f2937', lineHeight: '18px' }}>You will learn about food items and how to pronounce them. Lets start.</div>
              <div style={{ position: 'absolute', bottom: -4, left: 110, transform: 'rotate(45deg)', width: 16, height: 16, background: '#fff' }} />
            </div>
          </div>
          <img src={MAYA_UP} alt="" aria-hidden="true" style={{ width: 168, objectFit: 'contain', marginTop: 12 }} />
          <div style={{ width: '100%', padding: '0 16px', marginTop: 8, boxSizing: 'border-box' }}>
            <LessonFooter primaryLabel="Continue" />
          </div>
        </div>
      </div>
    </div>
  );
}

// scenario — the chapter intro that follows the cover. The scene photo fills
// the frame; underneath, a black/5 well holds Maya at its bottom-left edge with
// a white bubble beside her. Tapping ANYWHERE advances her dialogue queue —
// Continue only leaves once she has run out of lines.
function ScenarioScreen() {
  const { LessonProgressBar, LessonFooter } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.08} />
      <div style={{ flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', padding: 16, gap: 12, boxSizing: 'border-box' }}>
        <img src={BAKERY} alt="" aria-hidden="true" style={{ flex: 1, minHeight: 0, width: '100%', objectFit: 'cover', borderRadius: 16, boxShadow: '0 4px 6px rgba(0,0,0,.1)' }} />
        <div style={{ position: 'relative', width: '100%', minHeight: 140, background: 'rgba(0,0,0,0.05)', borderRadius: 16, boxShadow: 'inset 0 2px 4px rgba(0,0,0,.06)', display: 'flex', alignItems: 'center', padding: 16, flexShrink: 0, boxSizing: 'border-box' }}>
          <img src={MAYA} alt="" aria-hidden="true" style={{ position: 'absolute', left: -8, bottom: 0, width: 110, objectFit: 'contain', zIndex: 2 }} />
          <div style={{ marginLeft: 95, width: '100%', position: 'relative', zIndex: 1 }}>
            <div style={{ background: '#fff', padding: 16, borderRadius: 12, boxShadow: '0 1px 2px rgba(0,0,0,.05)', position: 'relative' }}>
              <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 16, height: 16, background: '#fff' }} />
              <div style={{ fontSize: 14, fontWeight: 500, color: '#111827', lineHeight: 1.45 }}>It's morning in Berlin. You walk past a bakery and the smell stops you.</div>
            </div>
          </div>
        </div>
        <LessonFooter primaryLabel="Continue" />
      </div>
    </div>
  );
}

// vocab — one word: photo, tap-to-listen, the German word and its translation,
// plus the optional amber "Did you know?" note.
function VocabScreen() {
  const { LessonProgressBar, MayaPrompt, LessonSheet, LessonFooter, AudioTapButton } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.18} />
      <MayaPrompt image={MAYA} text="You look at the items infront of you." />
      <LessonSheet footer={<LessonFooter primaryLabel="Next" showPrev />}>
        <img src={BAKERY} alt="" aria-hidden="true" style={{ width: '100%', height: 192, objectFit: 'cover', borderRadius: 16, border: '1px solid #f3f4f6', flexShrink: 0 }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginTop: 16 }}>
          <AudioTapButton size={48} hand={HAND} />
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ margin: 0, color: '#000', fontSize: 22, fontWeight: 600 }}>Das Brot</h2>
            <p style={{ margin: '4px 0 0', color: '#9ca3af', fontSize: 16, fontWeight: 500 }}>The bread</p>
          </div>
          <div style={{ width: '100%', marginTop: 8, background: 'linear-gradient(90deg,#fffbeb,rgba(255,247,237,.3))', border: '1px solid rgba(254,243,199,.7)', borderRadius: 16, padding: 16, textAlign: 'left', boxSizing: 'border-box' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <span style={{ padding: 6, background: '#fef3c7', color: '#b45309', borderRadius: 8, display: 'inline-flex', lineHeight: 0 }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2Z" /></svg>
              </span>
              <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'rgba(146,64,14,.8)' }}>Did you know?</span>
            </div>
            <div style={{ color: '#374151', fontSize: 14, lineHeight: 1.6 }}>Germany has over 3,000 registered types of bread — more than any other country.</div>
          </div>
        </div>
      </LessonSheet>
    </div>
  );
}

// grammar — the rule screen: an 80px hero audio button over the word at 46px
// and its meaning at 34px, then the rule itself in an outlined markdown card.
function GrammarScreen() {
  const { LessonProgressBar, MayaPrompt, LessonSheet, LessonFooter, AudioTapButton } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.3} onBack={() => {}} />
      <MayaPrompt image={MAYA} text="Let's look at some grammar!" />
      <LessonSheet footer={<LessonFooter primaryLabel="Got it!" showPrev />}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 24 }}>
          <AudioTapButton size={80} hand={HAND} style={{ marginBottom: 16 }} />
          <div style={{ color: '#000', fontSize: 46, lineHeight: 1, fontWeight: 700, marginBottom: 4 }}>der</div>
          <div style={{ color: '#64748b', fontSize: 34, lineHeight: 1, fontWeight: 500 }}>the</div>
        </div>
        <div style={{ width: '100%', padding: 20, background: '#fff', borderRadius: 16, border: '1px solid #cbd5e1', boxShadow: '0 1px 2px rgba(0,0,0,.05)', boxSizing: 'border-box', textAlign: 'left' }}>
          <h2 style={{ margin: '0 0 12px', fontSize: 16, fontWeight: 600, color: '#0f172a' }}>The three articles</h2>
          <p style={{ margin: '0 0 16px', fontSize: 14, lineHeight: 1.65, color: '#0f172a' }}>Every German noun carries a gender, and the article tells you which one. There is no shortcut — you learn the article with the word.</p>
          <ul style={{ margin: 0, paddingLeft: 24, fontSize: 14, lineHeight: 1.8, color: '#0f172a' }}>
            <li><strong style={{ fontWeight: 500, color: '#0f172a' }}>der</strong> — masculine</li>
            <li><strong style={{ fontWeight: 500, color: '#0f172a' }}>die</strong> — feminine</li>
            <li><strong style={{ fontWeight: 500, color: '#0f172a' }}>das</strong> — neuter</li>
          </ul>
        </div>
      </LessonSheet>
    </div>
  );
}

// quiz — a multiple-choice checkpoint. The question is spoken, not just read,
// so the audio button sits inline beside it.
function QuizScreen() {
  const { LessonProgressBar, MayaPrompt, LessonSheet, LessonFooter, OptionRow, AudioTapButton } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.45} />
      <MayaPrompt image={MAYA} text="Quick! Before you forget…answer these!" />
      <LessonSheet footer={<LessonFooter primaryLabel="Check" showPrev />}>
        <img src={BAKERY} alt="" aria-hidden="true" style={{ width: '100%', height: 176, objectFit: 'cover', borderRadius: 16, border: '1px solid #f3f4f6', marginBottom: 16, flexShrink: 0 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, alignSelf: 'flex-start' }}>
          <AudioTapButton size={40} hand={HAND} />
          <h2 style={{ margin: 0, color: '#000', fontSize: 20, fontWeight: 600, letterSpacing: '-.01em' }}>What is this?</h2>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <OptionRow letter="A" label="Das Brot" />
          <OptionRow letter="B" label="Der Kuchen" state="selected" />
          <OptionRow letter="C" label="Die Milch" />
        </div>
      </LessonSheet>
    </div>
  );
}

// quiz (no image) — the same screen with `screen.image` absent, which is how
// fill-in-the-blank questions ship: the sentence carries the gap, so a photo
// would only give the answer away. The options sit higher up the sheet.
function BlankQuizScreen() {
  const { LessonProgressBar, MayaPrompt, LessonSheet, LessonFooter, OptionRow, AudioTapButton } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.5} />
      <MayaPrompt image={MAYA} text="Fill in the blank." />
      <LessonSheet footer={<LessonFooter primaryLabel="Check" showPrev />}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, alignSelf: 'flex-start' }}>
          <AudioTapButton size={40} hand={HAND} />
          <h2 style={{ margin: 0, color: '#000', fontSize: 20, fontWeight: 600, letterSpacing: '-.01em' }}>Ich m&ouml;chte ___ Brot.</h2>
        </div>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <OptionRow letter="A" label="ein" state="selected" />
          <OptionRow letter="B" label="eine" />
          <OptionRow letter="C" label="einen" />
        </div>
      </LessonSheet>
    </div>
  );
}

// listen_choose — audio-first: no text prompt until you tap. "Can't listen now"
// is the escape hatch for a learner without headphones.
function ListenChooseScreen() {
  const { LessonProgressBar, MayaPrompt, LessonFooter, OptionRow, AudioTapButton } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.55} />
      <MayaPrompt image={MAYA} text="Okay, now listen and answer." />
      <div style={{ flex: 1, minHeight: 0, width: '100%', background: '#fff', borderRadius: '24px 24px 0 0', padding: '16px 16px 20px', marginTop: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 -4px 15px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            <div style={{ color: 'rgba(0,0,0,0.5)', fontSize: 16 }}>Tap to listen</div>
            <AudioTapButton size={52} hand={HAND} />
          </div>
          <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ color: '#000', fontSize: 16, fontWeight: 500 }}>What did she order?</div>
            <OptionRow letter="A" label="Ein Brot" />
            <OptionRow letter="B" label="Zwei Brötchen" />
            <OptionRow letter="C" label="Einen Kaffee" />
          </div>
        </div>
        <LessonFooter primaryLabel="Check" disabled aside="Can't listen now" />
      </div>
    </div>
  );
}

// match_following — two tappable columns; a pair fades to 40% once matched, and
// a wrong pair shakes and flashes rose before resetting.
function MatchFollowingScreen() {
  const { LessonProgressBar, MayaPrompt, LessonSheet, LessonFooter, OptionRow } = NS();
  const pairs = [
    ['Das Brot', 'The bread', 'matched'],
    ['Der Kuchen', 'The cake', 'selected'],
    ['Die Milch', 'The milk', 'incorrect'],
    ['Das Wasser', 'The water', 'default'],
  ];
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.62} />
      <MayaPrompt image={MAYA} text="Match the following" />
      <LessonSheet footer={<LessonFooter primaryLabel="Next" disabled showPrev />}>
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12 }}>
          {pairs.map(([l, r, st], i) => (
            <div key={l} style={{ display: 'flex', gap: 12 }}>
              <OptionRow letter={['A', 'B', 'C', 'D'][i]} label={l} state={st} style={{ flex: 1 }} />
              <OptionRow label={r} state={st === 'selected' ? 'default' : st} style={{ flex: 1 }} />
            </div>
          ))}
        </div>
      </LessonSheet>
    </div>
  );
}

// match_image — drag the word onto the picture. Each row is a 55%-wide photo
// beside its drop slot; the bank sits underneath and greys out what's placed.
function MatchImageScreen() {
  const { LessonProgressBar, MayaPrompt, LessonFooter, WordChip } = NS();
  const rows = [['Das Brot', 'correct'], ['Der Kuchen', null], ['Die Milch', null]];
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.7} />
      <MayaPrompt image={MAYA} text="Match the correct words with the images" />
      <div style={{ flex: 1, minHeight: 0, width: '100%', background: '#fff', borderRadius: '24px 24px 0 0', padding: '24px 16px 20px', marginTop: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 -4px 15px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {rows.map(([label, st]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <img src={BAKERY} alt="" aria-hidden="true" style={{ width: '55%', height: 74, borderRadius: 12, objectFit: 'cover', border: '1px solid #f3f4f6', flexShrink: 0 }} />
              {st ? <WordChip label={label} state="correct" /> : (
                <span style={{ flex: 1, height: 44, borderRadius: 10, border: '1px dashed #cbd5e1', background: '#f8fafc' }} />
              )}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12 }}>
            <WordChip label="Das Brot" state="spent" />
            <WordChip label="Die Milch" />
            <WordChip label="Der Kuchen" />
          </div>
          <LessonFooter primaryLabel="Check" disabled />
        </div>
      </div>
    </div>
  );
}

// unjumble — build the sentence. Chips drop onto underlined slots; Check marks
// each chip green or red in place.
function UnjumbleScreen() {
  const { LessonProgressBar, MayaPrompt, LessonFooter, WordChip } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.78} />
      <MayaPrompt image={MAYA} text="Okay, now un-jumble these words." />
      <div style={{ flex: 1, minHeight: 0, width: '100%', background: '#fff', borderRadius: '24px 24px 0 0', padding: '24px 16px 20px', marginTop: 8, boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 -4px 15px rgba(0,0,0,0.03)' }}>
        <div style={{ paddingTop: 8 }}>
          {[['Ich', 'möchte'], ['ein Brot', 'bitte']].map((row, i) => (
            <div key={i} style={{ width: '100%', borderBottom: '1px solid rgba(0,0,0,0.4)', paddingBottom: 4, marginBottom: 16, display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', gap: 8, minHeight: 44 }}>
              {row.map((w, j) => <WordChip key={w} label={w} state={i === 0 ? 'correct' : j === 0 ? 'placed' : 'incorrect'} />)}
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, minHeight: 52 }}>
            <WordChip label="Ich" state="spent" />
            <WordChip label="möchte" state="spent" />
            <WordChip label="ein Brot" state="spent" />
            <WordChip label="bitte" state="spent" />
          </div>
          <LessonFooter primaryLabel="Check" />
        </div>
      </div>
    </div>
  );
}

// conversation_intro — the handover. Maya speaks from the top-left, then the
// scene rises with rounded top corners and the character's own bubble fades in
// at 55% height. Continue is DISABLED until her line finishes typing, and only
// then does it become "Start Conversation".
function ConversationIntroScreen() {
  const { LessonProgressBar } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={0.84} />
      <div style={{ position: 'absolute', left: 0, top: 68, zIndex: 3, display: 'flex', alignItems: 'center', paddingLeft: 8 }}>
        <img src={MAYA} alt="" aria-hidden="true" style={{ width: 88, objectFit: 'contain', zIndex: 2, filter: 'drop-shadow(0 4px 6px rgba(0,0,0,.15))' }} />
        <div style={{ padding: '10px 16px', background: '#fff', borderRadius: 12, boxShadow: '0 2px 10px rgba(0,0,0,.08)', marginLeft: 4, marginBottom: 20, position: 'relative', border: '1px solid #f3f4f6' }}>
          <div style={{ position: 'absolute', left: -6, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 12, height: 12, background: '#fff', borderLeft: '1px solid #f3f4f6', borderBottom: '1px solid #f3f4f6' }} />
          <div style={{ width: 210, fontSize: 14, fontWeight: 500, color: '#111827', lineHeight: 1.4 }}>Great! Now, try talking to the baker in German</div>
        </div>
      </div>
      <div style={{ flex: 1, minHeight: 0, marginTop: 112, borderRadius: '24px 24px 0 0', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
        <img src={BAKERY} alt="" aria-hidden="true" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', right: 16, left: '40%', bottom: '55%', zIndex: 3 }}>
          <div style={{ padding: 12, background: '#fff', borderRadius: 12, boxShadow: '0 4px 6px rgba(0,0,0,.1)', position: 'relative' }}>
            <div style={{ position: 'absolute', left: -4, top: '50%', transform: 'translateY(-50%) rotate(45deg)', width: 16, height: 16, background: '#fff', zIndex: -1 }} />
            <div style={{ color: '#000', fontSize: 13, fontWeight: 500 }}>Hi, I am Jacob, the baker.</div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, width: '100%', height: 176, background: 'linear-gradient(180deg,rgba(255,255,255,0),#000)', mixBlendMode: 'multiply', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'relative', zIndex: 4, padding: '0 16px 20px', display: 'flex', alignItems: 'center', gap: 12 }}>
          <button type="button" style={{ width: '40%', padding: '14px 0', borderRadius: 12, border: '1px solid #d4d4d8', background: '#fff', color: '#172554', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4, cursor: 'pointer' }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>Prev
          </button>
          <button type="button" style={{ flex: 1, padding: '14px 0', borderRadius: 12, border: '1px solid #eec139', background: 'linear-gradient(90deg,#fde68a,#fcd34d)', color: '#172554', fontSize: 15, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, cursor: 'pointer' }}>
            Start Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// conversation — the roleplay. History scrolls above; the learner's turn is a
// white card of replies on the right. The page itself is #D4E5FF, no sheet.
function ConversationScreen() {
  const { LessonProgressBar, ChatBubble, OptionRow } = NS();
  return (
    <div style={{ ...PAGE, background: '#D4E5FF' }}>
      <LessonProgressBar title={TITLE} progress={0.88} hideProgress />
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px 16px 32px' }}>
        <ChatBubble text="Guten Tag! Was möchten Sie?" meaning="Good day! What would you like?" />
        <ChatBubble side="learner" text="Ein Brot, bitte." />
        <ChatBubble text="Möchten Sie auch einen Kaffee?" meaning="Would you also like a coffee?" />
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ width: '75%', padding: 16, background: '#fff', borderRadius: '12px 0 12px 12px', display: 'flex', flexDirection: 'column', gap: 16, boxSizing: 'border-box' }}>
            <div style={{ color: '#000', fontSize: 15, fontWeight: 500 }}>Select the correct reply</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <OptionRow label="Ja, bitte." state="selected" />
              <OptionRow label="Nein, danke." />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// outro — Maya taps through her closing lines, then the level-complete modal.
function OutroScreen() {
  const { LessonProgressBar, MayaPrompt } = NS();
  return (
    <div style={PAGE}>
      <LessonProgressBar title={TITLE} progress={1} />
      <MayaPrompt variant="hero" image={MAYA_UP} tapHint text="Great job! You just ordered your first bread in German." />
    </div>
  );
}

// The verdict modal every checkpoint ends in — shown here over the quiz.
function VerdictScreen() {
  const { LessonResultModal } = NS();
  return (
    <div style={{ position: 'relative', width: 390, height: 760, overflow: 'hidden' }}>
      <QuizScreen />
      <LessonResultModal correct answer="Das Brot" selected="Das Brot" />
    </div>
  );
}

// The incorrect verdict — rose instead of green, no answer reveal (the learner
// has to think again), and the button says Try again rather than Next.
function VerdictWrongScreen() {
  const { LessonResultModal } = NS();
  return (
    <div style={{ position: 'relative', width: 390, height: 760, overflow: 'hidden' }}>
      <QuizScreen />
      <LessonResultModal correct={false} answer="Das Brot" selected="Der Kuchen" />
    </div>
  );
}

// level complete — the lesson's last beat, over the outro screen.
function LevelCompleteScreen() {
  const { LevelCompleteCard } = NS();
  return (
    <div style={{ position: 'relative', width: 390, height: 760, overflow: 'hidden' }}>
      <OutroScreen />
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 12 }}>
        <LevelCompleteCard mascot={MAYA_UP} coinIcon={A + 'coin.png'} streakIcon={A + 'coin.png'} flagIcon={A + 'recapGermanFlag.webp'} vocabCount={8} />
      </div>
    </div>
  );
}

const LESSON_SCREENS = [
  ['intro', 'The lesson cover. Scene photo, level, title, Maya\'s opening line.', IntroScreen],
  ['scenario', 'The chapter intro. Tap anywhere to advance Maya through her lines.', ScenarioScreen],
  ['vocab', 'One word: photo, tap-to-listen, translation, optional trivia note.', VocabScreen],
  ['grammar', 'The rule. 80px hero audio, word at 46px, markdown rule card.', GrammarScreen],
  ['quiz', 'Multiple choice. The question is spoken as well as written.', QuizScreen],
  ['quiz — no image', 'How fill-in-the-blank ships: no photo, or it gives the answer away.', BlankQuizScreen],
  ['listen_choose', 'Audio-first. "Can\'t listen now" skips without penalty.', ListenChooseScreen],
  ['match_following', 'Two tappable columns; matched pairs fade to 40%.', MatchFollowingScreen],
  ['match_image', 'Drag the word onto the picture; the bank greys what is placed.', MatchImageScreen],
  ['unjumble', 'Build the sentence on underlined slots; Check marks in place.', UnjumbleScreen],
  ['conversation_intro', 'Meet the character. Continue is locked until his line finishes typing.', ConversationIntroScreen],
  ['conversation', 'The roleplay. No sheet — the page itself is the chat.', ConversationScreen],
  ['outro', 'Maya taps through her closing lines into the level-complete modal.', OutroScreen],
  ['— verdict · correct', 'Green. The answer is confirmed in bold and the button moves on.', VerdictScreen],
  ['— verdict · incorrect', 'Rose. No reveal — the button returns you to the question.', VerdictWrongScreen],
  ['— level complete', 'The last beat: coins, streak and words learnt, then the next lesson.', LevelCompleteScreen],
];

Object.assign(window, { LESSON_SCREENS });
