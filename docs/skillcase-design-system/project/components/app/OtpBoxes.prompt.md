# OtpBoxes

Intentional addition (no Figma component set; built from the design file's frames). The 6-digit OTP entry, plus `PhoneField` — the +91 prefix box beside the number field.

```jsx
<OtpBoxes length={6} value="824095" focusIndex={5} />
<PhoneField value="8240951860" />
```

Both use the app's skeuomorphic field ring: a 2px #DBDBDB inset plus the 18% / 5% inner shadows and a 1px drop. Inter SemiBold 18/24; filled digits go navy, the focused box rings blue.
