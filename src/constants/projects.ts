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
    title: "PYRO (Predictive Maintenance and Risk Operations)",
    description: "A product maintenance prediction system with user management, product data upload, ML-based predictions, durability leaderboard, and email alerts for low-performing products. Features a comprehensive UI and detailed documentation.",
    image: "uploads/Pyro.png",
    tags: [
      "Python",
      "ReactJS",
      "Express.js",
      "Machine Learning",
      "Leaderboard",
      "Email Alerts",
      "Flask"
    ],
    code: "https://github.com/gyanavardhana/Pyro",
    live: "https://pyro-chi.vercel.app/",
    category: "web"
  },
    {
    id: 2,
    title: "City Sphere",
    description:
      "An intelligent city management system leveraging AI to optimize urban planning, traffic management, and resource allocation. Features real-time data processing, predictive analytics, and smart city solutions.",
    image: "uploads/CitySphere.png",
    tags: [
      "React.js",
      "Express.js",
      "Google Maps",
      "Vertex AI",
      "Analytics",
      "Tailwind",
      "GCP",
    ],
    code: "https://github.com/gyanavardhana/City-ai",
    live: "https://city-ai-ten.vercel.app/",
    category: "web",
  },
  {
    id: 3,
    title: "Well BEE Health Platform",
    description:
      "Developed a scalable health platform supporting up to 1,000 users with therapy bots, Fitbit integration, and health tips. Includes anonymous group chat with sentiment analysis and detailed documentation for onboarding.",
    image: "uploads/WellBee.png",
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
      "Sentiment Analysis",
      "FastAPI"
    ],
    code: "https://github.com/gyanavardhana/WELLBEE",
    live: "https://wellbee-jade.vercel.app/",
    category: "web",
  },
];


export const allProjects: Project[] = [
  {
    id: 1,
    title: "PYRO (Predictive Maintenance and Risk Operations)",
    description:
      "A product maintenance prediction system with user management, product data upload, ML-based predictions, durability leaderboard, and email alerts for low-performing products. Features a comprehensive UI and detailed documentation.",
    image: "uploads/Pyro.png",
    tags: [
      "Python",
      "ReactJS",
      "Express.js",
      "Machine Learning",
      "Leaderboard",
      "Email Alerts",
      "Flask"
    ],
    code: "https://github.com/gyanavardhana/Pyro",
    live: "https://pyro-chi.vercel.app/",
    category: "web",
  },
  {
    id: 2,
    title: "City Sphere",
    description:
      "An intelligent city management system leveraging AI to optimize urban planning, traffic management, and resource allocation. Features real-time data processing, predictive analytics, and smart city solutions.",
    image: "uploads/CitySphere.png",
    tags: [
      "React.js",
      "Express.js",
      "Google Maps",
      "Vertex AI",
      "Analytics",
      "Tailwind",
      "GCP",
    ],
    code: "https://github.com/gyanavardhana/City-ai",
       live: "https://city-ai-ten.vercel.app/",
    category: "web",
  },
  {
    id: 3,
    title: "Well BEE Health Platform",
    description:
      "Developed a scalable health platform supporting up to 1,000 users with therapy bots, Fitbit integration, and health tips. Includes anonymous group chat with sentiment analysis and detailed documentation for onboarding.",
    image: "uploads/WellBee.png",
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
      "Sentiment Analysis",
      "FastAPI"
    ],
    code: "https://github.com/gyanavardhana/WELLBEE",
    live: "https://wellbee-jade.vercel.app/",
    category: "web",
  },
  {
    id: 4,
    title: "CoLab Pro",
    description:
      "A collaborative platform with CI/CD, sockets, project hub, and DevOps integration. Built using MERN, Docker, Prometheus, and GitHub Actions.",
    image: "uploads/ColabPro.png",
    tags: ["MERN", "Docker", "CI/CD", "Sockets", "Prometheus"],
    code: "https://github.com/gyanavardhana/ColabPro",
    live: "https://colab-pro.vercel.app/",
    category: "web",
  },
  {
    id: 5,
    title: "Job Search Application",
    description:
      "A job search platform designed to connect job seekers with ideal opportunities and recruiters with top talent. Supports browsing and applying for listings, managing applications, resume parsing, intelligent recommendations, and posting detailed openings with descriptions and PDFs.",
    image: "uploads/job_search.png",
    tags: ["EJS", "Tailwind", "Node.js", "MongoDB", "Authentication"],
    code: "https://github.com/gyanavardhana/Job-search-application",
    category: "web",
  },
  {
    id: 6,
    title: "ML Workflow for Scones Unlimited (AWS)",
    description:
      "Image classification system using DenseNet-169, PyTorch, and AWS pipeline (S3, SageMaker). Achieved 90% test accuracy.",
    image: "uploads/Aws.png",
    tags: ["AWS", "PyTorch", "SageMaker", "Machine Learning"],
    code: "https://github.com/gyanavardhana/ML-Workflow-For-Scones-On-AWS-SageMaker",
    category: "ai",
  },
  {
    id: 7,
    title: "StreamHub",
    description:
      "A high-performance live streaming servßer built with WebRTC and real-time communication protocols. Supports multiple concurrent streams, adaptive bitrate streaming, and low-latency broadcasting.",
    image: "uploads/StreamHub.png",
    tags: ["WebRTC", "Node.js", "Streaming", "Real-time", "WebSocket", "PeerJS"],
    code: "https://github.com/gyanavardhana/Live_Streaming_Server",
    category: "web",
  },
  {
    id: 8,
    title: "Expense Tracker",
    description:
      "Full-stack expense management application with intuitive UI for tracking personal finances. Features expense categorization, budget planning, data visualization, and comprehensive financial reporting.",
    image: "uploads/Expense_Tracker.png",
    tags: ["React Native", "Expo", "PostgreSQL", "JWT", "Data Visualization"],
    code: "https://github.com/gyanavardhana/Expense_Tracker",
    category: "mobile",
  },
  {
    id: 9,
    title: "Expense Tracker Backend",
    description:
      "Robust backend service for the expense tracker application. Implements RESTful APIs, user authentication, data validation, and comprehensive testing with Spring Boot and modern Java practices.",
    image: "uploads/Expense_Tracker_Backend.png",
    tags: ["Spring Boot", "Java", "MongoDB", "JWT", "REST APIs"],
    code: "https://github.com/gyanavardhana/Expense_Tracker_Backend",
    live: "https://expense-tracker-backend-d7jr.onrender.com/swagger-ui/index.html#/",
    category: "mobile",
  },
  {
    id: 10,
    title: "Handwritten Digits Classifier",
    description:
      "Deep learning model for recognizing handwritten digits using convolutional neural networks. Features data augmentation, model optimization, and high accuracy classification with visualization tools.",
    image: "uploads/hand_written_classifer.png",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision", "Deep Learning"],
    code: "https://github.com/gyanavardhana/Handwritten-Digits-Classifier",
    category: "ai",
  },
  {
    id: 11,
    title: "Landmark Classification for Social Media",
    description:
      "AI-powered landmark recognition system for social media platforms. Automatically identifies and tags famous landmarks in user-uploaded images, enhancing social media experience with location-based features.",
    image: "uploads/spark.png",
    tags: [
      "Computer Vision",
      "Python",
      "CNN",
      "Social Media",
      "Image Recognition",
    ],
    code: "https://github.com/gyanavardhana/Landmark-Classification-Tagging-for-Social-Media",
    category: "ai",
  },
];


export const projectCategories = [
  { id: "all", name: "All Projects" },
  { id: "web", name: "Web Development" },
  { id: "ai", name: "AI & ML" },
  { id: "mobile", name: "Mobile"}
];
