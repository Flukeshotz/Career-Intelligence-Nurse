# SkillCase — Phase 0 Build Specification

> **This is the developer's document.** It turns the strategy in `context.md` and the design in `architecture.md` into unambiguous build instructions for Phase 0.
>
> **Read order:** Quick Reference → User Scenarios → State Machines → Glossary → everything else as needed.
>
> Where this document and `context.md` disagree on *product intent*, `context.md` wins. Where this document and `architecture.md` disagree on *schema*, the DDL in `architecture.md` wins.
>
> **Last updated:** 2026-08-27

---

## Table of Contents

- [Quick Reference](#quick-reference)
- [User Scenarios](#user-scenarios)
- [Opportunity Lifecycle State Machine](#opportunity-lifecycle-state-machine)
- [Tracked Cycle State Machine](#tracked-cycle-state-machine)
- [Glossary](#glossary)
- [Empty States](#empty-states)
- [Simple-Language Content Rules](#simple-language-content-rules)
- [Data Seeding Template](#data-seeding-template)
- [Analytics Specification](#analytics-specification)
- [Pre-Build Checklist](#pre-build-checklist)

---

## Quick Reference

**What we are building in Phase 0:** a trustworthy nursing opportunity discovery and tracking product. Manually curated data, no scrapers, no AI, no resume matching.

| Thing | Value |
|---|---|
| **Audience** | Indian nurses — GNM, BSc, Post Basic BSc, MSc |
| **Stack** | Next.js 14 (App Router) + PostgreSQL. No Redis, no queues, no separate backend service |
| **URL shape** | `/nursing/jobs/{slug}` · `/nursing/exams/{slug}` — profession segment is **mandatory** |
| **Data source** | Manual curation from a spreadsheet, 30–50 opportunities |
| **Auth** | Magic link / token. No passwords, no OAuth in Phase 0 |
| **Alerts** | Email only (Resend). Sent manually in Phase 0 |
| **Analytics** | PostHog, live in Week 1 before the first user |
| **The gate (G0)** | Do nurses come back — including *without* an alert? |

**The Phase 0 loop:**

```
Discover → Opportunity page → Understand → Check eligibility
   → Apply → Track → Share → Alert → Return
```

**Three rules that override convenience:**
1. **Never show a confident eligibility verdict we can't support.** `unknown` is a valid, first-class answer.
2. **Never hide the official source.** Every opportunity links to the authority it came from.
3. **Never hard-filter a nurse out of the feed** on qualification `other` or on location.

---

## User Scenarios

These are the acceptance scenarios for Phase 0. If all five work end-to-end, Phase 0 is functionally complete.

### Scenario A — First-time visitor (acquisition)

**Priya. BSc Nursing, 1 year experience, Bangalore.** She Googles *"AIIMS nursing officer vacancy"* and lands directly on the opportunity page.

**She must immediately see, without an account:**
- Deadline · Qualification required · Experience required · Location · Vacancy count
- Plain-language explanation of what this is and who can apply
- Link to the official notification
- Link to the official application page
- "Last verified" date and the source

**Then:** a clear *"Get updates about this opportunity"* action → account creation.

> **Build rules:** the page is server-rendered and fully public. **No login wall, no modal interrupt, no "sign up to see details".** Value precedes onboarding. This page is also the SEO and share landing surface, so it carries `JobPosting` JSON-LD and OG tags.

### Scenario B — Returning tracker (retention — *the* Phase 0 test)

Priya has tracked **AIIMS Nursing Officer**, **NORCET**, and **Karnataka recruitment**. She returns three weeks later.

**The home screen leads with:**

```
2 things changed since your last visit
  • AIIMS Nursing Officer — admit card released
  • NORCET 2026 — exam date updated
```

Below that: her tracked cycles, sorted by **next upcoming stage** (soonest first) — not by date added.

> **Build rules:** "changed since your last visit" is computed against her `last_seen_at`, not a rolling 7 days. Changes on **tracked** opportunities rank above all new-match content. If nothing changed, say so plainly and show what's next — never fabricate activity.

### Scenario C — Not eligible yet (the differentiator)

A job requires **2 years**. She has **1 year 4 months**.

**Do not show:** ❌ Not eligible

**Show:**

```
Not eligible yet
You need approximately 8 more months of experience.

What you can do:
  • Track this employer — we'll alert you when a similar role opens
  • See roles you qualify for now
```

> **Build rules:** this is the Requirements → Gap → Action model rendered (`context.md` → Eligibility Intelligence). Each unmet requirement carries its `remedy_text`. Never a bare rejection, never a dead end. The nurse should leave with something to do.

### Scenario D — Unknown (the safety scenario)

Her qualification isn't clearly covered by the source notification.

**Do not show:** ❌ Not eligible
**Do not show:** ✅ Eligible

**Show:**

```
We couldn't confirm your eligibility
The official notification doesn't clearly state whether your
qualification is accepted.

  → Check the official notification
```

> **Build rules:** `unknown` must survive from `opportunity_requirements` all the way to the screen. It must never be coerced into `met` or `not_met` by defaulting, rounding, or "best guess" logic. **This is the scenario that tests our most important safety rule** — a nurse deciding whether to pay an application fee is far better served by an honest gap than a confident wrong answer.

### Scenario E — Multi-profession foundation (invisible in Phase 0)

The UI is entirely nursing. Internally the chain is already profession-scoped:

```
profession → qualification → role → opportunity → requirements
```

**What must be true in Phase 0:**
- Exactly one row in `professions` (`nursing`)
- Qualifications and roles are reference rows, **not hardcoded enums**
- Every job, exam, and profile carries `profession_id`
- Every public URL carries the profession segment

**What must NOT be built:** a profession switcher, a second vertical, or an admin UI for professions.

> **Acceptance test:** adding a second profession later should require `INSERT`s and new content — not a schema migration or a URL change.

---

## Opportunity Lifecycle State Machine

The state of an opportunity as published by SkillCase.

```
        ┌──────────┐
        │ UPCOMING │
        └────┬─────┘
             │ application window opens
             ▼
    ┌──────────────┐  deadline extended / reopened
    │     OPEN     │◄──────────────────┐
    └──────┬───────┘                   │
           │ deadline passes           │
           ▼                           │
    ┌──────────────┐                   │
    │    CLOSED    │───────────────────┘
    └──────┬───────┘
           │ archived after result/counselling, or 90 days
           ▼
    ┌──────────────┐
    │   EXPIRED    │
    └──────────────┘

    UPCOMING or OPEN ──── officially cancelled ────► CANCELLED
```

### Transitions — who may trigger what

| From | To | Trigger | Who |
|---|---|---|---|
| — | `upcoming` | Opportunity created with a future application start | Curator |
| — | `open` | Opportunity created with the window already open | Curator |
| `upcoming` | `open` | `application_start` reached | **System** (scheduled) |
| `open` | `closed` | `application_deadline` passed | **System** (computed at read time — never trust source-reported status alone) |
| `open` | `open` | Deadline extended | **Curator**, only after verifying the official source |
| `closed` | `open` | Deadline extended or recruitment reopened | **Curator**, only after verifying the official source |
| `upcoming` / `open` | `cancelled` | Officially cancelled by the authority | **Curator**, only with an official source |
| `closed` | `expired` | Result/counselling concluded, or 90 days after close | System or Curator |
| any | any | Correction of a data-entry error | **Curator**, logged (Edge Case 14.1) |

### Rules

- **`closed` is computed, not stored-only.** If `application_deadline` has passed, the opportunity reads as closed regardless of what the source says (Edge Case 3.1).
- **Only a curator may re-open**, and only against a verified official source. The system must never infer an extension.
- **State changes on a tracked opportunity emit an alert event** — this is the retention engine's trigger.
- **SEO consequences are bound to state** (`architecture.md` → Indexation Lifecycle): `open`/`upcoming` are indexed; `closed` is `noindex` with a visible closed state; `expired` returns `410 Gone`.
- **`cancelled` is not `expired`.** A cancelled recruitment is newsworthy to anyone tracking it and must alert them explicitly.

---

## Tracked Cycle State Machine

The nurse's **personal** progress through an opportunity. Independent of the opportunity's own state — she can be at `applied` while the opportunity is `closed`.

```
INTERESTED → APPLIED → ADMIT_CARD_AWAITED → EXAM_SCHEDULED
   → EXAM_TAKEN → RESULT_AWAITED → RESULT_OUT → COUNSELLING → CLOSED
```

Not every cycle passes through every stage — a private job may go `interested → applied → closed`.

### Transitions

| From | To | Trigger | Who |
|---|---|---|---|
| — | `interested` | Nurse taps "Track" | **Nurse** |
| `interested` | `applied` | Nurse marks "I applied" | **Nurse** |
| `applied` | `admit_card_awaited` | Opportunity has an admit card stage | System |
| `admit_card_awaited` | `exam_scheduled` | Admit card released / exam date published | System (from opportunity data) |
| `exam_scheduled` | `exam_taken` | Exam date passes | System |
| `exam_taken` | `result_awaited` | Automatic | System |
| `result_awaited` | `result_out` | Result published | System |
| `result_out` | `counselling` | Counselling stage exists and she advances | Nurse or System |
| any | `closed` | Cycle concluded, with an `outcome` | Nurse or System |
| any | `closed` (`outcome = lapsed`) | Deadline passed while still `interested` | System (Edge Case 10b.3) |

### Rules

- **Self-report is always optional.** Never block progress on her confirming a stage. Infer from published dates where possible.
- **`outcome`** (`selected` / `not_selected` / `withdrew` / `lapsed`) is nullable forever. Never force a nurse to report a rejection.
- **Never hard-delete a tracked opportunity.** On dedup merge, re-point to the surviving record and tell her (Edge Case 10b.6).
- **Every transition writes a `tracked_stage_events` row** — this is both the alert trigger and the retention analytics source.
- **Tone rules apply at `result_out`.** No celebration, no gamification, no immediate "here are 10 similar jobs" after a rejection (Edge Case 10b.7).

---

## Glossary

Terms with overloaded everyday meanings. **Use these exactly, in code, in copy, and in analytics event names.**

| Term | Meaning |
|---|---|
| **Opportunity** | Umbrella term for a Job *or* an Exam. Use when logic applies to both |
| **Job** | An employment opportunity (government or private) |
| **Exam** | A recruitment/selection examination (NORCET, state recruitment) |
| **Source** | The website or document the information was derived from |
| **Source Type** | `official` / `verified_secondary` / `other` — the trust tier of that source |
| **Official notification** | The authority's own recruitment/exam document (usually a PDF). **Not** an app notification |
| **Alert** | A user's *subscription* to receive updates. A standing intent, not a message |
| **Alert event** | A detected change that matches an alert. Internal, not user-visible |
| **Message** | The actual email or in-app communication generated from an alert event. **This is the only one the nurse "receives"** |
| **Saved opportunity** | A bookmark. Passive, no commitment, no follow-through owed |
| **Tracked opportunity** | An opportunity the nurse is following. **We owe her every subsequent stage** |
| **Tracked cycle** | Her progress through a tracked opportunity's lifecycle |
| **Stage** | A position in the tracked cycle (`applied`, `result_awaited`…) |
| **Status** | The opportunity's own lifecycle state (`open`, `closed`…). **Never use "status" for a tracked cycle** |
| **Requirement** | One individual condition that must be satisfied to apply |
| **Eligibility** | The evaluation of all requirements against a nurse's profile |
| **Gap** | A requirement that is not currently satisfied |
| **Remedy** | The action that would close a gap |
| **Unknown** | Information insufficient to make a reliable determination. **A real answer, never a placeholder** |
| **Curator** | A person manually entering or verifying opportunity data in Phase 0 |
| **Profession** | The vertical (`nursing` in the MVP). Scopes qualifications, roles, URLs |

> **The two collisions to watch:** *notification* (official document vs. app message — use **message** for the latter) and *status* (opportunity lifecycle vs. tracked cycle — use **stage** for the latter).

---

## Empty States

Every empty state must tell her **why** it's empty and **what to do next**. A bare "No results" is a defect.

| Screen | Condition | Copy | Primary action |
|---|---|---|---|
| Job/Exam list | Filters match nothing | "No MSc Nursing roles for freshers right now. This combination is uncommon — try widening one filter." | Remove the most restrictive filter (name it) |
| Job/Exam list | No data at all (early Phase 0) | "We're adding opportunities daily. Tell us what you're looking for and we'll alert you." | Create alert |
| Home — changes | Nothing changed since last visit | "Nothing new since you last checked. Here's what's coming up in your cycles." | Show next upcoming stages |
| Home — no tracking | Signed in, tracking nothing | "Track an opportunity and we'll follow it for you — admit cards, exam dates, results." | Browse opportunities |
| My Cycles | All cycles concluded | "No active cycles. When you apply for something, track it here and we'll keep you updated." | Browse opportunities |
| Eligibility | Profile incomplete | "Add your qualification and experience to see whether you're eligible." | Complete profile (never blocks browsing) |
| Eligibility | Requirements unknown | "We couldn't confirm your eligibility from the official notification." | Open official notification |
| Search | No match | "Nothing matched '{query}'. Try a role, employer, or exam name." | Show popular searches |
| Search | Non-English query | "We can only search in English right now. Try the English name." | — |
| Abroad preference | Selected in profile | "Overseas opportunities are coming soon. We'll notify you — which country are you considering?" | Country capture (demand signal) |
| Opportunity | Closed | "Applications for this closed on {date}." | Show similar open opportunities |
| Opportunity | Expired (`410`) | "This opportunity is no longer available." | Show similar open opportunities |
| Alerts | None configured | "No alerts yet. We'll only email you about things that match your profile." | Create alert |

> **Never** use an empty state to guilt, nag, or manufacture urgency. State the situation, offer the next step.

---

## Simple-Language Content Rules

`description_simple` is **a product capability, not copy**. It is the differentiator (`context.md` → Key Design Principles #2).

> **Phase 0 rule: written by a human curator. Do NOT auto-generate eligibility interpretations with an LLM.** An incorrect simplification of an eligibility rule causes a nurse to waste an application fee or wrongly skip an opportunity she qualified for.

### The fixed format

Every opportunity's simple explanation uses these five headings, in this order:

```
What is this?
  One sentence. Role, employer, and whether it's government or private.

Who can apply?
  Qualification and experience in plain words. Name every accepted path.

Important dates
  Only dates verified against the official notification.

What do you need?
  Documents, registration, fees.

What happens next?
  The process in 2–3 short steps.
```

### Traceability is mandatory

Every simplification sits **alongside** the original — never replacing it (Edge Case 10.1).

> **Official requirement**
> "B.Sc. Nursing / Post Basic B.Sc. Nursing from a recognized institution…"
>
> **In simple words**
> "You can apply if you have BSc Nursing or Post Basic BSc Nursing from a recognized institution."
>
> **Source:** Official notification, page 3

### Writing rules

| Do | Don't |
|---|---|
| Short sentences. One idea each | Long clauses, semicolons, legalese |
| "You can apply if…" | "Candidates fulfilling the aforementioned criteria…" |
| Name every accepted qualification path | Summarise four paths as "various qualifications" |
| Write "we couldn't confirm" when unclear | Guess, round, or infer |
| Keep numbers exactly as the source states | Convert, approximate, or "simplify" a number |
| Say "approximately" only about *our* gap calculations | Use it about official requirements |

> **If the source is ambiguous, the simple version says so.** Simplification must never manufacture a certainty the source doesn't contain.

---

## Data Seeding Template

**This is the most immediate blocker and should be started on day one.** Populating 30–50 real records will pressure-test the schema faster than another review.

Two CSVs live alongside this document:

- [`seed/phase_0_opportunities.csv`](seed/phase_0_opportunities.csv)
- [`seed/phase_0_requirements.csv`](seed/phase_0_requirements.csv)

### Opportunities — column contract

| Column | Notes |
|---|---|
| `external_ref` | Your own key (e.g. `aiims-no-2026`). Links to the requirements sheet |
| `profession` | `nursing` for every Phase 0 row |
| `opportunity_type` | `job` or `exam` |
| `title` / `organisation` | As officially stated |
| `job_type` | `government` / `private`. Blank for exams |
| `location_state` / `location_city` | Canonical spelling; blank if all-India |
| `role` | `staff_nurse`, `nursing_officer`, `icu`… |
| `qualification_summary` | Human-readable. The machine-evaluable version goes in the requirements sheet |
| `experience_min_years` / `experience_max_years` | **Blank = unknown. Never write 0 to mean "not stated"** |
| `salary_min` / `salary_max` / `salary_raw` | All nullable |
| `vacancy_count` | Nullable |
| `application_start` / `application_deadline` / `exam_date` | `YYYY-MM-DD`. Blank if not announced |
| `status` | `upcoming` / `open` / `closed` |
| `description_simple` | The five-heading format above |
| `official_notification_url` / `application_url` / `source_url` | |
| `source_type` | `official` / `verified_secondary` / `other` |
| `last_verified_at` | `YYYY-MM-DD` — the date **you** checked it |

### Requirements — column contract

| Column | Notes |
|---|---|
| `external_ref` | Matches the opportunity |
| `requirement_kind` | `qualification` / `experience` / `registration` / `age` / `language` / `document` |
| `operator` | `gte` / `lte` / `in` / `eq` / `exists`. **Blank = not machine-evaluable → `unknown`** |
| `value_numeric` | For `gte`/`lte` |
| `value_text` | Pipe-separated codes, e.g. `bsc_nursing\|post_basic` |
| `is_mandatory` | `true` / `false` |
| `raw_text` | **Verbatim from the source. Always required** |
| `simple_text` | Plain-language version |
| `remedy_text` | What would close this gap if unmet |
| `or_group` | Same label = alternative paths. Satisfying any one satisfies the group |

### What seeding will teach you (expect these)

| You'll find | Correct response |
|---|---|
| No salary stated | Leave null. Don't invent a range |
| Four different qualification paths | Four rows sharing one `or_group` |
| Experience not specified | **Leave blank → `unknown`.** Do not write `0` |
| Requirement is prose that won't structure | Fill `raw_text` only, leave `operator` blank → renders as `unknown` |
| Deadline stated as "within 21 days of publication" | Compute it, record the source wording in `raw_text` |

> **Log every such discovery.** Each is either a schema correction or a curation rule — and finding them now is exactly the point.

---

## Analytics Specification

**Instrument these exact names and properties.** "Add PostHog" is not a specification.

Every event carries: `profession`, `is_authenticated`, `session_id`.

### Acquisition

| Event | Properties |
|---|---|
| `landing_page_view` | `landing_path`, `opportunity_id`, `opportunity_type`, `referrer_source` (`organic` / `seeded` / `share` / `direct` / `ai_assistant`), `share_token` |
| `signup_started` | `trigger_context` (`alert_cta` / `track_cta` / `profile`) |
| `signup_completed` | `qualification`, `experience_bucket`, `state`, `preference` |

> **`referrer_source` must distinguish `seeded` from `organic`** — a G0 pass driven entirely by manual community seeding must never be mistaken for product-market fit (Edge Case 10c.5).

### Opportunity & Understanding

| Event | Properties |
|---|---|
| `opportunity_view` | `opportunity_id`, `opportunity_type`, `status`, `is_personalized`, `referrer_source` |
| `simple_explanation_expanded` | `opportunity_id` |
| `official_notification_click` | `opportunity_id` |

### Eligibility

| Event | Properties |
|---|---|
| `eligibility_check` | `opportunity_id`, `result` (`eligible` / `not_eligible_yet` / `unknown`), `requirements_met`, `requirements_unmet`, `requirements_unknown` |
| `remedy_viewed` | `opportunity_id`, `gap_kind` |

> `requirements_unknown` is a **product health metric**. A high rate means curation isn't structuring requirements well enough — watch it from week one.

### Action, Retention, Sharing

| Event | Properties |
|---|---|
| `apply_click` | `opportunity_id`, `application_url` |
| `track_opportunity` | `opportunity_id`, `opportunity_type`, `initial_stage` |
| `track_stage_advanced` | `opportunity_id`, `from_stage`, `to_stage`, `triggered_by` |
| `alert_subscribed` | `opportunity_id`, `alert_type` |
| `message_opened` | `message_id`, `message_type` (`digest` / `tracked_stage_change` / `deadline`) |
| `message_click` | `message_id`, `opportunity_id` |
| `return_visit` | `days_since_previous_visit`, **`was_prompted`** (true if a message was sent in the preceding 72h) |
| `share_click` | `opportunity_id`, `channel` |
| `share_visit` | `share_token`, `opportunity_id` |

### Precise metric definitions

Ambiguous metrics produce ambiguous gate decisions. These are the definitions:

| Metric | Definition |
|---|---|
| **Meaningful product event** | Any of: `opportunity_view`, `eligibility_check`, `track_opportunity`, `track_stage_advanced`, `apply_click`, `share_click`. **Excludes** `landing_page_view` alone |
| **7-day return** | A user with `opportunity_view` on day 0 who fires **at least one meaningful product event** on days 1–7 |
| **Unprompted return** | A 7-day return where `was_prompted = false` — no message sent in the preceding 72 hours |
| **Tracked cycles per active user** | Distinct `tracked_opportunities` with `outcome IS NULL`, per user active in the last 7 days |
| **Multi-cycle user** | A user tracking ≥ 2 opportunities simultaneously |
| **Share rate** | `share_click` ÷ `opportunity_view`, per 100 views |
| **Unknown rate** | `eligibility_check` where `result = unknown` ÷ all `eligibility_check` |

### G0 dashboard — the five tiles

1. Signups, split by `referrer_source` (organic vs. seeded vs. share)
2. 7-day return rate — **and unprompted return rate beside it**
3. Tracked cycles per active user, plus count of multi-cycle users
4. Apply-click rate per opportunity view
5. Unknown rate (curation quality)

> Tiles 2 and 3 decide G0 (`context.md` → The Two Metrics That Matter Most). The rest diagnose *why*.

---

## Pre-Build Checklist

The literal gate. Do not start Week 2 build work until the Product and Data columns are done.

### Product
- [ ] Five user scenarios reviewed and agreed (above)
- [ ] Empty states written for every screen (above)
- [ ] Simple-language format agreed with whoever curates
- [ ] Trust/source display rules confirmed on the opportunity page

### Data
- [ ] Opportunity state machine agreed
- [ ] Tracking state machine agreed
- [ ] Glossary adopted — terms used consistently in code, copy, and events
- [ ] Seed spreadsheets populated with **30–50 real opportunities**
- [ ] At least 3 examples with `or_group` (multiple qualification paths)
- [ ] At least 3 examples with genuine `unknown` requirements
- [ ] Schema issues discovered during seeding logged and resolved

### Architecture
- [x] `exams.profession_id` added
- [x] `profiles.qualification_id` index corrected
- [x] `robots.txt` paths use `/{profession}/…`
- [x] ERD synced with the DDL
- [ ] URL taxonomy verified: `/nursing/jobs/{slug}` live before the first indexed page
- [ ] Requirement model verified against real seeded data

### Analytics
- [ ] Event names and properties implemented as specified
- [ ] `referrer_source` distinguishes seeded from organic
- [ ] `was_prompted` implemented on `return_visit`
- [ ] G0 dashboard built with all five tiles
- [ ] Retention definitions agreed before any data is read

### Legal (blocks first signup)
- [ ] Privacy Policy published
- [ ] Terms of Use published, including the accuracy disclaimer
- [ ] Unticked consent at signup
- [ ] Deletion path working, even if manual
- [ ] Takedown contact visible

---

## Career Passport & Zero-Typing Scenarios

### Scenario 6: Zero-Typing Resume Onboarding & Provenance
- **Given**: A nurse arrives at SkillCase and clicks "Auto-Fill from Resume".
- **When**: They upload a PDF/DOCX or drop text.
- **Then**:
  1. The parser extracts qualification (`B.Sc. Nursing`), clinical experience timeline, registration council, DOB, and languages.
  2. The review screen surfaces extracted cards with one-tap "Looks correct" buttons.
  3. Every attribute is tagged with provenance (`source: 'resume'`, `status: 'confirmed'`).
  4. Saving auto-populates the Career Passport without requiring manual typing.

### Scenario 7: Value-Driven Progressive Disclosure
- **Given**: A candidate visits an age-limited recruitment (e.g. AIIMS NORCET).
- **When**: Their profile has qualifications and experience, but DOB is missing.
- **Then**:
  1. Age requirement resolves to `unknown` with a clear explanation: *"Age cutoff: 30 years. Add Date of Birth to evaluate"*.
  2. An inline progressive date picker allows one-tap entry without redirecting to a full form.
  3. Upon entering DOB, eligibility immediately recalculates to `likely` or `not_met` with applicable relaxation notes.

---

> **Then stop documenting and build.** The next learning should come from real data, real nurses, and real behaviour — not another architecture review.
