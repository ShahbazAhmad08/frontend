import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Globe,
  Smartphone,
  BarChart3,
  Code,
  Palette,
  ShoppingCart,
  ArrowUpRight,
} from "lucide-react";

export default function PremiumHero() {
  const pills = [
    { label: "Website Design", icon: Globe, className: "-top-6 left-12" },
    { label: "Custom Coded Website", icon: Code, className: "top-88 -left-16" },
    {
      label: "Social Media Management",
      icon: BarChart3,
      className: "top-44 -right-12",
    },
    {
      label: "Digital Marketing",
      icon: TrendingUp,
      className: "bottom-48 -right-16",
    },
    {
      label: "Search Engine Optimisation",
      icon: Search,
      className: "-bottom-4 left-1/3",
    },
    {
      label: "Graphics Designing",
      icon: Palette,
      className: "top-15 -left-20",
    },
    {
      label: "Mobile App Development",
      icon: Smartphone,
      className: "bottom-88 -left-12",
    },
    {
      label: "Coded E-Commerce Website",
      icon: ShoppingCart,
      className: "top-8 -right-20",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-white text-black">
      {/* Premium Minimal Grid Mask */}
      <div className="absolute inset-0 grid-pattern-dark mask-radial-top opacity-25 pointer-events-none" />

      {/* Decorative Ambient Radial Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT: Content Engine */}
          <motion.div
            className="lg:col-span-5 text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-slate-100 backdrop-blur-md border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase shadow-inner"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Trusted Globally by 16,000+ Brands
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mt-6 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-black bg-clip-text"
            >
              Your Success
              <br />
              Story Starts
              <br />
              <span className="text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 bg-clip-text">
                Now.
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-4">
              <p className="mt-6 text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed">
                Nazra Software Solutions is a full-suite architecture digital
                studio, engineering growth and premium interfaces globally.
              </p>
              <p className="text-xs text-slate-500 uppercase tracking-widest font-semibold border-l-2 border-blue-600/50 pl-3">
                A Division of Excellence Integrity Management Private Limited
              </p>
            </motion.div>

            {/* Interactive Action Hub */}
            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/30 overflow-hidden">
                <span>Get a Free Strategy Call</span>
                <ArrowUpRight
                  size={16}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>

              <button className="border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-black px-8 py-4 rounded-xl font-medium backdrop-blur-sm transition-all duration-300 text-sm">
                Explore All Services
              </button>
            </motion.div>

            {/* Trust Matrix */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-8 mt-12 border-t border-slate-200 pt-8"
            >
              <div>
                <h4 className="font-bold text-xl text-black tracking-tight">
                  4.9 / 5.0
                </h4>
                <p className="text-slate-500 text-xs tracking-wide uppercase mt-0.5">
                  Clutch Global Rating
                </p>
              </div>
              <div className="h-8 w-px bg-slate-300" />
              <div className="text-slate-600 text-sm font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                No Lock-in Contracts. Zero Friction.
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: Live Data & Interactive Micro-pills */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-7 relative"
          >
            {/* Fluid Moving Service Badge Grid (Lg Screens Only) */}
            <div className="hidden lg:block absolute inset-0 pointer-events-none">
              {pills.map((pill, index) => {
                const Icon = pill.icon;
                return (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                      duration: 5 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className={`absolute ${pill.className} bg-slate-900/70 backdrop-blur-md border border-slate-800/80 px-4 py-2.5 rounded-full shadow-2xl shadow-black/40 flex items-center gap-2.5 z-20 hover:border-blue-500/50 transition-colors duration-300`}
                  >
                    <div className="p-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <Icon size={14} />
                    </div>
                    <span className="text-xs font-semibold tracking-wide text-slate-200">
                      {pill.label}
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Micro Grid Component (Responsive Mobile Alternative) */}
            <div className="grid grid-cols-2 gap-2.5 lg:hidden mb-8">
              {pills.map((pill, index) => {
                const Icon = pill.icon;
                return (
                  <div
                    key={index}
                    className="bg-slate-900/60 border border-slate-800/60 p-3 rounded-xl flex items-center gap-2"
                  >
                    <Icon size={14} className="text-blue-400 flex-shrink-0" />
                    <span className="text-xs font-medium text-slate-300 truncate">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Premium Glass Dashboard Panel */}
            <div className="bg-transparent backdrop-blur-xl rounded-3xl shadow-lg p-6 lg:p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-widest">
                    Live Performance Telemetry
                  </span>
                </div>
                <span className="text-[10px] bg-slate-800/80 border border-slate-700 text-slate-400 px-2 py-0.5 rounded-md font-mono">
                  SECURE_NODE_OK
                </span>
              </div>

              {/* Data Metric Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  {
                    value: "16,000+",
                    label: "Global Deployments",
                    rate: "+18% YoY",
                    color: "from-blue-900 to-transparent",
                  },
                  {
                    value: "98.4%",
                    label: "Success Rate",
                    rate: "+2.1% Alpha",
                    color: "from-indigo-900 to-transparent",
                  },
                  {
                    value: "$50M+",
                    label: "Client Revenue Pipeline",
                    rate: "+34% Velocity",
                    color: "from-purple-900 to-transparent",
                  },
                  {
                    value: "285%",
                    label: "Avg Organic Conversion",
                    rate: "+62% Multiplier",
                    color: "from-emerald-900 to-transparent",
                  },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="bg-white border border-slate-800/80 rounded-2xl p-4 lg:p-5 hover:border-slate-700 transition-all duration-300"
                  >
                    <span className="text-slate-900 text-xs block font-medium truncate">
                      {stat.label}
                    </span>
                    <h3 className="text-2xl sm:text-3xl lg:text-3xl font-bold tracking-tight text-blue-700 mt-1.5 font-sans">
                      {stat.value}
                    </h3>
                    <span className="text-green-700 text-[11px] font-semibold tracking-wide inline-flex items-center gap-1 mt-1 bg-emerald-500/5 px-2 py-0.5 rounded-md border border-emerald-500/10">
                      {stat.rate}
                    </span>
                  </div>
                ))}
              </div>

              {/* Data Visualization Graph Block */}
              <div className="mt-6 lg:mt-6 bg-white border border-slate-800/60 rounded-2xl p-5">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-[10px] uppercase tracking-widest text-slate-700 font-bold">
                    Aggregated Client Valuation Scale
                  </h4>
                  <span className="text-xs font-bold text-blue-400 font-mono">
                    MAX_PEAK_90%
                  </span>
                </div>

                <div className="flex items-end gap-1.5 sm:gap-2 h-24 pt-4">
                  {[34, 46, 38, 58, 48, 62, 55, 68, 74, 88, 82, 94].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 h-full flex flex-col justify-end group/bar"
                      >
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{
                            duration: 1,
                            ease: "easeOut",
                            delay: index * 0.03,
                          }}
                          className={`w-full rounded-t-md transition-all duration-300 relative bg-gradient-to-t from-blue-600 to-indigo-400 shadow-[0_0_15px_rgba(59,130,246,0.5)]`}
                        />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
