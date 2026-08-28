# JourneyCard

Intentional addition (no Figma component set; built from the live app). The Guided German level card on the journey path — 3D isometric scene, status pill, restart + Recap row.

```jsx
<JourneyCard title="At the Airport Entrance" status="Level 1 completed" image="/assets/img/levels/airport.webp" state="completed" onPrimary={recap} onRestart={restart} />
```

White card at radius 20 with 8px padding; the scene sits at radius 12. A green check badge overhangs the top-right when `state="completed"`. `locked` drops the card to 55% opacity. Cards alternate left/right down the white curved path on the pale blue map.
