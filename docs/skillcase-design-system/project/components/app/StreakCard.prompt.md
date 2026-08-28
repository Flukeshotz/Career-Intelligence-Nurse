# StreakCard

Intentional addition (no Figma component set; ported from the shipping app code). The navy streak panel on the home hub — streak count, daily-goal progress and a resume link.

```jsx
<StreakCard streak={4} todayPoints={12} dailyGoal={20} resumeLabel="Continue Chapter 3" onResume={go} />
```

Daily goal defaults to 20 points, as in production. The goal number turns gold once met. Sits in the 16px page gutter.
