import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const reviews = [
  {
    name: "John Smith",
    role: "Managing Director",
    company: "TG Consulting",
    review:
      "Nazra completely transformed our technical online footprint, building an elite ecosystem that safely aggregates high-intent lead generations consistently.",
  },
  {
    name: "Sarah Khan",
    role: "Operations Head",
    company: "GeneHelix",
    review:
      "An exceptionally professional development team. Their transparent analytics updates, code reliability, and strategic communication infrastructure are unmatched.",
  },
  {
    name: "Michael Lee",
    role: "Chief Marketing Officer",
    company: "Quantain",
    review:
      "Our core performance velocity and customer conversions surged exponentially within initial quarters. A definitive growth partner.",
  },
];

export default function PremiumTestimonials() {
  return (
    <section className="relative py-28 lg:py-36  bg-slate-100 text-slate-950 overflow-hidden">
      {/* Structural Ambient Background Light */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-blue-500/[0.02] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-gray-600/30 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Verified Outcomes
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-blue-400 leading-tight">
            Trusted by Leaders at High-Velocity Brands
          </h2>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-20">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-transparent backdrop-blur-md rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-slate-800 transition-all duration-300 shadow-2xl relative group"
            >
              <Quote
                className="absolute top-2 right-2 text-black pointer-events-none"
                size={32}
                strokeWidth={1}
              />

              <p className="text-slate-900 text-sm md:text-base leading-relaxed font-medium relative z-10">
                "{review.review}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-900/80 flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center text-xs font-bold font-mono text-slate-400">
                  {review.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="cursor-pointer">
                  <h4 className="font-bold text-sm text-blue-600 group-hover:text-blue-400 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-600 font-medium tracking-wide mt-0.5">
                    {review.role} ·{" "}
                    <span className="text-slate-700">{review.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
