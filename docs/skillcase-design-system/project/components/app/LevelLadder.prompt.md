# LevelLadder

Intentional addition (no Figma component set; ported from `src/pages/landing/components/LevelProgress.jsx`). The A1 · A2 · B1 · B2 ladder above the practice grid — amber fill through the user's current level, with the "B1 is minimum to work as a nurse in Germany" line above it.

```jsx
<LevelLadder level="A2" />
<LevelLadder level="B1" progress={62} dynamic />
```

Four equal segments on a `#f0f0f0` track, amber `#edb843` fill, level labels beneath. The `dynamic` variant swaps to a slate track, green `#00c853` fill, 25/50/75/100% labels and an amber ball floating at the live percentage. B2 fills the whole ladder.
