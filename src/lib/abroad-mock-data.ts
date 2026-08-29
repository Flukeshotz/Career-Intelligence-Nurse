export interface AbroadNursingJob {
  id: string;
  slug: string;
  country: 'Ireland' | 'Germany' | 'UAE';
  countryCode: 'IE' | 'DE' | 'AE';
  flagEmoji: string;
  hospital: string;
  location: string;
  title: string;
  salaryLocal: string;
  salaryInr: string;
  qualification: string;
  languageRequirement: string;
  registrationCouncil: string;
  experienceRequired: string;
  vacancies: number;
  benefits: string[];
  selectionProcess: string[];
  officialPortalUrl: string;
  description: string;
  badge: string;
}

export const ABROAD_NURSING_JOBS: AbroadNursingJob[] = [
  {
    id: 'abroad-ie-hse-01',
    slug: 'hse-ireland-staff-nurse-dublin-2026',
    country: 'Ireland',
    countryCode: 'IE',
    flagEmoji: '🇮🇪',
    hospital: 'Health Service Executive (HSE) & St. James’s Hospital',
    location: 'Dublin, Cork & Galway, Ireland',
    title: 'Staff Nurse (ICU, Medical-Surgical, OT, Emergency)',
    salaryLocal: '€36,500 – €48,000 / year',
    salaryInr: '₹32.8 Lakh – ₹43.2 Lakh / year',
    qualification: 'B.Sc. Nursing or GNM with active State Nursing Council registration',
    languageRequirement: 'OET (Grade B in all sub-tests, C+ in writing) OR IELTS Academic 7.0',
    registrationCouncil: 'NMBI (Nursing and Midwifery Board of Ireland)',
    experienceRequired: 'Minimum 1–2 years of clinical experience in a 100+ bed hospital',
    vacancies: 450,
    badge: 'Fast-track NMBI Decision Letter',
    benefits: [
      'Flight tickets to Ireland reimbursed up to €1,000',
      '4 weeks free initial hospital accommodation provided',
      'NMBI registration & RCSI aptitude test fee coverage',
      'Critical Skills Employment Permit (Permanent Residency pathway in 2 yrs)',
    ],
    selectionProcess: [
      'NMBI Overseas Qualification Assessment',
      'Online Video Interview with HSE Hospital Panel',
      'Employment Permit Issuance & Stamp 1 Visa',
      'RCSI Aptitude Test / 6-Week Clinical Adaptation in Ireland',
    ],
    officialPortalUrl: 'https://www.hse.ie/eng/staff/jobs/',
    description:
      'Direct recruitment through Ireland Public Health Service Executive across Tier 1 university teaching hospitals in Dublin, Galway, and Limerick with full relocation sponsorship.',
  },
  {
    id: 'abroad-de-charite-02',
    slug: 'charite-berlin-helios-germany-registered-nurse-2026',
    country: 'Germany',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    hospital: 'Charité Universitätsmedizin Berlin & Helios Kliniken',
    location: 'Berlin, Munich & Frankfurt, Germany',
    title: 'Registered Nurse (Pflegefachkraft – All Specialties)',
    salaryLocal: '€38,000 – €52,000 / year',
    salaryInr: '₹34.2 Lakh – ₹46.8 Lakh / year',
    qualification: 'B.Sc. Nursing or 3-Year GNM Diploma',
    languageRequirement: 'German Language B1 level to travel; B2 level for full German license (Urkunde)',
    registrationCouncil: 'State Health Authority (Landesamt für Gesundheit und Soziales)',
    experienceRequired: '0–1 year minimum (fresh B.Sc. graduates eligible)',
    vacancies: 600,
    badge: '100% Employer Funded Language & Visa',
    benefits: [
      '100% Free German Language Training up to B2 level',
      '€2,000 one-time relocation & settling-in bonus',
      '30 days paid annual leave + German social security & pension',
      'Direct pathway to German Permanent Residence (Niederlassungserlaubnis) in 3 years',
    ],
    selectionProcess: [
      'Document Translation & German Deficit Assessment (Defizitbescheid)',
      'Employer Interview with German Hospital Representative',
      'German Visa (Section 16d / Working Visa) Processing',
      'Kenntnisprüfung or 6-Month Adaptation course in Germany',
    ],
    officialPortalUrl: 'https://www.make-it-in-germany.com/en/jobs/nursing-in-germany',
    description:
      'Government-supported adaptation recruitment into world-renowned German university medical centres with full salary payment from Day 1 during adaptation.',
  },
  {
    id: 'abroad-ae-dha-cleveland-03',
    slug: 'dha-dubai-cleveland-clinic-abu-dhabi-staff-nurse-2026',
    country: 'UAE',
    countryCode: 'AE',
    flagEmoji: '🇦🇪',
    hospital: 'Dubai Health Authority (DHA) & Cleveland Clinic Abu Dhabi',
    location: 'Dubai & Abu Dhabi, United Arab Emirates',
    title: 'Staff Nurse / Registered Nurse (ICU, Cardiology, NICU)',
    salaryLocal: 'AED 9,500 – AED 15,000 / month (TAX FREE)',
    salaryInr: '₹2.1 Lakh – ₹3.3 Lakh / month (Zero Tax)',
    qualification: 'B.Sc. Nursing (or GNM with 3+ years experience)',
    languageRequirement: 'English fluency (No OET/IELTS required; Prometric CBT Test required)',
    registrationCouncil: 'DHA (Dubai) or DOH (Abu Dhabi) Nursing License',
    experienceRequired: '2 years continuous recent experience in a 100+ bed hospital',
    vacancies: 320,
    badge: 'Tax-Free + Furnished Family Accommodation',
    benefits: [
      '100% Tax-Free monthly earnings paid directly in UAE Dirhams',
      'Free furnished hospital accommodation or generous housing allowance',
      'Annual round-trip flight ticket to India for nurse + dependents',
      'Comprehensive UAE Health & Malpractice Insurance coverage',
    ],
    selectionProcess: [
      'DataFlow Primary Source Verification (PSV)',
      'DHA / DOH Prometric Computer-Based MCQ Exam',
      'Hospital Departmental Clinical Interview',
      'UAE Employment Residence Visa & DHA License Issuance',
    ],
    officialPortalUrl: 'https://www.dha.gov.ae/en/careers',
    description:
      'Premier tertiary healthcare recruitment across Dubai and Abu Dhabi hospital networks offering tax-free compensation, furnished apartments, and comprehensive expatriate benefits.',
  },
];
