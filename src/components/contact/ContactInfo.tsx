import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react"; // Or use from react-icons if preferred

const Contact = () => {
  const handleMailClick = () => {
    window.open(
      `mailto:sigireddyviswesh@gmail.com?subject=Let's Connect&body=Hi Viswesh,%0D%0A%0D%0AI came across your work and would love to connect.`,
      "_blank"
    );
  };

  return (
    <motion.section
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 py-24"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
        Let's Build Something Together
      </h1>

      <p className="text-muted-foreground max-w-xl mb-8 text-base md:text-lg">
        Open to freelance gigs, collaborations, and full-time roles. If you're building something meaningful — let's talk.
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        onClick={handleMailClick}
        className="flex items-center px-6 py-3 rounded-lg bg-teal-500 text-white font-medium transition-all shadow-lg hover:bg-teal-500/90"
      >
        <Mail className="mr-2 h-5 w-5" />
        Send Me an Email
      </motion.button>

      <div className="flex items-center mt-8 text-sm text-muted-foreground">
        <MapPin className="h-4 w-4 mr-2" />
        Bengaluru, India — Available Worldwide
      </div>
    </motion.section>
  );
};

export default Contact;
