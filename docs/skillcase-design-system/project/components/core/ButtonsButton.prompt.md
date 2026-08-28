# ButtonsButton

The app's primary action button — green primary for "Check"/"Continue", secondary and link hierarchies for everything else.

```jsx
<ButtonsButton size="sm" hierarchy="primary" text1="Label" />
```

Variants: `size` (sm, md, lg, xl) · `hierarchy` (primary, secondary, tertiary, link color, link gray) · `state` (default, hover, focused, disabled, loading)

Text slots (`text1`…) override the design's baked copy; see the `.d.ts` for defaults.
