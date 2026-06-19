import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Globe,
  Search,
  Megaphone,
  Smartphone,
  PenTool,
  BarChart3,
} from "lucide-react";

const servicesList = [
  {
    id: "01",
    title: "Website Engineering",
    icon: Globe,
    description:
      "Custom, production-ready reactive web ecosystems optimized for baseline load speed metrics and organic acquisition workflows.",
  },
  {
    id: "02",
    title: "SEO Strategy",
    icon: Search,
    description:
      "Deep cryptographic index alignment engineered to safely raise authority signals and pull targeted intent capture pipelines.",
  },
  {
    id: "03",
    title: "Performance Marketing",
    icon: Megaphone,
    description:
      "High-ROI deployment models over programmatic channels. Built strictly around trackable conversions and scale velocity.",
  },
  {
    id: "04",
    title: "Mobile Applications",
    icon: Smartphone,
    description:
      "Native architectures built on seamless cross-platform performance layers configured for retention multipliers.",
  },
  {
    id: "05",
    title: "Brand Engineering",
    icon: PenTool,
    description:
      "Corporate visual frameworks and unified interface styling designed to separate your enterprise from look-alike competition.",
  },
  {
    id: "06",
    title: "Analytics Realtime Telemetry",
    icon: BarChart3,
    description:
      "End-to-end multi-channel data layers delivering zero-fuzz attribution parameters and transparent strategic telemetry.",
  },
];

export default function PremiumServices() {
  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-indigo-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block">
            Studio Specializations
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
            Capabilities Built to Accelerate Conversion
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            We operate at the convergence of pure functional engineering, system
            strategy, and high-conversion aesthetic design.
          </p>
        </div>

        {/* CORE SERVICES MATRIX GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {servicesList.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative bg-slate-50 backdrop-blur-md rounded-2xl p-6 lg:p-8 border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-sm flex flex-col justify-between min-h-[300px]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="h-12 w-12 rounded-xl bg-slate-100 border border-slate-300 flex items-center justify-center text-blue-600 group-hover:text-blue-700 group-hover:border-blue-700/50 transition-all duration-300">
                      <Icon size={20} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-500 tracking-widest">
                      {/* // {service.id} */}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold tracking-tight text-blue-600  transition-colors">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-slate-800 text-xs md:text-sm leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-blue-900 transition-colors cursor-pointer">
                  <span>Analyze Framework</span>
                  <ArrowUpRight
                    size={12}
                    className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
