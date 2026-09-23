import type { ReactNode } from 'react';
import { CalendarPlus, ExternalLink, CalendarCheck, ClipboardList, GraduationCap, FileText, IndianRupee, ListChecks, HelpCircle, Send, ShieldCheck, BookOpen } from 'lucide-react';
import type { MockExam } from '@/lib/mock-data';
import { INITIAL_EXAMS } from '@/lib/mock-data';
import { VERIFIED_FACTS } from '@/lib/verified-facts';
import { importantDates, faqs, Row } from '@/lib/exam-content';
import { getTrust } from '@/lib/verification';
import { deriveLifecycle } from '@/lib/lifecycle';
import { applyWindowText, examDateText } from '@/lib/format-dates';
import { icsDataUrl, upcomingExamEvents } from '@/lib/ics';
import { ArticleSidebar, TocItem } from '@/components/blog/ArticleSidebar';
import { ArticleSection } from '@/components/blog/ArticleSection';
import { ArticleCTA } from '@/components/blog/ArticleCTA';
import { RelatedGrid } from '@/components/blog/RelatedGrid';

/**
 * Exam page body in the blog design system: sticky "On this page" + download card on the left;
 * Introduction and numbered, expandable sections on the right, then "Prepare for Success" and
 * Related Articles. Every value comes from verified data (exam-content.ts / verified-facts.ts);
 * a section with nothing verified to say is left out rather than padded.
 */

function Table({ rows, head }: { rows: Row[]; head: [string, string] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
        <thead>
          <tr>
            {head.map((h) => (
              <th key={h} style={{ textAlign: 'left', padding: '8px 10px', background: 'var(--blog-blue-50)', color: 'var(--blog-navy)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} style={{ borderBottom: '1px solid var(--blog-line)' }}>
              <td style={{ padding: '9px 10px', fontWeight: 600, color: 'var(--blog-navy)', width: '38%', verticalAlign: 'top' }}>{r.label}</td>
              <td style={{ padding: '9px 10px', color: 'var(--blog-gray)' }}>
                {r.value}
                {r.calendarUrl && (
                  <a href={r.calendarUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', marginLeft: '10px', color: 'var(--blog-blue)', fontWeight: 600, fontSize: '0.78rem' }}>
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

const P: React.CSSProperties = { margin: 0, fontSize: '0.9rem', color: 'var(--blog-gray)', lineHeight: 1.65 };

export function ExamArticle({
  exam,
  eligibility,
  papers,
  source,
  actions,
  maya,
}: {
  exam: MockExam;
  /** Interactive eligibility checker, shown inside the Eligibility section. */
  eligibility?: ReactNode;
  /** Previous-year papers list; the section only exists when there are real papers. */
  papers?: ReactNode;
  /** Source & freshness panel. */
  source?: ReactNode;
  /** Track / apply buttons, under the introduction. */
  actions?: ReactNode;
  maya?: ReactNode;
}) {
  const f = VERIFIED_FACTS[exam.id] ?? {};
  const trust = getTrust(exam.id);
  const qa = faqs(exam);
  const life = deriveLifecycle(exam);
  const related = INITIAL_EXAMS.filter((e) => e.id !== exam.id && !getTrust(e.id).suppressFromListings).slice(0, 3);
  const shortName = exam.name.replace(/\s*\(.*?\)\s*$/, '');
  const events = upcomingExamEvents(exam);

  const plan: Array<{ id: string; label: string } | false> = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'dates', label: 'Important Dates' },
    !!f.posts && { id: 'vacancy', label: 'Vacancy Details' },
    { id: 'eligibility', label: 'Eligibility' },
    !!f.pattern && { id: 'pattern', label: 'The Exam Paper' },
    !!f.selection && { id: 'selection', label: 'Selection Process' },
    !!f.pay && { id: 'pay', label: 'Salary' },
    !!papers && { id: 'papers', label: 'Previous Year Papers' },
    { id: 'apply', label: 'How to Apply' },
    { id: 'source', label: 'Official Source' },
    { id: 'faq', label: 'FAQs' },
  ];
  const toc = plan.filter((x): x is TocItem => !!x);
  // Numbered sections are everything after the introduction.
  const n = (id: string) => toc.findIndex((t) => t.id === id);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };

  const intro =
    `${exam.organisation} is recruiting ${exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts` : 'nursing staff'} through the ${shortName}. ` +
    `Applications ${life.stage === 'applications_open' ? 'are open' : 'ran'} ${applyWindowText(exam)}, and the exam is ${examDateText(exam).replace(/^Not announced yet$/, 'not announced yet')}. ` +
    'Below are the dates, eligibility, exam paper and pay, each checked against the official notification — tap any section to open it.';

  return (
    <article className="blog-grid">
      {!trust.suppressFromListings && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <ArticleSidebar
        items={toc}
        download={
          events.length
            ? {
                title: `Download ${shortName.split(' ')[0]} Exam Calendar`,
                body: 'Every upcoming deadline and exam date, straight into your calendar.',
                buttonLabel: 'Download Calendar',
                href: icsDataUrl(events),
                fileName: `${exam.slug.slice(0, 40)}-dates.ics`,
              }
            : {
                title: 'See All Upcoming Nursing Exams',
                body: 'Dates for every open recruitment, with calendar downloads.',
                buttonLabel: 'View Exam Calendar',
                href: '/nursing/upcoming-exams#calendar',
              }
        }
      />

      <div style={{ minWidth: 0 }}>
        <section id="introduction" className="blog-intro" style={{ scrollMarginTop: '96px' }}>
          <h2>Introduction</h2>
          <p>{intro}</p>
          {actions}
        </section>

        <ArticleSection id="dates" number={n('dates')} icon={<CalendarCheck size={26} />} title="Important Dates" bullets={[`Applications: ${applyWindowText(exam)}`, `Exam: ${examDateText(exam)}`, life.label]}>
          <Table rows={importantDates(exam)} head={['Event', 'Date']} />
        </ArticleSection>

        {f.posts && (
          <ArticleSection id="vacancy" number={n('vacancy')} icon={<ClipboardList size={26} />} title="Vacancy Details" bullets={[exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts in total` : '', f.posts]}>
            <p style={P}>{f.posts}.</p>
          </ArticleSection>
        )}

        <ArticleSection id="eligibility" number={n('eligibility')} icon={<GraduationCap size={26} />} title="Eligibility" bullets={[f.eligibility ?? 'Qualification: see the official notification', f.age ? `Age: ${f.age}` : '', 'Check your own eligibility in one tap']}>
          {(f.eligibility || f.age) && (
            <div style={{ marginBottom: eligibility ? '16px' : 0 }}>
              <Table
                head={['Criterion', 'Requirement']}
                rows={[...(f.eligibility ? [{ label: 'Qualification', value: f.eligibility }] : []), ...(f.age ? [{ label: 'Age limit', value: f.age }] : [])]}
              />
            </div>
          )}
          {eligibility}
        </ArticleSection>

        {f.pattern && (
          <ArticleSection id="pattern" number={n('pattern')} icon={<FileText size={26} />} title="The Exam Paper" bullets={f.pattern}>
            <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--blog-gray)', lineHeight: 1.7 }}>
              {f.pattern.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </ArticleSection>
        )}

        {f.selection && (
          <ArticleSection id="selection" number={n('selection')} icon={<ListChecks size={26} />} title="Selection Process" bullets={f.selection.split(/,\s*|\.\s+/)}>
            <p style={P}>{f.selection}.</p>
          </ArticleSection>
        )}

        {f.pay && (
          <ArticleSection id="pay" number={n('pay')} icon={<IndianRupee size={26} />} title="Salary" bullets={[f.pay, 'Official pay scale, not take-home pay']}>
            <p style={P}>{f.pay}. This is the official pay scale, not take-home pay, which depends on allowances and posting.</p>
          </ArticleSection>
        )}

        {papers && (
          <ArticleSection id="papers" number={n('papers')} icon={<BookOpen size={26} />} title="Previous Year Papers" bullets={['Taken from the official question booklets', 'Practise under real exam timing']}>
            {papers}
          </ArticleSection>
        )}

        <ArticleSection id="apply" number={n('apply')} icon={<Send size={26} />} title="How to Apply" bullets={['Read the official notification first', 'Apply only on the official portal', 'Never pay an agent']}>
          <ol style={{ margin: 0, paddingLeft: '20px', fontSize: '0.9rem', color: 'var(--blog-gray)', lineHeight: 1.75 }}>
            <li>
              Open the official website of the conducting body
              {exam.officialNotificationUrl ? (
                <>
                  {' '}(
                  <a href={exam.officialNotificationUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--blog-blue)', fontWeight: 600 }}>
                    official site <ExternalLink size={11} style={{ verticalAlign: '-1px' }} />
                  </a>
                  ).
                </>
              ) : (
                '.'
              )}
            </li>
            <li>Read the official notification fully before you register.</li>
            <li>Apply only on the official application portal, within the dates above.</li>
            <li>Never pay anyone other than the official portal. No genuine recruitment asks for money through an agent.</li>
          </ol>
        </ArticleSection>

        <ArticleSection id="source" number={n('source')} icon={<ShieldCheck size={26} />} title="Official Source" bullets={[trust.level === 'confirmed' ? trust.badge : 'Confirm details on the official site', exam.organisation]}>
          {source}
        </ArticleSection>

        <ArticleSection id="faq" number={n('faq')} icon={<HelpCircle size={26} />} title="FAQs" bullets={qa.slice(0, 3).map((x) => x.q)}>
          <div style={{ display: 'grid', gap: '8px' }}>
            {qa.map((x) => (
              <details key={x.q} style={{ border: '1px solid var(--blog-line)', borderRadius: '10px', padding: '10px 12px', background: '#fff' }}>
                <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', color: 'var(--blog-navy)' }}>{x.q}</summary>
                <p style={{ margin: '8px 0 0', fontSize: '0.86rem', color: 'var(--blog-gray)', lineHeight: 1.6 }}>{x.a}</p>
              </details>
            ))}
          </div>
        </ArticleSection>

        {maya && <div style={{ marginTop: '18px' }}>{maya}</div>}

        <ArticleCTA
          title="Prepare for Success"
          body="Join SkillCase and get your Career Passport, eligibility checks and deadline alerts for every nursing recruitment in one place."
          buttonLabel="Explore Our Programs"
          href="/nursing"
        />

        <RelatedGrid
          items={related.map((e) => ({ title: e.name.replace(/\s*\(.*?\)\s*$/, ''), href: `/nursing/exams/${e.slug}` }))}
          moreHref="/nursing/upcoming-exams"
        />
      </div>
    </article>
  );
}
