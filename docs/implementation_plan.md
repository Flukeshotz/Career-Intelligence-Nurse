# SkillCase — Implementation Plan

> Derived from `docs/context.md` (source of truth), `docs/architecture.md`, and `docs/edge_cases.md`. This is the execution sequence — it does not restate product rationale, which lives in those files.
>
> **Governing rule:** Phase 0 must validate the Core Hypothesis (`context.md` → Core Hypothesis) before Phase 1's full architecture is built. Do not skip ahead because the architecture doc already describes the bigger system — that system is the target to grow into, not the starting point.
>
> **On timeline:** Week numbers are *sequence and relative sizing*, not commitments. Phase 0 assumes roughly one full-time generalist; at less than that, stretch the calendar rather than dropping scope — the Phase 0 items are load-bearing for the go/no-go decision (`architecture.md` → What Phase 0 Does NOT Cut).
>
> **Before writing code, read [`build_spec.md`](build_spec.md).** It carries the user scenarios, state machines, glossary, empty states, seed template, and analytics specification that make this plan buildable rather than merely sequenced. Its Pre-Build Checklist is the literal gate for starting Week 2.
>
> **Last updated:** 2026-08-27

---

## Table of Contents

- [Phase 0 — Validate (Weeks 1–4)](#phase-0--validate-weeks-14)
  - [Phase 0 Edge-Case Checklist](#phase-0-edge-case-checklist)
- [Phase 1 — Automate (Weeks 5–10)](#phase-1--automate-weeks-510)
- [Phase 2 — Personalize (Weeks 11–14)](#phase-2--personalize-weeks-1114)
- [Cross-Cutting Workstreams](#cross-cutting-workstreams)
- [Milestone Gates](#milestone-gates)
  - [If G0 Fails](#if-g0-fails)
- [Risk Register](#risk-register)
- [Team & Skills Needed](#team--skills-needed)
- [What "Done" Looks Like Per Phase](#what-done-looks-like-per-phase)

---

## Phase 0 — Validate (Weeks 1–4)

Goal: prove nurses return for relevant, trustworthy opportunities — before building any automation. Maps to `architecture.md` → Phase 0.

### Week 1 — Foundation & First Data

| Task | Detail | Owner |
|---|---|---|
| Competitive scan | Execute the action item in `context.md` → Competitive Landscape — check 10–15 nurse Telegram/WhatsApp channels, top 3 job aggregators, top 2 exam-prep platforms. Record findings back into that section. | Product |
| Source legal check | For the first 5–10 sources (NORCET, AIIMS, ESIC, RRB, 2–3 state PSCs), check robots.txt/ToS individually. Do not assume scraping is fine anywhere. | Product/Eng |
| **Time the curation loop** | Before committing to manual curation, enter **5 real opportunities and time it.** If it's ~15 min each, 50 opportunities is 12+ hrs/week — a part-time job. This assumption underpins all of Phase 0 and is currently unvalidated. | Product |
| Manual data entry | Populate ~30–50 real opportunities into [`seed/phase_0_opportunities.csv`](seed/phase_0_opportunities.csv) and [`seed/phase_0_requirements.csv`](seed/phase_0_requirements.csv), following the column contracts in `build_spec.md` → Data Seeding Template. These spreadsheets *are* the database at this stage. **Include at least 3 OR-path examples and 3 genuine `unknown` cases** — they will expose schema problems faster than another architecture review. | Product |
| Repo & environments | Initialize Next.js 14 (App Router) project, single Postgres instance (local Docker or free-tier Supabase/Neon), no Redis, no queues. | Eng |
| **Product analytics** | Install PostHog **in Week 1, not later**. Define the G0 events: `signup`, `opportunity_view`, `application_link_click`, `alert_open`, `return_visit`, **`opportunity_tracked`, `stage_advanced`, `share_sent`, `share_visit`**, and crucially **`unprompted_return`** (a return with no alert sent in the preceding window). Without these you cannot evaluate your own go/no-go. | Eng |
| **Privacy Policy + Terms** | Draft and publish before any email is collected (`context.md` → Legal & Compliance). Includes accuracy disclaimer and takedown contact. **Blocks Week 3.** | Product |

### Week 2 — Minimum Browsing Experience

| Task | Detail |
|---|---|
| DB schema | Implement `professions`, `qualifications`, `roles`, `jobs`, `exams` (from `architecture.md` → Database Schema). Skip `saved_opportunities`, `notifications`, `alert_subscriptions`, `push_tokens`, `pipeline_runs`, `user_reports`, `audit_log` for now |
| **Multi-profession foundations** | Seed exactly one profession (`nursing`). Qualifications/roles as reference rows, **not hardcoded enums**. `profession_id` on jobs/exams/profiles. **No profession switcher, no second vertical, no admin UI** — the MVP is a nursing product that simply doesn't lie in its schema (`context.md` → Multi-Profession by Design) |
| **URL taxonomy — decide once, now** | Ship `/nursing/jobs/{slug}` and `/nursing/exams/{slug}` from the first indexed page, with `/` and `/jobs/*` redirecting to the nursing equivalents. Retrofitting this later means 301-ing every indexed URL and forfeiting SEO equity |
| Import script | One-time script to load the Week 1 spreadsheet into Postgres |
| Home + list view | Jobs/Exams list with basic filters (qualification, location) — **no relevance scoring yet**. But filters must already obey the corrected rules: qualification excludes *only* when both sides are known and unambiguous, `other` never excludes, and **location never hard-filters** (`context.md` → Qualification / Canonical Definitions). Simpler than Phase 2 scoring — not a licence to exclude people |
| Job/Exam detail | Must answer the 5 questions (`context.md` → Job Detail) + display Trust Elements (Source, Official Link, Last Verified, Status) |
| **SEO foundations** | SSG/ISR detail pages, canonical readable slugs, `JobPosting` JSON-LD, `sitemap.xml`, `robots.txt`, OG tags tested in WhatsApp (`architecture.md` → SEO & Organic Discovery). **Must ship in Week 2** — search indexing lags by weeks, so deferring this leaves Phase 0 with no organic traffic to measure |
| **Track ("I applied")** | The smallest form of the retention engine: a track button, a `stage` field, and a "My Cycles" list showing each tracked opportunity's next stage and date (`context.md` → The Retention Engine). Without this, Phase 0 measures a lookup tool — not the product |
| **WhatsApp share** | One-tap share on every detail page, rich OG preview, share attribution token. Shared pages must render fully **without login** (`context.md` → Acquisition Loops, Loop 2) |
| Empty/edge states | "Other / Not sure" qualification path, Abroad waitlist state **(capture destination-country interest)**, zero-result filter suggestions (Edge Cases 4.1, 13.1, 7.2) |

### Week 3 — Alerts Loop (the actual test)

| Task | Detail |
|---|---|
| Email capture | Simple form: email + the 4 profile attributes (Qualification, Experience, Location, Preference) — no password/auth yet, magic-link or simple token. **Requires explicit unticked consent + published Privacy Policy** (Week 1 dependency) |
| Manual alert send | When new opportunities are added to the spreadsheet/DB, manually send a plain email digest to matching subscribers (no automation yet — this proves the alert *content* works before automating *delivery*) |
| **Tracked-cycle alerts (manual)** | When a stage changes on something a nurse is **tracking** — her admit card, her result — send that as its own targeted email, not folded into the digest. This is the highest-value alert in the product and Phase 0 should prove it lands before automating it |
| **Seeded distribution** | Post genuinely useful, correctly-formatted opportunity summaries into existing nursing Telegram/WhatsApp communities, linking back. Honest participation, not spam. **Tag this traffic separately** so seeded users are never mistaken for organic product-market fit |
| Verify instrumentation end-to-end | The PostHog events defined in Week 1 must now be *confirmed firing* through a real journey: signup → email open → click-through → return visit within 7 days. Instrumentation that exists but doesn't fire fails the gate just as badly as none |

### Week 4 — Read the Signal

| Task | Detail |
|---|---|
| Re-curate data | Refresh the ~30–50 opportunities at least once (proves the manual pipeline is sustainable, or isn't) |
| Send 1–2 more alert rounds | Confirm repeat opens/clicks, not just first-touch curiosity |
| **Go/no-go decision** | Answer `architecture.md` → Phase 0 Definition of Done, item 5, honestly. If "no": revisit positioning/segment before writing more code. If "yes": proceed to Phase 1. |

> **Do not start Phase 1 until Week 4's go/no-go is a clear yes.** This is the single most important gate in this plan.

### Phase 0 Edge-Case Checklist

`edge_cases.md` tags each case with the phase it applies to. These are the **Phase 0** ones — they are build requirements, not a review-later list. Verify each before G0.

| Edge case | Requirement | Week |
|---|---|---|
| **10.2 — Scam/fee-request listings** | Reject any listing requesting payment to apply. A real, common pattern targeting Indian nurses; enforce at manual-curation stage — this is user safety, not polish | 1 (curation rule) |
| **1.5 — Curator single point of failure** | Cross-train a second person before Week 3, or Phase 0 stalls the moment one person is unavailable | 2 |
| **1.6 / 10.1 — Source itself is wrong; simple-language oversimplifies** | Official source link always visible alongside any plain-language interpretation; never replace the original | 2 |
| **3.1 — Deadline passed but source not updated** | Compute Open/Closed from `application_deadline` at read time; don't trust source-reported status alone | 2 |
| **4.1 / 4.3 / 4.6 — Unclassifiable nurse, empty profile, relocation-flexible** | "Other / Not sure" path; browsing works with zero profile data; location demotes rather than hides | 2 |
| **7.2 — Zero-result filter combinations** | Suggest relaxing a specific filter rather than a bare "no results" | 2 |
| **13.1 — Abroad** | Waitlist state, not a nav tab | 2 |
| **10a.1–10a.3, 10a.6 — SEO correctness** | Expired → `410`/`noindex`; `validThrough` populated; `directApply: false`; personalized routes `noindex` | 2 |
| **9.2 — DPDP** | Privacy Policy, Terms, unticked consent, deletion path live before the first signup | 1 → blocks 3 |
| **5.1 / 5.2 — Alert storms and duplicates** | Batch into one digest; never send the same opportunity to the same nurse twice in 24h — applies to **manual** sends too | 3 |
| **12.1 — Low-bandwidth reality** | Test on throttled 3G, not just fast wifi. A named audience constraint | 3 |
| **15.3 / 15.4 — Measurement integrity** | PostHog live Week 1; never report retention from Grafana | 1 |
| **11.1 — Alert-driven traffic spike** | Connection limits/timeouts set so a spike degrades rather than crashes | 3 |
| **14.2 — Multiple curators colliding** | One spreadsheet, one owner per source — agree the protocol, don't build tooling for it | 1 |
| **14.1 — Unlogged manual corrections** | Log every manual data fix (a spreadsheet tab is enough) so recurring per-source error patterns are visible before an Admin Module exists | 1 |
| **1.3 — PDF-only sources** | Manual entry; do not build PDF parsing in Phase 0 | 1 |
| **3.4 — Manually curated source goes stale** | A calendar reminder to re-verify — manual sources have no Verification Service and do not age gracefully | 2 |
| **6.1 — Browse before profile** | Browsing and detail views must work with zero profile data (value-before-onboarding) | 2 |
| **7.1 — Non-English search queries** | Postgres `english` tsvector won't match Hindi/transliterated queries. Acceptable MVP gap — communicate it as a known limitation rather than shipping it silently broken | 2 |
| **9.3 — Takedown contact** | A visible route for an employer/recruiter to dispute or request removal, live before public launch | 1 |
| **6.4 — Email may be the wrong channel** | Track open rates by segment from the first send; a low rate is a channel signal, not proof the product failed | 3–4 |
| **15.1 — Small-number noise** | G0 requires *repeated* return behaviour across multiple users, not one enthusiastic tester | 4 |
| **15.2 — Vanity metrics** | Check every metrics review against Success Metrics → "Instead measure" before reporting progress | 4 |

---

## Phase 1 — Automate (Weeks 5–10)

Goal: replace manual steps with the systems described in `architecture.md`'s main body, sized to what Phase 0 proved was worth automating.

### Weeks 5–6 — Real Auth & Data Model Completion

- Implement full `users` + `profiles` tables, JWT + Google OAuth (`architecture.md` → Authentication & Security)
- Add `saved_opportunities`, `notification_preferences`, `user_reports` tables — using the **corrected FK + XOR CHECK schema**, not the original polymorphic columns (`architecture.md` → Database Schema)
- Migrate Phase 0's email-token users into real accounts (Edge Case 8.1 — no data loss)
- Treat email as the unique identity across auth methods (Edge Case 8.2 — Google OAuth must link to an existing email account, not create a second one)
- Verify account deletion actually cascades end-to-end, including PostHog identity and email-provider suppression lists (Edge Cases 6.3, 9.4) — schema `ON DELETE CASCADE` is not proof
- Define a manual triage process for `user_reports` (Edge Case 3.5 — an unactioned report feature is worse than none)

### Weeks 7–8 — First Real Scraper (One Source Only)

- Pick the **single highest-volume, most stable** source validated as legally scrapable in Week 1 (likely one state PSC or NORCET notification page)
- Build `BaseScraper` + one concrete scraper (`architecture.md` → Pipeline Stage 2), not the full scraper fleet
- Build Normalizer + Dedup for that one source only (`architecture.md` → Stages 3–4)
- Keep manual curation running in parallel for all other sources — do not switch off the fallback until the scraper has run reliably for 2+ weeks
- **Edge cases to build in, not discover later:** silent-failure detection when a scraper returns 0 results (1.1); per-domain rate limiting and no aggressive retry after 429/403 (1.7); dedup hash must include deadline/posting date so recurring drives aren't wrongly merged (2.2); "UPDATED" vs "NEW" distinction so deadline extensions don't alert as new jobs (2.3); dedup must treat manual and scraped records identically during migration (2.4); canonical location mapping at ingestion for Bangalore/Bengaluru-type variants (7.3); qualification requirements stored as a list/expression, not a single string, to represent "BSc OR GNM+3yrs" (4.2); lead with the interpretation layer rather than verbatim source text (10a.7); stable slugs with 301 redirects when titles are corrected (10a.4)

### Weeks 9–10 — Automated Alerts

- Introduce Redis + BullMQ **only now** (`architecture.md` → Queue-Based Load Leveling), scoped to: `verify_queue`, `alert_queue`, `email_queue`
- Automate the Verification Service (Stage 5) for the one live scraper source; manual sources keep manual "last verified" updates
- Automated email alert dispatch replacing Phase 0's manual sends
- Add push notifications (FCM) only if email alert open rates justify a second channel
- **Edge cases to build in:** respect `quiet_hours` even for Critical alerts — critical does not mean interrupt sleep (5.4); monitor bounce/spam-complaint rate from the first automated send, not after users complain (5.5); deactivate hard-bouncing addresses (5.6); reduce frequency for users with sustained non-opens rather than sending blindly (5.3)

---

## Phase 2 — Personalize (Weeks 11–14)

Goal: introduce the scoring-based relevance system — only once there's enough real usage data to sanity-check it against.

- Implement the Personalization Engine scoring algorithm (`architecture.md` → Personalization Engine) using real click/save data from Phases 0–1 to validate the weights (0.35/0.25/0.20/0.15/0.05 split), not just ship the default weights untested
- Add the eligibility-assessment JSON structure to job/exam detail responses
- Expand scraper coverage to 2–3 more sources, following the same "prove reliability before removing manual fallback" rule from Phase 1
- **Edge cases:** show source disagreements rather than fabricating false precision on conflicting salary/detail data (10.3); exclude opportunities already sent as real-time alerts from the weekly digest (5.7); invalidate personalized feed cache and re-evaluate alert subscriptions on profile change (6.2); introduce Redis/read-replicas at the thresholds in `architecture.md` → Scaling Strategy, not preemptively and not after an outage (11.2)
- **Deepen the retention engine** — full stage machine (`tracked_opportunities` + `tracked_stage_events`), automated stage-change detection from the pipeline, and a "What changed since you last checked" home surface driven by real data rather than recency
- **Introduce career state** (`context.md` → Career State) — inferred from profile, tracking behaviour, and self-reported outcomes; used to reorient emphasis rather than to add screens
- **Report on Abroad demand** — waitlist volume segmented by qualification, experience, and destination country. This is the standing input that decides *when* the overseas pillar (Stage 5) gets built and *which country goes first*
- Revisit monetization candidates (`context.md` → Monetization) now that there's usage data to evaluate them against

> **Beyond Phase 2 — the career-long arc.** Stages 4–8 (intelligence, overseas, recommendation, enablement, career-long) are deliberately out of this plan's horizon. The rule that governs them: **each is unlocked by the previous rung being genuinely won**, not by a calendar (`context.md` → The Positioning Ladder). The overseas pillar in particular should be built when Abroad-waitlist demand justifies it and tracking retention is proven — not before, because an under-built overseas track in a space full of predatory agents would damage trust more than not having one.

---

## Cross-Cutting Workstreams

These run alongside all phases, not as separate phases:

| Workstream | Phase 0 | Phase 1 | Phase 2 |
|---|---|---|---|
| **Data quality** | Manual review of every entry | Automated verification for scraped source, manual for the rest | Verification SLA per source (`architecture.md` → Stage 5 schedule) |
| **Trust signals** | Manually set Source/Last Verified/Status | Auto-populated for scraped source | Consistent across all sources |
| **Legal/compliance** | Per-source check before any automation | Re-check ToS before each new scraper | Ongoing — re-check on scraper failures (may indicate a source changed policy, not just markup) |
| **SEO** | Ship fundamentals Week 2; monitor Search Console indexation weekly | Expand category/state landing pages; fix crawl errors; enforce expired-page `410`/`noindex` policy | Monitor ranking for core queries; assess whether organic is actually the acquisition channel it was assumed to be |
| **Legal/privacy (DPDP)** | Privacy Policy, Terms, consent, deletion path live before first signup | Automate deletion cascade; verify end-to-end | Re-review before any resume/PII feature is scoped |
| **Product analytics** | PostHog from Week 1; G0 events instrumented | Funnel + cohort dashboards; alert open/click attribution | Validate personalization weights against real behaviour |
| **Metrics** | PostHog cohorts (product) + manual spreadsheet (data quality) | Basic infra dashboard (Grafana Cloud free tier) | Full monitoring (`architecture.md` → Monitoring & Observability) |
| **Decision Log / Changelog** | Update `context.md` at every phase gate | Same | Same |

---

## Milestone Gates

Each gate must pass before the next phase's work begins. Do not parallelize past a failed gate.

| Gate | Condition | If Failed |
|---|---|---|
| **G0 → Phase 1** | Phase 0 Definition of Done (all **7** items) met, **and** the Phase 0 Edge-Case Checklist verified, **and** the non-cuttables live (PostHog, SEO, Privacy Policy/Terms/consent, share, basic tracking). Return behaviour repeated across multiple users, not one tester (Edge Case 15.1). **Plus the two strategy signals:** at least some nurses **track more than one** opportunity, and at least some returns are **unprompted** (no alert sent). Seeded traffic counted separately from organic | See "If G0 fails" below — do not automate a pipeline for a product nurses aren't returning to |
| **G1 → Phase 2** | First scraper stable 2+ weeks with **<5% failure rate** (matching the Warning threshold in `architecture.md` → Alerting Rules, so ops alerts fire *before* the gate is breached); automated alerts have equal-or-better open rate than manual Phase 0 alerts | Fix scraper reliability or alert content before adding personalization on top of an unstable base |
| **G2 → Scale (out of this plan's scope)** | Weighted relevance scoring shows measurably better click-through than the simple Phase 0/1 filtering it replaces | If scoring doesn't outperform simple filtering, don't invest further in it — revisit the relevance approach rather than tuning weights indefinitely |

### If G0 Fails

A "no" at G0 is a **result, not a failure of execution** — it is the cheapest possible moment to learn this, which is the entire point of Phase 0. Diagnose before reacting, because these have opposite responses:

| Signal | Likely diagnosis | Response |
|---|---|---|
| Signups happen, alerts opened, no return visits | Alert *content* isn't valuable enough | Change what's in the alert (specificity, deadline urgency), not the channel or the tech |
| Returns happen, but only after alerts — never unprompted | The product is a notification service, not a destination | The tracking loop isn't delivering enough value to pull her back on its own. Deepen "My Cycles" and "What changed" before building anything new |
| Nurses browse but don't track anything | The retention hypothesis is failing at its first step | Ask why: is tracking unclear, does it feel like extra work, or do they not trust us to follow through? This is the most important qualitative interview in Phase 0 |
| Signups happen, alerts not opened | Wrong channel or wrong expectations at signup | Test WhatsApp over email (Edge Case 6.4) before concluding the product failed |
| Almost no signups, but traffic exists | Value proposition unclear, or trust not established on first view | Revisit positioning and the job-detail page, not the pipeline |
| Almost no traffic at all | Acquisition channel assumption is wrong | SEO takes weeks to index — check Search Console before concluding. May need a seeded distribution channel (nursing groups) rather than organic |
| Data too thin/stale to be useful | Manual curation wasn't sustainable | Reduce source count and go deeper, rather than abandoning manual-first for scrapers |

> The wrong response to a G0 "no" is to build the full architecture anyway on the theory that a better product will fix it. Nothing in Phase 1 addresses any diagnosis above.

---

## Risk Register

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Government source blocks/breaks scraper | High | High | Manual curation fallback always kept live per source until 2+ weeks stable (see Phase 1) |
| Whitespace narrower than assumed (competitive scan finds strong incumbent) | Medium | High | Competitive scan is Week 1, before infra investment — cheap to course-correct early |
| Low email alert open rates (retention hypothesis fails) | Medium | High | Phase 0 is designed specifically to surface this cheaply, in weeks not months |
| Legal exposure from scraping a ToS-restricted source | Medium | High | Per-source legal check before any scraper is written; private aggregators (Naukri/Indeed) explicitly excluded |
| Personalization weights (0.35/0.25/0.20/0.15/0.05) are wrong | Medium | Medium | Not implemented until Phase 2, using real usage data instead of guesses |
| Team builds full architecture.md stack before validating hypothesis | High if this plan is skipped | High | This document exists specifically to prevent that — Phase 0 is mandatory and sequenced first |
| Manual curation takes far longer than assumed, making Phase 0 unsustainable | Medium | High | Week 1 timing task sizes this before commitment; if >12 hrs/week, reduce source count rather than abandoning manual-first |
| Organic search never materializes as an acquisition channel | Medium | High | SEO ships Week 2 so there is real indexation data by the G0 decision; if organic is flat, the channel assumption — not the product — is what needs revisiting |
| DPDP non-compliance at first signup | Low if Week 1 task done | High | Privacy Policy/Terms/consent are a hard Week 3 blocker, not a launch-day catch-up |

---

## Team & Skills Needed

| Phase | Roles |
|---|---|
| Phase 0 | 1 full-time generalist (product + Next.js/Postgres + SEO basics) **plus** a part-time second curator. See the honest note below |
| Phase 1 | + 1 backend engineer (scraper/pipeline) — Node.js, Postgres, scraping/parsing |
| Phase 2 | + part-time data/analytics support to validate scoring weights against real usage |

> **Honest note on Phase 0 staffing.** This phase now carries more than the original sketch: manual curation (sized in Week 1, plausibly 10+ hrs/week), the browsing app, SEO fundamentals, PostHog instrumentation, and privacy/legal groundwork. One person can do it, but not in four calendar weeks — either extend the calendar or add the part-time curator. **Do not resolve the squeeze by cutting the non-cuttables** (`architecture.md` → What Phase 0 Does NOT Cut): cutting analytics makes the gate unmeasurable, cutting SEO leaves no traffic to measure, and cutting privacy work is a legal exposure. Cut source count instead — 20 well-maintained opportunities beat 50 stale ones.

Edge Case 1.5 also requires a cross-trained backup curator before Week 3 — a solo curator is a single point of failure for the entire phase.

No dedicated DevOps, QA, or design hire is required at this scale — `architecture.md`'s Railway/managed-services choices exist specifically to avoid that need until Stage 2+.

---

## What "Done" Looks Like Per Phase

- **Phase 0 done** = a real nurse got a real alert email, clicked it, and came back within 7 days without being prompted — repeatably, not once.
- **Phase 1 done** = the same behavior, but the pipeline runs itself for at least one source, and manual work has shifted from data entry to reviewing exceptions.
- **Phase 2 done** = personalized relevance measurably beats plain filters, and there's enough usage data to make an informed monetization decision (`context.md` → Monetization).
