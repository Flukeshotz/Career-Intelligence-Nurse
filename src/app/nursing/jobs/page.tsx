import type { Metadata } from 'next';
import { getJobs } from '@/lib/data';
import { JobsClient, type SortOption } from './JobsClient';

export const metadata: Metadata = {
  title: 'Nursing Jobs in Hospitals — Staff Nurse & Nursing Officer Openings',
  description: 'Staff nurse and nursing officer openings, listed only once they are checked against the employer\'s own notice.',
  alternates: { canonical: '/nursing/jobs' },
};

const SORTS: SortOption[] = ['urgent', 'vacancies', 'alphabetical'];

export default async function JobsListPage({ searchParams }: { searchParams: { sector?: string; qual?: string; sort?: string } }) {
  const jobs = await getJobs({ profession: 'nursing' });
  const sort = SORTS.includes(searchParams.sort as SortOption) ? (searchParams.sort as SortOption) : 'urgent';
  return <JobsClient initialJobs={jobs} initialSector={searchParams.sector} initialQual={searchParams.qual || 'all'} initialSort={sort} />;
}
