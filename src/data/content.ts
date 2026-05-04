export const content = {
  name: "Dinesh Veluswamy",
  role: "Software & Devops Engineer ",
  
  headline: "I engineer reliable solutions that last.",
  
  statement: "I enjoy solving practical problems, building cool stuff and learning by doing.",

  contactEmail: "dineshveluswamy@gmail.com",
  
  links: {
    github: "https://github.com/thatcatfromspace",
    linkedin: "https://linkedin.com/in/dineshveluswamy",
    twitter: "https://x.com/kittensonketo",
    blog: "https://dinesh-veluswamy-blog.vercel.app",
  },

  resumeUrl: "/dinesh-tv-resume.pdf",
} as const;

export interface TimelineEntry {
  date: string;
  text: string; 
  current?: boolean;
  type?: "work" | "break";
}

export const timeline: TimelineEntry[] = [
  {
    date: "May 2026 - Present",
    text: "Joined Unbound Security as a software engineering intern.",
    current: true,
    type: "work",
  },
  {
    date: "Dec 2025 - Apr 2026",
    text: "Academic semester. Pre-final year.",
    type: "break",
  },
  {
    date: "Jul 2025",
    text: "Migrated Elastic Beanstalk to ECS. Made CI/CD pipelines fully automated from requiring manual intervention.",
    type: "work",
  },
  {
    date: "May 2025",
    text: "Joined Thorogood Associates.",
    type: "work",
  },
  {
    date: "Dec 2024 - Apr 2025",
    text: "Academic semester. 3rd year coursework.",
    type: "break",
  },
  {
    date: "Nov 2024",
    text: "Wrapped up at EnggOps. Shipped the core analytics dashboard to production.",
    type: "work",
  },
  {
    date: "Jun 2024",
    text: "Joined EnggOps. Worked on building the frontend implementation and deployment pipelines.",
    type: "work",
  },
];
