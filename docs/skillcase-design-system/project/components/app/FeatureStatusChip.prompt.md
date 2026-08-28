# FeatureStatusChip

Intentional addition (no Figma component set; ported from the shipping app code). The entitlement readout every feature card carries: unlimited, premium, or a daily-limit meter.

```jsx
<FeatureStatusChip status="capped" used={2} limit={3} />
```

Check order matches production: `unlimited` wins first, then hard-locked → `premium`, then a configured cap → the meter. Never show two chips on one card.
