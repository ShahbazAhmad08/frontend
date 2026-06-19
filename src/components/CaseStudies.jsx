import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TG Consulting",
    category: "Strategic Growth & Marketing",
    image: "/projects/TGConsulting.webp",
    stats: ["+300% Traffic", "+180% Leads", "+120% Revenue"],
  },
  {
    title: "GeneHelix",
    category: "BioTech Scale & Interface Engineering",
    image: "/projects/genehelix.webp",
    stats: ["+250% Reach", "+95% Conv.", "+150% Growth"],
  },
  {
    title: "Quantain",
    category: "FinTech Platform Architecture",
    image: "/projects/Quantain.webp",
    stats: ["+220% Engage", "+140% Leads", "+80% ROI"],
  },
];

export default function PremiumCaseStudies() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="relative py-28 lg:py-36 bg-slate-950 text-slate-100 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full"
          >
            Case Studies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Success Stories Engineered to Convert
          </motion.h2>
        </div>

        {/* INTERACTIVE PROJECTS GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="group relative rounded-[24px] bg-slate-900/30 border border-slate-900 overflow-hidden hover:border-slate-800 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col h-full"
            >
              {/* IMAGE WRAPPER WITH CINEMATIC HOVER */}
              <div className="relative h-64 overflow-hidden bg-slate-950">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-100"
                />

                {/* Embedded High-End Action Indicator */}
                <div className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-slate-900/80 border border-slate-800 backdrop-blur-md flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-blue-600 group-hover:border-blue-500 transition-all duration-300">
                  <ArrowUpRight
                    size={18}
                    className="transform group-hover:rotate-45 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* CARD INTERIOR CONTENT */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* METRIC BADGES ARRAY */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.stats.map((stat) => (
                      <div
                        key={stat}
                        className="text-xs font-semibold tracking-wide text-emerald-400 bg-emerald-500/5 border border-emerald-500/10 px-3 py-1.5 rounded-xl flex items-center gap-1 shadow-inner"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                        {stat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* VISUALIZED LOWER FOOTER BUTTON */}
                <div className="mt-8 pt-5 border-t border-slate-900/60 flex items-center justify-between text-sm font-medium text-slate-400 group-hover:text-white transition-colors">
                  <span>View Full Analysis</span>
                  <span className="text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                    CASE_ST_002
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
