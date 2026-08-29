'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ABROAD_NURSING_JOBS } from '@/lib/abroad-mock-data';

export default function AbroadNursingPage() {
  const [selectedCountry, setSelectedCountry] = useState<'all' | 'Ireland' | 'Germany' | 'UAE'>('all');

  const filteredJobs = useMemo(() => {
    if (selectedCountry === 'all') return ABROAD_NURSING_JOBS;
    return ABROAD_NURSING_JOBS.filter((j) => j.country === selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '720px', margin: '0 auto', paddingBottom: '90px' }}>
      
      {/* ── TOP NAV BAR & CLEAN HEADER ── */}
      <div style={{ marginBottom: '16px' }}>
        <Link
          href="/nursing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--sc-navy-700)',
            fontSize: '0.80rem',
            fontWeight: 700,
            textDecoration: 'none',
            marginBottom: '8px',
          }}
        >
          <ArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>

        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0', letterSpacing: '-0.02em' }}>
          Global &amp; Abroad Nursing Careers
        </h1>
        <p style={{ fontSize: '0.82rem', color: '#64748b', margin: 0 }}>
          Verified hospital vacancies in Ireland, Germany, and the UAE with visa sponsorship
        </p>
      </div>

      {/* ── DESTINATION TABS ── */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '16px' }}>
        {[
          { id: 'all', label: 'All Destinations', emoji: '🌍' },
          { id: 'Ireland', label: 'Ireland (HSE)', emoji: '🇮🇪' },
          { id: 'Germany', label: 'Germany (B2)', emoji: '🇩🇪' },
          { id: 'UAE', label: 'UAE (DHA / DOH)', emoji: '🇦🇪' },
        ].map((dest) => (
          <button
            key={dest.id}
            type="button"
            onClick={() => setSelectedCountry(dest.id as any)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              borderRadius: '100px',
              fontSize: '0.76rem',
              fontWeight: selectedCountry === dest.id ? 800 : 600,
              background: selectedCountry === dest.id ? 'var(--sc-navy-900)' : '#ffffff',
              color: selectedCountry === dest.id ? '#ffffff' : '#475569',
              border: selectedCountry === dest.id ? '1px solid var(--sc-navy-900)' : '1px solid #e2e8f0',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.12s ease',
            }}
          >
            <span>{dest.emoji}</span>
            <span>{dest.label}</span>
          </button>
        ))}
      </div>

      {/* ── CLEAN, BALANCED OPPORTUNITIES LIST ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            }}
          >
            {/* Header: Flag, Destination, Post Count */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', fontWeight: 800, color: '#2563eb' }}>
                <span style={{ fontSize: '1.1rem' }}>{job.flagEmoji}</span>
                <span>{job.country}</span>
                <span style={{ color: '#94a3b8', fontWeight: 500 }}>• {job.location}</span>
              </div>

              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#16a34a', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '2px 7px', borderRadius: '6px' }}>
                {job.vacancies} Posts
              </span>
            </div>

            {/* Job Title & Employer */}
            <div>
              <h2 style={{ fontSize: '1.02rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0', lineHeight: 1.3 }}>
                {job.title}
              </h2>
              <div style={{ fontSize: '0.76rem', color: '#64748b', fontWeight: 500 }}>
                {job.hospital}
              </div>
            </div>

            {/* Compensation & Criteria Line */}
            <div
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '10px',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  Annual Pay Package
                </div>
                <div style={{ fontSize: '0.94rem', fontWeight: 900, color: '#15803d' }}>
                  {job.salaryInr}
                </div>
              </div>

              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.66rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase' }}>
                  Local Currency
                </div>
                <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#334155' }}>
                  {job.salaryLocal}
                </div>
              </div>
            </div>

            {/* Key Requirements (Clean 1-Liners) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '5px', fontSize: '0.75rem', color: '#334155' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#2563eb', fontWeight: 700 }}>🗣️ Language:</span>
                <span>{job.languageRequirement}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#0891b2', fontWeight: 700 }}>📜 Council:</span>
                <span>{job.registrationCouncil} ({job.experienceRequired})</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
                <span style={{ color: '#16a34a', fontWeight: 700 }}>✈️ Perks:</span>
                <span>{job.benefits[0]}</span>
              </div>
            </div>

            {/* Official Button */}
            <a
              href={job.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--sc-navy-900)',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.78rem',
                marginTop: '4px',
                boxShadow: '0 2px 6px rgba(8, 50, 98, 0.2)',
              }}
            >
              <span>View Official {job.country} Guidelines</span>
              <ExternalLink size={13} />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
