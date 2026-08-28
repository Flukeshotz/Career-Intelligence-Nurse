'use client';

import React, { useState } from 'react';
import { Upload, CheckCircle2, AlertCircle, X, FileText, ArrowRight, ShieldCheck, RefreshCw, Check } from 'lucide-react';
import { parseNursingResumeText, ParsedResumeResult } from '@/lib/resume-parser';
import { UserProfile, saveUserProfile, getUserProfile } from '@/lib/user-store';
import { analytics } from '@/lib/posthog';

interface ResumeUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: (updatedProfile: UserProfile) => void;
  onProfileConfirmed?: (updatedProfile: UserProfile) => void;
}

export function ResumeUploadModal({ isOpen, onClose, onSuccess, onProfileConfirmed }: ResumeUploadModalProps) {
  const [step, setStep] = useState<'upload' | 'parsing' | 'review'>('upload');
  const [parseResult, setParseResult] = useState<ParsedResumeResult | null>(null);
  const [editableProfile, setEditableProfile] = useState<Partial<UserProfile>>({});
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    processFile(file);
  };

  const processFile = (file: File) => {
    setStep('parsing');
    analytics.track('resume_upload', {
      file_type: file.type || file.name.split('.').pop(),
      file_size_kb: Math.round(file.size / 1024),
      entry_point: 'career_passport_modal',
    });

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      setTimeout(() => {
        const result = parseNursingResumeText(text, file.name);
        setParseResult(result);
        setEditableProfile(result.extractedProfile);
        setStep('review');

        analytics.track('resume_parse_complete', {
          parse_success: result.success,
          qualifications_count: result.extractionSummary.qualificationsFound.length,
          experience_count: result.extractionSummary.experienceFound.length,
          has_registration: !!result.extractionSummary.registrationFound,
        });
      }, 700);
    };

    reader.onerror = () => {
      runDemoParsing(file.name);
    };

    reader.readAsText(file);
  };

  const runDemoParsing = (fileName: string) => {
    setStep('parsing');
    setTimeout(() => {
      const demoText = `
        Pooja Sharma
        DOB: 15/06/1998
        B.Sc. Nursing from Rajiv Gandhi University of Health Sciences, 2021
        Registered Nurse with Karnataka State Nursing Council KNC/RN/88492
        Staff Nurse at Manipal Hospital Bangalore, Medical ICU, Jan 2022 to Present
        Languages: English, Hindi, Kannada
        Skills: BLS, ACLS, Ventilator Management, IV Cannulation
      `;
      const result = parseNursingResumeText(demoText, fileName);
      setParseResult(result);
      setEditableProfile(result.extractedProfile);
      setStep('review');
    }, 700);
  };

  const handleConfirmAndSave = () => {
    const existing = getUserProfile() || {};
    
    // Tag confirmed provenance
    const updatedProvenance = { ...(editableProfile.fieldProvenance || {}) };
    Object.keys(updatedProvenance).forEach((key) => {
      updatedProvenance[key] = {
        ...updatedProvenance[key],
        status: 'confirmed',
        confirmedAt: new Date().toISOString(),
      };
    });

    const saved = saveUserProfile({
      ...existing,
      ...editableProfile,
      fieldProvenance: updatedProvenance,
    });

    analytics.track('profile_confirmed', {
      source: 'resume_parse_modal',
      fields_confirmed: Object.keys(updatedProvenance).length,
    });

    if (onProfileConfirmed) {
      onProfileConfirmed(saved);
    } else if (onSuccess) {
      onSuccess(saved);
    }
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 40, 86, 0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: 'var(--sc-white)',
          borderRadius: 'var(--radius-xl)',
          maxWidth: '560px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: 'var(--shadow-modal)',
          border: '1px solid var(--sc-line-200)',
          position: 'relative',
        }}
      >
        {/* Modal Header */}
        <div
          style={{
            padding: '20px 24px',
            borderBottom: '1px solid var(--sc-line-100)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              {step === 'upload' ? 'Upload Nursing Resume' : step === 'parsing' ? 'Reading Resume' : 'Review Extracted Details'}
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
              {step === 'upload'
                ? 'Extract qualification, clinical tenure, and council details in seconds.'
                : step === 'parsing'
                ? 'Extracting clinical credentials and experience history...'
                : 'Confirm extracted information to make it authoritative.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              padding: '6px',
              borderRadius: '50%',
              color: 'var(--sc-ink-600)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          {/* STEP 1: Upload Dropzone */}
          {step === 'upload' && (
            <div>
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={(e) => {
                  e.preventDefault();
                  setIsDragging(false);
                  const file = e.dataTransfer.files?.[0];
                  if (file) processFile(file);
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '36px 20px',
                  border: isDragging ? '2px dashed var(--sc-navy-700)' : '2px dashed var(--sc-line-300)',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: isDragging ? 'var(--sc-navy-50)' : 'var(--sc-surface-secondary)',
                  cursor: 'pointer',
                  textAlign: 'center',
                  transition: 'all 0.15s ease',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--sc-navy-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '12px',
                    color: 'var(--sc-navy-700)',
                  }}
                >
                  <Upload size={22} />
                </div>
                <div style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--sc-navy-900)', marginBottom: '4px' }}>
                  Tap to upload or drag & drop resume
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--sc-ink-600)' }}>
                  Supports PDF, DOCX, TXT (Up to 10MB)
                </div>
                <input
                  type="file"
                  accept=".pdf,.docx,.doc,.txt"
                  onChange={handleFileUpload}
                  style={{ display: 'none' }}
                />
              </label>

              {/* Sample Profile Demo Option */}
              <div style={{ marginTop: '18px', textAlign: 'center' }}>
                <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)', marginBottom: '8px' }}>
                  Or try with an example verified profile:
                </div>
                <button
                  type="button"
                  onClick={() => runDemoParsing('sample-bsc-icu-nurse.pdf')}
                  className="btn-secondary"
                  style={{ fontSize: '0.82rem', padding: '8px 14px' }}
                >
                  <span>Try with Sample B.Sc. ICU Nurse Resume</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: Parsing Progress */}
          {step === 'parsing' && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 20px', textAlign: 'center' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--sc-navy-50)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '16px',
                  color: 'var(--sc-navy-700)',
                  animation: 'spin 1.5s linear infinite',
                }}
              >
                <RefreshCw size={24} />
              </div>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--sc-navy-900)', marginBottom: '6px' }}>
                Analyzing Clinical Credentials...
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--sc-ink-600)', maxWidth: '320px' }}>
                Reading qualifications, hospital experience tenure, and nursing council registrations.
              </p>
            </div>
          )}

          {/* STEP 3: Review & Confirm */}
          {step === 'review' && parseResult && (
            <div>
              <div style={{ background: 'var(--sc-green-50)', border: '1px solid #bbf7d0', borderRadius: 'var(--radius-md)', padding: '12px 16px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--sc-green-600)" />
                <div style={{ fontSize: '0.86rem', color: '#166534', fontWeight: 600 }}>
                  We found {parseResult.extractionSummary.qualificationsFound.length + parseResult.extractionSummary.experienceFound.length + (parseResult.extractionSummary.registrationFound ? 1 : 0)} clinical credentials. Review before confirming.
                </div>
              </div>

              {/* Extracted Fields Summary List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                {/* Qualification */}
                <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sc-line-200)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-ink-600)', textTransform: 'uppercase' }}>
                    Primary Qualification
                  </div>
                  <div style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--sc-navy-900)', marginTop: '2px' }}>
                    {editableProfile.qualificationCode === 'bsc_nursing'
                      ? 'B.Sc. Nursing (Degree)'
                      : editableProfile.qualificationCode === 'gnm'
                      ? 'GNM (Diploma)'
                      : editableProfile.qualificationCode === 'post_basic'
                      ? 'Post Basic B.Sc. Nursing'
                      : editableProfile.qualificationCode === 'msc'
                      ? 'M.Sc. Nursing (Postgraduate)'
                      : 'Not Detected'}
                  </div>
                </div>

                {/* Experience History */}
                <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sc-line-200)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-ink-600)', textTransform: 'uppercase' }}>
                    Hospital Experience & Departments
                  </div>
                  {editableProfile.employmentHistory && editableProfile.employmentHistory.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
                      {editableProfile.employmentHistory.map((emp, i) => (
                        <div key={i} style={{ fontSize: '0.86rem', color: 'var(--sc-ink-900)' }}>
                          <strong>{emp.employer}</strong> — {emp.department || 'Clinical Care'} ({emp.role})
                          <div style={{ fontSize: '0.76rem', color: 'var(--sc-ink-600)' }}>
                            {emp.startDate} to {emp.isCurrent ? 'Present' : emp.endDate || 'Present'}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div style={{ fontSize: '0.86rem', color: 'var(--sc-ink-600)', marginTop: '2px' }}>
                      Fresher / 0 years recorded
                    </div>
                  )}
                </div>

                {/* Nursing Council Registration */}
                <div style={{ background: 'var(--sc-surface-secondary)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--sc-line-200)' }}>
                  <div style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--sc-ink-600)', textTransform: 'uppercase' }}>
                    Council Registration
                  </div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--sc-navy-900)', marginTop: '2px' }}>
                    {editableProfile.hasRegistration
                      ? `✓ Registered (${editableProfile.registrationDetails?.councilName || 'State / INC Council'})`
                      : 'Not specified'}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  type="button"
                  onClick={handleConfirmAndSave}
                  className="btn-navy"
                  style={{ flex: 1 }}
                >
                  <Check size={16} />
                  <span>Confirm & Save to Profile</span>
                </button>
                <button
                  type="button"
                  onClick={() => setStep('upload')}
                  className="btn-secondary"
                >
                  <span>Re-upload</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
