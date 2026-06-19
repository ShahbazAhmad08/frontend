import { motion } from "framer-motion";
import { Milestone, Compass, Sliders, ShieldCheck } from "lucide-react";

const developmentalNodes = [
  {
    step: "01",
    title: "Discovery Vector",
    icon: Compass,
    text: "We isolate underlying technical debt, map cross-channel conversions, and baseline user flow architecture to determine performance multipliers.",
  },
  {
    step: "02",
    title: "Interface Engineering",
    icon: Sliders,
    text: "Our design systems group transforms requirements into high-end responsive frameworks, utilizing custom component structures.",
  },
  {
    step: "03",
    title: "Deployment Calibration",
    icon: Milestone,
    text: "Production rollout via isolated nodes on cloud engines. All pages pass technical SEO scoring thresholds right out of the box.",
  },
  {
    step: "04",
    title: "Ecosystem Optimization",
    icon: ShieldCheck,
    text: "Data-driven metric adjustments monitoring continuous user retention patterns and keyword rankings dynamically.",
  },
];

export default function PremiumProcess() {
  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Production Pipeline
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
            How We Translate Complex Concepts Into Real Revenue Engines
          </h2>
        </div>

        {/* CONNECTED NODE GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {developmentalNodes.map((node, index) => {
            const Icon = node.icon;
            return (
              <div
                key={node.step}
                className="flex flex-col justify-between bg-slate-50/10 border border-slate-200 rounded-2xl p-6 lg:p-7 relative group hover:border-slate-300 transition-colors duration-300"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
                    <div className="h-10 w-10 bg-white border border-slate-300 rounded-xl flex items-center justify-center text-slate-600 group-hover:text-blue-600 group-hover:border-blue-600/30 transition-all duration-300">
                      <Icon size={16} />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-600 tracking-widest">
                      NODE_0{node.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-black group-hover:text-blue-600 transition-colors">
                    {node.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-xs leading-relaxed font-medium">
                    {node.text}
                  </p>
                </div>

                <div className="text-[50px] font-mono font-black text-slate-200/40 select-none text-right tracking-tighter mt-6 leading-none group-hover:text-blue-600/10 transition-colors">
                  {node.step}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
