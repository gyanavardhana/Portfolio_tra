import { ReactNode, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

// ✅ Updated Icons
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMedium,
  FaYoutube
} from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

interface LayoutProps {
  children: ReactNode;
}

// Animations
const animations = {
  page: {
    initial: { opacity: 0, y: 20, filter: "blur(4px)" },
    animate: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      filter: "blur(4px)",
      transition: { duration: 0.3 }
    }
  },
  loader: {
    rotate: {
      rotate: 360,
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "linear"
      }
    },
    pulse: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  },
  social: {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: { scale: 0.95 }
  },
  footer: {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    }
  }
};

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0b2e] via-[#16213e] to-[#0f3460] text-white relative overflow-hidden">
      {/* Background animation */}
      <div className="fixed inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/20 via-[#f7931e]/15 to-[#ffd23f]/20 animate-pulse"></div>
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[#ff6b35]/30 to-[#f7931e]/30 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-[#ffd23f]/30 to-[#ff6b35]/30 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-[#4ecdc4]/25 to-[#44a08d]/25 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10">
        <Navbar />

        <main className="flex-grow">
          {loading ? (
            <LoadingScreen />
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname}
                variants={animations.page}
                initial="initial"
                animate="animate"
                exit="exit"
                className="min-h-screen"
              >
                {children}
              </motion.div>
            </AnimatePresence>
          )}
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </div>
  );
};

const LoadingScreen = () => (
  <div className="flex items-center justify-center h-screen">
    <div className="relative">
      <motion.div
        variants={animations.loader}
        animate="rotate"
        className="w-16 h-16 border-4 border-transparent border-t-[#ff6b35] border-r-[#ffd23f] rounded-full"
      />
      <motion.div
        variants={animations.loader}
        animate="pulse"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-gradient-to-r from-[#ff6b35] to-[#ffd23f] rounded-full"
      />
    </div>
  </div>
);

const Footer = () => {
  const socialLinks = [
    {
      href: "https://github.com/Viswesh934",
      icon: FaGithub,
      label: "GitHub",
      color: "hover:text-[#ffd23f] hover:shadow-[0_0_20px_rgba(255,210,63,0.5)]"
    },
    {
      href: "https://www.linkedin.com/in/sigireddy-viswesh-564119221/",
      icon: FaLinkedin,
      label: "LinkedIn",
      color: "hover:text-[#4ecdc4] hover:shadow-[0_0_20px_rgba(78,205,196,0.5)]"
    },
    {
      href: "https://x.com/SigireddyV32042",
      icon: FaTwitter,
      label: "Twitter",
      color: "hover:text-[#ff6b35] hover:shadow-[0_0_20px_rgba(255,107,53,0.5)]"
    },
    {
      href: "mailto:sigireddyviswesh@gmail.com",
      icon: AiOutlineMail,
      label: "Email",
      color: "hover:text-[#f7931e] hover:shadow-[0_0_20px_rgba(247,147,30,0.5)]"
    },
    {
      href: "https://medium.com/@sigireddyviswesh",
      icon: FaMedium,
      label: "Medium",
      color: "hover:text-white hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
    },
    {
      href: "https://www.youtube.com/@DataBots-d3j", 
      icon: FaYoutube,
      label: "YouTube",
      color: "hover:text-[#ff0000] hover:shadow-[0_0_20px_rgba(255,0,0,0.4)]"
    }
  ];

  return (
    <motion.footer
      variants={animations.footer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative flex flex-col items-center justify-center"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-[#ff6b35] through-[#ffd23f] to-transparent w-full" />
      <div className="backdrop-blur-xl bg-gradient-to-r from-[#1a0b2e]/90 via-[#16213e]/90 to-[#0f3460]/90 border-t border-[#ff6b35]/30 w-full flex flex-col items-center">
        <div className="w-full max-w-2xl px-6 py-10 flex flex-col items-center">
          <div className="flex flex-col items-center space-y-6">
            <motion.h3
              className="text-lg font-medium bg-gradient-to-r from-[#ffd23f] via-[#ff6b35] to-[#4ecdc4] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Let's connect
            </motion.h3>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map(({ href, icon: Icon, label, color }, index) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-300 ${color} transition-all duration-300 p-3 rounded-xl bg-gradient-to-r from-[#1a0b2e]/80 to-[#16213e]/80 border border-[#ff6b35]/30 hover:border-[#ffd23f]/60 hover:bg-gradient-to-r hover:from-[#1a0b2e]/95 hover:to-[#16213e]/95 backdrop-blur-sm`}
                  variants={animations.social}
                  initial="rest"
                  whileHover="hover"
                  whileTap="tap"
                  custom={index}
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div
            className="text-gray-300 text-sm text-center pt-8 border-t border-gradient-to-r from-[#ff6b35]/30 via-[#ffd23f]/30 to-[#4ecdc4]/30 w-full"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="bg-gradient-to-r from-[#ffd23f] to-[#ff6b35] bg-clip-text text-transparent font-medium">
              © {new Date().getFullYear()} Sigireddy Viswesh
            </p>
            <p className="mt-1 text-xs text-gray-400">
              Solving problems with code and creativity
            </p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Layout;
