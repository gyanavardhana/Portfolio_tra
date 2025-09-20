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
  { name: "Docker", proficiency: 80 },
  { name: "Kubernetes", proficiency: 70 },
  { name: "AWS", proficiency: 75 },
  { name: "CI/CD", proficiency: 80 },
  { name: "Git", proficiency: 85 },
  { name: "Machine Learning", proficiency: 70 },
  { name: "Next.js", proficiency: 65 }
];

export const skills: SkillCategory[] = [
  { name: "Python", level: "Advanced" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "Node.js", level: "Advanced" },
  { name: "Docker", level: "Advanced" },
  { name: "Kubernetes", level: "Intermediate" },
  { name: "AWS", level: "Intermediate" },
  { name: "CI/CD", level: "Advanced" },
  { name: "Git", level: "Advanced" },
  { name: "PostgreSQL", level: "Intermediate" }
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
