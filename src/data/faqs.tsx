export interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const faqs = [
  {
    question: "Do I need prior quantum experience?",
    answer: "No prior experience is required! Qiskit Fall Fest is highly welcoming to beginners and provides foundational sessions to help you get started.",
  },
  {
    question: "Who can attend?",
    answer: "The event is welcoming to students, developers, researchers, educators, quantum enthusiasts, and beginners.",
  },
  {
    question: "Is the event free?",
    answer: "Details will be announced soon.",
  },
  {
    question: "Do I need a laptop?",
    answer: "Details will be announced soon.",
  },
  {
    question: "Will I receive a certificate?",
    answer: "Details will be announced soon.",
  },
  {
    question: "Where is the event held (Online or Offline)?",
    answer: "Qiskit Fall Fest 2026 is conducted in hybrid mode. The Inauguration (23 Nov), 6-Day Guest Lecture Series (23-28 Nov), and Ideathon (28 Nov) are virtual (online), while the School Project Expo (30 Nov) is conducted in-person on campus at Dr.RVR NRI Institute of Technology Deemed to be University, Agiripalli.",
  },
  {
    question: "How can I register?",
    answer: (
      <>
        Click the <strong className="font-bold text-white">Register</strong> button on this website and complete the registration form. Once submitted, you’ll be registered for the event.
      </>
    ),
  },
];
