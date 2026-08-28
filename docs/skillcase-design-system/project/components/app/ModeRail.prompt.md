# ModeRail

Intentional addition (no Figma component set; ported from the shipping app code). The three white mode tabs that sit on the navy under the header (Exam & Practice / Guided German / German Classes).

```jsx
<ModeRail items={modes} activeIndex={0} onSelect={setMode} />
```

52px tall, 109px tabs, radius 8. Production equivalent is TopModeSwitcher; B1/B2 users see a two-tab variant (Exam & Practice + Jobs).
