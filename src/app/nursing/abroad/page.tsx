'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ABROAD_NURSING_JOBS } from '@/lib/abroad-mock-data';

export default function AbroadNursingPage() {
  const [selectedCountry, setSelectedCountry] = useState<'all' | 'Ireland' | 'Germany' | 'UAE'>('all');

  const filteredJobs = useMemo(() => {
    if (selectedCountry === 'all') return ABROAD_NURSING_JOBS;
    return ABROAD_NURSING_JOBS.filter((j) => j.country === selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '640px', margin: '0 auto', paddingBottom: '90px' }}>
      
      {/* ── TOP NAV & TITLE ── */}
      <div style={{ marginBottom: '14px' }}>
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
          International Opportunities
        </h1>
        <p style={{ fontSize: '0.80rem', color: '#64748b', margin: 0 }}>
          Verified hospital pathways in Ireland, Germany, and the UAE
        </p>
      </div>

      {/* ── DESTINATION PILLS ── */}
      <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '14px' }}>
        {[
          { id: 'all', label: 'All Destinations', emoji: '🌍' },
          { id: 'Ireland', label: 'Ireland', emoji: '🇮🇪' },
          { id: 'Germany', label: 'Germany', emoji: '🇩🇪' },
          { id: 'UAE', label: 'UAE', emoji: '🇦🇪' },
        ].map((dest) => (
          <button
            key={dest.id}
            type="button"
            onClick={() => setSelectedCountry(dest.id as any)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 12px',
              borderRadius: '100px',
              fontSize: '0.74rem',
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

      {/* ── CLEAN, COMPACT CARDS LIST ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            }}
          >
            {/* Country & Vacancies Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.78rem', fontWeight: 800, color: '#0f172a' }}>
                <span style={{ fontSize: '1.2rem' }}>{job.flagEmoji}</span>
                <span>{job.country}</span>
                <span style={{ color: '#94a3b8', fontWeight: 500 }}>• {job.location}</span>
              </div>

              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#16a34a', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '2px 7px', borderRadius: '6px' }}>
                {job.vacancies} Posts
              </span>
            </div>

            {/* Role & Hospital */}
            <div>
              <h2 style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', margin: '0 0 2px 0', lineHeight: 1.3 }}>
                {job.title}
              </h2>
              <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                {job.shortHospital}
              </div>
            </div>

            {/* Compensation Single Line */}
            <div style={{ fontSize: '0.84rem', fontWeight: 800, color: '#15803d', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span>💰 {job.salaryHeadline}</span>
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 500 }}>({job.salaryLocal})</span>
            </div>

            {/* Key Criterion Pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', margin: '2px 0 4px 0' }}>
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  style={{
                    fontSize: '0.70rem',
                    fontWeight: 700,
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    color: '#334155',
                    padding: '3px 8px',
                    borderRadius: '100px',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Button */}
            <a
              href={job.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                height: '38px',
                borderRadius: '10px',
                background: 'var(--sc-navy-900)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                textDecoration: 'none',
                fontSize: '0.78rem',
                fontWeight: 800,
                marginTop: '4px',
                boxShadow: '0 2px 6px rgba(8, 50, 98, 0.18)',
              }}
            >
              <span>View {job.country} Pathway Details</span>
              <ExternalLink size={13} />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
