# AppButton

Intentional addition (no Figma component set; ported from the shipping app code). The app's button — gold `primary` is the main CTA, `dark` navy for premium actions, `secondary`/`outline` for secondary paths.

```jsx
<AppButton variant="primary" size="md" fullWidth>Continue</AppButton>
```

Variants: primary (gold #edb843 on navy text) · secondary (white, navy border) · dark (#002856) · outline. Sizes sm/md/lg. `rounded` swaps the 8px radius for a pill. All carry a 2px border and --shadow-xs.
