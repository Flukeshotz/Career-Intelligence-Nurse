export interface AbroadNursingJob {
  id: string;
  slug: string;
  country: 'Ireland' | 'Germany' | 'UAE';
  countryCode: 'IE' | 'DE' | 'AE';
  flagEmoji: string;
  hospital: string;
  shortHospital: string;
  location: string;
  title: string;
  shortTitle: string;
  salaryHeadline: string;
  salaryLocal: string;
  salaryInr: string;
  vacancies: number;
  tags: string[];
  officialPortalUrl: string;
  description: string;
}

export const ABROAD_NURSING_JOBS: AbroadNursingJob[] = [
  {
    id: 'abroad-ie-01',
    slug: 'hse-ireland-staff-nurse-2026',
    country: 'Ireland',
    countryCode: 'IE',
    flagEmoji: '🇮🇪',
    hospital: 'Health Service Executive (HSE) & St. James’s Hospital',
    shortHospital: 'HSE University Teaching Hospitals',
    location: 'Dublin, Cork & Galway',
    title: 'Staff Nurse (ICU, Med-Surg, OT, Emergency)',
    shortTitle: 'Staff Nurse',
    salaryHeadline: '₹32.8L – ₹43.2L / yr',
    salaryLocal: '€36,500 – €48,000 / yr',
    salaryInr: '₹32.8L – ₹43.2L / yr',
    vacancies: 450,
    tags: ['🗣️ OET / IELTS', '📜 NMBI Direct', '✈️ Free Housing + Visa'],
    officialPortalUrl: 'https://www.hse.ie/eng/staff/jobs/',
    description: 'Direct recruitment into Ireland public health hospitals with complete relocation reimbursement and permanent residency pathway in 2 years.',
  },
  {
    id: 'abroad-de-02',
    slug: 'germany-registered-nurse-2026',
    country: 'Germany',
    countryCode: 'DE',
    flagEmoji: '🇩🇪',
    hospital: 'Charité Universitätsmedizin Berlin & Helios Kliniken',
    shortHospital: 'Charité Berlin & Helios Hospital Network',
    location: 'Berlin, Munich & Frankfurt',
    title: 'Registered Nurse (Pflegefachkraft – All Specialties)',
    shortTitle: 'Registered Nurse',
    salaryHeadline: '₹34.2L – ₹46.8L / yr',
    salaryLocal: '€38,000 – €52,000 / yr',
    salaryInr: '₹34.2L – ₹46.8L / yr',
    vacancies: 600,
    tags: ['🗣️ German B1/B2', '🎓 B.Sc. / GNM', '✈️ 100% Free Language + Visa'],
    officialPortalUrl: 'https://www.make-it-in-germany.com/en/jobs/nursing-in-germany',
    description: 'Government-supported nursing pathway with fully funded German language classes, visa sponsorship, and permanent residence in 3 years.',
  },
  {
    id: 'abroad-ae-03',
    slug: 'uae-dha-cleveland-staff-nurse-2026',
    country: 'UAE',
    countryCode: 'AE',
    flagEmoji: '🇦🇪',
    hospital: 'Dubai Health Authority (DHA) & Cleveland Clinic Abu Dhabi',
    shortHospital: 'DHA Dubai & Cleveland Clinic Abu Dhabi',
    location: 'Dubai & Abu Dhabi',
    title: 'Staff Nurse / Registered Nurse (ICU, Cardiology, OT)',
    shortTitle: 'Staff Nurse',
    salaryHeadline: '₹2.1L – ₹3.3L / mo (Tax-Free)',
    salaryLocal: 'AED 9,500 – AED 15,000 / mo',
    salaryInr: '₹25.2L – ₹39.6L / yr',
    vacancies: 350,
    tags: ['💰 100% Tax-Free Pay', '📜 DHA / DOH CBT', '🏠 Furnished Accommodation'],
    officialPortalUrl: 'https://www.dha.gov.ae/en/careers',
    description: 'Zero income tax packages in top UAE tertiary medical centres with free furnished housing and fast-track Prometric credentialing.',
  },
];
