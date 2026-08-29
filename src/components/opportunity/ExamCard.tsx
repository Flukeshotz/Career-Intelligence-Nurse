import Link from 'next/link';
import { ChevronRight, Calendar, GraduationCap, FileText } from 'lucide-react';
import { MockExam } from '@/lib/mock-data';

export function ExamCard({ exam }: { exam: MockExam }) {
  const examDateStr = exam.examDate
    ? new Date(exam.examDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
    : null;

  const deadlineStr = exam.applicationDeadline
    ? new Date(exam.applicationDeadline).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    : null;

  // Derive a sector color from name
  const isCentral = exam.organisation?.toLowerCase().includes('aiims') || exam.organisation?.toLowerCase().includes('railway') || exam.organisation?.toLowerCase().includes('esic') || exam.organisation?.toLowerCase().includes('upsc');
  const isDefense = (exam.name + exam.organisation).toLowerCase().includes('military') || (exam.name + exam.organisation).toLowerCase().includes('itbp') || (exam.name + exam.organisation).toLowerCase().includes('bsf');
  const accentColor = isDefense ? '#4a5e2a' : isCentral ? '#083262' : '#1e5ca2';

  return (
    <Link
      href={`/${exam.professionCode}/exams/${exam.slug}`}
      style={{ textDecoration: 'none', display: 'block' }}
    >
      <div
        style={{
          background: '#ffffff',
          borderRadius: '16px',
          border: '1.5px solid var(--sc-line-200)',
          padding: '16px 18px',
          display: 'flex',
          gap: '14px',
          alignItems: 'flex-start',
          transition: 'all 0.15s ease',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'var(--sc-navy-600)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(8,50,98,0.08)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'var(--sc-line-200)';
          e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)';
        }}
      >
        {/* Left accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px',
          background: accentColor, borderRadius: '16px 0 0 16px',
        }} />

        {/* Content (with left-bar offset) */}
        <div style={{ flex: 1, minWidth: 0, paddingLeft: '4px' }}>
          {/* Row 1: badges + vacancies */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px', flexWrap: 'wrap', gap: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{
                fontSize: '0.68rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em',
                color: accentColor, background: accentColor + '14',
                padding: '3px 8px', borderRadius: '100px',
              }}>
                🎯 {isDefense ? 'Defense' : isCentral ? 'Central' : 'State Exam'}
              </span>
              <span style={{
                fontSize: '0.68rem', fontWeight: 700,
                color: 'var(--sc-blue-600)', background: 'rgba(16,102,200,0.08)',
                padding: '3px 8px', borderRadius: '100px',
                display: 'inline-flex', alignItems: 'center', gap: '3px',
              }}>
                <FileText size={10} />
                PYQs & Mocks
              </span>
            </div>

            {exam.vacancies && (
              <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '3px 8px', borderRadius: '100px' }}>
                {exam.vacancies.toLocaleString('en-IN')} Posts
              </span>
            )}
          </div>

          {/* Row 2: Title */}
          <div style={{ fontSize: '0.98rem', fontWeight: 800, color: 'var(--sc-navy-900)', lineHeight: 1.35, marginBottom: '3px' }}>
            {exam.name}
          </div>

          {/* Row 3: Organisation */}
          <div style={{ fontSize: '0.78rem', color: 'var(--sc-ink-600)', fontWeight: 500, marginBottom: '10px' }}>
            {exam.organisation}
          </div>

          {/* Row 4: date chips */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
            {examDateStr && (
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 700,
                background: 'var(--sc-green-50)', color: 'var(--sc-green-600)',
                padding: '4px 8px', borderRadius: '6px',
              }}>
                <GraduationCap size={12} />
                Exam: {examDateStr}
              </span>
            )}
            {deadlineStr && (
              <span style={{
                display: 'flex', alignItems: 'center', gap: '4px',
                fontSize: '0.72rem', fontWeight: 700,
                background: '#fef3c7', color: '#92400e',
                padding: '4px 8px', borderRadius: '6px',
              }}>
                <Calendar size={12} />
                Apply by {deadlineStr}
              </span>
            )}
          </div>

          {/* Row 5: Qualification + CTA */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '12px', borderTop: '1px solid var(--sc-line-100)', paddingTop: '10px' }}>
            <span style={{ fontSize: '0.74rem', color: 'var(--sc-ink-600)', fontWeight: 500 }}>
              {exam.qualification || 'B.Sc. / GNM'}
            </span>
            <span style={{ fontSize: '0.80rem', fontWeight: 800, color: 'var(--sc-navy-700)', display: 'flex', alignItems: 'center', gap: '2px' }}>
              Blueprint &amp; Papers <ChevronRight size={14} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
