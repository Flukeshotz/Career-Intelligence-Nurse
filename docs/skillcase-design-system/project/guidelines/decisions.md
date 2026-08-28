# Decision log

Decisions that govern this design system, with the evidence and the date. A
decision recorded here is **closed** — reopen it only with new evidence, not
with a preference.

Standing decisions also summarised in `CLAUDE.md`.

---

## D-001 — Code is the source of truth; Figma is visual reference
*Phase 1 · closed*

Authority order: `SkillCase-Frontend-main` code → validated screens → this
system's components → the Figma kit → brand guidance and UX best practice.

When code and Figma disagree, the difference is classified — intentional
product behaviour / intentional DS extension / legacy / accidental
inconsistency / unknown — before anything is changed. Neither side is
silently corrected to match the other.

**Consequence:** the kit's 163 variables cover a subset of the product's 633
tokens. The kit has never been treated as complete and its coverage number is
not a target.

---

## D-002 — App-specific components keep their SkillCase names
*Phase 1 · closed · standing*

~60 components named for the product (`AppButton`, `AppTabBar`, `JourneyCard`,
`StatusPanel`…) are **not** renamed to Untitled UI vocabulary
(`ButtonsButton`, `Tag`, `InputField`). A 1:1 map to the codebase outranks
name symmetry with an imported kit.

Every one carries an "Intentional addition" note in its `.d.ts` naming its
production source file.

**Consequence:** `check_design_system` reports these as "named after nothing
in the kit" on every run. That advisory is expected noise. Confirm and move
on; never rename.

---

## D-003 — The five oversized files are as-exported
*Phase 1 · closed · informational*

`ButtonsButton`, `Tag`, `InputField`, `PaymentMethodIcon` and `SocialIcon` are
Untitled UI icon sprites at 154–537 KB. Reported by the compiler as a size
note. Not a defect, not actioned.

---

## D-004 — `:root[data-theme="dark"]` scope is intentional
*Phase 1 · closed*

205 dark-theme declarations live under `:root[data-theme="dark"], .dark`. The
compiler registers them with their scope attached. This is correct, not a
defect.

**Related:** the dark tier currently overrides Untitled UI values only.
Nothing SkillCase-side is themed, because there is no semantic tier for it to
override — see DS-1 in the consolidation report.

---

## D-005 — Tokens are never deleted or renamed for cleanliness
*Phase 1 · closed · standing*

For any token that looks wrong: find usage → determine semantic role → assess
downstream impact → recommend → flag migration. Recommend; do not unilaterally
change.

---

## D-006 — The token count is 633, not 838
*Phase 4 · closed · corrects earlier reports*

838 is a **declaration** count: 633 unique names, of which 205 are
redeclared in the dark-theme scope. The 838 figure was propagated through
three earlier reports before being caught.

Layer split: 484 light + 205 dark Untitled UI (`tokens/fig-tokens.css`), 102
SkillCase brand (`brand.css`), 47 app geometry and motion (`app.css`).

---

## D-007 — A1 and A2 module select are one template, accidentally forked
*Phase 1 · closed (classification) · open (remedy)*

`components/a1/ChapterSelectTemplate.jsx` and its A2 twin are near-identical.
Differences: a hard-coded level heading, a tour-anchor casing inconsistency,
and A2 ignoring `module_number`.

Classified **accidental inconsistency**, not intentional product behaviour —
the drift is asymmetric and non-semantic.

**Decided:** the design system documents one module-select template with a
`level` parameter. `LevelHero` needs a `level` prop (DS-8). The chapter-
numbering divergence is reported as an engineering defect (defects.md, P2) and
is **not** encoded in the system. Production code is not merged by us.

---

## D-008 — State primitives are extracted only on shared treatment
*Phase 2 · closed · standing*

A word recurring across screens is not evidence. Visual treatment,
interaction, semantics and behaviour must all be sufficiently shared.

**Extracted:** `StateMessage` (empty + error, 4 surfaces verbatim),
`SkeletonList` (5 surfaces), `AppButton busy` (5 files).

**Deliberately excluded:** `ChapterSelectTemplate`'s six-row white skeleton and
the flashcard/pronounce single-card placeholder — both surface-local.

Phase 4 confirmed the ratio: of fifteen catalogued states, **three are global
primitives**. Correct/incorrect, locked, selected and completed carry product
meaning and are pattern- or component-level by design.

---

## D-009 — Scoring bands are data, not a baked-in scale
*Phase 2 · closed · reinforced phase 3*

Production has **seven** competing scoring rules. `scoreBands.js` records them
as data; `bands` is a prop on every scored component; no component ships a
universal scale.

Exports are deliberately lower-case so a threshold table is never registered
as a component on the window namespace.

The exam audit vindicated this: it found three rules beyond the four known
when the decision was made. A hardcoded scale could not have reproduced them.

**Not decided, and not ours:** what a pass is. Until the product rules, no
component renders a pass/fail verdict.

---

## D-010 — The exam surface is three systems, not one
*Phase 3 · closed · evidence completed phase 5*

- **System A** `/b1/exams/*` — four-section Goethe/TELC papers, auto + AI marking
- **System B** `/exam/:testId` — scheduled tests, includes human teacher marking
- **System C** `/scholarship` — a **proctored** assessment: tab-switch
  violation detection, three-strike auto-close, server-authoritative timer
  with heartbeat reconciliation, one attempt, results withheld until an
  administrator releases them

They are not variants. They share primitives (`ExamTimerPill`,
`BlockProgressTrack`, `DifficultyBadge`, state primitives, `AppButton`, the
scoring kit) and **nothing above the primitive tier**.

No generic "Exam Screen" is created.

**Phase 5 correction:** phase 3 recorded System C as routing-only and phase 4
described it as "own funnel, own shell chrome". That was wrong in kind. It is
a different *product*, not a differently-chromed exam, and it carries six
states nothing else in SkillCase has — including the only withheld result and
the only terminal failure reached by conduct rather than performance.

---

## D-011 — Components deliberately not extracted
*Phases 2–4 · closed · revisit only on new evidence*

| Not extracted | Why |
| --- | --- |
| Exam section tile | One occurrence. A layout. |
| Correct/incorrect/skipped tally | Two occurrences, both auto-marked sections. Extracting implies it belongs to results screens generally — false. |
| Answer-review row | Present in systems A and B with incompatible structures (6 question types vs 14+, plus a teacher-pending state). Extracting either freezes an undecided difference. |
| 2×2 section scorecard | Single-use layout of four coloured boxes. |
| Generic "gate" component | `LockGateCard`, `DepositGateCard`, `PaywallPanel`, `UsageLimitPanel` are four different remedies for four different blocks. Merging would erase product meaning. |

Extraction threshold in force: **verbatim duplication across three or more
shipped surfaces.** Applied in phase 3 — three of eight candidates qualified.

---

## D-012 — Local compositions are kept, not deleted
*Phase 4 · closed*

A component used once is classified **Local-only**, not removed. Single use is
not evidence of worthlessness — several single-use components (`JourneyCard`,
`JobWelcomePanel`, `PromoBanner`) *are* the vocabulary of their surface.

Nothing in this system is marked Deprecate.

---

## D-013 — Product systems are promoted on evidence
*Phase 4 · closed*

**Promoted:** Learning, Jobs, Exams, Payments — each holds multiple related
reusable patterns.

**Not promoted:** Profile, Content — no evidence, because neither has been
audited. Absence of a system here means absence of knowledge, not absence of
need.

---

## D-014 — Variants are not merged to reduce counts
*Phase 4 · closed · Maya case reopened phase 5*

Three near-duplicate cases were examined. `OptionRow` vs `ChoiceRow` (verdict
vs selection) and the four gate surfaces were confirmed as **real semantic
distinctions** and kept apart. The three Maya components are flagged
**Investigate** — probably one idea, but they ship different geometry, so
merging is a design decision requiring a human, not a cleanup.

**Phase 5 reopened this.** The scholarship hub uses four Maya images
(`mayaWave`, `mayaSmiling`, `mayaThumbsup`, `mayaSad`) to express *submission
state*, not to speak. That is a fourth register and a different function
entirely — Maya as status indicator rather than as voice. Any merge decision
must now account for it.

---

## Known product ambiguities — awaiting a human

These are recorded as open questions, not assumptions. Nothing in the system
resolves them.

1. **What is a pass?** Seven scoring rules; only the generic exam states a
   mark (60), and the B1 flow never tells a learner whether they passed.
2. **Is a B1 exam section pausable?** The timer keeps running and there is no
   exit guard. Both the fix and the design depend on the answer.
3. **Should A1 and A2 number chapters identically?** The fork says no; nobody
   decided that.
4. **Is "completed" one visual idea or three?** Green tick, "done" pill and
   green chapter fill all mean the same thing today.
5. **Which icon library is canonical?** The kit ships one; production imports
   four.

---

## D-015 — Content is not a product system
*Phase 5 · closed*

Video courses, news/read-listen, notes and short stories were traced. They
share a list row and a gate hook and **nothing else** — no shared data model,
no shared progress concept, no shared completion surface. The video player
alone owns resume-position persistence, progress bucketing and a custom scrub
bar found nowhere else.

Phase 4 declined to promote Content for lack of evidence. The evidence now
exists and gives the same answer. Promoting it would create an architecture
with nothing inside it.

---

## D-016 — Document handling is cross-system, not Jobs-only
*Phase 5 · closed*

`ProfilePage`'s documents tab calls `jobScreeningApi` — the same upload,
preview and delete endpoints as the job pipeline. `UploadRow` and
`DocumentReader` serve both and are reclassified accordingly in the component
map.

**Consequence:** a change to either component affects the account area as well
as the pipeline. It was previously safe to assume otherwise.

---

## D-017 — The list row is one component
*Phase 5 · closed*

`w-full p-3 bg-white rounded-xl border border-zinc-200 flex gap-3` appears in
ten-plus surfaces across six features. Extracted as `components/core/ListRow`
with `media` / `title` / `meta` / `trailing` slots.

The two production hover treatments (`lift` on B1 learning surfaces, `border`
on content surfaces) are **both** reproduced via a `hover` prop. Neither is
declared correct — the divergence is recorded as a defect, not resolved by the
design system.

Four audits passed over this row without seeing it, because within any single
surface it reads as that screen's own list. Worth remembering as a method
note: **the most reused thing in a product is often the least visible**, and
per-surface auditing is structurally bad at finding it.

---

## D-018 — SkillCase's audience, stated
*Phase 5 · recorded*

Not a design decision, but the clearest statement found in the codebase and
it should not be lost. `ProfilePage`'s qualification enum: GNM Nursing, BSc
Nursing, Post Basic BSc Nursing, MSc Nursing, ANM Nursing, Physiotherapist,
Doctors, Pharmacists, Dentists, Others.

**SkillCase is a German-language and placement product for Indian healthcare
professionals.** Implicit in the job pipeline; explicit here.

---

## D-019 — Scope: the learner-facing product
*Phase 6 · closed*

**In scope:** the learner-facing SkillCase product — home hub, onboarding,
Guided German, A1/A2/B1 practice modules, the three exam systems, the job
pipeline, payments and the account area.

**Out of scope:** admin and authoring surfaces (`admin/`, `B1AdminPage`,
add/delete set pages), internal interview tooling (11 files), marketing and
public pages (`startNow/`, landing pages, terms), events, and the resume
builder — unless explicitly brought into scope by a future decision.

Without this line every future audit inherits an open-ended backlog, and the
system ends up describing the company rather than the product.

---

## D-020 — The semantic tier is `--ui-*`, and it is derived from code
*Phase 6 · closed*

`tokens/semantic.css` defines interface roles — surface, text, border,
action, feedback, progress, state, focus, motion. It is the only tier
components reference. 59 components were bound to it, replacing 247 colour
literals.

**Why a new prefix.** `brand.css` already carried a short semantic block
transcribed from Figma. Three of its entries contradict the shipping app —
most visibly `--sc-action-primary: var(--sc-green-600)` (#019035) against
`AppButton`'s gold #edb843 on navy. Per D-001 the code wins; per D-005 a token
is not silently rewritten. So the Figma aliases stay, the canonical roles live
under `--ui-*`, and the contradiction is escalated rather than resolved.

**Rule:** where the product is inconsistent, tokenise **both** values and name
each for its cause. A semantic tier that hides a divergence is worse than the
literals it replaced. Applied to the two lock opacities.

---

## D-021 — The focus indicator is a dual ring
*Phase 7 · closed · the system's first designed value*

`--ui-focus-ring: 0 0 0 2px #ffffff, 0 0 0 4px #002856` (light);
`0 0 0 2px #002856, 0 0 0 4px #edb843` (dark).

**Evidence it was built from.** Production strips outlines on essentially
every button (`outline-none`, ~40 instances) but does establish one focus
treatment — text inputs use `focus:ring-2 focus:ring-blue-600`. So the
product has a focus idea for fields and none for controls.

**Why a dual ring rather than the obvious single colour.** Measured contrast
of each candidate against the four surfaces a focused control actually sits
on:

| candidate | white | gold CTA | navy CTA | dark page |
| --- | --- | --- | --- | --- |
| brand blue #1E76F3 | 4.25 | **2.34** | 3.44 | 3.87 |
| production blue-600 #2563EB | 5.17 | **2.84** | **2.83** | 3.18 |

No single hue clears 3:1 everywhere. A white inner plus navy outer ring is
self-covering — on any surface at least one of the two reaches 3:1 (navy
14.60 on white, 8.02 on gold; white 14.60 on navy), and the two always
contrast with each other at 14.60. Dark theme swaps the outer to gold (9.03
on the dark page); a navy outer would vanish there at 1.13.

This is the first token in the system whose value is a decision rather than a
reading. It is recorded with its measurements so it can be argued with.

---

## D-022 — Interactive rows are real buttons
*Phase 7 · closed*

Production builds its selectable rows as bare clickable `<div>`s, which makes
them unreachable by keyboard on ten-plus surfaces. Four design-system
components inherited that: `ListRow`, `ChapterRow`, `ChapterStrip` and
`JobStepCard` — and `ListRow` was written in phase 5 by this project, so the
system reproduced the flaw rather than only inheriting it.

**Rule:** anything with an `onClick` renders as a `<button>`. `ListRow` was
converted first and validated against its card — pixel-identical, now tabbable
with Enter/Space and a visible focus ring — then the same pattern was applied
to the other three.

`JobStepCard` is the exception and the reason the rule needs stating
carefully: its clickable wrapper already contained a real `<button>` for the
same action. Converting the wrapper would have nested two interactive
elements. The redundant wrapper handler was removed instead.

---

## D-023 — Failing contrast values are staged, not applied
*Phase 7 · closed*

Three semantic roles reproduce production faithfully and fail WCAG AA:
`--ui-text-faint` (2.56), `--ui-warning-fg` (2.80), `--ui-danger-fg` (3.76 —
passes as UI, fails as the 11px explanation text it is actually used for).

They are **not** changed. Altering the app's appearance on the strength of a
ratio is a product call (D-005). Instead each has a measured alternate
alongside it — `--ui-text-faint-aa` #646e7c, `--ui-warning-fg-aa` #b25210,
`--ui-danger-fg-aa` #c73939 — being the smallest darkening that clears 4.5:1
on both white and the sunken wash. Approving a fix is then a one-line swap,
not a colour exercise.

---

## D-024 — WITHDRAWN. The "phantom navy" was real; my grep method was wrong
*Phase 7 checkpoint · **reversed** · the most instructive error in this project*

**This decision was wrong and has been reverted in full.** It is kept, not
deleted, because the reasoning error is worth more than the conclusion.

I claimed `#172554` and `#1e3a8a` appeared "nowhere in `SkillCase-Frontend-main`"
and replaced them with `#002856` / `#083262` across the lesson and Guided German
components.

**The values are real.** The app is Tailwind-based and writes them as utility
classes, not hex:

| Tailwind class | hex | where |
| --- | --- | --- |
| `text-blue-950` / `bg-blue-950` / `border-blue-950` | **`#172554`** | Guided German: VocabScreen, QuizScreen, GrammarScreen, ConversationScreen, UnjumbleScreen, MatchImageScreen, MatchFollowingScreen, ListenAndChooseScreen, LevelCompleteModal, RecapScreen, DailyGoalModal, LeaveLessonModal, WaveformIcon, MayaDialogueBubble · `FeatureStatusChip.jsx` · `JobsLockedPage.jsx` |
| `from-blue-900 to-blue-950` | **`#1e3a8a` → `#172554`** | the pill CTA on LevelCompleteModal, RecapScreen, DailyGoalModal, LearnGermanHome |

I grepped for the literal string `#172554`, got zero hits, and treated absence
of the hex as absence of the colour. In a Tailwind codebase that inference is
invalid — **most colours never appear as hex at all.** The correct method is to
resolve the value to its Tailwind class name and grep for that, or grep the
class families (`blue-950`, `slate-900`) and resolve forward.

Compounding it: I ran three blanket find-and-replace passes on the strength of
that one bad grep, and each pass widened the damage — Guided German, the app
shell, jobs, onboarding and the freemium→premium flow all shifted off-palette,
which is precisely what the user saw and I twice argued was correct.

**Reverted:** `FeatureStatusChip`, `AudioPlayer`, `LockGateCard`,
`LevelCompleteCard`, `AudioTapButton`, `LessonFooter`, `ChatBubble`,
`LessonScreens`, `HomeScreen`.

**Standing rule from this (supersedes the D-024 claim):** never conclude a
value is absent from a Tailwind codebase from a hex grep. Resolve to the class
name first. And never apply a colour sweep wider than the evidence that
justified it — one bad premise times nine files is nine defects.

The `#0b1f3d` / `#0f2547` dark-theme values remain replaced by the app's own
navies: those two are genuinely not Tailwind values, no screen renders the dark
theme, and D-004 already scopes it as undesigned.

---

## D-024b — What the two blues actually mean
*Phase 7 checkpoint · closed · replaces the withdrawn D-024*

The product uses **two** dark blues and they are not interchangeable. This is
the distinction the withdrawn decision destroyed:

| value | role | evidence |
| --- | --- | --- |
| `#172554` blue-950 | **Learning ink** — headings, body and control text on the Guided German lesson surfaces, and the lock/gate screens | `text-blue-950` throughout `pages/learnGerman/`, `JobsLockedPage` |
| `#1e3a8a` blue-900 | The lighter stop of the learning CTA gradient, and the 80px audio-button border | `from-blue-900 to-blue-950`, `border-2 border-blue-900` |
| `#002856` navy-900 | **Brand chrome and CTA** — the app header, StreakCard, PlanPill, the navy CTA, and headings on B1 exam / job-pipeline surfaces | `bg-[#002856]`, `text-[#002856]` |
| `#083262` navy-700 | The logo wordmark and header gradient stop | `--sc-navy-700`, `--app-header-grad` |

Guided German is a **different colour context** from the rest of the app: it
runs on a `from-blue-100 to-sky-100` page gradient with blue-950 ink, where the
app shell runs navy chrome with `#002856`. Treating them as one navy is the
error. This is a real product distinction, not drift — it should be preserved,
and it needs semantic tokens of its own rather than being flattened into
`--ui-text-brand`.

---

## D-025 — Motion that carries state opts out of reduced-motion
*Phase 7 checkpoint · closed*

Validating the blanket `prefers-reduced-motion` rule against real components
exposed a regression the rule itself introduced. `AudioTapButton`'s waveform
bars animate **only while audio is playing** and are the only indication that
it is playing. Stopping them removes state feedback, which is not what the
preference is for.

The rule now exempts `[data-motion-essential]`. Applied to the waveform bars
only, and only while playing. The two attention rings on the same component do
not carry it — they are decoration and are correctly stopped.

The test for the attribute: *if this motion stops, does the user lose
information, or only polish?* Only the first case qualifies.

---

## D-026 — Three phase-7 tokens were withdrawn as unevidenced
*Phase 7 checkpoint · closed*

`--ui-focus-ring-width`, `--ui-focus-ring-offset` and
`--ui-target-comfortable` were removed. Each was a plausible number rather
than a reading or a standard:

- the two focus-ring parts were **derived from** `--ui-focus-ring`, which is a
  composite `box-shadow`. Nothing consumed them and nothing could — changing
  one would not change the ring.
- `--ui-target-comfortable: 48px` had no counterpart in production. There is
  one target rule (44px, the platform minimum), not a tier system.

`--ui-focus-ring` (a design decision, D-021), `--ui-target-min` (a platform
standard) and the three reduced-motion durations (evidence: six shipped
keyframe animations) stand.

---

## D-027 — Body ink is `#181d27`; the slate ladder was a stand-in
*Phase 7 checkpoint (second pass) · closed · corrects D-020*

The semantic tier's text roles were transcribed from Tailwind slate values
(`#0f172a`, `#64748b`, `#94a3b8`) rather than from SkillCase's own ink scale.
The slate values are not invented — production really does write
`text-slate-900` — but they are only half the evidence, and they are the half
the Figma kit does not share. The result read as a colder, greyer product than
either source.

Where the app and Figma **agree**, that value wins:

| role | was | now | agreed by |
| --- | --- | --- | --- |
| `--ui-text-body` | `#0f172a` slate-900 | **`#181d27`** | `text-[#181d27]` across A1/A2/B1 flashcard, grammar, listening, chapter select, back nav · `--sc-ink-900` (Figma) · `--color-text-primary` (app.css) |
| `--ui-text-secondary` | `#64748b` slate-500 | **`#414651`** | `--sc-ink-700` (Figma) · `--color-text-secondary` (app.css) |
| `--ui-text-muted` | `#737373` neutral-500 | **`#535862`** | `--sc-ink-600` (Figma) · `--color-text-tertiary` (app.css) |

`#0f172a` is **kept** as `--ui-text-body-alt`, because the B1 exam and
read-listen surfaces genuinely render it. Per D-005 the divergence is recorded
rather than averaged away — but the default is now the value the product and
its design file share.

Component literals were mapped onto these tokens at the same time: `#334155`
and `#475569` (slate-700/600, which appear only in admin and terms pages —
out of scope per D-019) → `--ui-text-secondary`; `#64748b` icon strokes →
`--ui-text-muted`; `#e2e8f0` / `#cbd5e1` / `#f1f5f9` → the existing border and
surface tokens rather than a second, visually identical grey ladder.

**Why this happened twice.** The first pass (D-024) fixed a hand-built list of
files and missed four more — `LessonFooter`, `JobWelcomePanel`, `ChatBubble`,
`HomeScreen` — so the compiled bundle still carried the phantom navy and the
cards still rendered it. The lesson is procedural: sweep by grep across the
whole tree, then re-grep to confirm zero, rather than by a list assembled from
earlier search output.

---

## D-028 — One live region per screen, owned by the template
*Phase 8 · closed*

`AppButton busy`, `SkeletonList` and `StateMessage` are all silent to assistive
tech (defects.md P3). The fix is not a prop on each of them: two simultaneous
live regions interrupt each other, so three self-announcing components on one
screen would announce unreliably or not at all.

`LiveRegion` is therefore a single visually-hidden region the **template**
owns, and screens set its message. `role="status"`/`aria-live="polite"` by
default; `assertive` only for an error that blocks the task — a busy
announcement that talks over the user is worse than silence.

This is an addition justified by a required standard, not by extracted
evidence: production has no announcement layer at all. Recorded as such in the
`.d.ts` so nobody mistakes it for a port.

---

## D-029 — TextField keeps production's blue focus ring
*Phase 8 · closed*

The design system's dual ring (D-021) exists because production strips outlines
on controls and offers no replacement. **Text fields are the exception**:
production ships `focus:ring-2 focus:ring-blue-600` consistently across six
surfaces. That is a working focus treatment.

`TextField` keeps it. Overriding a correct implementation for symmetry with the
rest of the system would be a regression dressed as consistency. The dual ring
applies where there is nothing; it does not displace what works.

The component itself is an extraction, not an invention — the same nine
Tailwind classes appear verbatim on ExamReading/ListeningWorkspace,
VideoReader, NewsArticleReader, SupportWidget and CallEndedScreen, and are
never componentised there. This closes open question 11.

---

## D-030 — Exam surfaces are the fourth colour context
*Phase 8 · closed · completes D-024b*

Building the eight exam screens established a context D-024b had not yet
separated. Exam surfaces pair **sky-950 headings with a blue-950 CTA**:

| role | value | evidence |
| --- | --- | --- |
| headings, counter, timer, score | `#082f49` sky-950 | `text-sky-950` on all four workspaces and all four results screens |
| primary CTA | `#172554` blue-950 | `bg-blue-950 hover:bg-blue-900` |
| *Review Answers* only | `#002856` navy | `bg-[#002856]` — a different blue from the CTA one screen away |

`--ui-text-primary` is therefore the **assessment ink**, not a general heading
colour — which is consistent with its only two consumers, `ScoreRing` and
`ExamTimerPill`, both exam components. It was briefly retargeted to `#002856`
during the phase-7 checkpoint; that was wrong for exactly the components that
read it, and is restored.

The four contexts are now explicit: **shell** (navy chrome), **Guided German**
(blue-950 on a blue gradient), **exam** (sky-950 + blue-950 CTA), **content**
(slate). Flattening any pair is the mistake D-024 records.

---

## D-031 — Cards cache-bust the bundle
*Phase 8 · closed · tooling*

Every card and kit loaded `_ds_bundle.js` with no version query, so browsers
served a cached copy and the design system appeared not to update after edits —
reported repeatedly as "I'm still seeing the old version". The bundle was
current each time; the iframe was not.

All 22 card and kit files now write the script tag with a `?v=` timestamp via
`document.write`, which keeps the load synchronous and ordered so the
`window.<Namespace>` reads below it still work. Cost is one uncached fetch per
card view; the alternative is a design system that silently lies about its own
state.

---

## Open — awaiting a human (updated phase 8)

6. **Are marketing, admin and interview-tools surfaces in scope?** They are
   the largest remaining unaudited area and they are not the learner-facing
   product. Declaring them out of scope is a five-minute decision that
   permanently bounds the system; leaving it unmade means every future audit
   inherits an open-ended backlog.
7. **Should the B1 exams get the scholarship's urgency treatment?** Phase 3
   proposed time-remaining feedback as new design work. It already exists —
   `isUrgent = remainingSeconds < 300` — in the proctored system. The
   question is now a port, not a design.
9. **Approve the three AA colour corrections?** Each is measured and staged
   (D-023). They change the app's appearance slightly; nobody but you should
   make that call.
10. **Does AppButton `sm` stay at 36px?** It is below the 44px target
    minimum the other two sizes clear. Either `sm` grows, or it is documented
    as non-touch-only.

11. **Does the design system need a SkillCase text input?** The focus ring was
    to be applied to "one input" and there is no input to apply it to: the only
    field component is the imported Untitled UI `InputField` sprite, not a
    SkillCase-authored control. Production already ships a real focus
    treatment for fields (`focus:ring-2 focus:ring-blue-600`, consistently),
    so this is the one control class that is *not* broken today — which is
    also why no one has needed to build it. Building one means deciding
    whether it keeps the shipped blue ring or adopts the dual ring.

8. **Is the primary action gold or green?** `brand.css` says green
   (`--sc-action-primary`, from Figma); `AppButton` ships gold on navy. The
   system follows the code. Someone should decide whether the Figma alias is
   stale or the app is off-brand — and then one of them should change.
