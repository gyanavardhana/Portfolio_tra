import { motion } from "framer-motion";

const ParticleBackground = () => {
  const dots = Array.from({ length: 100 });

  return (
    <div className="absolute inset-0 -z-10 flex items-center justify-center overflow-hidden bg-transparent">
      <div className="grid grid-cols-10 gap-6 sm:gap-8 md:gap-10 opacity-20">
        {dots.map((_, i) => {
          const delay = (i % 10) * 0.2 + Math.floor(i / 10) * 0.1;
          const duration = 3 + (i % 7) * 0.3;
          
          return (
            <motion.div
              key={i}
              className="relative w-2 h-2"
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1, 1.2, 1, 0.8, 1],
                opacity: [0, 0.6, 1, 0.8, 0.4, 0.7],
                rotate: [0, 90, 180, 270, 360],
                x: [0, Math.sin(i) * 3, 0],
                y: [0, Math.cos(i) * 2, 0],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1]
              }}
              whileHover={{ 
                scale: 2, 
                opacity: 1,
                transition: { duration: 0.2 }
              }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400"
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 8px rgba(59, 130, 246, 0.5)",
                    "0 0 12px rgba(168, 85, 247, 0.7)",
                    "0 0 8px rgba(34, 211, 238, 0.5)",
                    "0 0 0px rgba(59, 130, 246, 0)"
                  ]
                }}
                transition={{
                  duration: duration * 0.8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + 0.5
                }}
              />
              
              {/* Glitch effect overlay */}
              <motion.div
                className="absolute inset-0 w-2 h-2 rounded-full bg-green-400"
                animate={{
                  opacity: [0, 0, 0, 0.8, 0, 0, 0],
                  scale: [1, 1, 1, 1.5, 1, 1, 1],
                  x: [0, 0, 0, 1, 0, 0, 0],
                }}
                transition={{
                  duration: duration * 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: delay + duration * 0.3
                }}
              />
            </motion.div>
          );
        })}
      </div>
      
      {/* Matrix-style flowing code lines */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute w-px bg-gradient-to-b from-transparent via-green-400/30 to-transparent"
            style={{
              left: `${20 + i * 15}%`,
              height: '100%'
            }}
            animate={{
              opacity: [0, 0.7, 0],
              scaleY: [0, 1, 0]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ParticleBackground;