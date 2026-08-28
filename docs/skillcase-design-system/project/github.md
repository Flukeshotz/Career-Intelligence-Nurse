repo: Skillcase-test/SkillCase-Frontend
branch: main

## Last sync

date: 2026-08-28T00:00:00Z
status: NOT SYNCED VIA GITHUB — the GitHub App is not installed for this connection, so no commit sha was read. The design system is built from the **mounted local folder** `SkillCase-Frontend-main`, which is the working source of truth.

### Updated in this project

- Correction to the previous entry, which claimed everything came from the Figma file. That was wrong: tokens, components and screens are extracted from the mounted codebase, with Figma as visual reference only (authority order is set in CLAUDE.md).
- 28 Aug 2026 — route map re-scanned against `src/App.jsx`; no new learner-facing routes since the phase-5 audit.
- 28 Aug 2026 — accessibility retrofit applied to all five screen kits.
- To enable true sync: install the GitHub App on `Skillcase-test`, or paste the correct repo URL.

## Screen map

| Project screen | Repo files |
| --- | --- |
| `ui_kits/mobile-app/` | `src/pages/learnGerman/`, `src/components/` (header, tab bar, mode switcher), `src/pages/onboarding/`, `src/pages/jobs/JobsLockedPage.jsx` |
| `ui_kits/lesson-flow/` | `src/pages/learnGerman/lesson/` (NewLessonFlow + screens/) |
| `ui_kits/job-flow/` | `src/pages/jobScreening/` (JobScreening + components/) |
| `ui_kits/premium-flow/` | `src/pages/payments/`, `src/components/TrialEndedModal.jsx`, `UsageLimitModal.jsx` |
| `ui_kits/exam-flow/` | `src/pages/b1/exams/` (four workspaces, four results, PaperSelect, congratulations) |
| `templates/lesson-screen/` | `src/pages/learnGerman/lesson/screens/shared/ProgressBar.jsx`, `MayaDialogueBubble.jsx` |
| `templates/app-screen/` | `src/components/` app shell |
| `templates/select-screen/` | `src/components/{a1,a2,b1}/ChapterSelectTemplate.jsx` |
| `templates/task-screen/` | `src/pages/b1/describe-speak/`, `src/pages/b1/read-listen/` |
