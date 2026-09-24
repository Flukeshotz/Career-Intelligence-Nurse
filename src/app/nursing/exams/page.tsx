import type { Metadata } from 'next';
import { getExams } from '@/lib/data';
import { ExamsClient, type ExamSector, type SortOption } from './ExamsClient';

export const metadata: Metadata = {
  title: 'Nursing Government Exams in India 2026 — Vacancies, Dates & Eligibility',
  description: 'Every nursing recruitment we track in India, with vacancies, application dates, exam dates and a full guide for each — checked against official notices and re-checked daily.',
  alternates: { canonical: '/nursing/exams' },
};

const SECTORS: ExamSector[] = ['all', 'central', 'railways', 'state'];
const SORTS: SortOption[] = ['urgent', 'vacancies', 'exam_date', 'alphabetical'];

export default async function ExamsListPage({ searchParams }: { searchParams: { sector?: string; sort?: string } }) {
  const exams = await getExams({});
  const sector = SECTORS.includes(searchParams.sector as ExamSector) ? (searchParams.sector as ExamSector) : 'all';
  const sort = SORTS.includes(searchParams.sort as SortOption) ? (searchParams.sort as SortOption) : 'urgent';
  return <ExamsClient initialExams={exams} initialSector={sector} initialSort={sort} />;
}
