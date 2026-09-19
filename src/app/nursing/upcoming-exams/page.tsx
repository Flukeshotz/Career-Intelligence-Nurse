import type { Metadata } from 'next';
import Link from 'next/link';
import { CalendarPlus } from 'lucide-react';
import { INITIAL_EXAMS } from '@/lib/mock-data';
import { deriveLifecycle } from '@/lib/lifecycle';
import { getTrust } from '@/lib/verification';
import { applyWindowText, examDateText, formatDay } from '@/lib/format-dates';
import { googleCalendarUrl } from '@/lib/exam-content';
import { VERIFIED_FACTS } from '@/lib/verified-facts';

// Rebuilt hourly so "open now" and "days left" never go stale between data refreshes.
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Upcoming Nursing Exams & Vacancies in India — Dates, Posts, Notifications',
  description:
    'Nursing recruitment exams in India with vacancies, application dates and exam dates, checked against independent sources and updated automatically.',
  alternates: { canonical: '/nursing/upcoming-exams' },
};

const h2: React.CSSProperties = { fontSize: '1.15rem', fontWeight: 800, color: 'var(--sc-navy-900)', margin: '0 0 12px' };
const card: React.CSSProperties = { padding: '18px', marginBottom: '18px' };
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

  return (
    <main className="wide-container mobile-safe-bottom" style={{ paddingTop: '20px', maxWidth: '960px', margin: '0 auto', padding: '20px 16px' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <h1 style={{ fontSize: '1.5rem', fontWeight: 800, lineHeight: 1.25, color: 'var(--sc-navy-900)', margin: '0 0 6px' }}>
        Upcoming Nursing Exams &amp; Vacancies in India
      </h1>
      <p style={{ margin: '0 0 18px', fontSize: '0.9rem', color: 'var(--sc-ink-600)', lineHeight: 1.6 }}>
        Vacancies, application windows and exam dates for nursing recruitments, checked against independent sources and refreshed automatically.
        {updatedIso ? ` Last checked ${formatDay(updatedIso)}.` : ''}
      </p>

      <section className="sc-card" style={card}>
        <h2 style={h2}>Key highlights</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead><tr><th style={th}>Particulars</th><th style={th}>Details</th></tr></thead>
          <tbody>
            {[
              ['Recruitments tracked', String(exams.length)],
              ['Open for applications now', open.length ? `${open.length} (${openPosts.toLocaleString('en-IN')} posts)` : 'None right now'],
              ['Next application deadline', nextDeadline ? `${nextDeadline.e.name.replace(/\s*\(.*?\)\s*$/, '')} — ${formatDay(nextDeadline.e.applicationDeadline!)}` : '—'],
              ['Exam coming up (applications closed)', examAhead.length ? examAhead.map((x) => `${x.e.name.replace(/\s*\(.*?\)\s*$/, '')} (${examDateText(x.e)})`).join('; ') : '—'],
            ].map(([k, v]) => (
              <tr key={k}><td style={{ ...td, fontWeight: 700, width: '38%' }}>{k}</td><td style={td}>{v}</td></tr>
            ))}
          </tbody>
        </table>
      </section>

      {open.length > 0 && (
        <section className="sc-card" style={card}>
          <h2 style={h2}>Open for applications</h2>
          {glance(open)}
        </section>
      )}
      {examAhead.length > 0 && (
        <section className="sc-card" style={card}>
          <h2 style={h2}>Applications closed — exam ahead</h2>
          {glance(examAhead)}
        </section>
      )}
      {concluded.length > 0 && (
        <section className="sc-card" style={card}>
          <h2 style={h2}>Recently concluded</h2>
          {glance(concluded)}
        </section>
      )}

      {calendar.length > 0 && (
        <section className="sc-card" style={card}>
          <h2 style={h2}>Calendar — add the dates that matter</h2>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead><tr><th style={th}>Event</th><th style={th}>Date</th><th style={th}>Add to Google Calendar</th></tr></thead>
              <tbody>
                {calendar.map((c) => (
                  <tr key={c.label}>
                    <td style={{ ...td, fontWeight: 700 }}>{c.label}</td>
                    <td style={td}>{c.text ?? formatDay(c.when)}</td>
                    <td style={td}>
                      <a href={c.url} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'var(--sc-navy-700)', fontWeight: 700 }}>
                        <CalendarPlus size={14} /> Add
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {exams.map(({ e, lc }) => {
        const f = VERIFIED_FACTS[e.id] ?? {};
        return (
          <section key={e.id} className="sc-card" style={card}>
            <h2 style={h2}>{e.name.replace(/\s*\(.*?\)\s*$/, '')}</h2>
            <p style={{ margin: '0 0 8px', fontSize: '0.88rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>
              {e.organisation}. {e.vacancies ? `${e.vacancies.toLocaleString('en-IN')} posts. ` : ''}Applications: {applyWindowText(e)}. Exam: {examDateText(e)}. {lc.label}.
              {f.eligibility ? ` Who can apply: ${f.eligibility}.` : ''}
            </p>
            <Link href={`/nursing/exams/${e.slug}`} style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--sc-navy-700)' }}>Full details, dates and FAQs →</Link>
          </section>
        );
      })}

      <section className="sc-card" style={card}>
        <h2 style={h2}>Frequently asked questions</h2>
        <div style={{ display: 'grid', gap: '8px' }}>
          {faq.map((x) => (
            <details key={x.q} style={{ border: '1px solid var(--sc-line-200)', borderRadius: '10px', padding: '10px 12px' }}>
              <summary style={{ cursor: 'pointer', fontWeight: 700, fontSize: '0.88rem', color: 'var(--sc-navy-900)' }}>{x.q}</summary>
              <p style={{ margin: '8px 0 0', fontSize: '0.86rem', color: 'var(--sc-ink-700)', lineHeight: 1.6 }}>{x.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
