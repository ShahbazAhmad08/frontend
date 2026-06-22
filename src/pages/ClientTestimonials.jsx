import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Quote,
  Star,
  ArrowRight,
  Layers,
  ShoppingBag,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { reviews } from "../data/testimonials";
import Contact from "../components/Contact";

const categories = [
  { id: "all", label: "All Stories", icon: Layers },
  { id: "projects", label: "Custom Projects", icon: Globe },
  { id: "ecommerce", label: "E-Commerce", icon: ShoppingBag },
];

export default function ClientTestimonials() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredReviews =
    activeTab === "all"
      ? reviews
      : reviews.filter((r) => r.category === activeTab);

  return (
    <main className="bg-slate-50 min-h-screen text-slate-900 selection:bg-blue-500/10 selection:text-blue-600">
      {/* 1. HERO INFRASTRUCTURE HERO */}
      <section className="relative py-24 lg:py-32 bg-white border-b border-slate-200 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-50" />
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Proven Transformations
          </span>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-none">
            Stories of Growth & <br className="hidden sm:inline" />
            <span className="text-blue-600">Digital Supremacy</span>
          </h1>
          <p className="mt-6 text-slate-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Discover how we collaborate with local businesses, e-commerce
            giants, and high-velocity brands to engineer high-yielding web
            applications.
          </p>
        </div>
      </section>

      {/* 2. LIVE FILTER NAVIGATION TAB BAR */}
      <section className="py-12 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-3">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 border ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-xl shadow-blue-600/10"
                    : "bg-white border-slate-200 text-slate-600 hover:text-black hover:border-slate-300"
                }`}
              >
                <Icon size={16} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3. DYNAMIC TRANSITIONING REVIEWS GRID */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mt-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredReviews.map((review, idx) => (
              <motion.div
                layout
                key={review.name}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -5 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 lg:p-8 flex flex-col justify-between shadow-xl shadow-slate-200/30 relative group transition-all duration-300"
              >
                <div className="relative">
                  {/* Rating indicator stars */}
                  <div className="flex items-center gap-1 mb-5">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="fill-orange-400 text-orange-400"
                      />
                    ))}
                  </div>

                  <Quote
                    className="absolute top-0 right-0 text-slate-100 group-hover:text-blue-500/10 transition-colors pointer-events-none"
                    size={40}
                    strokeWidth={1.5}
                  />

                  <p className="text-slate-700 text-sm md:text-base leading-relaxed relative z-10 font-normal">
                    "{review.review}"
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
                  {review.image ? (
                    <img
                      src={review.image}
                      alt={review.name}
                      className="h-10 w-10 rounded-full object-cover border border-slate-200 shrink-0"
                      onError={(e) => {
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

                  <div className="overflow-hidden">
                    <h4 className="font-bold text-sm text-slate-950 group-hover:text-blue-600 transition-colors truncate">
                      {review.name}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold tracking-wide mt-0.5 truncate">
                      {review.role} {review.company && "· "}
                      <span className="text-blue-600 font-bold">
                        {review.company}
                      </span>
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredReviews.length === 0 && (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl mt-12">
            <p className="text-slate-500 font-medium">
              No testimonials found in this category.
            </p>
          </div>
        )}
      </section>

      {/* 4. CLOSING HIGH-CONVERSION ACCELERATOR ACTION */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-200 mt-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-950">
            Ready to become our next success story?
          </h2>
          <p className="mt-4 text-slate-600 max-w-xl mx-auto text-sm md:text-base font-medium">
            Let's construct a lightning-fast, production-ready environment that
            amplifies your local competitive advantage seamlessly.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+919449617399"
              className="group relative inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold tracking-wide text-sm shadow-xl shadow-blue-600/10 hover:shadow-blue-700/20 transition-all duration-300 w-full sm:w-auto"
            >
              <span>Launch a Call Matrix</span>
              <div className="w-5 h-5 rounded-md bg-blue-700/80 group-hover:bg-blue-700 text-white flex items-center justify-center transition-colors">
                <ArrowRight
                  size={12}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </div>
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-black px-8 py-4 rounded-xl font-semibold text-sm transition-all duration-300 w-full sm:w-auto text-center"
            >
              Write Requirements
            </Link>
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
