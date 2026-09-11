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
    "The premier quantum computing event for data science students and enthusiasts. Whether you are a student, researcher, or developer, join us to explore the frontiers of quantum technology.",
  date: "November 30, 2026",
  time: "10:00 AM – 4:00 PM IST",
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
    title: "Seminar",
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

export interface EventCardType {
  id: string;
  title: string;
  description: string;
  tag: string;
  iconName: "Landmark" | "Radio" | "Award" | "Lightbulb";
}

export const eventCardsData: EventCardType[] = [
  {
    id: "inauguration",
    title: "Inauguration of Quantum Innovation Centre",
    description:
      "Official inauguration of the Quantum Innovation Centre, marking a new milestone in quantum research, innovation, education, and industry collaboration.",
    tag: "Inauguration Event",
    iconName: "Landmark",
  },
  {
    id: "talks",
    title: "Seminar",
    description:
      "Gain insights from quantum computing experts on emerging technologies, real-world applications, quantum hardware, and the future of quantum innovation.",
    tag: "Keynote & Panel",
    iconName: "Radio",
  },
  {
    id: "showcase",
    title: "Student Project Showcase",
    description:
      "Explore innovative projects and research ideas developed by students, highlighting practical applications of quantum computing and Qiskit.",
    tag: "Innovation Track",
    iconName: "Award",
  },
  {
    id: "ideathon",
    title: "Ideathon",
    description:
      "Brainstorm, collaborate, and develop creative solutions to real-world challenges using quantum computing and Qiskit.",
    tag: "Ideation Event",
    iconName: "Lightbulb",
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
    members: ["Dr. D. Suneetha (HOD - CSE-DS)", "Prof. K. Sandeep", "Prof. M. Lakshmi Prasanna"],
  },
  {
    title: "Technical Team",
    description: "Managing cloud computing infrastructure, Qiskit environments, and virtual streams.",
    members: ["Quantum Systems Lab", "Campus Tech Team", "Cloud Infrastructure Group"],
  },
  {
    title: "Student Coordinators",
    description: "Driving participant engagement, community support, registration desks, and logistics.",
    members: ["NRI Quantum Club Leads", "Data Science Student Council", "Hackathon Volunteers"],
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
      "Qiskit Fall Fest 2026 is a university-hosted quantum computing event organized by Dr. RVR NRI Institute of Technology Deemed to be University in partnership with the global Qiskit community. It features the inauguration of the Quantum Innovation Centre, seminars from quantum leaders, a student project showcase, and an ideathon.",
  },
  {
    question: "Who can attend?",
    answer:
      "The event is open to undergraduate and postgraduate students, researchers, faculty members, software developers, and quantum enthusiasts from any academic institution or company.",
  },
  {
    question: "Is the event free?",
    answer:
      "Yes! Participation in Qiskit Fall Fest 2026 is completely free of charge. Registration in advance is required due to limited auditorium seating on campus.",
  },
  {
    question: "Do I need prior quantum computing knowledge?",
    answer:
      "No prior quantum computing experience is required. Basic familiarity with Python programming is helpful for the afternoon sessions, which start from foundational quantum circuits.",
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes. All registered attendees who participate in the event tracks and showcases will receive official certificates of participation co-branded by NRI Institute of Technology.",
  },
  {
    question: "Is the event online or offline?",
    answer:
      "Qiskit Fall Fest 2026 is conducted completely offline (in-person). All sessions, inauguration, seminars, project showcases, and the ideathon will take place live on-campus at Dr. RVR NRI Institute of Technology Deemed to be University in Vijayawada.",
  },
  {
    question: "Where will the event be held?",
    answer:
      "The in-person sessions will take place at the Main Auditorium & Quantum Innovation Labs, Dr. RVR NRI Institute of Technology Deemed to be University, Pothavarappadu, Agiripalli, Vijayawada, Andhra Pradesh.",
  },
  {
    question: "How can I register?",
    answer:
      "Click the **Register** button on this website and complete the registration form. Once submitted, you’ll be registered for the event.",
  },
];
