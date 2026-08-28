# Defect register

Engineering and product defects found while reverse-engineering
`SkillCase-Frontend-main` into this design system. **Nothing here has been
fixed in the codebase, and nothing has been silently normalised in the design
system** — where a defect affects a component, the component reproduces
production faithfully and its `.d.ts` points back to this file.

Severity is about the learner, not the code. P1 means a user is shown
something wrong or contradictory about their own work.

Last updated: 28 Aug 2026.

---

## Open

### P1 — Two score scales render on one results screen

`ExamWritingResults.jsx`, `ExamSpeakingResults.jsx`

Both screens import `MetricBar`, which bands at 70/40, while defining local
`getMetricColor` / `getScoreColor` helpers that band at 75/50. A score of 72
therefore reads green on one row and amber on another, on the same screen, for
the same piece of assessed work.

Found: phase 2. Design system: `bands` is a prop; scales recorded verbatim in
`components/assessment/scoreBands.js`.

### P1 — Reading and Listening result rings are green at every score

`ExamReadingResults.jsx`, `ExamListeningResults.jsx`

Both hand-roll a 120px SVG ring instead of importing the shared `ScoreRing`,
with the progress stroke hardcoded to `#0BAA45`. A 12% Reading score renders a
green ring above the text "12%". The same 12% on Writing renders red, because
Writing uses the shared component.

The fix is mechanical — import `ScoreRing` with `circleSize={120}
strokeWidth={10}`, which is exactly the geometry it already supports.

Found: phase 3.

### P1 — No exit guard on a running timed section

All four `Exam*Workspace.jsx`

The section timer is an absolute expiry timestamp in `localStorage`, so it
keeps running when the learner navigates away — correct, and deliberate. But
Back is an ordinary navigation: no confirmation, no `beforeunload`, no pause.
A learner can leave a timed exam section by accident and lose the time
without ever being told the clock was running.

Note this is *partly* a product question (see the audit, section E1) — but the
absence of any prompt at all is a defect regardless of the answer.

Found: phase 3.

### P1 — Focus is removed product-wide with no replacement

~40 instances of `outline-none` across `src/pages/`

Essentially every button in the app strips its focus outline and puts nothing
back. Text inputs are the exception — they use
`focus:ring-2 focus:ring-blue-600`, which is why the design system's focus
rule (D-021) could be derived from the product rather than invented.

A keyboard user cannot see where they are. On a timed, assessed exam screen
that is not a minor inconvenience.

The design system now ships `--ui-focus-ring`, validated against every
surface a focused control sits on. Adopting it is a mechanical change.

Found: phase 7.

### P2 — The four exam results screens have no back control

`ExamReadingResults.jsx`, `ExamListeningResults.jsx`, `ExamWritingResults.jsx`,
`ExamSpeakingResults.jsx`

None of the four has a header back button, a chevron, or any `navigate(-1)`.
The only exit is a single CTA at the very bottom of the page, and it is a
*forward* action — "Start next section", which routes to the paper dashboard
or to congratulations. There is no way to go back to where the learner came
from.

This matters most on Reading, where the results page renders every question
with its passage and the learner's answer inline. On a long paper that is
several screens of scrolling before any exit appears. A learner who opens
results and simply wants to leave has to scroll to the bottom of a review
list to find out how.

Every comparable screen in the product has a header back: the four exam
*workspaces* route to the dashboard from their headers, `ExamLobby` has two
back affordances, the payments pages all use `navigate(-1)`. The results
screens are the exception, and the four are consistent with each other, which
suggests one template copied four times rather than four separate oversights.

The error state of each file *does* offer "Return to Dashboard". Only the
success path — the one every learner sees — lacks an exit.

Found: 28 Aug 2026.

### P2 — Selectable rows are clickable `<div>`s

10+ surfaces across 6 features

The row extracted as `ListRow` is built as a bare `<div onClick>` everywhere
it ships: not tabbable, not activatable by Enter or Space, invisible to
assistive technology as a control. Exam type select, paper select,
describe-speak topics, read & listen, video courses, notes.

The design-system component now renders a real `<button>` (D-022) with
identical visuals.

Found: phase 7.

### P2 — No reduced-motion handling

Product-wide

Six keyframe animations, a pulsing busy button, spinners on every loading
control, and no `prefers-reduced-motion` block anywhere. The design system now
ships one, with a narrow carve-out for motion that carries state (D-025).

Correction from the phase-7 checkpoint: this was reported as including "500ms
score-ring fills". It does not — `ScoreRing` has no transition at all and
renders its arc at the final offset immediately. `MetricBar` does animate
(`width .5s`) and is covered.

Found: phase 7.

### P3 — Skeleton loading is silent once motion is reduced

`components/state/SkeletonList`

With `prefers-reduced-motion` the pulse stops and the skeleton becomes a
static grey block. Layout still communicates "content is coming", so this is
not promoted to `data-motion-essential` (D-025) — but combined with the
missing `aria-busy` (see "Busy and error states are not announced") a
reduced-motion screen-reader user gets no loading signal at all. The fix is
the ARIA one, not more motion.

Found: phase 7 checkpoint.

### P2 — Block progress bar has 1.31:1 fill-to-track contrast

8 surfaces — four exam workspaces, four results review modes

Amber `#fcd34d` fill against zinc `#f4f4f5` track. Graphical objects need
3:1 against adjacent colours; filled and unfilled segments are close to
indistinguishable. Position in a timed exam is carried entirely by this bar.

Found: phase 7.

### P3 — Locked and disabled states are visual only

Product-wide, and previously in the design system

Dimming to 50% or 60% and dropping the click handler tells assistive
technology nothing — the control still reads as enabled. No `aria-disabled`
anywhere in 71 components or the surfaces sampled.

Partly addressed in the design system: converted rows now carry a real
`disabled` attribute.

Found: phase 7.

### P3 — Busy and error states are not announced

`AppButton busy` (5 files), `SkeletonList`, `StateMessage`

No `aria-busy`, no live region. A screen-reader user submitting an exam
section gets silence, and a failed load announces nothing at all.

Deliberately not fixed in the design system yet: the right shape is a pattern
spanning three components, and depends on how screens compose them. Recorded
as the top phase-8 input.

Found: phase 7.

### P2 — Seven competing scoring rules, no stated pass mark

Product-wide

70/40 · 70/50 · 75/50 (metrics) · 75/50 (scorecards) · ≥50 per-question ·
≥60 pass/fail · no scale at all. Enumerated with sources in
`guidelines/exam-system-audit.html` section C. The `≥60` pass mark exists only
in the generic `/exam` system; the B1 paper flow never states one, so a
learner completing a TELC paper is never told whether they passed.

Whether a pass is 40, 50, 60 or 75 is a product decision. It should be made
once and applied everywhere.

Found: phases 2–3.

### P2 — A2 ignores `module_number`

`components/a2/ChapterSelectTemplate`

Chapters mislabel when server numbering is sparse.

Found: phase 1.

### P2 — Completion is handled as an error path

`PaperSelect.jsx`, `ExamBlockSelector.jsx`, `ExamCongratulations.jsx`

Re-entering a finished paper returns HTTP `403 { alreadyCompleted: true }`,
which each of three screens catches independently and translates into a
redirect. A successful, expected user action travels the failure path. Any
screen added later that forgets the catch will show "Failed to load" for a
completed exam — and `ExamCongratulations` already needs a nested try/catch to
recover the submission id from the error body.

Found: phase 3.

### P3 — Usage lock on `PaperSelect` explains nothing

`PaperSelect.jsx`

When `useUsageLimitModule("B1","exams")` reports locked, paper rows drop to
60% opacity and stop responding. No message, no upsell, no chip. The system
already ships `LockGateCard` and `FeatureStatusChip` for this exact case.

Found: phase 3.

### P3 — Unrecognised difficulty tags render as "hard"

Five copies of `getDifficultyBadgeStyle` across `src/pages/b1/exams/`

The mapping is a three-way fallthrough: `easy`, then `medium`/`intermediate`,
then *everything else* → red. A typo, a German-language tag, or a new
difficulty level all read to the learner as the hardest paper.

Reproduced as-is by `components/exam/DifficultyBadge`, which documents the
behaviour rather than fixing it.

Found: phase 3.

### P3 — Lock opacity is 50% in one place and 60% in another

`ChapterSelectTemplate` vs `ExamSelect`

Found: phase 1.

### P3 — Colour bands at 40 but greeting bands at 50 in one file

`describe-speak/utils/scoreUtils.js`

`getScoreColor` and `getScoreStrokeColor` band at 70/40; `getScoreGreeting`,
directly beneath them, bands at 70/50. So a 45 is greeted as "Keep
practicing!" while its ring is amber, not red.

Found: phase 2.

### P2 — `A2TestResults.jsx` is an empty file

`src/pages/a2/test/A2TestResults.jsx`

Zero bytes. Someone began extracting the test-results screen out of the A2
fork and stopped; A1 still renders its results inline at the foot of
`A1TestQuestions.jsx`. A dead file in the repository, and the clearest single
artefact that the A1/A2 fork is an accident rather than a decision (D-007).

Found: phase 5.

### P3 — Two usage-limit hooks with different shapes

`useUsageLimitModule(level, feature)` vs `useUsageLimitGate("ALL", feature)`

The exams use the first, the content surfaces the second. One concept, two
APIs, two call shapes. Neither is wrong; they should not both exist.

Found: phase 5.

### P3 — The shared list row ships two disagreeing hover treatments

10+ surfaces across 6 features

The same row markup lifts on hover (`hover:shadow-md hover:scale-[1.01]`) on
the B1 learning surfaces and darkens its border to navy on the content
surfaces. Invisible until the row was seen as one thing.

Reproduced as-is by `components/core/ListRow` (`hover` prop), which documents
the divergence rather than picking a winner.

Found: phase 5.

### P3 — The Figma semantic aliases contradict the shipping app

`tokens/brand.css`

`--sc-action-primary: var(--sc-green-600)` (#019035) against `AppButton`'s
shipping gold #edb843 on navy #002856. Two further aliases in the same block
disagree with observed usage.

Neither side was changed: the design system's canonical roles now live in
`tokens/semantic.css` under `--ui-*` (D-020), and this is escalated as a
product/brand question — is the Figma alias stale, or is the app off-brand?

Found: phase 6.

### P3 — Defensive icon imports throughout Profile

`src/pages/ProfilePage.jsx`

Fifteen instances of `LucideIcons.X || LucideIcons.Y || LucideIcons.Z`. The
code does not trust its own icon set to contain the icons it asks for. Not a
user-visible bug; concrete evidence for DS-3 (iconography undefined).

Found: phase 5.

### P3 — Shared timer key for unauthenticated users

All four `Exam*Workspace.jsx`

`b1_exam_timer_${user?.user_id || "guest"}_...` — two signed-out users on one
device share a countdown. Low impact, trivially fixed.

Found: phase 3.

---

## Duplication (not defects, but the cause of several above)

Not user-visible on their own. Listed because every P1 above is downstream of
one of them.

| Duplicated | Copies | Where |
| --- | --- | --- |
| `formatSeconds` | 8 | four exam workspaces, four results screens |
| Segmented block progress bar | 8 | same |
| `getDifficultyBadgeStyle` | 5 | `PaperSelect`, two workspaces, two results |
| `getGreeting` / `getScoreGreeting` | 5 | `scoreUtils` + four results screens |
| Hand-rolled score ring | 2 | Reading, Listening results |
| Section-status literals `["reading","writing","listening","speaking"]` | 6+ | dashboard, congratulations, each results screen |
| Selectable list row | 10+ | exams, describe-speak, read & listen, video courses, notes |
| A1/A2 module screens | 2× 15 files | six module types mirrored across both levels |
| Document upload / preview / delete | 2 | job pipeline and Profile, against one API |

The first three are now single components in `components/exam/`; the list row
is `components/core/ListRow`. The section-status literals are the reason a
three-section paper would break the dashboard — see the exam audit's
confidence note. The A1/A2 mirror is D-007.

---

## Closed

None yet. Nothing in this register has been actioned in the codebase.
