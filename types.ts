
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number; icon?: string }[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  logo?: string;
}

export interface StudioMetric {
  name: string;
  value: number;
}
