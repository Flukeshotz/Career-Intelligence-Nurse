'use client';

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import {
  X,
  SlidersHorizontal,
  ArrowUpDown,
  Building2,
  GraduationCap,
  Briefcase,
  CheckCircle2,
  Calendar,
  Layers,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { INITIAL_EXAMS, INITIAL_JOBS } from '@/lib/mock-data';

interface FilterDrawerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: 'all' | 'exams' | 'jobs';
}

export function FilterDrawerModal({ isOpen, onClose, initialType = 'all' }: FilterDrawerModalProps) {
  const router = useRouter();

  // Filter State
  const [selectedType, setSelectedType] = useState<'all' | 'exams' | 'jobs'>(initialType);
  const [selectedSector, setSelectedSector] = useState<'all' | 'central' | 'railways' | 'defense' | 'state' | 'private' | 'abroad'>('all');
  const [selectedQualification, setSelectedQualification] = useState<'all' | 'bsc' | 'gnm' | 'msc'>('all');
  const [sortBy, setSortBy] = useState<'urgent' | 'vacancies' | 'exam_date' | 'alphabetical'>('urgent');

  // Compute live match count based on active filters
  const matchedCount = useMemo(() => {
    if (selectedSector === 'abroad') return 3; // 3 primary destination programs (Ireland, Germany, UAE)

    let examsList = selectedType === 'jobs' ? [] : INITIAL_EXAMS;
    let jobsList = selectedType === 'exams' ? [] : INITIAL_JOBS;

    // Sector filtering
    if (selectedSector === 'central') {
      examsList = examsList.filter(e => /aiims|norcet|esic|dsssb|jipmer|pgimer|nimhans|sctimst/i.test(e.name + e.organisation));
      jobsList = jobsList.filter(j => /aiims|esic|dsssb|jipmer/i.test(j.title + j.employer));
    } else if (selectedSector === 'railways') {
      examsList = examsList.filter(e => /railway|rrb/i.test(e.name + e.organisation));
      jobsList = [];
    } else if (selectedSector === 'defense') {
      examsList = examsList.filter(e => /military|mns|itbp|bsf|crpf|army/i.test(e.name + e.organisation));
      jobsList = [];
    } else if (selectedSector === 'state') {
      examsList = examsList.filter(e => /uppsc|upums|rsmssb|tn mrb|mhsrb|kerala|kpsc|wbhrb|btsc|osssc|ojas|dhs/i.test(e.name + e.organisation));
      jobsList = jobsList.filter(j => !/apollo|manipal|fortis|max|narayana|medanta/i.test(j.employer));
    } else if (selectedSector === 'private') {
      examsList = [];
      jobsList = jobsList.filter(j => /apollo|manipal|fortis|max|narayana|medanta/i.test(j.employer));
    }

    // Qualification filtering
    if (selectedQualification === 'bsc') {
      examsList = examsList.filter(e => /b\.sc|bsc|post basic/i.test(e.qualification || 'bsc'));
      jobsList = jobsList.filter(j => /b\.sc|bsc|post basic/i.test(j.qualification || 'bsc'));
    } else if (selectedQualification === 'gnm') {
      examsList = examsList.filter(e => /gnm|diploma/i.test(e.qualification || ''));
      jobsList = jobsList.filter(j => /gnm|diploma/i.test(j.qualification || ''));
    }

    return examsList.length + jobsList.length;
  }, [selectedType, selectedSector, selectedQualification]);

  const handleApply = () => {
    onClose();
    if (selectedSector === 'abroad') {
      router.push('/nursing/abroad');
    } else if (selectedType === 'jobs') {
      router.push(`/nursing/jobs?sector=${selectedSector}&qual=${selectedQualification}&sort=${sortBy}`);
    } else {
      router.push(`/nursing/exams?sector=${selectedSector}&qual=${selectedQualification}&sort=${sortBy}`);
    }
  };

  const handleReset = () => {
    setSelectedType('all');
    setSelectedSector('all');
    setSelectedQualification('all');
    setSortBy('urgent');
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 1000,
        background: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        style={{
          background: '#ffffff',
          borderTopLeftRadius: '20px',
          borderTopRightRadius: '20px',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '85vh',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.25)',
          overflow: 'hidden',
          animation: 'slideUp 0.2s ease',
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: '16px 20px 12px',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <SlidersHorizontal size={18} color="#0f172a" />
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Filter &amp; Sort Opportunities
            </h3>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              type="button"
              onClick={handleReset}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '0.76rem',
                color: '#64748b',
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Reset
            </button>
            <button
              type="button"
              onClick={onClose}
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#f1f5f9',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#64748b',
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Scrollable Filter Options */}
        <div style={{ padding: '16px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '18px' }}>
          
          {/* ── 1. SORT BY ── */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <ArrowUpDown size={13} />
              <span>Sort Results By</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                { id: 'urgent', label: '⚡ Application Deadline', desc: 'Closing soonest first' },
                { id: 'vacancies', label: '👥 Total Vacancies', desc: 'Highest post count' },
                { id: 'exam_date', label: '📅 Upcoming Exam Date', desc: 'Next scheduled test' },
                { id: 'alphabetical', label: '🔤 Name (A to Z)', desc: 'Alphabetical listing' },
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSortBy(s.id as any)}
                  style={{
                    padding: '10px 12px',
                    borderRadius: '10px',
                    textAlign: 'left',
                    background: sortBy === s.id ? '#eff6ff' : '#f8fafc',
                    border: sortBy === s.id ? '1.5px solid #3b82f6' : '1px solid #e2e8f0',
                    color: sortBy === s.id ? '#1e40af' : '#334155',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ fontSize: '0.80rem', fontWeight: 800 }}>{s.label}</div>
                  <div style={{ fontSize: '0.68rem', color: '#64748b', marginTop: '2px' }}>{s.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* ── 2. OPPORTUNITY TYPE ── */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
              Opportunity Type
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              {[
                { id: 'all', label: 'All Opportunities' },
                { id: 'exams', label: '🏛️ Govt Exams (50)' },
                { id: 'jobs', label: '🏥 Hospital Jobs (23)' },
              ].map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setSelectedType(t.id as any)}
                  style={{
                    flex: 1,
                    padding: '8px 10px',
                    borderRadius: '8px',
                    fontSize: '0.76rem',
                    fontWeight: selectedType === t.id ? 800 : 600,
                    background: selectedType === t.id ? '#0f172a' : '#f1f5f9',
                    color: selectedType === t.id ? '#ffffff' : '#475569',
                    border: 'none',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── 3. RECRUITMENT SECTOR / AUTHORITY ── */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
              Recruitment Authority / Sector
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {[
                { id: 'all', label: 'All Sectors' },
                { id: 'abroad', label: '✈️ Abroad (Ireland, Germany, UAE)' },
                { id: 'central', label: '🏛️ Central Govt & AIIMS' },
                { id: 'railways', label: '🚆 Indian Railways' },
                { id: 'defense', label: '🛡️ Army & MNS' },
                { id: 'state', label: '🗺️ State Public Service (PSCs)' },
                { id: 'private', label: '🏥 Super-Speciality Hospitals' },
              ].map((sec) => (
                <button
                  key={sec.id}
                  type="button"
                  onClick={() => setSelectedSector(sec.id as any)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '100px',
                    fontSize: '0.74rem',
                    fontWeight: selectedSector === sec.id ? 800 : 600,
                    background: selectedSector === sec.id ? '#2563eb' : '#f8fafc',
                    color: selectedSector === sec.id ? '#ffffff' : '#334155',
                    border: selectedSector === sec.id ? '1px solid #2563eb' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {sec.label}
                </button>
              ))}
            </div>
          </div>

          {/* ── 4. QUALIFYING DEGREE / DIPLOMA ── */}
          <div>
            <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', marginBottom: '8px' }}>
              Your Qualification
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {[
                { id: 'all', label: 'Any Qualification' },
                { id: 'bsc', label: '🩺 B.Sc. Nursing / Post Basic' },
                { id: 'gnm', label: '📋 GNM Diploma' },
                { id: 'msc', label: '🎓 M.Sc. / Specialist' },
              ].map((q) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setSelectedQualification(q.id as any)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: '100px',
                    fontSize: '0.74rem',
                    fontWeight: selectedQualification === q.id ? 800 : 600,
                    background: selectedQualification === q.id ? '#16a34a' : '#f8fafc',
                    color: selectedQualification === q.id ? '#ffffff' : '#334155',
                    border: selectedQualification === q.id ? '1px solid #16a34a' : '1px solid #e2e8f0',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Footer with Instant Match Count & Apply Action */}
        <div
          style={{
            padding: '14px 20px',
            borderTop: '1px solid #e2e8f0',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
          }}
        >
          <div style={{ fontSize: '0.80rem', color: '#64748b' }}>
            Found <strong style={{ color: '#0f172a' }}>{matchedCount}</strong> opportunities
          </div>

          <button
            type="button"
            onClick={handleApply}
            style={{
              flex: 1,
              height: '44px',
              borderRadius: '10px',
              background: 'var(--sc-navy-900)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '0.84rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              boxShadow: '0 2px 8px rgba(8, 50, 98, 0.25)',
            }}
          >
            <span>Show {matchedCount} Opportunities</span>
            <ArrowRight size={15} />
          </button>
        </div>

      </div>
    </div>
  );
}
