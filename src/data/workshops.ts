export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';

export interface Workshop {
  id: string;
  title: string;
  level: SkillLevel;
  duration: string;
  description: string;
  learningOutcomes: string[];
  prerequisites: string[];
  toolsRequired: string[];
  ctaUrl?: string;
  ctaText?: string;
}

// Workshops are currently TBD. When confirmed, add items here to populate the premium workshop cards.
export const workshops: Workshop[] = [];
