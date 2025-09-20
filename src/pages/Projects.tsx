import { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import ProjectCard from "@/components/ProjectCard";
import { 
  Bot, 
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart
} from "lucide-react";

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const projects = [
  {
    id: 1,
    title: "CoLab Pro",
    description: "A collaborative platform with CI/CD, sockets, project hub, and DevOps integration. Built using MERN, Docker, Prometheus, and GitHub Actions.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    tags: ["MERN", "Docker", "CI/CD", "Sockets", "Prometheus"],
    code: "https://github.com/gyanavardhana/Project-Management-Collaboration",
    live: "https://colab-pro.vercel.app/",
    category: "web",
  },
  {
    id: 2,
    title: "Event Management System",
    description: "Real-time event management app for users and admins. Features include event scheduling, deletion, analytics, and Jest-based unit tests.",
    image: "uploads/Event.jpeg",
    tags: ["Node.js", "MongoDB", "EJS", "Tailwind", "Jest"],
    code: "https://github.com/Viswesh934/Event-Management-System",
    live: "",
    category: "web",
  },
   {
    id: 4,
    title: "Well BEE Health Platform",
    description:
      "Developed a scalable health platform supporting up to 1,000 users with therapy bots, Fitbit integration, and health tips. Includes anonymous group chat with sentiment analysis and detailed documentation for onboarding.",
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
      "Sentiment Analysis",
    ],
    code: "https://github.com/Viswesh934/WELLBEE", 
    live: "https://wellbee-jade.vercel.app/", 
    category: "web",
  },
    {
    id: 5,
    title: "PYRO (Predictive Maintenance and Risk Operations)",
    description:
      "A product maintenance prediction system with user management, product data upload, ML-based predictions, durability leaderboard, and email alerts for low-performing products. Features a comprehensive UI and detailed documentation.",
    image: "uploads/Pyro.png",
    tags: [
      "Python",
      "ReactJS",
      "Machine Learning",
      "Leaderboard",
      "Email Alerts",
      "User Management",
      "API",
      "Documentation",
    ],
    code: "https://github.com/Viswesh934/PYRO", 
    live: "https://pyro-chi.vercel.app/", 
    category: "web",
  },

  {
    id: 6,
    title: "ML Workflow for Scones Unlimited (AWS)",
    description: "Image classification system using DenseNet-169, PyTorch, and AWS pipeline (S3, SageMaker). Achieved 90% test accuracy.",
    image: "uploads/Aws.png",
    tags: ["AWS", "PyTorch", "SageMaker", "Machine Learning"],
    code: "https://github.com/Viswesh934/ML-workflow-for-Scones-Unlimited-AWS",
    live: "", 
    category: "ai",
  }
];

  const getIcon = (category: string) => {
    switch (category) {
      case "ai":
        return Bot;
      case "web":
        return MonitorSmartphone;
      case "blockchain":
        return Database;
      case "iot":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" }
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-brand-purple mb-4">
              Portfolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="My Projects" once />
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-muted-foreground">
                Explore a collection of my recent work across various technologies and domains.
              </p>
            </div>
          </motion.div>

          {/* Filter and Search */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.1)" }}
            className="mb-12"
          >
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between glass-panel p-6 rounded-lg">
              {/* Category Filter */}
              <div className="flex items-center">
                <Filter className="mr-2 h-5 w-5 text-muted-foreground" />
                <span className="mr-4 text-sm font-medium">Filter:</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map(category => (
                    <motion.button
                      key={category.id}
                      onClick={() => setFilter(category.id)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                        filter === category.id 
                          ? "bg-teal-500 text-white" 
                          : "bg-secondary hover:bg-secondary/80 text-muted-foreground"
                      }`}
                    >
                      {category.name}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Search */}
              <div className="relative w-full md:w-64">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="w-4 h-4 text-muted-foreground" />
                </div>
                <motion.input
                  type="text"
                  className="w-full py-2 pl-10 pr-4 bg-secondary rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-purple"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{ boxShadow: "0 0 0 3px rgba(155, 135, 245, 0.3)" }}
                />
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={Array.isArray(project.title) ? project.title.join(", ") : project.title}
                  description={Array.isArray(project.description) ? project.description.join(", ") : project.description}
                  image={Array.isArray(project.image) ? project.image[0] : project.image}
                  tags={project.tags}
                  code={Array.isArray(project.code) ? project.code[0] : project.code}
                  live={Array.isArray(project.live) ? project.live[0] : project.live}
                  category={Array.isArray(project.category) ? project.category[0] : project.category}
                  icon={getIcon(Array.isArray(project.category) ? project.category[0] : project.category)}
                />
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 glass-panel rounded-lg"
              >
                <p className="text-xl text-muted-foreground">No projects found matching your criteria.</p>
                <motion.button
                  onClick={() => {
                    setFilter("all");
                    setSearchTerm("");
                  }}
                  whileHover={{ scale: 1.05, backgroundColor: "#8B5CF6" }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-all"
                >
                  Clear Filters
                </motion.button>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;