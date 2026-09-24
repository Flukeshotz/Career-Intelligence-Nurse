import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FreshnessLine } from './FreshnessLine';
import { applyWindowText, examDateText } from '@/lib/format-dates';
import { deriveLifecycle } from '@/lib/lifecycle';
import { MockExam } from '@/lib/mock-data';

/**
 * Exam card in the blog design system (same look as the home page cards). The status pill comes
 * from the live lifecycle, so a closed window never reads as "apply by".
 */
export function ExamCard({ exam }: { exam: MockExam }) {
  const lc = deriveLifecycle(exam);
  const open = lc.stage === 'applications_open';

  return (
    <Link href={`/${exam.professionCode}/exams/${exam.slug}`} className="home-card">
      <span className="home-card-org">{exam.organisation}</span>
      <b>{exam.name.replace(/\s*\(.*?\)\s*$/, '')}</b>
      <span className="home-card-facts">
        {exam.vacancies ? <>{exam.vacancies.toLocaleString('en-IN')} posts · </> : null}
        Apply {applyWindowText(exam)} · Exam {examDateText(exam)}
      </span>
      <span className="home-card-foot">
        <span className={open ? 'home-pill home-pill--open' : 'home-pill'}>{lc.label}</span>
        <span className="home-card-go">
          Read the guide <ArrowRight size={15} />
        </span>
      </span>
      <FreshnessLine id={exam.id} lastVerified={exam.lastVerified} />
    </Link>
  );
}
