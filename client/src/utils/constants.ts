// ── Verified Conference & Host Institution Info ──────────────────────────
export const CONFERENCE = {
  name: 'Emerging Technologies, Innovation and Multidisciplinary Studies',
  acronym: 'ETIMS 2027',
  edition: '1st National Conference',
  tagline:
    '1st National Conference on Emerging Technologies, Innovation and Multidisciplinary Studies',
  theme: 'SCIENCE · ENGINEERING · MANAGEMENT · HUMANITIES',
  startDate: '2027-07-23',
  endDate: '2027-07-24',
  dateDisplay: '23–24 July 2027',
  datesTentative: true,
  datesTentativeLabel: 'dates tentative',
  datesTentativeNote: 'Provisional; subject to institutional and publisher approval.',
  mode: 'Physical Mode',
  modeVenueText: 'Physical Mode · NSIT Campus, Bihta',
  scale: 'Eight Tracks · 200–300 Delegates',
  tracksCount: 8,
  delegatesRange: '200–300 Delegates',
  callForPapersHeadline:
    'Call for Papers - open to researchers, faculty, industry professionals and students across disciplines',
  /** ISO string for countdown — midnight start of conference date in Asia/Kolkata (UTC+5:30 -> 2027-07-22T18:30:00Z) */
  countdownTarget: '2027-07-22T18:30:00Z',
  timezoneLabel: 'Asia/Kolkata (IST)',
  hostInstitution: 'Netaji Subhas Institute of Technology (NSIT)',
  hostCampus: 'NSIT Campus, Amhara, Bihta, Patna',
  venue: 'NSIT, Amhara, Bihta, Patna',
  venueShort: 'NSIT Bihta, Patna',
  city: 'Patna',
  state: 'Bihar',
  country: 'India',
  fullVenue: 'NSIT, Amhara, Bihta, Patna, Bihar, India',
  convenor: 'Dr. Atif Hussain',
  convenorTitle: 'Assistant Professor, Department of Civil Engineering',
  convenorDept: 'Department of Civil Engineering',
  contactEmail: 'etims2027@nsiterp.in',
  contactPhone: '+91 83402 58426',
  contactPhoneTel: '+918340258426',
} as const;

// ── Verified Convenor Secretariat Details ─────────────────────────
export const CONVENOR = {
  name: 'Dr. Atif Hussain',
  role: 'Conference Convenor',
  title: 'Assistant Professor, Department of Civil Engineering',
  designation: 'Assistant Professor',
  department: 'Department of Civil Engineering',
  institution: 'Netaji Subhas Institute of Technology (NSIT)',
  campus: 'Amhara, Bihta, Patna',
  state: 'Bihar',
  email: 'etims2027@nsiterp.in',
  phone: '+91 83402 58426',
  phoneTel: '+918340258426',
  photo: '/assets/committee/atif-hussain.png',
} as const;

// ── Host Institution Profile & Official Brochure Copy ───────────
export const HOST_INSTITUTION = {
  name: 'Netaji Subhas Institute of Technology (NSIT)',
  shortName: 'NSIT, Bihta, Patna',
  location: 'Amhara, Bihta, Patna, Bihar, India (~30 km from Patna)',
  fullAddress: 'Amhara, Bihta, Patna, Bihar – 801106, India',
  establishedYear: '2007',
  campusArea: '9.2 Acres',
  trustName: 'Sitwanto Devi Mahila Kalyan Sansthan',
  approvals:
    'Established in 2007 with the approval of AICTE and the Department of Science and Technology, Government of Bihar.',
  description:
    'Established in 2007, Netaji Subhas Institute of Technology (NSIT) is located at Amhara, Bihta, approximately 30 km from Patna, Bihar. Spread over approximately 9.2 acres, the campus provides laboratories, workshops, a digital library, auditorium, hostels and sports facilities for rigorous academic exchange.',
  affiliations: [
    {
      program: 'B.Tech Programmes',
      body: 'Bihar Engineering University (BEU)',
      detail: 'Affiliated with Bihar Engineering University',
    },
    {
      program: 'Diploma Programmes',
      body: 'State Board of Technical Education (SBTE)',
      detail: 'Affiliated with State Board of Technical Education, Bihar',
    },
    {
      program: 'Management Programmes',
      body: 'Aryabhatta Knowledge University (AKU)',
      detail: 'Affiliated with Aryabhatta Knowledge University, Patna',
    },
  ],
  academicPrograms: {
    undergraduate: [
      {
        degree: 'B.Tech in Civil Engineering (CE)',
        duration: '4 Years',
        focus: 'Structural Engineering, Environmental, Transportation & Water Resources',
      },
      {
        degree: 'B.Tech in Mechanical Engineering (ME)',
        duration: '4 Years',
        focus: 'Thermal Systems, Manufacturing, CAD/CAM, Robotics & Dynamics',
      },
      {
        degree: 'B.Tech in Electrical & Electronics Engineering (EEE)',
        duration: '4 Years',
        focus: 'Power Systems, Renewable Energy, Smart Grids, Control & Electronics',
      },
      {
        degree: 'B.Tech in Computer Science & Engineering (CSE)',
        duration: '4 Years',
        focus: 'AI/ML, Data Science, Cloud Systems, Cybersecurity & Algorithms',
      },
    ],
    polytechnic: [
      {
        program: 'Diploma in Civil Engineering',
        duration: '3 Years',
        focus: 'Surveying, Construction Materials & Structural Drawing',
      },
      {
        program: 'Diploma in Mechanical Engineering',
        duration: '3 Years',
        focus: 'Workshop Practice, Machine Design & Manufacturing',
      },
      {
        program: 'Diploma in Electrical Engineering',
        duration: '3 Years',
        focus: 'Electrical Machines, Transmission Systems & Wiring',
      },
    ],
    management: [
      {
        program: 'Management Studies (Affiliated with AKU)',
        duration: '2-3 Years',
        focus: 'Organizational Strategy, Technology Management & Operations',
      },
    ],
  },
  innovationAndIncubation: {
    centerName: 'Center for Innovation, Incubation & Entrepreneurship (CIIE)',
    highlights: [
      'Multidisciplinary prototyping suite with advanced testing and modeling equipment',
      'Incubation support and patent facilitation for student and faculty innovators',
      'Regular industry hackathons, technical paper contests, and entrepreneurship bootcamps',
      'Collaborative linkages with national laboratories, PSUs, and technical institutions',
    ],
  },
  placementsAndRecruiters: [
    'Tata Consultancy Services (TCS)',
    'Infosys Technologies',
    'Wipro',
    'Cognizant Technology Solutions',
    'L&T Technology Services',
    'Tata Motors',
    'Tech Mahindra',
    'Capgemini India',
    'HCL Technologies',
    'Hexaware Technologies',
  ],
  brochureText: {
    aboutInstitute:
      'Established in 2007, Netaji Subhas Institute of Technology (NSIT) is located at Amhara, Bihta, approximately 30 km from Patna, Bihar. The institute was established with the approval of AICTE and the Department of Science and Technology, Government of Bihar. Its B.Tech programmes are affiliated with Bihar Engineering University, its diploma programmes with the State Board of Technical Education, and its management programmes with Aryabhatta Knowledge University. Spread over approximately 9.2 acres, the campus provides laboratories, workshops, a digital library, auditorium, hostels and sports facilities.',
    aboutDepartments:
      'NSIT comprises Civil Engineering, Mechanical Engineering, Electrical and Electronics Engineering, Computer Science and Engineering, Applied Sciences, Management, and English and Humanities. Together, these departments encompass engineering and technology, physics, chemistry, mathematics, management and humanities. Their diverse academic backgrounds provide opportunities for interdisciplinary learning, research and knowledge exchange, forming the basis for ETIMS 2027.',
    aboutConference:
      'Emerging technologies and complex societal challenges require multidisciplinary approaches integrating engineering, science, management and humanities. ETIMS 2027 provides a common platform for researchers, academicians, industry professionals and students to present findings, exchange ideas and explore collaboration. The two-day event will feature keynote and invited lectures, parallel technical sessions, oral and poster presentations, industry interactions and panel discussions, promoting research dissemination and knowledge sharing.',
    venueAndAccess:
      'ETIMS 2027 will be held in physical mode at NSIT, Amhara, Bihta, approximately 30 km west of Patna. Limited accommodation may be available upon prior request, subject to availability. Travel details will be shared through the conference website.',
  },
  stats: [
    { label: 'Campus Area', value: '9.2 Acres', subtext: 'Lush Green Residential Campus' },
    { label: 'Established', value: 'Est. 2007', subtext: 'Approved by AICTE & DST Bihar' },
    { label: 'Academic Departments', value: '7 Depts', subtext: 'Engineering, Sciences, Mgmt & Humanities' },
    { label: 'Conference Delegates', value: '200–300', subtext: 'Faculty, Researchers & Industry Delegates' },
    { label: 'Technical Tracks', value: '8 Tracks', subtext: 'Science, Engineering & Management' },
    { label: 'Digital Library', value: 'Central Facility', subtext: 'Modern Digital Resource Center' },
    { label: 'Campus Living', value: 'On-Campus Hostels', subtext: 'Hostels, Auditorium & Sports Grounds' },
    { label: 'Location', value: 'Bihta, Patna', subtext: '~30 km West of Patna' },
  ],
  campusFeatures: [
    'Centrally air-conditioned academic auditoriums & seminar presentation halls with laser projection',
    'Advanced departmental engineering laboratories and workshops equipped with modern testbenches',
    'Campus-wide high-speed Wi-Fi network & technical audio-visual infrastructure',
    'Dedicated conference registration, logistics, and hospitality desks',
    'On-campus faculty guest house and student residential hostels',
    'Central digital library, sports facilities, and cafeteria',
  ],
  departmentsList: [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical and Electronics Engineering',
    'Computer Science and Engineering',
    'Applied Sciences',
    'Management',
    'English and Humanities',
  ],
  transitAccess: [
    {
      mode: 'Airways Access',
      terminal: 'Patna Airport (PAT)',
      detail:
        'Jay Prakash Narayan International Airport, Patna (~30 km from campus) with frequent daily flights to Delhi, Mumbai, Bengaluru, Kolkata, and Hyderabad. Future Bihta Civil Enclave is located minutes away.',
    },
    {
      mode: 'Railways Access',
      terminal: 'Bihta & Patna Junction',
      detail:
        'Bihta Railway Station (~4 km) provides frequent local connections; Patna Junction (~32 km) connects major Rajdhani, Vande Bharat, and Superfast express trains.',
    },
    {
      mode: 'Roadways Access',
      terminal: 'NH-922 Expressway Corridor',
      detail:
        'Located at Amhara, Bihta, approximately 30 km west of Patna, smoothly connected via the 4-lane Patna–Buxar highway (NH-922) and the Danapur–Bihta elevated corridor.',
    },
  ],
} as const;

// ── Official Eight Research Tracks (T1 – T8 from Official Brochure) ────────
export interface ResearchTrackItem {
  id: string;
  code: string;
  number: string;
  title: string;
  tagline: string;
  isProvisional: boolean;
  illustrativeTopics: string[];
}

export const RESEARCH_TRACKS: ResearchTrackItem[] = [
  {
    id: 'track-1',
    code: 'T1',
    number: 'Track 01',
    title: 'Computer Science and Artificial Intelligence',
    tagline: 'AI, machine learning, data science, HPC, cybersecurity, computer vision & software engineering',
    isProvisional: false,
    illustrativeTopics: [
      'AI, machine learning and deep learning',
      'Data science',
      'Cloud and high-performance computing',
      'Cybersecurity and blockchain',
      'Computer vision and NLP',
      'Software engineering',
    ],
  },
  {
    id: 'track-2',
    code: 'T2',
    number: 'Track 02',
    title: 'Civil Engineering and Infrastructure',
    tagline: 'Structural, geotechnical, transportation, environmental engineering, materials & geospatial tech',
    isProvisional: false,
    illustrativeTopics: [
      'Structural, geotechnical, transportation and railway engineering',
      'Pavements',
      'Water resources and environmental engineering',
      'Construction management',
      'Advanced construction materials',
      'Geospatial technologies',
    ],
  },
  {
    id: 'track-3',
    code: 'T3',
    number: 'Track 03',
    title: 'Electrical Engineering',
    tagline: 'Renewable energy, power systems, smart grids, drives, energy storage, EVs & energy management',
    isProvisional: false,
    illustrativeTopics: [
      'Renewable energy',
      'Power systems and smart grids',
      'Power electronics and drives',
      'Electrical machines',
      'Energy storage',
      'Electric vehicles',
      'Energy management',
    ],
  },
  {
    id: 'track-4',
    code: 'T4',
    number: 'Track 04',
    title: 'Mechanical and Manufacturing Engineering',
    tagline: 'Additive manufacturing, Industry 4.0, robotics, thermal & fluid, automotive & mechanics',
    isProvisional: false,
    illustrativeTopics: [
      'Advanced and additive manufacturing',
      'Industry 4.0 and smart manufacturing',
      'Robotics and automation',
      'Thermal and fluid engineering',
      'Automobile engineering',
      'Mechanical design and computational mechanics',
    ],
  },
  {
    id: 'track-5',
    code: 'T5',
    number: 'Track 05',
    title: 'Electronics and Communication Engineering',
    tagline: 'Wireless & 5G/6G, IoT & embedded, VLSI, signal & image processing, antennas, sensors & optical',
    isProvisional: false,
    illustrativeTopics: [
      'Wireless and 5G/6G communication',
      'IoT and embedded systems',
      'VLSI',
      'Signal and image processing',
      'Antennas and microwave engineering',
      'Sensors',
      'Optical communication',
    ],
  },
  {
    id: 'track-6',
    code: 'T6',
    number: 'Track 06',
    title: 'Applied Science',
    tagline: 'Applied physics, photonics, nanomaterials, electrochemistry, green chemistry, modeling & cryptography',
    isProvisional: false,
    illustrativeTopics: [
      'Applied and condensed-matter physics',
      'Photonics and thin films',
      'Nanomaterials and functional materials',
      'Electrochemistry and energy-storage materials',
      'Catalysis, polymers and green chemistry',
      'Environmental and analytical chemistry',
      'Mathematical modelling and numerical methods',
      'Optimization, statistics and cryptography',
    ],
  },
  {
    id: 'track-7',
    code: 'T7',
    number: 'Track 07',
    title: 'Management',
    tagline: 'Technology & innovation, supply chain, project mgmt, entrepreneurship, analytics, FinTech & ESG',
    isProvisional: false,
    illustrativeTopics: [
      'Technology and innovation management',
      'Operations and supply-chain management',
      'Project and construction management',
      'Entrepreneurship and start-up ecosystems',
      'Business analytics and decision sciences',
      'Human resource and organisational management',
      'Financial management and FinTech',
      'Sustainable business and ESG practices',
    ],
  },
  {
    id: 'track-8',
    code: 'T8',
    number: 'Track 08',
    title: 'Humanities and Library Science',
    tagline: 'Linguistics, technical communication, ethics & society, digital humanities, libraries & research metrics',
    isProvisional: false,
    illustrativeTopics: [
      'English language, literature and linguistics',
      'Professional and technical communication',
      'Ethics, society and culture',
      'Digital humanities',
      'Library and information science',
      'Digital libraries and knowledge management',
      'Scholarly communication and research metrics',
      'Information literacy',
    ],
  },
];

// Backwards-compatibility alias so existing components continue to work smoothly
export const PROVISIONAL_TRACKS: ResearchTrackItem[] = RESEARCH_TRACKS;

// ── Official Important Dates & Deadlines (from Official Brochure) ───────────
export interface TimelineItem {
  milestone: string;
  statusText: string;
  dateRaw?: string;
  isConfirmed: boolean;
  phase: string;
  note: string;
}

export const CONFERENCE_TIMELINE: TimelineItem[] = [
  {
    milestone: 'Call for Papers Release',
    statusText: 'Jan 2027',
    dateRaw: '2027-01-01',
    isConfirmed: true,
    phase: 'Announcement',
    note: 'Official circular and CFP portal opening across all 8 tracks',
  },
  {
    milestone: 'Full Paper Submission Deadline',
    statusText: '30 Mar 2027',
    dateRaw: '2027-03-30',
    isConfirmed: true,
    phase: 'Submission Phase',
    note: 'Submission of original, unpublished full-length papers (abstract ~250–300 words)',
  },
  {
    milestone: 'Acceptance Notification',
    statusText: '31 May 2027',
    dateRaw: '2027-05-31',
    isConfirmed: true,
    phase: 'Peer Review',
    note: 'Peer review evaluation results communicated to corresponding authors',
  },
  {
    milestone: 'Camera-Ready Submission Deadline',
    statusText: '20 Jun 2027',
    dateRaw: '2027-06-20',
    isConfirmed: true,
    phase: 'Post-Acceptance',
    note: 'Final formatted paper submission incorporating reviewer feedback',
  },
  {
    milestone: 'Early Registration Deadline',
    statusText: '20 Jun 2027',
    dateRaw: '2027-06-20',
    isConfirmed: true,
    phase: 'Early Registration',
    note: 'Early-bird discounted registration fee deadline for authors & delegates',
  },
  {
    milestone: 'Final Registration Deadline',
    statusText: '10 Jul 2027',
    dateRaw: '2027-07-10',
    isConfirmed: true,
    phase: 'Final Registration',
    note: 'Last date for delegate registration and inclusion in final session program',
  },
  {
    milestone: 'Conference Inauguration & Technical Sessions',
    statusText: '23–24 Jul 2027',
    dateRaw: '2027-07-23',
    isConfirmed: true,
    phase: 'Conference Days',
    note: 'Physical mode at NSIT Campus, Bihta (dates tentative; provisional; subject to approvals)',
  },
];

// ── Official Registration Tariff (INR) from Brochure ─────────────
export interface RegistrationCategoryItem {
  category: string;
  badge: string;
  earlyFee: number;
  regularFee: number;
  earlyFormatted: string;
  regularFormatted: string;
  scope: string;
  feeStatus: string;
}

export const REGISTRATION_CATEGORIES: RegistrationCategoryItem[] = [
  {
    category: 'Faculty / Academicians',
    badge: 'Faculty Delegate',
    earlyFee: 2500,
    regularFee: 3000,
    earlyFormatted: '₹ 2,500',
    regularFormatted: '₹ 3,000',
    scope: 'Faculty members, university professors, and academic educators presenting or attending.',
    feeStatus: 'Early: ₹2,500 / Regular: ₹3,000 (INR)',
  },
  {
    category: 'Industry Professionals',
    badge: 'Corporate / Industry',
    earlyFee: 3500,
    regularFee: 4000,
    earlyFormatted: '₹ 3,500',
    regularFormatted: '₹ 4,000',
    scope: 'Corporate researchers, industrial practitioners, consultants, and entrepreneurs.',
    feeStatus: 'Early: ₹3,500 / Regular: ₹4,000 (INR)',
  },
  {
    category: 'Research Scholars / PG',
    badge: 'PG & PhD Scholars',
    earlyFee: 1500,
    regularFee: 2000,
    earlyFormatted: '₹ 1,500',
    regularFormatted: '₹ 2,000',
    scope: 'Doctoral candidates, research fellows, and postgraduate scholars.',
    feeStatus: 'Early: ₹1,500 / Regular: ₹2,000 (INR)',
  },
  {
    category: 'UG Students',
    badge: 'Undergraduate',
    earlyFee: 800,
    regularFee: 1000,
    earlyFormatted: '₹ 800',
    regularFormatted: '₹ 1,000',
    scope: 'Enrolled undergraduate students presenting original projects or multidisciplinary papers.',
    feeStatus: 'Early: ₹800 / Regular: ₹1,000 (INR)',
  },
  {
    category: 'Non-presenting Co-author / Attendee',
    badge: 'Attendee / Co-author',
    earlyFee: 500,
    regularFee: 500,
    earlyFormatted: '₹ 500',
    regularFormatted: '₹ 500',
    scope: 'Non-presenting co-authors, academic attendees, delegates, and observers.',
    feeStatus: 'Early: ₹500 / Regular: ₹500 (INR)',
  },
];

export const REGISTRATION_TERMS = {
  earlyDeadline: '20 June 2027',
  finalDeadline: '10 July 2027',
  inclusions:
    'Fees include conference participation, materials, refreshments/meals and applicable certificate. Publication charges, if any, will be notified separately.',
  publicationNote: 'Publication charges, if any, will be notified separately.',
  currency: 'INR (₹)',
} as const;

// ── Official Organising Structure (from Official Brochure Page 2) ──────────
export const ORGANISING_STRUCTURE = {
  chiefPatron: {
    name: 'Mr. M. M. Singh',
    designation: 'Chairman, NSIT',
    role: 'Chief Patron',
    affiliation: 'Netaji Subhas Institute of Technology (NSIT)',
    photo: '/assets/committee/mm-singh.png',
  },
  patron: {
    name: 'Mrs. Nitu Singh',
    designation: 'Managing Director, NSIT',
    role: 'Patron',
    affiliation: 'Netaji Subhas Institute of Technology (NSIT)',
    photo: '/assets/committee/nitu-singh.png',
  },
  coPatron: {
    name: 'Dr. Jyotirmayee Dalei',
    designation: 'Director, NSIT',
    role: 'Co-Patron',
    affiliation: 'Netaji Subhas Institute of Technology (NSIT)',
    photo: '/assets/committee/jyotirmayee-dalei.png',
  },
  convenor: {
    name: 'Dr. Atif Hussain',
    designation: 'Assistant Professor, Department of Civil Engineering',
    role: 'Conference Convenor',
    affiliation: 'Netaji Subhas Institute of Technology (NSIT)',
    email: 'etims2027@nsiterp.in',
    phone: '+91 83402 58426',
    photo: '/assets/committee/atif-hussain.png',
  },
  coConvenors: [
    { name: 'Dr. Rajan Kumar', designation: 'Co-Convenor', affiliation: 'NSIT', photo: '/assets/committee/rajan-kumar.png' },
    { name: 'Dr. Gautam', designation: 'Co-Convenor', affiliation: 'NSIT', photo: '/assets/committee/gautam.png' },
    { name: 'Mr. Deepansh Yadav', designation: 'Co-Convenor', affiliation: 'NSIT', photo: '/assets/committee/deepansh-yadav.png' },
    { name: 'Md. Farrukh', designation: 'Co-Convenor', affiliation: 'NSIT', photo: '/assets/committee/farrukh.png' },
    { name: 'Mr. Nilanjan Manna', designation: 'Co-Convenor', affiliation: 'NSIT', photo: '/assets/committee/nilanjan-manna.png' },
  ],
} as const;

// ── Official Advisory Committee (from Official Brochure Page 2) ───────────
export interface AdvisoryMember {
  name: string;
  designation: string;
  department: string;
  institution: string;
  photo?: string;
}

export const ADVISORY_COMMITTEE: AdvisoryMember[] = [
  {
    name: 'Dr. Kailash Chandra Ray',
    designation: 'Associate Professor',
    department: 'Electrical Engineering',
    institution: 'IIT Patna',
    photo: '/assets/committee/kailash-chandra-ray.png',
  },
  {
    name: 'Dr. Raju Halder',
    designation: 'Associate Professor',
    department: 'Computer Science and Engineering',
    institution: 'IIT Patna',
    photo: '/assets/committee/raju-halder.png',
  },
  {
    name: 'Dr. Akhilendra Singh',
    designation: 'Associate Professor',
    department: 'Mechanical Engineering',
    institution: 'IIT Patna',
    photo: '/assets/committee/akhilendra-singh.png',
  },
  {
    name: 'Dr. Debashisha Jena',
    designation: 'Professor',
    department: 'Electrical and Electronics Engineering',
    institution: 'NIT Surathkal',
    photo: '/assets/committee/debashisha-jena.png',
  },
  {
    name: 'Dr. Yatendra Kumar Singh',
    designation: 'Associate Professor',
    department: 'Electrical Engineering',
    institution: 'IIT Patna',
    photo: '/assets/committee/yatendra-kumar-singh.png',
  },
  {
    name: 'Mr. Gopal Krishna',
    designation: 'Assistant Professor',
    department: 'Computer Science Engineering (AI & Data Science)',
    institution: 'GEC Munger',
    photo: '/assets/committee/gopal-krishna.png',
  },
  {
    name: 'Mr. Chandan Kumar Sharma',
    designation: 'Assistant Professor',
    department: 'Civil Engineering',
    institution: 'GEC Bhojpur',
    photo: '/assets/committee/chandan-kumar-sharma.png',
  },
];

// ── Brochure Special Policies & Information Sections ─────────────
export const REVIEW_AND_PUBLICATION = {
  policy:
    'Manuscripts will undergo preliminary screening for relevance, originality and similarity, followed by independent peer review. The organizing committee is exploring publication arrangements with an established academic publisher. Proceedings outlet, indexing status, manuscript requirements and any charges will be announced only after formal confirmation.',
  disclaimer:
    'Publisher and indexing are not yet confirmed; no publication or indexing guarantee is made.',
} as const;

export const WHO_SHOULD_ATTEND = [
  'Faculty and academicians',
  'Scientists and R&D researchers',
  'Research scholars and postgraduate students',
  'Undergraduate students',
  'Industry professionals and entrepreneurs',
  'Government and PSU representatives',
  'Librarians and information professionals',
] as const;

export const AWARDS_AND_RECOGNITION = {
  description:
    'Best Paper, Best Student Paper and Best Poster awards may be presented based on originality, research quality and presentation. Track-wise awards depend on the number and quality of eligible submissions and decisions of the evaluation committee.',
  awards: [
    { title: 'Best Paper Award', criteria: 'Originality, methodology, scientific depth & presentation' },
    { title: 'Best Student Paper Award', criteria: 'Outstanding student innovation and research rigor' },
    { title: 'Best Poster Award', criteria: 'Visual clarity, research communication & technical impact' },
  ],
} as const;

export const STUDENT_VOLUNTEERS = {
  description:
    'Student volunteers drawn from every department will support registration and the help desk, hall management and session assistance, guest reception and hospitality, publicity and outreach, photography and documentation, and audio-visual and IT support.',
  wings: [
    'Registration and Help Desk',
    'Hall Management and Session Assistance',
    'Guest Reception and Hospitality',
    'Publicity and Outreach',
    'Photography and Documentation',
    'Audio-Visual and IT Support',
  ],
} as const;

export const SPONSORSHIP = {
  description:
    'ETIMS 2027 invites sponsorship and participation from industries, PSUs, research organizations and professional bodies. Opportunities may include institutional visibility, exhibition stalls and souvenir advertisements. Sponsorship categories and benefits will be communicated separately.',
  opportunities: [
    'Institutional Brand Visibility across Conference Backdrops & Stage Kits',
    'Dedicated On-Campus Technology Exhibition Stalls',
    'Official Souvenir & Conference Kit Advertisements',
    'Keynote Session Sponsorship & Industry Panel Partnerships',
  ],
} as const;

export const SUBMISSION_INSTRUCTIONS = {
  howToSubmit:
    'Submit original, unpublished full-length papers through the official submission portal once announced. Include an abstract of approximately 250-300 words, subject to the final publisher template. At least one author of each accepted paper must register and present in person.',
  abstractRequirement: 'Approximately 250–300 words',
  authorRequirement: 'At least one author of each accepted paper must register and present in person.',
} as const;

// ── Committee Structure Categories (for Overview Views) ───────────
export interface CommitteeCategory {
  title: string;
  status: string;
  description: string;
}

export const COMMITTEE_CATEGORIES: CommitteeCategory[] = [
  {
    title: 'Chief Patron, Patron & Co-Patron',
    status: 'Official Institutional Leadership',
    description:
      'Executive leadership of Netaji Subhas Institute of Technology: Chairman Mr. M. M. Singh, Managing Director Mrs. Nitu Singh, and Director Dr. Jyotirmayee Dalei.',
  },
  {
    title: 'Convenorship & Co-Convenors',
    status: 'Headed by Dr. Atif Hussain',
    description:
      'Conference Convenor Dr. Atif Hussain (Assistant Professor, Civil Engineering) supported by Co-Convenors Dr. Rajan Kumar, Dr. Gautam, Mr. Deepansh Yadav, Md. Farrukh, and Mr. Nilanjan Manna.',
  },
  {
    title: 'Advisory Committee',
    status: 'National Academic Council',
    description:
      'Distinguished professors and associate professors from IIT Patna, NIT Surathkal, GEC Munger, and GEC Bhojpur.',
  },
  {
    title: 'Student Volunteer Wings',
    status: 'Inter-Departmental Corps',
    description:
      'Student volunteers drawn from every department providing registration, hall management, guest reception, publicity, and AV/IT support.',
  },
];

// ── Detailed Faculty Teams & Task In-Charges ─────────────────────
export interface FacultyInCharge {
  taskCategory: string;
  taskTitle: string;
  leadName: string;
  leadDesignation: string;
  leadDepartment: string;
  institution: string;
  campus: string;
  responsibilities: string[];
  contactEmail?: string;
  contactPhone?: string;
  badge: string;
  photo?: string;
}

export const FACULTY_TASK_TEAMS: FacultyInCharge[] = [
  {
    taskCategory: 'Leadership & Patrons',
    taskTitle: 'Chief Patron',
    leadName: 'Mr. M. M. Singh',
    leadDesignation: 'Chairman, NSIT',
    leadDepartment: 'Governing Board & Institutional Leadership',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Chief Patron',
    photo: '/assets/committee/mm-singh.png',
    responsibilities: [
      'Institutional patronage, policy guidance, and strategic direction for ETIMS 2027',
      'High-level dignitary hosting and liaison with governmental and university bodies',
      'Inaugural address and institutional support facilitation',
    ],
  },
  {
    taskCategory: 'Leadership & Patrons',
    taskTitle: 'Patron',
    leadName: 'Mrs. Nitu Singh',
    leadDesignation: 'Managing Director, NSIT',
    leadDepartment: 'Executive Directorate',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Patron',
    photo: '/assets/committee/nitu-singh.png',
    responsibilities: [
      'Institutional resource allocation, administrative enablement, and delegate amenities',
      'Overseeing campus infrastructure readiness and hospitality standards',
    ],
  },
  {
    taskCategory: 'Leadership & Patrons',
    taskTitle: 'Co-Patron',
    leadName: 'Dr. Jyotirmayee Dalei',
    leadDesignation: 'Director, NSIT',
    leadDepartment: 'Office of the Director',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Co-Patron',
    photo: '/assets/committee/jyotirmayee-dalei.png',
    responsibilities: [
      'Academic governance and institutional coordination across all 7 departments',
      'Quality assurance of research proceedings, technical sessions, and award evaluation',
      'Presiding over valedictory session and best paper award presentations',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Conference Convenor & Primary Liaison',
    leadName: 'Dr. Atif Hussain',
    leadDesignation: 'Assistant Professor, Department of Civil Engineering',
    leadDepartment: 'Department of Civil Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Convenor',
    contactEmail: 'etims2027@nsiterp.in',
    contactPhone: '+91 83402 58426',
    photo: '/assets/committee/atif-hussain.png',
    responsibilities: [
      'Chief coordinator for all academic, technical, editorial, and logistics committees',
      'Primary official communication channel for authors, delegates, reviewers, and keynote speakers',
      'Supervising peer-review workflows, publication proceedings, and session allocation',
      'Convening core committee briefings and monitoring milestone execution',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Co-Convenor',
    leadName: 'Dr. Rajan Kumar',
    leadDesignation: 'Co-Convenor, ETIMS 2027',
    leadDepartment: 'Faculty Secretariat',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Co-Convenor',
    photo: '/assets/committee/rajan-kumar.png',
    responsibilities: [
      'Assisting the convenor in coordinating inter-departmental workflows and paper review tracking',
      'Coordination with session chairs and invited keynote speakers',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Co-Convenor',
    leadName: 'Dr. Gautam',
    leadDesignation: 'Co-Convenor, ETIMS 2027',
    leadDepartment: 'Faculty Secretariat',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Co-Convenor',
    photo: '/assets/committee/gautam.png',
    responsibilities: [
      'Overseeing technical session planning and paper presentation allocations',
      'Coordination of oral and poster evaluation sessions',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Co-Convenor',
    leadName: 'Mr. Deepansh Yadav',
    leadDesignation: 'Co-Convenor, ETIMS 2027',
    leadDepartment: 'Faculty Secretariat',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Co-Convenor',
    photo: '/assets/committee/deepansh-yadav.png',
    responsibilities: [
      'Digital systems coordination, CFP submission intake, and author notifications',
      'Liaison with delegates regarding conference schedules and presentation kits',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Co-Convenor',
    leadName: 'Md. Farrukh',
    leadDesignation: 'Co-Convenor, ETIMS 2027',
    leadDepartment: 'Faculty Secretariat',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Co-Convenor',
    photo: '/assets/committee/farrukh.png',
    responsibilities: [
      'Campus logistics, session halls setup, and technical audio-visual infrastructure',
      'Managing registration desks and delegate welcome facilitation',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Co-Convenor',
    leadName: 'Mr. Nilanjan Manna',
    leadDesignation: 'Co-Convenor, ETIMS 2027',
    leadDepartment: 'Faculty Secretariat',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Co-Convenor',
    photo: '/assets/committee/nilanjan-manna.png',
    responsibilities: [
      'Delegate hospitality, outstation accommodations, and transport logistics',
      'Print materials, certificate preparation, and delegate kit distribution',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Dr. Kailash Chandra Ray',
    leadDesignation: 'Associate Professor, Electrical Engineering',
    leadDepartment: 'Department of Electrical Engineering',
    institution: 'IIT Patna',
    campus: 'Bihta, Patna',
    badge: 'IIT Patna',
    photo: '/assets/committee/kailash-chandra-ray.png',
    responsibilities: [
      'Academic guidance on conference tracks, research standards, and session chairing',
      'Strategic advising on Electrical Engineering and IoT/VLSI submissions',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Dr. Raju Halder',
    leadDesignation: 'Associate Professor, Computer Science and Engineering',
    leadDepartment: 'Department of Computer Science and Engineering',
    institution: 'IIT Patna',
    campus: 'Bihta, Patna',
    badge: 'IIT Patna',
    photo: '/assets/committee/raju-halder.png',
    responsibilities: [
      'Advisory guidance for Track 01 (Computer Science & Artificial Intelligence)',
      'Review integrity and academic publication standards oversight',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Dr. Akhilendra Singh',
    leadDesignation: 'Associate Professor, Mechanical Engineering',
    leadDepartment: 'Department of Mechanical Engineering',
    institution: 'IIT Patna',
    campus: 'Bihta, Patna',
    badge: 'IIT Patna',
    photo: '/assets/committee/akhilendra-singh.png',
    responsibilities: [
      'Advisory guidance for Track 04 (Mechanical and Manufacturing Engineering)',
      'Reviewing advanced manufacturing and robotics session scopes',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Dr. Debashisha Jena',
    leadDesignation: 'Professor, Electrical and Electronics Engineering',
    leadDepartment: 'Department of Electrical and Electronics Engineering',
    institution: 'NIT Surathkal',
    campus: 'Surathkal, Karnataka',
    badge: 'NIT Surathkal',
    photo: '/assets/committee/debashisha-jena.png',
    responsibilities: [
      'National advisory benchmarking for power systems, renewable energy, and control engineering',
      'Assisting with reviewer recommendations and keynote nominations',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Dr. Yatendra Kumar Singh',
    leadDesignation: 'Associate Professor, Electrical Engineering',
    leadDepartment: 'Department of Electrical Engineering',
    institution: 'IIT Patna',
    campus: 'Bihta, Patna',
    badge: 'IIT Patna',
    photo: '/assets/committee/yatendra-kumar-singh.png',
    responsibilities: [
      'Advising on smart grid and electrical drives research tracks',
      'Evaluation criteria guidance for Best Paper and Best Poster awards',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Mr. Gopal Krishna',
    leadDesignation: 'Assistant Professor, Computer Science Engineering (AI & Data Science)',
    leadDepartment: 'Department of Computer Science Engineering',
    institution: 'GEC Munger',
    campus: 'Munger, Bihar',
    badge: 'GEC Munger',
    photo: '/assets/committee/gopal-krishna.png',
    responsibilities: [
      'Regional academic outreach and technical advisory for AI & Data Science papers',
      'Student and scholar participation mobilization',
    ],
  },
  {
    taskCategory: 'National Advisory Committee',
    taskTitle: 'Advisory Member',
    leadName: 'Mr. Chandan Kumar Sharma',
    leadDesignation: 'Assistant Professor, Civil Engineering',
    leadDepartment: 'Department of Civil Engineering',
    institution: 'GEC Bhojpur',
    campus: 'Bhojpur, Bihar',
    badge: 'GEC Bhojpur',
    photo: '/assets/committee/chandan-kumar-sharma.png',
    responsibilities: [
      'Technical advisory for Track 02 (Civil Engineering and Infrastructure)',
      'Guidance on sustainable materials and geospatial session tracks',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 01 Chair: Computer Science & AI',
    leadName: 'Track Chair, Track 01',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Computer Science and Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T1 Chair',
    responsibilities: [
      'Reviewer assignment for AI, Machine Learning, Data Science, and Cloud submissions',
      'Technical oral paper and poster session chairing for Track 01',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 02 Chair: Civil Engineering & Infrastructure',
    leadName: 'Track Chair, Track 02',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Civil Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T2 Chair',
    responsibilities: [
      'Screening manuscripts on structural, geotechnical, environmental, and railway engineering',
      'Session evaluation and award nomination for Track 02',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 03 Chair: Electrical Engineering',
    leadName: 'Track Chair, Track 03',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Electrical and Electronics Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T3 Chair',
    responsibilities: [
      'Evaluating research in smart grids, renewable energy, and electric vehicles',
      'Technical coordination of Track 03 presentations',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 04 Chair: Mechanical & Manufacturing',
    leadName: 'Track Chair, Track 04',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Mechanical Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T4 Chair',
    responsibilities: [
      'Overseeing additive manufacturing, Industry 4.0, robotics, and thermal fluid papers',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 05 Chair: Electronics & Communication',
    leadName: 'Track Chair, Track 05',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Electronics & Communication Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T5 Chair',
    responsibilities: [
      'Screening 5G/6G, IoT, VLSI, and antenna/microwave research papers',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 06 Chair: Applied Science',
    leadName: 'Track Chair, Track 06',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Applied Sciences',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T6 Chair',
    responsibilities: [
      'Reviewing papers in physics, green chemistry, mathematical modeling, and functional materials',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 07 Chair: Management',
    leadName: 'Track Chair, Track 07',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Management',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T7 Chair',
    responsibilities: [
      'Managing submissions in technology management, analytics, FinTech, and ESG practices',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 08 Chair: Humanities & Library Science',
    leadName: 'Track Chair, Track 08',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of English and Humanities',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'T8 Chair',
    responsibilities: [
      'Reviewing linguistics, professional communication, digital humanities, and library science papers',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Student Volunteer Corps Lead',
    leadName: 'Student Coordinators (Every Department)',
    leadDesignation: 'Student Volunteer Leads',
    leadDepartment: 'All Academic Departments',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Amhara, Bihta, Patna',
    badge: 'Volunteers',
    responsibilities: [
      'Registration and help desk assistance',
      'Hall management and session assistance during presentations',
      'Guest reception and hospitality facilitation',
      'Publicity and outreach across colleges and universities',
      'Photography and documentation of conference proceedings',
      'Audio-visual and IT support across all presentation auditoriums',
    ],
  },
];

// ── Paper Submission Information ────────────────────────────────
export const SUBMISSION_GUIDELINES = [
  {
    title: 'Original Research Papers',
    detail:
      'ETIMS 2027 invites original, unpublished research papers across eight tracks. Related multidisciplinary contributions are also welcome. Manuscripts must present novel theoretical derivations, experimental validations, or applied multidisciplinary findings not published or currently under review elsewhere.',
  },
  {
    title: 'Abstract Requirement',
    detail:
      'Include an abstract of approximately 250-300 words, subject to the final publisher template. Papers must clearly articulate the problem statement, methodology, results, and multidisciplinary relevance.',
  },
  {
    title: 'Preliminary Screening & Double-Blind Review',
    detail:
      'Manuscripts will undergo preliminary screening for relevance, originality and similarity, followed by independent peer review. Plagiarism and duplicate submissions are strictly prohibited.',
  },
  {
    title: 'Author Presentation Requirement',
    detail:
      'At least one author of each accepted paper must register and present the research in person during the conference technical sessions on 23–24 July 2027.',
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

// ── Tabbed Navigation Links (Pages & Views) ─────────────────────
export interface TabNavItem {
  id: string;
  label: string;
  path: string;
  shortLabel: string;
  description: string;
}

export const TAB_NAV_ITEMS: TabNavItem[] = [
  {
    id: 'home',
    label: 'Overview',
    path: '/',
    shortLabel: 'Home',
    description: 'Summit highlights, countdown & executive summary',
  },
  {
    id: 'about',
    label: 'About NSIT & Summit',
    path: '/about',
    shortLabel: 'About',
    description: 'Host campus profile, vision, departments & facilities',
  },
  {
    id: 'committees',
    label: 'Faculty & In-Charges',
    path: '/committees',
    shortLabel: 'Committees',
    description: 'Organizing leadership, advisory committee & in-charges',
  },
  {
    id: 'tracks',
    label: 'Eight Research Tracks',
    path: '/tracks',
    shortLabel: 'Tracks',
    description: 'Thematic domains, multidisciplinary scope & CFP topics',
  },
  {
    id: 'dates',
    label: 'Important Dates',
    path: '/dates',
    shortLabel: 'Dates',
    description: 'Submission deadlines, notifications & summit timeline',
  },
  {
    id: 'submission',
    label: 'Paper Submission',
    path: '/submission',
    shortLabel: 'Submission',
    description: 'Author guidelines, manuscript formatting & review policy',
  },
  {
    id: 'registration',
    label: 'Registration & Fees',
    path: '/registration',
    shortLabel: 'Registration',
    description: 'Delegate categories, fee structure & entitlements',
  },
  {
    id: 'venue',
    label: 'Venue & Travel',
    path: '/venue',
    shortLabel: 'Venue',
    description: 'Bihta Patna campus access, route planner & accommodation',
  },
  {
    id: 'contact',
    label: 'Contact & Enquiries',
    path: '/contact',
    shortLabel: 'Contact',
    description: 'Convenor secretariat, faculty coordinators & queries',
  },
];

// ── Legacy / Mobile In-Page Nav Links ───────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Overview', href: '/' },
  { label: 'About NSIT', href: '/about' },
  { label: 'Committees & Advisory', href: '/committees' },
  { label: 'Eight Research Tracks', href: '/tracks' },
  { label: 'Important Dates', href: '/dates' },
  { label: 'Paper Submission', href: '/submission' },
  { label: 'Registration & Fees', href: '/registration' },
  { label: 'Venue & Travel', href: '/venue' },
  { label: 'Contact', href: '/contact' },
];

// ── Comprehensive Academic Departments at NSIT Bihta ────────────
export interface AcademicDepartment {
  code: string;
  name: string;
  shortName: string;
  headTitle: string;
  tagline: string;
  overview: string;
  labs: string[];
  researchAreas: string[];
  keyInCharge: string;
}

export const COLLEGE_DEPARTMENTS: AcademicDepartment[] = [
  {
    code: 'CE',
    name: 'Department of Civil Engineering',
    shortName: 'Civil Engineering',
    headTitle: 'Head of Department, CE',
    tagline: 'Designing resilient infrastructure, smart cities & environmental sustainability',
    overview:
      'The Department of Civil Engineering trains engineers to design, build, and sustain critical modern infrastructure, featuring state-of-the-art testing equipment for materials, geotechnical analysis, and water resources.',
    labs: [
      'Structural Dynamics & Concrete Technology Lab',
      'Geotechnical Engineering & Soil Mechanics Facility',
      'Environmental Engineering & Water Quality Testing Lab',
      'Advanced Surveying & GIS Mapping Studio',
      'Transportation Engineering & Highway Materials Lab',
    ],
    researchAreas: [
      'Earthquake-Resistant Structural Systems',
      'Sustainable Green Building Materials',
      'Smart Transportation Networks & Traffic Modeling',
      'Urban Hydrology & Water Security',
    ],
    keyInCharge: 'Dr. Atif Hussain (Convenor, ETIMS 2027) & Civil Engineering Faculty Team',
  },
  {
    code: 'ME',
    name: 'Department of Mechanical Engineering',
    shortName: 'Mechanical Engineering',
    headTitle: 'Head of Department, ME',
    tagline: 'Innovating precision manufacturing, robotics, thermal sciences & CAD/CAM',
    overview:
      'Equipped with heavy-machining facilities, computer-aided engineering workstations, and thermal fluid test benches, the Mechanical Engineering Department fosters industrial innovation and sustainable design.',
    labs: [
      'Robotics, Mechatronics & Automation Center',
      'Advanced CNC & Precision Machine Tool Workshop',
      'CAD/CAM Simulation & 3D Prototyping Studio',
      'Internal Combustion Engines & Thermal Engineering Lab',
      'Fluid Mechanics & Hydraulic Machinery Lab',
    ],
    researchAreas: [
      'Additive Manufacturing & Advanced Materials',
      'Autonomous Mobile Robotics & Manipulators',
      'Computational Fluid Dynamics (CFD)',
      'Renewable Thermal Energy & Heat Exchangers',
    ],
    keyInCharge: 'Faculty In-Charge, Department of Mechanical Engineering',
  },
  {
    code: 'EEE',
    name: 'Department of Electrical & Electronics Engineering',
    shortName: 'Electrical & Electronics',
    headTitle: 'Head of Department, EEE',
    tagline: 'Pioneering clean energy, smart grids, control engineering & microelectronics',
    overview:
      'The Department of Electrical & Electronics Engineering blends foundational power engineering with modern electronics, embedded systems, and renewable energy technologies to address national infrastructure challenges.',
    labs: [
      'Power Systems Simulation & Protection Lab',
      'Electric Drives & Industrial Power Electronics Lab',
      'Microprocessor, Microcontroller & Embedded Systems Lab',
      'Renewable & Solar Energy Research Testbed',
      'Control Systems & Instrumentation Lab',
    ],
    researchAreas: [
      'Smart Grid Integration & Energy Storage',
      'EV Powertrains & Fast Charging Infrastructure',
      'VLSI Design & Embedded Cyber-Physical Architectures',
      'Wide-Bandgap Semiconductor Applications',
    ],
    keyInCharge: 'Faculty In-Charge, Department of Electrical & Electronics Engineering',
  },
  {
    code: 'CSE',
    name: 'Department of Computer Science & Engineering',
    shortName: 'Computer Science & Engg',
    headTitle: 'Head of Department, CSE',
    tagline: 'Advancing computational intelligence, distributed systems & cybersecurity',
    overview:
      'The Department of Computer Science & Engineering at NSIT Bihta is dedicated to producing high-caliber software engineers and researchers with expertise in cutting-edge computing paradigms, machine learning, and scalable systems.',
    labs: [
      'Advanced AI & Deep Learning Laboratory',
      'Cybersecurity & Network Forensics Testbed',
      'Cloud Computing & Distributed Systems Lab',
      'Database & Data Engineering Facility',
      'Software Engineering & Open Source Studio',
    ],
    researchAreas: [
      'Artificial Intelligence & Natural Language Processing',
      'Blockchain, Cryptography & Secure Distributed Ledgers',
      'IoT Sensor Networks & Edge Analytics',
      'Computer Vision & Autonomous Systems',
    ],
    keyInCharge: 'Faculty In-Charge, Department of CSE, NSIT Bihta',
  },
  {
    code: 'AS',
    name: 'Department of Applied Sciences',
    shortName: 'Applied Sciences',
    headTitle: 'Head of Department, Applied Sciences',
    tagline: 'Applied physics, chemistry, mathematical modeling & material sciences',
    overview:
      'Providing the fundamental bedrock of scientific inquiry, the Department of Applied Sciences conducts research in applied mathematics, nanomaterials, chemical kinetics, and optical sciences.',
    labs: [
      'Engineering Physics & Optics Laboratory',
      'Applied Chemistry & Material Synthesis Lab',
      'Computational Mathematics & Statistical Modeling Suite',
    ],
    researchAreas: [
      'Functional Nanomaterials & Polymer Composites',
      'Nonlinear Differential Equations & Numerical Analysis',
      'Green Chemistry & Environmental Catalysis',
    ],
    keyInCharge: 'Faculty In-Charge, Department of Applied Sciences',
  },
  {
    code: 'MGMT',
    name: 'Department of Management',
    shortName: 'Management Studies',
    headTitle: 'Head of Department, Management',
    tagline: 'Technology management, business analytics, entrepreneurship & FinTech',
    overview:
      'Offering undergraduate and postgraduate management programmes affiliated with Aryabhatta Knowledge University, focusing on operations, supply chain, and innovation management.',
    labs: [
      'Business Analytics & Data Modeling Lab',
      'Entrepreneurship & Incubation Cell',
    ],
    researchAreas: [
      'Technology & Innovation Management',
      'Supply Chain & Operations Research',
      'FinTech, Digital Finance & Sustainable ESG Practices',
    ],
    keyInCharge: 'Faculty In-Charge, Department of Management',
  },
  {
    code: 'EH',
    name: 'Department of English and Humanities',
    shortName: 'English & Humanities',
    headTitle: 'Head of Department, English & Humanities',
    tagline: 'Professional communication, technical linguistics, digital humanities & ethics',
    overview:
      'Cultivating communication excellence, ethical scholarship, and interdisciplinary humanistic inquiry essential for well-rounded engineers and researchers.',
    labs: [
      'Digital Language Laboratory & Speech Studio',
      'Professional Communication & Interview Suite',
    ],
    researchAreas: [
      'Professional & Technical Communication',
      'Digital Humanities & Cultural Studies',
      'Scholarly Communication & Information Literacy',
    ],
    keyInCharge: 'Faculty In-Charge, English and Humanities',
  },
];

// ── Campus Facilities at NSIT Bihta ──────────────────────────────
export interface CampusFacility {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  capacity: string;
  features: string[];
}

export const CAMPUS_FACILITIES: CampusFacility[] = [
  {
    id: 'auditorium',
    name: 'Central Air-Conditioned Auditoriums & Plenary Halls',
    category: 'Conference Venues',
    image: '/assets/nsit-auditorium-real.jpg',
    description:
      'Spacious presentation auditoriums and tier-seated seminar halls equipped with projection systems, acoustic paneling, and digital audio-visual setups for conference keynotes and parallel technical sessions.',
    capacity: 'Air-Conditioned Plenary & Seminar Halls',
    features: [
      'High-definition laser projection & dual digital display screens',
      'Acoustically engineered surround sound with wireless lapel/podium mics',
      'High-speed dedicated Wi-Fi connectivity for delegates & presenters',
      'Integrated live streaming & audio-visual recording infrastructure',
    ],
  },
  {
    id: 'computing-center',
    name: 'Central Computing Facility & Digital Infrastructure',
    category: 'Digital Infrastructure',
    image: '/assets/nsit-computing.jpg',
    description:
      'Centralized computer center providing networked workstations, high-speed campus internet connectivity, and licensed engineering software suites for research simulations and academic sessions.',
    capacity: 'High-Speed Computing Facility',
    features: [
      'Campus-wide high-speed optical fiber network & Wi-Fi zones',
      'Industry-standard licensed engineering & simulation software suites',
      'High-availability UPS power backup ensuring uninterrupted sessions',
      'Secure firewall architecture with isolated conference delegate network',
    ],
  },
  {
    id: 'library',
    name: 'Central Digital Library & Knowledge Resource Center',
    category: 'Academic Research',
    image: '/assets/nsit-library.png',
    description:
      'Spacious central library housing comprehensive collections of engineering textbooks, reference volumes, national and international journals, and digital learning portals.',
    capacity: 'Modern Digital Central Library',
    features: [
      'Digital e-library portal with remote journal and database access',
      'Quiet research carrels and scholar discussion reading zones',
      'Subscriptions to leading national and international engineering journals',
      'Archived proceedings of academic and technical conferences',
    ],
  },
  {
    id: 'laboratories',
    name: 'Departmental Laboratories & Technical Workshops',
    category: 'Research Facilities',
    image: '/assets/nsit-lab.jpg',
    description:
      'Specialized engineering laboratories and practical workshops equipped with modern experimental test benches across Civil, Mechanical, EEE, and CSE.',
    capacity: 'Full Departmental Engineering Labs & Workshops',
    features: [
      'Mechatronics, robotics & embedded microcontroller setups',
      'Heavy materials testing, structural compression & tensile benches',
      'Renewable energy, photovoltaic panels & power grid simulators',
      'Fluid mechanics wind tunnels and hydraulic test flumes',
    ],
  },
  {
    id: 'hostels',
    name: 'On-Campus Residential Hostels & Guest House',
    category: 'Hospitality & Accommodation',
    image: '/assets/nsit-hostel.png',
    description:
      'Safe, comfortable on-campus residential hostels for boys and girls alongside furnished accommodations for visiting scholars and delegates.',
    capacity: 'On-Campus Hostels & Guest House Accommodations',
    features: [
      'Limited accommodation available upon prior request, subject to availability',
      'Hygienic dining halls serving nutritious vegetarian & multi-cuisine meals',
      '24x7 security surveillance with campus perimeter guard',
      'Power backup, Wi-Fi connectivity, and RO purified drinking water',
    ],
  },
  {
    id: 'campus-hub',
    name: '9.2-Acre Integrated Green Campus',
    category: 'Campus Environment',
    image: '/assets/nsit-building-real.jpg',
    description:
      'Spread over approximately 9.2 acres at Amhara, Bihta (~30 km from Patna), featuring landscaped gardens, sports grounds, and modern academic architecture.',
    capacity: '9.2 Acres Academic Campus',
    features: [
      'Direct connectivity via NH-922 and proximity to Bihta Railway Station',
      'Ample secure parking for delegate vehicles and conference transport',
      'Lush green lawns and open plazas ideal for conference networking',
      'On-campus health center with round-the-clock medical first-aid support',
    ],
  },
  {
    id: 'sports-grounds',
    name: 'Campus Sports Facilities & Transport Fleet',
    category: 'Campus Grounds & Transit',
    image: '/assets/nsit-sports-grounds.jpg',
    description:
      'Outdoor sports facilities, athletic grounds, and institutional transport fleet connecting Patna and surrounding regions.',
    capacity: 'Sports Grounds & Transit Fleet',
    features: [
      'Multi-sport athletic field and outdoor recreational spaces',
      'Dedicated institutional bus fleet connecting Patna and surrounding regions',
      'Outdoor conference networking and poster presentation courtyards',
    ],
  },
];
