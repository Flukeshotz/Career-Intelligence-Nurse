import { VERIFIED_FACTS } from '@/lib/verified-facts';

const ROWS: Array<[keyof (typeof VERIFIED_FACTS)[string], string]> = [
  ['posts', 'Posts'],
  ['eligibility', 'Who can apply'],
  ['age', 'Age limit'],
  ['pay', 'Pay'],
  ['selection', 'How you are selected'],
];

/** Key facts limited to what was actually checked. Missing rows say so instead of guessing. */
export function VerifiedFactsCard({ examId }: { examId: string }) {
  const f = VERIFIED_FACTS[examId] ?? {};
  return (
    <div className="sc-card" style={{ padding: '18px', marginBottom: '16px' }}>
      <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '0 0 12px' }}>Key facts</h2>
      <dl style={{ margin: 0, display: 'grid', gap: '10px' }}>
        {ROWS.map(([key, label]) => (
          <div key={key} style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '10px', fontSize: '0.86rem' }}>
            <dt style={{ color: 'var(--sc-ink-600)', fontWeight: 700 }}>{label}</dt>
            <dd style={{ margin: 0, color: f[key] ? 'var(--sc-navy-900)' : 'var(--sc-ink-600)' }}>
              {f[key] ?? 'See official notification'}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
