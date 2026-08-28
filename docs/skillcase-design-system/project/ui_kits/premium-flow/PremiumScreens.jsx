// The freemium → trial → premium path, in the order a free user meets it.
// A gate fires first; if the user has never claimed their one trial the app
// routes to the trial offer BEFORE any payment screen. Payment is only reached
// once the trial is claimed or explicitly skipped.
const NS = () => window.SkillcaseDesignSystem_a27963 || {};
const A = '../../assets/img/';

const PAGE = { width: 390, height: 800, display: 'flex', flexDirection: 'column', overflow: 'hidden', fontFamily: 'var(--font-family)', position: 'relative' };

const AmberCta = ({ label }) => (
  <button type="button" style={{ alignSelf: 'stretch', padding: '12px 16px', background: 'linear-gradient(90deg,#fcd34d,#fbbf24)', color: 'var(--ui-text-brand)', border: '1px solid rgba(251,191,36,.8)', borderRadius: 8, fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>{label}</button>
);
const GhostCta = ({ label }) => (
  <button type="button" style={{ alignSelf: 'stretch', padding: '12px 16px', background: 'none', border: 'none', color: '#fff', fontSize: 16, fontWeight: 600, cursor: 'pointer' }}>{label}</button>
);
const FinePrint = ({ children }) => (
  <p style={{ margin: 0, width: 288, textAlign: 'center', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 500 }}>{children}</p>
);

// 1 — the trial offer. A free user who has never claimed their trial lands here
// from any gate, before payment is ever offered.
function S_TrialOffer({ level = 'A1' }) {
  const { DarkFeatureList } = NS();
  return (
    <div style={{ ...PAGE, background: 'var(--ui-text-brand)' }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '40px 16px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
          <div style={{ width: 200, height: 128, position: 'relative' }}>
            <div style={{ position: 'absolute', width: 128, height: 128, background: '#dbeafe', borderRadius: 88, overflow: 'hidden' }}>
              <img src={A + 'maya/mayaWave.webp'} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <img src={A + 'trial.webp'} alt="" aria-hidden="true" style={{ position: 'absolute', right: -32, bottom: -4, width: 128, height: 128, objectFit: 'cover', borderRadius: 16 }} />
          </div>
          <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <h1 style={{ margin: 0, width: 288, textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 700, lineHeight: '32px' }}>Welcome to {level} German level!</h1>
              <p style={{ margin: 0, width: 256, textAlign: 'center', color: '#fff', fontSize: 12, lineHeight: '20px' }}>Start your 7-day Premium Trial and get full access to all features.</p>
            </div>
            <DarkFeatureList />
          </div>
        </div>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <AmberCta label="Start 7-Day Free Trial" />
          <GhostCta label="Maybe later" />
          <FinePrint>Cancel anytime. No charges during trial</FinePrint>
        </div>
      </div>
    </div>
  );
}

// 2 — trial claimed. Same screen, resolved: the badge takes centre stage, Maya
// steps out, and the only action is to go use it.
function S_TrialStarted() {
  const { DarkFeatureList } = NS();
  return (
    <div style={{ ...PAGE, background: 'var(--ui-text-brand)' }}>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '40px 16px 32px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 40 }}>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
          <div style={{ width: 144, height: 144, borderRadius: 24, overflow: 'hidden' }}>
            <img src={A + 'trial.webp'} alt="" aria-hidden="true" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 48 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
              <h1 style={{ margin: 0, width: 288, textAlign: 'center', color: '#fff', fontSize: 24, fontWeight: 700, lineHeight: '32px' }}>Congratulations! Your 7-day trial has started</h1>
              <p style={{ margin: 0, width: 256, textAlign: 'center', color: '#fff', fontSize: 12, lineHeight: '20px' }}>You now have unlimited access to all premium features for 7 days.</p>
            </div>
            <DarkFeatureList />
          </div>
        </div>
        <div style={{ alignSelf: 'stretch', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 36 }}>
          <AmberCta label="Let's go" />
          <FinePrint>Cancel anytime. No charges during trial</FinePrint>
        </div>
      </div>
    </div>
  );
}

// 3 — payment. Reached only once the trial is claimed or skipped; an already
// autopay-enabled user is redirected to Manage plan instead.
function S_Payment() {
  const { PlanSummaryCard, PaymentMethodRow } = NS();
  const methods = [
    ['razorpay', 'Razorpay (UPI, Cards, Netbanking etc)', 'UPI, Cards, Netbanking, Wallets'],
    ['upi', 'UPI', 'Google Pay, PhonePe, Paytm & more'],
    ['card', 'Card', 'Credit & Debit cards'],
    ['netbanking', 'Netbanking', 'All major banks'],
    ['wallet', 'Wallet', 'Paytm, Mobikwik & more'],
  ];
  return (
    <div style={{ ...PAGE, background: 'var(--ui-text-brand)' }}>
      <div style={{ padding: '10px 16px', display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
        <button type="button" aria-label="Go back" style={{ width: 28, height: 28, boxSizing: 'content-box', padding: 8, margin: -8, borderRadius: 6, border: '2px solid rgba(255,255,255,0.4)', background: 'none', color: '#fff', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M11 18l-6-6 6-6" /></svg>
        </button>
        <h1 style={{ margin: 0, color: '#fff', fontSize: 16, fontWeight: 600 }}>Payment</h1>
      </div>
      <div style={{ flex: 1, minHeight: 0, overflowY: 'auto', padding: '16px 16px 40px', display: 'flex', flexDirection: 'column', gap: 36 }}>
        <PlanSummaryCard image={A + 'diamond.webp'} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <h2 style={{ margin: 0, color: '#fff', fontSize: 16, fontWeight: 600 }}>Choose a payment method</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {methods.map(([k, l, h], i) => <PaymentMethodRow key={k} method={k} label={l} hint={h} selected={i === 0} />)}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <AmberCta label="Pay ₹99 Securely" />
          <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: 4, color: 'rgba(255,255,255,0.6)', fontSize: 12, fontWeight: 500 }}>
            You can cancel it anytime
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </p>
        </div>
      </div>
    </div>
  );
}

// 4–6 — the gates that start the whole path.
function Gate(props) {
  const { UsageLimitPanel } = NS();
  return (
    <div style={{ ...PAGE, background: '#eef2f7', alignItems: 'center', justifyContent: 'center', padding: 16, boxSizing: 'border-box' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,10,25,0.45)' }} />
      <div style={{ position: 'relative' }}><UsageLimitPanel {...props} /></div>
    </div>
  );
}
const S_GateLimit = () => <Gate state="limit" mascot={A + 'maya/mayaSad.webp'} timer={A + 'timer.webp'} />;
const S_GatePremium = () => <Gate state="premium" mascot={A + 'maya/mayaLooking.webp'} />;
const S_GateReset = () => <Gate state="expired" mascot={A + 'maya/mayaLooking.webp'} />;

const PREMIUM_SCREENS = [
  ['1 · limit hit', 'A free allowance runs out mid-module. Sad Maya, the hourglass, and a live countdown to the reset.', S_GateLimit],
  ['2 · premium only', 'The feature was never free. No countdown — a lock chip and the price well, uncapped.', S_GatePremium],
  ['3 · limit reset', 'The countdown ran out. No pricing at all: the flow stays celebratory and offers one Continue.', S_GateReset],
  ['4 · trial offer', 'Upgrade from a gate routes HERE first if the user has never claimed their one trial.', S_TrialOffer],
  ['5 · trial started', 'Claimed. Seven days of everything, and no charge yet.', S_TrialStarted],
  ['6 · payment', 'Only reachable once the trial is claimed or skipped. Five methods; Razorpay is the default.', S_Payment],
];

Object.assign(window, { PREMIUM_SCREENS });
