import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import './globals.css';
import { TopHeader } from '@/components/layout/TopHeader';
import { BottomNav } from '@/components/layout/BottomNav';
import { PostHogProvider } from '@/components/layout/PostHogProvider';

export const metadata: Metadata = {
  title: {
    template: '%s | SkillCase Nursing',
    default: 'SkillCase — Nursing Jobs, NORCET & Govt Recruitment Intelligence',
  },
  description:
    'Discover verified government and private nursing jobs, NORCET exams, eligibility intelligence, admit card tracking, and application deadlines across India.',
  keywords: [
    'nursing jobs',
    'NORCET 2026',
    'AIIMS nursing officer',
    'staff nurse vacancy',
    'BSc nursing jobs',
    'GNM government jobs',
    'ESIC nursing officer',
    'railway staff nurse',
  ],
  metadataBase: new URL('https://skillcase.in'),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'SkillCase Nursing',
    title: 'SkillCase — Nursing Career & Recruitment Intelligence',
    description:
      'Verified government & private nursing jobs, eligibility checks, NORCET exam dates, and admit card tracking.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#0b131b',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <PostHogProvider>
            <TopHeader />
            <main className="content-area">{children}</main>
            <BottomNav />
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
