import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a compounding, long-term ecosystem strategy. Most platforms observe meaningful baseline shifts within 3-6 months, factoring in global parameter weights, organic domain authority, and structured index updates.",
  },
  {
    question: "Do you provide native custom website engineering?",
    answer:
      "Absolutely. We engineer production-ready, lightning-fast digital solutions using custom modern technology structures like React, custom-coded web architectures, and advanced secure multi-vendor e-commerce hubs.",
  },
  {
    question: "How do you report campaign performance telemetry?",
    answer:
      "We build completely transparent, data-driven analytical insights shared monthly. This captures verified user acquisition data, absolute traffic multiplier signals, lead attribution tracking, and deterministic ROI matrices.",
  },
  {
    question: "What market industries do you work with?",
    answer:
      "We partner with high-velocity startups, enterprise healthcare infrastructure, interactive e-commerce spaces, modern global consultancies, real estate platforms, and scalable B2B services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      {/* Background Micro Mask Layer */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Deep Architecture
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            Frequently Answered Realities
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed">
            Everything you need to understand regarding our engineering systems,
            performance parameters, and collaborative roadmaps.
          </p>
        </div>

        {/* ACCORDION SYSTEM */}
        <div className="mt-20 space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
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
                      size={16}
                      className={`shrink-0 transition-colors duration-300 ${isOpen ? "text-blue-600" : "text-slate-600 group-hover:text-slate-700"}`}
                    />
                    <h3 className="font-semibold text-base md:text-lg text-slate-700 group-hover:text-black transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${isOpen ? "bg-blue-600 border-blue-600 text-white rotate-180" : "bg-white border-slate-300 text-slate-600"}`}
                  >
                    <ChevronDown
                      size={14}
                      className="transform transition-transform"
                    />
                  </div>
                </button>

                {/* Performance-Optimized Zero-Fr Dropdown Box */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-6 pl-14 text-xs md:text-sm text-slate-600 leading-relaxed border-t border-slate-200/40 pt-4 mt-1">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
