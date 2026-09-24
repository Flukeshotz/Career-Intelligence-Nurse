import type { ReactNode } from 'react';
import Link from 'next/link';
import {
  CalendarPlus,
  ExternalLink,
  CalendarCheck,
  ClipboardList,
  GraduationCap,
  FileText,
  IndianRupee,
  ListChecks,
  HelpCircle,
  Send,
  ShieldCheck,
  BookOpen,
  Wallet,
  Library,
  Lightbulb,
  Compass,
  CalendarDays,
  Download,
  UserCheck,
} from 'lucide-react';
import type { MockExam } from '@/lib/mock-data';
import { INITIAL_EXAMS } from '@/lib/mock-data';
import { VERIFIED_FACTS } from '@/lib/verified-facts';
import { importantDates, faqs, Row } from '@/lib/exam-content';
import { prepTips } from '@/lib/prep-tips';
import { getTrust } from '@/lib/verification';
import { deriveLifecycle } from '@/lib/lifecycle';
import { applyWindowText, examDateText } from '@/lib/format-dates';
import { icsDataUrl, upcomingExamEvents } from '@/lib/ics';
import { ArticleSidebar, TocItem } from '@/components/blog/ArticleSidebar';
import { ArticleSection } from '@/components/blog/ArticleSection';
import { ArticleCTA } from '@/components/blog/ArticleCTA';
import { RelatedGrid } from '@/components/blog/RelatedGrid';
import { AdSlot } from '@/components/blog/AdSlot';
import { Prose } from '@/components/blog/Prose';
import { datesProse, vacancyProse, eligibilityProse, feeProse, patternProse, syllabusProse, salaryProse, applyProse } from '@/lib/article-prose';

/**
 * Exam page body in the blog design system. Every sentence is built from verified data
 * (verified-facts.ts, the record's own dates) or derived from it by arithmetic (prep-tips.ts). A
 * section with nothing verified to say is left out rather than padded.
 */

const TH: React.CSSProperties = { textAlign: 'left', padding: '8px 10px', background: 'var(--blog-blue-50)', color: 'var(--blog-navy)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.4px', whiteSpace: 'nowrap' };
const TD: React.CSSProperties = { padding: '10px 12px', color: '#2a3345', verticalAlign: 'top', borderBottom: '1px solid var(--blog-line)' };

function Table({ rows, head }: { rows: Row[]; head: [string, string] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="blog-kv" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>{head.map((h) => <th key={h} style={TH}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td style={{ ...TD, fontWeight: 600, color: 'var(--blog-navy)', width: '38%' }}>{r.label}</td>
              <td style={TD}>
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

function Grid({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table className="blog-grid-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>{head.map((h) => <th key={h} style={TH}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]} style={i === rows.length - 1 && /^total$/i.test(r[0]) ? { fontWeight: 700 } : undefined}>
              {r.map((c, j) => (
                <td key={j} style={{ ...TD, color: j === 0 ? 'var(--blog-navy)' : '#2a3345', fontWeight: j === 0 || /^total$/i.test(r[0]) ? 600 : 400 }}>
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const sentence = (s: string) => (/[.!?]$/.test(s) ? s : `${s}.`);

export function ExamArticle({
  exam,
  eligibility,
  papers,
  source,
  actions,
  maya,
}: {
  exam: MockExam;
  eligibility?: ReactNode;
  papers?: ReactNode;
  source?: ReactNode;
  actions?: ReactNode;
  maya?: ReactNode;
}) {
  const f = VERIFIED_FACTS[exam.id] ?? {};
  const trust = getTrust(exam.id);
  const qa = faqs(exam);
  const life = deriveLifecycle(exam);
  const tips = prepTips(f);
  const related = INITIAL_EXAMS.filter((e) => e.id !== exam.id && !getTrust(e.id).suppressFromListings).slice(0, 3);
  const shortName = exam.name.replace(/\s*\(.*?\)\s*$/, '');
  const events = upcomingExamEvents(exam);
  const open = life.stage === 'applications_open';
  const upcoming = life.stage === 'upcoming';

  const plan: Array<TocItem | false> = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'dates', label: 'Important Dates' },
    !!(f.posts || f.vacancyTable) && { id: 'vacancy', label: 'Vacancy Details' },
    { id: 'eligibility', label: 'Eligibility' },
    !!f.fee && { id: 'fee', label: 'Application Fee' },
    !!f.pattern && { id: 'pattern', label: 'The Exam Paper' },
    !!f.syllabus && { id: 'syllabus', label: 'Syllabus' },
    tips.length > 0 && { id: 'preparation', label: 'Preparation' },
    !!f.selection && { id: 'selection', label: 'Selection Process' },
    !!f.pay && { id: 'pay', label: 'Salary' },
    !!papers && { id: 'papers', label: 'Previous Year Papers' },
    { id: 'apply', label: 'How to Apply' },
    { id: 'resources', label: 'Tips & Resources' },
    { id: 'source', label: 'Official Source' },
    { id: 'faq', label: 'FAQs' },
  ];
  const toc = plan.filter((x): x is TocItem => !!x);
  const n = (id: string) => toc.findIndex((t) => t.id === id);

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: qa.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })),
  };

  // ── Introduction, assembled from verified facts only ──
  const posts = exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts` : 'nursing posts';
  const exDate = examDateText(exam);
  const statusLine = open
    ? `Applications are **open now** (${applyWindowText(exam)}) — **${life.label.toLowerCase()}**.`
    : upcoming
      ? `Applications open soon: ${applyWindowText(exam)}.`
      : `Applications ran ${applyWindowText(exam)}${/not confirmed/i.test(exDate) ? '. We have not confirmed an exam date yet — check the official website for the latest notices.' : `. Exam: **${exDate}**.`} Current status: **${life.label}**.`;
  const covers = toc.slice(1, -2).map((t) => t.label.toLowerCase());

  const events2 = events.length
    ? { title: `Download ${shortName.split(' ')[0]} Exam Calendar`, body: 'Every upcoming deadline and exam date, straight into your calendar.', buttonLabel: 'Download Calendar', href: icsDataUrl(events), fileName: `${exam.slug.slice(0, 40)}-dates.ics` }
    : { title: 'See All Upcoming Nursing Exams', body: 'Dates for every open recruitment, with calendar downloads.', buttonLabel: 'View Exam Calendar', href: '/nursing/upcoming-exams#calendar' };

  return (
    <article className="blog-grid">
      {!trust.suppressFromListings && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <ArticleSidebar items={toc} download={events2} ad={<AdSlot slot="sidebar" />} />

      <div style={{ minWidth: 0 }}>
        <section id="introduction" className="blog-intro blog-prose" style={{ scrollMarginTop: '96px' }}>
          <h2>Introduction</h2>
          <Prose
            paras={[
              `${exam.organisation} is recruiting **${posts}** through the ${shortName}.`,
              statusLine,
              f.fromNotice
                ? 'Everything below is taken from the official notice itself.'
                : 'Every detail below has been checked against independent reports of the official notice, and this page is re-checked every day.',
            ]}
          />
          {f.notice && (
            <p className="blog-note">
              <strong>Official notice:</strong> {sentence(f.notice)}
            </p>
          )}
          {actions}
        </section>

        <AdSlot slot="article-top" />

        <ArticleSection id="dates" number={n('dates')} icon={<CalendarCheck size={26} />} title="Important Dates" bullets={[`Applications: ${applyWindowText(exam)}`, `Exam: ${exDate}`, life.label]}>
          <Prose paras={datesProse(exam)} />
          <Table rows={importantDates(exam)} head={['Event', 'Date']} />
          {f.timeline && (
            <>
              <h4>Official notices so far</h4>
              <Grid head={['Date', 'Notice']} rows={f.timeline.map((t) => [t.date, t.event])} />
            </>
          )}
        </ArticleSection>

        {(f.posts || f.vacancyTable) && (
          <ArticleSection id="vacancy" number={n('vacancy')} icon={<ClipboardList size={26} />} title="Vacancy Details" bullets={[exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts in total` : '', f.posts ?? '']}>
            <Prose paras={[...(f.posts ? [sentence(f.posts)] : []), ...vacancyProse(exam, f)]} />
            {f.vacancyTable && <Grid head={f.vacancyTable.head} rows={f.vacancyTable.rows} />}
          </ArticleSection>
        )}

        <ArticleSection id="eligibility" number={n('eligibility')} icon={<GraduationCap size={26} />} title="Eligibility" bullets={[f.eligibility ?? 'Qualification: see the official notification', f.age ? `Age: ${f.age}` : '']}>
          <Prose paras={eligibilityProse(f)} />
          {eligibility}
        </ArticleSection>

        <AdSlot slot="article-mid" />

        {f.fee && (
          <ArticleSection id="fee" number={n('fee')} icon={<Wallet size={26} />} title="Application Fee" bullets={f.fee}>
            <Prose paras={feeProse(f)} />
            {f.fee.length > 1 && (
              <ul>
                {f.fee.map((x) => <li key={x}>{x}</li>)}
              </ul>
            )}
          </ArticleSection>
        )}

        {f.pattern && (
          <ArticleSection id="pattern" number={n('pattern')} icon={<FileText size={26} />} title="The Exam Paper" bullets={f.pattern}>
            <ul>
              {f.pattern.map((line) => <li key={line}>{line}</li>)}
            </ul>
            <Prose paras={patternProse(f)} />
          </ArticleSection>
        )}

        {f.syllabus && (
          <ArticleSection id="syllabus" number={n('syllabus')} icon={<Library size={26} />} title="Syllabus" bullets={f.syllabus.map((x) => x.section)}>
            <Prose paras={syllabusProse(f)} />
            {f.syllabus.map((x) => (
              <div key={x.section}>
                <h4>{x.section}</h4>
                <ul className="blog-topics">
                  {x.topics.split(/,\s*/).map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            ))}
          </ArticleSection>
        )}

        {tips.length > 0 && (
          <ArticleSection id="preparation" number={n('preparation')} icon={<Lightbulb size={26} />} title="Preparation" bullets={tips.map((t) => t.title)}>
            {tips.map((t) => (
              <div key={t.title}>
                <h4>{t.title}</h4>
                <p>{t.body}</p>
              </div>
            ))}
            <p className="blog-small">These tips are worked out from the official exam pattern above.</p>
          </ArticleSection>
        )}

        {f.selection && (
          <ArticleSection id="selection" number={n('selection')} icon={<ListChecks size={26} />} title="Selection Process" bullets={f.selection.split(/,\s*|\.\s+/).filter((x) => x.length > 3)}>
            <Prose paras={[sentence(f.selection)]} />
          </ArticleSection>
        )}

        {f.pay && (
          <ArticleSection id="pay" number={n('pay')} icon={<IndianRupee size={26} />} title="Salary" bullets={[f.pay]}>
            <Prose paras={salaryProse(f)} />
          </ArticleSection>
        )}

        {papers && (
          <ArticleSection id="papers" number={n('papers')} icon={<BookOpen size={26} />} title="Previous Year Papers" bullets={['Taken from the official question booklets']}>
            {papers}
          </ArticleSection>
        )}

        <ArticleSection id="apply" number={n('apply')} icon={<Send size={26} />} title="How to Apply" bullets={['Apply only on the official portal', 'Never pay an agent']}>
          <Prose paras={applyProse(exam)} />
          <h4>Step by step</h4>
          <ol>
            <li>
              Open the official website of the conducting body
              {exam.officialNotificationUrl ? (
                <>
                  {' '}(
                  <a href={exam.officialNotificationUrl} target="_blank" rel="noopener noreferrer">
                    official site <ExternalLink size={12} style={{ verticalAlign: '-1px' }} />
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
          {f.keyRules && (
            <>
              <h4>Rules to watch</h4>
              <ul>
                {f.keyRules.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </>
          )}
        </ArticleSection>

        <ArticleSection id="resources" number={n('resources')} icon={<Compass size={26} />} title="Tips & Resources" bullets={['Save the dates', 'Check your eligibility', 'Compare every open nursing recruitment']}>
          <ul className="blog-links">
            {events.length > 0 && (
              <li>
                <a href={icsDataUrl(events)} download={`${exam.slug.slice(0, 40)}-dates.ics`}>
                  <Download size={18} /> Download every upcoming date as a calendar file
                </a>
              </li>
            )}
            <li>
              <a href="#eligibility">
                <UserCheck size={18} /> Check your eligibility against the rules above
              </a>
            </li>
            <li>
              <Link href="/nursing/upcoming-exams">
                <CalendarDays size={18} /> See all upcoming nursing exams in one place
              </Link>
            </li>
            {exam.officialNotificationUrl && (
              <li>
                <a href={exam.officialNotificationUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={18} /> Official website of {exam.organisation.replace(/\s*\(.*?\)\s*$/, '')}
                </a>
              </li>
            )}
          </ul>
        </ArticleSection>

        <ArticleSection id="source" number={n('source')} icon={<ShieldCheck size={26} />} title="Official Source" bullets={[f.notice ?? exam.organisation]}>
          {f.notice && <Prose paras={[`Based on ${sentence(f.notice)}`]} />}
          {source}
        </ArticleSection>

        <ArticleSection id="faq" number={n('faq')} icon={<HelpCircle size={26} />} title="FAQs" bullets={qa.slice(0, 3).map((x) => x.q)}>
          <div className="blog-faq">
            {qa.map((x) => (
              <details key={x.q}>
                <summary>{x.q}</summary>
                <p>{x.a}</p>
              </details>
            ))}
          </div>
        </ArticleSection>

        {maya && <div style={{ marginTop: '18px' }}>{maya}</div>}

        <ArticleCTA title="Prepare for Success" body="Join SkillCase and get your Career Passport, eligibility checks and deadline alerts for every nursing recruitment in one place." buttonLabel="Explore Our Programs" href="/nursing" />

        <AdSlot slot="article-bottom" />

        <RelatedGrid items={related.map((e) => ({ title: e.name.replace(/\s*\(.*?\)\s*$/, ''), href: `/nursing/exams/${e.slug}` }))} moreHref="/nursing/upcoming-exams" />
      </div>
    </article>
  );
}
