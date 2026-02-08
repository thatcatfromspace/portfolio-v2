// Work experience data

export interface Experience {
  role: string;
  company: string;
  period: string;
  current?: boolean;
  url?: string;
}

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Unbound Security",
    period: "Starting Apr 2026",
    current: true,
    url: "https://getunbound.ai/",
  },
  {
    role: "Data & AI Consultant - Intern",
    company: "Thorogood Associates",
    period: "May 2025 - Nov 2025",
    url: "https://www.thorogood.com/",
  },
  {
    role: "Full Stack Engineer",
    company: "EnggOps",
    period: "Jun 2024 - Dec 2024",
    url: "https://enggops.com/",
  },
];
