export interface Speaker {
  id: string;
  name: string;
  role: string;
  organization?: string;
  talkTitle?: string;
  photoUrl?: string;
  linkedinUrl?: string;
}

export const speakers: Speaker[] = [];
