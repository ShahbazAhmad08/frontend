import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COLORS } from "../constants/theme";

const PortfolioProjectCard = ({ project, index }) => {
  const reverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`
        flex flex-col lg:flex-row
        ${reverse ? "lg:flex-row-reverse" : ""}
        gap-10
        items-center
        bg-white
        border border-slate-200
        rounded-[32px]
        p-6 lg:p-8
        shadow-sm
        hover:shadow-xl
        transition-all
      `}
    >
      {/* Content */}

      <div className="lg:w-[70%]">
        <span
          className="inline-block px-4 py-2 rounded-full text-sm font-medium"
          style={{
            color: COLORS.primary,
            backgroundColor: `${COLORS.accent}20`,
          }}
        >
          {project.category}
        </span>

        <h3 className="text-3xl lg:text-4xl font-bold mt-5">{project.title}</h3>

        <p className="text-slate-600 mt-5 leading-relaxed">
          {project.description}
        </p>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-4 mt-8">
          {project.stats.map((stat) => (
            <div
              key={stat.label}
              className="
                bg-slate-50
                border
                border-slate-200
                rounded-2xl
                p-4
                text-center
              "
            >
              <h4
                className="text-2xl font-bold"
                style={{ color: COLORS.primary }}
              >
                {stat.value}
              </h4>

              <p className="text-xs text-slate-500 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}

        <a
          href={project.websiteUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl text-white font-medium"
          style={{
            backgroundColor: COLORS.primary,
          }}
        >
          Visit Website
          <ArrowUpRight size={18} />
        </a>
      </div>

      {/* Image */}

      <div className="lg:w-[30%]">
        <div
          className="
            overflow-hidden
            rounded-[24px]
            border
            border-slate-200
            bg-slate-50
          "
        >
          <img
            src={project.image}
            alt={project.title}
            className="
              w-full
              h-80
              object-cover
              transition-transform
              duration-500
              
            "
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioProjectCard;
