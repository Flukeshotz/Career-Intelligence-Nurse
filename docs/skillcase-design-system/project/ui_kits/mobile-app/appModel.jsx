// Level model — the exact per-level branching the app performs.
// Sources: src/utils/b1Progress.js (isB1PracticeLevel: B1 + B2 share one
// surface), src/components/NewNavbar.jsx (B2 users are shown "B1 German
// Level"), src/components/TopModeSwitcher.jsx (three tabs below B1, two tabs
// at B1/B2), src/pages/landing/components/FeatureCardsGrid.jsx (the tile set
// per level) and src/components/BottomTabBar.jsx (the centre-arch caption and
// the Jobs destination per level).
const A = '../../assets/img/';

const TILE_IMG = {
  flashcards: A + 'book.webp',
  grammar: A + 'telc.webp',
  listening: A + 'skillcase-support.webp',
  speaking: A + 'maya/mayaSmiling.webp',
  reading: A + 'hero.webp',
  test: A + 'timer.webp',
  news: A + 's.webp',
  readListen: A + 'geothe.webp',
  describe: A + 'maya/mayaStanding.webp',
  exams: A + 'trophy.webp',
  maya: A + 'maya.png',
};

// A1 revamp tiles — /a1/* routes.
const A1_TILES = [
  { title: 'Flashcards', caption: 'Learn image-based vocabulary with quiz checkpoints', image: TILE_IMG.flashcards, route: '/a1/flashcard' },
  { title: 'Grammar', caption: 'Learn chapter-wise grammar in A1', image: TILE_IMG.grammar, route: '/a1/grammar' },
  { title: 'Listening', caption: 'Train your ear with guided beginner audio tasks', image: TILE_IMG.listening, route: '/a1/listening' },
  { title: 'Speaking', caption: 'Practice pronunciation with guided speaking cards', image: TILE_IMG.speaking, route: '/a1/speaking' },
  { title: 'Reading', caption: 'Practice reading comprehension in A1', image: TILE_IMG.reading, route: '/a1/reading' },
  { title: 'Test', caption: 'Take level-wise A1 tests', image: TILE_IMG.test, route: '/a1/test' },
  { title: 'News', caption: 'Read top headlines in German and English', image: TILE_IMG.news, route: '/news' },
];

// A2 tiles — /a2/* routes.
const A2_TILES = [
  { title: 'Flashcards', caption: 'Advanced vocabulary with sentences', image: TILE_IMG.flashcards, route: '/a2/flashcard' },
  { title: 'Grammar', caption: 'Master German grammar rules', image: TILE_IMG.grammar, route: '/a2/grammar' },
  { title: 'Listening', caption: 'Improve your comprehension', image: TILE_IMG.listening, route: '/a2/listening' },
  { title: 'Speaking', caption: 'Practice pronunciation', image: TILE_IMG.speaking, route: '/a2/speaking' },
  { title: 'Reading', caption: 'Read and understand German texts', image: TILE_IMG.reading, route: '/a2/reading' },
  { title: 'Test', caption: 'Test your A2 knowledge', image: TILE_IMG.test, route: '/a2/test' },
  { title: 'News', caption: 'Daily India headlines with language toggle', image: TILE_IMG.news, route: '/news' },
];

// B1 + B2 tiles — /b1/* routes. Exam-shaped, not skill-shaped.
const B1_TILES = [
  { title: 'Flashcards', caption: 'Practice basic German using Flashcards', image: TILE_IMG.flashcards, route: '/b1/flashcard' },
  { title: 'Reading & Listening', caption: 'Read articles and answer questions', image: TILE_IMG.readListen, route: '/b1/read-listen' },
  { title: 'Describe & Speak', caption: 'Describe images and practice pronunciation', image: TILE_IMG.describe, route: '/b1/describe-speak' },
  { title: 'TELC & GOETHE Exam Papers', caption: 'Take mock exams under real constraints', image: TILE_IMG.exams, route: '/b1/exams' },
  { title: 'Talk to Maya', caption: 'Have real German conversation & get instant feedback', image: TILE_IMG.maya, route: '/b1/maya' },
  { title: 'News', caption: 'Read top headlines in German and English', image: TILE_IMG.news, route: '/news' },
];

const MODES_BELOW_B1 = [
  { key: 'learn', line1: 'Guided', line2: 'German', image: A + 'maya/mayaSmiling.webp', route: '/learn-german' },
  { key: 'practice', line1: 'German', line2: 'Practice', image: A + 'book.webp', route: '/' },
  { key: 'classes', line1: 'German', line2: 'Classes', image: A + 'class.webp', route: '/video-courses' },
];

const MODES_B1 = [
  { key: 'practice', line1: 'Job Preparation', line2: '', image: A + 'book.webp', route: '/' },
  { key: 'jobs', line1: 'German Jobs', line2: '', image: A + 'bag.webp', route: '/job-screening' },
];

// The pipeline B1/B2 candidates enter from the German Jobs tab. Titles come
// from the server's steps_config; the descriptions are the app's own
// STEP_DESCRIPTIONS map. `paywall` is deliberately absent from this list — the
// lobby filters it out and shows it as a full-screen deposit gate instead.
const JOB_STEPS = [
  { id: 'welcome', title: 'Welcome to job screening', desc: 'Read the overview of the program', status: 'done' },
  { id: 'profile_completion', title: 'Upload your documents', desc: 'Fill your education and personal details', status: 'done' },
  { id: 'interview_attempt', title: 'Skillcase Interview', desc: 'Complete your interview assessment', status: 'pending' },
  { id: 'registration_form', title: 'Agreement', desc: 'Sign the terms of agreement', status: 'locked' },
  { id: 'interview_training', title: 'Interview Training', desc: 'Attend the scheduled prep training webinar', status: 'locked' },
  { id: 'recruiter_interview', title: 'Recruiter Interview', desc: 'Meet the German employer', status: 'locked' },
  { id: 'offer_letter', title: 'Offer Letter', desc: 'Review and sign your offer', status: 'locked' },
  { id: 'visa_processing', title: 'Visa Processing', desc: 'Documentation for your German work visa', status: 'locked' },
];

// The step subtitles the header prints after "Next step - ".
const JOB_STEP_SUBTITLES = {
  welcome: 'Read the overview of the program',
  profile_completion: 'fill your education and personal details',
  interview_attempt: 'complete your interview assessment',
  registration_form: 'sign the terms of agreement',
  paywall: 'submit refundable security deposit',
  review_pending: 'wait for recruiters to review your application',
  additional_documents: 'submit supporting credentials',
  interview_training: 'attend the scheduled prep training webinar',
  recruiter_status: 'track recruiter placements and offers',
};

const TEASER_JOBS = [
  { title: 'ICU Staff Nurse', location: 'Munich, GER', org: 'Elderly Care Hospital', facts: ['100k/month', 'Language - B2'] },
  { title: 'Geriatric Nurse', location: 'Berlin, GER', org: 'Senior Care Center', facts: ['Full-time', '90k/month'] },
];

const JOURNEY = [
  { title: 'At the Airport Entrance', status: 'Level 1 completed', state: 'completed', align: 'flex-start' },
  { title: 'Check-in Counter - Identity', status: 'Level 2 completed', state: 'completed', align: 'flex-end' },
  { title: 'Security & Boarding', status: 'Level 3 completed', state: 'completed', align: 'flex-start' },
];

// One entry per user_prof_level. `headerLevel` is what the navbar prints —
// note that B2 users are shown "B1", because displayLevel collapses both.
const LEVEL_MODEL = {
  A1: { headerLevel: 'A1', isB1: false, modes: MODES_BELOW_B1, tiles: A1_TILES, ring: ['Your A1', 'progress'], jobs: 'locked' },
  A2: { headerLevel: 'A2', isB1: false, modes: MODES_BELOW_B1, tiles: A2_TILES, ring: ['Your A2', 'progress'], jobs: 'locked' },
  B1: { headerLevel: 'B1', isB1: true, modes: MODES_B1, tiles: B1_TILES, ring: ['Your B1', 'progress'], jobs: 'pipeline' },
  B2: { headerLevel: 'B1', isB1: true, modes: MODES_B1, tiles: B1_TILES, ring: ['Your B1', 'progress'], jobs: 'pipeline' },
};

const TAB_ICONS = {
  home: A + 'home.webp', jobs: A + 'bag.webp', ring: A + 'recapGermanFlag.webp',
  coins: A + 'coin.png', streak: A + 'trophy.webp',
};

Object.assign(window, { SC_ASSETS: A, LEVEL_MODEL, JOB_STEPS, JOB_STEP_SUBTITLES, TEASER_JOBS, JOURNEY, TAB_ICONS, MODES_B1, MODES_BELOW_B1 });
