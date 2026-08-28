# SkillCase — Edge Case Handling

> Derived from `docs/context.md` (source of truth), `docs/architecture.md`, and `docs/implementation_plan.md`. Organized by system area. Each edge case states the scenario, why it matters, and the required handling — cross-referenced to the relevant Phase in `implementation_plan.md` so a Phase-0 team isn't blocked on Phase-2 concerns.

---

## Table of Contents

- [1. Data Ingestion & Source Reliability](#1-data-ingestion--source-reliability)
- [2. Deduplication & Merging](#2-deduplication--merging)
- [3. Trust & Verification](#3-trust--verification)
- [4. Eligibility & Personalization](#4-eligibility--personalization)
- [5. Alerts & Notifications](#5-alerts--notifications)
- [6. User Profile & Onboarding](#6-user-profile--onboarding)
- [7. Search & Filtering](#7-search--filtering)
- [8. Authentication](#8-authentication)
- [9. Legal & Compliance](#9-legal--compliance)
- [10. Content Accuracy & Trust Failures](#10-content-accuracy--trust-failures)
- [10a. SEO & Indexation](#10a-seo--indexation)
- [10b. Tracking & Retention Loop](#10b-tracking--retention-loop)
- [10c. Sharing & Seeded Distribution](#10c-sharing--seeded-distribution)
- [10d. AI Assistant (Future — Highest-Risk Feature)](#10d-ai-assistant-future--highest-risk-feature)
- [10e. Multi-Profession Expansion](#10e-multi-profession-expansion)
- [11. Scale & Performance](#11-scale--performance)
- [12. Mobile / Low-Bandwidth Reality](#12-mobile--low-bandwidth-reality)
- [13. Overseas / Multi-Country Track (Future)](#13-overseas--multi-country-track-future)
- [14. Admin & Moderation](#14-admin--moderation)
- [15. Metrics & Measurement Integrity](#15-metrics--measurement-integrity)

---

## 1. Data Ingestion & Source Reliability

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 1.1 | A government source changes HTML structure without notice | Scraper silently returns empty/garbage data | Verification Service must flag zero-or-anomalous-result runs, not just failures (`architecture.md` → Stage 5); alert the maintainer, don't fail silently | 1 |
| 1.2 | A source adds a CAPTCHA or login wall | Scraper can no longer run at all | Fall back to manual curation for that source immediately (per `context.md` → Data Acquisition); never leave a source stale without flagging it as such | 1 |
| 1.3 | A source is PDF-only (common for official notifications) | Structured extraction is expensive/unreliable via basic scraping | Phase 0/1: manual entry for PDF-only sources; do not build PDF parsing until multiple sources justify the investment | 0–1 |
| 1.4 | Source publishes in a regional language (Hindi, Kannada, etc.) mixed with English | Normalizer misclassifies or drops fields | Normalizer must handle mixed-script text without crashing; unrecognized fields should be stored raw (`raw_data JSONB`) rather than discarded | 1 |
| 1.5 | Manual curator is unavailable (sick, unavailable) during Phase 0 | Data goes stale, "Last Verified" ages out, trust erodes | Phase 0 must not depend on a single point of failure — cross-train at least one backup curator before Week 3 | 0 |
| 1.6 | Scraper works but source's own data is wrong (e.g., government site itself has a typo in deadline) | Product surfaces incorrect info despite "working correctly" | Trust philosophy (`context.md` → Trust Requirements) means the original source link must always be visible so the nurse can verify — the product is not the final authority | 0–2 |
| 1.7 | Rate limit / IP block from a source due to scraper request volume | Data stops flowing, possible reputational/legal issue | `BaseScraper` must implement per-domain rate limiting and respect robots.txt crawl-delay (`architecture.md` → Stage 2); never retry aggressively after a 429/403 | 1 |
| 1.8 | New source discovered mid-build that's more valuable than existing ones | Team may want to switch focus | Adding a source = new scraper/curation entry, but must go through the same per-source legal check as Week 1 (`implementation_plan.md`) — no shortcuts for "obviously fine" sources | 1–2 |

---

## 2. Deduplication & Merging

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 2.1 | Same job posted by both the hospital directly and a job aggregator | Nurse sees duplicate listings, erodes trust in "clean" data | Fuzzy match on title+employer+location+date (`architecture.md` → Dedup Strategy); when merged, preserve *all* source URLs, not just the first found | 1 |
| 2.2 | Two different jobs happen to have identical title+employer+location (e.g., recurring quarterly hiring) but different deadlines | Incorrect merge would hide a real second opportunity | Exact-hash dedup must include the deadline/posting date in the hash key, not just title+employer+location | 1 |
| 2.3 | A source updates a listing's deadline (extension) | If treated as a new record, nurse gets a duplicate "new job" alert for something they already saw | Dedup must detect "UPDATED" vs "NEW" (`architecture.md` → Dedup output states) and alert as "deadline extended," not "new opportunity" | 1 |
| 2.4 | Manually-curated entry and later-added scraper entry for the same source overlap during Phase 1 migration | Duplicate or conflicting records when a source moves from manual to automated | Dedup logic must run across manual and scraped records identically — manual entries are not exempt from the same matching rules | 1 |

---

## 3. Trust & Verification

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 3.1 | Application deadline passes but source hasn't updated status | Nurse wastes time applying to a closed opportunity | Status transitions to "Closed"/"Expired" should be computed from `application_deadline` at read-time, not solely rely on source-reported status | 0 |
| 3.2 | Official application link goes dead (404) after being verified | Nurse hits a broken link at the worst moment (about to apply) | Verification Service must periodically re-check link liveness (`architecture.md` → Stage 5), especially for "closing soon" opportunities (every 6h per the doc) | 1 |
| 3.3 | "Last Verified" timestamp exists but is misleading (verified the listing exists, not that it's still accurate) | False sense of trust | Distinguish in the UI/data model between "link is live" verification and "content is accurate" verification if these diverge — don't conflate them under one timestamp | 1–2 |
| 3.4 | A source is manually curated and hasn't been touched in >7 days | Silent staleness with no automated check (manual sources have no Verification Service running) | Phase 0/1 must have a manual "review reminder" (even a calendar reminder) — don't assume manual sources age gracefully just because they're not scraped | 0–1 |
| 3.5 | Nurse reports an inaccurate listing (`user_reports` table exists in schema but no process defined) | Reports pile up unactioned, trust signal becomes theater | Define a simple manual triage process even before the Admin Module exists — a report with no follow-up is worse than no report feature at all | 1 |

---

## 4. Eligibility & Personalization

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---| 
| 4.1 | Nurse's qualification doesn't map cleanly to the 4 fixed categories (GNM/BSc/Post Basic BSc/MSc) — e.g., a diploma from a non-standard institution, a foreign credential, or an in-progress conversion | An unconditional hard filter would silently exclude an eligible nurse, and an empty feed reads as "no opportunities exist" rather than "we couldn't classify you" | **Resolved:** qualification is now a *conditional* filter — an "Other / Not sure" option exists and never excludes; unknown/ambiguous on either side yields a "Check requirements" label (`context.md` → Qualification; `architecture.md` → Conditional Filter) | 0 |
| 4.2 | Opportunity's qualification requirement is ambiguous or lists multiple acceptable qualifications ("BSc Nursing OR GNM with 3 years experience") | Simple equality-match scoring can't represent OR conditions | Normalizer must be able to store qualification requirements as a list/expression, not a single string, from Phase 1 onward | 1 |
| 4.3 | Nurse has zero saved profile data yet (hasn't completed onboarding) | Personalization/eligibility can't compute a score | Must degrade to the unpersonalized list view, not error or show empty state — value-before-onboarding principle (`context.md` → Key Design Principles #1) | 0 |
| 4.4 | Nurse's experience is on a bucket boundary (exactly 2 years), or is a "Fresher" who also falls inside "0–2" | The original buckets genuinely overlapped, producing inconsistent filtering depending on which code path ran | **Resolved:** canonical lower-inclusive/upper-exclusive boundaries are now defined once (`context.md` → Canonical Definitions — Experience Buckets) and the bucket→numeric mapping is specified in `architecture.md` → Experience. Normalizer, filters, and scoring must all use them | 0–1 |
| 4.5 | Relevance score weights (0.35/0.25/0.20/0.15/0.05) produce a "Strong match" for an objectively poor fit, or vice versa | Erodes trust in the "eligible" label faster than no label at all | Per `implementation_plan.md` Phase 2, weights must be validated against real click/apply data before being trusted, not shipped as final on day one | 2 |
| 4.6 | Location match for a nurse open to relocating anywhere ("Preference: Abroad" or no location set) | Hard location filtering would hide all relevant results | Location should demote relevance score, not hard-filter, when a nurse's preference indicates flexibility | 0–2 |

---

## 5. Alerts & Notifications

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 5.1 | A single scraper run surfaces 15 new matching opportunities at once | Notification storm destroys retention (`context.md` → Alerts System: "Critical rule") | Batch multiple matches into a single digest email/notification rather than one per opportunity, even in Phase 0's manual sends | 0 |
| 5.2 | Same opportunity matches a nurse's profile on two consecutive scraper/verification runs (no real change) | Duplicate alert for the same thing | Notification Dedup Rules (`architecture.md`): max 1 notification per opportunity per user per 24h — must apply even to manual Phase 0 sends | 0–1 |
| 5.3 | Nurse subscribes to alerts but never opens any of them | Wasted sends, eventual spam-flagging risk with email provider | Track open rate per user; after N unopened alerts, consider reducing frequency/prompting profile re-check rather than continuing to send blindly | 1 |
| 5.4 | Deadline-approaching alert fires at 2 AM local time | Violates quiet hours, annoys users, may get marked as spam | Respect `quiet_hours` (`architecture.md` → User Preferences) even for "Critical" priority alerts — critical does not mean interrupt sleep | 1 |
| 5.5 | Email deliverability issues (Resend/SES flags sender as spam-like due to high volume of similar template emails) | Alerts stop reaching inboxes entirely, silently | Monitor bounce/spam-complaint rate from day one of automated sending (Phase 1), not just after users complain | 1 |
| 5.6 | Nurse's email bounces (typo at signup, or account deleted) | Wasted sends, data quality issue | Mark bounced addresses inactive after repeated hard bounces; don't keep retrying indefinitely | 1 |
| 5.7 | Weekly digest and a real-time alert about the same opportunity both fire in the same window | Redundant, feels spammy | Digest generation must exclude opportunities already sent as real-time alerts in that period (`architecture.md` → Notification Dedup Rules: "digest consolidates low-priority updates") | 2 |

---

## 6. User Profile & Onboarding

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 6.1 | Nurse wants to browse before providing any profile info | Forcing profile-first onboarding contradicts stated principle (`context.md` → Key Design Principles #1) | Browsing and detail views must work with zero profile data; profile is only required to enable alerts/personalization | 0 |
| 6.2 | Nurse changes preference (e.g., Government → Abroad) after using the app for weeks | Stale personalized feed cache, wrong alerts continue | Profile change must invalidate personalized feed cache (`architecture.md` → Cache Invalidation Strategy) and re-evaluate active alert subscriptions | 1–2 |
| 6.3 | Nurse wants to delete their account (`DELETE /api/v1/me` exists in API design) | Data retention / privacy expectation | Must actually cascade-delete or anonymize associated data (saved opportunities, notifications, push tokens) — schema already has `ON DELETE CASCADE` for most tables, but this must be verified end-to-end, not assumed from the schema alone | 1 |
| 6.4 | Nurse has no smartphone-native email habit, primarily uses WhatsApp | Email-first Phase 0/1 alerting may reach this segment poorly | Track email open rates by segment early; if consistently low, this is a signal to revisit the channel (e.g., WhatsApp Business API) before assuming the *product* failed | 0–1 |

---

## 7. Search & Filtering

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 7.1 | Search query in Hindi/transliterated Hindi ("nursing job Bangalore" vs "बैंगलोर नर्सिंग जॉब") | PostgreSQL `tsvector` with `english` config won't match non-English text well | Acceptable gap for MVP (`architecture.md` → Search Strategy at Scale flags this as a Growth-phase concern with Elasticsearch), but should be explicitly communicated as a known limitation, not silently broken | 0–1 |
| 7.2 | Filter combination returns zero results (e.g., MSc Nursing + Fresher, an unusual combination) | Dead-end empty state feels broken | Empty state should suggest relaxing a specific filter ("No MSc Fresher roles right now — see all MSc roles?") rather than a bare "no results" | 0 |
| 7.3 | Location filter uses city name with multiple spellings (Bangalore/Bengaluru, Trivandrum/Thiruvananthapuram) | Filter misses valid matches due to string mismatch | Normalizer should map to a canonical location list at ingestion time, not rely on exact string match at query time | 1 |
| 7.4 | Cursor-based pagination breaks if underlying data changes between page loads (new opportunity inserted while paginating) | Nurse sees a duplicate or skips an item across pages | Accept minor drift as standard cursor-pagination behavior; do not attempt to solve with offset pagination, which degrades at scale (`architecture.md` → API Principles rationale) | 1 |

---

## 8. Authentication

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 8.1 | Phase 0 uses magic-link/token auth, Phase 1 migrates to full JWT+OAuth | Existing Phase 0 users must not lose saved data/subscriptions | Migration script must map Phase 0 email-token identities to new `users` records by email, preserving `saved_opportunities` and alert subscriptions | 1 |
| 8.2 | Nurse signs up with Google OAuth, later tries email+password with the same email | Duplicate account risk or confusing login failure | Treat email as the unique identity regardless of auth method; link OAuth to existing email account rather than creating a second one | 1 |
| 8.3 | Refresh token reuse after logout (stale device/browser tab) | Security risk if not invalidated | Refresh token rotation must actually invalidate the old token on use, not just issue a new one alongside it (`architecture.md` → Security Measures: "refresh rotation") | 1 |

---

## 9. Legal & Compliance

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 9.1 | A source's ToS changes after scraping has already been built against it | Continuing to scrape becomes a legal violation retroactively | Re-check ToS whenever a scraper starts failing unexpectedly — treat repeated failures as a possible policy signal, not just a technical bug (`implementation_plan.md` → Cross-Cutting Workstreams: Legal/compliance) | 1–2 |
| 9.2 | **DPDP Act obligations begin at the first email signup — not at Stage 3 resume upload** | Phase 0 Week 3 collects email + qualification + experience + location. That is personal data under India's DPDP Act, triggering notice, consent, and purpose-limitation duties immediately | Privacy Policy, Terms, explicit unticked consent, and a working deletion path must be live **before the first signup** (`context.md` → Legal & Compliance). Not a launch-day catch-up | **0** |
| 9.2b | Resume upload (Stage 3, future) introduces substantially more sensitive PII | Existing Phase 0 measures won't automatically cover it | Requires a fresh PII-handling review when Stage 3 is scoped — do not assume prior compliance carries forward | Future |
| 9.3 | A recruiter/hospital objects to their listing being aggregated without permission | Reputational/legal risk even if technically legal | Trust philosophy (`context.md`) already requires visible source attribution — extend this to a clear takedown/contact process before public launch | **0** (takedown contact is a Phase 0 requirement) |
| 9.4 | Nurse requests account deletion but her data persists in email-provider logs, analytics, or backups | Deletion is incomplete despite the app appearing to comply | Deletion must cover PostHog identity, email-provider suppression lists, and define a backup-retention window in the Privacy Policy — "deleted from the app DB" is not deletion | 1 |

---

## 10. Content Accuracy & Trust Failures

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 10.1 | "Simple language" explanation (`context.md` → Key Design Principles #2) misrepresents a nuanced eligibility rule | Nurse applies incorrectly based on an oversimplified explanation, or wrongly believes they're ineligible | Simple-language explanations must always sit alongside the original text and official link, never replace it — this is already the stated philosophy but must be enforced in every UI surface showing eligibility | 0–2 |
| 10.2 | Recruiter spam listing gets past dedup/verification (looks structurally valid but is a scam/fee-charging "job") | Directly harms a vulnerable user (nurse job seeker) | Verification Service should flag/exclude listings that request payment for application/processing — a real and common nursing-recruitment scam pattern in India — even at Phase 0 manual-curation stage | 0 |
| 10.3 | Multiple sources disagree on a detail (e.g., different salary figures for the same job) | Product looks unreliable or must pick a "correct" value it can't verify | Show the discrepancy rather than silently picking one ("Reported salary varies by source: ₹X (Source A) / ₹Y (Source B)") rather than fabricating false precision | 1–2 |

---

## 10a. SEO & Indexation

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 10a.1 | An expired opportunity page stays indexed and returns 200 | Nurse arrives from Google onto a dead opportunity — simultaneously an SEO penalty and a direct Trust-philosophy violation | Expired → `410 Gone`; recently closed → 200 with `noindex` + visible "closed" state + links to similar open roles (`architecture.md` → Indexation Lifecycle) | 0 |
| 10a.2 | `JobPosting` JSON-LD omits `validThrough` | Google demotes and eventually drops postings with no expiry — the SEO thesis silently fails | `validThrough` must be populated from `application_deadline`; treat a missing deadline as a data-quality defect, not an optional field | 0 |
| 10a.3 | `directApply` misrepresented as `true` | Applications happen on the official source, not SkillCase. Claiming otherwise violates Google's JobPosting policy and risks removal | Always `directApply: false` — consistent with the Trust philosophy that the original authority stays visible | 0 |
| 10a.4 | A job title is corrected after the page is indexed, changing the slug | The indexed URL breaks, losing accumulated ranking | Slugs are stored, stable, and 301-redirect old → new. Never silently change a public URL | 1 |
| 10a.5 | Near-identical listings (same role, many districts) generate thin duplicate pages | Google may treat these as doorway/duplicate content and suppress the whole section | Canonical tags, meaningful per-page differentiation (district-specific detail), and no auto-generated pages for filter permutations that add no content | 1–2 |
| 10a.6 | Personalized routes (`/for-you`, `/alerts`, `/profile`) get crawled | User-specific content indexed publicly — a privacy and duplicate-content problem | `noindex` + `robots.txt` disallow on all personalized/authenticated routes | 0 |
| 10a.7 | Scraped listing text is copied verbatim from the source | Google sees duplicate content against the original authority, which will always outrank you | Lead with the *structured* + plain-language interpretation layer (`context.md` → Key Design Principles #2), not a verbatim copy — this is also the actual product differentiator | 1 |

---

## 10b. Tracking & Retention Loop

The retention engine (`context.md` → The Retention Engine) makes a promise: *"track this and we'll carry you through the whole cycle."* Every case below is a way to break that promise.

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 10b.1 | A nurse tracks a cycle and a stage change is **missed** (admit card released, no alert) | This is the worst failure in the product. She trusted us instead of checking herself, and missed something irreversible. One occurrence destroys the reason to track anything | Tracked-cycle stages must be verified on a **tighter schedule** than untracked ones, and a missed-stage detector should flag any tracked opportunity whose expected date has passed with no recorded change | 1 |
| 10b.2 | The source never publishes a clear stage change (result quietly appears on a portal) | Automated detection fails silently; the nurse assumes no news | Tracked opportunities get manual review priority. Where automation can't confirm, tell her *"we couldn't verify — check the official source"* rather than staying silent | 1 |
| 10b.3 | A nurse tracks an opportunity, then the deadline passes and she never applied | Her cycle list fills with dead entries and stops being useful | Auto-transition to `lapsed` after the deadline, move out of the active view, and ask once whether she applied — never nag | 1 |
| 10b.4 | She applied but never updates her stage | The cycle view goes stale and misrepresents her real state | Infer where possible from published dates; prompt lightly at genuinely useful moments ("AIIMS results are out — did you sit the exam?"). Self-report must always stay optional | 1–2 |
| 10b.5 | She tracks 15 opportunities | The "My Cycles" view becomes the noise it was meant to replace | Sort by *next upcoming stage*, not by date added. Surface what happens soonest; collapse the rest | 1 |
| 10b.6 | A tracked opportunity is deleted or merged by dedup | Her tracked item disappears with no explanation — a direct trust break | Never hard-delete a tracked opportunity. On merge, re-point the tracking record to the surviving row and tell her it was consolidated | 1 |
| 10b.7 | She is rejected / not selected | The most emotionally sensitive moment in the product | Never celebrate, never gamify, never auto-suggest "try these 10 similar jobs" immediately. Acknowledge plainly and let her choose the next step. **This audience is making high-stakes career decisions — tone here matters more than engagement** | 2 |
| 10b.8 | She gets the job (success = churn) | The default outcome is she leaves and never returns | Ask if she wants renewal/registration reminders and to stay informed about her next rung. **Do not** keep sending job alerts to someone who just got hired — that is the fastest way to be unsubscribed (`context.md` → The Career-Long Relationship) | 2+ |

---

## 10c. Sharing & Seeded Distribution

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 10c.1 | A shared link hits a login wall | Kills the acquisition loop at the exact moment it's working, and burns the sharer's social credit with her friend | Shared opportunity pages render **fully public**, always. No exceptions | 0 |
| 10c.2 | Shared link shows no WhatsApp preview | Most of the click-through is lost. This audience shares almost entirely in WhatsApp | Test OG rendering **in WhatsApp specifically** — not Twitter, not a validator tool. Include role, employer, location, deadline | 0 |
| 10c.3 | A shared opportunity has since expired | The recipient's first experience of SkillCase is a dead link | Expired shared links show the closed state **plus** currently open similar opportunities — turn a dead end into a first useful impression | 1 |
| 10c.4 | Seeded community posts are perceived as spam | Getting banned from nursing groups burns the channel permanently and damages the brand with the exact audience being courted | Post genuinely useful formatted summaries, follow each group's rules, never mass-post, never disguise promotion as advice. **One ban costs more than the traffic is worth** | 0 |
| 10c.5 | Seeded traffic is counted as organic validation | A G0 "yes" driven entirely by manual seeding would be mistaken for product-market fit, and the team would scale a channel that doesn't scale | Tag seeded traffic separately at source and report it as its own line, never merged into organic (`implementation_plan.md` → G0) | 0 |
| 10c.6 | Share attribution records recipient data | Privacy violation, and unnecessary | Record only that a share occurred, its channel, and resulting visit counts. **Never** capture recipient identity, phone number, or contact list | 0 |

---

## 10d. AI Assistant (Future — Highest-Risk Feature)

The assistant is the single most dangerous feature in the product: it speaks with authority to people making irreversible, expensive decisions, in a domain that already contains active exploitation. These cases must be settled **before** it is built, not after.

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 10d.1 | The AI states a nurse is eligible when she is not | She pays a fee, or commits to an exam attempt, on a false premise. **The most harmful single failure in the product** | The assistant may only report verdicts computed by the structured eligibility layer. It is never permitted to reason about eligibility from free text (`context.md` → The AI Assistant) | Future |
| 10d.2 | The AI invents a deadline, fee, vacancy count, or requirement | Fabricated specifics are indistinguishable from real ones to the reader, and are acted upon | Answer strictly from retrieved structured records with citation. No verified record → "I don't have verified information on that" plus the official source | Future |
| 10d.3 | A nurse asks a visa/immigration question | Regulated, country-specific, consequential advice | Surface official requirements and link the authority. Never present immigration guidance as fact or personalised advice | Future |
| 10d.4 | A nurse asks "which agent should I use for Germany?" | Recommending an agent is the exact vector by which nurses are defrauded today | Never recommend a specific agent, recruiter, or paid service. Explain how to verify credentials independently | Future |
| 10d.5 | The AI smooths an `unknown` into a confident answer | The `unknown` state exists precisely because a confident wrong answer is worse than an honest gap | `unknown` must survive into the response verbatim. Explicitly forbidden to resolve it by inference | Future |
| 10d.6 | A nurse treats the assistant as a substitute for the official source | The trust philosophy requires the original authority stay visible | Every answer cites and links its source. The assistant frames itself as an interpreter, never the authority | Future |
| 10d.7 | Emotionally difficult questions ("I failed, should I give up?") | This audience is under real career and financial stress | Answer with plain respect. No gamified encouragement, no false optimism, no manufactured urgency. Know the boundary of what a career tool should answer | Future |
| 10d.8 | A nurse asks in Hindi or a regional language | Excluding her from the product's headline feature | Plan multilingual response capability with the same guardrails; never let translation loosen the citation or verification rules | Future |

---

## 10e. Multi-Profession Expansion

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 10e.1 | A second profession is added and nursing URLs must change | Every indexed URL, WhatsApp share, and AI citation breaks; SEO equity is lost | **Prevented by design** — the `/{profession}/` segment ships in Phase 0 before the first page is indexed (`context.md` → Multi-Profession by Design) | 0 |
| 10e.2 | Nursing-specific qualifications leak into shared code as hardcoded enums | The exact migration the abstraction was meant to avoid, discovered late | Qualifications and roles are profession-scoped reference rows from day one. Code review rule: no nursing-specific literal in a shared path | 0 |
| 10e.3 | Over-abstraction slows the MVP | A profession-agnostic everything-engine serves nobody and delays validation | Abstract only URL taxonomy, `profession_id`, and reference data. UI copy, onboarding, sources, and feature logic stay nursing-specific and hardcoded | 0 |
| 10e.4 | A pharmacist finds a nursing page via search and signs up | Wrong-audience signups distort the G0 retention read | Acceptable and even useful as demand signal — but tag profession at signup so it can be segmented out of the nursing cohort analysis | 1 |
| 10e.5 | Second profession launched before nursing retention is proven | Repeats the scattered-platform failure the whole strategy exists to avoid | Expansion is gated on rung 1–2 being genuinely won for nursing (`context.md` → The Positioning Ladder), never on schema readiness alone | 2+ |

---

## 11. Scale & Performance

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 11.1 | Phase 0's single Postgres instance under real (if small) concurrent load during an alert-driven traffic spike | Alert emails all point to the app at once, causing a thundering-herd read spike | Even at Phase 0 scale, ensure basic connection limits/timeouts are set so a spike degrades gracefully rather than crashing | 0 |
| 11.2 | Growth beyond Phase 2 without read replicas/caching (skipped in Phase 0/1 per architecture.md Phase 0 section) | Full architecture.md infra (Redis, read replicas, PgBouncer) needs to be introduced before it's actually needed, not after an outage | Treat `architecture.md`'s Scaling Strategy by Load table as the trigger points — introduce each layer when its stated user-count threshold is approached, not preemptively and not too late | 2+ |

---

## 12. Mobile / Low-Bandwidth Reality

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 12.1 | Target users are "predominantly Android, often on inconsistent networks" (`architecture.md` → Architecture Philosophy) | Heavy client bundles or image-heavy pages fail this audience specifically | PWA must be tested on throttled 3G, not just fast wifi — this is a named design constraint, not a generic nice-to-have | 0–1 |
| 12.2 | Nurse loses connectivity mid-application-flow (e.g., tapping "Apply") | External application link may fail to open, feels like app is broken | Show a clear "opening external site" state and handle offline gracefully (cached last-known state) rather than a blank failure | 1 |

---

## 13. Overseas / Multi-Country Track (Future)

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 13.1 | "Abroad" preference exists in the profile schema, but `jobs.type` only supports government/private and overseas is out of MVP scope | A nurse selecting "Abroad" would get a guaranteed-empty feed, and an "Abroad" nav tab that always returns zero results reads as a broken product | **Resolved:** Abroad is retained as *interest capture only* — it shows an explicit "coming soon, we'll notify you" waitlist state and is **removed from the Jobs nav tab and Explore row** (`context.md` → Abroad — Interest Capture Only) | 0 |
| 13.2 | Overseas requirements (e.g., B2 German, country-specific registration) don't fit the existing Job/Exam schema | Schema would need significant extension, not just new rows | Do not shoehorn overseas opportunities into the existing schema — treat it as a deliberate schema extension when the pillar is built (`context.md` → Roadmap Stage 5) | Future |
| 13.3 | Abroad waitlist accumulates with no one reading it | The demand signal that decides *when* and *for which country* to build the overseas pillar goes unused | Report Abroad-interest volume segmented by qualification, experience, and destination country as a standing roadmap input (`context.md` → Abroad — Demand Capture) | 1–2 |
| 13.4 | Overseas track is launched thin, in a space full of predatory agents | Nurses are actively exploited in overseas nursing recruitment — fees, false promises, opaque timelines. A shallow, unverified overseas offering would cause **real financial harm** and destroy the trust the whole product rests on | Do not launch the overseas pillar until employer/agent verification, honest timelines, and real cost transparency can be delivered. **A missing feature is recoverable; a nurse defrauded through SkillCase is not** | Future |
| 13.5 | A nurse asks about a destination country not yet covered | She goes elsewhere for it — the exact failure the "only app she needs" ambition is meant to prevent | Say plainly what is and isn't covered, capture the country as demand, and point to the official authority. **Honest absence beats invented coverage** | Future |

---

## 14. Admin & Moderation

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 14.1 | Phase 0/1 has no Admin Module yet, but bad data still needs correcting | Direct DB edits are error-prone and unaudited | Even informal manual correction should be logged somewhere (a simple changelog doc or spreadsheet tab) so patterns of recurring errors per source are visible before the Admin Module is built | 0–1 |
| 14.2 | Multiple people manually curating data in Phase 0 without coordination | Conflicting edits, duplicate manual entries | Even before any tooling, agree on a simple protocol (e.g., one spreadsheet, one owner per source) to avoid this entirely rather than solving it with software | 0 |

---

## 15. Metrics & Measurement Integrity

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 15.1 | Small numbers in Phase 0 (e.g., 20 signups) make metrics noisy | A single motivated user's behavior can look like a trend | Treat Phase 0 metrics directionally, not statistically — the Milestone Gate (`implementation_plan.md` → G0 → Phase 1) should require *repeated* return behavior across multiple users, not one enthusiastic tester | 0 |
| 15.2 | Vanity metrics creep in under pressure to show progress (e.g., counting page views instead of application-link clicks) | Contradicts explicit principle (`context.md` → Success Metrics: "Do NOT optimize for... time spent") | Every metrics review should re-check against the Success Metrics table's "Instead measure" row before reporting progress | 0–2 |
| 15.3 | Analytics installed too late to evaluate the G0 gate | The gate asks about 7-day return behaviour — which cannot be reconstructed retroactively for users who already churned | PostHog must be live in **Week 1**, before the first user, with G0 events defined up front (`implementation_plan.md` → Phase 0 Week 1) | 0 |
| 15.4 | Infra monitoring is mistaken for product analytics | Grafana can show request rates but not retention cohorts — the team could believe it is measuring the hypothesis when it isn't | Keep the split explicit: **PostHog = product behaviour, Grafana = infra health.** Never report retention from Grafana | 0–2 |
| 15.5 | Application-link clicks are counted, but whether the nurse actually applied is unknowable | The core value metric is a proxy, and may overstate real outcomes | Accept the proxy for MVP, but state the limitation when reporting. Consider a lightweight "Did you apply?" follow-up in the alert email rather than inferring success from a click | 1–2 |

---

## 16. Career Passport & Zero-Typing Profile Edge Cases

| # | Edge Case | Why It Matters | Required Handling | Phase |
|---|---|---|---|---|
| 16.1 | Parser extraction conflict (Resume lists both B.Sc. and GNM) | Candidate graduated GNM and later completed Post Basic B.Sc. | Record both in `qualificationsList`; designate Post Basic/B.Sc. as primary while retaining GNM with full provenance | 0.1 |
| 16.2 | User-confirmed value contradicts resume | Candidate edited or corrected extracted value | The user-confirmed value **strictly overrides** resume extraction. Provenance updates to `status: 'user_edited'` | 0.1 |
| 16.3 | Age-limited opportunity without DOB in profile | Cannot compute 30-year or 40-year cutoff safely | Return `unknown` with inline value-driven prompt: *"Add Date of Birth to check 30-year cutoff"*. Never guess or default | 0.1 |
| 16.4 | Resume mentions city but not state domicile | Domicile affects reservation/state quota | Never infer state domicile from current residence or hospital location. Keep domicile `unknown` until confirmed | 0.1 |
| 16.5 | Clinical experience tenure spans multiple departments | Opportunity requires specific ICU or OT tenure | Calculate tenure per department block rather than collapsing all history into a single generic number | 0.1 |
| 16.6 | Non-standard or foreign nursing degree (`other`) | Equivalency not determinable automatically | Mark qualification as `unknown` with advice to verify equivalency in the official notice. **Never hard-filter out** | 0.1 |
| 16.7 | DPDP right-to-erasure request | Candidate requests complete profile deletion | Provide one-tap local data erase button that wipes Career Passport, tracked items, and cached state instantly | 0.1 |

