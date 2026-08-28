# PaywallPanel

Intentional addition (no Figma component set; ported from the shipping app code). The subscribe body: locked pill, price, entitlement rows, navy CTA and the "talk to an expert" fallback.

```jsx
<PaywallPanel price="₹99" period="/ month" onCta={pay} onSecondary={call} />
```

Drop inside AppModal. Feature rows always read "Unlimited ✓" — the panel sells the removal of caps, not a feature list. Keep the cancel-anytime footnote; it is in every variant.
