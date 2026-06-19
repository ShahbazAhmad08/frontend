import { motion } from "framer-motion";

const highValueStats = [
  {
    value: "100+",
    label: "Verified Deployments",
    rate: "Zero Critical Errors",
  },
  {
    value: "60+",
    label: "Brands Scaled Globally",
    rate: "High-Growth Pipelines",
  },
  { value: "300%", label: "Average Traffic Jump", rate: "Organic Compounding" },
  {
    value: "99%",
    label: "Client Account Retention",
    rate: "Contract-Free Trust",
  },
];

export default function PremiumStats() {
  return (
    <section className="relative py-20 lg:py-24 bg-slate-950 border-y border-slate-900/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highValueStats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gradient-to-b from-slate-900/40 to-transparent border border-slate-900 rounded-2xl p-6 lg:p-8 text-left hover:border-slate-800 transition-colors"
            >
              <h3 className="text-4xl lg:text-5xl font-black text-white tracking-tight font-mono">
                {item.value}
              </h3>
              <p className="mt-3 text-slate-300 text-sm font-semibold tracking-tight">
                {item.label}
              </p>
              <span className="text-[10px] text-slate-500 uppercase font-bold font-mono tracking-widest block mt-1 border-l-2 border-blue-500/50 pl-2">
                {item.rate}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
