import { useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";
import { BookOpen } from "lucide-react";
import EducationCard from "@/components/EducationCard";
import CertificationCard from "@/components/CertificationCard";

const Academics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const education = [
    {
      id: 1,
      institution: "Aditya College of Engineering",
      degree: "Bachelor of Technology (B.Tech)",
      field: "Computer Science - IoT",
      duration: "Nov 2021 - May 2025",
      location: "Andhra Pradesh, India",
      cgpa: "8.2 / 10",
      details: [
        "Focused on Internet of Things (IoT) and emerging technologies",
        "Coursework includes Python, Machine Learning, Networks, and Systems",
        "Participated in Amazon ML School and selected as AI-ML Scholar (2023)"
      ]
    }
  ];

  const certifications = [
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

  const courseHighlights = [
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
            <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 mb-4">
              Academics
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <AnimatedText text="Educational Background" once />
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic foundation in engineering and certifications in cloud and AI technologies drive my ability to build scalable, intelligent software systems.
            </p>
          </motion.div>

          {/* Education Section */}
          <div className="mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl font-bold mb-12 text-center"
            >
              Education
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {education.map((edu, index) => (
                <EducationCard key={edu.id} {...edu} index={index} />
              ))}
            </div>
          </div>

          {/* Key Courses Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mb-24"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Key Courses</h2>
            <div className="glass-panel p-10 rounded-lg">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-indigo-500/10 p-4 rounded-full">
                  <BookOpen className="h-8 w-8 text-indigo-400" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courseHighlights.map((course, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.05 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(137, 180, 255, 0.2)",
                      color: "#89b4ff"
                    }}
                    className="flex items-center p-4 bg-secondary/50 rounded-lg"
                  >
                    <div className="h-2 w-2 rounded-full bg-indigo-400 mr-3" />
                    <span>{course}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certifications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <CertificationCard key={cert.id} {...cert} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
