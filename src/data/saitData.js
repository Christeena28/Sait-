export const NOTICE_STRIP = {
  text: "Registrations open for Hack Europa 2026 & Department Workshops. Check the Notices tab for schedules.",
  linkText: "View Notices",
  link: "/notices"
};

export const STATS = [
  { label: "Active Student Members", value: "350+", sample: true },
  { label: "Technical Workshops Held", value: "40+", sample: true },
  { label: "Placement Success Rate", value: "92%", sample: true },
  { label: "Alumni Network Across Tech", value: "1,200+", sample: true },
];

export const FACULTY = [
  {
    name: "Prof. Dr. Santhosh Kumar",
    role: "Head of Division (HOD)",
    dept: "Division of Information Technology, SOE CUSAT",
    image: "/img/hod.jpg",
    isReal: true,
  },
  {
    name: "Prof. Dr. Shelbi Joseph",
    role: "Faculty Coordinator",
    dept: "SAIT, Division of IT, SOE CUSAT",
    image: "/img/shelbi.jpg",
    isReal: true,
  },
  {
    name: "Dr. Daleesha M Viswanathan",
    role: "Faculty Co-coordinator",
    dept: "SAIT, Division of IT, SOE CUSAT",
    image: "/img/daleesha.jpg",
    isReal: true,
  },
  {
    name: "Faculty information to be added",
    role: "Faculty Mentor / Advisor",
    dept: "Division of Information Technology",
    image: "/img/placeholder.jpg",
    isReal: false,
    toBeAdded: true,
  }
];

export const TEAM_MEMBERS = [
  {
    name: "Mrudul John Mathews",
    position: "President",
    year: "4th Year",
    team: "Executive",
    image: "/img/mrudul.jpg",
  },
  {
    name: "K V Trisha Gautham",
    position: "Vice President",
    year: "3rd Year",
    team: "Executive",
    image: "/img/trisha.jpg",
  },
  {
    name: "Advaith Pradosh",
    position: "Secretary",
    year: "3rd Year",
    team: "Executive",
    image: "/img/adwaith.jpg",
  },
  {
    name: "Akash M P",
    position: "Joint Secretary",
    year: "2nd Year",
    team: "Executive",
    image: "/img/akash.jpg",
  },
  {
    name: "Koiloth Khadeeja Hiba",
    position: "Treasurer",
    year: "3rd Year",
    team: "Executive",
    image: "/img/hiba.jpg",
  },
  {
    name: "Abhinav O",
    position: "Technical Lead",
    year: "3rd Year",
    team: "Tech",
    image: "/img/abhinav.jpg",
  },
  {
    name: "Adithyan S V",
    position: "Media Lead",
    year: "3rd Year",
    team: "Media",
    image: "/img/sv.jpg",
  },
  {
    name: "Ashbin P A",
    position: "Event Lead",
    year: "3rd Year",
    team: "Events",
    image: "/img/ashbin.jpg",
  },
  {
    name: "Ashwin Menon",
    position: "Outreach Lead",
    year: "3rd Year",
    team: "PR",
    image: "/img/aswin.jpg",
  },
  {
    name: "Jayalekshmi P E",
    position: "Placement Lead",
    year: "4th Year",
    team: "PR",
    image: "/img/jayalekshmi.jpg",
  },
  {
    name: "Sreelakshmi K",
    position: "Alumni Lead",
    year: "4th Year",
    team: "PR",
    image: "/img/sreelekshmi.jpg",
  },
  {
    name: "K H Aysha",
    position: "Women's Lead",
    year: "3rd Year",
    team: "Content",
    image: "/img/aysha.jpg",
  },
  {
    name: "Ranjana K P",
    position: "Arts Lead",
    year: "2nd Year",
    team: "Content",
    image: "/img/ranjana.jpg",
  },
  {
    name: "Mohammad Aslam P S",
    position: "Sports Lead",
    year: "3rd Year",
    team: "Events",
    image: "/img/aslam.jpg",
  }
];

export const ALUMNI_SPOTLIGHT = {
  name: "Abhijith Menon",
  role: "Alumni & Technical Mentor",
  batch: "Alumni Community",
  image: "/img/abhijith_menon.jpg",
  quote: "Innovation is not about technology, it's about solving problems that matter.",
  bio: "A visionary mentor, innovator, and guide who inspired countless students to push their boundaries and create meaningful solutions.",
  sample: false,
};

export const ALUMNI_LIST = [
  ALUMNI_SPOTLIGHT,
  {
    name: "Arun K. Nair",
    role: "Senior Software Engineer at Google",
    batch: "2019",
    image: "/img/placeholder.jpg",
    bio: "Passionate about distributed storage and cloud infrastructure systems.",
    sample: true,
  },
  {
    name: "Neha Varma",
    role: "Machine Learning Researcher at IBM Research",
    batch: "2020",
    image: "/img/placeholder.jpg",
    bio: "Working on generative models and enterprise AI applications.",
    sample: true,
  },
  {
    name: "Rahul S. Pillai",
    role: "Solutions Architect at AWS",
    batch: "2021",
    image: "/img/placeholder.jpg",
    bio: "Specializing in microservices migration and high-availability cloud architecture.",
    sample: true,
  },
  {
    name: "Anjali George",
    role: "Product Manager at Microsoft",
    batch: "2022",
    image: "/img/placeholder.jpg",
    bio: "Advocating for accessible technology and next-generation collaboration tools.",
    sample: true,
  },
  {
    name: "Karthik Subramanian",
    role: "Founding Engineer at Stealth AI Startup",
    batch: "2023",
    image: "/img/placeholder.jpg",
    bio: "Built foundational developer tools; active open-source contributor.",
    sample: true,
  }
];

export const EVENTS = [
  {
    id: "hack-europa-2026",
    title: "Hack Europa 2026 - Annual 24-Hour IT Hackathon",
    category: "Hackathon",
    date: "October 18-19, 2026",
    time: "09:00 AM IST",
    venue: "Division of IT Lab Complex & Seminar Hall, SOE CUSAT",
    description: "SAIT's flagship departmental hackathon bringing together students to solve pressing challenges across Cloud, AI, and Cybersecurity with cash prizes and internship tracks.",
    featured: true,
    status: "Upcoming",
  },
  {
    id: "devops-workshop",
    title: "Hands-on Workshop on Cloud Native, Docker & Kubernetes",
    category: "Workshop",
    date: "November 05, 2026",
    time: "02:00 PM - 05:00 PM IST",
    venue: "Systems Lab 2, IT Block",
    description: "A practical hands-on session introducing containerization, Kubernetes clusters, and CI/CD pipelines for production deployments.",
    featured: false,
    status: "Upcoming",
  },
  {
    id: "alumni-meet-footprints",
    title: "Footprints 2026: Annual Department Alumni Meet",
    category: "Alumni",
    date: "December 12, 2026",
    time: "10:00 AM - 04:00 PM IST",
    venue: "SOE Auditorium, CUSAT",
    description: "Annual homecoming connecting current students with alumni leaders across tech, finance, and research for mentorship and career talks.",
    featured: false,
    status: "Upcoming",
  },
  {
    id: "enterprise-ai-seminar",
    title: "Seminar on Large Language Models & Modern Enterprise Systems",
    category: "Seminar",
    date: "November 22, 2026",
    time: "03:00 PM - 04:30 PM IST",
    venue: "Seminar Hall 1, SOE",
    description: "Invited lecture exploring the architectural evolution of foundation models and practical retrieval-augmented generation (RAG).",
    featured: false,
    status: "Upcoming",
  },
  {
    id: "git-freshers",
    title: "Git, Open Source & Linux Essentials for Beginners",
    category: "Workshop",
    date: "August 14, 2026",
    time: "02:00 PM IST",
    venue: "Software Lab 1",
    description: "Introductory workshop empowering freshers with version control, pull requests, and terminal command skills.",
    featured: false,
    status: "Past",
  },
  {
    id: "cyber-security-symposium",
    title: "Web Security & Ethical Hacking Symposium",
    category: "Competition",
    date: "July 28, 2026",
    time: "10:00 AM IST",
    venue: "Network Lab, IT Block",
    description: "Capture the Flag (CTF) tournament and security vulnerability analysis competition.",
    featured: false,
    status: "Past",
  }
];

export const HALL_OF_FAME = [
  {
    id: "ibm-grant",
    title: "IBM WatsonX Gen AI Grant Recipient",
    year: "2024",
    type: "Innovation",
    description: "Selected as one of only 25 institutions globally to receive the prestigious ₹50,00,000 IBM WatsonX Gen AI grant, highlighting our commitment to AI research and innovation.",
    badge: "Global Honor",
    sample: false,
  },
  {
    id: "hack-europa-success",
    title: "Hack Europa - Department Hackathon Success",
    year: "2023",
    type: "Hackathon",
    description: "Successfully conducted Hack Europa, bringing together innovative student teams to solve real-world problems with prizes and industry internships.",
    badge: "Flagship Event",
    sample: false,
  },
  {
    id: "nba-tier1",
    title: "NBA Tier-1 Accreditation",
    year: "2023",
    type: "Academic",
    description: "Earned Tier-1 accreditation from the National Board of Accreditation (NBA), enhancing the global mobility and recognition of our engineering graduates worldwide.",
    badge: "Institutional Excellence",
    sample: false,
  },
  {
    id: "ioa-accreditation",
    title: "Institute of Analytics Accreditation",
    year: "2022",
    type: "Academic",
    description: "Earned prestigious accreditation from the Institute of Analytics (IoA) United Kingdom, validating cutting-edge analytics and data engineering curriculum.",
    badge: "International Accreditation",
    sample: false,
  },
  {
    id: "smart-india-hackathon",
    title: "Smart India Hackathon Finalists & Winners",
    year: "2025",
    type: "Competition",
    description: "Student teams from Division of IT secured top ranks in nationwide Smart India Hackathon solving public infrastructure challenges.",
    badge: "National Award",
    sample: true,
  },
  {
    id: "ieee-paper",
    title: "IEEE Best Student Paper Presentation Award",
    year: "2024",
    type: "Research",
    description: "Research project on secure decentralized identities published and awarded at IEEE International Conference.",
    badge: "Research Publication",
    sample: true,
  }
];

export const NOTICES = [
  {
    id: "not-1",
    date: "September 18, 2026",
    category: "Announcement",
    title: "SAIT Executive Body Volunteer Drive for 2026-27",
    content: "Interested students from 2nd and 3rd year B.Tech IT are invited to join sub-committees across Technical, Media, Events, and PR. Submit expression of interest before Sept 28.",
    pinned: true,
  },
  {
    id: "not-2",
    date: "September 15, 2026",
    category: "Deadline",
    title: "B.Tech Final Year Capstone Project Abstract Submission",
    content: "All final year IT student groups are required to upload their preliminary project proposals approved by guide to the department portal.",
    pinned: true,
  },
  {
    id: "not-3",
    date: "September 10, 2026",
    category: "Event",
    title: "Hack Europa 2026 Problem Domains & Eligibility Released",
    content: "Tracks include AI/ML Systems, Decentralized Apps, HealthTech, and Sustainable Smart Cities. Team registrations open on the events portal.",
    pinned: false,
  },
  {
    id: "not-4",
    date: "September 02, 2026",
    category: "Notice",
    title: "Department Information Board Weekly Tech Briefing Series",
    content: "SAIT Information Board is resuming weekly curation of trending tech topics, research breakthroughs, and open internship listings on the department corridor board.",
    pinned: false,
  },
  {
    id: "not-5",
    date: "August 25, 2026",
    category: "Announcement",
    title: "Call for Articles - Annual IT Department Magazine 2026",
    content: "Contributions including technical write-ups, poems, campus illustrations, and tech satire are welcomed from students and faculty for the upcoming print edition.",
    pinned: false,
  }
];

export const PLACEMENT_STATS = {
  batch: "2025 (Sample Data)",
  stats: [
    { label: "Placement Rate", value: "94%", sample: true },
    { label: "Highest CTC", value: "₹28.0 LPA", sample: true },
    { label: "Average CTC", value: "₹8.6 LPA", sample: true },
    { label: "Total Offers", value: "85+", sample: true },
  ],
  salaryDistribution: [
    { bracket: "< 6 LPA", percentage: 22, sample: true },
    { bracket: "6 - 10 LPA", percentage: 46, sample: true },
    { bracket: "10 - 15 LPA", percentage: 20, sample: true },
    { bracket: "> 15 LPA", percentage: 12, sample: true },
  ],
  topRecruiters: [
    "Cisco", "IBM", "TCS Digital", "Infosys", "Cognizant",
    "Wipro", "UST Global", "IBS Software", "SOTI", "Mitsogo",
    "Accubits", "Federal Bank", "QBurst", "Experion"
  ],
  resources: [
    {
      title: "Central Placement Office (CPO) Portal",
      url: "https://cpo.cusat.ac.in",
      desc: "Official CUSAT central training and placement portal for drive notices."
    },
    {
      title: "Technical Interview Question Bank",
      url: "#",
      desc: "Curated DSA, OS, DBMS and System Design practice questions by seniors."
    },
    {
      title: "Resume & Portfolio Guidelines",
      url: "#",
      desc: "ATS-friendly resume templates verified for top tech recruiters."
    }
  ]
};
