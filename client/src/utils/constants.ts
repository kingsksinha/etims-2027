// ── Verified Conference & Host Institution Info ──────────────────────────
export const CONFERENCE = {
  name: 'Emerging Technologies, Innovation and Multidisciplinary Studies',
  acronym: 'ETIMS 2027',
  edition: '1st National Conference',
  tagline:
    '1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies',
  startDate: '2027-07-23',
  endDate: '2027-07-24',
  dateDisplay: '23–24 July 2027',
  /** ISO string for countdown — midnight start of conference date in Asia/Kolkata (UTC+5:30 -> 2027-07-22T18:30:00Z) */
  countdownTarget: '2027-07-22T18:30:00Z',
  timezoneLabel: 'Asia/Kolkata (IST)',
  hostInstitution: 'Netaji Subhas Institute of Technology (NSIT)',
  hostCampus: 'Bihta, Patna Campus',
  venue: 'NSIT, Bihta, Patna',
  venueShort: 'NSIT Bihta',
  city: 'Patna',
  state: 'Bihar',
  country: 'India',
  fullVenue: 'NSIT, Bihta, Patna, India',
  convenor: 'Dr. Atif Hussain',
  contactEmail: 'etims2027@nsiterp.in',
  contactPhone: '+91 83402 58426',
  contactPhoneTel: '+918340258426',
} as const;

// ── Verified Convenor Secretariat Details ─────────────────────────
export const CONVENOR = {
  name: 'Dr. Atif Hussain',
  role: 'Convenor, ETIMS 2027',
  institution: 'Netaji Subhas Institute of Technology (NSIT)',
  campus: 'Bihta, Patna',
  department: 'Organizing Secretariat',
  email: 'etims2027@nsiterp.in',
  phone: '+91 83402 58426',
  phoneTel: '+918340258426',
} as const;

// ── Host Institution Profile ─────────────────────────────────────
export const HOST_INSTITUTION = {
  name: 'Netaji Subhas Institute of Technology (NSIT)',
  shortName: 'NSIT, Bihta, Patna',
  location: 'Bihta, Patna, Bihar, India',
  description:
    'Netaji Subhas Institute of Technology (NSIT), Bihta, Patna is a premier technical institution dedicated to academic rigor, cutting-edge engineering, and multidisciplinary exploration. Situated in the emerging educational hub of Bihta, the campus provides world-class presentation and computing infrastructure for scholarly exchange.',
  campusFeatures: [
    'Air-conditioned academic auditoriums & seminar presentation halls',
    'Advanced computing centers & engineering research laboratories',
    'Campus-wide high-speed Wi-Fi network & technical audio-visual infrastructure',
    'Dedicated conference registration, logistics & hospitality desks',
  ],
  transitAccess: [
    {
      mode: 'Airways Access',
      terminal: 'Patna Airport (PAT)',
      detail:
        'Jai Prakash Narayan International Airport, Patna (~30 km from campus) with direct connectivity to all major domestic hubs.',
    },
    {
      mode: 'Railways Access',
      terminal: 'Bihta & Patna Junction',
      detail:
        'Bihta Railway Station (~4 km) for local connections; Patna Junction Railway Station (~32 km) for major superfast trains.',
    },
    {
      mode: 'Roadways Access',
      terminal: 'NH-922 Corridor',
      detail:
        'Strategically situated along the 4-lane Patna–Buxar highway (NH-922) with frequent taxi and public transit connectivity.',
    },
  ],
} as const;

// ── Provisional Illustrative Research Tracks ─────────────────────
// NOTE: These are strictly provisional & illustrative topics subject to
// technical committee approval. They are NOT officially finalized.
export interface ResearchTrackItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  isProvisional: boolean;
  illustrativeTopics: string[];
}

export const PROVISIONAL_TRACKS: ResearchTrackItem[] = [
  {
    id: 'track-1',
    number: 'Provisional Area 01',
    title: 'Artificial Intelligence & Cognitive Computing',
    tagline: 'Intelligent algorithms, data science & cognitive architectures',
    isProvisional: true,
    illustrativeTopics: [
      'Machine Learning Models & Deep Neural Architectures',
      'Natural Language Processing & Semantic Understanding',
      'Computer Vision, Pattern Analysis & Intelligent Robotics',
      'Explainable AI, Responsible Data Governance & Ethics',
    ],
  },
  {
    id: 'track-2',
    number: 'Provisional Area 02',
    title: 'Communication Networks & Cyber-Physical Systems',
    tagline: 'Wireless protocols, IoT systems & distributed infrastructure',
    isProvisional: true,
    illustrativeTopics: [
      'Next-Generation Wireless Networks & 5G/6G Architectures',
      'Internet of Things (IoT) & Smart Sensor Networks',
      'Cryptography, Cyber Defense & Network Security',
      'Edge-Cloud Continuum & Decentralized Computing',
    ],
  },
  {
    id: 'track-3',
    number: 'Provisional Area 03',
    title: 'Sustainable Energy Systems & Green Technology',
    tagline: 'Clean power, grid modernization & ecological engineering',
    isProvisional: true,
    illustrativeTopics: [
      'Smart Grid Integration & Distributed Energy Resources',
      'Renewable Generation (Solar, Wind & Bioenergy Systems)',
      'Electric Vehicles, Battery Storage & Fast-Charging Tech',
      'Power Electronics, Inverters & Industrial Energy Efficiency',
    ],
  },
  {
    id: 'track-4',
    number: 'Provisional Area 04',
    title: 'Automation, Robotics & Precision Mechatronics',
    tagline: 'Adaptive control, industrial robotics & smart manufacturing',
    isProvisional: true,
    illustrativeTopics: [
      'Autonomous Mobile Robots & Industrial Manipulators',
      'Adaptive Control Systems & Sensor Fusion Methods',
      'Smart Manufacturing, Industry 4.0/5.0 & Digital Twins',
      'Micro-electromechanical Systems (MEMS) & Precision Actuators',
    ],
  },
  {
    id: 'track-5',
    number: 'Provisional Area 05',
    title: 'Multidisciplinary Applied Sciences & Engineering',
    tagline: 'Cross-cutting physical sciences, materials & modeling',
    isProvisional: true,
    illustrativeTopics: [
      'Computational Applied Mathematics & Numerical Modeling',
      'Advanced Functional Materials & Nanotechnology',
      'Biomedical Instrumentation & Health Informatics',
      'Environmental Engineering, Water Security & Climate Resilience',
    ],
  },
];

// ── Conference Dates & Timelines ────────────────────────────────
export interface TimelineItem {
  milestone: string;
  statusText: string;
  isConfirmed: boolean;
  phase: string;
  note: string;
}

export const CONFERENCE_TIMELINE: TimelineItem[] = [
  {
    milestone: 'Conference Inauguration & Sessions',
    statusText: '23–24 July 2027',
    isConfirmed: true,
    phase: 'Event Days',
    note: 'Official confirmed dates at NSIT, Bihta, Patna',
  },
  {
    milestone: 'Call for Papers Release',
    statusText: 'To Be Announced',
    isConfirmed: false,
    phase: 'Announcement',
    note: 'Official circular with sub-tracks & author templates',
  },
  {
    milestone: 'Full Manuscript Submission Window',
    statusText: 'Dates to be announced by Committee',
    isConfirmed: false,
    phase: 'Submission Phase',
    note: 'Scholarly papers via the designated peer-review portal',
  },
  {
    milestone: 'Peer Review & Acceptance Notification',
    statusText: 'Dates to be announced by Committee',
    isConfirmed: false,
    phase: 'Review Phase',
    note: 'Technical assessment feedback communicated to authors',
  },
  {
    milestone: 'Camera-Ready Copy Submission',
    statusText: 'Dates to be announced by Committee',
    isConfirmed: false,
    phase: 'Post-Acceptance',
    note: 'Final formatted paper submission with author revisions',
  },
  {
    milestone: 'Delegate & Author Registration',
    statusText: 'Schedule to be officially notified',
    isConfirmed: false,
    phase: 'Registration',
    note: 'Mandatory registration for schedule inclusion',
  },
];

// ── Committee Structure (Honest Provisional Roster) ─────────────
export interface CommitteeCategory {
  title: string;
  status: string;
  description: string;
}

export const COMMITTEE_CATEGORIES: CommitteeCategory[] = [
  {
    title: 'Patrons & Institutional Leadership',
    status: 'Official Notification Pending',
    description:
      'Distinguished academic leadership and advisory board of Netaji Subhas Institute of Technology (NSIT), Bihta, Patna.',
  },
  {
    title: 'Technical Programme Committee (TPC)',
    status: 'Subject to Formal Constitution',
    description:
      'Domain experts, professors, and peer reviewers from national institutions overseeing thematic track integrity and blind evaluation.',
  },
  {
    title: 'Organizing Secretariat',
    status: 'Headed by Conference Convenor',
    description:
      'Operational coordination headed by Dr. Atif Hussain (Convenor), overseeing session logistics, delegate facilitation, and event operations.',
  },
  {
    title: 'Advisory Council',
    status: 'To Be Announced in Official Circular',
    description:
      'Prominent scholars and researchers guiding multidisciplinary conference scopes and academic standards.',
  },
];

// ── Paper Submission Information ────────────────────────────────
export const SUBMISSION_GUIDELINES = [
  {
    title: 'Original Research Papers',
    detail:
      'Submissions must present novel theoretical derivations, experimental validations, or applied multidisciplinary engineering findings not published or currently under review elsewhere.',
  },
  {
    title: 'Academic Integrity & Plagiarism Standards',
    detail:
      'All incoming manuscripts will be subjected to similarity analysis. Plagiarism, duplicate submission, or uncredited conceptual reuse is strictly prohibited.',
  },
  {
    title: 'Peer Review Integrity',
    detail:
      'Papers will undergo structured double-blind evaluation by technical reviewers based on technical merit, methodology, clarity, and multidisciplinary relevance.',
  },
  {
    title: 'Author Presentation Requirement',
    detail:
      'At least one author of every accepted paper must register and present the research in person during the conference technical sessions on 23–24 July 2027.',
  },
];

// ── Registration Categories (No Fabricated Prices) ──────────────
export const REGISTRATION_CATEGORIES = [
  {
    category: 'Academicians & Faculty Members',
    badge: 'Institutional Delegates',
    scope: 'Faculty members, university professors, and scientific officers presenting peer-reviewed research.',
    feeStatus: 'Fee schedule to be notified with official circular',
  },
  {
    category: 'Research Scholars & PG Students',
    badge: 'Scholarly Delegates',
    scope: 'PhD candidates and Master scholars presenting foundational or applied findings.',
    feeStatus: 'Fee schedule to be notified with official circular',
  },
  {
    category: 'Undergraduate Students',
    badge: 'Student Delegates',
    scope: 'UG student innovators presenting project research or multidisciplinary papers.',
    feeStatus: 'Fee schedule to be notified with official circular',
  },
  {
    category: 'Industry Delegates & Practitioners',
    badge: 'Corporate & R&D',
    scope: 'Corporate researchers, industrial practitioners, and technology professionals.',
    feeStatus: 'Fee schedule to be notified with official circular',
  },
];

// ── Design Tokens ───────────────────────────────────────────────
export const COLORS = {
  primary: '#073B3A',
  secondary: '#0D7773',
  accent: '#42C7B5',
  background: '#F4F8F7',
  textDark: '#1A1A2E',
  textMuted: '#4A5568',
  white: '#FFFFFF',
  border: '#E2E8F0',
} as const;

// ── Navigation Links ────────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'About NSIT', href: '#nsit' },
  { label: 'Provisional Tracks', href: '#tracks' },
  { label: 'Dates', href: '#dates' },
  { label: 'Submission', href: '#submission' },
  { label: 'Registration', href: '#registration' },
  { label: 'Committees', href: '#committees' },
  { label: 'Venue', href: '#venue' },
  { label: 'Contact', href: '#contact' },
];
