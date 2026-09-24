'use client';

import { Suspense, useEffect } from 'react';
import { initPostHog, analytics, detectReferrerSource } from '@/lib/posthog';
import { usePathname, useSearchParams } from 'next/navigation';

/**
 * Page-view tracking lives in its own tiny component inside its own Suspense boundary. Reading the
 * query string (useSearchParams) makes Next.js skip server rendering for everything inside the
 * nearest Suspense — when this wrapped the whole app, pages reached search engines empty.
 */
function PageviewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const referrerSource = detectReferrerSource(searchParams);
    const shareToken = searchParams?.get('s') || searchParams?.get('share_token') || undefined;
    analytics.landingPageView({ landing_path: pathname, referrer_source: referrerSource, share_token: shareToken });
    if (shareToken) analytics.shareVisit(shareToken);
  }, [pathname, searchParams]);

  return null;
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    initPostHog();
  }, []);

  return (
    <>
      <Suspense fallback={null}>
        <PageviewTracker />
      </Suspense>
      {children}
    </>
  );
}
