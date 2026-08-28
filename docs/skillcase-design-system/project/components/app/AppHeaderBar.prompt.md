# AppHeaderBar

Intentional addition (no Figma component set; ported from the shipping app code). The navy bar at the top of every hub screen — level title, context line, plan pill and profile avatar.

```jsx
<AppHeaderBar level="A1" plan="free" showAdmin />
```

`#002856`, 64px tall, sticky, with `env(safe-area-inset-top)` padded above it. The title reads "{level} German Level" (B1 and B2 both display as **B1**) over the context line at 70% white — the final copy is **"B1 level is minimum for German jobs"**. Right side: `PlanPill` and a 28px avatar that falls back to the grey SVG silhouette; the Admin chip (white/10 pill) appears only for `admin` / `super_admin` roles. The whole left block is a tappable brand link back to the active hub.
