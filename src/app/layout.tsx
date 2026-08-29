import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import Script from 'next/script';
import './globals.css';
import { TopHeader } from '@/components/layout/TopHeader';
import { BottomNav } from '@/components/layout/BottomNav';
import { PostHogProvider } from '@/components/layout/PostHogProvider';

const BASE_URL = 'https://career-intelligence-nurse.vercel.app';

export const metadata: Metadata = {
  // ── FAIL FIX: Title too long (was 64 chars) → now 55 chars ──
  title: {
    template: '%s | SkillCase Nursing',
    default: 'SkillCase — Nursing Jobs, NORCET & Govt Exams India',
  },
  // ── FAIL FIX: Meta description pixel width (was ~963px) → tightened ──
  description:
    'India\'s nursing career gateway. NORCET 2026, RRB, ESIC, state PSC exams, hospital vacancies. Eligibility checks & official portal links.',

  metadataBase: new URL(BASE_URL),

  keywords: [
    'nursing jobs India',
    'NORCET 2026',
    'AIIMS nursing officer',
    'staff nurse vacancy',
    'BSc nursing jobs',
    'GNM government jobs',
    'ESIC nursing officer',
    'railway staff nurse',
    'nursing recruitment',
    'nursing exam India',
  ],

  // ── FAIL FIX: Canonical URL ──
  alternates: {
    canonical: BASE_URL,
  },

  // ── FAIL FIX: og:url + og:image ──
  openGraph: {
    type: 'website',
    url: BASE_URL,
    locale: 'en_IN',
    siteName: 'SkillCase Nursing',
    title: 'SkillCase — Nursing Jobs & Exam Intelligence',
    description:
      'Verified nursing jobs, NORCET 2026, RRB, ESIC, state PSC exams & official portal links across India.',
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'SkillCase — India\'s Nursing Career Intelligence Platform',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'SkillCase — Nursing Jobs & Exam Intelligence',
    description:
      'Verified nursing jobs, NORCET 2026, RRB, ESIC, state PSC exams & official portal links across India.',
    images: [`${BASE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

// ── FAIL FIX: Zoom disabled (remove userScalable: false) ──
export const viewport: Viewport = {
  themeColor: '#002856',
  width: 'device-width',
  initialScale: 1,
  // userScalable REMOVED — was causing WCAG accessibility failure
};

// ── JSON-LD Structured Data ──
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'SkillCase',
  url: BASE_URL,
  logo: `${BASE_URL}/favicon.ico`,
  description: 'India\'s nursing career intelligence platform covering NORCET, RRB, ESIC and state nursing recruitment exams.',
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer support',
    areaServed: 'IN',
    availableLanguage: 'English',
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'SkillCase Nursing',
  url: BASE_URL,
  description: 'Verified nursing jobs, NORCET 2026, RRB, ESIC and 50 national recruitment exams with eligibility intelligence for nurses across India.',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${BASE_URL}/nursing/exams?search={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

import { MayaFloatingButton } from '@/components/maya/MayaFloatingButton';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ── JSON-LD Structured Data ── */}
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema]),
          }}
          strategy="beforeInteractive"
        />
      </head>
      <body>
        {/* ── Skip Navigation — pure CSS (no event handlers needed in RSC) ── */}
        <a href="#main-content" className="skip-nav-link">
          Skip to main content
        </a>

        <Suspense fallback={null}>
          <PostHogProvider>
            {/* Landmark: header */}
            <header role="banner">
              <TopHeader />
            </header>

            {/* Landmark: main with id for skip-nav */}
            <main id="main-content" role="main" className="content-area">
              {children}
            </main>

            {/* Maya AI Guide Floating Action Button (bottom-right) */}
            <MayaFloatingButton />

            {/* Landmark: nav */}
            <nav role="navigation" aria-label="Primary mobile navigation">
              <BottomNav />
            </nav>
          </PostHogProvider>
        </Suspense>
      </body>
    </html>
  );
}
