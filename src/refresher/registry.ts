/**
 * SERVER-ONLY. The corroborating sources the refresher reads to confirm each record.
 *
 * These are third-party reports (exam-prep and news sites). They are deliberately NOT shown to
 * customers: they are competitors, and SkillCase's promise is that the OFFICIAL authority stays
 * visible. Never import this from a client component (verification.ts ships in the browser bundle).
 */
export interface Citation {
  label: string;
  url: string;
}

export const REFRESH_SOURCES: Record<string, Citation[]> = {
  'exam-norcet-2026': [
    { label: 'PW — AIIMS NORCET 11', url: 'https://www.pw.live/nursing/exams/aiims-norcet-11-recruitment-2026' },
    { label: 'CareerPower — NORCET 11', url: 'https://www.careerpower.in/blog/aiims-norcet-11-2026-exam' },
    { label: 'Testbook — AIIMS Nursing Officer', url: 'https://testbook.com/aiims-nursing-officer' },
    { label: 'Adda247 — AIIMS NORCET', url: 'https://www.adda247.com/exams/nursing/aiims-norcet/' },
  ],
  'exam-rrb-nurse-2026': [
    { label: 'CareerPower — RRB Nursing Superintendent', url: 'https://www.careerpower.in/blog/rrb-nursing-superintendent-recruitment-2026' },
    { label: 'Adda247 — RRB Nursing Superintendent', url: 'https://www.adda247.com/exams/nursing/rrb-nursing-superintendent-recruitment/' },
    { label: 'Testbook — RRB Paramedical CEN 05/2026', url: 'https://testbook.com/news/rrb-paramedical-staff-notification-2026-out/' },
  ],
  'exam-pgimer-no-2026': [
    { label: 'PW — PGIMER Nursing Officer', url: 'https://www.pw.live/nursing/exams/pgimer-nursing-officer-recruitment-2026' },
    { label: 'Adda247 — PGIMER Nursing Officer', url: 'https://www.adda247.com/exams/nursing/pgimer-chandigarh-nursing-officer-recruitment-2026/' },
    { label: 'FreeJobAlert — PGIMER Nursing Officer', url: 'https://www.freejobalert.com/articles/pgimer-nursing-officer-recruitment-2026-apply-online-for-243-posts-3067054' },
  ],
  'exam-osssc-nurse-2026': [
    { label: 'Testbook — OSSSC Nursing Officer', url: 'https://testbook.com/osssc-nursing-officer' },
    { label: 'CareerPower — OSSSC Nursing Officer', url: 'https://www.careerpower.in/blog/osssc-nursing-officer-recruitment-2026' },
    { label: 'Adda247 — OSSSC Nursing Officer', url: 'https://www.adda247.com/exams/nursing/osssc-nursing-officer-vacancy/' },
  ],
  'exam-mp-esb-nurse-2026': [
    { label: 'CareerPower — MPESB Nursing Officer', url: 'https://www.careerpower.in/blog/mpesb-nursing-officer-recruitment-2026' },
    { label: 'Adda247 — MPESB Nursing Officer', url: 'https://www.adda247.com/exams/nursing/mpesb-nursing-officer-and-sister-tutor-recruitment-2026/' },
    { label: 'Testbook — MPESB Nursing Officer', url: 'https://testbook.com/mpesb-nursing-officer' },
  ],
  'exam-ukmssb-nurse-2026': [
    { label: 'Testbook — UKMSSB Nursing Officer', url: 'https://testbook.com/news/ukmssb-nursing-officer-notification-2026-out/' },
    { label: 'Adda247 — UKMSSB Nursing Officer', url: 'https://www.adda247.com/exams/nursing/ukmssb-nursing-officer-recruitment-2026/' },
    { label: 'Medico Trick — UKMSSB Nursing Officer', url: 'https://medicotrick.com/vacancy/ukmssb-nursing-officer-recruitment-2026' },
  ],
  'exam-hssc-har-nurse-2026': [
    { label: 'PW — HSSC Staff Nurse', url: 'https://www.pw.live/nursing/exams/hssc-staff-nurse-recruitment-2026' },
    { label: 'Sarkari Rojgar Kendra — HSSC Staff Nurse', url: 'https://www.sarkarirojgarkendra.com/hssc-staff-nurse-sister-tutor-recruitment-2026-1803-vacancies/' },
    { label: 'RRBApply — HSSC Staff Nurse', url: 'https://rrbapply.com/hssc-staff-nurse-recruitment/' },
  ],
  'exam-ap-mhsrb-nurse-2026': [
    { label: 'PW — APMSRB Staff Nurse', url: 'https://www.pw.live/nursing/exams/apmsrb-staff-nurse-recruitment-2026' },
    { label: 'CareerPower — APMSRB Staff Nurse', url: 'https://www.careerpower.in/blog/apmsrb-staff-nurse-recruitment-2026' },
    { label: 'Adda247 — APMSRB Recruitment', url: 'https://www.adda247.com/exams/nursing/apmsrb-recruitment-2026/' },
  ],
};
