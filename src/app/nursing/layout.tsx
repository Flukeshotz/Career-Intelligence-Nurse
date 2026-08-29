import type { Metadata } from 'next';

const BASE_URL = 'https://career-intelligence-nurse.vercel.app';

export const metadata: Metadata = {
  title: 'Nursing Jobs & Govt Exams India — NORCET 2026, RRB, ESIC',
  description:
    'India\'s nursing career gateway. NORCET 2026, RRB Staff Nurse, ESIC, state PSC exams, hospital vacancies, eligibility checks and official portal links.',
  alternates: {
    canonical: `${BASE_URL}/nursing`,
  },
  openGraph: {
    url: `${BASE_URL}/nursing`,
    title: 'Nursing Jobs & Govt Exams India — NORCET 2026, RRB, ESIC',
    description:
      'Verified nursing jobs, NORCET 2026, RRB, ESIC, state PSC exams and official portal links across India.',
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
