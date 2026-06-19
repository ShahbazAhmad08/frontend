import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ data }) {
  // Set initial open index to null so all tabs are clean on frame initialize
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-24 bg-white text-black overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Frictional Clarity
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            Frequently Answered Concerns
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            Everything you need to evaluate before initiating developmental
            pipelines.
          </p>
        </div>

        {/* ACCORDION SYSTEM */}
        <div className="mt-16 space-y-3.5">
          {data.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/40 border-slate-300/80 shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
                    : "bg-slate-50/10 border-slate-200 hover:border-slate-300/60"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left group"
                >
                  <div className="flex items-center gap-4 pr-4">
                    <HelpCircle
                      size={15}
                      className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-600 group-hover:text-slate-700"}`}
                    />
                    <h3 className="font-semibold text-sm md:text-base text-slate-700 group-hover:text-black transition-colors">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? "bg-blue-600 border-blue-600 text-white rotate-180" : "bg-white border-slate-300 text-slate-600"}`}
                  >
                    <ChevronDown size={12} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pl-14 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 pt-4 mt-1">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
