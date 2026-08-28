/**
 * SEO & GEO (Answer Engine Optimization) Structured Data Generators
 */

export interface JobPostingData {
  title: string;
  employer: string;
  locationCity?: string | null;
  locationState?: string | null;
  datePosted?: string | null;
  validThrough?: string | null; // Must map to application_deadline
  qualification?: string | null;
  salaryMin?: number | null;
  salaryMax?: number | null;
  salaryRaw?: string | null;
  descriptionSimple?: string | null;
  description?: string | null;
  slug: string;
  profession?: string;
}

export function generateJobPostingJsonLd(job: JobPostingData, baseUrl: string = 'https://skillcase.in') {
  const profession = job.profession || 'nursing';
  const url = `${baseUrl}/${profession}/jobs/${job.slug}`;

  const jsonLd: Record<string, any> = {
    '@context': 'https://schema.org/',
    '@type': 'JobPosting',
    title: job.title,
    hiringOrganization: {
      '@type': 'Organization',
      name: job.employer,
    },
    jobLocation: {
      '@type': 'Place',
      address: {
        '@type': 'PostalAddress',
        addressLocality: job.locationCity || 'Various',
        addressRegion: job.locationState || 'India',
        addressCountry: 'IN',
      },
    },
    datePosted: job.datePosted || new Date().toISOString().split('T')[0],
    validThrough: job.validThrough ? new Date(job.validThrough).toISOString().split('T')[0] : undefined,
    employmentType: 'FULL_TIME',
    educationRequirements: job.qualification || 'Nursing Degree/Diploma',
    directApply: false, // Applications happen on official authority portal
    description: job.descriptionSimple || job.description || `${job.title} at ${job.employer}`,
    url,
  };

  if (job.salaryMin && job.salaryMax) {
    jsonLd.baseSalary = {
      '@type': 'MonetaryAmount',
      currency: 'INR',
      value: {
        '@type': 'QuantitativeValue',
        minValue: job.salaryMin,
        maxValue: job.salaryMax,
        unitText: 'YEAR',
      },
    };
  }

  return jsonLd;
}

export function generateExamJsonLd(exam: {
  name: string;
  organisation?: string | null;
  description?: string | null;
  slug: string;
  applicationDeadline?: string | null;
  examDate?: string | null;
  profession?: string;
}, baseUrl: string = 'https://skillcase.in') {
  const profession = exam.profession || 'nursing';
  return {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: exam.name,
    description: exam.description || `Recruitment Examination for ${exam.name} by ${exam.organisation || 'Official Authority'}`,
    startDate: exam.examDate ? new Date(exam.examDate).toISOString() : undefined,
    endDate: exam.applicationDeadline ? new Date(exam.applicationDeadline).toISOString() : undefined,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    organizer: {
      '@type': 'Organization',
      name: exam.organisation || 'Official Examination Authority',
    },
    url: `${baseUrl}/${profession}/exams/${exam.slug}`,
  };
}

export function generateFAQPageJsonLd(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbJsonLd(
  items: Array<{ name: string; url: string }>,
  baseUrl: string = 'https://skillcase.in'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${baseUrl}${item.url}`,
    })),
  };
}
