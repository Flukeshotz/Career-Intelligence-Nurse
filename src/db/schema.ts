import {
  pgTable,
  uuid,
  varchar,
  text,
  integer,
  numeric,
  boolean,
  timestamp,
  jsonb,
  check,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

// ============================================
// PROFESSIONS & REFERENCE DATA
// ============================================

export const professions = pgTable('professions', {
  id: uuid('id').defaultRandom().primaryKey(),
  code: varchar('code', { length: 50 }).unique().notNull(), // nursing, pharmacy...
  name: varchar('name', { length: 200 }).notNull(),
  urlSegment: varchar('url_segment', { length: 50 }).unique().notNull(), // 'nursing' -> /nursing/...
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export const qualifications = pgTable(
  'qualifications',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    professionId: uuid('profession_id')
      .references(() => professions.id, { onDelete: 'cascade' })
      .notNull(),
    code: varchar('code', { length: 50 }).notNull(), // gnm, bsc_nursing, post_basic, msc, other
    name: varchar('name', { length: 200 }).notNull(),
    rank: integer('rank'), // seniority for "meets or exceeds"
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    unqProfessionCode: uniqueIndex('idx_qualifications_prof_code').on(
      table.professionId,
      table.code
    ),
  })
);

export const roles = pgTable(
  'roles',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    professionId: uuid('profession_id')
      .references(() => professions.id, { onDelete: 'cascade' })
      .notNull(),
    code: varchar('code', { length: 50 }).notNull(), // staff_nurse, icu, ot...
    name: varchar('name', { length: 200 }).notNull(),
  },
  (table) => ({
    unqProfessionCode: uniqueIndex('idx_roles_prof_code').on(
      table.professionId,
      table.code
    ),
  })
);

// ============================================
// USERS & PROFILES
// ============================================

export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: varchar('email', { length: 255 }).unique().notNull(),
  passwordHash: varchar('password_hash', { length: 255 }),
  authProvider: varchar('auth_provider', { length: 50 }).default('email'), // email, google, phone
  emailVerified: boolean('email_verified').default(false),
  isActive: boolean('is_active').default(true),
  createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
});

export const profiles = pgTable(
  'profiles',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id')
      .unique()
      .references(() => users.id, { onDelete: 'cascade' }),
    professionId: uuid('profession_id').references(() => professions.id),
    qualificationId: uuid('qualification_id').references(() => qualifications.id),
    fullName: varchar('full_name', { length: 255 }),
    dob: timestamp('dob', { withTimezone: false }),
    gender: varchar('gender', { length: 20 }), // female, male, other
    category: varchar('category', { length: 30 }), // ur, ews, obc, sc, st, pwd, other
    citizenship: varchar('citizenship', { length: 100 }).default('India'),
    domicileState: varchar('domicile_state', { length: 100 }),
    state: varchar('state', { length: 100 }),
    city: varchar('city', { length: 100 }),
    experience: varchar('experience', { length: 50 }), // fresher, 0-2, 2-5, 5+
    preference: varchar('preference', { length: 50 }), // government, private, both, abroad
    
    // Multi-entity JSONB structures for extensible Career Passport
    qualificationsList: jsonb('qualifications_list'), // Array of { code, institution, year, isPrimary }
    employmentHistory: jsonb('employment_history'), // Array of { employer, role, department, startDate, endDate, isCurrent, isGov }
    registrationDetails: jsonb('registration_details'), // { isRegistered, council, state, regNumber, expiryDate }
    languagesList: jsonb('languages_list'), // Array of { language, speak, read, write }
    specialConditions: jsonb('special_conditions'), // Array of condition strings ['ex_serviceman', 'govt_employee', etc.]
    fieldProvenance: jsonb('field_provenance'), // Record of { [field]: { source, status } }
    
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    idxProfQual: index('idx_profiles_qualification').on(table.qualificationId),
    idxProfProf: index('idx_profiles_profession').on(table.professionId),
    idxProfLoc: index('idx_profiles_location').on(table.state, table.city),
    idxProfPref: index('idx_profiles_preference').on(table.preference),
  })
);

// ============================================
// JOBS
// ============================================

export const jobs = pgTable(
  'jobs',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    professionId: uuid('profession_id')
      .references(() => professions.id)
      .notNull(),
    slug: varchar('slug', { length: 300 }).notNull(),
    title: varchar('title', { length: 500 }).notNull(),
    employer: varchar('employer', { length: 500 }).notNull(),
    type: varchar('type', { length: 50 }).notNull(), // government, private
    locationState: varchar('location_state', { length: 100 }),
    locationCity: varchar('location_city', { length: 200 }),
    role: varchar('role', { length: 200 }),
    qualification: varchar('qualification', { length: 100 }),
    experienceMin: integer('experience_min'), // in years
    experienceMax: integer('experience_max'),
    registration: varchar('registration', { length: 200 }),
    salaryMin: integer('salary_min'),
    salaryMax: integer('salary_max'),
    salaryRaw: varchar('salary_raw', { length: 200 }),
    vacancyCount: integer('vacancy_count'),
    ageMin: integer('age_min'),
    ageMax: integer('age_max'),
    applicationDeadline: timestamp('application_deadline', { withTimezone: true }),
    status: varchar('status', { length: 50 }).default('open'), // open, upcoming, closed, expired
    officialNotificationUrl: text('official_notification_url'),
    applicationUrl: text('application_url'),
    source: varchar('source', { length: 200 }),
    sourceType: varchar('source_type', { length: 50 }), // official, verified_secondary, other
    sourceUrl: text('source_url'),
    description: text('description'),
    descriptionSimple: text('description_simple'),
    rawData: jsonb('raw_data'),
    lastVerified: timestamp('last_verified', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    idxJobsSlug: uniqueIndex('idx_jobs_slug').on(table.professionId, table.slug),
    idxJobsProf: index('idx_jobs_profession').on(table.professionId),
    idxJobsType: index('idx_jobs_type').on(table.type),
    idxJobsStatus: index('idx_jobs_status').on(table.status),
    idxJobsQual: index('idx_jobs_qualification').on(table.qualification),
    idxJobsLoc: index('idx_jobs_location').on(table.locationState, table.locationCity),
    idxJobsDeadline: index('idx_jobs_deadline').on(table.applicationDeadline),
    idxJobsCreated: index('idx_jobs_created').on(table.createdAt),
  })
);

// ============================================
// EXAMS
// ============================================

export const exams = pgTable(
  'exams',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    professionId: uuid('profession_id')
      .references(() => professions.id)
      .notNull(),
    slug: varchar('slug', { length: 300 }).notNull(),
    name: varchar('name', { length: 500 }).notNull(),
    organisation: varchar('organisation', { length: 500 }),
    qualification: varchar('qualification', { length: 100 }),
    eligibility: text('eligibility'),
    eligibilitySimple: text('eligibility_simple'),
    vacancies: integer('vacancies'),
    applicationStart: timestamp('application_start', { withTimezone: true }),
    applicationDeadline: timestamp('application_deadline', { withTimezone: true }),
    examDate: timestamp('exam_date', { withTimezone: true }),
    admitCardDate: timestamp('admit_card_date', { withTimezone: true }),
    admitCardUrl: text('admit_card_url'),
    syllabusUrl: text('syllabus_url'),
    previousPapersUrl: text('previous_papers_url'),
    resultDate: timestamp('result_date', { withTimezone: true }),
    resultUrl: text('result_url'),
    cutoff: varchar('cutoff', { length: 200 }),
    officialNotificationUrl: text('official_notification_url'),
    applicationUrl: text('application_url'),
    status: varchar('status', { length: 50 }).default('upcoming'),
    source: varchar('source', { length: 200 }),
    sourceType: varchar('source_type', { length: 50 }),
    rawData: jsonb('raw_data'),
    lastVerified: timestamp('last_verified', { withTimezone: true }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    idxExamsSlug: uniqueIndex('idx_exams_slug').on(table.professionId, table.slug),
    idxExamsProf: index('idx_exams_profession').on(table.professionId),
    idxExamsStatus: index('idx_exams_status').on(table.status),
    idxExamsQual: index('idx_exams_qualification').on(table.qualification),
    idxExamsDeadline: index('idx_exams_deadline').on(table.applicationDeadline),
    idxExamsDate: index('idx_exams_exam_date').on(table.examDate),
  })
);

// ============================================
// SLUG HISTORY (301 redirects)
// ============================================

export const slugHistory = pgTable(
  'slug_history',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    oldSlug: varchar('old_slug', { length: 300 }).unique().notNull(),
    jobId: uuid('job_id').references(() => jobs.id, { onDelete: 'cascade' }),
    examId: uuid('exam_id').references(() => exams.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    slugHistoryXor: check(
      'slug_history_target_xor',
      sql`(${table.jobId} IS NOT NULL) <> (${table.examId} IS NOT NULL)`
    ),
    idxSlugHistoryLookup: index('idx_slug_history_lookup').on(table.oldSlug),
  })
);

// ============================================
// SAVED OPPORTUNITIES
// ============================================

export const savedOpportunities = pgTable(
  'saved_opportunities',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    jobId: uuid('job_id').references(() => jobs.id, { onDelete: 'cascade' }),
    examId: uuid('exam_id').references(() => exams.id, { onDelete: 'cascade' }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    savedXor: check(
      'saved_opportunity_target_xor',
      sql`(${table.jobId} IS NOT NULL) <> (${table.examId} IS NOT NULL)`
    ),
    idxSavedUser: index('idx_saved_user').on(table.userId),
    idxSavedJob: index('idx_saved_job').on(table.jobId),
    idxSavedExam: index('idx_saved_exam').on(table.examId),
  })
);

// ============================================
// OPPORTUNITY REQUIREMENTS (eligibility intelligence)
// ============================================

export const opportunityRequirements = pgTable(
  'opportunity_requirements',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    jobId: uuid('job_id').references(() => jobs.id, { onDelete: 'cascade' }),
    examId: uuid('exam_id').references(() => exams.id, { onDelete: 'cascade' }),
    kind: varchar('kind', { length: 50 }).notNull(), // qualification, experience, registration, age, language, document, other
    operator: varchar('operator', { length: 20 }), // gte, lte, in, eq, exists
    valueNumeric: numeric('value_numeric'),
    valueText: text('value_text').array(), // accepted qualification codes
    isMandatory: boolean('is_mandatory').default(true),
    rawText: text('raw_text').notNull(),
    simpleText: text('simple_text'),
    remedyText: text('remedy_text'),
    orGroup: varchar('or_group', { length: 50 }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    reqXor: check(
      'requirement_target_xor',
      sql`(${table.jobId} IS NOT NULL) <> (${table.examId} IS NOT NULL)`
    ),
    idxReqJob: index('idx_requirements_job').on(table.jobId),
    idxReqExam: index('idx_requirements_exam').on(table.examId),
  })
);

// ============================================
// TRACKED OPPORTUNITIES (the retention engine)
// ============================================

export const trackedOpportunities = pgTable(
  'tracked_opportunities',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    userId: uuid('user_id')
      .references(() => users.id, { onDelete: 'cascade' })
      .notNull(),
    jobId: uuid('job_id').references(() => jobs.id, { onDelete: 'cascade' }),
    examId: uuid('exam_id').references(() => exams.id, { onDelete: 'cascade' }),
    stage: varchar('stage', { length: 50 }).default('interested').notNull(),
    // interested, applied, admit_card_awaited, exam_scheduled, exam_taken, result_awaited, result_out, counselling, closed
    outcome: varchar('outcome', { length: 50 }), // selected, not_selected, withdrew, lapsed
    appliedAt: timestamp('applied_at', { withTimezone: true }),
    notes: text('notes'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    trackedXor: check(
      'tracked_target_xor',
      sql`(${table.jobId} IS NOT NULL) <> (${table.examId} IS NOT NULL)`
    ),
    idxTrackedUserStage: index('idx_tracked_user_active').on(
      table.userId,
      table.stage
    ),
    idxTrackedJob: index('idx_tracked_job').on(table.jobId),
    idxTrackedExam: index('idx_tracked_exam').on(table.examId),
  })
);

// ============================================
// TRACKED STAGE EVENTS
// ============================================

export const trackedStageEvents = pgTable(
  'tracked_stage_events',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    trackedOpportunityId: uuid('tracked_opportunity_id')
      .references(() => trackedOpportunities.id, { onDelete: 'cascade' })
      .notNull(),
    fromStage: varchar('from_stage', { length: 50 }),
    toStage: varchar('to_stage', { length: 50 }).notNull(),
    triggeredBy: varchar('triggered_by', { length: 50 }).default('user'), // user, system, curator
    notes: text('notes'),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    idxStageEventsTracked: index('idx_stage_events_tracked').on(
      table.trackedOpportunityId
    ),
  })
);

// ============================================
// SHARES (acquisition loops)
// ============================================

export const shares = pgTable(
  'shares',
  {
    id: uuid('id').defaultRandom().primaryKey(),
    opportunityType: varchar('opportunity_type', { length: 20 }).notNull(), // job, exam
    jobId: uuid('job_id').references(() => jobs.id, { onDelete: 'cascade' }),
    examId: uuid('exam_id').references(() => exams.id, { onDelete: 'cascade' }),
    userId: uuid('user_id').references(() => users.id, { onDelete: 'set null' }),
    shareToken: varchar('share_token', { length: 50 }).unique().notNull(),
    channel: varchar('channel', { length: 50 }).default('whatsapp'), // whatsapp, telegram, direct
    visitCount: integer('visit_count').default(0),
    signupCount: integer('signup_count').default(0),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
  },
  (table) => ({
    sharesXor: check(
      'shares_target_xor',
      sql`(${table.jobId} IS NOT NULL) <> (${table.examId} IS NOT NULL)`
    ),
    idxSharesToken: index('idx_shares_token').on(table.shareToken),
  })
);
