export const content = {
  name: "Dinesh Veluswamy",
  role: "Full Stack Developer & DevOps Engineer",
  
  headline: "I engineer reliable solutions that last.",
  
  statement: "I bring hands-on experience in both building end-to-end applications and managing the infrastructure that powers them. I focus on delivering practical, maintainable solutions.",

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
    date: "Present",
    text: "Academic semester. Pre-final year.",
    current: true,
    type: "break",
  },
  {
    date: "Jul 2025",
    text: "Migrated Elastic Beanstalk to ECS. Made CI/CD pipelines less painful. Worked on driving DevOps for a new internal application.",
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
