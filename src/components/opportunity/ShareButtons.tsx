'use client';

import { useState } from 'react';
import { Share2, Check, Copy, MessageCircle } from 'lucide-react';
import { buildWhatsAppShareUrl, buildOpportunityShareUrl, createShareToken } from '@/lib/share';
import { analytics } from '@/lib/posthog';

export function ShareButtons({
  opportunityId,
  opportunityType,
  title,
  employerOrOrg,
  location,
  deadline,
  slug,
  profession = 'nursing',
}: {
  opportunityId: string;
  opportunityType: 'jobs' | 'exams';
  title: string;
  employerOrOrg: string;
  location?: string | null;
  deadline?: string | null;
  slug: string;
  profession?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleWhatsAppShare = () => {
    const shareToken = createShareToken();
    const shareUrl = buildOpportunityShareUrl(profession, opportunityType, slug, shareToken);
    const waUrl = buildWhatsAppShareUrl({
      title,
      employerOrOrg,
      location,
      deadline,
      url: shareUrl,
    });

    analytics.shareClick(opportunityId, 'whatsapp');
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopyLink = () => {
    const shareToken = createShareToken();
    const shareUrl = buildOpportunityShareUrl(profession, opportunityType, slug, shareToken);
    
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      analytics.shareClick(opportunityId, 'copy');
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
      <button onClick={handleWhatsAppShare} className="btn-whatsapp">
        <MessageCircle size={17} />
        <span>Share to WhatsApp</span>
      </button>

      <button onClick={handleCopyLink} className="btn-secondary" style={{ padding: '10px 14px', fontSize: '0.88rem' }}>
        {copied ? (
          <>
            <Check size={16} color="#00d294" />
            <span style={{ color: '#00d294' }}>Link Copied</span>
          </>
        ) : (
          <>
            <Copy size={16} />
            <span>Copy Link</span>
          </>
        )}
      </button>
    </div>
  );
}
