'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, Upload } from 'lucide-react';
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
import Link from 'next/link';

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

  const isEligible = result.confidence === 'likely';
  const isNotEligible = result.confidence === 'not_eligible';
  const tone = isEligible ? 'ok' : isNotEligible ? 'no' : 'unk';

  const standaloneReqs = result.requirements.filter((r) => !r.pathwayId);
  const pathwayEvaluations = result.pathways || [];

  const title = isEligible
    ? 'You meet the rules we can check'
    : isNotEligible
    ? 'Not eligible on your current details'
    : requirements.length === 0
    ? 'Eligibility rules not recorded yet'
    : result.missingFields.length > 0
    ? `Add ${result.missingFields.length} detail${result.missingFields.length > 1 ? 's' : ''} to check`
    : 'Check the notice to confirm';
  const sub = isEligible
    ? 'Based on your Career Passport. Always confirm in the official notice before applying.'
    : isNotEligible
    ? 'Based on your Career Passport. If something has changed, update it and this re-checks instantly.'
    : requirements.length === 0
    ? 'Check the official notification before applying.'
    : 'Tell us a little about yourself — nothing is marked eligible on a guess.';

  return (
    <div className={`el-box el-box--${tone}`}>
      <div className="el-head">
        <span className="el-icon" aria-hidden="true">
          {isEligible ? <CheckCircle2 size={20} /> : isNotEligible ? <XCircle size={20} /> : <HelpCircle size={20} />}
        </span>
        <div>
          <b className="el-title">{title}</b>
          <p className="el-sub">{sub}</p>
        </div>
      </div>

      {pathwayEvaluations.length > 0 && (
        <div className="el-group">
          <div className="el-label">{pathwayEvaluations.length > 1 ? 'You need one of these routes' : 'Qualification route'}</div>
          <div className="el-routes">
            {pathwayEvaluations.map((path, i) => {
              const quals = path.requirements.filter((r) => r.kind === 'qualification');
              const others = path.requirements.filter((r) => r.kind !== 'qualification');
              const qualStatus = quals.some((r) => r.status === 'met') ? 'met' : quals.every((r) => r.status === 'not_met') ? 'not_met' : 'unknown';
              const items: { text: React.ReactNode; status: string }[] = [
                ...(quals.length
                  ? [{
                      status: qualStatus,
                      text: quals.map((r, k) => (
                        <React.Fragment key={k}>
                          {k > 0 && <span className="el-or">or</span>}
                          {plain(r)}
                        </React.Fragment>
                      )),
                    }]
                  : []),
                ...others.map((r) => ({ text: plain(r), status: r.status })),
              ];
              return (
                <div key={path.pathwayId} className={`el-route el-route--${path.status}`}>
                  <div className="el-route-head">
                    <span>Route {i + 1}</span>
                    <StatusTag status={path.status} />
                  </div>
                  <ul className="el-list">
                    {items.map((it, k) => (
                      <li key={k} className={`el-item el-item--${it.status}`}>
                        <StatusIcon status={it.status} />
                        <span>{it.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {standaloneReqs.length > 0 && (
        <div className="el-group">
          <div className="el-label">{pathwayEvaluations.length > 0 ? 'Also required' : 'Requirements'}</div>
          <ul className="el-list el-list--rows">
            {standaloneReqs.map((req, rIdx) => (
              <li key={rIdx} className={`el-item el-item--${req.status}`}>
                <StatusIcon status={req.status} />
                <span>{plain(req)}</span>
                <StatusTag status={req.status} />
              </li>
            ))}
          </ul>
        </div>
      )}

      {result.missingFields.length > 0 && (result.missingFields.includes('qualification') || result.missingFields.includes('registration')) && (
        <div className="el-quick">
          <span>Quick answer:</span>
          {result.missingFields.includes('qualification') && (
            <>
              <button type="button" className="el-chip" onClick={() => handleQuickQualSelect('bsc_nursing')}>I have B.Sc. Nursing</button>
              <button type="button" className="el-chip" onClick={() => handleQuickQualSelect('gnm')}>I have GNM</button>
            </>
          )}
          {result.missingFields.includes('registration') && (
            <button type="button" className="el-chip" onClick={() => handleQuickRegSelect(true)}>I am registered with a nursing council</button>
          )}
        </div>
      )}

      <div className="el-foot">
        <Link href="/profile" className="el-link">
          {profile ? 'Update your Career Passport' : 'Fill your Career Passport'} <ArrowRight size={15} aria-hidden="true" />
        </Link>
        <button type="button" className="el-link el-link--muted" onClick={() => setIsResumeModalOpen(true)}>
          <Upload size={14} aria-hidden="true" /> Fill from résumé
        </button>
      </div>

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

/** Plain-English rule text, without the internal "(Path 1)" style route markers. */
function plain(r: { simpleText?: string; rawText?: string; detail: string }) {
  return (r.simpleText || r.rawText || r.detail || '').replace(/\s*\((?:applicable for [^)]*)?Path \d\)\s*$/i, '').replace(/\s*\(applicable for[^)]*\)\s*$/i, '');
}

function StatusIcon({ status }: { status: string }) {
  if (status === 'met') return <CheckCircle2 size={17} className="el-ic" aria-hidden="true" />;
  if (status === 'not_met') return <XCircle size={17} className="el-ic" aria-hidden="true" />;
  return <HelpCircle size={17} className="el-ic" aria-hidden="true" />;
}

function StatusTag({ status }: { status: string }) {
  const text = status === 'met' ? 'Meets' : status === 'not_met' ? 'Does not meet' : 'Need details';
  return <em className={`el-tag el-tag--${status}`}>{text}</em>;
}
