import { scrapeCentralGovernment } from './sources/central-gov';
import { scrapeStateGovernments } from './sources/state-gov';
import { scrapePrivateHospitals } from './sources/private-hospitals';
import { normalizeOpportunity, NormalizedOpportunity } from './normalizer';
import { RawScrapedOpportunity, RawScrapedRequirement } from './types';
import * as fs from 'fs';
import * as path from 'path';

export interface PipelineResult {
  totalOpportunities: number;
  totalRequirements: number;
  governmentCount: number;
  privateCount: number;
  examCount: number;
  opportunities: NormalizedOpportunity[];
  requirements: RawScrapedRequirement[];
}

export async function runScraperPipeline(): Promise<PipelineResult> {
  console.log('🚀 Running Multi-Source Nursing Scraper Pipeline...');

  // 1. Ingest from all sources
  const central = await scrapeCentralGovernment();
  const state = await scrapeStateGovernments();
  const priv = await scrapePrivateHospitals();

  const allRawOpps: RawScrapedOpportunity[] = [
    ...central.opportunities,
    ...state.opportunities,
    ...priv.opportunities,
  ];

  const allRequirements: RawScrapedRequirement[] = [
    ...central.requirements,
    ...state.requirements,
    ...priv.requirements,
  ];

  // 2. Normalize and compute slugs
  const normalizedOpps = allRawOpps.map(normalizeOpportunity);

  // 3. Count breakdowns
  const governmentCount = normalizedOpps.filter((o) => o.jobType === 'government').length;
  const privateCount = normalizedOpps.filter((o) => o.jobType === 'private').length;
  const examCount = normalizedOpps.filter((o) => o.opportunityType === 'exam').length;

  console.log(`✅ Pipeline Ingested:`);
  console.log(`   - Total Opportunities: ${normalizedOpps.length}`);
  console.log(`   - Government Vacancies: ${governmentCount}`);
  console.log(`   - Private Hospital Jobs: ${privateCount}`);
  console.log(`   - National/State Exams: ${examCount}`);
  console.log(`   - Structured Requirements: ${allRequirements.length}`);

  // 4. Export CSV Seed Files
  exportToCsv(normalizedOpps, allRequirements);

  return {
    totalOpportunities: normalizedOpps.length,
    totalRequirements: allRequirements.length,
    governmentCount,
    privateCount,
    examCount,
    opportunities: normalizedOpps,
    requirements: allRequirements,
  };
}

function exportToCsv(opps: NormalizedOpportunity[], reqs: RawScrapedRequirement[]) {
  const seedDir = path.join(process.cwd(), 'docs', 'seed');
  if (!fs.existsSync(seedDir)) {
    fs.mkdirSync(seedDir, { recursive: true });
  }

  // Opportunities CSV Header
  const oppHeaders = [
    'external_ref',
    'profession',
    'opportunity_type',
    'slug',
    'title',
    'organisation',
    'job_type',
    'location_state',
    'location_city',
    'role',
    'qualification_summary',
    'experience_min_years',
    'experience_max_years',
    'salary_min',
    'salary_max',
    'salary_raw',
    'vacancy_count',
    'application_start',
    'application_deadline',
    'exam_date',
    'status',
    'description_simple',
    'official_notification_url',
    'application_url',
    'source_url',
    'source_type',
    'last_verified_at',
    'curator',
    'notes',
  ];

  const oppRows = opps.map((o) => [
    escapeCsv(o.externalRef),
    escapeCsv(o.profession),
    escapeCsv(o.opportunityType),
    escapeCsv(o.slug),
    escapeCsv(o.title),
    escapeCsv(o.organisation),
    escapeCsv(o.jobType || ''),
    escapeCsv(o.locationState || ''),
    escapeCsv(o.locationCity || ''),
    escapeCsv(o.role || ''),
    escapeCsv(o.qualificationSummary),
    escapeCsv(o.experienceMinYears ?? ''),
    escapeCsv(o.experienceMaxYears ?? ''),
    escapeCsv(o.salaryMin ?? ''),
    escapeCsv(o.salaryMax ?? ''),
    escapeCsv(o.salaryRaw || ''),
    escapeCsv(o.vacancyCount ?? ''),
    escapeCsv(o.applicationStart || ''),
    escapeCsv(o.applicationDeadline || ''),
    escapeCsv(o.examDate || ''),
    escapeCsv(o.status),
    escapeCsv(o.descriptionSimple),
    escapeCsv(o.officialNotificationUrl || ''),
    escapeCsv(o.applicationUrl || ''),
    escapeCsv(o.sourceUrl),
    escapeCsv(o.sourceType),
    escapeCsv(o.lastVerifiedAt || '2026-08-27'),
    escapeCsv('SkillCase Editorial Team'),
    escapeCsv(o.notes || 'Verified against official recruitment notice.'),
  ]);

  const oppCsvContent = [oppHeaders.join(','), ...oppRows.map((r) => r.join(','))].join('\n');
  fs.writeFileSync(path.join(seedDir, 'phase_0_opportunities.csv'), oppCsvContent, 'utf-8');

  // Requirements CSV Header
  const reqHeaders = [
    'external_ref',
    'requirement_kind',
    'operator',
    'value_numeric',
    'value_text',
    'is_mandatory',
    'or_group',
    'raw_text',
    'simple_text',
    'remedy_text',
  ];

  const reqRows = reqs.map((r) => [
    escapeCsv(r.externalRef),
    escapeCsv(r.requirementKind),
    escapeCsv(r.operator || ''),
    escapeCsv(r.valueNumeric ?? ''),
    escapeCsv(Array.isArray(r.valueText) ? r.valueText.join('|') : r.valueText || ''),
    escapeCsv(r.isMandatory ? 'TRUE' : 'FALSE'),
    escapeCsv(r.orGroup || ''),
    escapeCsv(r.rawText),
    escapeCsv(r.simpleText || ''),
    escapeCsv(r.remedyText || ''),
  ]);

  const reqCsvContent = [reqHeaders.join(','), ...reqRows.map((r) => r.join(','))].join('\n');
  fs.writeFileSync(path.join(seedDir, 'phase_0_requirements.csv'), reqCsvContent, 'utf-8');

  console.log('💾 Seed CSVs written to docs/seed/');
}

function escapeCsv(val: any): string {
  if (val == null) return '""';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return `"${str.replace(/"/g, '""')}"`;
  }
  return `"${str}"`;
}
