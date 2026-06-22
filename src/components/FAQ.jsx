import { useState } from "react";
import { ChevronDown, HelpCircle, ArrowDown, ArrowUp } from "lucide-react";

const faqs = [
  {
    question: "How much does a new website cost?",
    answer:
      "The cost depends on the project’s scope, design complexity, features, and technology used (MERN Stack or WordPress). We provide tailored solutions that fit your budget and business goals after a detailed consultation.",
  },
  {
    question: "Do you only create WordPress websites?",
    answer:
      "No. While we specialize in WordPress, we also build custom web applications using the MERN Stack (MongoDB, Express.js, React, Node.js) for businesses that require scalable and modern solutions.",
  },
  {
    question: "Will you maintain my site for me?",
    answer:
      "Yes. We offer ongoing maintenance packages for both WordPress and MERN-based applications, including updates, backups, security monitoring, and performance optimization.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. All websites we build are fully responsive and optimized for desktops, tablets, and smartphones to ensure the best user experience.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline varies depending on complexity. A basic WordPress site may take 2–4 weeks, while a custom MERN application may take 6–10 weeks. We’ll provide a timeline after understanding your requirements.",
  },
  {
    question: "What if I need help on my site down the road?",
    answer:
      "We’re always here to support you. You can choose from flexible support plans, or contact us anytime for updates, new features, or troubleshooting.",
  },
  {
    question: "Who hosts the website?",
    answer:
      "We can recommend reliable hosting providers, or you can choose your own. For WordPress sites, we suggest secure managed hosting. For MERN applications, we typically use AWS, DigitalOcean, or Vercel for high performance.",
  },
  {
    question: "Can I update the website myself once it’s built?",
    answer:
      "Yes. WordPress sites come with an easy-to-use admin dashboard, and we also provide training. For MERN projects, we can set up an admin panel to let you manage content and data.",
  },
  {
    question:
      "I want to have an email signup form on my website. How can I do this?",
    answer:
      "We can integrate signup forms with tools like Mailchimp, HubSpot, or custom API-based solutions so you can grow your email list seamlessly.",
  },
  {
    question: "How many pages do I get with my website?",
    answer:
      "That depends on your package and requirements. Some clients need a simple 5–10 page site, while others require 50+ pages or a custom app. We’ll work with you to define the right structure.",
  },
  {
    question: "How do you build my website?",
    answer:
      "We follow a clear process: discovery → design → development → testing → launch. Depending on your needs, we either use WordPress for CMS-driven sites or the MERN Stack for advanced web applications.",
  },
  {
    question: "I already have a website, how easy is it to change it?",
    answer:
      "Very easy. We can redesign, migrate, or enhance your existing website—whether it’s built in WordPress or another technology. We’ll ensure minimal downtime during the transition.",
  },
  {
    question: "How long will it take to get to the 1st page of Google?",
    answer:
      "SEO is a long-term investment. While we optimize your website during development, ranking on Google depends on competition, keywords, and content strategy. Typically, results take 3–6 months with ongoing SEO.",
  },
  {
    question: "How much does hosting cost?",
    answer:
      "Hosting depends on your choice. Shared WordPress hosting can start at ₹200–₹500/month, while premium managed hosting or MERN app hosting on AWS/DigitalOcean may cost more depending on traffic and performance needs.",
  },
  {
    question: "Do you do SEO for my website when you build it?",
    answer:
      "Yes. Every site we build follows SEO best practices, including optimized structure, fast loading speeds, and clean code. For deeper SEO campaigns, we also offer advanced digital marketing services.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(5); // Handles showing 5 at a time

  const handleLoadMore = () => {
    if (visibleCount >= faqs.length) {
      setVisibleCount(5); // Reset back to initial 5
      setOpenIndex(null); // Close any active active state
    } else {
      setVisibleCount((prev) => Math.min(prev + 5, faqs.length));
    }
  };

  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      {/* Background Micro Mask Layer */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Customer FAQ
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
          {faqs.slice(0, visibleCount).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`rounded-2xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                  isOpen
                    ? "bg-slate-50/40 border-slate-300/80 shadow-[0_15px_30px_rgba(0,0,0,0.05)]"
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
                      className={`shrink-0 transition-colors duration-300 ${
                        isOpen
                          ? "text-blue-600"
                          : "text-slate-600 group-hover:text-slate-700"
                      }`}
                    />
                    <h3 className="font-semibold text-base md:text-lg text-slate-700 group-hover:text-black transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`h-8 w-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ${
                      isOpen
                        ? "bg-blue-600 border-blue-600 text-white rotate-180"
                        : "bg-white border-slate-300 text-slate-600"
                    }`}
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

        {/* LOAD MORE BUTTON */}
        <div className="mt-12 text-center">
          <button
            onClick={handleLoadMore}
            className="inline-flex items-center gap-2 px-6 py-3 border border-slate-300 bg-white hover:bg-slate-50 text-slate-700 hover:text-black rounded-xl font-semibold text-sm transition-all duration-200 shadow-sm"
          >
            <span>
              {visibleCount >= faqs.length ? "Show Less" : "Load More"}
            </span>
            {visibleCount >= faqs.length ? (
              <ArrowUp size={15} className="text-slate-500" />
            ) : (
              <ArrowDown size={15} className="text-slate-500" />
            )}
          </button>
        </div>
      </div>
    </section>
  );
}
