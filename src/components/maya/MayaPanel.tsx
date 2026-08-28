'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { X, Send, ExternalLink } from 'lucide-react';
import { MayaContext, MayaResponse, MayaConfidence, MayaAvatar, MayaOpportunityContext } from '@/lib/maya-engine';
import { getUserProfile, UserProfile } from '@/lib/user-store';
import Link from 'next/link';

// ─── Avatar image map ────────────────────────────────────────────────────────

const AVATAR_MAP: Record<MayaAvatar, string> = {
  smiling: '/maya-smiling.webp',
  wave: '/maya-wave.webp',
  thumbsup: '/maya-thumbsup.webp',
  sad: '/maya-sad.webp',
  looking: '/maya-looking.webp',
  shocked: '/maya-shocked.webp',
};

const CONFIDENCE_LABEL: Record<MayaConfidence, string> = {
  verified: '🟢 Official source verified',
  needs_info: '🟡 Needs your profile info',
  not_verified: '🔴 Not from official source',
};

// ─── Props ───────────────────────────────────────────────────────────────────

interface MayaPanelProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuestion?: string;
  pageContext: MayaContext['pageContext'];
  opportunity?: MayaOpportunityContext;
}

// ─── Message history item ────────────────────────────────────────────────────

interface ChatMessage {
  id: string;
  role: 'user' | 'maya';
  text: string;
  response?: MayaResponse;
}

// ─── Main component ──────────────────────────────────────────────────────────

export default function MayaPanel({ isOpen, onClose, initialQuestion, pageContext, opportunity }: MayaPanelProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState<MayaAvatar>('wave');
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setProfile(getUserProfile());
  }, [isOpen]);

  const sendQuestion = useCallback(async (question: string) => {
    if (!question.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: question,
    };
    setMessages(prev => [...prev, userMsg]);
    setLoading(true);
    setCurrentAvatar('looking');

    try {
      const context: MayaContext = {
        pageContext,
        question,
        opportunity,
        userProfile: profile || undefined,
      };

      const res = await fetch('/api/maya', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(context),
      });

      const mayaResponse: MayaResponse = await res.json();

      setCurrentAvatar(mayaResponse.avatar);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'maya',
        text: mayaResponse.message,
        response: mayaResponse,
      }]);
    } catch {
      setCurrentAvatar('looking');
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'maya',
        text: "I'm having a moment — please try again in a few seconds.",
        response: {
          message: "I'm having a moment — please try again in a few seconds.",
          confidence: 'not_verified',
          avatar: 'looking',
          quickActions: [],
          error: true,
        },
      }]);
    } finally {
      setLoading(false);
    }
  }, [loading, pageContext, opportunity, profile]);

  // Auto-send initial question when panel opens
  useEffect(() => {
    if (isOpen && initialQuestion && messages.length === 0) {
      sendQuestion(initialQuestion);
    } else if (isOpen && messages.length === 0) {
      setCurrentAvatar('wave');
    }
  }, [isOpen, initialQuestion, messages.length, sendQuestion]);

  // Focus input when panel opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 350);
    }
  }, [isOpen]);

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  // Reset when closed
  useEffect(() => {
    if (!isOpen) {
      setMessages([]);
      setInput('');
      setCurrentAvatar('wave');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = input.trim();
    setInput('');
    sendQuestion(q);
  };

  const handleActionChip = (action: MayaResponse['quickActions'][0]) => {
    if (action.action === 'view_official' && action.payload) {
      window.open(action.payload, '_blank', 'noopener noreferrer');
    } else if (action.action === 'complete_profile') {
      onClose();
      window.location.href = '/profile';
    } else if (action.action === 'navigate' && action.payload) {
      onClose();
      window.location.href = action.payload;
    } else if (action.action === 'view_similar') {
      onClose();
      window.location.href = '/nursing/jobs';
    } else {
      // For track / view_eligibility, treat as a follow-up question
      sendQuestion(action.label);
    }
  };

  const lastMayaMsg = messages.filter(m => m.role === 'maya').at(-1);
  const displayAvatar = loading ? 'looking' : currentAvatar;

  return (
    <div className="maya-overlay" onClick={e => { if (e.target === e.currentTarget) onClose(); }}>
      <div className="maya-drawer" role="dialog" aria-label="Ask Maya">
        <div className="maya-drawer-handle" />

        {/* Header */}
        <div className="maya-drawer-header">
          <img
            src={AVATAR_MAP[displayAvatar]}
            alt="Maya"
            className="maya-drawer-avatar"
          />
          <div className="maya-drawer-identity">
            <div className="maya-drawer-name">Maya</div>
            <div className="maya-drawer-role">Your SkillCase career guide</div>
          </div>
          <button className="maya-close-btn" onClick={onClose} aria-label="Close Maya">
            <X size={18} />
          </button>
        </div>

        {/* Greeting (no messages yet) */}
        {messages.length === 0 && !loading && (
          <div className="maya-message" style={{ color: 'var(--sc-ink-700)', paddingTop: 16 }}>
            {profile?.qualificationsList?.length
              ? `I can see your profile. Ask me anything about your career, eligibility, or upcoming exams.`
              : `I don't have your profile yet. You can still ask me questions — I'll tell you if I need more details from you.`
            }
          </div>
        )}

        {/* Message history */}
        {messages.map(msg => (
          <div key={msg.id}>
            {msg.role === 'user' ? (
              <div style={{
                margin: '12px 20px 0',
                background: 'var(--sc-navy-50)',
                borderRadius: 'var(--radius-lg)',
                padding: '10px 14px',
                fontSize: '0.88rem',
                fontFamily: 'var(--font-ui)',
                color: 'var(--sc-navy-900)',
                alignSelf: 'flex-end',
              }}>
                {msg.text}
              </div>
            ) : msg.response ? (
              <div>
                {/* Confidence badge */}
                <div className={`maya-confidence ${msg.response.confidence}`}>
                  {CONFIDENCE_LABEL[msg.response.confidence]}
                </div>

                {/* Message */}
                <div className="maya-message">{msg.response.message}</div>

                {/* Citation */}
                {msg.response.citation && (
                  <div className="maya-citation">
                    Source: {msg.response.citation.startsWith('http')
                      ? <a href={msg.response.citation} target="_blank" rel="noopener noreferrer">
                          Official Portal <ExternalLink size={10} style={{ display: 'inline', verticalAlign: 'middle' }} />
                        </a>
                      : msg.response.citation
                    }
                  </div>
                )}

                {/* Quick actions */}
                {msg.response.quickActions?.length > 0 && (
                  <div className="maya-quick-actions">
                    {msg.response.quickActions.map((action, i) => (
                      action.action === 'view_official' && action.payload ? (
                        <a
                          key={i}
                          href={action.payload}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`maya-action-chip ${i === 0 ? 'primary' : 'secondary'}`}
                        >
                          {action.label} <ExternalLink size={12} />
                        </a>
                      ) : (
                        <button
                          key={i}
                          className={`maya-action-chip ${i === 0 ? 'primary' : 'secondary'}`}
                          onClick={() => handleActionChip(action)}
                        >
                          {action.label}
                        </button>
                      )
                    ))}
                  </div>
                )}
              </div>
            ) : null}
          </div>
        ))}

        {/* Loading state */}
        {loading && (
          <div className="maya-loading">
            <div className="maya-dot" />
            <div className="maya-dot" />
            <div className="maya-dot" />
          </div>
        )}

        <div ref={messagesEndRef} />

        {/* Input */}
        <form onSubmit={handleSubmit} className="maya-input-row">
          <input
            ref={inputRef}
            className="maya-input"
            placeholder="Ask Maya anything about your career..."
            value={input}
            onChange={e => setInput(e.target.value)}
            disabled={loading}
          />
          <button
            type="submit"
            className="maya-send-btn"
            disabled={loading || !input.trim()}
            aria-label="Send"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
