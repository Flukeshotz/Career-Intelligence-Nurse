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

/**
 * Exam page body in the blog design system. Every sentence is built from verified data
 * (verified-facts.ts, the record's own dates) or derived from it by arithmetic (prep-tips.ts). A
 * section with nothing verified to say is left out rather than padded.
 */

const TH: React.CSSProperties = { textAlign: 'left', padding: '8px 10px', background: 'var(--blog-blue-50)', color: 'var(--blog-navy)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.4px', whiteSpace: 'nowrap' };
const TD: React.CSSProperties = { padding: '9px 10px', color: 'var(--blog-gray)', verticalAlign: 'top', borderBottom: '1px solid var(--blog-line)' };
const P: React.CSSProperties = { margin: '0 0 10px', fontSize: '0.9rem', color: 'var(--blog-gray)', lineHeight: 1.7 };
const H4: React.CSSProperties = { margin: '14px 0 6px', fontSize: '0.9rem', fontWeight: 700, color: 'var(--blog-navy)' };
const UL: React.CSSProperties = { margin: 0, paddingLeft: '18px', fontSize: '0.9rem', color: 'var(--blog-gray)', lineHeight: 1.75 };

function Table({ rows, head }: { rows: Row[]; head: [string, string] }) {
  return (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.86rem' }}>
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
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.84rem' }}>
        <thead>
          <tr>{head.map((h) => <th key={h} style={TH}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={r[0]} style={i === rows.length - 1 && /^total$/i.test(r[0]) ? { fontWeight: 700 } : undefined}>
              {r.map((c, j) => (
                <td key={j} style={{ ...TD, color: j === 0 ? 'var(--blog-navy)' : 'var(--blog-gray)', fontWeight: j === 0 || /^total$/i.test(r[0]) ? 600 : 400 }}>
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
    ? `Applications are open now (${applyWindowText(exam)}) — ${life.label.toLowerCase()}.`
    : upcoming
      ? `Applications open soon: ${applyWindowText(exam)}.`
      : `Applications ran ${applyWindowText(exam)}${/not confirmed/i.test(exDate) ? '. We have not confirmed an exam date yet — check the official website for the latest notices.' : `. Exam: ${exDate}.`} Current status: ${life.label}.`;
  const covers = toc.slice(1, -2).map((t) => t.label.toLowerCase());

  const events2 = events.length
    ? { title: `Download ${shortName.split(' ')[0]} Exam Calendar`, body: 'Every upcoming deadline and exam date, straight into your calendar.', buttonLabel: 'Download Calendar', href: icsDataUrl(events), fileName: `${exam.slug.slice(0, 40)}-dates.ics` }
    : { title: 'See All Upcoming Nursing Exams', body: 'Dates for every open recruitment, with calendar downloads.', buttonLabel: 'View Exam Calendar', href: '/nursing/upcoming-exams#calendar' };

  return (
    <article className="blog-grid">
      {!trust.suppressFromListings && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      <ArticleSidebar items={toc} download={events2} />

      <div style={{ minWidth: 0 }}>
        <section id="introduction" className="blog-intro" style={{ scrollMarginTop: '96px' }}>
          <h2>Introduction</h2>
          <p>
            {exam.organisation} is recruiting {posts} through the {shortName}. {f.notice ? `Official notice: ${sentence(f.notice)} ` : ''}{statusLine}
          </p>
          {(f.eligibility || f.selection) && (
            <p>
              {f.eligibility ? `Who can apply: ${sentence(f.eligibility)} ` : ''}
              {f.selection ? `Selection: ${sentence(f.selection)}` : ''}
            </p>
          )}
          <p>
            This guide covers {covers.slice(0, -1).join(', ')}
            {covers.length > 1 ? ` and ${covers[covers.length - 1]}` : covers[0]}. {f.fromNotice ? 'The details below are taken from the official notice itself.' : 'Each detail below was checked against independent reports of the official notice.'} Tap any section to open it.
          </p>
          {actions}
        </section>

        <ArticleSection id="dates" number={n('dates')} icon={<CalendarCheck size={26} />} title="Important Dates" bullets={[`Applications: ${applyWindowText(exam)}`, `Exam: ${exDate}`, life.label]}>
          <Table rows={importantDates(exam)} head={['Event', 'Date']} />
          {f.timeline && (
            <>
              <h4 style={H4}>Official notices so far</h4>
              <Grid head={['Date', 'Notice']} rows={f.timeline.map((t) => [t.date, t.event])} />
            </>
          )}
        </ArticleSection>

        {(f.posts || f.vacancyTable) && (
          <ArticleSection id="vacancy" number={n('vacancy')} icon={<ClipboardList size={26} />} title="Vacancy Details" bullets={[exam.vacancies ? `${exam.vacancies.toLocaleString('en-IN')} posts in total` : '', f.posts ?? '', f.vacancyTable ? 'Category-wise break-up from the notice' : '']}>
            {f.posts && <p style={P}>{sentence(f.posts)}</p>}
            {f.vacancyTable && <Grid head={f.vacancyTable.head} rows={f.vacancyTable.rows} />}
          </ArticleSection>
        )}

        <ArticleSection id="eligibility" number={n('eligibility')} icon={<GraduationCap size={26} />} title="Eligibility" bullets={[f.eligibility ?? 'Qualification: see the official notification', f.age ? `Age: ${f.age}` : '', 'Check your own eligibility in one tap']}>
          {(f.eligibility || f.age) && (
            <div style={{ marginBottom: eligibility ? '16px' : 0 }}>
              <Table head={['Criterion', 'Requirement']} rows={[...(f.eligibility ? [{ label: 'Qualification', value: f.eligibility }] : []), ...(f.age ? [{ label: 'Age limit', value: f.age }] : [])]} />
            </div>
          )}
          {eligibility}
        </ArticleSection>

        {f.fee && (
          <ArticleSection id="fee" number={n('fee')} icon={<Wallet size={26} />} title="Application Fee" bullets={f.fee}>
            <ul style={UL}>
              {f.fee.map((x) => <li key={x}>{x}</li>)}
            </ul>
            <p style={{ ...P, marginTop: '10px', marginBottom: 0 }}>Pay only on the official application portal.</p>
          </ArticleSection>
        )}

        {f.pattern && (
          <ArticleSection id="pattern" number={n('pattern')} icon={<FileText size={26} />} title="The Exam Paper" bullets={f.pattern}>
            <ul style={UL}>
              {f.pattern.map((line) => <li key={line}>{line}</li>)}
            </ul>
            {f.qualifying && (
              <>
                <h4 style={H4}>Minimum qualifying marks</h4>
                <p style={{ ...P, marginBottom: 0 }}>{sentence(f.qualifying)}</p>
              </>
            )}
          </ArticleSection>
        )}

        {f.syllabus && (
          <ArticleSection id="syllabus" number={n('syllabus')} icon={<Library size={26} />} title="Syllabus" bullets={f.syllabus.map((x) => x.section)}>
            {f.syllabus.map((x) => (
              <div key={x.section}>
                <h4 style={H4}>{x.section}</h4>
                <p style={{ ...P, marginBottom: '4px' }}>{sentence(x.topics)}</p>
              </div>
            ))}
            <p style={{ ...P, marginTop: '10px', marginBottom: 0, fontSize: '0.8rem' }}>As printed in the official notice.</p>
          </ArticleSection>
        )}

        {tips.length > 0 && (
          <ArticleSection id="preparation" number={n('preparation')} icon={<Lightbulb size={26} />} title="Preparation" bullets={tips.map((t) => t.title)}>
            {tips.map((t) => (
              <div key={t.title}>
                <h4 style={H4}>{t.title}</h4>
                <p style={{ ...P, marginBottom: '4px' }}>{t.body}</p>
              </div>
            ))}
            <p style={{ ...P, marginTop: '10px', marginBottom: 0, fontSize: '0.8rem' }}>These tips are worked out from the official exam pattern above.</p>
          </ArticleSection>
        )}

        {f.selection && (
          <ArticleSection id="selection" number={n('selection')} icon={<ListChecks size={26} />} title="Selection Process" bullets={f.selection.split(/,\s*|\.\s+/).filter((x) => x.length > 3)}>
            <p style={{ ...P, marginBottom: 0 }}>{sentence(f.selection)}</p>
          </ArticleSection>
        )}

        {f.pay && (
          <ArticleSection id="pay" number={n('pay')} icon={<IndianRupee size={26} />} title="Salary" bullets={[f.pay, 'Official pay scale, not take-home pay']}>
            <p style={{ ...P, marginBottom: 0 }}>{f.pay}. This is the official pay scale, not take-home pay, which depends on allowances and posting.</p>
          </ArticleSection>
        )}

        {papers && (
          <ArticleSection id="papers" number={n('papers')} icon={<BookOpen size={26} />} title="Previous Year Papers" bullets={['Taken from the official question booklets', 'Practise under real exam timing']}>
            {papers}
          </ArticleSection>
        )}

        <ArticleSection id="apply" number={n('apply')} icon={<Send size={26} />} title="How to Apply" bullets={['Read the official notification first', 'Apply only on the official portal', 'Never pay an agent']}>
          <ol style={{ ...UL, paddingLeft: '20px' }}>
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
          {f.keyRules && (
            <>
              <h4 style={H4}>Rules to watch</h4>
              <ul style={UL}>
                {f.keyRules.map((r) => <li key={r}>{r}</li>)}
              </ul>
            </>
          )}
        </ArticleSection>

        <ArticleSection id="resources" number={n('resources')} icon={<Compass size={26} />} title="Tips & Resources" bullets={['Save the dates to your calendar', 'Check your eligibility', 'Compare every open nursing recruitment']}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gap: '10px' }}>
            {events.length > 0 && (
              <li>
                <a href={icsDataUrl(events)} download={`${exam.slug.slice(0, 40)}-dates.ics`} style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--blog-navy)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <Download size={18} color="var(--blog-blue)" /> Download every upcoming date as a calendar file
                </a>
              </li>
            )}
            <li>
              <a href="#eligibility" style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--blog-navy)', fontWeight: 600, fontSize: '0.9rem' }}>
                <UserCheck size={18} color="var(--blog-blue)" /> Check your eligibility against the rules above
              </a>
            </li>
            <li>
              <Link href="/nursing/upcoming-exams" style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--blog-navy)', fontWeight: 600, fontSize: '0.9rem' }}>
                <CalendarDays size={18} color="var(--blog-blue)" /> See all upcoming nursing exams in one place
              </Link>
            </li>
            {exam.officialNotificationUrl && (
              <li>
                <a href={exam.officialNotificationUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', gap: '10px', alignItems: 'center', color: 'var(--blog-navy)', fontWeight: 600, fontSize: '0.9rem' }}>
                  <ExternalLink size={18} color="var(--blog-blue)" /> Official website of {exam.organisation.replace(/\s*\(.*?\)\s*$/, '')}
                </a>
              </li>
            )}
          </ul>
        </ArticleSection>

        <ArticleSection id="source" number={n('source')} icon={<ShieldCheck size={26} />} title="Official Source" bullets={[f.notice ?? exam.organisation, trust.level === 'confirmed' ? trust.badge : 'Confirm details on the official site']}>
          {f.notice && <p style={P}>Based on {f.notice}.</p>}
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

        <ArticleCTA title="Prepare for Success" body="Join SkillCase and get your Career Passport, eligibility checks and deadline alerts for every nursing recruitment in one place." buttonLabel="Explore Our Programs" href="/nursing" />

        <RelatedGrid items={related.map((e) => ({ title: e.name.replace(/\s*\(.*?\)\s*$/, ''), href: `/nursing/exams/${e.slug}` }))} moreHref="/nursing/upcoming-exams" />
      </div>
    </article>
  );
}
