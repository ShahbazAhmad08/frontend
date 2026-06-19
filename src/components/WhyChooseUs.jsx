import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    title: "ROI-Deterministic Strategies",
    desc: "Every campaign parameters maps cleanly back to trackable growth matrices and conversions.",
  },
  {
    title: "Transparent Telemetry Reporting",
    desc: "No masked metrics or hidden parameters. Direct analytical dashboard tracking, daily.",
  },
  {
    title: "Dedicated Architect Support",
    desc: "Work directly alongside systems engineers and growth specialists with zero middlemen delays.",
  },
  {
    title: "High-Velocity Systems Deployment",
    desc: "We utilize modular rapid prototyping architectures to secure clean time-to-market records.",
  },
  {
    title: "Long-Term Alignment Ecosystems",
    desc: "We structure solutions that scale naturally alongside your scaling user metrics cleanly.",
  },
  {
    title: "Proven Baseline Performance",
    desc: "Backed by structured client evaluation pipelines and hundreds of production turn-keys.",
  },
];

export default function PremiumWhyChooseUs() {
  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      {/* Subtle Right Side Radial Aura */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: STATIC COPY ATTACHMENT */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block">
              Operational Matrix
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight">
              Your Infrastructure Growth Partner.
              <span className="block text-transparent bg-gradient-to-r from-blue-500 to-indigo-900 bg-clip-text mt-2">
                Not Just Another Agency.
              </span>
            </h2>

            <p className="mt-6 text-slate-800 text-sm md:text-base leading-relaxed font-medium">
              From initial system architecture formulation and interface styling
              parameters to target market campaign deployment, we help
              enterprises capture demand volume, secure predictable revenue
              tracks, and build continuous retention.
            </p>
          </div>

          {/* RIGHT COLUMN: REFINED ASYMMETRIC METRIC CARDS GRID */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {features.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 backdrop-blur-md  rounded-2xl p-5 hover:border-slate-800 transition-colors duration-300 shadow-md"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-8 w-8 rounded-lg bg-blue-400 border border-blue-200/10 flex items-center justify-center text-white">
                    <CheckCircle size={14} />
                  </div>
                  <h3 className="font-bold text-sm md:text-base text-blue-400 tracking-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="text-slate-900 text-xs leading-relaxed pl-11 font-medium">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
