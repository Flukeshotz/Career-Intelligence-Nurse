# SkillCase Design System — operating model

This project reverse-engineers an existing product into a design system. It is
not greenfield.

## Source of truth

| Rank | Source | Authority |
| --- | --- | --- |
| 1 | `SkillCase-Frontend-main` code | Behavioural / product truth |
| 2 | Existing validated screens | Product evidence |
| 3 | This design system's components | Current implementation |
| 4 | Figma kit | Visual reference only |
| 5 | Brand guidance, UX best practice | Tie-breakers |

Personal aesthetic preference never outranks product evidence. When code and
Figma disagree, classify the difference before acting: intentional product
behaviour / intentional DS extension / legacy / accidental inconsistency /
unknown. Never silently "correct" one to match the other.

## Standing decisions (do not reopen)

- **App-specific primitives keep their names.** `AppButton`, `AppTabBar`,
  `JourneyCard` and the other ~55 SkillCase components do NOT get renamed to
  Untitled-UI vocabulary (`ButtonsButton`, `Tag`, `InputField`…). The 1:1 map to
  the codebase outranks name symmetry. Every one carries an "Intentional
  addition" note in its `.d.ts` naming its source file. The recurring
  `check_design_system` advisory about these 55 is **expected noise** — confirm
  and move on, never rename.
- **The five oversized files** (`ButtonsButton`, `Tag`, `InputField`,
  `PaymentMethodIcon`, `SocialIcon`) are Untitled-UI icon sprites as exported.
  Informational.
- **`:root[data-theme="dark"]` scope is intentional.** Not a defect.
- **The 838 tokens are the foundation.** Never delete or rename a token because
  another value looks better. Find usage → determine semantic role → assess
  downstream impact → recommend → flag migration. Recommend, don't unilaterally
  change.

## Classification before creation

Every UI element is one of: FOUNDATION, PRIMITIVE, COMPONENT, PATTERN,
TEMPLATE, or SCREEN-SPECIFIC. Do not force everything into a component.
Componentize only on evidence — repeated usage, shared behaviour, shared
states. "It looks like a component" is not a reason.

When a surface needs something the system lacks, report the gap first
(requirement / existing option / why insufficient / approaches /
recommendation / should this be systemic? / confidence) rather than
immediately building a component.

## Strategy per surface

State which is being used and why.

- **Audit-first** for behaviourally complex flows (exams, lesson flows).
  Trace the route, read the implementation, map states, THEN design.
- **Breadth-first** only for simple, repetitive surfaces whose code plainly
  defines behaviour.

Never audit the router superficially and call it complete.

## Honest framing

The product has a strong foundation covering the application's spine. The
**whole application is not audited**. Guided German is complete. Never
describe the app as fully audited until the remaining surfaces are actually
traced. Label KNOWN / UNKNOWN / ASSUMPTION explicitly.

## Don't

Start from scratch · discard tokens · rename to match Untitled-UI · assume
Figma is complete · treat every code difference as a bug · componentize every
repetition · invent product behaviour without labelling it an assumption ·
redesign validated flows without reason · create variants for their own sake.
