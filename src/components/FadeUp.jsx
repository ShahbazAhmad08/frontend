import { motion } from "framer-motion";

export default function PremiumFadeUp({
  children,
  delay = 0,
  duration = 0.6,
  y = 24, // Subtle offsets look much cleaner than harsh leaps
  className = "",
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: y,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        margin: "-40px", // Delays activation slightly until it is clearly on screen
      }}
      transition={{
        duration: duration,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom premium easeOutCubic curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
