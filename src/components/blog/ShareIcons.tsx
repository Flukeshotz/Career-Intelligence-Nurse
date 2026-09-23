'use client';

import { useState } from 'react';
import { Link2, Check } from 'lucide-react';
import { analytics } from '@/lib/posthog';

function WhatsAppIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.2 2.2 2.2 0 0 0 .2-1.2c-.1-.1-.2-.2-.4-.3Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.5h4V21H3V9.5Zm6.5 0h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.1c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7V21h-4V9.5Z" />
    </svg>
  );
}

/** "Share [link] [whatsapp] [linkedin]" — round icon buttons, as in the blog design. */
export function ShareIcons({ title, trackId }: { title: string; trackId?: string }) {
  const [copied, setCopied] = useState(false);
  const url = () => (typeof window !== 'undefined' ? window.location.href.split('#')[0] : '');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url());
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
      if (trackId) analytics.shareClick(trackId, 'copy');
    } catch {
      /* clipboard blocked: nothing to do */
    }
  };

  return (
    <div className="blog-share">
      <span>Share</span>
      <button type="button" className="blog-share-btn" onClick={copy} aria-label={copied ? 'Link copied' : 'Copy link'} title={copied ? 'Link copied' : 'Copy link'}>
        {copied ? <Check size={16} /> : <Link2 size={16} />}
      </button>
      <button
        type="button"
        className="blog-share-btn"
        aria-label="Share on WhatsApp"
        onClick={() => {
          if (trackId) analytics.shareClick(trackId, 'whatsapp');
          window.open(`https://wa.me/?text=${encodeURIComponent(`${title}\n${url()}`)}`, '_blank', 'noopener');
        }}
      >
        <WhatsAppIcon />
      </button>
      <button
        type="button"
        className="blog-share-btn"
        aria-label="Share on LinkedIn"
        onClick={() => window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url())}`, '_blank', 'noopener')}
      >
        <LinkedInIcon />
      </button>
    </div>
  );
}
