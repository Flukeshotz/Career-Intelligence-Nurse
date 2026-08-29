'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Upload,
  Trash2,
  Calendar,
  Check,
  ArrowRight,
  Award,
  RefreshCw,
} from 'lucide-react';
import {
  UserProfile,
  getUserProfile,
  saveUserProfile,
  calculateProfileReadiness,
  calculateAge,
  getTrackedOpportunities,
} from '@/lib/user-store';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';

const NURSING_QUALIFICATIONS = [
  { code: 'bsc_nursing', name: 'B.Sc. Nursing', desc: '4-yr Degree' },
  { code: 'gnm', name: 'GNM Diploma', desc: '3.5-yr Diploma' },
  { code: 'post_basic', name: 'Post Basic B.Sc.', desc: 'Post-Diploma' },
  { code: 'msc', name: 'M.Sc. Nursing', desc: 'Postgraduate' },
];

const EXPERIENCE_BUCKETS = [
  { code: 'fresher', label: 'Fresher (0 yrs)', desc: 'New graduate' },
  { code: '0-2', label: 'Under 2 yrs', desc: 'Bedded clinical' },
  { code: '2-5', label: '2–5 yrs', desc: 'Staff nurse' },
  { code: '5+', label: '5+ yrs', desc: 'Charge / Senior' },
];

const NURSING_COUNCILS = [
  'Indian Nursing Council (INC)',
  'Karnataka Nursing Council (KNC)',
  'Maharashtra Nursing Council (MNC)',
  'Tamil Nadu Nurses Council (TNC)',
  'Kerala Nurses Council (KNMC)',
  'UP Nurses & Midwives Council (UPNC)',
  'Rajasthan Nursing Council (RNC)',
  'West Bengal Nursing Council (WBNC)',
  'Gujarat Nursing Council (GNC)',
  'Delhi Nursing Council (DNC)',
  'Other State Council',
];

const CATEGORIES = [
  { code: 'ur', label: 'General (UR)' },
  { code: 'obc', label: 'OBC' },
  { code: 'ews', label: 'EWS' },
  { code: 'sc', label: 'SC' },
  { code: 'st', label: 'ST' },
  { code: 'pwd', label: 'PwD' },
];

export default function ProfilePage() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);
  const [trackedCount, setTrackedCount] = useState(0);

  useEffect(() => {
    const loaded = getUserProfile();
    setProfile(
      loaded || {
        qualificationCode: 'bsc_nursing',
        experienceBucket: '0-2',
        hasRegistration: true,
        preference: 'both',
        citizenship: 'India',
        qualificationsList: [{ code: 'bsc_nursing', name: 'B.Sc. Nursing', isPrimary: true }],
      }
    );
    const tracked = getTrackedOpportunities();
    setTrackedCount(tracked.length);
  }, []);

  if (!profile) return null;

  const readiness = calculateProfileReadiness(profile);
  const age = calculateAge(profile.dob);

  const updateProfileField = (key: keyof UserProfile, val: any) => {
    const updated = { ...profile, [key]: val };
    setProfile(updated);
    saveUserProfile(updated);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  const handleClearProfile = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('skillcase_user_profile');
      window.location.reload();
    }
  };

  return (
    <div className="container mobile-safe-bottom" style={{ paddingTop: '20px' }}>
      {/* ── 1. Scannable Header & Resume Upload CTA ── */}
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
          <div>
            <h1 style={{ fontSize: '1.55rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              Your Career Profile
            </h1>
            <p style={{ fontSize: '0.86rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              Used to evaluate eligibility across 28 central, state, and hospital opportunities.
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsResumeModalOpen(true)}
            className="btn-navy"
            style={{ fontSize: '0.84rem' }}
          >
            <Upload size={14} />
            <span>Upload Resume (Auto-Fill)</span>
          </button>
        </div>
      </div>

      {/* ── 2. Prominent Readiness Indicator ── */}
      <div
        className="sc-card"
        style={{
          padding: '16px 20px',
          marginBottom: '20px',
          background: readiness.score >= 80 ? 'var(--sc-green-50)' : 'var(--sc-surface-card)',
          border: readiness.score >= 80 ? '1px solid #bbf7d0' : '1px solid var(--sc-line-200)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '10px',
        }}
      >
        <div>
          <div style={{ fontSize: '0.96rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
            🎯 {readiness.readyOpportunitiesCount} Opportunities Ready to Evaluate
          </div>
          <div style={{ fontSize: '0.80rem', color: 'var(--sc-ink-600)', marginTop: '1px' }}>
            {readiness.missingForGovt.length === 0
              ? '✓ Profile complete for all central & hospital eligibility checks.'
              : `Add ${readiness.missingForGovt.join(', ')} below to unlock exact age & state quota checks.`}
          </div>
        </div>

        <span
          style={{
            fontSize: '0.78rem',
            fontWeight: 800,
            padding: '4px 10px',
            borderRadius: 'var(--radius-pill)',
            background: readiness.score >= 80 ? 'var(--sc-green-600)' : 'var(--sc-navy-700)',
            color: 'var(--sc-white)',
          }}
        >
          {readiness.score}% Complete
        </span>
      </div>

      {savedSuccess && (
        <div style={{ background: 'var(--sc-green-50)', color: 'var(--sc-green-600)', border: '1px solid #bbf7d0', padding: '8px 14px', borderRadius: 'var(--radius-sm)', marginBottom: '16px', fontSize: '0.82rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <Check size={15} />
          <span>Profile changes saved securely.</span>
        </div>
      )}

      {/* ── Tracked Applications Gateway ── */}
      <Link
        href="/cycles"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 18px',
          borderRadius: 'var(--radius-md)',
          background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
          border: '1px solid #bbf7d0',
          textDecoration: 'none',
          marginBottom: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#16a34a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <RefreshCw size={18} />
          </div>
          <div>
            <div style={{ fontSize: '0.90rem', fontWeight: 800, color: '#166534' }}>
              My Tracked Applications ({trackedCount})
            </div>
            <div style={{ fontSize: '0.74rem', color: '#15803d' }}>
              View application deadlines, reminders &amp; admit card alerts
            </div>
          </div>
        </div>
        <ArrowRight size={16} color="#166534" />
      </Link>

      {/* ── 3. Ultra-Fast 3-Card Zero-Typing Matrix ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {/* Step 1: Qualification */}
        <div className="sc-card" style={{ padding: '18px 20px' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Step 1: Primary Nursing Degree / Diploma
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
            {NURSING_QUALIFICATIONS.map((q) => (
              <button
                key={q.code}
                type="button"
                onClick={() => updateProfileField('qualificationCode', q.code)}
                style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: profile.qualificationCode === q.code ? '2px solid var(--sc-navy-700)' : '1px solid var(--sc-line-200)',
                  background: profile.qualificationCode === q.code ? 'var(--sc-navy-50)' : 'var(--sc-white)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                  {q.name}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', marginTop: '1px' }}>
                  {q.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2: Clinical Hospital Experience */}
        <div className="sc-card" style={{ padding: '18px 20px' }}>
          <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '8px' }}>
            Step 2: Bedded Hospital Experience
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '8px' }}>
            {EXPERIENCE_BUCKETS.map((b) => (
              <button
                key={b.code}
                type="button"
                onClick={() => updateProfileField('experienceBucket', b.code)}
                style={{
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: profile.experienceBucket === b.code ? '2px solid var(--sc-navy-700)' : '1px solid var(--sc-line-200)',
                  background: profile.experienceBucket === b.code ? 'var(--sc-navy-50)' : 'var(--sc-white)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--sc-navy-900)' }}>
                  {b.label}
                </div>
                <div style={{ fontSize: '0.72rem', color: 'var(--sc-ink-600)', marginTop: '1px' }}>
                  {b.desc}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Registration & DOB */}
        <div className="desktop-grid-2col">
          {/* Council */}
          <div className="sc-card" style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Step 3: Nursing Council Registration
            </div>

            <div style={{ display: 'flex', gap: '6px', marginBottom: '10px' }}>
              <button
                type="button"
                onClick={() => updateProfileField('hasRegistration', true)}
                className={`pill-selector ${profile.hasRegistration === true ? 'active' : ''}`}
                style={{ fontSize: '0.80rem', padding: '6px 12px', minHeight: '34px' }}
              >
                ✓ Registered
              </button>
              <button
                type="button"
                onClick={() => updateProfileField('hasRegistration', false)}
                className={`pill-selector ${profile.hasRegistration === false ? 'active' : ''}`}
                style={{ fontSize: '0.80rem', padding: '6px 12px', minHeight: '34px' }}
              >
                ✕ Not Registered
              </button>
            </div>

            {profile.hasRegistration && (
              <select
                value={profile.registrationDetails?.councilName || ''}
                onChange={(e) =>
                  updateProfileField('registrationDetails', {
                    ...profile.registrationDetails,
                    councilName: e.target.value,
                    isRegistered: true,
                  })
                }
                style={{
                  width: '100%',
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--sc-line-300)',
                  fontSize: '0.84rem',
                  fontFamily: 'inherit',
                  background: 'var(--sc-white)',
                }}
              >
                <option value="">Select Council...</option>
                {NURSING_COUNCILS.map((c) => (
                  <option key={c} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            )}
          </div>

          {/* Age & Category */}
          <div className="sc-card" style={{ padding: '18px 20px' }}>
            <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-navy-700)', textTransform: 'uppercase', marginBottom: '8px' }}>
              Date of Birth & Category
            </div>

            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
              <input
                type="date"
                value={profile.dob || ''}
                onChange={(e) => updateProfileField('dob', e.target.value)}
                style={{
                  padding: '7px 10px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--sc-line-300)',
                  fontSize: '0.84rem',
                  fontFamily: 'inherit',
                }}
              />
              {age !== null && (
                <span style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--sc-navy-700)' }}>
                  {age} yrs old
                </span>
              )}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.code}
                  type="button"
                  onClick={() => updateProfileField('category', cat.code)}
                  className={`pill-selector ${profile.category === cat.code ? 'active' : ''}`}
                  style={{ fontSize: '0.74rem', padding: '4px 8px', minHeight: '30px' }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Data Erasure & Privacy */}
        <div
          style={{
            padding: '14px 18px',
            borderRadius: 'var(--radius-sm)',
            background: 'var(--sc-surface-secondary)',
            border: '1px solid var(--sc-line-200)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '10px',
          }}
        >
          <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)' }}>
            🔒 Profile stored on your device only for instant eligibility checks.
          </div>

          <button
            type="button"
            onClick={handleClearProfile}
            style={{
              color: 'var(--sc-red-500)',
              fontSize: '0.78rem',
              fontWeight: 700,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: 'var(--radius-xs)',
              border: '1px solid rgba(236, 70, 58, 0.25)',
              background: 'var(--sc-white)',
            }}
          >
            <Trash2 size={12} />
            <span>Clear Saved Data</span>
          </button>
        </div>
      </div>

      {/* Resume Upload Modal */}
      <ResumeUploadModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        onProfileConfirmed={(newProfile) => {
          setProfile(newProfile);
          setIsResumeModalOpen(false);
        }}
      />
    </div>
  );
}
