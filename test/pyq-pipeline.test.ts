// test/pyq-pipeline.test.ts
// Automated Test Suite for SkillCase Verified PYQ Pipeline

import { verifySource, WHITELISTED_DOMAINS } from '../src/scraper/pyq/verifier';
import { computeSha256 } from '../src/scraper/pyq/pipeline';
import { EXAM_PAPERS } from '../src/lib/pyq-mock-data';
import { MASTER_NURSING_QUESTIONS } from '../src/lib/pyq-questions-dataset';

describe('SkillCase Verified PYQ Pipeline Audit & Integrity Tests', () => {

  // Test 1: Whitelist Domain Validation
  test('Approved official domain (aiimsexams.ac.in) passes verification', () => {
    const result = verifySource({
      url: 'https://www.aiimsexams.ac.in/norcet-7-key',
      domain: 'aiimsexams.ac.in',
      examName: 'AIIMS NORCET 7',
      examYear: 2024,
      shift: 'Shift 1',
      hasOfficialNotice: true,
      extractedTextSample: '1. A 48-year-old male (A) RCA (B) LAD (C) LCx (D) Main',
    });

    expect(result.isValid).toBe(true);
    expect(result.sourceTier).toBe('TIER_1_OFFICIAL');
    expect(result.score).toBeGreaterThanOrEqual(80);
  });

  // Test 2: Unverified / Third-Party Domain is Downgraded
  test('Third-party coaching domain is downgraded to MEMORY_BASED and never marked OFFICIAL', () => {
    const result = verifySource({
      url: 'https://random-coaching-portal.com/norcet-paper',
      domain: 'random-coaching-portal.com',
      examName: 'NORCET Unofficial',
      examYear: 2024,
      hasOfficialNotice: false,
    });

    expect(result.isValid).toBe(false);
    expect(result.sourceTier).not.toBe('TIER_1_OFFICIAL');
  });

  // Test 3: Synthetic / LLM Questions Rejection
  test('Synthetic or empty documents without MCQ structure fail publication gate', () => {
    const result = verifySource({
      url: 'https://aiimsexams.ac.in/empty-page',
      domain: 'aiimsexams.ac.in',
      examName: '',
      examYear: 2024,
      extractedTextSample: 'This is just a blog post with no questions.',
      hasOfficialNotice: false,
    });

    expect(result.isValid).toBe(false);
  });

  // Test 4: Cryptographic SHA-256 Immutability
  test('SHA-256 hash is deterministic and tamper-evident', () => {
    const textA = 'AIIMS NORCET 7 Sep 2024 Stage 1 Official Master Paper';
    const hash1 = computeSha256(textA);
    const hash2 = computeSha256(textA);
    const hash3 = computeSha256(textA + ' [MODIFIED]');

    expect(hash1).toBe(hash2);
    expect(hash1).not.toBe(hash3);
    expect(hash1.length).toBe(64);
  });

  // Test 5: All 50 Exams Have Provenance & Answer Key Metadata
  test('All registered examination papers in EXAM_PAPERS possess official source provenance', () => {
    expect(EXAM_PAPERS.length).toBeGreaterThanOrEqual(100);

    for (const paper of EXAM_PAPERS) {
      expect(paper.id).toBeDefined();
      expect(paper.examId).toBeDefined();
      expect(paper.officialSourceUrl).toBeDefined();
      expect(paper.totalQuestions).toBeGreaterThan(0);
      expect(paper.officialKeyAvailable).toBe(true);
    }
  });

  // Test 6: Question Dataset Has Clinical Rationales & Valid Options
  test('Master question dataset items have 4 options, valid correct answer, and clinical rationales', () => {
    expect(MASTER_NURSING_QUESTIONS.length).toBeGreaterThanOrEqual(8);

    for (const q of MASTER_NURSING_QUESTIONS) {
      expect(q.options.length).toBe(4);
      expect(['A', 'B', 'C', 'D']).toContain(q.correctOption);
      expect(q.rationale.length).toBeGreaterThan(10);
      expect(q.subject).toBeDefined();
    }
  });
});
