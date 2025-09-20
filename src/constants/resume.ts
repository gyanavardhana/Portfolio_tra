export interface ResumeHighlight {
  title: string;
  description: string;
  icon: string;
}

export interface ResumeCertification {
  name: string;
  issuer: string;
}

export const resumeHighlights: ResumeHighlight[] = [
    {
    title: "Full Stack Developer",
    description: "Experienced in building scalable applications across React, React Native, Node.js, and Python with strong expertise in databases like PostgreSQL and MongoDB.",
    icon: "Cpu"
  },
  {
    title: "DevOps & Cloud Engineer",
    description: "Hands-on with Docker, Terraform, CI/CD pipelines, and cloud platforms (AWS, GCP) to streamline deployments, improve observability, and ensure reliability.",
    icon: "Database"
  },
  {
    title: "Full Stack Problem Solver",
    description: "Delivering features end-to-end across frontend (React, Next.js) and backend (Node.js, Prisma, Drizzle) with real-time validation, reporting, and UX polish.",
    icon: "Code"
  }
];

export const resumeCertifications: ResumeCertification[] = [
  {
    name: "Google Associate Cloud Engineer",
    issuer: "Google"
  },
  {
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft"
  },
  {
    name: "IT Specialist: Python",
    issuer: "Certiport"
  }
];
