import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How long does SEO take?",
    answer:
      "SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3-6 months, depending on competition and website health.",
  },
  {
    question: "Do you provide website development?",
    answer:
      "Yes. We design and develop high-performance websites tailored to your business goals, including custom-coded solutions and e-commerce platforms.",
  },
  {
    question: "How do you report campaign performance?",
    answer:
      "We provide transparent monthly reports covering traffic, leads, conversions, ROI, and actionable recommendations for continued growth.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with startups, healthcare, education, real estate, e-commerce, hospitality, consulting firms, and many other industries.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <p className="text-blue-600 font-semibold uppercase tracking-wider">
            FAQ
          </p>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Everything you need to know about our services and process.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => handleToggle(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <h3 className="font-semibold text-lg text-slate-900">
                  {faq.question}
                </h3>

                <ChevronDown
                  size={22}
                  className={`transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
