# ChoiceRow

Intentional addition (no Figma component set; built from the design file's frames). The lettered option row — onboarding questions and lesson answers use the same one.

```jsx
<ChoiceRow letter="A" label="A1 - Beginner" hint="(I know a few words)" state="selected" badge="Recommended" />
```

358 × 52 at radius 8. `default` is a 1px #DBDBDB ring on white; `selected` turns the ring, letter chip and copy blue (#1E76F3); `correct` / `incorrect` are the green/red lesson states. `hint` adds the parenthetical second line; `badge` adds a trailing "Recommended" pill.
