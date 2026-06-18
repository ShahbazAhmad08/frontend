import { motion } from "framer-motion";

const projects = [
  {
    title: "TG Consulting",
    image: "/projects/TGConsulting.webp",
    stats: ["+300% Traffic", "+180% Leads", "+120% Revenue"],
  },
  {
    title: "GeneHelix",
    image: "/projects/genehelix.webp",
    stats: ["+250% Reach", "+95% Conversion", "+150% Growth"],
  },
  {
    title: "Quantain",
    image: "/projects/Quantain.webp",
    stats: ["+220% Engagement", "+140% Leads", "+80% ROI"],
  },
];

export default function CaseStudies() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Case Studies
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            Success Stories That Speak
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {projects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -10 }}
              className=" group rounded-[28px] overflow-hidden border border-slate-200 bg-white shadow-sm"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-64 w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <div className="mt-6 space-y-3">
                  {project.stats.map((stat) => (
                    <div key={stat} className="text-slate-600">
                      {stat}
                    </div>
                  ))}
                </div>

                <button className="mt-8 text-blue-600 font-semibold">
                  View Project →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
