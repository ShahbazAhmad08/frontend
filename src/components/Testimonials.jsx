import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { reviews } from "../data/testimonials";

export default function PremiumTestimonials() {
  return (
    <section className="relative py-28 lg:py-36 bg-slate-100 text-slate-950 overflow-hidden">
      {/* Structural Ambient Background Light */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-blue-500/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* SECTION HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/10 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block">
            Verified Outcomes
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
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
              className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 flex flex-col justify-between hover:border-blue-300 transition-all duration-300 shadow-xl shadow-slate-200/50 relative group"
            >
              <Quote
                className="absolute top-4 right-4 text-slate-200 group-hover:text-blue-100 transition-colors pointer-events-none"
                size={32}
                strokeWidth={1.5}
              />

              <p className="text-slate-700 text-sm md:text-base leading-relaxed font-normal relative z-10">
                "{review.review}"
              </p>

              <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                {/* Dynamically checks for Image vs Initial Initials fallback */}
                {review.image ? (
                  <img
                    src={review.image}
                    alt={review.name}
                    className="h-10 w-10 rounded-full object-cover border border-slate-200"
                    onError={(e) => {
                      // Fallback protection just in case a path breaks
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="h-10 w-10 rounded-full bg-slate-900 flex items-center justify-center text-xs font-bold font-mono text-slate-200 shrink-0">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                )}

                <div>
                  <h4 className="font-bold text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                    {review.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 font-medium tracking-wide mt-0.5">
                    {review.role}
                    {review.company && (
                      <>
                        {" "}
                        ·{" "}
                        <span className="text-blue-600 font-semibold">
                          {review.company}
                        </span>
                      </>
                    )}
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
