import Link from 'next/link';

/** Site-wide footer in the blog design system: navigation, trust notes and the Germany programme. */
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <b>
            <span style={{ color: '#fff' }}>SKILL</span>
            <span style={{ color: '#f5a524' }}>CASE</span>
          </b>
          <p>Every nursing recruitment in India, checked and in one place.</p>
          <p className="site-footer-note">Always confirm details on the conducting body&apos;s official website before applying. We never ask for money to apply.</p>
        </div>
        <nav aria-label="Footer" className="site-footer-cols">
          <div>
            <h4>Exams</h4>
            <Link href="/nursing/exams">All exams</Link>
            <Link href="/nursing/upcoming-exams">Exam calendar</Link>
            <Link href="/nursing/pyq">Previous year papers</Link>
          </div>
          <div>
            <h4>You</h4>
            <Link href="/profile">Career Passport</Link>
            <Link href="/cycles">My recruitment cycles</Link>
          </div>
          <div>
            <h4>SkillCase</h4>
            <Link href="/about">About &amp; how we check</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="https://learner.skillcase.in/start-now?utm_source=skillcase_nursing&utm_medium=footer&utm_campaign=germany" target="_blank" rel="noopener">
              Germany programme
            </a>
          </div>
        </nav>
      </div>
      <div className="site-footer-base">© {new Date().getFullYear()} SkillCase</div>
    </footer>
  );
}
