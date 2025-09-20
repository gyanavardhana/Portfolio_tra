import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import Layout from "@/components/Layout";
import AnimatedText from "@/components/AnimatedText";

const experiences = [
  {
    company: "Deed Bee Social Ventures Pvt. Ltd.",
    role: "Product Engineer",
    duration: "Feb 2025 – Present",
    stack: "MERN Stack, PostgreSQL, TRPC, Nitro Nuxt, AWS",
    points: [
      "Built a promotion engine and compliance tools integrated with SAP.",
      "Developed scalable systems using connection pooling, queueing with pg.Pool.",
      "Implemented frontend optimizations: lazy loading, debouncing, structured error handling.",
      "Collaborated cross-functionally with Product, QA, and DevOps teams."
    ],
  },
  {
    company: "Hyperverge Academy",
    role: "Full Stack Fellow",
    duration: "Aug 2023 – Feb 2024",
    stack: "MERN Stack, SDLC, Git, GitHub",
    points: [
      "Completed immersive full-stack development training.",
      "Actively participated in daily stand-ups and mentorship sessions.",
      "Contributed to collaborative, growth-oriented team projects."
    ],
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
    ],
  },
];

const education = {
  title: "Nanodegree in Full Stack Development",
  org: "Hyperverge Academy",
  duration: "2023 – 2024",
  highlights: [
    "Mastered frontend and backend development using MERN stack.",
    "Worked on real-world capstone projects under mentorship.",
    "Practiced Agile, Git workflows, and deployment strategies."
  ],
};

const Experience = () => {
  return (
    <Layout>
      <section className="pt-32 pb-20 px-4 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-teal-500/10 text-brand-purple mb-4 backdrop-blur-sm border border-brand-purple/20">
            Career Journey
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <AnimatedText text="Professional Experience" once />
          </h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            A snapshot of companies, roles, and projects where I’ve added real impact through software.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-panel p-6 rounded-lg backdrop-blur-md border border-white/10"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="text-brand-purple w-6 h-6" />
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  </div>
                  <div className="text-muted-foreground mt-1">{exp.company}</div>
                  <div className="text-sm mt-1 text-gray-400">{exp.stack}</div>
                </div>
                <div className="text-sm text-muted-foreground mt-2 md:mt-0">
                  {exp.duration}
                </div>
              </div>
              <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Nano Degree Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className="glass-panel p-6 rounded-lg mt-16 backdrop-blur-md border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="text-brand-purple w-6 h-6" />
            <h3 className="text-xl font-semibold text-white">{education.title}</h3>
          </div>
          <div className="text-muted-foreground mb-2">{education.org}</div>
          <div className="text-sm text-gray-400 mb-4">{education.duration}</div>
          <ul className="list-disc ml-6 text-muted-foreground space-y-2">
            {education.highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </motion.div>
      </section>
    </Layout>
  );
};

export default Experience;
