export interface Skill {
  name: string;
  proficiency: number;
  level?: string;
}

export interface SkillCategory {
  name: string;
  level: string;
}

export const techStack: Skill[] = [
  { name: "JavaScript", proficiency: 90 },
  { name: "Python", proficiency: 85 },
  { name: "React.js", proficiency: 80 },
  { name: "Node.js", proficiency: 75 },
  { name: "AWS", proficiency: 60 },
  { name: "Machine Learning", proficiency: 70 },
  { name: "CI/CD", proficiency: 65 },
  { name: "Docker", proficiency: 70 },
  { name: "Git", proficiency: 80 },
  { name: "Tailwind CSS", proficiency: 75 },
  { name: "Next.js", proficiency: 65 }
];

export const skills: SkillCategory[] = [
  { name: "Python", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Next.js", level: "Intermediate" },
  { name: "TRPC", level: "Intermediate" },
  { name: "Machine Learning (PyTorch)", level: "Intermediate" },
  { name: "PostgreSQL", level: "Intermediate" },
  { name: "REST APIs", level: "Intermediate" },
  { name: "Git", level: "Advanced" }
];

export const courseHighlights = [
  "Data Structures and Algorithms",
  "Artificial Intelligence",
  "Machine Learning",
  "Cloud Computing",
  "IoT Systems & Sensors",
  "Computer Networks",
  "Operating Systems",
  "Database Management Systems",
  "Web Technologies",
  "Software Engineering"
];

export const softSkills = [
  "Proactive communication",
  "Systematic debugging",
  "Team-first attitude",
  "Rapid problem-solving",
  "Adaptability in fast-paced environments",
  "Clear documentation and technical writing"
];
