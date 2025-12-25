import { Profile } from "../types/profile";

export const profile: Profile = {
  name: "Miriyala Sai Dhanunjai",
  role: "Software Test Engineer",
  summary:
    "Software Test Engineer with 3.6 years of experience in automation, testing, and AI-assisted development.",

  about: [
    "Software Test Engineer with strong automation background.",
    "Experienced in Selenium, Playwright, API & AI-driven workflows."
  ],

  skills: [
    { key: "java", label: "Java", level: "advanced" },
    { key: "selenium", label: "Selenium", level: "advanced" },
    { key: "playwright", label: "Playwright", level: "intermediate" },
    { key: "api", label: "API Testing", level: "advanced" },
    { key: "sql", label: "SQL", level: "intermediate" },
    { key: "ai", label: "AI Prompt Engineering", level: "advanced" }
  ],

  projects: [
    {
      title: "Automation Framework",
      description: "Hybrid automation framework using Selenium & Playwright",
      tech: ["Java", "Selenium", "Playwright"],
      github: "https://github.com/yourrepo",
      category: "automation"
    },
    {
      title: "Portfolio Builder SaaS",
      description: "Template-based portfolio builder using Next.js",
      tech: ["Next.js", "TypeScript", "Tailwind"],
      category: "web"
    }
  ]
};
