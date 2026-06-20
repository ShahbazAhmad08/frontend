import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "../data/portfolioData";

const clients = [
  { name: "innzoy", logo: "/clients/Client9.png" },
  { name: "blank-Q-space", logo: "/clients/Client2.png" },
  { name: "genhelic", logo: "/clients/genhelic.png" },
  { name: "pure-kashmir", logo: "/clients/pure-kashmir.webp" },
  { name: "tg-consulting", logo: "/clients/tg-consulting.png" },
  { name: " vms", logo: "/clients/vms.png" },
  {
    name: "Westerranean-Breeze-logo",
    logo: "/clients/Westerranean-Breeze-logo.png",
  },
  { name: "DKreg-Logo", logo: "/clients/DKreg-Logo.png" },
  { name: "icad", logo: "/clients/icad.png" },
  { name: "star-force", logo: "/clients/Client4.png" },
];

const marqueeItems = portfolioProjects.slice(0, 10).map((project, idx) => ({
  ...project,
  clientLogo: clients[idx]?.logo || "/logo.png",
}));

const infiniteTrack = [...marqueeItems, ...marqueeItems, ...marqueeItems];

export default function PremiumPortfolioMarquee() {
  return (
    <section className="py-24 bg-white overflow-hidden relative select-none">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-50 w-fit px-4 py-1.5 rounded-full mx-auto mb-4">
          Featured Deployment Clusters
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
          Proven Architectural Frameworks
        </h2>
      </div>

      {/* Infinite Horizontal Animation Slider Canvas wrapper */}
      <div className="w-full relative overflow-visible flex items-center [mask-image:linear-gradient(to_right,transparent_0%,#000_10%,#000_90%,transparent_100%)]">
        <motion.div
          className="flex items-start gap-12 px-6 w-max"
          animate={{ x: ["0%", "-33.333%"] }}
          whileHover={{ animationPlayState: "paused" }}
          transition={{
            duration: 45,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {infiniteTrack.map((item, index) => (
            <div
              key={index}
              /* 💡 FIXED: Changed 'sub-group' to standard 'group' layout configuration for global mobile tap support */
              className="w-[340px] md:w-[380px] flex flex-col items-center gap-6 shrink-0 group relative pb-4 touch-auto"
            >
              {/* DISPLAY FRAME: Mockup Device Mock Canvas */}
              {/* 💡 FIXED: Replaced arbitrary selectors with simple group-hover and native Tailwind properties */}
              <div className="w-full h-[220px] md:h-[240px] rounded-[22px] bg-slate-50 p-2 shadow-[0_8px_30px_rgba(0,0,0,0.015)] relative overflow-hidden transition-all duration-300 group-hover:shadow-[0_20px_50px_rgba(29,78,216,0.08)] group-hover:border-slate-300">
                {/* Embedded Responsive Grid Layout Stack */}
                <div className="w-full h-full rounded-[14px] overflow-hidden relative bg-white border border-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* HOVER INTERFACE BUTTON: Center Trigger Entrance Node */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 z-20 backdrop-blur-[2px] bg-white/10">
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-slate-950 text-white font-semibold text-xs tracking-wide px-5 py-3 rounded-full shadow-xl hover:bg-blue-600 transition-colors duration-200"
                  >
                    <span>Visit website</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              {/* LOGO FRAME CONTAINER SLOT */}
              <div className="h-14 w-32 flex items-center justify-center  transition-all duration-300 transform group-hover:scale-102">
                <img
                  src={item.clientLogo}
                  alt={`${item.title} logo branding node`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* CORE BASE parameter metric counter block */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 border-t border-slate-100 mt-24 pt-12 text-center relative z-10">
        <div>
          <span className="block text-4xl font-black text-slate-950 tracking-tight">
            5+ Years
          </span>
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1 block">
            Proven Track Record
          </span>
        </div>
        <div>
          <span className="block text-4xl font-black text-slate-950 tracking-tight">
            99%
          </span>
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1 block">
            Customer Satisfaction
          </span>
        </div>
        <div>
          <span className="block text-4xl font-black text-slate-950 tracking-tight">
            100+
          </span>
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1 block">
            Projects Completed
          </span>
        </div>
        <div>
          <span className="block text-4xl font-black text-slate-950 tracking-tight">
            4 Mins
          </span>
          <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase mt-1 block">
            Average Answer Time
          </span>
        </div>
      </div>
    </section>
  );
}
