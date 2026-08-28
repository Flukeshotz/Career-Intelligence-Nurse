# SKILLCASE — Project Context

> **⚠️ MANDATE: This is the single source of truth for the SkillCase project.**
>
> Any AI agent, developer, or contributor working on this project **MUST read this file first** before making any changes.
>
> Any change to the product's vision, scope, features, data model, positioning, tech stack, or strategic direction **MUST be recorded** in the [Decision Log](#decision-log) and [Changelog](#changelog) sections at the bottom of this file.
>
> **Last updated:** 2026-08-27

---

## Table of Contents

- [What is SkillCase?](#what-is-skillcase)
- [The Problem](#the-problem)
- [The Vision](#the-vision)
- [North Star — "The Only App a Nurse Ever Needs"](#north-star--the-only-app-a-nurse-ever-needs)
- [Multi-Profession by Design](#multi-profession-by-design-nursing-first-not-nursing-only)
- [Current Stage](#current-stage)
- [MVP Scope](#mvp-scope)
- [Target Users](#target-users)
- [Core Hypothesis](#core-hypothesis)
- [Job-to-be-Done](#job-to-be-done)
- [Information Coverage](#information-coverage)
- [Data Models](#data-models)
- [Personalization Strategy](#personalization-strategy)
- [Eligibility Intelligence — Requirements → Gap → Action](#eligibility-intelligence--requirements--gap--action)
- [Trust Requirements](#trust-requirements)
- [Product Loop](#product-loop)
- [The Retention Engine](#the-retention-engine)
- [MVP Screens & Navigation](#mvp-screens--navigation)
- [Alerts System](#alerts-system)
- [The AI Assistant — Designed For Now, Built Later](#the-ai-assistant--designed-for-now-built-later)
- [Acquisition Loops](#acquisition-loops)
- [SEO Requirements](#seo-requirements)
- [Legal & Compliance](#legal--compliance-applies-from-phase-0)
- [Success Metrics](#success-metrics)
- [Strategic Positioning](#strategic-positioning)
- [What We Are NOT Building (Yet)](#what-we-are-not-building-yet)
- [Product Evolution Roadmap](#product-evolution-roadmap)
- [Tech Stack](#tech-stack)
- [Key Design Principles](#key-design-principles)
- [Reference Documents](#reference-documents)
- [Decision Log](#decision-log)
- [Changelog](#changelog)

---

## What is SkillCase?

SkillCase is a **personalized career intelligence platform for Indian nurses**. It aggregates, structures, and personalizes nursing career opportunities — government jobs, private jobs, recruitment exams, deadlines, and important career updates — into one trusted, simple place.

**One-sentence MVP definition:**

> Build a trusted, simple nursing opportunity layer that aggregates and structures government and private jobs, recruitment exams, and important career updates — connects every opportunity to its official source — gives nurses basic personalized relevance based on qualification/experience/location — and alerts them when something important changes.

---

## The Problem

Indian nurses piece together career information across **fragmented sources** (Google, Telegram, YouTube, government websites, Naukri, WhatsApp groups, recruiters). No single place understands both the nurse and the market.

**Five fundamental problems nurses face:**

| # | Problem | Core Question |
|---|---|---|
| 1 | Discovery | "How do I know what opportunities exist?" |
| 2 | Relevance | "Which of these actually apply to me?" |
| 3 | Understanding | "What does this notification actually mean?" |
| 4 | Timing | "When do I need to act?" |
| 5 | Decision-making | "Given all these options, what should I do?" |

**Today, the nurse herself is the integration layer.** SkillCase replaces that.

### Competitive Landscape (Whitespace Check)

The whitespace claim is a **hypothesis to verify, not a settled fact**. Several products sit adjacent to this space and could partially invalidate it.

| Existing Player | What They Actually Do | Where They Fall Short |
|---|---|---|
| Sarkari Result / Sarkari Naukri-type sites | Aggregate government job/exam notifications | No personalization, no eligibility check, cluttered with non-nursing postings, no structured trust signals |
| Naukri / Indeed | Private job search | Not nursing-specific, no government/exam coverage, generic filters only |
| Telegram / WhatsApp nursing groups | Fast alert distribution | Unstructured, unverified, no eligibility filtering, high noise |
| Nursing exam-prep platforms & YouTube channels | Explain exams, sell test series | Focused on preparation, not discovery/relevance/deadlines |
| Hospital career pages / recruiters | Direct private hiring | Siloed per employer, no aggregation |

**Open questions that must be answered by a real scan (Phase 0, Week 1):**
- Does any player already combine *nursing-specific + government + private + exam + personalization*? (Initial scan suggests no — must be re-checked with real searches, not assumed.)
- Would a nurse switch from a free Telegram channel she already trusts? What is the switching cost?
- Is "relevance + eligibility" felt in the **first session**, or only after weeks of use? If the latter, acquisition is much harder than assumed.

> **Action item:** Scan 10–15 nurse-facing WhatsApp/Telegram channels, top 3 job aggregators, top 2 exam-prep platforms. Record findings back into this section. If the whitespace is narrower than assumed, sharpen the MVP's core question rather than abandoning it.

### Monetization (Not Yet Decided)

The MVP validates a **behavioural hypothesis**, not revenue. No monetization infrastructure is built in Stage 1. These candidates are recorded so the decision is explicitly deferred rather than silently ignored.

| Model | Fit | Risk |
|---|---|---|
| Recruiter/hospital lead-gen | Strong — nurses are the supply side hospitals want | Requires trust/scale before employers pay |
| Overseas placement referral fees | Aligns with longer-term overseas ambitions | Regulatory complexity, long sales cycle |
| Freemium alerts (paid priority/early access) | Low friction | Price-sensitive audience; a crippled free tier would damage trust |
| B2B data licensing (structured job/exam data) | Leverages the data-moat argument | Only viable once coverage and quality are proven |

> **Revisit explicitly at the Stage 1 → Stage 2 transition.** Do not build revenue infrastructure before then.

---

## The Vision

The long-term vision is a career intelligence system that connects:

```
ME (Nurse Profile) + MARKET (Opportunities) = WHAT SHOULD I DO NEXT?
```

The full intelligence chain:

```
WHO AM I? → WHAT EXISTS? → AM I ELIGIBLE? → WHAT MATTERS?
→ WHAT CHANGED? → WHAT SHOULD I DO? → TAKE ACTION
```

**The vision is NOT:**
- ❌ "A website with nursing jobs" (too narrow)
- ❌ "An app containing everything related to nursing" (too broad)
- ❌ "An AI app for nurses" (too technology-led)

**The vision IS:**
- ✅ A career intelligence system that understands the nurse AND the market

---

## North Star — "The Only App a Nurse Ever Needs"

> **The ambition:** a nurse should never need to open Telegram, YouTube, Sarkari Result, Naukri, and three government portals to manage her career. SkillCase should be the one place she checks — and keeps checking, for years.

This is the **destination**. It is not the build instruction. The distinction is the most important strategic discipline in this document.

### Why "everything, now" is how you lose

Every scattered platform SkillCase intends to beat became scattered the same way: it added breadth before it earned depth. A product that ships shallow jobs + shallow exams + shallow prep + shallow community + shallow overseas does not become indispensable — it becomes the eighth mediocre tab a nurse has open, and she keeps her Telegram channel because it is faster.

**You become the only app by owning one loop so completely that the alternatives stop being worth opening.** Then you expand from a position of trust, not a position of hope.

### The Positioning Ladder

Each rung must be genuinely won before the next is attempted. The right-hand column is the honest test.

| Rung | What SkillCase is to a nurse | Won when… |
|---|---|---|
| **1. The place I find out** | Fastest, cleanest discovery of relevant jobs and exams | She checks SkillCase *before* Telegram |
| **2. The place I keep track** | Her live recruitment cycles, deadlines, and admit cards in one view | She stops maintaining her own notes/screenshots |
| **3. The place I understand** | Plain-language interpretation of what she's eligible for and why | She stops watching explainer videos to decode notifications |
| **4. The place I decide** | Comparison and guidance across her real options | She asks SkillCase "which should I take?" |
| **5. The place I prepare** | Study, practice, language, credentials for the decision she made | She stops buying scattered test series |
| **6. The place I grow** | Career-long companion — renewals, progression, overseas | She still opens it two years after being hired |

> **Rungs 1–2 are the MVP.** Rungs 3–6 are the vision. Attempting rung 5 before rung 1 is won produces a product that is worse at everything than the specialists it is trying to replace.

---

## Multi-Profession by Design (Nursing First, Not Nursing Only)

> **The intent:** SkillCase is a career platform that *starts* with nursing. Adding pharmacists, lab technicians, paramedics, or allied health later must be an expansion — not a rewrite.

This is a decision that must be made **now**, because the cost curve is brutal: designing for it on day one is nearly free, and retrofitting it after launch means a data migration *and* the loss of accumulated SEO equity on every indexed URL.

### The discipline: abstract what's expensive to change, hardcode what's cheap

Over-generalising is its own failure mode — a config-driven, profession-agnostic everything-engine would slow the MVP to a crawl and serve nobody well. So the rule is narrow and specific:

| Abstract now (expensive later) | Keep hardcoded / nursing-specific (cheap later) |
|---|---|
| **URL taxonomy** — a profession segment in every public URL | UI copy, labels, and microcopy |
| **`profession` as a first-class dimension** on opportunities and profiles | Nursing-specific onboarding flow |
| **Qualifications as profession-scoped reference data**, not a hardcoded enum | The specific curated source list |
| **Roles/specializations as reference data** | Which sources are scraped first |
| **Registration/licensing as a generic concept** (body + number + expiry) | Nursing council specifics |
| **Eligibility requirements as structured data**, not prose | Feature priorities per profession |

> **What we are NOT doing:** building a profession switcher, a second vertical, an admin UI for defining professions, or any profession-agnostic feature logic. The MVP is a **nursing product**. It simply doesn't *lie* in its schema about being one.

### Why the URL decision is the urgent one

Public URLs are the hardest thing to change after launch — every indexed page, every shared WhatsApp link, every AI-assistant citation points at them.

```
✅  /nursing/jobs/aiims-delhi-nursing-officer-2026
✅  /nursing/exams/norcet-2026
❌  /jobs/aiims-delhi-nursing-officer-2026        ← no room for a second profession
```

Launching without the profession segment means that adding pharmacists later forces either an ugly parallel taxonomy or a site-wide migration with 301s on every URL — surrendering exactly the SEO equity that took months to build. **The segment costs nothing today.**

> Nursing remains the default experience — the root can redirect or render nursing — so this adds no user-facing complexity in the MVP.

### This does not contradict our positioning rule

[Strategic Positioning](#strategic-positioning) forbids marketing SkillCase as *"all nursing information in one place."* That rule governs **how we describe ourselves to nurses**, not how large the ambition is. We promise something specific and deliver it completely; we do not promise everything and deliver it thinly. The ambition is internal. The promise is narrow. That gap is the strategy.

---

## Current Stage

| Property | Value |
|---|---|
| **Stage** | Stage 1 — Discovery (MVP) |
| **Status** | Pre-development |
| **Goal** | Give nurses a reason to come back |
| **Core deliverable** | Jobs + Exams + Alerts |
| **Validation target** | Repeated return visits driven by relevant, trustworthy opportunities |

---

## MVP Scope

### In Scope ✅

- Government nursing jobs (Nursing Officer, AIIMS, ESIC, RRB, NHM, State PSCs, JIPMER, PGIMER)
- Private nursing jobs (Staff Nurse, ICU, OT, Emergency, Ward, Walk-ins, Fresher jobs)
- Recruitment exams (NORCET, Nursing Officer, RRB, ESIC, State, NHM)
- Important career events (notifications, application windows, deadlines, admit cards, exam dates, results, cutoffs, counselling)
- Basic career info tied to specific opportunities (eligibility, qualification, salary, documents, application process)
- Structured data model for every opportunity
- Source attribution and trust signals on every listing
- Minimal personalization via 4 profile attributes (Qualification, Experience, Location, Preference)
- Alerts for relevant changes
- Simple, clean navigation (Home, Jobs, Exams, Alerts, Profile)
- **SEO fundamentals** — indexable detail pages, `JobPosting` structured data, sitemap, canonical slugs (see [Acquisition & SEO](#acquisition--seo))
- **Product analytics** — PostHog from day one, without which the retention hypothesis cannot be evaluated
- **Legal groundwork** — Privacy Policy, Terms, consent, deletion path (see [Legal & Compliance](#legal--compliance-applies-from-phase-0))

### Out of Scope ❌ (Future Layers)

- Full nursing education platform
- Large MCQ / question bank library
- Social network features
- Full overseas migration agency
- All-country immigration platform
- Generic AI chatbot
- Comprehensive nursing news site
- Advanced career recommendation engine
- Full resume intelligence / parsing engine
- Complete language-learning platform
- Resume upload and matching (Stage 3)
- AI career assistant (Stage 5)

---

## Target Users

### Primary Users (MVP)

| Segment | Details |
|---|---|
| **Fresh graduates** | GNM, BSc Nursing — first job, exploring government/private |
| **Early-career nurses** | 0–5 years — better jobs, government recruitment prep, overseas consideration |
| **Government-job aspirants** | NORCET, Nursing Officer, RRB, ESIC, NHM, State recruitment |
| **Active private-job seekers** | Staff Nurse, ICU, OT, Emergency, Ward, hospital-specific |

### Secondary Users (NOT MVP priority)

- 5+ year experienced nurses, Nursing supervisors
- Overseas aspirants (Germany, UK, Gulf, Australia, Canada, NZ, Ireland)

---

## Core Hypothesis

> If Indian nurses can **discover** relevant jobs and government recruitment opportunities in one trustworthy place, **understand** the opportunity in simple language, **see** whether they are likely to qualify, and **receive alerts** when important information changes — they will **return regularly**.

**If proven → then build:** Profile → Resume → Matching → Recommendations → AI → Career Intelligence

### Hypotheses We Are NOT Testing Yet

- Will nurses upload their resume?
- Will nurses pay for AI?
- Will nurses use an AI career assistant?
- Will nurses take our classes?
- Will nurses learn German through us?
- Will nurses use our overseas marketplace?
- Will nurses trust automated career recommendations?

---

## Job-to-be-Done

### Primary

> When I am looking for my next nursing opportunity, help me **discover** relevant jobs and government recruitment opportunities, **quickly understand** whether I can apply, **know what I need to do**, and **make sure I don't miss** important deadlines or updates.

### Secondary

> Keep me **informed** about important changes in the nursing job and recruitment market **without requiring me to repeatedly search** multiple websites.

---

## Information Coverage

### A. Jobs

**Government:** Nursing Officer, AIIMS, ESIC, RRB, NHM, State health departments, State PSCs, JIPMER, PGIMER, other major recruitment bodies.

**Private:** Staff Nurse, ICU, OT, Emergency, Ward, Nursing Supervisor, Fresher jobs, Walk-in opportunities, Hospital-specific recruitment.

### B. Exams

High-demand recruitment exams only: NORCET, Nursing Officer recruitment, RRB nursing, ESIC, State nursing recruitment, NHM-related.

> NOT every nursing entrance or academic examination.

### C. Important Events

Notification released, Application opened/deadline/extended, Admit card, Exam date, Answer key, Result, Cutoff, Counselling.

### D. Basic Career Information

Only where tied to a specific opportunity: eligibility, qualification, experience, salary, documents, application process, official source.

> NOT a generic nursing encyclopedia.

---

## Data Models

> **These are the conceptual models.** The authoritative, implementable schema — exact column types, constraints, indexes, and foreign keys — is `architecture.md` → Database Schema. Where the two differ in detail, **the DDL in `architecture.md` is what gets built**; this section exists to describe *what* each opportunity carries, not how it is stored.

### Job

```
JOB
├── Slug                     (string, unique)   ← public URL; never a raw UUID
├── Title                    (string)
├── Employer                 (string)
├── Type                     (enum: Government / Private)
├── Location                 (state + city)
├── Role                     (string)
├── Qualification            (list/expression, not a single string —
│                             must represent "BSc OR GNM+3yrs")
├── Experience               (min / max, in years — integers)
├── Registration             (string)
├── Salary                   (min / max + original raw text)
├── Vacancy count            (number)
├── Age requirement          (min / max)
├── Application deadline     (date)   ← also drives SEO validThrough
├── Status                   (enum: Open / Upcoming / Closed / Expired)
├── Official notification    (url)
├── Direct application link  (url)
├── Source                   (string)
├── Source Type              (enum: Official / Verified secondary / Other)
├── Description              (raw text)
├── Description (simple)     (plain-language interpretation)
└── Last verified            (datetime)
```

> **Note on Experience.** Opportunities store numeric `experience_min` / `experience_max`; nurse profiles store a *bucket*. The mapping between them is defined once under [Canonical Definitions](#canonical-definitions--experience-buckets) and must not be re-derived anywhere else.

### Exam

```
EXAM
├── Slug                     (string, unique)   ← public URL
├── Exam name                (string)
├── Organisation             (string)
├── Qualification            (string)
├── Eligibility              (string)
├── Vacancies                (number)
├── Application start        (date)
├── Application deadline     (date)
├── Exam date                (date)
├── Admit card               (url / date)
├── Syllabus                 (url / string)
├── Previous papers          (url)
├── Result                   (url / date)
├── Cutoff                   (string)
├── Official notification    (url)
├── Official application link(url)
├── Source Type              (enum: Official / Verified secondary / Other)
└── Last verified            (datetime)
```

---

## Personalization Strategy

### MVP (Stage 1) — Minimal Profile

Collect **four attributes** at signup (no resume upload):

| Attribute | Options |
|---|---|
| **Qualification** | GNM · BSc Nursing · Post Basic BSc · MSc Nursing · **Other / Not sure** |
| **Experience** | Fresher (no experience) · Under 2 years · 2–5 years · 5+ years |
| **Location** | State · City |
| **Preference** | Government · Private · Both · **Abroad (interest only — see below)** |

#### Canonical Definitions — Experience Buckets

The original buckets overlapped (a "Fresher" has 0 years, which also falls in "0–2"; exactly 2 years fell in two buckets). **These are the authoritative boundaries — every filter, Normalizer mapping, and scoring rule must use them:**

| Bucket (stored value) | UI label | Meaning | Numeric range |
|---|---|---|---|
| `fresher` | "Fresher (no experience)" | No professional experience | `[0, 0]` |
| `0-2` | "Under 2 years" | More than 0, less than 2 | `(0, 2)` |
| `2-5` | "2–5 years" | 2 up to but not including 5 | `[2, 5)` |
| `5+` | "5+ years" | 5 or more | `[5, ∞)` |

> The UI label for `0-2` is **"Under 2 years"**, not "0–2 years" — a nurse with zero experience belongs in `fresher`, and a label reading "0–2" would invite her to pick either. The stored key stays `0-2` for compatibility.

**Mapping to opportunity requirements.** Jobs store `experience_min` / `experience_max` as integers; profiles store a bucket. The match rule is:

- **Full match** — the bucket's *lower* bound ≥ `job.experience_min` (the nurse certainly qualifies)
- **Partial match** — the bucket *spans* `job.experience_min` (the nurse may qualify; surface as "Check requirements", never as a hard exclusion)
- **No match** — the bucket's *upper* bound < `job.experience_min`

**On `experience_max` (over-qualification).** Most Indian nursing postings state a minimum, not a maximum, so `experience_max` is usually null and plays no part in matching. When it *is* set and the nurse's bucket lower bound exceeds it, treat this as a **soft demotion, never an exclusion** — an over-qualified nurse may still have valid reasons to apply, and hiding the opportunity is a worse error than showing it lower in the feed.

#### Qualification — "Other / Not Sure" Is Not a Hard Exclusion

Qualification is the strongest relevance signal, but a nurse whose credential doesn't map cleanly to the four categories (non-standard institution, foreign diploma, in-progress conversion) **must not be silently filtered out of the feed**. When either the nurse's qualification or the opportunity's requirement is unknown or ambiguous, the opportunity is shown with a **"Check requirements"** label rather than an eligibility verdict.

#### Abroad — Demand Capture Now, Major Pillar Later

Overseas is the **highest-value long-term transition** in an Indian nurse's career and the worst-served today ([The Career-Long Relationship → Moment 2](#moment-2--i-want-to-go-abroad)). It is out of *MVP* scope only — never out of ambition.

In the MVP, `jobs.type` supports only `government` / `private`, so selecting "Abroad" cannot return results. Handle it as follows:

- ✅ **Keep** "Abroad" as a profile preference — it is the **demand-capture instrument** for the overseas track. Every selection tells us who to build for, which destination countries lead, and when the volume justifies building it.
- ✅ Selecting it shows an explicit **"Overseas opportunities coming soon — we'll notify you"** waitlist state, and the nurse is added to that waitlist for real.
- ✅ **Report on it.** Abroad-interest volume, segmented by qualification and experience, is a standing input to roadmap prioritisation — not a field that quietly accumulates.
- ❌ **Do NOT** expose "Abroad" as a navigation tab or Explore category in the MVP — a tab that always returns zero results reads as a broken product rather than an honest roadmap signal.

> **Capture destination-country interest too**, even as a single optional question on the waitlist. "Germany vs Gulf vs UK" changes what gets built first, and it costs one dropdown to learn.

### Future (Stage 3) — Resume Matching

Resume upload → system extracts qualification, experience, specialization, skills, hospitals, location, registration, language skills → opportunity matching with eligibility explanations.

---

## Eligibility Intelligence — Requirements → Gap → Action

> The product must answer four questions, in order. Most platforms answer only the first.

| # | Question | What it needs |
|---|---|---|
| 1 | **What is required?** | Structured requirements — not a wall of prose copied from a notification |
| 2 | **Am I eligible?** | Her profile compared against those requirements |
| 3 | **Why / why not?** | Per-requirement verdict, so the answer is explainable rather than a black box |
| 4 | **If I'm not — what do I do about it?** | **The gap, and the actions that close it** |

**Question 4 is the differentiator.** Every aggregator can eventually show requirements. Telling a nurse *"you're not eligible yet, and here are the three things that would make you eligible, in order"* is career intelligence — and it is the thing that keeps her engaged even when she has zero matches today.

### The requirement model

Each opportunity carries requirements as **structured, individually evaluable items** — qualification, experience, registration, age, language, documents — each with a verdict against the nurse's profile:

- **`met`** — she satisfies it
- **`not_met`** — she doesn't, **plus what would close it** (e.g. "needs 6 more months' experience", "needs state council registration")
- **`unknown`** — we can't tell, so we say so plainly rather than guessing

> **An `unknown` must never be silently rendered as `met` or `not_met`.** For a nurse deciding whether to pay an application fee, a confident wrong answer is far worse than an honest "check this yourself."

### Why this is built before the AI, not after

An AI assistant answering *"can I apply for this?"* from free text will hallucinate — and here a hallucination means a nurse pays a fee for something she was never eligible for, or skips something she qualified for.

**The structured requirement/gap layer is what makes the AI safe and useful later.** The assistant's job is to *explain and converse over* verified structured data, never to reason about eligibility from scratch. Build the substrate first; the AI is an interface onto it ([The AI Assistant](#the-ai-assistant--designed-for-now-built-later)).

---

## Trust Requirements

Every opportunity MUST display:

| Element | Purpose |
|---|---|
| **Source** | Where the information came from |
| **Official Link** | Where to verify or apply |
| **Last Verified** | When it was last checked |
| **Status** | Open / Upcoming / Closed / Result Released / Expired |
| **Source Type** | Official / Verified secondary / Other |

**Philosophy:** *"We make the information easier to understand and discover. The original authority remains visible."*

### Data Quality Requirements

The platform must handle: duplicate listings, expired jobs, changing URLs, broken application links, inaccurate third-party listings, recruiter spam, outdated information, source reliability.

Must respect: website terms, access restrictions, robots rules, licensing requirements, legal constraints.

### Data Acquisition — Highest-Risk Dependency

Scraping is the MVP's single biggest point of failure. Personalization, alerts, and trust are all worthless without a reliable, accurate opportunity stream.

**Realistic risks:**
- A government site changes HTML structure, or adds a CAPTCHA/session token (common on `.gov.in` domains)
- robots.txt or ToS prohibit automated access for a given source
- A source is JS-rendered or PDF-only, making structured extraction expensive
- Legal exposure from scraping private job portals — Naukri/Indeed ToS explicitly restrict this

**Required approach:**
1. **Manual curation is the Day 1 default, not a fallback.** The pipeline is:
   `SOURCE → DISCOVERY → EXTRACTION → NORMALIZATION → VALIDATION → CURATION → PUBLISHED OPPORTUNITY`
   The scraper is a discovery/extraction tool; human curation is the source of truth.
2. **14-Point Publication Gate (docs/data_qa_checklist.md)**: Every record must pass all 14 verification checks (specific document link, exact post count, verified closing date, raw quote fidelity, unknown preservation) before publication.
3. **"We Checked This" Visual Trust Standard**: Every opportunity visually surfaces its specific verification timestamp (`last_verified_at`) and exact citation to the underlying advertisement/PDF notice.
4. **Per-source legal check before scraping** — never a blanket policy. Check robots.txt and ToS individually; prefer official RSS/open-data feeds where they exist.
5. **Never scrape private aggregators (Naukri/Indeed).** For private-job coverage, use hospital career pages or manual unit entry.
6. **Degrade visibly, never silently.** A stale source must surface "last verified X days ago" rather than presenting outdated data as current.
7. **Feature Freeze for Phase 0.1**: Do not build speculative features (AI resume match, courses, abroad expansion) until real-user validation tests G0 ("Do nurses return?").

---

## Product Loop

```
DISCOVER → UNDERSTAND → CHECK ELIGIBILITY → ACT → TRACK → GET ALERTED → RETURN
```

**Objective:** Not maximum time spent. It is **repeated successful career actions**.

---

## The Retention Engine

> **Alerts are not the retention engine.** An alert brings a nurse back once. What makes SkillCase indispensable is that it holds something for her that she would otherwise have to hold herself — across months.

### The core insight: a recruitment cycle is a months-long journey

A government nursing recruitment is not an event. It is a sequence, and each stage is a legitimate, *anticipated* reason to return:

```
Notification → Application opens → Applied → Deadline → Admit card
→ Exam date → Answer key → Result → Cutoff → Counselling → Outcome
```

Today a nurse tracks this across Telegram, YouTube, official portals, and screenshots in her gallery — **because nothing holds the thread for her.** She is doing the integration work herself, repeatedly, for every cycle she is in, often 3–6 at once.

**This is the loop no competitor owns**, and it is worth more than discovery alone. Discovery is a one-time value exchange that a Telegram channel can approximate. *Tracking a nurse through her live cycles* is a relationship.

### What this means we must build

| Capability | Why it drives return visits |
|---|---|
| **Tracked opportunities** | A nurse marks "I applied." SkillCase then owes her every subsequent stage of that cycle. This converts a one-off view into a months-long commitment |
| **A live "My Cycles" view** | Her 3–6 active recruitments, each showing the next thing that happens and when. This is the screen she opens without being prompted |
| **Stage-change alerts** | Not "a new job exists" (generic) but "**your** AIIMS admit card is out" (personal, unmissable) |
| **"What changed since you last checked"** | The single most valuable question for a returning user. Answering it well removes the need to check anywhere else |
| **Deadline intelligence** | Not just a date — escalating, well-timed reminders that a nurse trusts enough to stop maintaining her own reminders |

> **Design rule:** the value of a tracked cycle compounds. The more stages SkillCase carries a nurse through, the more expensive it becomes for her to go back to tracking it herself. That switching cost — earned, not trapped — is the moat.

### The Career-Long Relationship (the actual destination)

**A nurse who gets the job leaves.** If SkillCase is only a job-finding tool, every success permanently removes a user and the product refills the top of the funnel forever. This is the structural reason job platforms have poor retention, and it is not solvable with better alerts.

**So the goal is explicitly not to serve a job search. It is to serve a career.** A nurse should never hit a moment where SkillCase has nothing for her and she goes back to Google. There are exactly two such moments, and both must be owned:

#### Moment 1 — "I want to switch"

Typically 1–3 years in. Today she reopens Naukri, rejoins Telegram groups, and asks colleagues. She should instead find SkillCase already knows her qualification, her experience (now updated), where she works, and what she's tracked before — so switching is a *continuation*, not a fresh search elsewhere.

#### Moment 2 — "I want to go abroad"

Typically 2–3 years in, and the highest-value, highest-intent transition in an Indian nurse's career — Germany, Gulf, UK, Ireland, Canada, Australia, NZ. Today this is the most fragmented, most exploitative part of the journey: unverified agents, contradictory YouTube advice, opaque fees, unclear credentialing.

**This is the single biggest long-term opportunity in the product**, precisely because it is the worst-served. Owning it means: country requirements, registration/credentialing pathways, language (B1/B2) requirements, realistic salary and cost-of-living comparisons, verified employers, and honest timelines.

> **This is why the "Abroad" preference exists in the MVP profile even though no overseas opportunities are served yet.** It is not a dead option — it is the **demand-capture instrument** that tells us which nurses to build the overseas track for, and when. Every nurse who selects it is a signal, and a waitlist member for the day it launches.

#### Between and beyond those moments

| Ongoing need | Why she still returns |
|---|---|
| Registration & renewal tracking | State council renewals and certificate expiries — recurring, deadline-driven, currently unmanaged anywhere |
| The next rung | Most nurses don't stop. Government aspirants re-attempt NORCET; private nurses target better hospitals |
| Specialization & progression | ICU/OT certifications, supervisor roles, MSc pathways |
| Salary benchmarking | "Am I paid fairly?" — a question with no trustworthy Indian nursing answer today |

### Career State — how one app serves a whole career without becoming scattered

The reason most "do everything" products become cluttered is that they show everyone everything. **SkillCase avoids this by knowing where the nurse is in her career and reorienting around it.**

| Career state | What the product leads with |
|---|---|
| **Student / final year** | Upcoming exams, first-job readiness, registration process |
| **Fresher, seeking** | Entry-level jobs, NORCET and state recruitment cycles |
| **Employed, not looking** | Quiet mode — renewals, her tracked cycles, occasional high-relevance opportunities only |
| **Employed, open to switching** | Better-fit roles, salary benchmarks, specialization paths |
| **Abroad-aspiring** | Country requirements, language, credentialing, verified pathways |

> Same product, one surface, different emphasis. This is how the app stays simple while the ambition stays large — **breadth lives in the data model and the roadmap; the interface only ever shows one career state at a time.**

**Career state must be inferable and updatable** — it is not a sixth onboarding question. It is derived from her profile, her tracking behaviour, and self-reported outcomes, with an easy way to correct it.

> **Build order:** the MVP does not build any of this. What the MVP *must* do is avoid foreclosing it — keep profile and tracking data modelled so career state can be added without migration pain, and keep the "Abroad" signal flowing from day one.

### What we are explicitly NOT doing for retention

- ❌ **Streaks, badges, gamification** — wrong register for a working professional making high-stakes career decisions. It would cheapen the trust the product depends on.
- ❌ **Engagement-maximizing feeds** — the stated objective is repeated *successful actions*, not time spent ([Success Metrics](#success-metrics)).
- ❌ **Manufactured urgency** — the deadlines are already real. Inventing pressure would destroy the trust that is the entire differentiator.

---

## MVP Screens & Navigation

### Navigation

| Tab | Purpose |
|---|---|
| **Home** | What matters to me right now |
| **Jobs** | Government / Private (Abroad is *not* a tab — see Personalization Strategy → Abroad) |
| **Exams** | Upcoming / Applications / Results |
| **My Cycles** | **The retention surface** — opportunities I'm tracking, each showing the next stage and when. Replaces a passive "Alerts" tab with an active one ([The Retention Engine](#the-retention-engine)) |
| **Profile** | Qualification / Experience / Location / Preferences |

> **Why "My Cycles" and not "Alerts".** An Alerts tab is a log of things that already happened — a nurse has no reason to open it unprompted. A Cycles tab answers *"what happens next in the things I care about"*, which is the reason she opens the app on a Tuesday with no notification. Same underlying data, materially different retention value. Notification history lives inside it.

### Home Screen

- **What changed since you last checked:** The most valuable question for a returning user — stage changes on tracked cycles first, then new matches
- **Your cycles:** Live tracked opportunities with the next upcoming stage
- **For You:** Jobs matching profile, government opportunities, upcoming exams
- **Important:** Closing deadlines, released admit cards, announced results
- **Explore:** Jobs, Government, Private, Exams

### Job Detail — Must Answer 5 Questions

1. **What is it?** → Title + Employer
2. **Can I apply?** → Likely eligible / Not eligible / Check requirements
3. **Why?** → Qualification + experience + registration match
4. **When?** → Application deadline
5. **What do I do?** → Apply through official source

### Exam Detail

Status, Eligibility (simple language), Important Dates, Syllabus, Official Notification, Alert Me.

---

## Alerts System

### MVP Alerts

| Category | Examples |
|---|---|
| Jobs | New government job matching profile · New vacancy in your city |
| Exams | Application opened · Closes in 3 days |
| Results | Result released |
| Changes | Exam date changed · Deadline extended |

**Critical rule:** Personalized alerts > generic notifications. Irrelevant notifications destroy retention.

### Future — Weekly Update

Curated digest: "5 things you should know this week" — personalized to the nurse's profile.

---

## The AI Assistant — Designed For Now, Built Later

> **The intent:** a nurse asks anything — *"Can I apply?"*, *"What do I need for Germany?"*, *"Why am I not eligible?"*, *"What should I do next?"* — and gets a clear answer in simple language. This is the interface that finally makes the whole system feel like one place.

**It is not MVP.** But three decisions must be made now, because they shape what gets built before it.

### 1. The AI sits on top of structured data — it never replaces it

The assistant is a **conversational interface over verified structured records**, not a general chatbot with a nursing prompt. Every answer must be traceable to a specific opportunity, requirement, or source in the database.

```
Nurse's question
   → retrieve HER profile + the relevant structured opportunities/requirements
   → answer ONLY from that, in plain language
   → cite the source and link to the official authority
```

If the data doesn't contain the answer, the correct response is **"I don't have verified information on that"** plus the official source — never a plausible guess.

### 2. Hard guardrails (this is the product's highest-risk feature)

The audience is making high-stakes, often irreversible decisions — application fees, exam attempts, resignations, overseas moves costing lakhs. This domain already contains active exploitation.

| Rule | Why |
|---|---|
| **Never assert eligibility the structured layer hasn't verified** | A confident wrong "yes" costs a nurse a fee, an attempt, or a career move |
| **Never invent dates, fees, vacancy counts, or requirements** | Fabricated specifics are indistinguishable from real ones to the reader |
| **Never give immigration or visa advice as fact** | Regulated, consequential, and country-specific — surface official requirements and link the authority |
| **Never recommend a specific agent, recruiter, or paid service** | The exact vector by which nurses are defrauded today |
| **Always cite, always link to the official source** | Consistent with the Trust philosophy — the original authority stays visible |
| **Always distinguish "verified" from "general guidance"** | The nurse must know which kind of answer she just received |
| **Escalate uncertainty rather than smoothing it** | "Check with the council" is a *good* answer here |

### 3. Simplicity of language is the actual feature

Government notifications and overseas requirements are deliberately dense. **Plain-language interpretation is the product's stated differentiator** ([Key Design Principles](#key-design-principles) #2) — the AI is how that scales from hand-written summaries to every opportunity, in the nurse's own words and questions.

> **Build order:** structured requirements (Stage 3–4) → verified retrieval layer → assistant. An assistant launched before the structured substrate would be a liability, not a feature.

---

## Acquisition Loops

> Organic search is the **primary** channel, not the only one. Relying on SEO alone means waiting weeks for indexation while competing against Sarkari-type sites with years of domain authority. Three loops run in parallel, and two of them are cheap.

### Loop 1 — Organic Search (primary, slow to compound)

Detailed requirements below. Multi-week lag before it produces traffic, which is exactly why it must ship in Phase 0 Week 2 rather than later.

### Loop 2 — Sharing (fastest loop for this audience)

**Indian nurses already share opportunities with each other constantly** — in WhatsApp groups, with classmates, with colleagues on shift. That behaviour exists today and costs nothing to capture; the only question is whether the shared artifact is a blurry screenshot of a PDF or a SkillCase link.

| Requirement | Detail |
|---|---|
| **Share on every opportunity** | A prominent, one-tap WhatsApp share on every job and exam detail page. Not buried in a menu |
| **The shared link must look excellent in WhatsApp** | Rich OG preview with role, employer, location, deadline. A link with no preview loses most of its clicks — test in WhatsApp specifically, not just Twitter |
| **Shared pages must be fully public** | No login wall on a shared opportunity, ever. The recipient must get value before being asked for anything |
| **Share attribution** | Track shares sent and visits received per opportunity. This tells you which content actually spreads |

> A nurse sharing a deadline with her batchmates is doing acquisition for us and a favour for her friend at the same time. **Make that the single easiest action in the product.**

### Loop 3 — Seeded Distribution (immediate, manual, Phase 0)

The audience is already assembled in nursing Telegram and WhatsApp groups. Phase 0 does not need to wait for Google.

- Participate in existing communities honestly — post genuinely useful, correctly-formatted opportunity summaries that link back. Not spam, not disguised ads.
- This is also the **fastest route to the first 50 real users** for the G0 gate, and to qualitative feedback SEO traffic will never give you.
- **Track seeded traffic separately from organic** — otherwise a G0 "yes" driven entirely by manual seeding will be mistaken for product-market fit.

> **Honest caveat:** seeding is manual and does not scale. It is a bootstrap for validation, not a channel. If it is the only thing producing users at G0, that is a finding, not a success.

### Loop 4 — Answer-Engine Visibility (be what the AI cites)

> **Nurses increasingly ask ChatGPT, Perplexity, and Google's AI answers before they open a website.** "Am I eligible for NORCET with GNM?" is now often asked to an assistant, not a search box. If SkillCase is the source those systems cite, we are present at the moment of intent — even when no click happens.

This is a distinct channel from classic SEO and it rewards different things:

| Requirement | Detail |
|---|---|
| **Directly answer the real questions** | Pages that answer *"who is eligible for NORCET?"*, *"what qualification do I need for AIIMS nursing officer?"* — phrased as nurses actually ask them, answered in the first paragraph |
| **Extractable factual structure** | Clear headings, short factual statements, tables. Answer engines lift clean facts; they skip marketing prose |
| **`FAQPage` / `QAPage` structured data** | On eligibility and process pages, alongside the existing `JobPosting` schema |
| **Consistency and verifiability** | Answer engines favour sources whose facts corroborate elsewhere. Our source-attribution discipline is already exactly this — it is a GEO asset, not just a trust feature |
| **`llms.txt`** | A plain-text map of the site's authoritative, stable pages for AI crawlers |
| **Freshness signals** | Visible "last verified" dates. Deadline-sensitive facts are heavily weighted for recency |
| **Don't block AI crawlers wholesale** | Decide deliberately in `robots.txt`. Blocking them forfeits this channel entirely |

**The strategic point:** the same structured-requirements work that makes our own AI assistant safe ([Eligibility Intelligence](#eligibility-intelligence--requirements--gap--action)) also makes us the most citable source in this space. **One investment, three payoffs** — the product surface, the assistant, and answer-engine acquisition.

> **Honest caveat:** this channel is newer and less predictable than search, and citation without click-through may build awareness more than traffic. Treat it as a deliberate bet, measure referrals from AI surfaces separately, and don't let it displace the fundamentals.

### Deliberately deferred

Paid acquisition, backlink building, blog/content SEO, regional-language SEO, formal referral programmes with incentives.

---

## SEO Requirements

> **This is the acquisition thesis, and it must be built — not assumed.** The MVP User Journey begins at `SEARCH / SOCIAL`, and Next.js was chosen specifically for SSR/SEO. Organic search is the primary acquisition channel, and it requires deliberate implementation.

**Non-negotiable SEO requirements for the MVP:**

| Requirement | Detail |
|---|---|
| **Server-rendered detail pages** | Every job and exam detail page must be SSR/SSG — not client-rendered — so it is indexable |
| **`JobPosting` structured data** | Schema.org `JobPosting` JSON-LD on every job page. This is the actual mechanism for appearing in Google Jobs — without it, the SEO thesis does not work |
| **`sitemap.xml`** | Auto-generated, updated as opportunities are ingested; expired opportunities removed |
| **Canonical URLs** | Stable, human-readable slugs (e.g. `/jobs/aiims-delhi-nursing-officer-2026`). Never expose raw UUIDs as the public URL |
| **`robots.txt`** | Allow indexing of opportunity pages; disallow admin, API, and personalized routes |
| **Meta + Open Graph** | Per-page title/description generated from structured fields; OG tags for WhatsApp/Telegram sharing (the dominant sharing channel for this audience) |
| **Expired-page policy** | Expired opportunities must return `410 Gone` or carry `noindex` — never 404 silently or stay indexed as live. Stale indexed listings are an active trust risk |

**Deliberately deferred:** paid acquisition, backlink building, content/blog SEO, regional-language SEO.

---

## Legal & Compliance (Applies from Phase 0)

> **The DPDP Act applies the moment the first email address is collected — not at Stage 3 resume upload.** Phase 0 collects email plus qualification, experience, and location, which is personal data under India's Digital Personal Data Protection Act.

**Required before the first user record is created:**

| Requirement | Detail |
|---|---|
| **Privacy Policy** | Published and linked from signup. States what is collected, why, retention period, and how to request deletion |
| **Terms of Use** | Published. Must include an accuracy disclaimer — aggregated data may be incomplete or outdated, official source is authoritative |
| **Explicit consent at signup** | Unticked, specific consent for alert emails. No pre-ticked boxes, no bundled consent |
| **Purpose limitation** | Profile data is used for relevance and alerts only. Not sold, not shared with recruiters, without separate explicit consent |
| **Deletion path** | A working way for a nurse to delete her account and data, even if manual in Phase 0 |
| **Takedown contact** | A visible route for an employer/recruiter to dispute or request removal of an aggregated listing |

> These are launch blockers, not paperwork to catch up on later.

---

## Success Metrics

| Category | What to Measure |
|---|---|
| **Acquisition** | Organic visitors · Job/exam page visits · Signup conversion · **Shares sent per 100 views · Visits per share · Seeded vs organic traffic (tracked separately)** |
| **Value** | Opportunity views · Application-link clicks · **Opportunities tracked** · Eligibility checks |
| **Retention** | WAU · Repeat visits · Alert open rate · Return after notification · 7d / 30d retention |
| **Retention (loop health)** | **Tracked cycles per active user · % of returns that are *unprompted* (no alert sent) · Cycle completion rate (tracked → outcome) · Multi-cycle users (tracking 2+)** |
| **Quality** | % opportunities with valid source · % active links · Freshness · Duplicate rate · Incorrect listing reports |

### The Two Metrics That Matter Most

Everything above is diagnostic. These two tell you whether the strategy is working:

1. **Unprompted return rate** — nurses who come back *without* an alert. Alert-driven returns prove the email works; unprompted returns prove **the product** works. This is the number that says whether you're becoming the app she checks first, or a notification service she tolerates.
2. **Tracked cycles per active user** — the direct measure of the retention engine. One tracked cycle is a user. Three is a habit. This is the leading indicator of durable retention, and it should be watched from the first week tracking exists.

**Do NOT optimize for:** number of jobs scraped, articles, AI conversations, courses, or time spent.

**Instead measure:** Are nurses repeatedly finding relevant opportunities and acting on them?

---

## Strategic Positioning

**Position as:**
- ✅ *"Your next nursing opportunity, in one place."*
- ✅ *"Know what's happening in your nursing career."*

**Do NOT position as:**
- ❌ "All nursing information in one place" (too broad)
- ❌ "An AI app for nurses" (too technology-led)
- ❌ "A nursing job portal" (understates the opportunity)

**Fundamental differentiator:**

| Existing Market | SkillCase |
|---|---|
| Information → Nurse | Nurse + Information → Recommendation → Action |

---

## What We Are NOT Building (Yet)

These are future layers, not MVP:

1. Resume upload and intelligence
2. AI career assistant
3. Overseas migration marketplace
4. Nursing education / MCQ platform
5. Language learning (German B2 etc.)
6. Social network
7. Career recommendation engine
8. Global market intelligence
9. Comprehensive nursing news
10. Advanced personalization beyond 4 attributes

---

## Product Evolution Roadmap

| Stage | Name | Deliverable | Goal | Status |
|---|---|---|---|---|
| **1** | Discovery **+ Tracking** | Jobs + Exams + **Tracked cycles** + Alerts + Sharing | Give nurses a reason to come back — and to stay through a whole cycle | 🔄 Current |
| **2** | Personalization | Profile system, career state | Show me what matters to me | ⏳ Planned |
| **3** | Matching | Resume → Opportunity matching | Show me what I can apply for | ⏳ Planned |
| **4** | Intelligence | Market trends, salary benchmarks, regulations | Help me understand my options | ⏳ Planned |
| **5** | **Overseas** | Country requirements, credentialing, language, verified pathways | Take me abroad without being exploited | ⏳ Planned — **major pillar**, demand captured from Stage 1 |
| **6** | Recommendation | AI career assistant | Tell me what I should do next | ⏳ Planned |
| **7** | Enablement | Notes, classes, exam prep, language delivery | Help me achieve the decision I made | ⏳ Planned |
| **8** | Career-long | Renewals, progression, switching support | Still be useful in year three | ⏳ Planned |

> **Stage 1 now explicitly includes tracking**, because discovery alone tests a lookup tool rather than the product ([The Retention Engine](#the-retention-engine)). **Overseas is promoted to its own stage** rather than being folded into "Intelligence" — it is the highest-intent, worst-served transition in the career and deserves to be built deliberately, not as a by-product.

---

## Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| **Frontend** | Next.js 14+ (App Router) + PWA | SSR for SEO (job pages indexed by Google), PWA for mobile-first experience |
| **Backend** | Node.js + Fastify | Fast, TypeScript-native, excellent for I/O-heavy workloads |
| **ORM** | Drizzle ORM | Type-safe, lightweight, raw SQL escape hatch |
| **Database** | PostgreSQL 16 | Relational integrity, full-text search via tsvector, JSONB for flexible fields |
| **Cache** | Redis 7 | Caching, sessions, rate limiting, queue backend |
| **Queue** | BullMQ (on Redis) | Reliable job processing, retries, priorities, dashboard |
| **CDN** | Cloudflare | Free tier, global edge, DDoS protection |
| **Object Storage** | Cloudflare R2 / AWS S3 | Notification PDFs, raw scraped data, future resume uploads |
| **Auth** | Custom JWT + Google OAuth | Lightweight, no vendor lock-in |
| **Push Notifications** | Firebase Cloud Messaging | Free, Android-first (target users) |
| **Email** | Resend | Modern API, affordable |
| **Product Analytics** | PostHog (free tier) | **Required from Phase 0.** Retention cohorts, funnels, and event tracking — Grafana is infrastructure monitoring and *cannot* measure the return-visit behaviour the Core Hypothesis depends on |
| **Monitoring** | Grafana Cloud + Pino logger | Free tier covers MVP; structured JSON logging. Infra health only — not product behaviour |
| **CI/CD** | GitHub Actions | Free, Docker-native |
| **Hosting** | Railway (MVP) → AWS ECS (scale) | Easy start, clear upgrade path |
| **Validation** | Zod | Runtime schema validation + TypeScript inference |
| **Testing** | Vitest + Supertest + Playwright | Unit + integration + E2E |

> Full architecture details: see `docs/architecture.md`

---

## Key Design Principles

1. **Value before onboarding** — Provide useful information before asking for signup or profile.
2. **Simple language** — Translate complex government/overseas notifications into plain language. Be an interpreter, not just an aggregator.
3. **Trust is a requirement** — Every listing links to its official source. Never hide the original authority.
4. **Personalized > generic** — Fewer relevant alerts beat many irrelevant ones.
5. **Structured data first** — Convert unstructured notifications into consistent schemas. This is the foundation for everything future.
6. **Don't build an encyclopedia** — Career information only where tied to a specific opportunity.
7. **Measure actions, not vanity** — Track application clicks and return visits, not page views or time spent.
8. **Scraping is not the product** — The pipeline is Discover → Structure → Verify → Personalize → Alert.
9. **MVP proves behaviour, not technology** — Validate that nurses return regularly before building AI, matching, or recommendations.
10. **No unnecessary complexity** — Five tabs. Five questions per job. Four profile attributes. That's it.

---

## Reference Documents

| Document | Path | Description |
|---|---|---|
| Project Context (this file) | `docs/context.md` | **Single source of truth — living document.** Owns scope, data models, canonical definitions, decisions |
| Problem Statement | `docs/ProblemStatement.md` | ⚠️ **FROZEN ARCHIVE** of original thinking (2026-08-27). Not maintained. Where it conflicts with this file, this file wins |
| Problem Statement (raw original) | `docs/archive/ProblemStatement.original.txt` | Pre-formatting original, preserved for history |
| System Architecture | `docs/architecture.md` | Full system design: service architecture, data pipeline, DB schema, API design, scalability, infra. **Start with its Phase 0 section** — the rest is the target to grow into, not the starting build |
| **Build Specification** | `docs/build_spec.md` | **The developer's document — start here to build.** Quick reference, five user scenarios, both state machines, glossary, empty states, simple-language rules, seed template, analytics spec, pre-build checklist |
| Seed data | `docs/seed/*.csv` | Column contracts and worked examples for manual curation (including OR-paths and unknown cases) |
| Implementation Plan | `docs/implementation_plan.md` | Phased execution sequence (Validate → Automate → Personalize), milestone gates, risk register, team needs |
| Edge Case Handling | `docs/edge_cases.md` | 16 areas of edge cases across ingestion, dedup, trust, eligibility, alerts, auth, legal, SEO, scale, and metrics — each tagged with the phase it applies to |

---

## Decision Log

> **Instructions:** Every significant product, design, or technical decision must be logged here. Include the date, what was decided, the rationale, and who/what initiated the decision. This ensures any future agent or contributor understands not just *what* we're building, but *why* choices were made.

| Date | Decision | Rationale | Initiated By |
|---|---|---|---|
| 2026-08-27 | MVP focuses on Stage 1 (Discovery) only — Jobs, Exams, Alerts | Prove the retention hypothesis before building intelligence layers | Problem Statement |
| 2026-08-27 | Personalization limited to 4 attributes (Qualification, Experience, Location, Preference) | Minimize onboarding friction; resume upload is Stage 3 | Problem Statement |
| 2026-08-27 | Every listing must show Source, Official Link, Last Verified, Status, Source Type | Trust is a requirement, not a feature — accuracy is critical for aggregated content | Problem Statement |
| 2026-08-27 | AI assistant is NOT part of MVP | Must validate discovery + retention behaviour before building AI | Problem Statement |
| 2026-08-27 | No generic nursing encyclopedia or education platform in MVP | Information only where tied to a specific opportunity | Problem Statement |
| 2026-08-27 | Modular monolith architecture (not microservices) | Clean module boundaries without premature distributed-systems complexity; modules extractable later | Architecture Design |
| 2026-08-27 | PostgreSQL 16 as primary database | Relational integrity for Job/Exam schemas, full-text search (tsvector), JSONB for flexible fields, proven scale | Architecture Design |
| 2026-08-27 | Node.js + Fastify backend, Next.js frontend | TypeScript across stack, SSR for SEO on job pages, PWA for mobile-first audience | Architecture Design |
| 2026-08-27 | Event-driven data pipeline (Scheduler → Scraper → Normalizer → Dedup → Verify → Alert) | Ingestion is inherently async; decoupled stages allow independent scaling and failure isolation | Architecture Design |
| 2026-08-27 | BullMQ on Redis for job queues | Reliable processing, retries with backoff, dead-letter queues, priority levels, dashboard | Architecture Design |
| 2026-08-27 | Cursor-based pagination (not offset-based) | Performant at scale; offset pagination degrades with large datasets | Architecture Design |
| 2026-08-27 | Railway for MVP hosting → AWS ECS at scale | Low-friction start, clear upgrade path when traffic demands it | Architecture Design |
| 2026-08-27 | Manual curation is the Day 1 data pipeline, not scraper-first | Scraping is the highest-risk dependency (legal exposure, fragile HTML, blocked sources); manual curation validates schema and product before automation is built | Foundation Review |
| 2026-08-27 | Competitive landscape treated as unverified hypothesis, not settled fact | Prevents building on an unchecked whitespace assumption; requires a real competitive scan before/during build | Foundation Review |
| 2026-08-27 | Monetization deferred but tracked (not silently ignored) | Candidate models recorded so Stage 1→2 transition has a starting point without building revenue infra prematurely | Foundation Review |
| 2026-08-27 | `context.md` is the sole living doc; `ProblemStatement.md` frozen as archive; raw `.txt` moved to `archive/` | Three overlapping copies of the same content guaranteed drift and made "single source of truth" untrue in practice | Documentation Audit |
| 2026-08-27 | Experience buckets given canonical lower-inclusive/upper-exclusive boundaries + bucket→numeric mapping | Original buckets overlapped ("Fresher" ⊂ "0–2"; 2 years fell in two buckets), and no mapping existed between profile buckets and `experience_min`/`max` integers, leaving `experience_match` unimplementable | Documentation Audit |
| 2026-08-27 | Qualification is a **conditional** filter, with an "Other / Not sure" option that never excludes | An unconditional hard filter silently removed nurses with non-standard/foreign/in-progress credentials, showing an empty feed that reads as "no opportunities exist" | Documentation Audit |
| 2026-08-27 | "Abroad" retained as interest capture; removed as a nav tab / Explore category | `jobs.type` supports only government/private and overseas is out of scope, so an Abroad tab could only ever return zero results | Documentation Audit |
| 2026-08-27 | Polymorphic FK columns replaced with real foreign keys + XOR CHECK constraints | `saved_opportunities`, `alert_subscriptions`, and `user_reports` had no referential integrity — deleting a job orphaned every save — and the ERD claimed relationships the DDL didn't implement | Documentation Audit |
| 2026-08-27 | PostHog added as a required Phase 0 dependency | The G0 gate measures 7-day return behaviour; Grafana is infra monitoring and cannot produce retention cohorts, so the gate was previously unevaluatable | Documentation Audit |
| 2026-08-27 | SEO promoted to a first-class MVP requirement with a full architecture section | Organic search is the stated acquisition thesis and the reason Next.js was chosen, yet no sitemap, structured data, or indexation plan existed anywhere. SSR alone does not produce organic traffic | Documentation Audit |
| 2026-08-27 | DPDP compliance moved from "Stage 3 / future" to a Phase 0 launch blocker | Personal data is collected at the very first email signup in Phase 0 Week 3, which triggers notice/consent/purpose-limitation duties immediately | Documentation Audit |
| 2026-08-27 | **North Star adopted: "the only app a nurse ever needs" — as destination, with a Positioning Ladder as the path** | Ambition must be large, but breadth-before-depth is exactly how competitors became scattered. The ladder makes each rung's unlock condition explicit so scope expands from strength, not hope | Product Strategy |
| 2026-08-27 | **Tracked opportunities ("My Cycles") identified as the true retention engine, replacing alerts-as-retention** | A recruitment cycle is a months-long journey (notification → admit card → exam → result → counselling). Nurses currently track it themselves across Telegram/YouTube/portals. Holding that thread is a relationship; discovery alone is a commoditised lookup a Telegram channel can match | Product Strategy |
| 2026-08-27 | Tracking + WhatsApp sharing added to Phase 0 (previously not in scope) | Phase 0 without them tests a job-lookup tool — the very thing SkillCase intends to beat. Tracking is the retention hypothesis, sharing the acquisition hypothesis; both are small (one stage field, one share button) | Product Strategy |
| 2026-08-27 | Acquisition widened from SEO-only to three loops (search, sharing, seeded distribution) | SEO takes weeks to index and competes with entrenched domain authority. Sharing already happens in WhatsApp for free, and the audience is pre-assembled in nursing communities. Seeded traffic must be counted separately so it is never mistaken for product-market fit | Product Strategy |
| 2026-08-27 | **"Success = churn" named explicitly; career-long relationship made a first-class pillar** | A nurse who gets hired leaves, and no alert improvement fixes that. Being the only app she needs requires owning the two moments she'd otherwise go elsewhere: switching jobs, and going abroad | Product Strategy |
| 2026-08-27 | **Overseas promoted to its own roadmap stage (Stage 5); "Abroad" preference reframed as demand-capture** | Overseas is the highest-intent and worst-served transition in an Indian nurse's career, and a space with active exploitation. It deserves deliberate construction, and the MVP waitlist is the signal that decides when and which country first | Product Strategy |
| 2026-08-27 | Career State introduced as the mechanism for breadth without clutter | The way a "do everything" product avoids becoming scattered is to know where the nurse is in her career and reorient emphasis — breadth in the data model and roadmap, one state at a time in the interface | Product Strategy |
| 2026-08-27 | Gamification, streaks, engagement feeds, and manufactured urgency explicitly ruled out | Wrong register for a working professional making high-stakes career decisions; would cheapen the trust that is the product's entire differentiator | Product Strategy |
| 2026-08-27 | Two headline metrics adopted: **unprompted return rate** and **tracked cycles per active user** | Alert-driven returns prove the email works; unprompted returns prove the *product* works. Tracked cycles is the leading indicator of durable retention | Product Strategy |
| 2026-08-27 | **Multi-profession by design — nursing first, not nursing only.** `profession_id`, profession-scoped qualification/role reference tables, and a `/{profession}/` URL segment ship in Phase 0 | Adding a profession later must be an expansion, not a rewrite. URL taxonomy is the urgent part: retrofitting it means 301-ing every indexed page and forfeiting SEO equity. Abstraction is deliberately limited to schema keys, taxonomy, and reference data — UI, onboarding, sources, and feature logic stay nursing-specific to avoid over-generalisation slowing the MVP | Product Strategy |
| 2026-08-27 | **Eligibility deepened from a verdict to Requirements → Gap → Action** | "You're not eligible yet, and here are the three things that would change that" is the actual career-intelligence promise. It also keeps a nurse engaged when she has zero matches today, and is the structured substrate that later makes an AI assistant safe rather than dangerous | Product Strategy |
| 2026-08-27 | **AI assistant: designed for now, built later — strictly as an interface over verified structured data** | An assistant answering eligibility from free text will hallucinate, and here a hallucination costs a nurse a fee, an exam attempt, or a career move. Hard guardrails set now: never assert unverified eligibility, never invent specifics, never give visa advice as fact, never recommend an agent, always cite, and never smooth an `unknown` | Product Strategy |
| 2026-08-27 | **Answer-engine visibility (GEO) adopted as acquisition Loop 4** | Nurses increasingly ask ChatGPT/Perplexity/AI Overviews before opening a website. The same structured-requirements work serves three payoffs at once: the product surface, the AI assistant, and being the source AI systems cite | Product Strategy |
| 2026-08-27 | **Documentation frozen for strategy; `build_spec.md` created as the developer's entry point** | The docs were conceptually strong but not implementation-precise. Added five concrete user scenarios, both state machines with explicit transition ownership, a glossary resolving the notification/status collisions, empty states, simple-language rules, seed CSVs, and an exact analytics spec. **No further strategic expansion before Phase 0** — the next learning must come from real data and real nurses | Pre-Build Pass |
| 2026-08-27 | Simple-language interpretations are **human-written in Phase 0**, never LLM-generated | An incorrect simplification of an eligibility rule costs a nurse an application fee or a missed opportunity she qualified for. Automation of this specific content waits for the structured requirement layer and explicit review | Pre-Build Pass |

---

## Changelog

> **Instructions:** Every time the product proposition, scope, features, data model, positioning, tech stack, or strategic direction changes, log it here with a date, description of what changed, and why. This is the audit trail for the product's evolution.
>
> **Order: oldest first.** Append new entries to the bottom.

| Date | Change | Description | Reason |
|---|---|---|---|
| 2026-08-27 | 📄 Initial context created | Created `context.md` as the single source of truth from the original Problem Statement. Captures: vision, MVP scope, target users, hypothesis, data models, personalization strategy, trust requirements, screens, navigation, alerts, metrics, positioning, roadmap, design principles, decision log, and changelog. | Establish a canonical reference document that any AI agent or contributor can use to fully understand the project. |
| 2026-08-27 | 🏗️ Architecture designed | Created `docs/architecture.md` with full system design: modular monolith service architecture, 6-stage data ingestion pipeline, PostgreSQL schema (11 tables), REST API design (30+ endpoints), personalization engine with scoring algorithm, notification system, caching strategy, auth & security, scalability plan (0 to 200K+ users), monitoring & observability, disaster recovery, and complete tech stack selection. Tech Stack section in context.md updated from TBD to finalized. | Establish scalable, production-grade architecture before development begins. |
| 2026-08-27 | 🧱 Foundation strengthened | Added Competitive Landscape (whitespace check), Monetization (candidates, not yet decided), and Data Acquisition Risk (manual-curation-first, per-source legal check) to `ProblemStatement.md` and `context.md`. Added a "Phase 0" validation-first build to `architecture.md` scoped below the full modular-monolith design. | Original docs asserted whitespace and scraping feasibility without checking them, and specified production-grade infra before the retention hypothesis was validated — contradicting the docs' own "prove behaviour before building" philosophy. |
| 2026-08-27 | 📐 Implementation plan + edge cases created | Created `docs/implementation_plan.md` (Phase 0 Validate → Phase 1 Automate → Phase 2 Personalize, with milestone gates G0–G2, risk register, cross-cutting workstreams) and `docs/edge_cases.md` (15 areas, phase-tagged). Reference Documents table updated. | Turn the foundation docs into an executable sequence, and surface failure modes before they're hit in production. |
| 2026-08-27 | 🔍 Documentation audit #1 — defects fixed, gaps closed, docs consolidated | **Consolidated:** `context.md` is now the sole living doc (absorbed the competitive/monetization/data-acquisition detail in full); `ProblemStatement.md` frozen with a header; raw `.txt` moved to `archive/`. **7 defects fixed:** Abroad dead-end, overlapping experience buckets, missing bucket→integer mapping, `/jobs/:id` route collision shadowing `/featured` and `/saved`, ERD-vs-DDL foreign key mismatch, conflicting scraper thresholds (5% vs 20%), qualification hard-filter contradiction. **3 gaps closed:** SEO (new architecture section + Phase 0 Week 2 workstream + 7 edge cases), product analytics (PostHog required Week 1), DPDP compliance (Phase 0 launch blocker). **Also:** manual-curation effort sizing added as a Week 1 task. | An audit found the docs asserted an acquisition channel they never specified, gated Phase 0 on a metric the stack couldn't measure, deferred a legal obligation that applies immediately, and carried schema/API defects that would have surfaced as production bugs. |
| 2026-08-27 | 🧭 Implementation plan reconciled against all docs | Plan had been drafted before `edge_cases.md` existed and patched after audit #1. Added a **Phase 0 Edge-Case Checklist**, edge-case requirements inside every Phase 1/2 block, an **If G0 Fails** diagnosis table, corrected G0 to require the non-cuttables, repointed stale `ProblemStatement.md` references, removed a "just hard filters" line contradicting the corrected filter rules, and corrected the Phase 0 staffing estimate. | A phase plan that doesn't reflect the edge-case and architecture corrections silently reintroduces the defects those corrections removed. |
| 2026-08-27 | 🔬 Documentation audit #2 — cross-document consistency | **Schema:** added the missing `slug` column to `jobs` and `exams` (the SEO section required stable public slugs that the DDL never defined) plus a `slug_history` table for 301 redirects. **context.md:** stale TOC (missing SEO and Legal sections), Data Models missing slug/source_type/simple-description and misstating Experience as a string, `0–2 years` label relabelled "Under 2 years" (it excludes 0), over-qualification rule for `experience_max` defined, MVP Scope updated with the non-cuttables, changelog reordered chronologically. **edge_cases.md:** two surviving references to the frozen `ProblemStatement.md`, out-of-order rows in §9, takedown contact re-tagged Phase 0. **implementation_plan.md:** Phase 0 checklist completed with 7 missing Phase-0 cases. | Audit #1's own verification pass used a grep pattern that could not match references wrapped in backticks, and reported "clean" while two stale references survived. Schema/spec drift had also accumulated between the SEO section and the DDL. |
| 2026-08-28 | 🛡️ Phase 0.1 Data QA & Publication Gate Established | Scraper pipeline formalized as an extraction engine, not a live publisher (`SOURCE → DISCOVERY → EXTRACTION → NORMALIZATION → VALIDATION → CURATION → PUBLISHED OPPORTUNITY`). Established 14-Point Publication Gate (`docs/data_qa_checklist.md`), added prominent *"Checked by SkillCase Curation"* metadata stamp with verification timestamps, verified multi-path OR-groups and unknown safety states, and froze speculative features to prioritize **G0: "Do nurses return?"** user testing. | Scraping root domains does not prove specific vacancy availability. Scrapers must propose; human curation verifies. |
| 2026-08-28 | 🛂 Career Passport + Zero-Typing Profile + Deep NORCET Hub Implemented | Implemented the personal Career Passport multi-entity model (multiple qualifications, calculated clinical tenure by department, state council registration, DOB age checks, category relaxations, languages matrix). Built zero-typing resume auto-parser (`src/lib/resume-parser.ts`) with review confirmation cards and field-level provenance tracking (`extracted`, `confirmed`, `user_edited`). Upgraded eligibility engine with progressive value-driven disclosure (inline missing field requests). Built dedicated NORCET 2026 Authority Hub (`/nursing/norcet`) with CBT exam patterns, INC syllabus breakdown, 60-day revision timelines, and deep personalized eligibility checks. Verified production build with 41 SSG pages. | Evolve SkillCase from generic job listings to personalized career intelligence ("Tell us about yourself once and we evaluate everything") with near-zero manual typing. |
| 2026-08-28 | 🔬 Rigorous Implementation Audit & P0 Remediation Completed | Remediated two critical P0 bugs and reinforced zero-inference safety: (1) **Compound Eligibility Pathways**: Replaced flat OR-groups with atomic pathway groups (Path A: B.Sc. 0 yrs vs Path B: GNM + 2 yrs in 50+ bed hospital) where all conditions within a pathway must be met and ANY complete pathway satisfies the vacancy; (2) **Confirmed-Only Eligibility**: The eligibility engine strictly rejects unconfirmed raw parser drafts or inferences, returning `unknown` until explicit user confirmation; (3) **Removed Unsupported Inferences**: Removed automated regex government employee inference from resume parser; (4) **NORCET Claim-to-Source Mapping**: Verified every factual claim against official AIIMS Notice No. 82/2026 and prominently demarcated official info from SkillCase Guidance; (5) **Friction Telemetry**: Added non-PII burden and speed metrics to PostHog. Executed 37 automated test assertions (100% pass rate). | Prevent false positive/negative eligibility verdicts, safeguard candidate privacy, and maintain absolute truth in data. |

---

> **🔒 REMINDER TO ALL FUTURE AGENTS & CONTRIBUTORS:**
>
> 1. **Read this file first** before making any changes to the project.
> 2. **Update the Decision Log** when making a significant product/design/technical decision.
> 3. **Update the Changelog** when the product proposition, scope, or direction changes.
> 4. **Update the relevant sections above** if the change affects them (e.g., scope, data model, tech stack).
> 5. **Update the "Last updated" date** at the top of this file.
> 6. **Never delete history** — only append to the Decision Log and Changelog.
