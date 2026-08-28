# Screen defect register — design-system screens

UX defects in the screens **this design system ships**: the five kits in
`ui_kits/` and the four templates. Separate from `guidelines/defects.md`,
which registers defects in `SkillCase-Frontend-main`. Nothing here is the
product's fault — these are our artefacts.

Read alongside `guidelines/ux-qa-report.html`, which is the audit run this
register was extracted from. IDs are stable; QA-nnn references carry over.

Severity is about the learner, not the code. P1 means a learner using assistive
technology or a keyboard is blocked, not inconvenienced.

Last updated: 28 Aug 2026. **8 open, 0 P1 · 7 closed.**

The three P1s and four other entries were closed on 28 Aug 2026 in a single
retrofit pass over the kits — see **Closed** at the foot of this file.

---

## Closed — 28 Aug 2026

**SD-001** Accessible names. `aria-label` on every icon-only control in the
kits — back, close, and the leaderboard dismiss. The kits no longer sit below
production on labelling.

**SD-002** Streak leaderboard modal. Now a real dialog: `role="dialog"`,
`aria-modal`, `aria-labelledby` against a real `<h2>`, Escape to close, a Tab
cycle bounded to the sheet, focus moved in on open and returned to the opener
on close. Not a patch on the `div` — the six concerns are each handled.

**SD-003** Focus ring. One rule per kit page —
`button:focus-visible{box-shadow:var(--ui-focus-ring)}` — applied across all
eight kit pages. All eight already linked `styles.css`, so the validated
token was reachable with no plumbing. Focus no longer disappears at the
component boundary.

**SD-004** Back-as-`<span>`. Both instances (premium-flow, job-flow) are now
`<button type="button">`, focusable and labelled.

**SD-006** Dead Back on onboarding step 1. Now genuinely `disabled`, with the
control held in place so the layout does not shift between steps.

**SD-013** `✕` glyph replaced with an SVG, matching every other close control.

**SD-010 — resolved without a product call.** Every 28px icon control gained
`boxSizing:"content-box"; padding:8; margin:-8` — a 44px hit area inside an
unchanged 28px visual box. Zero pixels move, the token is satisfied, and the
question I was holding for you turned out not to need asking. The token
stands at 44px unaltered.

**SD-009 — partial.** The recurring ink, surface, border and progress colours
in the three older kits are now `var(--ui-*)`. Gradients and one-off values
remain literal; see the open list.

---

## P1 — blocking (all closed)

### SD-001 — No accessible name on any icon-only control (QA-001)

All five kits · every back, close, mute, play and Listen button

An SVG inside a button with no text and no `aria-label`. A screen reader
announces "button" and nothing else. On the premium paywall the only dismissal
control is one of these, so a screen-reader user cannot tell how to leave.

The sharp edge: **production labels most of these and the kits label none.**
`StreakLeaderboardModal`, `UsageLimitModal`, `TrialEndedModal`, `NewNavbar`,
`ProgressBar`, `GrammarScreen` and `ExerciseLayoutSkeleton` all carry
`aria-label` in the app. Zero occurrences across `ui_kits/`. The reproduction
lost something the original had.

Fix: `aria-label` on every icon-only control. Mechanical, one pass.

### SD-002 — Streak leaderboard modal is keyboard-inescapable (QA-002)

`ui_kits/mobile-app/HomeScreen.jsx:84`

The backdrop is a clickable `<div>`. No `role="dialog"`, no `aria-modal`, no
Escape handler, no focus trap, no focus return on close. A keyboard user who
opens it cannot close it and cannot tab out of it — focus continues into the
page behind, which is still live. This is the one true trap in the system.

`AppModal` exists and handles all six of those concerns. Production's own
`StreakLeaderboardModal` is better than this reproduction of it.

Fix: replace with `AppModal`. Do not patch the `div`.

### SD-003 — Focus ring stops at the component boundary (QA-003)

All five kits · every kit-local control

Phase 7 applied `--ui-focus-ring` to AppButton, AppTabBar, ListRow, ChapterRow
and TextField. Controls written inside the kits — `AmberCta`, `GhostCta`,
`Cta`, HomeScreen's continue button, every icon button — have no focus
treatment. A keyboard user crossing from a DS component to a kit-local one
loses the caret entirely and cannot tell where they are.

Half-applied focus is arguably worse than none: it teaches the user to expect
an indicator, then withdraws it without warning.

Fix: `--ui-focus-ring` on every focusable element, or replace the local
control with the DS component that already has it (see SD-005).

---

## P2 — significant

### SD-004 — Back controls rendered as `<span>`, not `<button>`

`ui_kits/premium-flow/PremiumScreens.jsx:94` · `ui_kits/job-flow/JobFlowScreens.jsx:37`

Two kits draw their back affordance as a styled `<span>` containing a chevron.
It is not focusable, not keyboard-activatable, not announced as a control, and
in the job-flow case the word "Back" sits next to it as plain text — so it
reads as a label rather than an action.

It looks like a back button and behaves like decoration. That is a worse
failure than omitting it, because the learner believes an exit exists.

Fix: `<button type="button">` with a label.

### SD-005 — Four local CTAs duplicating AppButton (QA-005)

`premium-flow` (`AmberCta`, `GhostCta`) · `job-flow` (`Cta`) · `mobile-app` (inline)

Each reimplements what `AppButton` already does, each carries its own
hardcoded gradient, and none inherits the focus ring, the busy state, or the
disabled treatment the component has. Four near-identical buttons is how a
palette drifts and how an accessibility fix lands in one place out of five.

Fix: delete all four, use `AppButton`.

### SD-006 — Dead Back control on onboarding step 1

`ui_kits/mobile-app/onboarding.html:60`

`setStep(n => Math.max(0, n - 1))` — on the first step the handler runs and
nothing happens. The button is not disabled, not hidden, and gives no
feedback. The learner presses it, the screen does not change, and there is no
explanation.

An unresponsive control is a specific kind of harm: the user cannot tell
whether the app is broken, slow, or refusing them.

Fix: hide or disable on step 1. Disabling is better — the control's position
stays stable across steps.

### SD-007 — No screen renders an error or validation state (QA-007)

All five kits · ~40 screens

No failed upload, no rejected form field, no network error, no payment
decline, no expired session. The job pipeline has six document uploads and not
one shows a rejection. The system has error primitives; nothing exercises
them.

Consequence: the error path is untested design. The first screen that needs
one will invent it, and it will not match anything.

This needs a PM brief before it can be built — the states have to be
enumerated from the API's real failure modes, not guessed.

### SD-008 — No screen renders an empty state

All five kits

Same shape of gap as SD-007, one layer out: no empty job list, no
no-chapters-yet, no first-run dashboard with nothing on it. Every kit screen
shows a populated happy path. New learners see the emptiest version of the
product and it is the version nobody has designed.

### SD-009 — Raw hex in three kits (QA-006)

`job-flow`, `premium-flow`, `mobile-app`

`#002856`, `#5b6472`, `#fcd34d`, `#fde68a` written literally. `exam-flow`
proves the alternative works — it is entirely `var(--ui-*)`. The practical
cost is that these three surfaces cannot render in the dark theme at all.

Fix: mechanical retrofit. Same pass as SD-001 and SD-003.

### SD-010 — Icon controls at 28×28 against a 44px minimum (QA-004)

`mobile-app` back and close · `premium-flow` back · `exam-flow` Listen

Below `--ui-target-min: 44px`. **The kits are correct** — they reproduce
production geometry faithfully. This is not a kit defect but an unresolved
conflict between a system rule and the shipped app, and it needs a decision,
not a fix.

Options: expand the hit area without changing the visual box (invisible
padding — the usual answer, and the one that changes no pixels); change the
token; or scope the token to new surfaces only. **Awaiting a product call.**

### SD-011 — 10px text in the exam timer (QA-008)

`ui_kits/exam-flow/ExamScreens.jsx:203`

The HH/MM/SS unit labels. Reproduces production. It is the smallest type in
the product, on the most time-pressured screen in the product, read under
stress. The 20px value beneath it is legible, which mitigates but does not
resolve it. **Awaiting a product call.**

---

## P3 — minor

### SD-012 — Heading structure inconsistent and rootless (QA-010)

`job-flow` uses real `<h2>` for screen titles. `mobile-app` and `premium-flow`
use styled `<div>`. No screen in any kit has an `<h1>`, so the heading outline
either starts at level 2 or does not exist. Screen-reader users navigating by
heading get an incomplete map of the page.

### SD-013 — `✕` as a close glyph (QA-012)

`ui_kits/mobile-app/HomeScreen.jsx:88`. Read as "multiplication x" or skipped
entirely. Every other close control in the system is an SVG. One-character
fix.

### SD-014 — Kit transitions ignore reduced motion (QA-011)

ScoreRing, MetricBar and AppButton's busy state honour
`prefers-reduced-motion`. Transitions written inline in the kits —
progress-bar width, sheet slide-up — do not. Low impact: short, non-looping.

### SD-015 — 11px is the de-facto label size, undocumented (QA-009)

Field labels, back-bar text and eyebrow captions across `job-flow` and
`lesson-flow`. Matches production and is legible, but the type scale does not
say whether 11px is a sanctioned floor or an accident. A documentation defect,
not a visual one — but it means every new screen guesses.

---

## Not defects

Recorded so they are not re-raised.

- **Exam headings are `#082f49`, not brand navy.** A real product distinction,
  deliberately preserved.
- **The templates are clean.** All four use tokens, DS components and the
  focus ring. The newest work is the most compliant work.
- **Disabled and locked are genuinely distinguished.** Onboarding's Next uses
  the real `disabled` attribute; locked premium content uses the paywall
  pattern with an explanation and a route forward. Two meanings, two
  treatments, no conflation.
- **Semantic buttons are the norm.** SD-002 and SD-004 are the exceptions in a
  system that otherwise uses `<button type="button">` correctly.

---

## Still open — 8

SD-005 (four local CTAs duplicating AppButton) · SD-007 (no error state) ·
SD-008 (no empty state) · SD-009 (residual gradients and one-off hex) ·
SD-011 (10px exam timer — yours) · SD-012 (heading structure) ·
SD-014 (kit transitions ignore reduced motion) · SD-015 (11px floor
undocumented).

SD-007 and SD-008 are the substantive two, and neither is a retrofit: both
need a PM brief enumerating the states from the API's real failure modes
rather than guessed ones.

## Pattern behind the list

Defect density tracks build order exactly. `mobile-app`, the oldest kit,
carries six of the fifteen; `exam-flow` and the templates, the newest, carry
two between them and both are product decisions rather than errors.

The system did not fail. It arrived after the early kits were built and they
were never retrofitted. SD-001, SD-003, SD-004, SD-005 and SD-009 are the same
retrofit touching the same lines in the same three files — one pass, not five.

## Cannot be verified from source

Recorded as **not run**, not as passed.

- Screen-reader traversal — needs NVDA or VoiceOver on a device. This is why
  accessibility maturity is capped at 5/10.
- Real keyboard tab order — reasoned about statically, not verified.
- Touch accuracy — 28px is a measurement; whether it fails real users is a
  device test.
