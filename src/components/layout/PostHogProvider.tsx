'use client';

import { useEffect } from 'react';
import { initPostHog, analytics, detectReferrerSource } from '@/lib/posthog';
import { usePathname, useSearchParams } from 'next/navigation';

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    initPostHog();
  }, []);

  useEffect(() => {
    if (pathname) {
      const referrerSource = detectReferrerSource(searchParams);
      const shareToken = searchParams?.get('s') || searchParams?.get('share_token') || undefined;

      analytics.landingPageView({
        landing_path: pathname,
        referrer_source: referrerSource,
        share_token: shareToken,
      });

      if (shareToken) {
        analytics.shareVisit(shareToken);
      }
    }
  }, [pathname, searchParams]);

  return <>{children}</>;
}
