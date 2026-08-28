import Link from 'next/link';
import { Calendar, GraduationCap, ArrowRight } from 'lucide-react';
import { MockExam } from '@/lib/mock-data';

export function ExamCard({ exam }: { exam: MockExam }) {
  const deadlineStr = exam.applicationDeadline
    ? new Date(exam.applicationDeadline).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
      })
    : null;

  const examDateStr = exam.examDate
    ? new Date(exam.examDate).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      })
    : null;

  return (
    <Link
      href={`/${exam.professionCode}/exams/${exam.slug}`}
      className="sc-card sc-card-interactive"
      style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}
    >
      {/* Top Badges */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          <span className="badge-govt">🎯 National Exam</span>
          <span className="badge-verified">✓ Verified Notice</span>
        </div>

        {exam.vacancies && (
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--sc-navy-700)', background: 'var(--sc-navy-50)', padding: '3px 8px', borderRadius: 'var(--radius-sm)' }}>
            {exam.vacancies.toLocaleString('en-IN')} Vacancies
          </span>
        )}
      </div>

      {/* Title & Organisation */}
      <div>
        <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--sc-navy-900)', lineHeight: 1.35, marginBottom: '4px' }}>
          {exam.name}
        </h3>
        <div style={{ color: 'var(--sc-ink-700)', fontSize: '0.88rem', fontWeight: 600 }}>
          {exam.organisation}
        </div>
      </div>

      {/* Important Dates */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', fontSize: '0.82rem' }}>
        {examDateStr && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--sc-green-50)', color: 'var(--sc-green-600)', padding: '3px 8px', borderRadius: 'var(--radius-sm)', fontWeight: 700 }}>
            <GraduationCap size={14} />
            <span>Exam: {examDateStr}</span>
          </div>
        )}

        {deadlineStr && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--sc-yellow-50)', color: '#92400e', padding: '3px 8px', borderRadius: 'var(--radius-sm)', fontWeight: 600 }}>
            <Calendar size={13} />
            <span>Apply by {deadlineStr}</span>
          </div>
        )}
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: '1px solid var(--sc-line-100)',
          paddingTop: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 'auto',
        }}
      >
        <div style={{ fontSize: '0.82rem', color: 'var(--sc-ink-600)' }}>
          {exam.qualification || 'B.Sc. / Post Basic / GNM'}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--sc-navy-700)', fontSize: '0.84rem', fontWeight: 700 }}>
          <span>View Cycle Roadmap</span>
          <ArrowRight size={14} />
        </div>
      </div>
    </Link>
  );
}
