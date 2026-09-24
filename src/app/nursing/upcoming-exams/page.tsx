import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarPlus, ClipboardCheck, Hourglass, History, CalendarDays, Layers, HelpCircle } from 'lucide-react';
import { icsDataUrl, upcomingExamEvents } from '@/lib/ics';
import { INITIAL_EXAMS } from '@/lib/mock-data';
import { deriveLifecycle } from '@/lib/lifecycle';
import { getTrust } from '@/lib/verification';
import { applyWindowText, examDateText, formatDay } from '@/lib/format-dates';
import { googleCalendarUrl } from '@/lib/exam-content';
import { VERIFIED_FACTS } from '@/lib/verified-facts';
import { ArticleHeader } from '@/components/blog/ArticleHeader';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { ArticleSidebar, TocItem } from '@/components/blog/ArticleSidebar';
import { ArticleSection } from '@/components/blog/ArticleSection';
import { ArticleCTA } from '@/components/blog/ArticleCTA';
import { RelatedGrid } from '@/components/blog/RelatedGrid';
import { AdSlot } from '@/components/blog/AdSlot';

// Rebuilt hourly so "open now" and "days left" never go stale between data refreshes.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Upcoming Nursing Exams & Vacancies in India — Dates, Posts, Notifications',
  description:
    'Nursing recruitment exams in India with vacancies, application dates and exam dates, checked against independent sources and updated automatically.',
  alternates: { canonical: '/nursing/upcoming-exams' },
};

const th: React.CSSProperties = { textAlign: 'left', padding: '8px 10px', background: 'var(--sc-surface-secondary)', color: 'var(--sc-ink-600)', fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.4px' };
const td: React.CSSProperties = { padding: '9px 10px', verticalAlign: 'top', borderBottom: '1px solid var(--sc-line-100)', fontSize: '0.85rem' };

export default function UpcomingNursingExamsPage() {
  const now = Date.now();
  const exams = INITIAL_EXAMS.filter((e) => !getTrust(e.id).suppressFromListings).map((e) => ({ e, lc: deriveLifecycle(e, now) }));

  const open = exams.filter((x) => x.lc.stage === 'applications_open' || x.lc.stage === 'upcoming').sort((a, b) => +new Date(a.e.applicationDeadline ?? 0) - +new Date(b.e.applicationDeadline ?? 0));
  const examAhead = exams.filter((x) => x.lc.stage === 'applications_closed');
  const concluded = exams.filter((x) => x.lc.stage === 'exam_held' || x.lc.stage === 'closed');

  const openPosts = open.reduce((n, x) => n + (x.e.vacancies ?? 0), 0);
  const nextDeadline = open[0];
  const updatedIso = exams.map((x) => getTrust(x.e.id).checkedAt).filter(Boolean).sort().pop();

  const calendar = exams
    .flatMap(({ e }) => [
      e.applicationDeadline && +new Date(e.applicationDeadline) > now ? { when: e.applicationDeadline, label: `Last date to apply — ${e.name}`, url: googleCalendarUrl(`Last date: ${e.name}`, e.applicationDeadline) } : null,
      e.examDate && +new Date(e.examEndDate ?? e.examDate) > now ? { when: e.examDate, label: `Exam — ${e.name}`, url: googleCalendarUrl(`Exam: ${e.name}`, e.examDate, e.examEndDate), text: examDateText(e) } : null,
      e.mainsDate && +new Date(e.mainsDate) > now ? { when: e.mainsDate, label: `Mains — ${e.name}`, url: googleCalendarUrl(`Mains: ${e.name}`, e.mainsDate), text: formatDay(e.mainsDate) } : null,
    ])
    .filter((x): x is { when: string; label: string; url: string; text?: string } => !!x)
    .sort((a, b) => +new Date(a.when) - +new Date(b.when));

  const glance = (list: typeof exams) => (
    <div style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            {['Recruitment', 'Vacancies', 'Applications', 'Exam date', 'Status'].map((h) => (
              <th key={h} style={th}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {list.map(({ e, lc }) => (
            <tr key={e.id}>
              <td style={{ ...td, fontWeight: 700 }}>
                <Link href={`/nursing/exams/${e.slug}`} style={{ color: 'var(--sc-navy-700)' }}>{e.name.replace(/\s*\(.*?\)\s*$/, '')}</Link>
                <div style={{ fontWeight: 500, fontSize: '0.75rem', color: 'var(--sc-ink-600)' }}>{e.organisation}</div>
              </td>
              <td style={td}>{e.vacancies ? e.vacancies.toLocaleString('en-IN') : '—'}</td>
              <td style={td}>{applyWindowText(e)}</td>
              <td style={td}>{examDateText(e)}</td>
              <td style={td}>{lc.label}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const faq = [
    { q: 'Which nursing recruitments are open for applications now?', a: open.length ? `${open.map((x) => x.e.name.replace(/\s*\(.*?\)\s*$/, '')).join('; ')}.` : 'None of the recruitments we track has an open application window right now.' },
    { q: 'How many nursing vacancies are open right now?', a: open.length ? `${openPosts.toLocaleString('en-IN')} posts across ${open.length} recruitment${open.length > 1 ? 's' : ''} that are open for applications.` : 'No tracked recruitment is open for applications at the moment.' },
    { q: 'How do you check these dates and vacancies?', a: 'Each recruitment is checked against several independent reports of the official notification, and a value is only updated when at least two sources agree. Anything we could not confirm says "See official notification".' },
    { q: 'Where should I apply?', a: 'Only on the official website of the conducting body. Never pay anyone other than the official application portal.' },
  ];
  const faqJsonLd = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((x) => ({ '@type': 'Question', name: x.q, acceptedAnswer: { '@type': 'Answer', text: x.a } })) };

  const toc: TocItem[] = [
    { id: 'introduction', label: 'Introduction' },
    ...(open.length ? [{ id: 'open', label: 'Open for Applications' }] : []),
    ...(examAhead.length ? [{ id: 'exam-ahead', label: 'Exam Ahead' }] : []),
    ...(calendar.length ? [{ id: 'calendar', label: 'Important Dates' }] : []),
    ...(concluded.length ? [{ id: 'concluded', label: 'Recently Concluded' }] : []),
    { id: 'all', label: 'All Recruitments' },
    { id: 'faq', label: 'FAQs' },
  ];
  const n = (id: string) => toc.findIndex((t) => t.id === id);
  const short = (e: (typeof exams)[number]['e']) => e.name.replace(/\s*\(.*?\)\s*$/, '');
  const bulletsFor = (list: typeof exams) => list.slice(0, 3).map(({ e, lc }) => `${short(e)} — ${lc.label}`);
  const icsEvents = exams.flatMap(({ e }) => upcomingExamEvents(e, now));

  return (
    <div className="blog-page">
      <ArticleHeader active="Resources" />
      <main className="blog-shell">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

        <ArticleHero
          crumbs={[{ label: 'Home', href: '/nursing' }, { label: 'Resources', href: '/nursing/upcoming-exams' }, { label: 'Upcoming Nursing Exams' }]}
          badge="Exam Guide"
          title="Upcoming Nursing Exams:"
          titleAccent="Vacancies, Dates"
          titleTail="& Notifications"
          subtitle="Every nursing recruitment we track in India — open applications, exam dates and vacancies, checked against independent sources and refreshed automatically."
          updatedLabel={updatedIso ? formatDay(updatedIso) : 'recently'}
          readMinutes={5}
          handwriting={['Your', 'next exam', 'starts here']}
        />

        <div className="blog-grid">
          <ArticleSidebar
            ad={<AdSlot slot="sidebar" />}
            items={toc}
            download={
              icsEvents.length
                ? { title: 'Download Nursing Exam Calendar', body: 'Every upcoming deadline and exam date, straight into your calendar.', buttonLabel: 'Download Calendar', href: icsDataUrl(icsEvents), fileName: 'nursing-exam-dates.ics' }
                : undefined
            }
          />

          <div style={{ minWidth: 0 }}>
            <section id="introduction" className="blog-intro" style={{ scrollMarginTop: '96px' }}>
              <h2>Introduction</h2>
              <p>
                We track {exams.length} nursing recruitments across India. {open.length ? `${open.length} ${open.length > 1 ? 'are' : 'is'} open for applications right now, with ${openPosts.toLocaleString('en-IN')} posts between them` : 'None is open for applications right now'}
                {nextDeadline ? `, and the next deadline is ${formatDay(nextDeadline.e.applicationDeadline!)} for ${short(nextDeadline.e)}` : ''}. Open any section below for the full tables.
              </p>
            </section>

            <AdSlot slot="article-top" />

            {open.length > 0 && (
              <ArticleSection id="open" number={n('open')} icon={<ClipboardCheck size={26} />} title="Open for Applications" bullets={bulletsFor(open)}>
                {glance(open)}
              </ArticleSection>
            )}
            {examAhead.length > 0 && (
              <ArticleSection id="exam-ahead" number={n('exam-ahead')} icon={<Hourglass size={26} />} title="Applications Closed — Exam Ahead" bullets={examAhead.slice(0, 3).map((x) => `${short(x.e)} — ${examDateText(x.e)}`)}>
                {glance(examAhead)}
              </ArticleSection>
            )}

            {calendar.length > 0 && (
              <ArticleSection id="calendar" number={n('calendar')} icon={<CalendarDays size={26} />} title="Important Dates" bullets={calendar.slice(0, 3).map((c) => `${c.text ?? formatDay(c.when)} — ${c.label.split(' — ')[0]}`)}>
                <div style={{ overflowX: 'auto' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead><tr><th style={th}>Event</th><th style={th}>Date</th><th style={th}>Add to Google Calendar</th></tr></thead>
                    <tbody>
                      {calendar.map((c) => (
                        <tr key={c.label}>
                          <td style={{ ...td, fontWeight: 600 }}>{c.label}</td>
                          <td style={td}>{c.text ?? formatDay(c.when)}</td>
                          <td style={td}>
                            <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--blog-blue)', fontWeight: 600 }}>
                              <CalendarPlus size={14} /> Add
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </ArticleSection>
            )}

            {concluded.length > 0 && (
              <ArticleSection id="concluded" number={n('concluded')} icon={<History size={26} />} title="Recently Concluded" bullets={bulletsFor(concluded)}>
                {glance(concluded)}
              </ArticleSection>
            )}

            <ArticleSection id="all" number={n('all')} icon={<Layers size={26} />} title="All Recruitments" bullets={[`${exams.length} recruitments, each with a full guide`, 'Vacancies, dates and who can apply', 'Links to the official source']}>
              <div style={{ display: 'grid', gap: '12px' }}>
                {exams.map(({ e, lc }) => {
                  const f = VERIFIED_FACTS[e.id] ?? {};
                  return (
                    <div key={e.id} style={{ paddingBottom: '12px', borderBottom: '1px solid var(--blog-line)' }}>
                      <div style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--blog-navy)', marginBottom: '4px' }}>{short(e)}</div>
                      <p style={{ margin: '0 0 6px', fontSize: '0.86rem', color: 'var(--blog-gray)', lineHeight: 1.6 }}>
                        {e.organisation}. {e.vacancies ? `${e.vacancies.toLocaleString('en-IN')} posts. ` : ''}Applications: {applyWindowText(e)}. Exam: {examDateText(e)}. {lc.label}.
                        {f.eligibility ? ` Who can apply: ${f.eligibility}.` : ''}
                      </p>
                      <Link href={`/nursing/exams/${e.slug}`} style={{ fontSize: '0.84rem', fontWeight: 600, color: 'var(--blog-blue)' }}>Full details, dates and FAQs →</Link>
                    </div>
                  );
                })}
              </div>
            </ArticleSection>

            <ArticleSection id="faq" number={n('faq')} icon={<HelpCircle size={26} />} title="FAQs" bullets={faq.slice(0, 3).map((x) => x.q)}>
              <div style={{ display: 'grid', gap: '8px' }}>
                {faq.map((x) => (
                  <details key={x.q} style={{ border: '1px solid var(--blog-line)', borderRadius: '10px', padding: '10px 12px', background: '#fff' }}>
                    <summary style={{ cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem', color: 'var(--blog-navy)' }}>{x.q}</summary>
                    <p style={{ margin: '8px 0 0', fontSize: '0.86rem', color: 'var(--blog-gray)', lineHeight: 1.6 }}>{x.a}</p>
                  </details>
                ))}
              </div>
            </ArticleSection>

            <AdSlot slot="article-mid" />

            <ArticleCTA title="Prepare for Success" body="Fill your Career Passport once and every exam guide checks your eligibility for you — free, and saved only on your device." buttonLabel="Fill your Career Passport" href="/profile" />

            <RelatedGrid items={open.concat(examAhead, concluded).slice(0, 3).map(({ e }) => ({ title: short(e), href: `/nursing/exams/${e.slug}` }))} moreHref="/nursing/exams" moreLabel="View All Exams" />
          </div>
        </div>
      </main>
    </div>
  );
}
