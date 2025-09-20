export interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  stack: string;
  points: string[];
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  cgpa: string;
  details: string[];
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  date: string;
  description: string;
}

export const workExperience: WorkExperience[] = [
    {
    company: "Hyperverge.Inc",
    role: "Software Developer Intern",
    duration: "July 2025 – Present",
    stack: "React, Node.js, Nest.js, Express.js, Redux, Mongodb, Python, Webhooks, Docker, Terraform, AWS Cloud",
    points: [
      "Led efforts in building, developing, and releasing a Video KYC system across complex environments.",
      "Resolved frontend, backend, deployment, and infrastructure-related issues to ensure smooth operations.",
      "Authored technical specifications and implemented solutions, including system integrations and observability improvements.",
      "Investigated and debugged support queries by analyzing issues and delivering effective fixes."
    ]
  },
  {
    company: "Hyperverge.Inc",
    role: "Low Code Developer",
    duration: "Jan 2025 – July 2025",
    stack: "Web Components, Lit , Html, Css, Javascript, SQL, Metabase, Analytics",
    points: [
      "Worked on various KYC modules and developed reusable web components as a Low Code Developer.",
      "Designed and implemented dashboards and analytics for KYC modules using SQL and Metabase.",
      "Collaborated with cross-functional teams to deliver high-quality software solutions."
    ]
  },
  {
    company: "Hyperverge Academy",
    role: "Full Stack Developer Fellow",
    duration: "Aug 2023 – Feb 2024",
    stack: "MERN Stack, SDLC, Git, GitHub",
    points: [
      "Completed immersive full-stack development training.",
      "Actively participated in daily stand-ups and mentorship sessions.",
      "Contributed to collaborative, growth-oriented team projects."
    ]
  },
  {
    company: "Hydro Tribe",
    role: "Backend Development Intern",
    duration: "May 2023 – July 2023",
    stack: "Python, Django, REST APIs",
    points: [
      "Designed backend solutions with Django for CRUD & user authentication.",
      "Attended structured learning sessions covering OOP and advanced Django.",
      "Helped develop scalable systems for hydroponics management."
    ]
  }
];

export const education: Education[] = [
  {
    id: 1,
    institution: "Aditya College of Engineering",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science - IoT",
    duration: "Nov 2021 - May 2025",
    location: "Andhra Pradesh, India",
    cgpa: "8.09 / 10",
    details: [
      "Focused on Internet of Things (IoT) and emerging technologies",
      "Coursework includes Python, Machine Learning, Networks, and Systems",
      "Participated in Amazon ML School and selected as AI-ML Scholar (2023)"
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    name: "Google Associate Cloud Engineer",
    issuer: "Google",
    date: "2024",
    description: "Credential demonstrating proficiency in deploying and managing cloud solutions on GCP."
  },
  {
    id: 2,
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    date: "2024",
    description: "Certification in managing Azure identities, storage, governance, and virtual networks."
  },
  {
    id: 3,
    name: "IT Specialist: Python",
    issuer: "Certiport",
    date: "2023",
    description: "Validated core Python programming skills and understanding of logic and syntax."
  },
  {
    id: 4,
    name: "Nanodegree: AI Programming with Python",
    issuer: "Udacity",
    date: "Oct 2023 - Jan 2024",
    description: "Developed machine learning models and built deep learning foundations using PyTorch."
  }
];

export const nanodegree = {
  title: "Nanodegree in Full Stack Development",
  org: "Hyperverge Academy",
  duration: "2023 – 2024",
  highlights: [
    "Mastered frontend and backend development using MERN stack.",
    "Worked on real-world capstone projects under mentorship.",
    "Practiced Agile, Git workflows, and deployment strategies."
  ]
};
