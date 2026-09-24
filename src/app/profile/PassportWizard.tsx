'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, GraduationCap, Hospital, BadgeCheck, CalendarDays, MapPin, ClipboardCheck, Upload, Trash2, Pencil } from 'lucide-react';
import { UserProfile, getUserProfile, saveUserProfile, calculateProfileReadiness, calculateAge, getTrackedOpportunities } from '@/lib/user-store';
import { ResumeUploadModal } from '@/components/profile/ResumeUploadModal';

/**
 * Career Passport — one question per screen. Every answer is saved the moment it is given (on this
 * device only), single-choice answers move on by themselves, and returning users open on Review.
 * Writes exactly the fields the eligibility checker reads: qualificationCode, experienceBucket,
 * hasRegistration + registrationDetails, dob, category, state + domicileState.
 */

const QUALIFICATIONS = [
  { code: 'bsc_nursing', name: 'B.Sc. Nursing', desc: '4-year degree' },
  { code: 'gnm', name: 'GNM', desc: 'Diploma in General Nursing & Midwifery' },
  { code: 'post_basic', name: 'Post Basic B.Sc. Nursing', desc: 'Degree after GNM' },
  { code: 'msc', name: 'M.Sc. Nursing', desc: 'Postgraduate' },
];

const EXPERIENCE = [
  { code: 'fresher', label: 'Fresher', desc: 'No work experience yet' },
  { code: '0-2', label: 'Under 2 years', desc: 'In a hospital or clinical setting' },
  { code: '2-5', label: '2 to 5 years', desc: 'In a hospital or clinical setting' },
  { code: '5+', label: 'More than 5 years', desc: 'In a hospital or clinical setting' },
];

const COUNCILS = [
  'Indian Nursing Council (INC)',
  'Andhra Pradesh Nurses & Midwives Council',
  'Delhi Nursing Council',
  'Gujarat Nursing Council',
  'Haryana Nurses Registration Council',
  'Karnataka Nursing Council',
  'Kerala Nurses & Midwives Council',
  'Madhya Pradesh Nurses Registration Council',
  'Maharashtra Nursing Council',
  'Odisha Nurses & Midwives Council',
  'Rajasthan Nursing Council',
  'Tamil Nadu Nurses & Midwives Council',
  'Uttar Pradesh Nurses & Midwives Council',
  'Uttarakhand Nurses & Midwives Council',
  'West Bengal Nursing Council',
  'Other State Council',
];

const CATEGORIES = [
  { code: 'ur', label: 'General (UR)' },
  { code: 'obc', label: 'OBC' },
  { code: 'ews', label: 'EWS' },
  { code: 'sc', label: 'SC' },
  { code: 'st', label: 'ST' },
  { code: 'pwd', label: 'Person with disability' },
] as const;

const STATES = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala',
  'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu', 'Delhi', 'Jammu and Kashmir',
  'Ladakh', 'Lakshadweep', 'Puducherry',
];

type StepId = 'qualification' | 'experience' | 'registration' | 'birth' | 'state' | 'review';
const STEPS: Array<{ id: StepId; label: string; Icon: typeof GraduationCap }> = [
  { id: 'qualification', label: 'Qualification', Icon: GraduationCap },
  { id: 'experience', label: 'Experience', Icon: Hospital },
  { id: 'registration', label: 'Registration', Icon: BadgeCheck },
  { id: 'birth', label: 'Age & category', Icon: CalendarDays },
  { id: 'state', label: 'Home state', Icon: MapPin },
  { id: 'review', label: 'Review', Icon: ClipboardCheck },
];

const nameOf = (list: ReadonlyArray<{ code: string; name?: string; label?: string }>, code?: string) => {
  const hit = list.find((x) => x.code === code);
  return hit ? hit.name ?? hit.label ?? '' : '';
};

export function PassportWizard() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [step, setStep] = useState(0);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [tracked, setTracked] = useState(0);
  const [savedPulse, setSavedPulse] = useState(false);
  const topRef = useRef<HTMLDivElement>(null);
  const advanceTimer = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const loaded = getUserProfile();
    // New visitors start empty — nothing is pre-selected on their behalf.
    const p = loaded || { citizenship: 'India', qualificationsList: [] };
    setProfile(p);
    setTracked(getTrackedOpportunities().length);
    // Returning with a complete profile? Open on Review.
    if (loaded && calculateProfileReadiness(loaded).isComplete) setStep(STEPS.length - 1);
    return () => clearTimeout(advanceTimer.current);
  }, []);

  if (!profile) return <div className="pw-shell pw-loading" aria-busy="true" />;

  const readiness = calculateProfileReadiness(profile);
  const age = calculateAge(profile.dob);
  const current = STEPS[step];

  const save = (patch: Partial<UserProfile>) => {
    const next = { ...profile, ...patch };
    setProfile(next);
    saveUserProfile(next);
    setSavedPulse(true);
    setTimeout(() => setSavedPulse(false), 1200);
  };

  const go = (i: number) => {
    clearTimeout(advanceTimer.current);
    setStep(Math.max(0, Math.min(STEPS.length - 1, i)));
    topRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  /** Choose-and-continue: a short pause so the selection is seen before moving on. */
  const chooseThenNext = (patch: Partial<UserProfile>) => {
    save(patch);
    clearTimeout(advanceTimer.current);
    advanceTimer.current = setTimeout(() => go(step + 1), 350);
  };

  const answered: Record<StepId, boolean> = {
    qualification: !!profile.qualificationCode,
    experience: !!profile.experienceBucket,
    registration: profile.hasRegistration != null,
    birth: !!profile.dob && !!profile.category,
    state: !!profile.state,
    review: readiness.isComplete,
  };

  return (
    <div className="pw-shell" ref={topRef}>
      {/* ── Progress ── */}
      <div className="pw-progress">
        <div className="pw-progress-head">
          <span>
            {current.id === 'review' ? 'Review' : `Step ${step + 1} of ${STEPS.length - 1}`}
            {savedPulse && (
              <em className="pw-saved">
                <Check size={13} /> Saved
              </em>
            )}
          </span>
          <b>{readiness.score}% complete</b>
        </div>
        <div className="pw-steps" role="tablist" aria-label="Career Passport steps">
          {STEPS.map((s, i) => (
            <button
              key={s.id}
              type="button"
              role="tab"
              aria-selected={i === step}
              aria-label={`${s.label}${answered[s.id] ? ' — answered' : ''}`}
              className={`pw-step${i === step ? ' is-current' : ''}${answered[s.id] ? ' is-done' : ''}`}
              onClick={() => go(i)}
            >
              <span className="pw-step-dot">{answered[s.id] && i !== step ? <Check size={14} /> : <s.Icon size={15} />}</span>
              <span className="pw-step-label">{s.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* ── Question ── */}
      <section className="pw-card" aria-live="polite">
        {current.id === 'qualification' && (
          <>
            <h2>What is your highest nursing qualification?</h2>
            <p className="pw-help">Exams accept different qualifications — this is the first thing every guide checks.</p>
            <div className="pw-options">
              {QUALIFICATIONS.map((q) => (
                <button key={q.code} type="button" className={`pw-option${profile.qualificationCode === q.code ? ' is-selected' : ''}`} aria-pressed={profile.qualificationCode === q.code} onClick={() => chooseThenNext({ qualificationCode: q.code, qualificationsList: [{ code: q.code, name: q.name, isPrimary: true }] })}>
                  <span>
                    <b>{q.name}</b>
                    <small>{q.desc}</small>
                  </span>
                  <span className="pw-radio" aria-hidden="true" />
                </button>
              ))}
            </div>
            <button type="button" className="pw-resume" onClick={() => setResumeOpen(true)}>
              <Upload size={16} /> Or fill this in from your résumé
            </button>
          </>
        )}

        {current.id === 'experience' && (
          <>
            <h2>How much nursing work experience do you have?</h2>
            <p className="pw-help">Some routes need experience — for example GNM holders applying to NORCET or PGIMER.</p>
            <div className="pw-options">
              {EXPERIENCE.map((x) => (
                <button key={x.code} type="button" className={`pw-option${profile.experienceBucket === x.code ? ' is-selected' : ''}`} aria-pressed={profile.experienceBucket === x.code} onClick={() => chooseThenNext({ experienceBucket: x.code })}>
                  <span>
                    <b>{x.label}</b>
                    <small>{x.desc}</small>
                  </span>
                  <span className="pw-radio" aria-hidden="true" />
                </button>
              ))}
            </div>
          </>
        )}

        {current.id === 'registration' && (
          <>
            <h2>Are you registered with a nursing council?</h2>
            <p className="pw-help">Most recruitments require registration with the Indian Nursing Council or a State Nursing Council.</p>
            <div className="pw-options pw-options--two">
              <button type="button" className={`pw-option${profile.hasRegistration === true ? ' is-selected' : ''}`} aria-pressed={profile.hasRegistration === true} onClick={() => save({ hasRegistration: true, registrationDetails: { ...profile.registrationDetails, isRegistered: true } })}>
                <span>
                  <b>Yes, I am registered</b>
                </span>
                <span className="pw-radio" aria-hidden="true" />
              </button>
              <button type="button" className={`pw-option${profile.hasRegistration === false ? ' is-selected' : ''}`} aria-pressed={profile.hasRegistration === false} onClick={() => chooseThenNext({ hasRegistration: false, registrationDetails: { ...profile.registrationDetails, isRegistered: false } })}>
                <span>
                  <b>Not yet</b>
                </span>
                <span className="pw-radio" aria-hidden="true" />
              </button>
            </div>
            {profile.hasRegistration === true && (
              <label className="pw-field">
                <span>Which council? (optional)</span>
                <select value={profile.registrationDetails?.councilName || ''} onChange={(e) => save({ registrationDetails: { ...profile.registrationDetails, isRegistered: true, councilName: e.target.value } })}>
                  <option value="">Choose your council</option>
                  {profile.registrationDetails?.councilName && !COUNCILS.includes(profile.registrationDetails.councilName) && (
                    <option value={profile.registrationDetails.councilName}>{profile.registrationDetails.councilName}</option>
                  )}
                  {COUNCILS.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </>
        )}

        {current.id === 'birth' && (
          <>
            <h2>Your date of birth and category</h2>
            <p className="pw-help">Age limits are checked against each notice&apos;s cut-off date. Your category decides the age relaxation and reserved posts you can apply for.</p>
            <label className="pw-field">
              <span>Date of birth</span>
              <input type="date" value={profile.dob || ''} max={new Date().toISOString().slice(0, 10)} onChange={(e) => save({ dob: e.target.value })} />
              {age !== null && <em className="pw-age">You are {age} years old today.</em>}
            </label>
            <div className="pw-field">
              <span>Category</span>
              <div className="pw-chips">
                {CATEGORIES.map((c) => (
                  <button key={c.code} type="button" className={profile.category === c.code ? 'is-selected' : undefined} aria-pressed={profile.category === c.code} onClick={() => save({ category: c.code })}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {current.id === 'state' && (
          <>
            <h2>Which state are you from?</h2>
            <p className="pw-help">Some state recruitments are only for residents — Andhra Pradesh, for example.</p>
            <label className="pw-field">
              <span>Home state (domicile)</span>
              <select value={profile.state || ''} onChange={(e) => save({ state: e.target.value || undefined, domicileState: e.target.value || undefined })}>
                <option value="">Choose your state</option>
                {STATES.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </label>
          </>
        )}

        {current.id === 'review' && (
          <>
            <h2>{readiness.isComplete ? 'Your Career Passport is ready' : 'Almost there'}</h2>
            <p className="pw-help">
              {readiness.isComplete
                ? 'Every exam guide now checks its rules against these details. Anything a notice asks for that isn’t here is shown as “check the notice” — never as eligible.'
                : `Still needed: ${readiness.missingForGovt.join(', ')}.`}
            </p>
            <dl className="pw-review">
              {[
                ['Qualification', nameOf(QUALIFICATIONS, profile.qualificationCode), 0],
                ['Experience', nameOf(EXPERIENCE, profile.experienceBucket), 1],
                ['Council registration', profile.hasRegistration == null ? '' : profile.hasRegistration ? profile.registrationDetails?.councilName || 'Registered' : 'Not yet registered', 2],
                ['Date of birth', profile.dob ? `${new Date(profile.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}${age !== null ? ` · ${age} yrs` : ''}` : '', 3],
                ['Category', nameOf(CATEGORIES, profile.category), 3],
                ['Home state', profile.state || '', 4],
              ].map(([label, value, at]) => (
                <div key={label as string} className="pw-review-row">
                  <dt>{label}</dt>
                  <dd className={value ? undefined : 'is-missing'}>{value || 'Not added'}</dd>
                  <button type="button" onClick={() => go(at as number)} aria-label={`Edit ${label}`}>
                    <Pencil size={15} />
                  </button>
                </div>
              ))}
            </dl>
            <div className="pw-review-actions">
              <Link href="/nursing/exams" className="pw-primary">
                See exams you can apply for <ArrowRight size={17} />
              </Link>
              <Link href="/cycles" className="pw-secondary">
                My exams ({tracked})
              </Link>
            </div>
            <div className="pw-privacy">
              <span>Saved on this device only — not stored on our servers.</span>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm('Clear your Career Passport from this device?')) {
                    localStorage.removeItem('skillcase_user_profile');
                    window.location.reload();
                  }
                }}
              >
                <Trash2 size={14} /> Clear
              </button>
            </div>
          </>
        )}
      </section>

      {/* ── Navigation ── */}
      {current.id !== 'review' && (
        <div className="pw-nav">
          <button type="button" className="pw-back" onClick={() => go(step - 1)} disabled={step === 0}>
            <ArrowLeft size={17} /> Back
          </button>
          <button type="button" className="pw-next" onClick={() => go(step + 1)}>
            {answered[current.id] ? 'Continue' : 'Skip for now'} <ArrowRight size={17} />
          </button>
        </div>
      )}

      <ResumeUploadModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
        onProfileConfirmed={(p) => {
          setProfile(p);
          setResumeOpen(false);
          go(1);
        }}
      />
    </div>
  );
}
