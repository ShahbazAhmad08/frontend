import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const PortfolioProjectCard = ({ project, index }) => {
  const isReverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col lg:flex-row ${isReverse ? "lg:flex-row-reverse" : ""} gap-10 lg:gap-14 items-center bg-slate-50/20 backdrop-blur-md border border-slate-200 rounded-[32px] p-6 lg:p-8 hover:border-slate-300 transition-all duration-300 shadow-xl group`}
    >
      {/* Content Architecture */}
      <div className="w-full lg:w-[65%] flex flex-col justify-between h-full">
        <div>
          <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-500/5 border border-blue-500/10">
            {project.category}
          </span>

          <h3 className="text-2xl lg:text-3xl font-bold tracking-tight text-black mt-4 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-600 mt-4 text-sm lg:text-base leading-relaxed">
            {project.description}
          </p>

          {/* Micro Analytical Metrics */}
          <div className="grid grid-cols-3 gap-3 md:gap-4 mt-6">
            {project.stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white/60 border border-slate-200 rounded-xl p-3 md:p-4 text-left shadow-inner"
              >
                <h4 className="text-lg md:text-xl font-bold tracking-tight text-black">
                  {stat.value}
                </h4>
                <p className="text-[10px] md:text-xs text-slate-700 tracking-wide font-medium mt-1 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Trigger */}
        <div className="mt-8">
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs md:text-sm font-semibold tracking-wide transition-all duration-300 shadow-md shadow-blue-600/10"
          >
            <span>Launch Deployment</span>
            <ArrowUpRight
              size={14}
              className="transform group-hover:rotate-45 transition-transform"
            />
          </a>
        </div>
      </div>

      {/* Image Node Frame */}
      <div className="w-full lg:w-[35%]">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/80 aspect-video lg:aspect-square flex items-center justify-center p-4 group-hover:border-slate-300 transition-colors">
          <img
            src={project.image}
            alt={project.title}
            className="w-full max-h-64 object-contain transition-transform duration-700 group-hover:scale-102"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectCard;
