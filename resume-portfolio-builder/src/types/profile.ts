export type SkillLevel = "beginner" | "intermediate" | "advanced";

export interface Skill {
  key: string;
  label: string;
  level: SkillLevel;
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  category: "automation" | "web" | "ai";
}

export interface Profile {
  name: string;
  role: string;
  summary: string;
  about: string[];
  skills: Skill[];
  projects: Project[];
}
