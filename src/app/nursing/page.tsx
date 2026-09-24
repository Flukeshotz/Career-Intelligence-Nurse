import Link from 'next/link';
import { ArrowRight, CalendarDays, FileText, Landmark, Hospital, Globe2, UserCheck } from 'lucide-react';
import { INITIAL_EXAMS, INITIAL_JOBS } from '@/lib/mock-data';
import { deriveLifecycle } from '@/lib/lifecycle';
import { getTrust } from '@/lib/verification';
import { applyWindowText, examDateText, formatDay } from '@/lib/format-dates';
import { EXAM_PAPERS } from '@/lib/pyq-mock-data';
import { ArticleHero } from '@/components/blog/ArticleHero';
import { ArticleCTA } from '@/components/blog/ArticleCTA';
import { RelatedGrid } from '@/components/blog/RelatedGrid';
import { AdSlot } from '@/components/blog/AdSlot';
import { HomeSearch } from './HomeSearch';

/**
 * Home — in the same design system as the blog pages. Every number is computed from the verified
 * records at render time (rebuilt hourly); nothing is typed in by hand.
 */
export const revalidate = 3600;

const short = (name: string) => name.replace(/\s*\(.*?\)\s*$/, '');

export default function NursingHome() {
  const now = Date.now();
  const exams = INITIAL_EXAMS.filter((e) => !getTrust(e.id).suppressFromListings).map((e) => ({ e, lc: deriveLifecycle(e, now) }));
  const open = exams.filter((x) => x.lc.stage === 'applications_open').sort((a, b) => (a.lc.daysToDeadline ?? 999) - (b.lc.daysToDeadline ?? 999));
  const ahead = exams
    .filter((x) => x.lc.stage === 'applications_closed' || x.lc.stage === 'upcoming')
    .sort((a, b) => +new Date(a.e.examDate ?? '2100-01-01') - +new Date(b.e.examDate ?? '2100-01-01'));
  const openPosts = open.reduce((n, x) => n + (x.e.vacancies ?? 0), 0);
  const updatedIso = exams.map((x) => getTrust(x.e.id).checkedAt).filter(Boolean).sort().pop();
  const guides = [...exams].sort((a, b) => +new Date(b.e.applicationStart ?? 0) - +new Date(a.e.applicationStart ?? 0)).slice(0, 3);

  return (
    <div className="blog-page">
      <main className="blog-shell" style={{ paddingTop: '4px' }}>
        <ArticleHero
          crumbs={[]}
          badge="Nursing careers · India"
          title="Every nursing recruitment in India,"
          titleAccent="checked"
          titleTail="and in one place"
          subtitle="Vacancies, application dates, eligibility and pay for government nursing exams — read from official notices or confirmed by independent sources, and re-checked every day."
          showShare={false}
          handwriting={['Your', 'next step', 'in nursing']}
        >
          <HomeSearch />
          <p className="home-stats">
            <strong>{exams.length}</strong> recruitments tracked · <strong>{open.length}</strong> open now
            {openPosts ? (
              <>
                {' '}· <strong>{openPosts.toLocaleString('en-IN')}</strong> posts open
              </>
            ) : null}
            {updatedIso ? <> · checked {formatDay(updatedIso, false)}</> : null}
          </p>
        </ArticleHero>

        <section className="home-section">
          <div className="blog-rel-head">
            <h2>Open for applications</h2>
            <Link href="/nursing/upcoming-exams">
              Exam calendar <ArrowRight size={16} />
            </Link>
          </div>
          {open.length ? (
            <div className="home-cards">
              {open.map(({ e, lc }) => (
                <Link key={e.id} href={`/nursing/exams/${e.slug}`} className="home-card">
                  <span className="home-card-org">{e.organisation}</span>
                  <b>{short(e.name)}</b>
                  <span className="home-card-facts">
                    {e.vacancies ? <>{e.vacancies.toLocaleString('en-IN')} posts · </> : null}Apply {applyWindowText(e)}
                  </span>
                  <span className="home-card-foot">
                    <span className="home-pill home-pill--open">{lc.label}</span>
                    <span className="home-card-go">
                      Read the guide <ArrowRight size={15} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          ) : (
            <p className="home-empty">No recruitment we track is taking applications right now. See what is coming up below.</p>
          )}
        </section>

        {ahead.length > 0 && (
          <section className="home-section">
            <div className="blog-rel-head">
              <h2>Exams coming up</h2>
            </div>
            <div className="home-cards">
              {ahead.map(({ e, lc }) => (
                <Link key={e.id} href={`/nursing/exams/${e.slug}`} className="home-card">
                  <span className="home-card-org">{e.organisation}</span>
                  <b>{short(e.name)}</b>
                  <span className="home-card-facts">Exam: {examDateText(e)}</span>
                  <span className="home-card-foot">
                    <span className="home-pill">{lc.label}</span>
                    <span className="home-card-go">
                      Read the guide <ArrowRight size={15} />
                    </span>
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <AdSlot slot="article-top" />

        <section className="home-section">
          <div className="blog-rel-head">
            <h2>Explore</h2>
          </div>
          <div className="home-explore">
            <Link href="/nursing/exams" className="home-tile">
              <span className="home-tile-ico"><Landmark size={24} /></span>
              <b>Government exams</b>
              <span>{exams.length} nursing recruitments, each with a full guide</span>
            </Link>
            <Link href="/nursing/upcoming-exams" className="home-tile">
              <span className="home-tile-ico"><CalendarDays size={24} /></span>
              <b>Exam calendar</b>
              <span>Every deadline and exam date, with calendar downloads</span>
            </Link>
            <Link href="/nursing/pyq" className="home-tile">
              <span className="home-tile-ico"><FileText size={24} /></span>
              <b>Previous year papers</b>
              <span>{EXAM_PAPERS.length} papers taken from the official question booklets</span>
            </Link>
            <Link href="/nursing/jobs" className="home-tile">
              <span className="home-tile-ico"><Hospital size={24} /></span>
              <b>Hospital jobs</b>
              <span>{INITIAL_JOBS.length ? `${INITIAL_JOBS.length} checked openings` : 'Being verified — no listings yet'}</span>
            </Link>
            <Link href="/nursing/abroad" className="home-tile">
              <span className="home-tile-ico"><Globe2 size={24} /></span>
              <b>Working abroad</b>
              <span>Being verified — no listings yet</span>
            </Link>
          </div>
        </section>

        <section className="blog-dl home-passport">
          <div className="blog-dl-top">
            <div className="blog-dl-ico">
              <UserCheck size={26} />
            </div>
            <div>
              <b>Which of these can you apply for?</b>
              <p>Add your qualification, council registration and date of birth once. Each exam guide then checks its rules against your details.</p>
            </div>
          </div>
          <Link href="/profile">Build your Career Passport</Link>
        </section>

        <ArticleCTA
          title="Prepare for Success"
          body="Join SkillCase and get your Career Passport, eligibility checks and deadline alerts for every nursing recruitment in one place."
          buttonLabel="Explore Our Programs"
          href="/profile"
        />

        <RelatedGrid title="Latest exam guides" items={guides.map(({ e }) => ({ title: short(e.name), href: `/nursing/exams/${e.slug}` }))} moreHref="/nursing/exams" moreLabel="All exams" />
      </main>
    </div>
  );
}
