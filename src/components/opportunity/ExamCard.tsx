'use client';

import Link from 'next/link';
import { ChevronRight, Calendar, Users, MapPin } from 'lucide-react';
import { MockExam } from '@/lib/mock-data';

export function ExamCard({ exam }: { exam: MockExam }) {
  const examDateStr = exam.examDate
    ? new Date(exam.examDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : null;

  const deadlineStr = exam.applicationDeadline
    ? new Date(exam.applicationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : null;

  return (
    <Link
      href={`/${exam.professionCode}/exams/${exam.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '14px',
          border: '1px solid #e2e8f0',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          transition: 'all 0.12s ease',
          boxShadow: '0 1px 2px rgba(0, 0, 0, 0.02)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = '#94a3b8';
          e.currentTarget.style.boxShadow = '0 3px 8px rgba(0, 0, 0, 0.04)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = '#e2e8f0';
          e.currentTarget.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.02)';
        }}
      >
        {/* Row 1: Organisation & Posts */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <div style={{ fontSize: '0.74rem', color: '#64748b', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {exam.organisation}
          </div>

          {exam.vacancies && (
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#0f766e', background: '#f0fdfa', padding: '2px 7px', borderRadius: '6px', whiteSpace: 'nowrap' }}>
              {exam.vacancies.toLocaleString('en-IN')} Posts
            </span>
          )}
        </div>

        {/* Row 2: Exam Title */}
        <div style={{ fontSize: '0.96rem', fontWeight: 800, color: '#0f172a', lineHeight: 1.35 }}>
          {exam.name}
        </div>

        {/* Row 3: Meta Dates & Qualification */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', marginTop: '2px', paddingTop: '8px', borderTop: '1px solid #f1f5f9' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.74rem', color: '#475569', flexWrap: 'wrap' }}>
            {examDateStr && (
              <span style={{ fontWeight: 600 }}>
                Exam: <strong style={{ color: '#0f172a' }}>{examDateStr}</strong>
              </span>
            )}
            {deadlineStr && (
              <span style={{ color: '#64748b' }}>
                Apply by {deadlineStr}
              </span>
            )}
          </div>

          <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--sc-navy-700)', display: 'flex', alignItems: 'center', gap: '2px', flexShrink: 0 }}>
            Details <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </Link>
  );
}
