import { INITIAL_JOBS, INITIAL_EXAMS, INITIAL_REQUIREMENTS, MockJob, MockExam, MockRequirement } from './mock-data';

export { INITIAL_JOBS, INITIAL_EXAMS, INITIAL_REQUIREMENTS };

/**
 * Opportunity Lifecycle State Machine:
 * "open -> closed: deadline passed -> System, computed at read time — never trust source-reported status alone."
 */
export function computeOpportunityStatus(item: {
  applicationDeadline?: string;
  examDate?: string;
  status: 'open' | 'upcoming' | 'closed' | 'expired';
}): 'open' | 'upcoming' | 'closed' | 'expired' {
  if (item.applicationDeadline) {
    const deadlineTime = new Date(item.applicationDeadline).getTime();
    if (!isNaN(deadlineTime) && Date.now() > deadlineTime) {
      return 'closed';
    }
  }
  return item.status;
}

export interface OpportunityFilters {
  profession?: string;
  type?: 'government' | 'private' | 'all';
  qualification?: string;
  state?: string;
  search?: string;
}

export async function getJobs(filters: OpportunityFilters = {}): Promise<MockJob[]> {
  let list = INITIAL_JOBS.map((j) => ({
    ...j,
    status: computeOpportunityStatus(j),
  }));

  if (filters.profession && filters.profession !== 'all') {
    list = list.filter((j) => j.professionCode === filters.profession);
  }

  if (filters.type && filters.type !== 'all') {
    list = list.filter((j) => j.type === filters.type);
  }

  if (filters.state && filters.state !== 'all') {
    list = list.filter(
      (j) =>
        !j.locationState ||
        j.locationState.toLowerCase() === filters.state?.toLowerCase()
    );
  }

  if (filters.qualification && filters.qualification !== 'all') {
    // Conditional filter rule: 'other' never excludes
    if (filters.qualification !== 'other') {
      const q = filters.qualification.toLowerCase();
      list = list.filter((j) => {
        if (!j.qualification) return true;
        const jq = j.qualification.toLowerCase();
        if (q === 'gnm') return jq.includes('gnm');
        if (q === 'bsc_nursing' || q === 'bsc') return jq.includes('bsc') || jq.includes('b.sc');
        if (q === 'post_basic') return jq.includes('post basic') || jq.includes('post-basic');
        if (q === 'msc') return jq.includes('msc') || jq.includes('m.sc');
        return true;
      });
    }
  }

  if (filters.search) {
    const s = filters.search.toLowerCase().trim();
    list = list.filter(
      (j) =>
        j.title.toLowerCase().includes(s) ||
        j.employer.toLowerCase().includes(s) ||
        (j.locationCity && j.locationCity.toLowerCase().includes(s)) ||
        (j.locationState && j.locationState.toLowerCase().includes(s))
    );
  }

  return list;
}

export async function getJobBySlug(profession: string, slug: string): Promise<MockJob | null> {
  const job = INITIAL_JOBS.find(
    (j) => j.professionCode === profession && j.slug === slug
  );
  if (!job) return null;
  return {
    ...job,
    status: computeOpportunityStatus(job),
  };
}

export async function getExams(filters: { search?: string; status?: string } = {}): Promise<MockExam[]> {
  let list = INITIAL_EXAMS.map((e) => ({
    ...e,
    status: computeOpportunityStatus(e),
  }));

  if (filters.status && filters.status !== 'all') {
    list = list.filter((e) => e.status === filters.status);
  }

  if (filters.search) {
    const s = filters.search.toLowerCase().trim();
    list = list.filter(
      (e) =>
        e.name.toLowerCase().includes(s) ||
        e.organisation.toLowerCase().includes(s)
    );
  }

  return list;
}

export async function getExamBySlug(profession: string, slug: string): Promise<MockExam | null> {
  const exam = INITIAL_EXAMS.find(
    (e) => e.professionCode === profession && e.slug === slug
  );
  if (!exam) return null;
  return {
    ...exam,
    status: computeOpportunityStatus(exam),
  };
}

export async function getRequirementsForOpportunity(options: {
  jobId?: string;
  examId?: string;
}): Promise<MockRequirement[]> {
  if (options.jobId) {
    return INITIAL_REQUIREMENTS.filter((r) => r.jobId === options.jobId);
  }
  if (options.examId) {
    return INITIAL_REQUIREMENTS.filter((r) => r.examId === options.examId);
  }
  return [];
}
