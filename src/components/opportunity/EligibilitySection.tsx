'use client';

import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ArrowRight,
  Upload,
  Calendar,
  AlertCircle,
  FileText,
  Clock,
  Check,
} from 'lucide-react';
import {
  evaluateEligibility,
  OpportunityRequirementItem,
  EligibilityResult,
} from '@/lib/eligibility';
import {
  getUserProfile,
  saveUserProfile,
  UserProfile,
} from '@/lib/user-store';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';
import { analytics } from '@/lib/posthog';

interface EligibilitySectionProps {
  opportunityId: string;
  opportunityTitle?: string;
  requirements: OpportunityRequirementItem[];
  officialNotificationUrl?: string;
}

export function EligibilitySection({
  opportunityId,
  opportunityTitle,
  requirements,
  officialNotificationUrl,
}: EligibilitySectionProps) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [result, setResult] = useState<EligibilityResult | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [inlineDob, setInlineDob] = useState('');

  useEffect(() => {
    const p = getUserProfile();
    setProfile(p);
    const evalResult = evaluateEligibility(requirements, p);
    setResult(evalResult);

    analytics.track('eligibility_check', {
      opportunity_id: opportunityId,
      result: evalResult.confidence,
      known_count: evalResult.requirements.filter((r) => r.status !== 'unknown').length,
      unknown_count: evalResult.requirements.filter((r) => r.status === 'unknown').length,
      unmet_count: evalResult.requirements.filter((r) => r.status === 'not_met').length,
      was_profile_complete_enough: evalResult.missingFields.length === 0,
    });
  }, [requirements, opportunityId]);

  if (!result) return null;

  const handleQuickQualSelect = (qualCode: string) => {
    const updated = saveUserProfile({ qualificationCode: qualCode });
    setProfile(updated);
    setResult(evaluateEligibility(requirements, updated));
  };

  const handleQuickRegSelect = (hasReg: boolean) => {
    const updated = saveUserProfile({ hasRegistration: hasReg });
    setProfile(updated);
    setResult(evaluateEligibility(requirements, updated));
  };

  const handleQuickDobSave = (dobVal: string) => {
    if (!dobVal) return;
    const updated = saveUserProfile({ dob: dobVal });
    setProfile(updated);
    setResult(evaluateEligibility(requirements, updated));
  };

  const isEligible = result.confidence === 'likely';
  const isNotEligible = result.confidence === 'not_eligible';
  const isUnknown = result.confidence === 'check_requirements';

  const standaloneReqs = result.requirements.filter((r) => !r.pathwayId);
  const pathwayEvaluations = result.pathways || [];

  return (
    <div
      className="sc-card"
      style={{
        padding: '20px',
        marginBottom: '20px',
        borderLeft: isEligible
          ? '4px solid var(--sc-green-600)'
          : isNotEligible
          ? '4px solid var(--sc-red-500)'
          : '4px solid var(--sc-yellow-500)',
      }}
    >
      {/* ── 1. High-Contrast Verdict Banner ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', marginBottom: '16px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {isEligible ? (
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--sc-green-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CheckCircle2 size={20} color="var(--sc-green-600)" />
            </div>
          ) : isNotEligible ? (
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--sc-red-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <XCircle size={20} color="var(--sc-red-500)" />
            </div>
          ) : (
            <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--sc-yellow-50)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <HelpCircle size={20} color="#92400e" />
            </div>
          )}

          <div>
            <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              {isEligible
                ? 'You Appear Eligible'
                : isNotEligible
                ? 'Not Eligible for This Cycle'
                : 'Check Your Eligibility'}
            </div>
            <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)' }}>
              {isEligible
                ? 'All mandatory requirements satisfied by your profile'
                : isNotEligible
                ? 'One or more mandatory requirements not satisfied'
                : '1-tap below to check requirements against your profile'}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsResumeModalOpen(true)}
          className="btn-secondary"
          style={{ fontSize: '0.78rem', padding: '6px 12px', minHeight: '34px' }}
        >
          <Upload size={13} />
          <span>Upload Resume</span>
        </button>
      </div>

      {/* ── 2. Compound Pathways (Side-by-Side Scannable Cards) ── */}
      {pathwayEvaluations.length > 0 && (
        <div style={{ marginBottom: '16px' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Qualifying Pathways (Either Pathway Valid)
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {pathwayEvaluations.map((path) => {
              const isPathMet = path.status === 'met';
              const isPathNotMet = path.status === 'not_met';
              const isBscPath = path.pathwayId.includes('bsc');

              return (
                <div
                  key={path.pathwayId}
                  style={{
                    background: isPathMet ? 'var(--sc-green-50)' : 'var(--sc-surface-secondary)',
                    padding: '12px',
                    borderRadius: 'var(--radius-sm)',
                    border: isPathMet ? '1px solid #bbf7d0' : '1px solid var(--sc-line-200)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
                    <strong style={{ fontSize: '0.86rem', color: 'var(--sc-navy-900)' }}>
                      {isBscPath ? 'Pathway 1: B.Sc. Degree' : 'Pathway 2: GNM Diploma'}
                    </strong>
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 800,
                        padding: '2px 6px',
                        borderRadius: 'var(--radius-pill)',
                        background: isPathMet ? 'var(--sc-green-600)' : isPathNotMet ? 'var(--sc-red-500)' : '#fde68a',
                        color: isPathMet || isPathNotMet ? 'var(--sc-white)' : '#92400e',
                      }}
                    >
                      {isPathMet ? '✓ Met' : isPathNotMet ? '✕ Incomplete' : 'Need info'}
                    </span>
                  </div>

                  <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-700)', lineHeight: 1.4 }}>
                    {isBscPath ? 'B.Sc. Nursing (0 yrs exp required)' : 'GNM Diploma + 2 Yrs hospital exp'}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ── 3. Standalone Requirements (Concise 1-Line Checklist) ── */}
      {standaloneReqs.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '14px' }}>
          {standaloneReqs.map((req, rIdx) => (
            <div
              key={rIdx}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 12px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--sc-surface-secondary)',
                border: '1px solid var(--sc-line-100)',
                fontSize: '0.82rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                {req.status === 'met' ? (
                  <CheckCircle2 size={15} color="var(--sc-green-600)" style={{ flexShrink: 0 }} />
                ) : req.status === 'not_met' ? (
                  <XCircle size={15} color="var(--sc-red-500)" style={{ flexShrink: 0 }} />
                ) : (
                  <HelpCircle size={15} color="#92400e" style={{ flexShrink: 0 }} />
                )}
                <span style={{ color: 'var(--sc-ink-900)', fontWeight: 600 }}>
                  {req.rawText || req.kind}
                </span>
              </div>

              <span
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  color: req.status === 'met' ? 'var(--sc-green-600)' : req.status === 'not_met' ? 'var(--sc-red-500)' : '#92400e',
                }}
              >
                {req.status === 'met' ? '✓ Satisfied' : req.status === 'not_met' ? '✕ Missing' : 'Unchecked'}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* ── 4. 1-Tap Missing Field Selectors ── */}
      {result.missingFields.length > 0 && (
        <div style={{ background: 'var(--sc-yellow-50)', border: '1px solid #fde68a', borderRadius: 'var(--radius-sm)', padding: '12px', marginTop: '10px' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#92400e', marginBottom: '6px' }}>
            ⚡ 1-Tap to Check:
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
            {result.missingFields.includes('qualification') && (
              <>
                <button
                  type="button"
                  onClick={() => handleQuickQualSelect('bsc_nursing')}
                  className={`pill-selector ${profile?.qualificationCode === 'bsc_nursing' ? 'active' : ''}`}
                  style={{ fontSize: '0.76rem', padding: '4px 8px', minHeight: '32px' }}
                >
                  I have B.Sc. Nursing
                </button>
                <button
                  type="button"
                  onClick={() => handleQuickQualSelect('gnm')}
                  className={`pill-selector ${profile?.qualificationCode === 'gnm' ? 'active' : ''}`}
                  style={{ fontSize: '0.76rem', padding: '4px 8px', minHeight: '32px' }}
                >
                  I have GNM Diploma
                </button>
              </>
            )}

            {result.missingFields.includes('registration') && (
              <button
                type="button"
                onClick={() => handleQuickRegSelect(true)}
                className={`pill-selector ${profile?.hasRegistration ? 'active' : ''}`}
                style={{ fontSize: '0.76rem', padding: '4px 8px', minHeight: '32px' }}
              >
                ✓ Registered with Nursing Council
              </button>
            )}
          </div>
        </div>
      )}

      {/* Resume Upload Modal */}
      <ResumeUploadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onProfileConfirmed={(newProfile) => {
          setProfile(newProfile);
          setResult(evaluateEligibility(requirements, newProfile));
          setIsResumeModalOpen(false);
        }}
      />
    </div>
  );
}
