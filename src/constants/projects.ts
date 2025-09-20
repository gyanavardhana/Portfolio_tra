export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  code: string;
  live?: string;
  category: string;
}

export const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Well BEE Health Platform",
    description: "Developed a scalable health platform supporting up to 1,000 users with therapy bots, Fitbit integration, and health tips. Includes anonymous group chat with sentiment analysis and detailed documentation for onboarding.",
    image: "uploads/wellbee.svg",
    tags: [
      "ReactJS",
      "NodeJS", 
      "ExpressJS",
      "PostgresSQL",
      "Postman",
      "Gemini",
      "Vultr",
      "Docker",
      "Fitbit API"
    ],
    code: "https://github.com/Viswesh934/WELLBEE",
    live: "https://wellbee-jade.vercel.app/",
    category: "web"
  },
  {
    id: 2,
    title: "PYRO (Predictive Maintenance and Risk Operations)",
    description: "A product maintenance prediction system with user management, product data upload, ML-based predictions, durability leaderboard, and email alerts for low-performing products. Features a comprehensive UI and detailed documentation.",
    image: "uploads/Pyro.png",
    tags: [
      "Python",
      "ReactJS",
      "Machine Learning",
      "Leaderboard",
      "Email Alerts",
      "User Management",
      "API",
      "Documentation"
    ],
    code: "https://github.com/Viswesh934/PYRO",
    live: "https://pyro-chi.vercel.app/",
    category: "web"
  },
  {
    id: 3,
    title: "ML Workflow for Scones Unlimited (AWS)",
    description: "Image classification system using DenseNet-169, PyTorch, and AWS pipeline (S3, SageMaker). Achieved 90% test accuracy.",
    image: "uploads/Aws.png",
    tags: ["AWS", "PyTorch", "SageMaker", "Machine Learning"],
    code: "https://github.com/Viswesh934/ML-workflow-for-Scones-Unlimited-AWS",
    category: "ai"
  }
];

export const allProjects: Project[] = [
  {
    id: 1,
    title: "CoLab Pro",
    description: "A collaborative platform with CI/CD, sockets, project hub, and DevOps integration. Built using MERN, Docker, Prometheus, and GitHub Actions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    tags: ["MERN", "Docker", "CI/CD", "Sockets", "Prometheus"],
    code: "https://github.com/gyanavardhana/Project-Management-Collaboration",
    live: "https://colab-pro.vercel.app/",
    category: "web"
  },
  {
    id: 2,
    title: "Event Management System",
    description: "Real-time event management app for users and admins. Features include event scheduling, deletion, analytics, and Jest-based unit tests.",
    image: "uploads/Event.jpeg",
    tags: ["Node.js", "MongoDB", "EJS", "Tailwind", "Jest"],
    code: "https://github.com/Viswesh934/Event-Management-System",
    category: "web"
  },
  {
    id: 3,
    title: "Well BEE Health Platform",
    description: "Developed a scalable health platform supporting up to 1,000 users with therapy bots, Fitbit integration, and health tips. Includes anonymous group chat with sentiment analysis and detailed documentation for onboarding.",
    image: "uploads/wellbee.svg",
    tags: [
      "ReactJS",
      "NodeJS",
      "ExpressJS", 
      "PostgresSQL",
      "Postman",
      "Gemini",
      "Vultr",
      "Docker",
      "Fitbit API",
      "Sentiment Analysis"
    ],
    code: "https://github.com/Viswesh934/WELLBEE",
    live: "https://wellbee-jade.vercel.app/",
    category: "web"
  },
  {
    id: 4,
    title: "PYRO (Predictive Maintenance and Risk Operations)",
    description: "A product maintenance prediction system with user management, product data upload, ML-based predictions, durability leaderboard, and email alerts for low-performing products. Features a comprehensive UI and detailed documentation.",
    image: "uploads/Pyro.png",
    tags: [
      "Python",
      "ReactJS",
      "Machine Learning",
      "Leaderboard",
      "Email Alerts",
      "User Management",
      "API",
      "Documentation"
    ],
    code: "https://github.com/Viswesh934/PYRO",
    live: "https://pyro-chi.vercel.app/",
    category: "web"
  },
  {
    id: 5,
    title: "ML Workflow for Scones Unlimited (AWS)",
    description: "Image classification system using DenseNet-169, PyTorch, and AWS pipeline (S3, SageMaker). Achieved 90% test accuracy.",
    image: "uploads/Aws.png",
    tags: ["AWS", "PyTorch", "SageMaker", "Machine Learning"],
    code: "https://github.com/Viswesh934/ML-workflow-for-Scones-Unlimited-AWS",
    category: "ai"
  }
];

export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "ai", name: "AI & ML" }
];
