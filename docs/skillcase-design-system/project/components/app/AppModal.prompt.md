# AppModal

Intentional addition (no Figma component set; ported from the shipping app code). The scrim + white card shell every blocking modal uses — paywall, usage limit, trial ended, premium activated.

```jsx
<AppModal mascot="/assets/img/maya.png" showClose onClose={close}>
  <PaywallPanel onCta={pay} />
</AppModal>
```

Radial navy scrim with a 2px blur, 390px card at radius 32. `showClose` matches the Figma, which only exposes the X on limit modals. Production animates entry with framer-motion (opacity 0→1, scale .96→1, 200ms).
