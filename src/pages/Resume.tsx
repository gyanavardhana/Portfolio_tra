import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import PrintableResume from "@/components/PrintableResume";
import { CheckCircle2, Code, Database, Brain, Cpu, Award, Users, Activity } from "lucide-react";
import { resumeHighlights, resumeCertifications, softSkills } from "@/constants";

const Resume = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Database":
        return <Database className="h-6 w-6 text-brand-purple" />;
      case "Cpu":
        return <Cpu className="h-6 w-6 text-brand-purple" />;
      case "Code":
        return <Code className="h-6 w-6 text-brand-purple" />;
      default:
        return <Code className="h-6 w-6 text-brand-purple" />;
    }
  };

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
              Why Hire Me?
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Skilled. Reliable. Results-driven." once />
            </h1>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              I build production-grade software systems—whether it’s backend integrations, devops practices, or clean frontend dashboards. My focus is always on reliability, scalability, and impact.
            </p>
          </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center"
          >
            <PrintableResume />
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {resumeHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-panel p-6 rounded-lg flex items-start"
              >
                <div className="mr-4 bg-teal-500/10 p-3 rounded-full">
                  {getIcon(item.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1 text-white">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 rounded-lg mb-12"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Soft Skills</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {softSkills.map((skill, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="h-4 w-4 text-brand-purple mr-2" /> {skill}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="glass-panel p-6 rounded-lg mb-12"
          >
            <h3 className="text-xl font-semibold mb-4 text-white">Certifications</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {resumeCertifications.map((cert, i) => (
                <li key={i} className="flex items-start text-muted-foreground">
                  <Award className="h-4 w-4 text-brand-purple mt-1 mr-2" />
                  <span>
                    <strong>{cert.name}</strong> – {cert.issuer}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

        
        </div>
      </section>
    </Layout>
  );
};

export default Resume;