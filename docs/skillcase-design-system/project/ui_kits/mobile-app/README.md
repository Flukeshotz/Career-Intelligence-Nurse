# UI kit — Skillcase app (current)

The shipping app's main screen, rebuilt from the real source: geometry from the Figma frame *"Home screens shows feature cards with free vs premium marked"* (node `2513:10746`) and behaviour/tokens from `SkillCase-Frontend/src` (v1.2.6).

| File | What it is |
| --- | --- |
| `index.html` | Home screen + the paywall modal. Open this. |
| `HomeScreen.jsx` | The screen, composed **entirely** from `window.SkillcaseDesignSystem_*` primitives — nothing is re-implemented locally except the iOS status bar. |

**Try it:** tap any card marked **Premium** (Speak to AI, Vocabulary Practice, Read articles…, Describe & Speak) and the paywall raises, exactly as `PaywallBlocker` does in production. Tap the X to dismiss. The mode rail and bottom tabs are live.

**Structure of the screen, top to bottom** — navy status bar (44) → `AppHeaderBar` (72, level + plan pill + bell) → `ModeRail` (52, three white tabs on the navy) → white sheet with a 3-up `FeatureCard` grid (107.667 × 148, 10px gaps, 16px gutter) → `EventBanner` → `AppTabBar` (88, raised 120px progress ring).

Content is abbreviated: nine feature cards stand in for the full catalogue, and one event banner for the rotating promo slot. Every geometry number is the source's.
