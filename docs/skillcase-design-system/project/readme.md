# Skillcase Design System

Skillcase is a **German-language learning app for internationally trained nurses relocating to Germany**. The product teaches ward-floor German (A1 → B2), tracks it as a gamified journey (coins, streaks, level nodes), and connects the learner to German nursing jobs, exam papers (TELC / Goethe) and paid premium coaching once their level is high enough. Everything in this design system was extracted from the design file the team uses to build it.

## Sources

| Source | What it gave us | Access |
| --- | --- | --- |
| `Skillcase Learning App.fig` (mounted Figma file, pages **Rough** and **Final screens and feedback**, 458 frames, 58k nodes) | All 46 component families, 484 Figma variables, every screen recreated in `ui_kits/`, all bitmaps in `assets/` | Read in full |
| `uploads/mainlogo (5).png`, `uploads/white_mainlogo (2).png` | The two-tone SKILLCASE wordmark (light + white) | Read in full |
| **`SkillCase-Frontend-main` (attached local codebase, v1.2.6)** | **The production truth.** `src/index.css` → `tokens/app.css`; `src/components/ui/*` → `components/app/*`; the shell (Navbar, TopModeSwitcher, BottomTabBar) → the app shell components. React 19 + Vite + Tailwind v4 + Capacitor (Android), lucide-react + MUI icons, framer-motion. | Read |
| `Figma 5Y2oLJUXmOOVu5kvSDnzYL.fig` (second mounted file, 33 frames) | The **current** home screen (node 2513:10746), premium/paywall, trial and profile flows. Bitmaps are absent from this export — product images come from the codebase's `public/`. | Read |
| `https://github.com/Skillcase-test/SkillCase-Frontend` | 404s for this connection on both `main` and `master`. Superseded by the attached local copy above. | Not accessible |
| `https://github.com/Flukeshotz/learn-german-nurses` | A **separate prototype** ("PflegeDeutsch"), navy/gold/teal with a passport-stamp metaphor and 22 exercise mechanics. Read but **not** merged — it is a different design language from the shipping app. Explore it for exercise-mechanic ideas. | Read |

If you have access to that repository, explore it (`src/`, component and theme files) before building production work — it will be a better source of truth for behaviour and API shapes than this system, which is design-derived. See `github.md`.

## Three layers of truth — read this first

This system carries three token layers, deliberately. When they disagree, the higher one wins:

1. **`tokens/app.css` — production.** Verbatim from the shipping app's `src/index.css`. `--color-primary: #002856`, `--color-accent: #edb843`, Poppins on everything, `--shadow-md` on every card. **Design against this.**
2. **`tokens/brand.css` — design file.** Transcribed from the Figma screens (navy #083262 header, green #019035 actions, journey gradients). Use for anything the code doesn't cover yet.
3. **`tokens/fig-tokens.css` — imported library.** All 484 Untitled UI variables. Reference only; its purple `brand` ramp is never used.

Same for components: **`components/app/*` are the production primitives** (ported 1:1 from `src/components/ui`). `components/core|forms|navigation|data-display/*` are the Figma library the design file draws from — accurate, but not what ships.

## Products represented

1. **Skillcase learning app (iOS/Android, 390 × 844)** — the whole product. Journey map, lesson/exercise engine (fill-in-the-blanks, match the following, jumbled words, hear-and-answer, describe & speak, reading/listening), rewards, jobs board, documents, payments/paywall, profile. Recreated in `ui_kits/mobile-app/`.
2. **Marketing surface** — the first Figma export carried an Untitled UI web layer (pricing tiers, CTA sections, testimonial carousels, footers, app-store badges). The current export drops it and the codebase has no counterpart, so it has been **removed** from this system. See "What was removed, and why".

---

## CONTENT FUNDAMENTALS

**Voice: a calm, encouraging coach who is also a realist about immigration paperwork.** Copy speaks to the learner as *you*, uses contractions, and never lectures.

- **Second person, imperative.** "Quick! Before you forget...answer these!" · "Check" · "Wait for job referral" · "Guide A1–A2 users to start".
- **Sentence case everywhere.** Buttons are sentence case ("Check", "Manage Plan"), not ALL CAPS. The only uppercase is the SKILLCASE wordmark.
- **Short, declarative status lines rather than marketing claims:** "You are currently at A1 German level", "Level 1", "3 options to go to Germany".
- **Level and outcome language is explicit** — A1, A2, B1, B2, TELC, GOETHE, "Nursing Card", "job referral". Never softened into "beginner/advanced".
- **German is shown inline, untranslated, in the exercise itself** ("Ich esse ___ .", "die Butter"). Celebration words may be German ("Richtig!", "Wunderbar!"), everything structural is English.
- **Exclamation marks are allowed, sparingly, at moments of momentum** ("Quick!"). Ellipses are used to create urgency mid-sentence ("Before you forget...answer these!").
- **Emoji: essentially not used** except the 🇩🇪 flag glyph as the country marker on journey nodes. Do not add emoji to copy.
- **No first person plural.** The product never says "we". Maya, the illustrated guide, speaks in her own voice in speech bubbles.

Sample microcopy set (from the file): "Quick! Before you forget...answer these!" · "You are currently at A1 German level" · "The Bakery Window / Level 1" · "Check" · "Manage Plan" · "Transaction history" · "Help and Support" · "Free trial" · "After premium is purchased the card changes to Premium".

---

## VISUAL FOUNDATIONS

**Colour.** Navy `#083262` is the brand voice — the wordmark, headings, journey text. Green `#019035` is the *only* colour used for the primary action and for "correct". Yellow `#EDB843` is reserved for reward economy (coins, streaks, premium). Blue `#1E76F3` is links/info. Red `#EC463A` is "incorrect" only. Neutrals are a warm-free grey ramp (`#181D27` → `#EFEFEF`). No purple appears in the product, despite the imported Figma variable collection shipping a purple `brand` ramp (see *Token notes*).

**Backgrounds.** Screens sit on a vertical sky gradient `#CFE3FF → #E4EFFF` (`--sc-bg-journey`), never on flat white. Content rides on a white sheet with a `24px 24px 0 0` radius pinned to the bottom of the screen. Reward moments use `#F7D78E → #FFFFFF`; the streak card uses a 114.8° gold gradient `#FAF0B3 → #D7AA48`. There are no textures, no noise, no repeating patterns. Full-bleed photography appears inside lesson media blocks (radius 16) and behind onboarding, always warm-toned, slightly saturated, 3D-illustration or AI-render style rather than documentary photography.

**Type.** Two families, split by job: **Poppins** for anything conversational or celebratory (Medium 17 speech bubbles, Regular 13 body, ExtraBold 46 for reward numbers) and **Inter** for interface furniture (Semi Bold 16 buttons and row titles, Medium 16 answer text, Regular 14/12 labels and meta). Line-height is `100%` on Poppins display copy — the design deliberately sets tight leading — and `24px` on 16px Inter. Tracking is default everywhere. `Inspiration` script 57px appears six times, for celebration only.

**Spacing & layout.** 390px frame; 16px gutters; 12px right padding in the header (the burger is optically aligned); 72px header; 20px between content blocks; 8px between answer rows; 24px between journey cards. Header and bottom bar are fixed; the middle scrolls. Progress strips sit on `rgba(255,255,255,.8)` so content can scroll under them.

**Corner radii.** 4 (answer key chip) · 8 (answer rows, buttons, inputs) · 10 · 12 (speech bubble, cards) · 16 (media) · 18 (streak card) · 24 (bottom sheet) · 200 (count pills) · 50% (journey nodes, avatars).

**Borders vs shadows.** Cards are built from a 1px hairline (`#DBDBDB` / `#EFEFEF`) *or* an inset ring (`inset 0 0 0 1px`) — not both with a shadow. Shadows are soft and low-opacity: `0 2px 5px rgba(0,0,0,.2)` on floating nodes, `0 1px 4px rgba(0,0,0,.4)` on the coin, `0 4px 13px rgba(0,0,0,.25)` on speech bubbles, `0 4px 16px rgba(0,0,0,.27)` on the lifted journey path. Selected/answered states are drawn with a **2px inset ring** in green or red plus an 8% tint — never with a heavy fill.

**Transparency & blur.** Used sparingly and only for layering: `rgba(255,255,255,.8)` behind the progress strip, `rgba(237,184,67,.2)` behind the coin pill, `rgba(0,0,0,.05)` for inset wells, `rgba(0,0,0,.6)` as a scrim over imagery. No backdrop blur in the source.

**Interaction.** Press is a subtle scale-down (~.99) plus the ring/tint state change; hover is a one-step darker fill (`#019035 → #017A2C`) since the product is touch-first. Disabled is `#E2E2E2` fill with `rgba(24,29,39,.4)` text, and locked content is the same content at ~55% opacity behind a `lock-01` glyph — never hidden. Transitions are short fades/slides, 120–320ms, `cubic-bezier(.4,0,.2,1)`; nothing bounces except reward reveals. The file contains no motion specs beyond prototype links, so easing tokens here are a documented default, not extracted values.

---

## ICONOGRAPHY

- The file's icon set is **Untitled UI line icons**: 24×24 box, 1.5–2px stroke, rounded caps, single colour via `currentColor`, never filled. 69 of them are extracted verbatim from the .fig into `assets/icons/icon-data.js` and rendered by one wrapper: `<Icon name="Route" size={22}/>`. These are the real vector paths from the design file, not a CDN substitute.
- Icons are always monochrome and inherit navy `#083262` in chrome, green when active, `#ABABAB` when inactive/locked. Two-tone or filled icon styles do not appear.
- **Brand-specific glyph systems** that are *not* line icons: the gold **coin** bitmap (`assets/img/coin.png`, always with its `0 1px 4px rgba(0,0,0,.4)` shadow), the 🇩🇪 **flag emoji** used as the country marker on journey nodes, **payment-method logos** (`PaymentMethodIcon`, 39 brands), **company logos** (`CompanyLogo`, 90 companies), **social platform icons** (`SocialIcon`, 34 platforms) and **app-store badges** (`MobileAppStoreBadge`). All are components extracted from the file — use them rather than sourcing logos elsewhere.
- **`Cursor`** (29 variants) is an annotation device kept for design-file fidelity, not product UI. The production app uses **lucide-react** glyphs at runtime (plus a few MUI icons) — match lucide's 24×24 / 2px-stroke geometry for anything new.
- Emoji beyond the country flag: not used. Unicode characters are not used as icons.

---

## Token notes & caveats

- `tokens/fig-tokens.css` is the **complete** Figma variable collection (484/484 variables, all modes — Light, Dark, Style, Value). It is an Untitled UI variable library: its `brand` ramp is purple and its `gray` ramps are neutral. **The product does not use those brand values.** `tokens/brand.css` carries the real Skillcase palette, type scale, radii, shadows and spacing, transcribed from the screens, and is the file you should design against.
- **Fonts substituted:** the .fig ships no font binaries. Poppins, Inter and Inspiration load from Google Fonts (identical families, so this is a source swap, not a design change). `SF Pro Text Semibold 15` — used only in iOS status-bar mockups — falls back to `system-ui`. **If you have licensed binaries, drop them in and I'll write real `@font-face` rules.**
- Three Figma variables are named after weights (`Medium`, `Regular`, `Semibold`) rather than families; the compiler reads them as font names. They are left untouched.
- `Badge` has 666 variants in the source; the extraction caps deltas at 64 variant keys, so exotic Badge combinations may render as the nearest neighbour. `IPhoneMockupStatusBar` lost two boolean-op vectors (wifi/signal bars).
- No slide template exists in the source, so no sample slides were created.

---

## Index

| Path | What it is |
| --- | --- |
| `styles.css` | The single entry point consumers link. `@import`s only. |
| `tokens/app.css` | **Production truth** — every token from the app's `src/index.css`, plus measured screen chrome. |
| `tokens/brand.css` | Design-file palette, type, radii, shadows, spacing, motion. |
| `tokens/fig-tokens.css` | All 484 Figma variables, all modes (generated). |
| `tokens/fig-typography.css` | Text/effect styles — the file defines **none**, so this is empty (generated). |
| `tokens/fonts.css` | Webfont loading. |
| `guidelines/*.card.html` | 18 foundation specimen cards (Colors, Type, Spacing, Foundations, Brand) — the three `App tokens` cards are the production ones. |
| `components/app/` | **Production primitives** — the 13 the shipping app renders. Start here. |
| `components/core/` | Figma library: Buttons/Button, tags, dots. |
| `components/data-display/` | Figma library: avatars, verified tick. |
| `components/forms/` | Figma library: input field, tooltip, help icon, payment icons. |
| `components/navigation/` | Figma library: section divider, social icons, menu glyph. |
| `assets/icons/` | `icon-data.js` (69 glyphs) + `Icon.jsx` wrapper. |
| `assets/logo/` | Wordmark PNG (two-tone), white PNG, navy SVG. |
| `assets/img/` | Coin, Maya (guide illustration), journey map, lesson photography. |
| `ui_kits/mobile-app/` | The **current** main screen + paywall, built from the production primitives. |
| `templates/app-screen/` | Starter template — a 390×844 Skillcase lesson screen, ready to edit. |
| `thumbnail.html` | Homepage tile. |
| `SKILL.md` | Agent-Skills entry point. |
| `github.md` | Source-repo association + sync record. |

### App flow (from the codebase, not Figma)

`src/App.jsx` routes, `BottomTabBar`, `TopModeSwitcher`, `NewNavbar` and `LandingPage` are the source of truth. Full map: **Foundations → App flow**.

- **Home is the German Practice hub.** `/` renders `LandingPage` → `LevelProgress` + `FeatureCardsGrid`. There is no separate home screen.
- **Bottom bar** = Home · Jobs · centre arch · Coins · Streak. Coins never navigates; Streak fires `openLeaderboard` (a sheet, not a route); the centre is a raised dome, tappable only in Guided German → `/learn-german/recap`.
- **Jobs** → `/jobs` (locked gate, A1/A2) or `/job-screening` (real pipeline, B1/B2).
- **Header avatar** → `/profile`; the level title is a brand link back to the active hub.
- **Mode switcher** is 3 tabs below B1 (Guided German · German Practice · German Classes) and 2 tabs at B1/B2 (Job Preparation · German Jobs).
- **B1 and B2 are one surface.** `isB1PracticeLevel()` collapses them, so B2 users are even shown "B1 German Level"; only the level ladder distinguishes them.

Screens: `ui_kits/mobile-app/index.html` (A1 shell, interactive), `levels.html` (all four levels side by side), `jobs.html` (gate vs pipeline), `ui_kits/lesson-flow/index.html` (every lesson screen type).

**Guided German lesson flow** — `/learn-german/lesson/:chapterId` runs `NewLessonFlow`, which walks a server-supplied `screens[]` array and picks a layout per `type`: `intro`, `scenario`, `vocab`, `grammar`, `quiz`, `match_following`, `match_image`, `listen_choose`, `unjumble`, `conversation_intro`, `conversation`, `outro`. Every checkpoint resolves in `LessonResultModal · LevelCompleteCard`; the level ends in `LevelCompleteModal`. The centre arch on the tab bar opens `/learn-german/recap`.

**Job screening** — `/job-screening` is a **lobby**, not a linear wizard: a progress ring over a connector-node checklist, each row a step card with a `done` / `pending` / `review` / `locked` tag, the active card carrying an inline "Start this step". Steps: `welcome`, `profile_completion`, `interview_attempt`, `registration_form`, `review_pending`, `additional_documents`, `interview_training`, `recruiter_status`. `paywall` is a ninth step that is **filtered out of the checklist** — when it is current it replaces the whole pipeline with the refundable ₹10,000 deposit gate. The **navy welcome is the first screen** — the lobby only appears once that step completes. Display titles as the lobby prints them: Welcome to job screening · Upload your documents · Skillcase Interview · Agreement · Interview Training · Recruiter Interview · Offer Letter · Visa Processing. All 21 screens: `ui_kits/job-flow/index.html`.

**Practice modules** — every module's select screen (flashcards, grammar, listening, speaking, reading, test) is one `ChapterSelectTemplate` at every level: module top bar, level hero, chapter strip, chapter rows. A1 pads its list to 12 chapters so locked ones read as a roadmap; A2 shows only what the API returns.

### Components (96)

**`components/assessment/` — scoring kit (3).** Ported from `src/pages/b1/describe-speak/components/`, which the four exam results screens already import — reuse proven in production. Confirmed **intentional additions**.

ScoreRing · MetricBar · AudioPlayer

| Component | Production source |
| --- | --- |
| `ScoreRing` | The circular results readout; geometry parameterised so the exams' hand-rolled 120px ring is reproducible |
| `MetricBar` | One scored metric, `workspace` (12px) and `compact` (6px) variants |
| `AudioPlayer` | Recorded-audio bar, `workspace` and `review` variants |

`scoreBands.js` holds the score→colour scale as data because production has **seven competing versions** (four found in phase 2, three more by the exam audit); `bands` is a prop rather than a baked-in constant. Its exports are deliberately lower-case so a threshold table is not registered as a component. Evidence and the divergence report: `guidelines/scoring-kit.html`, extended in `guidelines/exam-system-audit.html`.

**`components/exam/` — exam chrome (3).** Extracted in the phase 3 exam audit on verbatim-duplication evidence only. Confirmed **intentional additions**.

ExamTimerPill · BlockProgressTrack · DifficultyBadge

| Component | Production source |
| --- | --- |
| `ExamTimerPill` | The section countdown chip, identical in all four B1 exam workspaces; `warning`/`critical` tones are a flagged proposal, not shipped behaviour |
| `BlockProgressTrack` | The segmented amber/zinc block bar — 8 copies across the workspaces and results review modes |
| `DifficultyBadge` | The easy/medium/hard pill; 5 copies of its colour helper, with the unrecognised-tag fallthrough reproduced as-is |

`components/core/ListRow` — the selectable list row, extracted in phase 5. Ten-plus surfaces across six features (exams, describe-speak, read & listen, video courses, notes): the most reused composition in the product, and invisible to four earlier audits because within any one surface it reads as that screen's own list. Its two disagreeing hover treatments are reproduced via a `hover` prop, not unified.

The section tile, the correct/incorrect/skipped tally and the answer-review row were considered and **not** extracted — see `guidelines/exam-system-audit.html` section D. Defects found across all three phases are registered in `guidelines/defects.md`.

**Accessibility rules are part of the system.** `--ui-focus-ring` (a dual ring, validated against every surface a focused control sits on), `--ui-target-min` 44px, a `prefers-reduced-motion` block, and three staged `-aa` contrast alternates. Anything with an `onClick` renders as a `<button>`. Rules, measurements and open decisions: `guidelines/accessibility.html`.

**Tokens are consumed through the semantic tier.** `tokens/semantic.css` defines `--ui-*` interface roles — surface, text, border, action, feedback, progress, state, focus, motion — and 59 components are bound to it (247 colour literals replaced in phase 6). Components should reference `--ui-*`, never a raw hex or a `--colors-*` value. `--sc-*` holds brand primitives that the semantic tier is built from. Evidence and the two deliberate non-consolidations: `guidelines/semantic-tokens.card.html`.

**`components/state/` — loading, empty, error & announcement (3).** Extracted from repeated production markup, except `LiveRegion`. Confirmed **intentional additions**.

StateMessage · SkeletonList · LiveRegion

| Component | Production source |
| --- | --- |
| `StateMessage` | The centred `py-12` block, empty and error states — verbatim in `ExamSelect`, `PaperSelect`, `ExamBlockSelector`, `DescribeSpeakSelect` |
| `SkeletonList` | Title bar + n items; `row` from `PaperSelect`/`ReadListenTopicSelect`/`DescribeSpeakSelect`/`interviewSelect`, `card` from `ExamSelect` |
| `LiveRegion` | **No production source.** Production has no announcement layer at all — this closes that gap. Justified as a required accessibility standard, not as extracted evidence. One region per screen, owned by the template (D-028) |

Two deliberately-excluded skeletons remain surface-local: `ChapterSelectTemplate`'s six-row white variant and the flashcard/pronounce single-card placeholder. `AppButton` gained `busy` for the submitting state (5 production files). Evidence and validation: `guidelines/state-primitives.html`.

**`components/premium/` — freemium, trial & purchase (5).** Ported from `src/components/UsageLimitModal.jsx` and `src/pages/payments/`. Confirmed **intentional additions**.

UsageLimitPanel · PremiumPriceCard · DarkFeatureList · PlanSummaryCard · PaymentMethodRow

| Component | Production source |
| --- | --- |
| `UsageLimitPanel` | The gate in all three shipped states: limit hit (countdown), premium-only (lock chip), limit reset |
| `PremiumPriceCard` | ₹99/month well + "Unlimited" rows, with or without the gradient Premium Plan tab |
| `DarkFeatureList` | The inverted entitlement rows on the navy trial screens |
| `PlanSummaryCard` | `UpgradePlanPage.jsx` — plan card + Price Details block |
| `PaymentMethodRow` | `UpgradePlanPage.jsx` — Razorpay · UPI · Card · Netbanking · Wallet |

**Freemium path.** A gate fires first (`UsageLimitPanel`). Tapping upgrade routes to `/trial-offer` **before any payment screen** if the user has never claimed their one trial; payment is only reachable once the trial is claimed or explicitly skipped (`skipTrialOffer`), and an autopay-enabled user is redirected to Manage plan instead. Six screens: `ui_kits/premium-flow/index.html`.

**`components/jobs/` — job screening pipeline (13).** Ported from `src/pages/jobScreening/`. Confirmed **intentional additions**.

JobWelcomePanel · JobProgressHeader · JobStepCard · StatusPanel · StatusChecklist · MayaNote · PointsToRemember · UploadRow · SlotPicker · ScheduledCallCard · SignatureModal · DocumentReader · DepositGateCard

| Component | Production source |
| --- | --- |
| `JobWelcomePanel` | `components/WelcomeStep.jsx` — the navy welcome, the pipeline's FIRST screen |
| `JobProgressHeader` | The lobby's "Your job progress" header + 96px amber ring |
| `JobStepCard` | The timeline checklist row — connector node + step card, 4 states |
| `StatusPanel` | The pale-blue card carrying most step screens |
| `StatusChecklist` | The done / active / pending row list inside it |
| `MayaNote` | The "Please note" strip — the pipeline's most repeated element |
| `PointsToRemember` | The pre-interview and pre-training briefing block |
| `UploadRow` | Document upload with per-credential approval state |
| `SlotPicker` | The booking modal — training calls, employer interviews, reschedules |
| `ScheduledCallCard` | Booked-call confirmation: date, time, host, join |
| `SignatureModal` | Agreement / offer-letter signing — Type, Draw, Upload |
| `DocumentReader` | The agreement and offer letter, with the amber Read & Sign bar |
| `DepositGateCard` | The `paywall` step: refundable ₹10,000 security deposit |

**`components/practice/` — module select chrome (4).** Ported from `src/components/a1/ChapterSelectTemplate.jsx` (and its a2 twin). Confirmed **intentional additions**.

ModuleTopBar · LevelHero · ChapterStrip · ChapterRow

| Component | Production source |
| --- | --- |
| `ModuleTopBar` | Back / module-name row — module screens leave the app shell behind |
| `LevelHero` | The 140px photo band fading to white + the level statement |
| `ChapterStrip` | The horizontal carousel of per-chapter progress bars |
| `ChapterRow` | The chapter list item: name, `n/m done` pill, chevron or padlock |

**`components/lesson/` — Guided German lesson chrome (9).** Ported from `src/pages/learnGerman/lesson/screens/`. Confirmed **intentional additions** — the Figma kit has no component sets for the lesson flow.

LessonProgressBar · MayaPrompt · LessonSheet · LessonFooter · OptionRow · AudioTapButton · WordChip · ChatBubble · LessonResultModal · LevelCompleteCard

| Component | Production source |
| --- | --- |
| `LessonProgressBar` | `lesson/screens/shared/ProgressBar.jsx` |
| `MayaPrompt` | `lesson/screens/shared/MayaDialogueBubble.jsx` + per-screen layout |
| `LessonSheet` | The white radius-32 task sheet shared by every lesson screen |
| `LessonFooter` | The Prev / amber-CTA advance row |
| `OptionRow` | `QuizScreen` · `ListenAndChooseScreen` · `MatchFollowingScreen` |
| `AudioTapButton` | The tap-to-listen button with sonar rings + handtap |
| `WordChip` | `UnjumbleScreen` · `MatchImageScreen` · `shared/DraggablePill.jsx` |
| `ChatBubble` | `ConversationScreen.jsx` |
| `LessonResultModal · LevelCompleteCard` | `shared/QuizResultModal.jsx` + `shared/DragResultModal.jsx` |

**`components/app/` — production primitives (23).** Ported 1:1 from `SkillCase-Frontend/src/components/ui` and the app shell. **Design against these.** Every one is a confirmed **intentional addition**: the Figma kit defines no component set for the shipped app shell, so the shipping code is the source of truth and these names are deliberately outside the kit's Untitled-UI vocabulary.

AppButton · AppBadge · CheckItem · FeatureStatusChip · PlanPill · AppHeaderBar · ModeRail · AppTabBar · LevelLadder · JourneyCard · PracticeTile · CourseCard · PromoBanner · JobListingCard · LockGateCard · ChoiceRow · MayaBubble · OtpBoxes · PhoneField · AppModal · PaywallPanel · StreakCard

**Intentional additions — confirmed.** The Figma kit contains no component sets for the shipped app shell, so these 23 names are deliberately outside the kit's Untitled-UI vocabulary and must not be renamed: `AppBadge`, `AppButton`, `AppHeaderBar`, `AppModal`, `AppTabBar`, `ChoiceRow`, `CourseCard`, `FeatureStatusChip`, `JobListingCard`, `JourneyCard`, `LevelLadder`, `LockGateCard`, `MayaBubble`, `ModeRail`, `OtpBoxes`, `PaywallPanel`, `PhoneField`, `PlanPill`, `PracticeTile`, `PromoBanner`, `StreakCard`, `CheckItem`, `AppTabBar`. Each carries the same confirmation in its `.d.ts` and `.prompt.md`, naming the `SkillCase-Frontend` file it was ported from.

| Component | Production source |
| --- | --- |
| `AppButton` | `src/components/ui/Button.jsx` |
| `AppBadge` | `src/components/ui/Badge.jsx` |
| `CheckItem` | `src/components/ui/CheckItem.jsx` |
| `FeatureStatusChip` | `src/components/ui/FeatureStatusChip.jsx` |
| `JourneyCard` | Guided German journey level card (live app / screenshots) |
| `PracticeTile` | German Practice grid tile (live app / screenshots) |
| `CourseCard` | German Classes course row (live app / screenshots) |
| `PromoBanner` | The blue demo-class banner under the practice grid |
| `ChoiceRow` | Figma `1:2129` / `1:2123` — onboarding options + lesson answers |
| `MayaBubble` | Maya + speech bubble, onboarding / journey / lessons |
| `OtpBoxes` + `PhoneField` | Onboarding phone and OTP entry |
| `PlanPill` / `AppHeaderBar` | `src/components/Navbar.jsx` + Figma `2513:10746` |
| `ModeRail` | `src/components/TopModeSwitcher.jsx` |
| `AppTabBar` | `src/components/BottomTabBar.jsx` |
| `LevelLadder` | `src/pages/landing/components/LevelProgress.jsx` |
| `JobListingCard` | `src/pages/jobs/JobsLockedPage.jsx` + `landing/components/JobCard.jsx` |
| `LockGateCard` | `src/pages/jobs/JobsLockedPage.jsx` — the below-B1 eligibility gate |
| `AppModal` | `src/components/PaywallBlocker.jsx`, `UsageLimitModal.jsx` |
| `PaywallPanel` | `src/components/PaywallBlocker.jsx` |
| `StreakCard` | `src/components/StreakWidget.jsx` |

**Figma library (30).** The Untitled-UI-derived families the design file still defines — accurate, but not what ships.

**core** — ArrowRight · AU · ButtonsButton · ButtonsButtonLoadingIcon · Check · Dot · Placeholder · Tag · TagCheckbox · TagCloseX · TagCount · XClose

**data-display** — AlertCircle · Avatar · AvatarCompanyIcon · AvatarOnlineIndicator · CheckCircle · User01 · VerifiedTick

**forms** — ChevronDown · Cursor · HelpCircle · HelpIcon · InputField · Mail01 · PaymentMethodIcon · TextField · Tooltip

`TextField` is the SkillCase input, extracted in phase 8 from the same nine Tailwind classes written inline on six surfaces (ExamReading/ListeningWorkspace, VideoReader, NewsArticleReader, SupportWidget, CallEndedScreen) and never componentised there. It keeps production's shipped `ring-2 ring-blue-600` focus treatment rather than the system's dual ring — text fields are the one control class the app already handles correctly (D-029). `InputField` is the imported Untitled UI sprite and is *not* the app's input.

**navigation** — Menu01 · SectionDivider · SocialIcon

**icons** — Icon (69 named glyphs; see `assets/icons/Icon.d.ts`)

### What was removed, and why

The second Figma export ("Figma 5Y2oLJUXmOOVu5kvSDnzYL", 18 component sets) no longer defines the marketing furniture the first export carried, and none of it appears in the shipping codebase. Deleted rather than left to mislead: Badge, BadgeGroup, BadgeCloseX, CTASection, Footer + FooterLink + FooterLinksColumn, PricingTierCard, QuoteImageBottomPanel, TestiomonialCarouselArrow, CompanyLogo, MobileAppStoreBadge, RatingsBadge, Logo, Logomark, NavMenuButton, NavPoint, CallOut, Component8, FeaturedIcon, CheckIcon, CheckItemText, StarIcon, HandDrawnArrow, and the device mockups. The old journey/lesson/jobs/profile UI-kit screens went with them — they were drawn from the first export and no longer match the app.

### Intentional additions

These 20 components have no counterpart in the Figma kit's component sets. Every one is deliberate, and each is named after the production source it was ported from rather than a Figma layer — because the code is what ships:

- **`AppButton`** — `src/components/ui/Button.jsx`. Prefixed to avoid colliding with the kit's `ButtonsButton`.
- **`AppBadge`** — `src/components/ui/Badge.jsx`. Prefixed because the kit's `Badge` was removed.
- **`CheckItem`** — `src/components/ui/CheckItem.jsx`.
- **`FeatureStatusChip`** — `src/components/ui/FeatureStatusChip.jsx`. The entitlement chip; no Figma component exists for it.
- **`JourneyCard`** — the Guided German level card: 3D isometric scene, "Level n completed" pill, restart + Recap row, green check badge.
- **`PracticeTile`** — the German Practice grid tile: photo strip, 13px title, 10px caption.
- **`LevelLadder`** — the A1 · A2 · B1 · B2 ladder above the practice grid; amber fill through the current level, with a `dynamic` green/percentage variant.
- **`JobListingCard`** — a German job posting: title + location chip, organization, facts row, and the disabled "Complete German B1 to Apply" CTA below B1.
- **`LockGateCard`** — the eligibility gate at the top of `/jobs` for A1/A2 users.
- **`CourseCard`** — the German Classes row: thumbnail, level/difficulty chips, progress track, "n/m videos completed".
- **`PromoBanner`** — the blue demo-class banner with the gold Register Now button and Maya at the right edge.
- **`ChoiceRow`** — the lettered option row shared by onboarding questions and lesson answers, with selected / correct / incorrect states.
- **`MayaBubble`** — Maya and her speech bubble, the guide's voice everywhere in the product.
- **`OtpBoxes`** and **`PhoneField`** — the onboarding phone and OTP entry, on the app's skeuomorphic field ring.
- **`PlanPill`** — the header's plan readout, Figma frame `2513:10746`.
- **`AppHeaderBar`** — `src/components/Navbar.jsx` + Figma frame `2513:10746`.
- **`ModeRail`** — `src/components/TopModeSwitcher.jsx`.
- **`AppTabBar`** — `src/components/BottomTabBar.jsx`.
- **`EventBanner`** — the home sheet's promo panel, Figma frame `2513:10746`.
- **`AppModal`** — the shared scrim + card shell from `PaywallBlocker.jsx` / `UsageLimitModal.jsx`.
- **`PaywallPanel`** — `src/components/PaywallBlocker.jsx`.
- **`StreakCard`** — `src/components/StreakWidget.jsx`.
- **`Icon`** — one wrapper over the 69 glyphs extracted from the .fig, so consumers don't import 69 files. No new artwork was drawn.

The shell assemblies in that list (`AppHeaderBar`, `ModeRail`, `AppTabBar`, `FeatureCard`, `EventBanner`, `PlanPill`, `PaywallPanel`, `StreakCard`) are published rather than left as loose frames because every screen needs them, and re-deriving their geometry by hand is how drift starts.

Naming note: Figma-library names are the raw layer names, mechanically PascalCased. `ButtonsButton` is the file's `Buttons/Button`. They are kept verbatim so designers can find them in Figma.

### Production stack (for handoff)

React 19 · Vite 7 · Tailwind v4 (`@import "tailwindcss"` + the `:root` tokens in `src/index.css`) · Redux Toolkit + redux-persist · react-router 7 · framer-motion · **lucide-react** and MUI icons · Capacitor 8 (Android shell, haptics, push, live-update) · Sentry · Firebase analytics. Tokens are consumed as plain CSS custom properties plus Tailwind arbitrary values (`bg-[#002856]`) — when you add a colour, add it to `src/index.css` first.
