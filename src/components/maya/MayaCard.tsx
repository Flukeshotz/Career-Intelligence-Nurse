'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { MayaOpportunityContext } from '@/lib/maya-engine';

const MayaPanel = dynamic(() => import('./MayaPanel'), { ssr: false });

interface MayaCardProps {
  /** Title shown in the card, e.g. "Confused about NORCET?" */
  title: string;
  /** 2–3 suggested prompt chips shown to the user */
  suggestedPrompts?: string[];
  /** The page context for the Maya engine */
  pageContext: 'norcet' | 'job' | 'exam' | 'profile' | 'cycles' | 'general';
  /** The opportunity to send as context */
  opportunity?: MayaOpportunityContext;
}

export default function MayaCard({ title, suggestedPrompts = [], pageContext, opportunity }: MayaCardProps) {
  const [open, setOpen] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState<string | undefined>();

  const openWithQuestion = (q?: string) => {
    setInitialQuestion(q);
    setOpen(true);
  };

  return (
    <>
      <div className="maya-card" onClick={() => openWithQuestion(undefined)} role="button" tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && openWithQuestion(undefined)}>
        <img src="/maya-wave.webp" alt="Maya" className="maya-card-avatar" />
        <div className="maya-card-body">
          <div className="maya-card-label">Ask Maya</div>
          <div className="maya-card-title">{title}</div>
          {suggestedPrompts.length > 0 && (
            <div className="maya-card-prompts">
              {suggestedPrompts.map(prompt => (
                <button
                  key={prompt}
                  className="maya-prompt-chip"
                  onClick={e => { e.stopPropagation(); openWithQuestion(prompt); }}
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <MayaPanel
        isOpen={open}
        onClose={() => setOpen(false)}
        initialQuestion={initialQuestion}
        pageContext={pageContext}
        opportunity={opportunity}
      />
    </>
  );
}
