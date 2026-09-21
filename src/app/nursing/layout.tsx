import { SITE_URL } from '@/lib/site';
import type { Metadata } from 'next';

const BASE_URL = SITE_URL;

export const metadata: Metadata = {
  title: 'Nursing Govt Exams India — NORCET 2026, RRB, PGIMER',
  description:
    'Nursing recruitment exams checked against independent sources: NORCET 2026, RRB, PGIMER and state boards. Deadlines, vacancies and official links.',
  alternates: {
    canonical: `${BASE_URL}/nursing`,
  },
  openGraph: {
    url: `${BASE_URL}/nursing`,
    title: 'Nursing Govt Exams India — NORCET 2026, RRB, PGIMER',
    description:
      'Nursing recruitment exams checked against independent sources, with official links.',
    images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

export default function NursingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
