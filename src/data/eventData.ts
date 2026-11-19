export interface EventInfoType {
  title: string;
  year: string;
  tagline: string;
  badge: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  venueFull: string;
  host: string;
  format: string;
  targetAudience: string;
  registrationUrl: string;
}

export const eventData: EventInfoType = {
  title: "Qiskit Fall Fest",
  year: "2026",
  tagline: "Learn • Build • Explore Quantum Computing",
  badge: "Offline Event • In-Person on Campus",
  description:
    "The premier quantum computing event for students, researchers, and enthusiasts. Whether you are a student, researcher, or developer, join us to explore the frontiers of quantum technology.",
  date: "23 – 28 Nov (Online) • 30 Nov (On-Campus)",
  time: "Hybrid Mode",
  venue: "Dr.RVR NRI Institute of Technology Deemed to be University",
  venueFull: "Dr.RVR NRI Institute of Technology Deemed to be University, Vijayawada, Andhra Pradesh, India",
  host: "Dr.RVR NRI Institute of Technology Deemed to be University",
  format: "Offline (In-Person)",
  targetAudience: "Students, Researchers, Developers & Quantum Enthusiasts",
  registrationUrl: "https://forms.gle/yk7iLvmrkzb1MuZf9",
};

export interface FeatureType {
  id: string;
  title: string;
  description: string;
  iconName: "GraduationCap" | "Mic" | "Users" | "Lightbulb";
}

export const featuresData: FeatureType[] = [
  {
    id: "innovation",
    title: "Quantum Innovation",
    description: "Inauguration of the Quantum Innovation Centre and breakthrough research facilities.",
    iconName: "GraduationCap",
  },
  {
    id: "talks",
    title: "Guest Lectures",
    description: "Insights and real-world breakthroughs from quantum computing leaders and researchers.",
    iconName: "Mic",
  },
  {
    id: "networking",
    title: "Networking",
    description: "Connect with like-minded peers, academic mentors, and industry specialists.",
    iconName: "Users",
  },
  {
    id: "open",
    title: "Open to All",
    description: "Tailored for undergraduate students, researchers, developers, and enthusiasts.",
    iconName: "Lightbulb",
  },
];

export interface GuestLectureItem {
  day: string;
  date: string;
  time: string;
  speaker: string;
  designation: string;
  topic: string;
  photoUrl: string;
}

export const guestLecturesSchedule: GuestLectureItem[] = [
  {
    day: "Day 1",
    date: "23-11-2026",
    time: "1:30 PM to 2:30 PM",
    speaker: "Ms. Debarthi Pal",
    designation: "IBM Quantum Research Engineer",
    topic: "Introduction to Quantum Computing with Qiskit 101",
    photoUrl: "/images/speakers/debarthi_pal.jpg"
  },
  {
    day: "Day 2",
    date: "24-11-2026",
    time: "10:00 AM to 11:00 AM",
    speaker: "Dr. RVS Lalitha",
    designation: "Professor of CSE, Adithya University",
    topic: "Post Quantum Cryptography",
    photoUrl: "/images/speakers/rvs_lalitha.jpg"
  },
  {
    day: "Day 2",
    date: "24-11-2026",
    time: "1:30 PM to 2:30 PM",
    speaker: "Dr. G. Jaya Suma",
    designation: "Professor of IT, Director of Academic Planning, JNTUGV",
    topic: "Research Towards Quantum Computing",
    photoUrl: "/images/speakers/jaya_suma.jpg"
  },
  {
    day: "Day 3",
    date: "25-11-2026",
    time: "10:30 AM to 11:30 AM",
    speaker: "Er. Laxmikanta Sutar",
    designation: "Faculty of Quantum Science & Technology, CUTM-AP",
    topic: "Quantum Hamiltonians",
    photoUrl: "/images/speakers/laxmikanta_sutar.jpg"
  },
  {
    day: "Day 3",
    date: "25-11-2026",
    time: "11:45 AM to 12:45 PM",
    speaker: "Dr. U. Pavani",
    designation: "QIC-Coordinator, RGUKT Nuzvid",
    topic: "Optimization using QAOA",
    photoUrl: "/images/speakers/u_pavani.png"
  },
  {
    day: "Day 4",
    date: "26-11-2026",
    time: "1:30 PM to 2:30 PM",
    speaker: "Mr. S V Sai Prasad",
    designation: "IBM-Project Guide, JNTUK",
    topic: "Beyond Classical Computing: Exploring Q-bits, Quantum gates and Quantum circuits using Qiskit",
    photoUrl: "/images/speakers/sai_prasad.png"
  },
  {
    day: "Day 5",
    date: "27-11-2026",
    time: "11:00 AM to 12:00 Noon",
    speaker: "Dr. Varsha Sambhaje",
    designation: "Assistant Professor, Quantum Technology, SRM University-AP",
    topic: "Applications of Quantum Technologies",
    photoUrl: "/images/speakers/varsha_sambhaje.jpg"
  },
  {
    day: "Day 6",
    date: "28-11-2026",
    time: "11:00 AM to 12:00 Noon",
    speaker: "Mr. Naga Sai Durga Nagesh",
    designation: "Founder, MD & CTO – SIA Software Innovation Pvt Ltd",
    topic: "Quantum Key Distribution",
    photoUrl: "/images/speakers/durga_nagesh.jpg"
  }
];

export interface EventDetailItem {
  label: string;
  value: string;
}

export interface EventCardType {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: "Presentation" | "Landmark" | "Lightbulb" | "Sparkles";
  date?: string;
  mode?: string;
  venue?: string;
  chiefGuest?: {
    name: string;
    designation: string;
  };
  eligibility?: string;
  isSchedule?: boolean;
}

export const eventCardsData: EventCardType[] = [
  {
    id: "inauguration",
    title: "Inauguration of Quantum Innovation Centre",
    description:
      "Official inauguration of the state-of-the-art Quantum Innovation Centre at Dr. RVR & NRI Institute of Technology, marking a transformative leap in quantum computing education, cutting-edge research, and industry collaboration.",
    tag: "Campus Inauguration",
    iconName: "Landmark",
    date: "23 November 2026",
    venue: "Dr. RVR & NRI Institute of Technology (University Campus)",
    chiefGuest: {
      name: "Dr. Raavi Venkata Rao",
      designation: "Chancellor, Dr. RVR & NRI Institute of Technology – Deemed to be University",
    },
  },
  {
    id: "guest-lectures",
    title: "Guest Lectures",
    description:
      "A prestigious 6-day online lecture series featuring renowned IBM researchers, academic professors, and industry leaders exploring quantum theory, Qiskit algorithms, cryptography, and real-world quantum technologies.",
    tag: "Online Lecture Series • 23-28 Nov 2026",
    iconName: "Presentation",
    date: "23 November 2026 to 28 November 2026",
    mode: "Virtual Only (Online)",
    isSchedule: true,
  },
  {
    id: "ideathon",
    title: "Ideathon",
    description:
      "Brainstorm, collaborate, and design innovative quantum computing applications and algorithm concepts to tackle real-world global challenges using Qiskit.",
    tag: "Online Competition",
    iconName: "Lightbulb",
    date: "28 November 2026",
    mode: "Virtual Only",
  },
  {
    id: "project-expo",
    title: "Project Expo",
    description:
      "An exclusive platform designed to showcase creative quantum science, hardware prototypes, and computing projects built by budding young minds.",
    tag: "School Level Showcase",
    iconName: "Sparkles",
    date: "30 November 2026",
    eligibility: "Only for In-School Students",
  },
];

export interface AgendaItemType {
  time: string;
  title: string;
  speakerOrRole: string;
  category: "Ceremony" | "Keynote" | "Workshop" | "Break" | "Showcase" | "Competition";
}

export const agendaData: AgendaItemType[] = [
  {
    time: "10:00 AM",
    title: "Inauguration & Welcome Address",
    speakerOrRole: "Organizing Committee & University Leadership",
    category: "Ceremony",
  },
  {
    time: "10:30 AM",
    title: "Keynote: The Future of Quantum Computing",
    speakerOrRole: "Industry Expert & Quantum Researcher",
    category: "Keynote",
  },
  {
    time: "11:30 AM",
    title: "Hands-on Workshop with Qiskit",
    speakerOrRole: "Technical Session & Mentors",
    category: "Workshop",
  },
  {
    time: "01:00 PM",
    title: "Networking & Lunch Break",
    speakerOrRole: "Campus Dining Hall & Lounge",
    category: "Break",
  },
  {
    time: "02:00 PM",
    title: "Student Project Showcase",
    speakerOrRole: "Selected Participant Teams",
    category: "Showcase",
  },
  {
    time: "03:00 PM",
    title: "Quantum Challenge & Panel Discussion",
    speakerOrRole: "Experts Panel & Quantum Judges",
    category: "Competition",
  },
  {
    time: "04:00 PM",
    title: "Valedictory & Closing Remarks",
    speakerOrRole: "Organizing Committee & Prize Distribution",
    category: "Ceremony",
  },
];

export interface SpeakerType {
  id: string;
  name: string;
  designation: string;
  organization: string;
  topic: string;
  avatarUrl: string;
}

export const speakersData: SpeakerType[] = [
  {
    id: "spk-1",
    name: "Dr. Ananya Sharma",
    designation: "Principal Quantum Scientist",
    organization: "Quantum Research Labs",
    topic: "Scalable Fault-Tolerant Quantum Architectures",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=faces",
  },
  {
    id: "spk-2",
    name: "Prof. Rajesh Varma",
    designation: "Professor of Computer Science",
    organization: "NRI Institute of Technology",
    topic: "Quantum Information Theory & Quantum Algorithms",
    avatarUrl: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=faces",
  },
  {
    id: "spk-3",
    name: "Kavita Ramanathan",
    designation: "Lead Qiskit Developer",
    organization: "Quantum Software Consortium",
    topic: "Building Real-World Applications with Qiskit 1.0+",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=faces",
  },
  {
    id: "spk-4",
    name: "Dr. Vikramaditya Rao",
    designation: "Quantum AI Researcher",
    organization: "NextGen Quantum Initiative",
    topic: "Quantum Machine Learning: Hype vs Reality",
    avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=faces",
  },
];

export interface OrganizerGroupType {
  title: string;
  description: string;
  members: string[];
}

export const organizersData: OrganizerGroupType[] = [
  {
    title: "Organizing Committee",
    description: "Guiding the conference vision, university alignment, and institutional excellence.",
    members: ["Dr. C. Naga Bhaskar (Patron)", "Dr. R. Venkat Rao (General Chair)", "Conference Advisory Council"],
  },
  {
    title: "Faculty Coordinators",
    description: "Directing academic tracks, workshop pedagogy, and research poster evaluations.",
    members: ["Dr. D. Suneetha", "Prof. K. Sandeep", "Prof. M. Lakshmi Prasanna"],
  },
  {
    title: "Technical Team",
    description: "Managing cloud computing infrastructure, Qiskit environments, and virtual streams.",
    members: ["Quantum Systems Lab", "Campus Tech Team", "Cloud Infrastructure Group"],
  },
  {
    title: "Student Coordinators",
    description: "Driving participant engagement, community support, registration desks, and logistics.",
    members: ["NRI Quantum Club Leads", "Student Council", "Hackathon Volunteers"],
  },
];

export interface FAQItemType {
  question: string;
  answer: string;
}

export const faqData: FAQItemType[] = [
  {
    question: "What is Qiskit Fall Fest 2026?",
    answer:
      "Qiskit Fall Fest 2026 is a university-hosted quantum computing festival organized by Dr. RVR NRI Institute of Technology Deemed to be University in partnership with the global Qiskit community. It features a 6-day online guest lecture series, the inauguration of the Quantum Innovation Centre, an online Ideathon, and an in-person school Project Expo.",
  },
  {
    question: "Who can attend?",
    answer:
      "The event is open to undergraduate and postgraduate students, researchers, faculty members, school students (for Project Expo), software developers, and quantum enthusiasts from any academic institution or organization.",
  },
  {
    question: "Is the event free?",
    answer:
      "Yes! Participation in Qiskit Fall Fest 2026 is completely free of charge. Registration in advance is required.",
  },
  {
    question: "Do I need prior quantum computing knowledge?",
    answer:
      "No prior quantum computing experience is required. Sessions start from introductory fundamentals (such as Qiskit 101) to help beginners build understanding before exploring more advanced concepts.",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes. All registered attendees who actively participate in the sessions, ideathon, or expo tracks will receive official certificates of participation co-branded by NRI Institute of Technology.",
  },
  {
    question: "Is the event online or offline?",
    answer:
      "Qiskit Fall Fest 2026 is conducted in a **Hybrid Mode** featuring both virtual and in-person events:\n\n• **Online Events (Virtual Only):** The **6-Day Guest Lecture Series** (23–28 November 2026) featuring global researchers & experts, and the **Ideathon** (28 November 2026) are conducted virtually online.\n\n• **Offline Events (On-Campus):** The **Inauguration of the Quantum Innovation Centre** (23 November 2026) and the **Project Expo** (30 November 2026, for in-school students) are held in-person on campus at Dr. RVR NRI Institute of Technology Deemed to be University.",
  },
  {
    question: "Where will the in-person events be held?",
    answer:
      "The on-campus sessions will take place at the University Campus & Quantum Innovation Centre, Dr. RVR NRI Institute of Technology Deemed to be University, Vijayawada, Andhra Pradesh.",
  },
  {
    question: "How can I register?",
    answer:
      "Click the **Register** button on this website and complete the registration form. Once submitted, you’ll be registered for the event.",
  },
];
