
import { motion } from "framer-motion";
import { AnimatedText } from "@/components/AnimatedText";

const ContactHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-center mb-12"
    >
    
    </motion.div>
  );
};

export default ContactHeader;
