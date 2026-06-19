import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function PremiumCTA() {
  return (
    <section className="relative py-28 lg:py-36 px-6 bg-slate-950 overflow-hidden">
      {/* Decorative Ambient Background Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[130px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-6xl mx-auto rounded-[32px] overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 p-8 md:p-16 relative shadow-[0_30px_70px_rgba(0,0,0,0.5)] group"
      >
        {/* Obsidian Glass Layering Refinement */}
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/[0.03] via-transparent to-transparent opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Premium Minimal Grid Overlay */}
        <div className="absolute right-0 top-0 h-full w-full lg:w-1/2 opacity-20 pointer-events-none [mask-image:linear-gradient(to_left,white_40%,transparent_100%)]">
          <div className="w-full h-full grid-pattern-slate" />
        </div>

        {/* Dynamic Abstract Light Core */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full group-hover:scale-110 transition-transform duration-700 pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 text-blue-400 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6"
          >
            <Sparkles size={12} className="animate-pulse" />
            <span>Next-Gen Digital Architecture</span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
            Ready to Scale Your
            <br />
            Digital Infrastructure?
          </h2>

          <p className="mt-6 text-slate-400 text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed">
            Let's build a deterministic growth engine that consistently adapts
            to modern algorithms, captures qualified target pipelines, and
            accelerates market evaluation.
          </p>

          {/* ACTIONS HUB */}
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <button className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold tracking-wide text-sm shadow-xl shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300">
              <span>Book an Expert Call</span>
              <div className="w-5 h-5 rounded-md bg-blue-700/80 group-hover:bg-blue-600 text-white flex items-center justify-center transition-colors">
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </button>

            <button className="inline-flex items-center justify-center border border-slate-800 bg-slate-950/40 hover:bg-slate-900 text-slate-300 hover:text-white px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 backdrop-blur-sm">
              View Success Stories
            </button>
          </div>
        </div>

        {/* Premium Cryptographic Serial Footer tag */}
        <div className="absolute bottom-4 right-6 hidden lg:block text-[10px] font-mono text-slate-700 select-none">
          SYS_NODE_OP_FALLBACK_OK
        </div>
      </motion.div>
    </section>
  );
}
