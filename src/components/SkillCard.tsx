import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const SkillCard = ({ icon: Icon, title, description, className = "" }: SkillCardProps) => {
  return (
    <motion.div
      className={`glass-panel p-6 rounded-xl shadow-md transition-all duration-300 ${className}`}
      whileHover={{
        scale: 1.06,
        boxShadow: "0 15px 35px -5px rgba(155, 135, 245, 0.25)",
        y: -6,
      }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Icon with glow */}
      <div className="relative flex items-center mb-3">
        <div className="mr-3 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-tr from-teal-400 to-purple-500 bg-opacity-20 shadow-inner">
          <Icon className="w-5 h-5 text-teal-800" />
        </div>
        <h3 className="text-lg font-semibold text-[#FFD6A0]">{title}</h3>
      </div>

      {/* Description */}
      <p className="text-sm text-[#e0e0e0] leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default SkillCard;