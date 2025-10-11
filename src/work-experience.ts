type workExperienceType = Array<{
  role: string;
  company: string;
  period: string;
  description: string;
}>;

export const workExperience: workExperienceType = [
  {
    role: "Data & AI Consultant, Intern",
    company: "Thorogood Associates",
    period: "May 2025 - Present",
    description:
      "Worked in migrating applications from AWS Elastic Beanstalk to ECS, implemented GitHub Actions for CI/CD and worked on modernizing internal tools using React.",
  },
  {
    role: "Full Stack Engineer",
    company: "EnggOps",
    period: "Jun 2024 - Dec 2024",
    description:
      "Worked on a B2B analytics application, created data visualization libraries in React, built CI/CD pipelines for scaling deployment.",
  },
];
