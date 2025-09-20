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
    title: "Backend Integration Specialist",
    description: "Led and built scalable backend services integrating SAP and internal systems using PostgreSQL, Drizzle ORM, and REST APIs.",
    icon: "Database"
  },
  {
    title: "Promotion Engine Developer",
    description: "Developed dynamic promotion and incentive systems handling slabs, schemes, and achievements using advanced SQL and business logic.",
    icon: "Cpu"
  },
  {
    title: "Full Stack Problem Solver",
    description: "Delivering features end-to-end across frontend (React, Next.js) and backend (Node.js, Drizzle) with real-time validation, reporting, and UX polish.",
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
