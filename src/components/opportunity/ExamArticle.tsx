import Link from 'next/link';
import { CalendarPlus, ExternalLink } from 'lucide-react';
import type { MockExam } from '@/lib/mock-data';
import { INITIAL_EXAMS } from '@/lib/mock-data';
import { VERIFIED_FACTS } from '@/lib/verified-facts';
import { overviewRows, importantDates, faqs, Row } from '@/lib/exam-content';
import { getTrust } from '@/lib/verification';
import { ExamCard } from './ExamCard';

/**
 * The exam page body, laid out like a well-structured explainer: on-this-page links, an overview
 * table, important dates (with add-to-calendar), vacancy, eligibility, selection, pay, how to
 * apply, and FAQs. Every value comes from exam-content.ts, which uses only verified data.
 * A section with nothing verified to say is left out rather than padded.
 */

const h2: React.CSSProperties = { fontSize: '1.05rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '0 0 12px' };

function Table({ rows, head }: { rows: Row[]; head: [string, string] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} style={{ textAlign: 'left', padding: '8px 10px', background: 'var(--sc-surface-secondary)', color: 'var(--sc-ink-600)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} style={{ borderBottom: '1px solid var(--sc-line-100)' }}>
              <td style={{ padding: '9px 10px', fontWeight: 700, color: 'var(--sc-navy-900)', width: '38%', verticalAlign: 'top' }}>{r.label}</td>
              <td style={{ padding: '9px 10px', color: 'var(--sc-ink-700)' }}>
                {r.value}
                {r.calendarUrl && (
                  <a
                    href={r.calendarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '10px', color: 'var(--sc-navy-700)', fontWeight: 700, fontSize: '0.78rem' }}
                  >
                    <CalendarPlus size={13} /> Add to calendar
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function ExamArticle({ exam, siteUrl }: { exam: MockExam; siteUrl?: string }) {
  const f = VERIFIED_FACTS[exam.id] ?? {};
  const trust = getTrust(exam.id);
  const qa = faqs(exam);
  const related = INITIAL_EXAMS.filter((e) => e.id !== exam.id && !getTrust(e.id).suppressFromListings).slice(0, 4);

  const sections: Array<[string, string]> = [
    ['overview', 'Overview'],
    ['dates', 'Important dates'],
    ...(f.posts ? ([['vacancy', 'Vacancy details']] as Array<[string, string]>) : []),
    ...(f.eligibility || f.age ? ([['eligibility', 'Eligibility']] as Array<[string, string]>) : []),
    ...(f.selection ? ([['selection', 'Selection process']] as Array<[string, string]>) : []),
    ...(f.pattern ? ([['pattern', 'Exam pattern']] as Array<[string, string]>) : []),
    ...(f.pay ? ([['pay', 'Salary']] as Array<[string, string]>) : []),
    ['apply', 'How to apply'],
    ['faq', 'FAQs'],
  ];

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };

  return (
    <article>
      {/* Only feed search engines / AI answer engines records we stand behind. */}
      {!trust.suppressFromListings && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}

      <nav aria-label="On this page" className="sc-card" style={{ padding: '14px 16px', marginBottom: '16px' }}>
        <div style={{ fontSize: '0.72rem', fontWeight: 800, textTransform: 'uppercase', color: 'var(--sc-ink-600)', marginBottom: '8px' }}>On this page</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {sections.map(([id, label]) => (
            <a key={id} href={`#${id}`} style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--sc-navy-700)', background: 'var(--sc-surface-secondary)', padding: '5px 10px', borderRadius: '999px' }}>
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section id="overview" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
        <h2 style={h2}>{exam.name.replace(/\s*\(.*?\)\s*$/, '')} — overview</h2>
        <Table rows={overviewRows(exam)} head={['Particulars', 'Details']} />
      </section>

      <section id="dates" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
        <h2 style={h2}>Important dates</h2>
        <Table rows={importantDates(exam)} head={['Event', 'Date']} />
      </section>

      {f.posts && (
        <section id="vacancy" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
          <h2 style={h2}>Vacancy details</h2>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>{f.posts}.</p>
        </section>
      )}

      {(f.eligibility || f.age) && (
        <section id="eligibility" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
          <h2 style={h2}>Eligibility</h2>
          <Table
            head={['Criterion', 'Requirement']}
            rows={[
              ...(f.eligibility ? [{ label: 'Qualification', value: f.eligibility }] : []),
              ...(f.age ? [{ label: 'Age limit', value: f.age }] : []),
            ]}
          />
        </section>
      )}

      {f.pattern && (
        <section id="pattern" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
          <h2 style={h2}>Exam pattern</h2>
          <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.88rem', color: 'var(--sc-ink-700)', lineHeight: 1.7 }}>
            {f.pattern.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </section>
      )}

      {f.selection && (
        <section id="selection" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
          <h2 style={h2}>Selection process</h2>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>{f.selection}.</p>
        </section>
      )}

      {f.pay && (
        <section id="pay" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
          <h2 style={h2}>Salary</h2>
          <p style={{ margin: 0, fontSize: '0.88rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
            {f.pay}. This is the official pay scale, not take-home pay, which depends on allowances and posting.
          </p>
        </section>
      )}

      <section id="apply" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
        <h2 style={h2}>How to apply</h2>
        <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '0.88rem', color: 'var(--sc-ink-700)', lineHeight: 1.7 }}>
          <li>Open the official website of the conducting body{exam.officialNotificationUrl ? '' : '.'}
            {exam.officialNotificationUrl && (
              <>
                {' '}(<a href={exam.officialNotificationUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--sc-navy-700)', fontWeight: 700 }}>
                  official site <ExternalLink size={11} style={{ verticalAlign: '-1px' }} />
                </a>).
              </>
            )}
          </li>
          <li>Read the official notification fully before you register.</li>
          <li>Apply only on the official application portal, within the dates above.</li>
          <li>Never pay anyone other than the official portal. No genuine recruitment asks for money through an agent.</li>
        </ol>
      </section>

      <section id="faq" className="sc-card" style={{ padding: '18px', marginBottom: '16px', scrollMarginTop: '80px' }}>
        <h2 style={h2}>Frequently asked questions</h2>
        <div style={{ display: 'grid', gap: '8px' }}>
          {qa.map((x) => (
            <details key={x.q} style={{ border: '1px solid var(--sc-line-200)', borderRadius: '10px', padding: '10px 12px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem', color: 'var(--sc-navy-900)' }}>{x.q}</summary>
              <p style={{ margin: '8px 0 0', fontSize: '0.86rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>{x.a}</p>
            </details>
          ))}
        </div>
      </section>

      {related.length > 0 && (
        <section style={{ marginBottom: '16px' }}>
          <h2 style={h2}>Other nursing recruitments</h2>
          <div style={{ display: 'grid', gap: '10px' }}>
            {related.map((r) => (
              <ExamCard key={r.id} exam={r} />
            ))}
          </div>
          <Link href="/nursing/exams" style={{ display: 'inline-block', marginTop: '10px', fontSize: '0.84rem', fontWeight: 700, color: 'var(--sc-navy-700)' }}>
            See all recruitments →
          </Link>
        </section>
      )}
    </article>
  );
}
