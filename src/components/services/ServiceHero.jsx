import { motion } from "framer-motion";
import { ArrowUpRight, Phone, Sparkles } from "lucide-react";

export default function ServiceHero({ data }) {
  return (
    <section className="relative pt-36 lg:pt-48 pb-20 overflow-hidden bg-slate-950 text-slate-100">
      {/* Background Micro Grid Layer & Ambient Radiance */}
      <div className="absolute inset-0 grid-pattern-dark mask-radial-top opacity-25 pointer-events-none" />
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* LEFT CONTENT ENGINE */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 text-left"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-inner mb-6">
              <Sparkles size={12} className="animate-pulse" />
              <span>{data.badge}</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              {data.heading}
            </h1>

            <p className="mt-6 text-slate-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
              {data.description}
            </p>

            {/* ACTION TRIGGERS */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="group relative bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 overflow-hidden">
                <span>Get Free Consultation</span>
                <ArrowUpRight
                  size={15}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>

              <button className="border border-slate-800 bg-slate-900/40 hover:bg-slate-900 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm transition-all duration-300 text-sm flex items-center justify-center gap-2">
                <Phone size={14} />
                <span>Contact Us</span>
              </button>
            </div>

            {/* PERFORMANCE METRICS */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-900">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                  500+
                </h3>
                <p className="text-[10px] md:text-xs text-slate-500 tracking-wide uppercase font-bold mt-1">
                  Deployments
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                  98%
                </h3>
                <p className="text-[10px] md:text-xs text-slate-500 tracking-wide uppercase font-bold mt-1">
                  Success Rate
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white font-mono">
                  24/7
                </h3>
                <p className="text-[10px] md:text-xs text-slate-500 tracking-wide uppercase font-bold mt-1">
                  Operational
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CINEMATIC HERO THUMBNAIL */}
          <motion.div
            initial={{ opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[28px] overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.6)] border border-slate-900 aspect-video lg:aspect-[4/3] bg-slate-950">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={data.image}
                alt={data.heading}
                className="w-full h-full object-cover filter brightness-[0.85] hover:brightness-100 transition-all duration-700"
              />
            </div>

            {/* Embedded Telemetry Card */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl rounded-xl p-4 hidden md:block">
              <h4 className="font-bold text-xs text-white uppercase tracking-wider">
                Enterprise Framework
              </h4>
              <p className="text-[11px] text-slate-400 mt-1 font-medium">
                Tailored architecture for sustainable brand scale.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
