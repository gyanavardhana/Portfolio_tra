import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { Code, BookOpen, User, Heart, Workflow, ThumbsUp } from "lucide-react";
import InfoCard from "@/components/InfoCard";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const skills = [
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
    { name: "React.js", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "TRPC", level: "Intermediate" },
    { name: "Machine Learning (PyTorch)", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
    { name: "REST APIs", level: "Intermediate" },
    { name: "Git", level: "Advanced" },
  ];

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-brand-purple mb-4">
              About Me
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Get to Know Me" once />
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I build scalable software systems that connect data, intelligence, and performance.
            </p>
          </motion.div>

          {/* Bio + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="glass-panel h-full p-8 rounded-lg">
                <div className="relative w-full h-80 rounded-lg mb-8 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/20 to-blue-500/20" />
                  <img
                    src="/uploads/me.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col justify-center space-y-4 text-muted-foreground"
            >
              <p>
                I'm <span className="text-brand-purple font-semibold">Sigireddy Viswesh</span>, a Computer Science graduate with hands-on experience building real-world enterprise systems and AI-driven tools.
              </p>
              <p>
                At <strong>Deed Bee Social Ventures Pvt. Ltd.</strong>, I led efforts on SAP data integration and scalable promotion & incentive systems. I've also worked with <strong>Hyperverge Academy</strong> and <strong>Hydro Tribe</strong>, strengthening my full stack and backend development expertise.
              </p>
              <p>
                I hold certifications from Google, Microsoft, and Certiport, and have practical experience with Python, React, Node.js, PostgreSQL, and ML frameworks like PyTorch.
              </p>
              <p>
                Outside of work, I enjoy mentoring, experimenting with new tech, and contributing to personal projects.
              </p>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-24"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Skills</h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Core technologies I’ve used to build scalable software, dashboards, and data-driven services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px -5px rgba(155, 135, 245, 0.2)",
                    y: -5,
                  }}
                  className="glass-panel p-6 rounded-lg text-center"
                >
                  <motion.h3
                    className="font-semibold mb-2"
                    whileHover={{ color: "#9b87f5" }}
                  >
                    {skill.name}
                  </motion.h3>
                  <span
                    className={`text-xs py-1 px-3 rounded-full ${
                      skill.level === "Advanced"
                        ? "bg-teal-500/20 text-brand-purple"
                        : skill.level === "Intermediate"
                        ? "bg-blue-500/20 text-blue-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {skill.level}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Extras */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Soft Skills</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InfoCard icon={Workflow} title="Collaboration & Adaptability">
                <ul className="space-y-2 text-muted-foreground">
                  <li>Experience with agile, standups & mentorship</li>
                  <li>Quick learner and proactive communicator</li>
                </ul>
              </InfoCard>

              <InfoCard icon={ThumbsUp} title="Professional Attitude">
                <ul className="space-y-2 text-muted-foreground">
                  <li>Strong documentation and Git workflow discipline</li>
                  <li>Hands-on with both team projects and solo tasks</li>
                </ul>
              </InfoCard>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
