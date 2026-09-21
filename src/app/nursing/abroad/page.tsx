import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// The earlier listings (vacancy counts, salaries, benefits) were not checked against the employers'
// own notices, so they are removed. This page returns when each listing has an official source.
export default function AbroadNursingPage() {
  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '640px', margin: '0 auto', paddingBottom: '90px' }}>
      <Link href="/nursing" style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', color: 'var(--sc-navy-700)', fontSize: '0.80rem', fontWeight: 700, textDecoration: 'none', marginBottom: '8px' }}>
        <ArrowLeft size={14} />
        <span>Back to Home</span>
      </Link>
      <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0' }}>International Opportunities</h1>
      <div className="sc-card" style={{ padding: '18px' }}>
        <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
          We&apos;re verifying overseas nursing opportunities against the employers&apos; and regulators&apos; own notices. We only list what we can source, so nothing is shown here yet.
        </p>
      </div>
    </div>
  );
}
