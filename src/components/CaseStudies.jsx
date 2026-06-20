import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { portfolioProjects } from "../data/portfolioData";

export default function PremiumCaseStudies() {
  const [visibleProjects, setVisibleProjects] = useState(3);

  // FIXED: Streamlined transitions to force instant visibility on state updates
  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const showMoreProjects = () => {
    const currentScrollY = window.scrollY;

    setVisibleProjects((prev) => prev + 3);

    requestAnimationFrame(() => {
      window.scrollTo({
        top: currentScrollY,
        behavior: "instant",
      });
    });
  };

  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER BLOCK */}
        <div className="max-w-3xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full"
          >
            Case Studies
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-black leading-tight"
          >
            Success Stories Engineered to Convert
          </motion.h2>
        </div>

        {/* INTERACTIVE PROJECTS GRID */}
        {/* FIXED: Removed the staggered containerVariants wrapper that was blocking runtime item reveals */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {portfolioProjects.slice(0, visibleProjects).map((project, index) => (
            <motion.div
              key={project.id || index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[24px] bg-slate-50/30 border border-slate-200 overflow-hidden hover:border-slate-300 transition-all duration-300 shadow-[0_20px_40px_rgba(0,0,0,0.02)] flex flex-col h-full"
            >
              {/* IMAGE WRAPPER WITH CINEMATIC HOVER */}
              <div className="relative h-64 overflow-hidden bg-white">
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60 z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-104 filter brightness-[0.95] group-hover:brightness-100"
                />

                {/* Embedded External Action Indicator Badge */}
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-20 h-10 w-10 rounded-full bg-white/90 border border-slate-200 backdrop-blur-md flex items-center justify-center text-slate-700 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 shadow-sm"
                >
                  <ArrowUpRight
                    size={18}
                    className="transform group-hover:rotate-45 transition-transform duration-300"
                  />
                </a>
              </div>

              {/* CARD INTERIOR CONTENT */}
              <div className="p-7 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-widest block mb-1.5">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>

                  {/* METRIC BADGES ARRAY PARSING */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.stats.map((stat, statIdx) => (
                      <div
                        key={statIdx}
                        className="text-[11px] font-semibold tracking-wide text-emerald-700 bg-emerald-500/5 border border-emerald-500/10 px-2.5 py-1.5 rounded-xl flex items-center gap-1.5 shadow-inner"
                      >
                        <span className="h-1 w-1 rounded-full bg-emerald-600 animate-pulse" />
                        <span>
                          {stat.value} {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* VISUALIZED LOWER FOOTER BUTTON */}
                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500 group-hover:text-black transition-colors">
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 hover:text-blue-600 transition-colors"
                  >
                    <span>Visit Live Website</span>
                    <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* VIEW MORE CONVERSIONS CONTROLLER BLOCK */}
        {visibleProjects < portfolioProjects.length && (
          <div className="flex justify-center mt-16 relative z-20">
            <button
              onClick={showMoreProjects}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300 text-sm tracking-wide"
            >
              View More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
