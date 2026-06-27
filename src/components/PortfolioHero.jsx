import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const PremiumPortfolioHero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section className="relative pt-36 lg:pt-48 pb-16 lg:pb-24 bg-white text-black overflow-hidden">
      {/* Decorative Minimal Grid & Glow Layout Backing */}
      <div className="absolute inset-0 grid-pattern-dark mask-radial-bottom opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* PREMIUM ACCENT BADGE */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 text-blue-600 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase shadow-inner"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Case Portfolio</span>
          </motion.div>

          {/* REFINED TYPOGRAPHY DISPLAY HEADER */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-[1.1]"
          >
            Helping Businesses Grow Through
            <span className="block mt-2 text-transparent bg-linear-to-r from-blue-600 via-indigo-600 to-indigo-200 bg-clip-text">
              Digital Innovation.
            </span>
          </motion.h1>

          {/* DESCRIPTION SUBTEXT */}
          <motion.p
            variants={itemVariants}
            className="text-slate-600 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed pt-2"
          >
            Explore some of our latest verified deployments, structural digital
            transformation case systems, and performance records delivered for
            global industry leaders.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumPortfolioHero;
