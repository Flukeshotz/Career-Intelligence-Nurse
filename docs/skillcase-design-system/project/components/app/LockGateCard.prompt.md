# LockGateCard

Intentional addition (no Figma component set; ported from `src/pages/jobs/JobsLockedPage.jsx`). The eligibility gate at the top of `/jobs` for A1/A2 users.

```jsx
<LockGateCard image="assets/img/bag.webp" level="A1" onCta={dismiss} />
```

A 96px illustration with a lock badge pinned to its corner, the "You are currently at A1 German level" pill, a 24px headline, a grey explainer and a full-width navy dismiss button. B1/B2 users never see it — they get the real pipeline.
