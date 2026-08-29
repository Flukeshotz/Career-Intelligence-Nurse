/**
 * nursing/page.tsx — Server Component
 *
 * Renders the interactive NursingGateway client component first, followed by
 * a structured semantic footer directory that provides search engines and AI crawlers
 * with full H1, H2, eligibility summary, and official citations.
 */

import NursingGateway from './NursingGateway';
import { INITIAL_EXAMS, INITIAL_JOBS } from '@/lib/mock-data';

export default function NursingPage() {
  const examCount = INITIAL_EXAMS.length;
  const jobCount = INITIAL_JOBS.length;

  return (
    <>
      {/* 1. Primary interactive gateway (Immediate clean user experience) */}
      <NursingGateway />

      {/*
        2. Semantic Directory Reference (Clean footer section for users & search crawlers)
        Contains H1, H2s, structured eligibility table, and authoritative .gov.in links.
      */}
      <section
        aria-label="National Nursing Career Intelligence Directory Reference"
        style={{
          maxWidth: '960px',
          margin: '0 auto',
          padding: '32px 16px 48px',
          borderTop: '1px solid #e2e8f0',
          background: '#ffffff',
          color: '#475569',
        }}
      >
        <h1
          style={{
            fontSize: '1.25rem',
            fontWeight: 800,
            color: '#002856',
            marginBottom: '10px',
            lineHeight: 1.3,
          }}
        >
          National Nursing Recruitment &amp; Examination Directory — {examCount} Govt Exams &amp; {jobCount} Hospital Vacancies
        </h1>

        <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.7, marginBottom: '16px' }}>
          SkillCase is India&apos;s verified career intelligence portal for registered nurses (RN / RM). We aggregate
          recruitment notifications, eligibility guidelines, exam patterns, previous years question papers (PYQs),
          and direct application links across AIIMS NORCET, Railway Recruitment Boards (RRB), ESIC, DSSSB,
          Military Nursing Service (MNS), and 25+ State Public Service Commissions.
        </p>

        <h2 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#002856', marginBottom: '8px' }}>
          Major Government Nursing Recruitment Bodies
        </h2>
        <ul style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.8, paddingLeft: '20px', marginBottom: '16px' }}>
          <li>
            <strong>AIIMS NORCET 2026</strong> — 2,218 Posts (7th CPC Level 7, ₹78,000–₹85,000/mo).
            Official portal: <a href="https://www.aiimsexams.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083262' }}>aiimsexams.ac.in</a>.
          </li>
          <li>
            <strong>RRB Indian Railways</strong> — 713 Posts for Nursing Superintendent.
            Official portal: <a href="https://www.rrbapply.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083262' }}>rrbapply.gov.in</a>.
          </li>
          <li>
            <strong>UPSC ESIC Nursing Officer</strong> — 1,930 Posts across ESIC Model Hospitals.
            Official portal: <a href="https://upsconline.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083262' }}>upsconline.nic.in</a>.
          </li>
          <li>
            <strong>DSSSB Delhi Nursing Officer</strong> — 1,507 Posts under GNCTD Health Department.
            Official portal: <a href="https://dsssbonline.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083262' }}>dsssbonline.nic.in</a>.
          </li>
          <li>
            <strong>Military Nursing Service (MNS)</strong> — Commissioned Officer posts for female nurses in Indian Armed Forces.
            Official portal: <a href="https://joinindianarmy.nic.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083262' }}>joinindianarmy.nic.in</a>.
          </li>
          <li>
            <strong>National Health Mission (NHM)</strong> — Community Health Officer (CHO) cadres across all Indian states.
            Official portal: <a href="https://nhm.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#083262' }}>nhm.gov.in</a>.
          </li>
        </ul>

        <h2 style={{ fontSize: '0.98rem', fontWeight: 800, color: '#002856', marginBottom: '8px' }}>
          Qualification &amp; Eligibility Overview
        </h2>
        <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
          <table
            style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.80rem', minWidth: '480px' }}
            aria-label="Nursing exam eligibility table"
          >
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #e2e8f0' }}>
                <th style={{ padding: '8px 10px', textAlign: 'left', color: '#002856' }}>Qualification</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', color: '#002856' }}>AIIMS NORCET</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', color: '#002856' }}>RRB Railways</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', color: '#002856' }}>UPSC ESIC</th>
                <th style={{ padding: '8px 10px', textAlign: 'left', color: '#002856' }}>State PSCs</th>
              </tr>
            </thead>
            <tbody>
              {[
                { q: 'B.Sc. Nursing', norcet: 'Eligible (0 Exp)', rrb: 'Eligible (0 Exp)', esic: 'Eligible (0 Exp)', state: 'Eligible (All States)' },
                { q: 'GNM Diploma', norcet: 'Eligible (2 Yr 50-bed Exp)', rrb: 'Eligible (0 Exp)', esic: 'Eligible (1 Yr 50-bed Exp)', state: 'Eligible (Most States)' },
                { q: 'Post Basic B.Sc.', norcet: 'Eligible (0 Exp)', rrb: 'Eligible (0 Exp)', esic: 'Eligible (0 Exp)', state: 'Eligible (All States)' },
                { q: 'M.Sc. Nursing', norcet: 'Eligible (Senior Posts)', rrb: 'Eligible', esic: 'Eligible', state: 'Eligible (Tutor / Lecturer)' },
              ].map((row, idx) => (
                <tr key={row.q} style={{ background: idx % 2 === 0 ? '#ffffff' : '#f8fafc', borderBottom: '1px solid #f1f5f9' }}>
                  <td style={{ padding: '8px 10px', fontWeight: 600, color: '#0f172a' }}>{row.q}</td>
                  <td style={{ padding: '8px 10px' }}>{row.norcet}</td>
                  <td style={{ padding: '8px 10px' }}>{row.rrb}</td>
                  <td style={{ padding: '8px 10px' }}>{row.esic}</td>
                  <td style={{ padding: '8px 10px' }}>{row.state}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ fontSize: '0.75rem', color: '#94a3b8', borderTop: '1px solid #f1f5f9', paddingTop: '12px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
          <div>
            Data sourced from official government notifications. Always cross-verify on official authority portals.
          </div>
          <div>
            Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </div>
      </section>
    </>
  );
}
