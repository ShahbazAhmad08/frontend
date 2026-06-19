import { Link } from "react-router-dom";
import { AlertCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function PremiumNotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-slate-950 px-6 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-xl relative z-10"
      >
        {/* Glowing Obsidian Icon Core */}
        <div className="flex justify-center mb-8">
          <div className="w-20 h-20 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 shadow-2xl relative group">
            <AlertCircle className="w-8 h-8 group-hover:rotate-12 transition-transform duration-300" />
            <div className="absolute inset-0 bg-blue-500/10 blur-xl opacity-50 rounded-2xl" />
          </div>
        </div>

        {/* High-End Typography Error Tag */}
        <h1 className="text-8xl md:text-9xl font-black tracking-tighter text-transparent bg-gradient-to-b from-white via-slate-200 to-slate-800 bg-clip-text leading-none select-none">
          404
        </h1>

        <p className="mt-6 text-sm md:text-base text-slate-400 font-medium max-w-sm mx-auto leading-relaxed">
          The node or framework layer you are trying to pull does not exist or
          has been shifted within the index routing.
        </p>

        {/* Action Router */}
        <div className="mt-10">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-800 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 shadow-2xl"
          >
            <ArrowLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            <span>Return to Core Node</span>
          </Link>
        </div>
      </motion.div>

      {/* Background Cryptographic Tag */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-mono text-slate-800 select-none">
        ERR_ROUTER_NODE_NOT_FOUND
      </div>
    </section>
  );
}
