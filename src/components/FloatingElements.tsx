import { motion } from "framer-motion";
import { Code, Terminal, Zap, BookOpen, Github, Braces, Cloud, Monitor, Sparkles, MousePointerClick, Layers3, Lightbulb } from "lucide-react";

const icons = [
  Code,
  Terminal,
  Zap,
  BookOpen,
  Github,
  Braces,
  Cloud,
  Monitor,
  Sparkles,
  MousePointerClick,
  Layers3,
  Lightbulb
];

const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          className="absolute text-[#ff6b35]/10"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
          }}
          animate={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 360,
          }}
          transition={{
            duration: 18 + Math.random() * 18,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
        >
          <Icon size={32 + Math.random() * 32} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
