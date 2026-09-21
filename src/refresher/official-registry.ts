/**
 * SERVER-ONLY. The official notification document (PDF or page) for each record.
 * A value read from one of these is only trusted if it appears word-for-word in the document
 * (see official.ts). Add a URL here as soon as the official notice is known.
 */
export interface OfficialDoc {
  url: string;
  /** Tells the reader where this recruitment sits inside a multi-recruitment notice. */
  note?: string;
}

export const OFFICIAL_DOCS: Record<string, OfficialDoc> = {
  'exam-rrb-nurse-2026': { url: 'https://rrb.indianrailways.gov.in/-/image/1789382253677CEN_05_2026_Paramedical_Categories_English.pdf/examsDocuments' },
  'exam-hssc-har-nurse-2026': {
    url: 'https://hssc.gov.in/file/ac1f23cd-99c4-13a6-819c-32aaa1600063/advertisements',
    note: 'Advt. No. 04/2026 covers many Group C posts. The Nursing recruitment is the rows for Nurse / Staff Nurse (ESI, Health, DMER) and Sister Tutor. Report dates from the advertisement timeline; leave vacancies null because the notice lists them per department, not as one total.',
  },
  'exam-ukmssb-nurse-2026': { url: 'https://ukmssb.org/wp-content/uploads/2026/06/Nursing-officer-Advertisment.pdf' },
};
