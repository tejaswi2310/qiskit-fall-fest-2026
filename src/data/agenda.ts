export type SessionType = 'talk' | 'workshop' | 'break' | 'networking' | 'closing' | 'opening';

export interface AgendaItem {
  id: string;
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  sessionType: SessionType;
  duration?: string;
}

export const agenda: AgendaItem[] = [
  {
    id: "guest-lecture",
    time: "",
    title: "Guest Lecture",
    description: "Expert insights into quantum technology and innovation.",
    sessionType: "talk"
  },
  {
    id: "project-expo",
    time: "",
    title: "Project Expo",
    description: "Showcasing innovative student projects and ideas.",
    sessionType: "networking"
  },
  {
    id: "ideathon",
    time: "",
    title: "Ideathon",
    description: "Turning creative ideas into solutions for real-world challenges.",
    sessionType: "workshop"
  },
  {
    id: "inauguration",
    time: "",
    title: "Quantum Innovation Centre Inauguration",
    description: "Launching a new hub for quantum innovation and learning.",
    sessionType: "closing"
  }
];
