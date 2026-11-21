export type OrganizerRole =
  | 'Lead Organizer'
  | 'Co-Organizer'
  | 'Lead Organizer (Faculty)'
  | 'Co-Organizer (Faculty)'
  | 'Co-Organizer (Student)'
  | 'Volunteer'
  | 'Team Member'
  | 'Host Organization'
  | string;

export interface Organizer {
  id: string;
  name: string;
  role: OrganizerRole;
  affiliation?: string;
  contact?: string;
  photoUrl?: string;
  initial?: string;
}

export const organizerTeam: Organizer[] = [
  // Faculty Organizers
  {
    id: "dr-adilakshmi-gorantla",
    name: "Dr. Adilakshmi Gorantla",
    role: "Lead Organizer (Faculty)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    contact: "+91 99853 98080",
    initial: "A"
  },
  {
    id: "dr-shobana-gorintla",
    name: "Dr. Shobana Gorintla",
    role: "Co-Organizer (Faculty)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    contact: "+91 89854 23344",
    initial: "S"
  },
  {
    id: "mrs-aruna-vipparla",
    name: "Mrs. Aruna Vipparla",
    role: "Co-Organizer (Faculty)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    contact: "+91 90009 82182",
    initial: "A"
  },
  {
    id: "dr-swathi-raparla",
    name: "Dr. Swathi Raparla",
    role: "Co-Organizer (Faculty)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    contact: "+91 97030 74790",
    initial: "S"
  },
  {
    id: "mr-b-phanindra-kumar",
    name: "Mr. B. Phanindra Kumar",
    role: "Co-Organizer (Faculty)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    contact: "+91 90142 60174",
    initial: "B"
  },
  {
    id: "dr-j-naga-surekha",
    name: "Dr. J. Naga Surekha",
    role: "Co-Organizer (Faculty)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    contact: "+91 83749 62918",
    initial: "J"
  },
  // Student Organizers
  {
    id: "gelli-tejaswi-venkata-aparna",
    name: "Gelli Tejaswi Venkata Aparna",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY",
    initial: "G"
  },
  {
    id: "shaik-munthaz",
    name: "Shaik Munthaz",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY",
    initial: "S"
  },
  {
    id: "k-naga-surendra",
    name: "K. Naga Surendra",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY",
    initial: "K"
  },
  {
    id: "k-sreevarshini",
    name: "K. Sreevarshini",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY",
    initial: "K"
  },
  {
    id: "atchutha-teja-bharathi",
    name: "Atchutha Teja Bharathi",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    initial: "A"
  },
  {
    id: "kadali-raghava-satya-sai-rajesh",
    name: "Kadali Raghava Satya Sai Rajesh",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    initial: "K"
  },
  {
    id: "peketi-hemanth-kumar",
    name: "Peketi Hemanth Kumar",
    role: "Co-Organizer (Student)",
    affiliation: "Dr. RVR NRI Institute of Technology - Deemed to be University",
    initial: "P"
  }
];

export const organizers = {
  host: "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY",
  primaryContact: "+91 99853 98080",
  affiliation: "Dr. RVR NRI INSTITUTE OF TECHNOLOGY - DEEMED TO BE UNIVERSITY",
};


