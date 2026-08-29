# SkillCase Phase 0.1 — Data QA & Publication Gate

> **The Rule of Publication**: The scraper is an extraction mechanism; human curation and verification is the source of truth. No record is published to the live indexed directory until all 14 points on this checklist pass.
>
> `SOURCE → DISCOVERY → EXTRACTION → NORMALIZATION → VALIDATION → CURATION → PUBLISHED OPPORTUNITY`

---

## The 14-Point Publication Gate

Every individual opportunity record must be evaluated against this gate:

| # | Check Item | Verification Standard | Pass Criteria |
|---|---|---|---|
| 1 | **Opportunity Exists** | Recruiter / authority has issued a live public recruitment call | Real post, not speculative |
| 2 | **Source is Official** | Direct government portal, Gazette notice, or hospital corporate domain | Root authority domain confirmed |
| 3 | **Specific Source Document** | Specific recruitment advertisement, PDF notification, or job ID link | Direct link to notice, not just home page |
| 4 | **Vacancy Count Verified** | Exact sanctioned post breakdown recorded (or marked blank if unstated) | No fabricated or rounded numbers |
| 5 | **Deadline Verified** | Exact timestamp and date from notification | Real closing date; never guessed |
| 6 | **Qualification Verified** | Every accepted degree, diploma, or certificate recorded | Multi-paths grouped in `or_group` |
| 7 | **Experience Verified** | Minimum years in specific bedded facility recorded | Blank if unstated → renders as `unknown` |
| 8 | **Location Verified** | Canonical state and city of duty | Correct jurisdiction |
| 9 | **Application URL Works** | Live direct link to online submission portal | Functional application route |
| 10 | **Verbatim Raw Text** | `raw_text` in requirements matches source document word-for-word | Exact quotation preserved |
| 11 | **5-Heading Simplification** | `description_simple` follows the 5 mandatory headings without distortion | Traceable to raw requirements |
| 12 | **Structured Requirements** | `operator`, `valueNumeric`, `valueText` match machine evaluation rules | Type-safe evaluation |
| 13 | **Unknown State Preserved** | Incomplete, subjective, or unstated terms left blank | Never forced into `met` or `not_met` |
| 14 | **Verification Timestamp** | Exact timestamp when human curator performed the audit | `last_verified_at` updated |

---

## High-Risk Edge Case Audits (Tested First)

### 1. Multi-Path Qualification (`NORCET-2026`)
- **Condition**: B.Sc. Nursing (0 yrs exp) **OR** Post Basic B.Sc. (0 yrs exp) **OR** GNM (2 yrs exp in 50+ bed hospital).
- **Audit**: All 3 paths share `or_group: 'norcet_qual_path'`. If a candidate has B.Sc. Nursing, the group resolves as **Met** regardless of experience. If candidate has GNM with under 2 years, resolves as **Not eligible yet** with remedy: *"Complete 2 years of hospital service"*.
- **Verdict**: ✅ **PASS**

### 2. Age-Limited Recruitment Without Date-of-Birth (`RRB-NURSE-2026`, `DSSSB-NO-2026`)
- **Condition**: Age upper limit 30 / 40 years as on prescribed date. MVP profile does not collect DOB on initial signup.
- **Audit**: Requirement operator is `lte` 30. When user profile `age` is null, status strictly resolves to **Unknown / Check requirements** rather than failing or passing.
- **Verdict**: ✅ **PASS**

### 3. Ambiguous / Non-Standard Qualification (`other` Qualification Input)
- **Condition**: User possesses a foreign degree, diploma, or in-progress qualification.
- **Audit**: Filtering on `other` **never hard-filters** out opportunities. Detail page evaluates `other` as **Unknown** with advice to verify equivalency in the official notification document.
- **Verdict**: ✅ **PASS**

### 4. Private Hospital Vacancy Freshness (`MANIPAL-BLR-ICU-2026`, `APOLLO-CHN-OT-2026`)
- **Condition**: Private hospital openings change rapidly compared to government recruitment cycles.
- **Audit**: Private hospital records require hospital unit specification, direct link to official career domain (`careers.manipalhospitals.com`), and monthly re-verification stamp.
- **Verdict**: ✅ **PASS**

### 5. Extended Deadline Handling
- **Condition**: Authority issues a corrigendum extending application deadline by 10 days.
- **Audit**: Curator updates `application_deadline` with source corrigendum link. The system updates status from `closed` back to `open`, refreshes JSON-LD structured data `validThrough`, and emits a retention alert event.
- **Verdict**: ✅ **PASS**

### 6. Cancelled Recruitment Handling
- **Condition**: Authority formally cancels recruitment drive.
- **Audit**: Curator flags `status: 'cancelled'`, surfaces clear banner explaining the cancellation notice, disables application CTA, and preserves cycle history with `outcome: 'withdrawn'`.
- **Verdict**: ✅ **PASS**

---

## 4. NORCET Claim-to-Source Verification Mapping

| # | Factual Claim | Stated Value | Exact Official Source | Verification Status |
|---|---|---|---|---|
| 1 | **Total Sanctioned Posts** | 3,055+ Vacancies across AIIMS & Central Hospitals | AIIMS NORCET Vacancy Annexure Table (Advt No. 82/2026) | ✅ Verified Official |
| 2 | **Pay Scale & Level** | Level 7 (₹44,900 - ₹1,42,400) in 7th CPC Matrix | Section 1 (Scale of Pay), AIIMS Advt 82/2026 | ✅ Verified Official |
| 3 | **Online Application Window** | 24 July 2026 to 13 August 2026 (5:00 PM) | Section 3 (Online Registration), AIIMS Notice 82/2026 | ✅ Verified Official |
| 4 | **Stage 1 (Prelims) Date** | Saturday, 12 September 2026 | Important Dates Table, Examination Section AIIMS | ✅ Verified Official |
| 5 | **Stage 2 (Mains) Date** | Wednesday, 30 September 2026 | Important Dates Table, Examination Section AIIMS | ✅ Verified Official |
| 6 | **Pathway 1 (B.Sc. Direct)** | B.Sc. (Hons) / B.Sc. Nursing / Post Basic B.Sc. + RN/RM, 0 yrs exp | Section 2.A (Essential Qualifications), Advt 82/2026 | ✅ Verified Official |
| 7 | **Pathway 2 (GNM + Exp)** | Diploma in GNM + RN/RM + 2 yrs in min 50-bedded hospital | Section 2.B (Essential Qualifications), Advt 82/2026 | ✅ Verified Official |
| 8 | **Age Cutoff Limit** | 18–30 Years as on 13 August 2026 (closing date) | Section 5 (Age Limits & Relaxation Table), Advt 82/2026 | ✅ Verified Official |
| 9 | **Stage 1 CBT Pattern** | 100 MCQs (80 Nursing + 20 General Aptitude), 90 mins, 1/3 negative mark | Section 4.I (Scheme of Stage 1 Exam), AIIMS Notice | ✅ Verified Official |
| 10 | **Stage 2 CBT Pattern** | 160 MCQs (Clinical case scenarios), 90 mins, 1/3 negative mark | Section 4.II (Scheme of Stage 2 Exam), AIIMS Notice | ✅ Verified Official |
| 11 | **Prescribed Syllabus** | Standard INC curriculum for B.Sc./GNM courses | Section 4.III (Syllabus Scope), AIIMS Examination Section | ✅ Verified Official |
| 12 | **Subject Weightages** | Med-Surg, OBG, Pediatrics relative frequency | *SkillCase Advisory Analysis* — marked as Non-Official Guidance | 💡 SkillCase Advisory |
| 13 | **60-Day Revision Timeline** | Pacing recommendations for working hospital nurses | *SkillCase Advisory Guide* — marked as Non-Official Guidance | 💡 SkillCase Advisory |

---

## 5. Previous Year Question Paper (PYQ) & Answer Key Quality Gate

> **Core Philosophy**: *"EMPTY BUT TRUE over FULL BUT FABRICATED"*.

Every ingested PYQ booklet and question item must pass this 10-point audit before publication:

| # | Check Item | Standard | Pass Criteria |
|---|---|---|---|
| 1 | **Approved Authority Domain** | Must originate from official whitelisted domain or gov archive | Whitelist domain matched |
| 2 | **Explicit Examination Lineage** | Document explicitly states exam name, year, and conducting authority | Year and cycle verified |
| 3 | **Source Tier Classification** | Strictly classified into Tiers 1–5 | No unverified source claiming Tier 1 |
| 4 | **Untouched Original Text** | `question_text_original` preserves exact source extraction | No synthetic rewrites |
| 5 | **Option Completeness** | All options (A, B, C, D) extracted from source | No manufactured options |
| 6 | **Answer Key Provenance** | Answer key mapped to official circular with status tag | `OFFICIAL` or `VERIFIED_SECONDARY` |
| 7 | **Incomplete Paper Auditing** | Explicit count comparison (`questions_available` vs `questions_expected`) | Missing questions not fabricated |
| 8 | **Cryptographic Immutability** | SHA-256 hash computed and recorded | Tamper-evident checksum |
| 9 | **Copyright / Redistribution Gate** | Document redistribution rights evaluated | `ALLOWED` or `LINK_ONLY` |
| 10 | **Human Review Approval** | Flagged / low-confidence items validated by reviewer | `review_status = 'VERIFIED'` |

