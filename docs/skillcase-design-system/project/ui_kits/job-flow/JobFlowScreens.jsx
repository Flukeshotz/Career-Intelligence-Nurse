// The B1/B2 German Jobs pipeline, screen by screen, in the order a candidate
// meets them. The navy welcome comes FIRST — the lobby only appears once the
// welcome step is completed. Everything below the shell is composed from the
// components/jobs primitives.
const NS = () => window.SkillcaseDesignSystem_a27963 || {};
const A = '../../assets/img/';
const MAYA = A + 'maya/mayaSmiling.webp';
const LOGO = '../../assets/logo/skillcase-wordmark.svg';

// Step titles as the lobby prints them (server steps_config).
const STEPS = [
  { title: 'Welcome to job screening', desc: 'Read the overview of the program', status: 'done' },
  { title: 'Upload your documents', desc: 'Fill your education and personal details', status: 'done' },
  { title: 'Skillcase Interview', desc: 'Complete your interview assessment', status: 'pending' },
  { title: 'Agreement', desc: 'Sign the terms of agreement', status: 'locked' },
  { title: 'Interview Training', desc: 'Attend the scheduled prep training webinar', status: 'locked' },
  { title: 'Recruiter Interview', desc: 'Meet the German employer', status: 'locked' },
  { title: 'Offer Letter', desc: 'Review and sign your offer', status: 'locked' },
  { title: 'Visa Processing', desc: 'Documentation for your German work visa', status: 'locked' },
];

const PAGE = { width: 390, height: 780, display: 'flex', flexDirection: 'column', overflow: 'hidden', background: '#fff', fontFamily: 'var(--font-family)', position: 'relative' };

// The white pipeline chrome: logo bar, then a Back / "Job Progress" strip.
function Shell({ children, bg = '#fff', subbar = true }) {
  return (
    <div style={PAGE}>
      <div style={{ height: 48, flexShrink: 0, borderBottom: '1px solid #efefef', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px' }}>
        <img src={LOGO} alt="Skillcase" style={{ height: 13 }} />
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <svg viewBox="0 0 100 100" width="22" height="22" style={{ borderRadius: 9999 }} fill="none"><circle cx="50" cy="50" r="50" fill="#D1D5DB" /><circle cx="50" cy="38" r="16" fill="#9CA3AF" /><ellipse cx="50" cy="78" rx="28" ry="20" fill="#9CA3AF" /></svg>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </div>
      </div>
      {subbar ? (
        <div style={{ height: 34, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 14px', borderBottom: '1px solid #f4f5f7' }}>
          <button type="button" style={{ display: 'flex', alignItems: 'center', gap: 5, minHeight: 34, padding: '0 4px 0 0', margin: 0, border: 'none', background: 'none', font: 'inherit', fontSize: 11, fontWeight: 600, color: 'var(--ui-text-secondary)', cursor: 'pointer', borderRadius: 4 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>Back
          </button>
          <span style={{ fontSize: 11, fontWeight: 500, color: '#8a93a0' }}>Job Progress</span>
        </div>
      ) : null}
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', background: bg }}>{children}</div>
    </div>
  );
}

const Pad = ({ children, gap = 16 }) => <div style={{ padding: 16, display: 'flex', flexDirection: 'column', gap }}>{children}</div>;

function Field({ label, value, prefix }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
      <span style={{ fontSize: 11, fontWeight: 600, color: 'var(--ui-text-secondary)' }}>{label}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: 8, border: '1px solid #d8e0ea', borderRadius: 8, padding: '10px 11px', fontSize: 13, color: value ? 'var(--ui-text-body-alt)' : '#a3aab5' }}>
        {prefix ? <span style={{ color: 'var(--ui-text-secondary)', fontWeight: 600, borderRight: '1px solid #e2e8f0', paddingRight: 8 }}>{prefix}</span> : null}
        {value || 'Enter ' + String(label).toLowerCase()}
      </span>
    </label>
  );
}

const Cta = ({ label, variant = 'navy' }) => (
  <button type="button" style={{
    width: '100%', padding: '13px 16px', borderRadius: 8, fontSize: 14, fontWeight: 700, cursor: 'pointer',
    ...(variant === 'amber'
      ? { background: 'linear-gradient(90deg,#fde68a,#fcd34d)', color: 'var(--ui-text-brand)', border: '1px solid #fcd34d' }
      : { background: 'var(--ui-text-brand)', color: '#fff', border: 'none' }),
  }}>{label}</button>
);

// 1 — the navy welcome. FIRST screen of the pipeline, before the lobby.
function S_Welcome() {
  const { JobWelcomePanel } = NS();
  return <Shell subbar={false} bg="#052252"><JobWelcomePanel mascot={A + 'maya/mayaThumbsup.webp'} /></Shell>;
}

// 2 — the progress lobby, reached once welcome is completed.
function S_Lobby() {
  const { JobProgressHeader, JobStepCard } = NS();
  return (
    <Shell bg="linear-gradient(180deg,#e0f2fe,#dbeafe)">
      <Pad gap={20}>
        <JobProgressHeader completed={2} total={STEPS.length} nextStep="complete your interview assessment" />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {STEPS.map((s, i) => <JobStepCard key={s.title} index={i + 1} title={s.title} description={s.desc} status={s.status} last={i === STEPS.length - 1} />)}
        </div>
        <Cta label="Continue with Step 3" variant="amber" />
      </Pad>
    </Shell>
  );
}

// 3 — the details form behind step 1.
function S_Details() {
  return (
    <Shell>
      <Pad>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Welcome to job screening</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: 'var(--ui-text-secondary)' }}>Confirm the details our recruitment partners will see first.</p>
        </div>
        <Field label="Full name" value="Avinash Rai" />
        <Field label="Phone number" value="000-000-0000" prefix="IN +91" />
        <Field label="Email" value="mia@company.com" />
        <Field label="Last name" value="" />
        <Cta label="Submit" />
      </Pad>
    </Shell>
  );
}

// 4 — document upload, one row per required credential.
function S_Upload() {
  const { UploadRow } = NS();
  return (
    <Shell>
      <Pad>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Upload your documents</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: 'var(--ui-text-secondary)' }}>Your CV and language certification go to the recruiter as-is.</p>
        </div>
        <UploadRow label="Resume" status="approved" file="Avinash-Rai-CV.pdf" />
        <UploadRow label="Language Certificates" status="pending" />
        <UploadRow label="Education Certificates" status="pending" />
        <Cta label="Submit" />
      </Pad>
    </Shell>
  );
}

// 5 — waiting on the recruiter's read of the profile.
function S_UnderReview() {
  const { StatusPanel, StatusChecklist, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Profile under review" body="Our recruitment partners are checking your documents against the role requirements."
          note={<MayaNote mascot={MAYA} />} actionLabel="Refresh status" actionVariant="ghost">
          <StatusChecklist items={[
            { label: 'Documents received', state: 'done' },
            { label: 'Verification in progress', hint: 'A recruiter is reading your file now', state: 'active' },
            { label: 'Profile approved', state: 'pending' },
          ]} />
        </StatusPanel>
      </Pad>
    </Shell>
  );
}

// 6 — the same panel resolved.
function S_Reviewed() {
  const { StatusPanel, StatusChecklist, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Profile reviewed successfully" body="You are cleared to sign the registration agreement."
          note={<MayaNote mascot={MAYA} text="The agreement is a formality — read it before you sign." />} actionLabel="Move to next step">
          <StatusChecklist items={[
            { label: 'Documents received', state: 'done' },
            { label: 'Verification complete', state: 'done' },
            { label: 'Profile approved', state: 'done' },
          ]} />
        </StatusPanel>
      </Pad>
    </Shell>
  );
}

// 7 — the agreement's cover, listing what needs signing.
function S_SignIntro() {
  const { UploadRow } = NS();
  return (
    <Shell>
      <Pad>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Sign job registration form</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: 'var(--ui-text-secondary)' }}>One document, signed once. It explains how we work together during placement.</p>
        </div>
        <UploadRow label="B1 & B2 registration form" status="pending" formats="Opens in the reader" />
        <Cta label="Read & Sign" />
      </Pad>
    </Shell>
  );
}

// 8 — the reader itself.
function S_Reader() {
  const { DocumentReader } = NS();
  return <Shell bg="#e9ebef"><DocumentReader pages={2} /></Shell>;
}

// 9 / 10 — signing, typed and upload-empty.
function S_SignType() {
  const { SignatureModal, DocumentReader } = NS();
  return <Shell bg="#e9ebef"><DocumentReader pages={2} enabled={false} /><SignatureModal mode="type" /></Shell>;
}
function S_SignUpload() {
  const { SignatureModal, DocumentReader } = NS();
  return <Shell bg="#e9ebef"><DocumentReader pages={2} enabled={false} /><SignatureModal mode="upload" /></Shell>;
}

// 11 — signed.
function S_Signed() {
  const { StatusPanel, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Agreement signed successfully" body="A copy has been emailed to you."
          note={<MayaNote mascot={MAYA} text="Keep the signed copy — you will need it at the visa stage." />} actionLabel="Move to next step" />
      </Pad>
    </Shell>
  );
}

// 12 — the interview briefing.
function S_InterviewBrief() {
  const { PointsToRemember, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Your Skillcase interview</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: 'var(--ui-text-secondary)' }}>A short spoken assessment. It is recorded and reviewed by a person.</p>
        </div>
        <PointsToRemember items={[
          { label: 'Language screening warning', hint: 'Answer in German wherever you can' },
          { label: 'About 10 minutes', hint: 'Do it in one sitting — you cannot pause' },
          { label: 'Check it is not muted', hint: 'Test your mic before you begin' },
        ]} />
        <MayaNote mascot={MAYA} text="Find a quiet, well-lit spot. Background noise costs you marks." />
        <Cta label="Set up camera and mic" />
      </Pad>
    </Shell>
  );
}

// 13 — interview submitted, awaiting review.
function S_InterviewReview() {
  const { StatusPanel, StatusChecklist, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Interview under review" body="Your recording is with the assessment team."
          note={<MayaNote mascot={MAYA} />} actionLabel="Refresh status" actionVariant="ghost">
          <StatusChecklist items={[
            { label: 'Interview submitted', state: 'done' },
            { label: 'Assessment in progress', state: 'active' },
            { label: 'Result published', state: 'pending' },
          ]} />
        </StatusPanel>
      </Pad>
    </Shell>
  );
}

// 14 — training briefing.
function S_TrainingBrief() {
  const { PointsToRemember, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Interview training</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: 'var(--ui-text-secondary)' }}>A live call with a trainer before you meet an employer.</p>
        </div>
        <PointsToRemember items={[
          { label: 'One-on-one training', hint: 'Not a webinar — just you and the trainer' },
          { label: 'Expert guidance', hint: 'Run by recruiters who place nurses in Germany' },
          { label: 'Feedback on your interview', hint: 'They will walk through your recording with you' },
        ]} />
        <MayaNote mascot={MAYA} text="Slots fill up fast. Book the earliest one you can make." />
        <Cta label="Schedule a training call" />
      </Pad>
    </Shell>
  );
}

// 15 — the slot picker over the briefing.
function S_Slots() {
  const { SlotPicker } = NS();
  return (
    <Shell>
      <Pad><div style={{ height: 200 }} /></Pad>
      <SlotPicker slots={['11:00 AM - 12:00 PM', '11:00 AM - 12:00 PM', '11:33 AM - 12:00 PM', '11:33 AM - 12:00 PM']} selected={0} />
    </Shell>
  );
}

// 16 — booked.
function S_Booked() {
  const { StatusPanel, ScheduledCallCard, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Your training call has been scheduled" body="Join from this screen — the link opens at the start time.">
          <ScheduledCallCard rows={[
            { icon: 'date', label: 'Date', value: '22 June 2026' },
            { icon: 'time', label: 'Time', value: '10:00 AM - 11:00 AM' },
            { icon: 'host', label: 'Host', value: 'Avinash Rai' },
          ]} />
          <MayaNote mascot={MAYA} text="Missing the call sends you back to the booking screen." />
        </StatusPanel>
      </Pad>
    </Shell>
  );
}

// 17 — matching.
function S_Matching() {
  const { StatusPanel, StatusChecklist, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Matching you with German employers" body="Your profile is with our partner hospitals."
          note={<MayaNote mascot={MAYA} />} actionLabel="Refresh status" actionVariant="ghost">
          <StatusChecklist items={[
            { label: 'Profile shared with partners', state: 'done' },
            { label: 'Interview with employer', hint: 'They will propose slots here', state: 'active' },
            { label: 'Offer letter', state: 'pending' },
          ]} />
        </StatusPanel>
      </Pad>
    </Shell>
  );
}

// 18 — the roles a candidate is under consideration for.
function S_JobList() {
  const { JobListingCard } = NS();
  return (
    <Shell bg="#f6f8fb">
      <Pad>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>Your profile is being reviewed by these German employers</h2>
          <p style={{ margin: '6px 0 0', fontSize: 12, lineHeight: 1.6, color: 'var(--ui-text-secondary)' }}>Three hospitals have your file. You do not apply — they come to you.</p>
        </div>
        {[['ICU Staff Nurse', 'Munich, GER', 'Elderly Care Hospital'], ['Geriatric Nurse', 'Berlin, GER', 'Senior Care Center'], ['Theatre Nurse', 'Köln, GER', 'St. Marien Klinik']].map(([t, l, o]) => (
          <JobListingCard key={t} title={t} location={l} org={o} facts={['Full-time', '80k - 100k']} locked={false} ctaLabel="View role" />
        ))}
      </Pad>
    </Shell>
  );
}

// 19 — the role in full, with what is and is not included.
function S_JobDetail() {
  return (
    <Shell bg="#fff">
      <Pad gap={18}>
        <div>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: 'var(--ui-text-brand)' }}>ICU Staff Nurse</h2>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 6, fontSize: 12, color: 'var(--ui-text-secondary)' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            Munich, GER · Full-time · 80k - 100k
          </div>
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ui-text-body-alt)', marginBottom: 10 }}>Benefits included with this job</div>
          {[['Accommodation', true], ['Travel', false], ['Visa Assistance', false]].map(([label, yes]) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '7px 0', borderBottom: '1px solid #f1f5f9' }}>
              <span style={{ fontSize: 12.5, color: 'var(--ui-text-secondary)' }}>{label}</span>
              {yes ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#019035" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#dc2626" strokeWidth="2.6" strokeLinecap="round"><path d="M18 6 6 18M6 6l12 12" /></svg>
              )}
            </div>
          ))}
        </div>
        {[['About the job', 'A 24-bed intensive care unit in a teaching hospital. You work in a team of eight on rotating shifts, with a mentor for the first three months.'],
          ['Language requirements', 'B2 German, certified. The ward round is in German and there is no interpreter.'],
          ['Working experience requirements', 'Two years of post-registration nursing, at least one in critical or acute care.']].map(([h, b]) => (
          <div key={h}>
            <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--ui-text-body-alt)', marginBottom: 5 }}>{h}</div>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.65, color: 'var(--ui-text-secondary)' }}>{b}</p>
          </div>
        ))}
        <Cta label="Schedule interview" />
      </Pad>
    </Shell>
  );
}

// 20 — an offer landed.
function S_Congrats() {
  const { StatusPanel, MayaNote } = NS();
  return (
    <Shell>
      <Pad>
        <StatusPanel title="Congratulations" body="You have received an offer letter for ICU Staff Nurse at Elderly Care Hospital, Munich."
          note={<MayaNote mascot={MAYA} text="Read every clause before signing. Ask us anything first." />} actionLabel="Check & sign offer letter" actionVariant="amber" />
      </Pad>
    </Shell>
  );
}

// 21 — the offer letter in the reader.
function S_Offer() {
  const { DocumentReader } = NS();
  return <Shell bg="#e9ebef"><DocumentReader pages={2} ctaLabel="Read & Sign" /></Shell>;
}

const JOB_SCREENS = [
  ['1 · welcome', 'The FIRST screen — full-bleed navy under the logo bar. The lobby only appears once this step completes.', S_Welcome],
  ['2 · lobby', 'Progress ring over the eight-step checklist. Only the active card carries a button.', S_Lobby],
  ['3 · details', 'The details a recruiter sees first.', S_Details],
  ['4 · documents', 'One row per credential, each with its own approval state.', S_Upload],
  ['5 · under review', 'The waiting pattern: checklist + Maya note + Refresh status.', S_UnderReview],
  ['6 · reviewed', 'The same panel resolved — every row green, action becomes Move to next step.', S_Reviewed],
  ['7 · agreement', 'The document cover before the reader opens.', S_SignIntro],
  ['8 · reader', 'Page cards on a grey desk; Read & Sign pinned at the bottom.', S_Reader],
  ['9 · sign (type)', 'Type / Draw / Upload. Typed mode renders the name in the script face.', S_SignType],
  ['10 · sign (upload)', 'Upload mode holds Submit Sign disabled until a file lands.', S_SignUpload],
  ['11 · signed', 'Confirmation, then straight on to the next step.', S_Signed],
  ['12 · interview brief', 'Points to remember before a recorded assessment.', S_InterviewBrief],
  ['13 · interview review', 'Same waiting pattern, different copy.', S_InterviewReview],
  ['14 · training brief', 'One-on-one prep call with a trainer.', S_TrainingBrief],
  ['15 · slots', 'The booking modal — reused for training calls, employer interviews and reschedules.', S_Slots],
  ['16 · booked', 'Date, time, host, then join or add to calendar.', S_Booked],
  ['17 · matching', 'Profile shared → employer interview → offer letter.', S_Matching],
  ['18 · roles', 'The employers holding your file. The candidate does not apply.', S_JobList],
  ['19 · role detail', 'What the job includes — and, pointedly, what it does not.', S_JobDetail],
  ['20 · offer', 'An offer letter has arrived.', S_Congrats],
  ['21 · offer letter', 'The offer in the same reader, signed the same way.', S_Offer],
];

Object.assign(window, { JOB_SCREENS, JOB_PIPELINE_STEPS: STEPS });
