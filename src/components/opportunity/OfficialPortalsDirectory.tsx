'use client';

import { ExternalLink } from 'lucide-react';

interface Portal {
  id: string;
  name: string;
  authority: string;
  tag: string;
  accentColor: string;
  url: string;
  posts?: string;
}

const PORTAL_SECTIONS: { heading: string; emoji: string; portals: Portal[] }[] = [
  {
    heading: 'Central Government & National Institutes',
    emoji: '🏛️',
    portals: [
      { id: 'aiims', name: 'AIIMS NORCET 2026', authority: 'aiimsexams.ac.in', tag: 'Central', accentColor: '#083262', url: 'https://www.aiimsexams.ac.in', posts: '2,218 Posts' },
      { id: 'rrb', name: 'RRB Indian Railways — Nursing Superintendent', authority: 'rrbapply.gov.in', tag: 'Railways', accentColor: '#1a6b2e', url: 'https://www.rrbapply.gov.in', posts: '713 Posts' },
      { id: 'esic', name: 'UPSC — ESIC Nursing Officer', authority: 'upsconline.nic.in', tag: 'Central', accentColor: '#083262', url: 'https://upsconline.nic.in', posts: '1,930 Posts' },
      { id: 'dsssb', name: 'DSSSB — Delhi Nursing Officer', authority: 'dsssbonline.nic.in', tag: 'Delhi', accentColor: '#7c1d1d', url: 'https://dsssbonline.nic.in', posts: '1,507 Posts' },
      { id: 'jipmer', name: 'JIPMER Puducherry', authority: 'jipmer.edu.in', tag: 'Central', accentColor: '#083262', url: 'https://www.jipmer.edu.in', posts: '180 Posts' },
      { id: 'pgimer', name: 'PGIMER Chandigarh', authority: 'pgimer.edu.in', tag: 'Central', accentColor: '#083262', url: 'https://pgimer.edu.in', posts: '350 Posts' },
    ],
  },
  {
    heading: 'Defense & Armed Forces',
    emoji: '🛡️',
    portals: [
      { id: 'mns', name: 'Military Nursing Service (MNS)', authority: 'joinindianarmy.nic.in', tag: 'Army', accentColor: '#4a5e2a', url: 'https://joinindianarmy.nic.in', posts: 'SSC Officers' },
      { id: 'itbp', name: 'ITBP Sub-Inspector Nurse', authority: 'recruitment.itbpolice.nic.in', tag: 'CAPF', accentColor: '#4a5e2a', url: 'https://recruitment.itbpolice.nic.in', posts: '108 Posts' },
      { id: 'bsf', name: 'BSF Sub-Inspector Nurse', authority: 'rectt.bsf.gov.in', tag: 'CAPF', accentColor: '#4a5e2a', url: 'https://rectt.bsf.gov.in', posts: '85 Posts' },
      { id: 'crpf', name: 'CRPF Paramedical Nurse', authority: 'crpf.gov.in', tag: 'CAPF', accentColor: '#4a5e2a', url: 'https://crpf.gov.in/recruitment.htm', posts: '120 Posts' },
    ],
  },
  {
    heading: 'State Public Service Commissions',
    emoji: '🗺️',
    portals: [
      { id: 'tn-mrb', name: 'TN MRB — Tamil Nadu', authority: 'mrb.tn.gov.in', tag: 'TN', accentColor: '#7c2d12', url: 'https://www.mrb.tn.gov.in', posts: '3,264 Posts' },
      { id: 'kpsc', name: 'KPSC — Karnataka', authority: 'kpsc.karnataka.gov.in', tag: 'KA', accentColor: '#7c2d12', url: 'https://kpsc.karnataka.gov.in', posts: '840 Posts' },
      { id: 'kerala-psc', name: 'Kerala PSC (Thulasi)', authority: 'thulasi.psc.kerala.gov.in', tag: 'KL', accentColor: '#14532d', url: 'https://thulasi.psc.kerala.gov.in/thulasi/', posts: '420 Posts' },
      { id: 'uppsc', name: 'UPPSC — Uttar Pradesh', authority: 'uppsc.up.nic.in', tag: 'UP', accentColor: '#083262', url: 'https://uppsc.up.nic.in', posts: '2,240 Posts' },
      { id: 'wbhrb', name: 'WBHRB — West Bengal', authority: 'wbhrb.in', tag: 'WB', accentColor: '#083262', url: 'https://wbhrb.in', posts: '5,000+ Posts' },
      { id: 'btsc', name: 'BTSC — Bihar', authority: 'btsc.bihar.gov.in', tag: 'BR', accentColor: '#083262', url: 'https://btsc.bihar.gov.in', posts: '2,800 Posts' },
      { id: 'ts-mhsrb', name: 'TS MHSRB — Telangana', authority: 'mhsrb.telangana.gov.in', tag: 'TS', accentColor: '#7c2d12', url: 'https://mhsrb.telangana.gov.in', posts: '1,215 Posts' },
      { id: 'ap-mhsrb', name: 'AP MHSRB — Andhra Pradesh', authority: 'mhsrb.ap.gov.in', tag: 'AP', accentColor: '#7c2d12', url: 'https://mhsrb.ap.gov.in', posts: '750 Posts' },
      { id: 'rsmssb', name: 'RSMSSB — Rajasthan', authority: 'sso.rajasthan.gov.in', tag: 'RJ', accentColor: '#7c3d1e', url: 'https://sso.rajasthan.gov.in', posts: '1,900 Posts' },
      { id: 'ojas', name: 'Gujarat OJAS', authority: 'ojas.gujarat.gov.in', tag: 'GJ', accentColor: '#7c2d12', url: 'https://ojas.gujarat.gov.in', posts: '1,320 Posts' },
      { id: 'jkssb', name: 'JKSSB — J&K', authority: 'jkssb.nic.in', tag: 'J&K', accentColor: '#083262', url: 'https://jkssb.nic.in', posts: '1,000+ Posts' },
      { id: 'osssc', name: 'OSSSC — Odisha', authority: 'osssc.gov.in', tag: 'OD', accentColor: '#083262', url: 'https://www.osssc.gov.in', posts: '985 Posts' },
    ],
  },
  {
    heading: 'Academic Entrances',
    emoji: '🎓',
    portals: [
      { id: 'neet', name: 'NEET UG — B.Sc. Nursing Admission', authority: 'neet.ntaonline.in', tag: 'National', accentColor: '#581c87', url: 'https://neet.ntaonline.in', posts: '4,500+ Seats' },
      { id: 'aiims-bsc', name: 'AIIMS B.Sc. Nursing Entrance', authority: 'aiimsexams.ac.in', tag: 'AIIMS', accentColor: '#083262', url: 'https://www.aiimsexams.ac.in', posts: '1,050 Seats' },
      { id: 'wbjee', name: 'WBJEE ANM / GNM — West Bengal', authority: 'wbjeeb.nic.in', tag: 'WB', accentColor: '#083262', url: 'https://wbjeeb.nic.in/anm-gnm/', posts: '15,000+ Seats' },
      { id: 'abvmu', name: 'UP CNET (ABVMU)', authority: 'abvmuup.edu.in', tag: 'UP', accentColor: '#083262', url: 'https://abvmuup.edu.in', posts: '12,500 Seats' },
    ],
  },
  {
    heading: 'PSUs & National Health Mission',
    emoji: '⚛️',
    portals: [
      { id: 'nhm', name: 'NHM — Community Health Officer (CHO)', authority: 'nhm.gov.in', tag: 'National', accentColor: '#14532d', url: 'https://nhm.gov.in', posts: '9,850+ Posts' },
      { id: 'isro', name: 'ISRO — Nurse "B"', authority: 'isro.gov.in', tag: 'ISRO', accentColor: '#083262', url: 'https://www.isro.gov.in/Careers.html', posts: '30 Posts' },
      { id: 'npcil', name: 'NPCIL — Nurse "A"', authority: 'npcilcareers.co.in', tag: 'DAE', accentColor: '#083262', url: 'https://www.npcilcareers.co.in', posts: '45 Posts' },
      { id: 'sail', name: 'SAIL — Plant Hospital Nurse', authority: 'sailcareers.com', tag: 'PSU', accentColor: '#083262', url: 'https://www.sailcareers.com', posts: '140 Posts' },
    ],
  },
];

export function OfficialPortalsDirectory() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {PORTAL_SECTIONS.map(section => (
        <div key={section.heading}>
          {/* Section heading */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', padding: '0 2px' }}>
            <span style={{ fontSize: '1.1rem' }}>{section.emoji}</span>
            <h3 style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--sc-navy-900)' }}>
              {section.heading}
            </h3>
          </div>

          {/* Full-width stacked rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0', borderRadius: '14px', overflow: 'hidden', border: '1.5px solid var(--sc-line-200)' }}>
            {section.portals.map((portal, i) => (
              <a
                key={portal.id}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '13px 14px',
                    background: '#ffffff',
                    borderBottom: i < section.portals.length - 1 ? '1px solid var(--sc-line-100)' : 'none',
                    transition: 'background 0.1s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = 'var(--sc-surface-secondary)')}
                  onMouseLeave={e => (e.currentTarget.style.background = '#ffffff')}
                >
                  {/* Color dot / accent */}
                  <div style={{ width: '6px', height: '36px', borderRadius: '3px', background: portal.accentColor, flexShrink: 0 }} />

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--sc-ink-900)', marginBottom: '2px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                      {portal.name}
                    </div>
                    <div style={{ fontSize: '0.70rem', color: 'var(--sc-ink-400)', fontFamily: 'monospace' }}>
                      {portal.authority}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '3px', flexShrink: 0 }}>
                    {portal.posts && (
                      <span style={{ fontSize: '0.72rem', fontWeight: 800, color: 'var(--sc-green-600)' }}>
                        {portal.posts}
                      </span>
                    )}
                    <span style={{ fontSize: '0.66rem', fontWeight: 700, padding: '2px 6px', borderRadius: '100px', background: 'var(--sc-blue-50)', color: 'var(--sc-navy-700)' }}>
                      {portal.tag}
                    </span>
                  </div>
                  <ExternalLink size={14} color="var(--sc-ink-300)" style={{ flexShrink: 0 }} />
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
