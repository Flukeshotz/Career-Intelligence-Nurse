# JobListingCard

Intentional addition (no Figma component set; ported from `src/pages/jobs/JobsLockedPage.jsx` and `src/pages/landing/components/JobCard.jsx`). A German job posting.

```jsx
<JobListingCard title="ICU Staff Nurse" location="Munich, GER" org="Elderly Care Hospital"
  facts={['100k/month', 'Language - B2']} locked />
```

White card at radius 16 with a 1px slate outline: role title with an outlined location pin chip beside it, "Organization" over the employer in bold, an icon+label facts row, and a full-width CTA. Below B1 the CTA is the disabled stone bar "Complete German B1 to Apply"; pass `locked={false}` for the live navy apply button.
