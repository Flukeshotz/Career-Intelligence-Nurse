# AppTabBar

Intentional addition (no Figma component set; ported from the shipping app code). The 88px bottom bar with the raised 120px progress ring — Home, Jobs, ring, coins, streak.

```jsx
<AppTabBar activeTab="home" ringProgress={0.62} coins={260} streakDays={7} />
```

The ring is mode-aware in production: German words learnt, practice progress, course completion or job-screening steps. `ringProgress` is 0–1.
