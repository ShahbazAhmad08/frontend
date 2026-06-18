import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection({ data }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            FAQs
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="font-semibold text-slate-900 text-lg">
                  {item.question}
                </h3>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
