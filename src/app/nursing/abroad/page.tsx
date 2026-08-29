'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Globe,
  Plane,
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Building2,
  Languages,
  DollarSign,
  Briefcase,
  ChevronRight
} from 'lucide-react';
import { ABROAD_NURSING_JOBS, AbroadNursingJob } from '@/lib/abroad-mock-data';

export default function AbroadNursingPage() {
  const [selectedCountry, setSelectedCountry] = useState<'all' | 'Ireland' | 'Germany' | 'UAE'>('all');

  const filteredJobs = useMemo(() => {
    if (selectedCountry === 'all') return ABROAD_NURSING_JOBS;
    return ABROAD_NURSING_JOBS.filter((j) => j.country === selectedCountry);
  }, [selectedCountry]);

  return (
    <div className="wide-container mobile-safe-bottom" style={{ paddingTop: '16px', maxWidth: '860px', margin: '0 auto', paddingBottom: '90px' }}>
      
      {/* ── TOP NAV BAR ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
        <Link
          href="/nursing"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '5px',
            color: 'var(--sc-navy-700)',
            fontSize: '0.82rem',
            fontWeight: 700,
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={15} />
          <span>Back to Home</span>
        </Link>

        <span style={{ fontSize: '0.70rem', fontWeight: 800, color: '#2563eb', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '3px 8px', borderRadius: '100px' }}>
          ✈️ Verified Relocation Sponsorship
        </span>
      </div>

      {/* ── HERO BANNER ── */}
      <div
        style={{
          background: 'linear-gradient(135deg, #062b54 0%, #031c38 100%)',
          color: '#ffffff',
          borderRadius: '16px',
          padding: '20px',
          marginBottom: '16px',
          boxShadow: '0 4px 14px rgba(3, 28, 56, 0.2)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.70rem', fontWeight: 800, color: '#93c5fd', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '4px' }}>
          <span>SkillCase Global Health Mobility</span>
        </div>
        <h1 style={{ fontSize: '1.35rem', fontWeight: 800, margin: '0 0 6px 0', lineHeight: 1.25 }}>
          International Nursing Careers &amp; Pathways
        </h1>
        <p style={{ fontSize: '0.82rem', color: '#cbd5e1', margin: 0, lineHeight: 1.45 }}>
          Verified direct-hire hospital openings in Ireland, Germany, and the UAE with licensed council recognition, language criteria, and full visa support.
        </p>
      </div>

      {/* ── DESTINATION TABS ── */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px', marginBottom: '16px' }}>
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
              padding: '8px 14px',
              borderRadius: '100px',
              fontSize: '0.78rem',
              fontWeight: selectedCountry === dest.id ? 800 : 600,
              background: selectedCountry === dest.id ? '#0f172a' : '#ffffff',
              color: selectedCountry === dest.id ? '#ffffff' : '#334155',
              border: selectedCountry === dest.id ? '1px solid #0f172a' : '1px solid #e2e8f0',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              flexShrink: 0,
              transition: 'all 0.12s ease',
              boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
            }}
          >
            <span>{dest.emoji}</span>
            <span>{dest.label}</span>
          </button>
        ))}
      </div>

      {/* ── OPPORTUNITIES LIST ── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            style={{
              background: '#ffffff',
              borderRadius: '16px',
              border: '1px solid #e2e8f0',
              padding: '18px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
            }}
          >
            {/* Header: Flag, Destination, Badge */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.4rem' }}>{job.flagEmoji}</span>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', textTransform: 'uppercase' }}>
                    {job.country} • {job.location}
                  </div>
                  <h2 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '2px 0 0 0', lineHeight: 1.25 }}>
                    {job.title}
                  </h2>
                </div>
              </div>

              <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#15803d', background: '#f0fdf4', border: '1px solid #bbf7d0', padding: '3px 8px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
                {job.vacancies} Openings
              </span>
            </div>

            <div style={{ fontSize: '0.80rem', color: '#475569', fontWeight: 600, marginBottom: '12px' }}>
              🏥 {job.hospital}
            </div>

            {/* Salary Highlight Card */}
            <div
              style={{
                background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                border: '1px solid #86efac',
                borderRadius: '12px',
                padding: '10px 14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '12px',
              }}
            >
              <div>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#166534', textTransform: 'uppercase' }}>
                  Verified Compensation
                </div>
                <div style={{ fontSize: '0.98rem', fontWeight: 900, color: '#14532d' }}>
                  {job.salaryInr}
                </div>
              </div>
              <div style={{ fontSize: '0.76rem', color: '#15803d', fontWeight: 700, textAlign: 'right' }}>
                {job.salaryLocal}
              </div>
            </div>

            {/* Requirements Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '14px', fontSize: '0.76rem' }}>
              <div style={{ background: '#f8fafc', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ color: '#64748b', fontWeight: 700, fontSize: '0.68rem' }}>🗣️ Language Exam</div>
                <div style={{ color: '#0f172a', fontWeight: 700, marginTop: '2px' }}>{job.languageRequirement}</div>
              </div>

              <div style={{ background: '#f8fafc', padding: '8px 10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <div style={{ color: '#64748b', fontWeight: 700, fontSize: '0.68rem' }}>📜 Licensing Council</div>
                <div style={{ color: '#0f172a', fontWeight: 700, marginTop: '2px' }}>{job.registrationCouncil}</div>
              </div>
            </div>

            {/* Benefits & Perks */}
            <div style={{ marginBottom: '14px' }}>
              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '6px' }}>
                Included Sponsorship Benefits:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                {job.benefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '0.74rem', color: '#334155' }}>
                    <span style={{ color: '#16a34a', fontWeight: 900 }}>✓</span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Official Apply / Info Button */}
            <a
              href={job.officialPortalUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                height: '42px',
                borderRadius: '10px',
                background: 'var(--sc-navy-900)',
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                textDecoration: 'none',
                fontWeight: 800,
                fontSize: '0.80rem',
                boxShadow: '0 2px 6px rgba(8, 50, 98, 0.25)',
              }}
            >
              <span>View Official {job.country} Recruitment Guidelines</span>
              <ExternalLink size={14} />
            </a>
          </div>
        ))}
      </div>

    </div>
  );
}
