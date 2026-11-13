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
  fullAddress: 'Amhara, Bihta, Patna, Bihar – 801106, India',
  trustName: 'Sitwanto Devi Mahila Kalyan Sansthan',
  approvals:
    'Approved by AICTE (New Delhi), Recognized by Dept. of Science, Technology & Technical Education (Govt. of Bihar), Affiliated with Bihar Engineering University (BEU) / Aryabhatta Knowledge University (AKU)',
  description:
    'Netaji Subhas Institute of Technology (NSIT), Bihta, Patna is a premier technical institution dedicated to academic rigor, cutting-edge engineering, and multidisciplinary exploration. Situated in the emerging national knowledge hub of Bihta adjacent to IIT Patna, the campus provides world-class presentation, computing, and research infrastructure for scholarly exchange.',
  stats: [
    { label: 'Campus Area', value: '11 Acres', subtext: 'Lush Green Residential Campus' },
    { label: 'Built-Up Space', value: '400,000+ Sq. Ft.', subtext: 'Academic & Laboratory Blocks' },
    { label: 'Established', value: 'Est. 2007', subtext: 'Approved by AICTE & NAAC Graded' },
    { label: 'Academic Departments', value: '5 Depts', subtext: 'B.Tech & Applied Sciences' },
    { label: 'Digital Library', value: '10,000 Sq. Ft.', subtext: 'Central Digital Reading Facility' },
    { label: 'Computing Center', value: 'Centralized', subtext: 'High-Speed Campus LAN & Wi-Fi' },
    { label: 'Student Living', value: 'On-Campus Hostels', subtext: 'Separate Boys & Girls Hostels' },
    { label: 'Bihta Knowledge Hub', value: 'Near IIT Patna', subtext: '2 km from Bihta & 25 km from Patna' },
  ],
  campusFeatures: [
    'Air-conditioned academic auditoriums & seminar presentation halls with laser projection',
    'Advanced computing centers & engineering research laboratories equipped with licensed software',
    'Campus-wide high-speed Wi-Fi network & technical audio-visual infrastructure',
    'Dedicated conference registration, logistics, and hospitality desks',
    'On-campus faculty guest house and separate residential hostels for delegates',
    'Center for Innovation, Incubation & Entrepreneurship (CIIE) with 3D prototyping tools',
  ],
  academicPrograms: {
    undergraduate: [
      {
        degree: 'B.Tech in Computer Science & Engineering (CSE)',
        duration: '4 Years',
        focus: 'AI/ML, Data Engineering, Cloud Systems & Cybersecurity',
      },
      {
        degree: 'B.Tech in CSE (Artificial Intelligence & Machine Learning)',
        duration: '4 Years',
        focus: 'Deep Neural Networks, Natural Language Processing & Cognitive AI',
      },
      {
        degree: 'B.Tech in Electrical & Electronics Engineering (EEE)',
        duration: '4 Years',
        focus: 'Power Electronics, Renewable Energy, Smart Grids & Microcontrollers',
      },
      {
        degree: 'B.Tech in Mechanical Engineering (ME)',
        duration: '4 Years',
        focus: 'Robotics, Mechatronics, CAD/CAM Prototyping & Thermal Sciences',
      },
      {
        degree: 'B.Tech in Civil Engineering (CE)',
        duration: '4 Years',
        focus: 'Structural Dynamics, Geotechnical Analysis & Smart City Systems',
      },
    ],
    polytechnic: [
      {
        program: 'Diploma in Mechanical Engineering',
        duration: '3 Years',
        focus: 'Workshop Practice, Machine Design & Manufacturing',
      },
      {
        program: 'Diploma in Civil Engineering',
        duration: '3 Years',
        focus: 'Surveying, Construction Materials & Structural Drawing',
      },
      {
        program: 'Diploma in Electrical Engineering',
        duration: '3 Years',
        focus: 'Electrical Machines, Transmission Systems & Wiring',
      },
    ],
    managementAndApplications: [
      {
        program: 'Bachelor of Computer Applications (BCA)',
        duration: '3 Years',
        focus: 'Software Development, Web Technologies & Database Design',
      },
      {
        program: 'Bachelor of Business Administration (BBA)',
        duration: '3 Years',
        focus: 'Organizational Leadership, Marketing & Financial Analytics',
      },
      {
        program: 'Master of Business Administration (MBA)',
        duration: '2 Years',
        focus: 'Strategic Management, Operations & Tech Entrepreneurship',
      },
    ],
  },
  innovationAndIncubation: {
    centerName: 'Center for Innovation, Incubation & Entrepreneurship (CIIE)',
    highlights: [
      'Rapid prototyping suite with additive 3D printers, laser cutters, and embedded electronics kits',
      'Seed capital facilitation and patent filing support for student and faculty innovators',
      'Regular industry hackathons, technical paper contests, and entrepreneurship bootcamps',
      'Collaborative MoUs with state research laboratories, public sector units, and tech startups',
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
  transitAccess: [
    {
      mode: 'Airways Access',
      terminal: 'Patna Airport (PAT)',
      detail:
        'Jai Prakash Narayan International Airport, Patna (~30 km from campus) with direct daily flights to Delhi, Mumbai, Bengaluru, Kolkata, and Hyderabad. Future Bihta Civil Enclave is located minutes away.',
    },
    {
      mode: 'Railways Access',
      terminal: 'Bihta & Patna Junction',
      detail:
        'Bihta Railway Station (~4 km) provides frequent local connections; Patna Junction Railway Station (~32 km) connects major Rajdhani, Vande Bharat, and Superfast express trains.',
    },
    {
      mode: 'Roadways Access',
      terminal: 'NH-922 Expressway Corridor',
      detail:
        'Strategically situated along the 4-lane Patna–Buxar highway (NH-922) and the Danapur–Bihta elevated corridor, ensuring smooth vehicular transit without city congestion.',
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
    shortLabel: 'About NSIT',
    description: 'Host campus profile, vision, departments & facilities',
  },
  {
    id: 'committees',
    label: 'Faculty & In-Charges',
    path: '/committees',
    shortLabel: 'Committees',
    description: 'Organizing leadership, track chairs & task in-charges',
  },
  {
    id: 'tracks',
    label: 'Research Tracks',
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
    label: 'Contact & Helpdesk',
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
  { label: 'Committees & In-Charges', href: '/committees' },
  { label: 'Research Tracks', href: '/tracks' },
  { label: 'Important Dates', href: '/dates' },
  { label: 'Paper Submission', href: '/submission' },
  { label: 'Registration', href: '/registration' },
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
    keyInCharge: 'Dr. Atif Hussain (Convenor, ETIMS 2027) & EEE Faculty Team',
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
    keyInCharge: 'Faculty In-Charge, Department of Civil Engineering',
  },
  {
    code: 'ASH',
    name: 'Department of Applied Sciences & Humanities',
    shortName: 'Applied Sciences & Humanities',
    headTitle: 'Head of Department, ASH',
    tagline: 'Foundational scientific rigor, mathematical modeling & communication excellence',
    overview:
      'Providing the fundamental bedrock of scientific inquiry for all engineering disciplines, the department conducts rigorous research in applied mathematics, nanomaterials, chemical kinetics, and technical communications.',
    labs: [
      'Engineering Physics & Optics Laboratory',
      'Applied Chemistry & Material Synthesis Lab',
      'Computational Mathematics & Statistical Modeling Suite',
      'Digital Language Lab & Professional Communication Studio',
    ],
    researchAreas: [
      'Functional Nanomaterials & Polymer Composites',
      'Nonlinear Differential Equations & Numerical Analysis',
      'Green Chemistry & Environmental Catalysis',
      'Professional Ethics & Engineering Pedagogy',
    ],
    keyInCharge: 'Faculty In-Charge, Applied Sciences & Humanities',
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
    image: '/assets/nsit-classroom.png',
    description:
      'Spacious presentation auditoriums and tier-seated seminar halls equipped with projection systems, acoustic paneling, and digital audio-visual setups for conference keynotes and technical sessions.',
    capacity: 'Central Air-Conditioned Plenary Halls',
    features: [
      'High-definition laser projection & dual digital display screens',
      'Acoustically engineered surround sound with wireless lapel/podium mics',
      'High-speed dedicated Wi-Fi connectivity for delegates & presenters',
      'Integrated live streaming & recording infrastructure',
    ],
  },
  {
    id: 'computing-center',
    name: 'Central Computing Facility & Data Hub',
    category: 'Digital Infrastructure',
    image: '/assets/nsit-computing.jpg',
    description:
      'Centralized computer center providing networked workstations, high-speed campus internet connectivity, and licensed engineering software suites for research simulations and academic sessions.',
    capacity: 'Centralized High-Speed Computing Facility',
    features: [
      'Campus-wide high-speed optical fiber network & Wi-Fi zones',
      'Industry-standard licensed engineering & simulation software suites',
      'High-availability UPS power backup ensuring uninterrupted sessions',
      'Secure firewall architecture with isolated conference delegate network',
    ],
  },
  {
    id: 'library',
    name: 'Central Knowledge Resource Center & Digital Library',
    category: 'Academic Research',
    image: '/assets/nsit-library.png',
    description:
      'Spacious 10,000 sq. ft. central library housing comprehensive collections of engineering textbooks, reference volumes, national and international journals, and digital learning portals.',
    capacity: '10,000 Sq. Ft. Digital Central Library',
    features: [
      'Digital e-library portal with remote journal and database access',
      'Quiet research carrels and scholar discussion reading zones',
      'Subscriptions to leading national and international engineering journals',
      'Archived proceedings of national & international engineering conventions',
    ],
  },
  {
    id: 'laboratories',
    name: 'Departmental Research & Testing Laboratories',
    category: 'Research Facilities',
    image: '/assets/nsit-lab.jpg',
    description:
      'Specialized engineering laboratories and practical workshops equipped with modern experimental test benches, mechatronics equipment, power panels, and civil testing instruments.',
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
      'Safe, comfortable on-campus residential hostels for boys and girls alongside furnished faculty guest accommodations for visiting scholars and delegates.',
    capacity: 'On-Campus Hostels & Guest House Accommodations',
    features: [
      'Furnished air-conditioned guest suites for visiting professors',
      'Hygienic dining halls serving nutritious vegetarian & multi-cuisine meals',
      '24x7 security surveillance with biometric entry and campus perimeter guard',
      'Power backup, Wi-Fi connectivity, and RO purified drinking water',
    ],
  },
  {
    id: 'campus-hub',
    name: 'Bihta Knowledge Hub & Sprawling Green Campus',
    category: 'Campus Environment',
    image: '/assets/nsit-campus.jpg',
    description:
      'Strategically positioned within the emerging national educational corridor of Bihta, close to IIT Patna and the 4-lane Patna–Buxar expressway, featuring landscaped gardens, sports grounds, and eco-friendly architecture.',
    capacity: '11 Acres Land & 400,000+ Sq. Ft. Built-Up Area',
    features: [
      'Direct connectivity via NH-922 and proximity to Bihta Railway Station',
      'Ample secure parking for delegate vehicles and conference shuttle fleets',
      'Lush green lawns and open plazas ideal for conference networking',
      'On-campus health center with round-the-clock medical first-aid support',
    ],
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
}

export const FACULTY_TASK_TEAMS: FacultyInCharge[] = [
  {
    taskCategory: 'Leadership & Patrons',
    taskTitle: 'Chief Patron',
    leadName: 'Hon’ble Chairman / Managing Trustee',
    leadDesignation: 'Executive Leadership, Netaji Subhas Group',
    leadDepartment: 'Governing Body & Institutional Trust',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Patronage',
    responsibilities: [
      'Overall institutional vision, conference policy approval, and strategic patronage',
      'Government, university, and AICTE institutional liaison',
      'Inaugural address and high-level dignitary hosting',
    ],
  },
  {
    taskCategory: 'Leadership & Patrons',
    taskTitle: 'Patron',
    leadName: 'Principal / Director',
    leadDesignation: 'Head of Institution',
    leadDepartment: 'Office of the Principal / Director',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Patronage',
    responsibilities: [
      'Academic governance and institutional oversight for ETIMS 2027',
      'Mobilization of campus resources, infrastructure, and departmental cooperation',
      'Presiding over valedictory session and best paper award presentations',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Conference Convenor & Primary Liaison',
    leadName: 'Dr. Atif Hussain',
    leadDesignation: 'Assistant Professor & Conference Convenor',
    leadDepartment: 'Department of Electrical & Electronics Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Convenorship',
    contactEmail: 'etims2027@nsiterp.in',
    contactPhone: '+91 83402 58426',
    responsibilities: [
      'Chief coordinator for all academic, technical, and operational conference committees',
      'Primary official communication channel for delegates, authors, and partner institutions',
      'Supervision of peer review integrity, publication proceedings, and session allocation',
      'Convening daily committee briefings and monitoring milestone execution',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Co-Convenor & Organizing Secretary',
    leadName: 'Senior Faculty Lead, Dept. of CSE',
    leadDesignation: 'Associate Professor / Organizing Secretary',
    leadDepartment: 'Department of Computer Science & Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Secretariat',
    contactEmail: 'etims2027@nsiterp.in',
    responsibilities: [
      'Assisting the convenor in coordinating inter-departmental workflows',
      'Technical session management and paper intake tracking',
      'Official correspondence with keynote speakers and session chairs',
    ],
  },
  {
    taskCategory: 'Secretariat & Convenor',
    taskTitle: 'Joint Organizing Secretary',
    leadName: 'Faculty In-Charge, Dept. of ME',
    leadDesignation: 'Assistant Professor / Joint Secretary',
    leadDepartment: 'Department of Mechanical Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Secretariat',
    responsibilities: [
      'Operational coordination of conference halls and hardware presentation setups',
      'Certificate preparation, delegate registration packs, and memento logistics',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 01 In-Charge: Artificial Intelligence & Cognitive Computing',
    leadName: 'Faculty In-Charge, AI & Data Science Cell',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Computer Science & Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Track 01 Chair',
    responsibilities: [
      'Reviewer assignment for AI, Machine Learning, Deep Learning, and NLP submissions',
      'Chairing technical oral sessions and poster presentations for Track 01',
      'Ensuring technical rigor, novelty validation, and presentation quality control',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 02 In-Charge: Communication Networks & Cyber-Physical Systems',
    leadName: 'Faculty In-Charge, Networks & IoT Lab',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Electronics & Communications / EEE',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Track 02 Chair',
    responsibilities: [
      'Screening manuscripts on 5G/6G, IoT protocols, sensor networks, and cybersecurity',
      'Coordinating session evaluations and moderating technical discussions',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 03 In-Charge: Sustainable Energy Systems & Green Technology',
    leadName: 'Faculty In-Charge, Renewable Energy Cell',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Electrical & Electronics Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Track 03 Chair',
    responsibilities: [
      'Evaluating research in smart grids, EV charging, photovoltaics, and power electronics',
      'Organizing special technical sessions on national clean energy transition',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 04 In-Charge: Automation, Robotics & Precision Mechatronics',
    leadName: 'Faculty In-Charge, Robotics & CAD/CAM Lab',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Mechanical Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Track 04 Chair',
    responsibilities: [
      'Overseeing mechatronics, industrial robotics, Industry 4.0, and additive manufacturing papers',
      'Demonstration coordination for live robotic prototypes and scale models',
    ],
  },
  {
    taskCategory: 'Technical Program & Track Chairs',
    taskTitle: 'Track 05 In-Charge: Multidisciplinary Applied Sciences & Engineering',
    leadName: 'Faculty In-Charge, Applied Sciences',
    leadDesignation: 'Senior Faculty / Track Chair',
    leadDepartment: 'Department of Applied Sciences & Humanities',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Track 05 Chair',
    responsibilities: [
      'Reviewing cross-cutting papers in applied mathematics, nanomaterials, and environmental science',
      'Fostering interdisciplinary dialogues across engineering boundaries',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Logistics, Transport & Campus Escorts In-Charge',
    leadName: 'Faculty In-Charge, Campus Fleet & Logistics',
    leadDesignation: 'Assistant Professor & Campus Transport Officer',
    leadDepartment: 'Department of Civil Engineering & Administration',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Logistics Lead',
    responsibilities: [
      'Coordinating conference shuttle fleet between Patna Airport (PAT), Patna Junction, Bihta Station, and NSIT campus',
      'Managing campus vehicular movement, designated VIP parking, and directional signages',
      'Overseeing campus escort officers guiding delegates to respective plenary halls',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Hospitality, Dignitary Reception & Guest House In-Charge',
    leadName: 'Faculty In-Charge, Hospitality Desk',
    leadDesignation: 'Senior Faculty Coordinator',
    leadDepartment: 'Department of Applied Sciences & Humanities',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Hospitality Lead',
    responsibilities: [
      'Greeting keynote speakers and outstation session chairs upon arrival',
      'Managing on-campus AC guest house reservations and partner hotel allocations',
      'Overseeing conference dining: high teas, networking lunches, and banquet dinners',
      'Preparation of conference delegate welcome kits and eco-friendly bags',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Publication, Similarity & Proceedings Desk In-Charge',
    leadName: 'Faculty In-Charge, Research & Publications',
    leadDesignation: 'Associate Professor / Publications Officer',
    leadDepartment: 'Department of Computer Science & Engineering',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Publications Lead',
    responsibilities: [
      'Enforcing strict similarity analysis (< 15% threshold) using authorized anti-plagiarism tools',
      'Verification of IEEE/Springer camera-ready format templates and copyright transfers',
      'Liaison with indexing bodies and publishing partners for conference proceedings',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Finance, Accounts & Sponsorship Desk In-Charge',
    leadName: 'Accounts Officer & Faculty Lead, Finance',
    leadDesignation: 'Institutional Bursar & Faculty In-Charge',
    leadDepartment: 'Finance & Accounts Division',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Finance Lead',
    responsibilities: [
      'Verification and reconciliation of delegate registration fees (NEFT/RTGS/UPI)',
      'Issuing official stamped payment receipts for institutional expense reimbursement',
      'Procurement audit for conference materials, AV hardware, and catering accounts',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Web Systems, Digital Media & AV Systems In-Charge',
    leadName: 'Faculty In-Charge, IT & Systems Cell',
    leadDesignation: 'Assistant Professor / Systems Administrator',
    leadDepartment: 'Department of Computer Science & Engineering / IT Cell',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Media & Systems Lead',
    responsibilities: [
      'Maintenance and continuous updates of the official conference web portal',
      'Audio-visual setup, laser projectors, and microphone soundchecks across all 5 session halls',
      'Digital certificate portal generation, live-stream feeds, and press release photography',
    ],
  },
  {
    taskCategory: 'Operational Desks & In-Charges',
    taskTitle: 'Student Volunteer Task Force Leads',
    leadName: 'Student Coordinators & Scholar Leads',
    leadDesignation: 'Senior Student Executives (B.Tech & M.Tech)',
    leadDepartment: 'Student Council & Technical Clubs',
    institution: 'Netaji Subhas Institute of Technology (NSIT)',
    campus: 'Bihta, Patna',
    badge: 'Volunteer Corps',
    responsibilities: [
      'Manning on-site registration desks, delegate badge distribution, and attendance verification',
      'Session hall timing management (warning bells for 15-min author presentations)',
      'Digital slide deck loading and technical mic assistance in auditorium halls',
      'Campus guide assistance for visiting scholars across libraries and labs',
    ],
  },
];
