import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Monitor,
  Code,
  Share2,
  TrendingUp,
  Search,
  Palette,
  Smartphone,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { services } from "../data/services"; // Adjust path to your services file
import Contact from "../components/Contact";

// Maps data keys to high-end Lucide icon variants dynamically
const iconMap = {
  websiteDesign: Monitor,
  customCodedWebsite: Code,
  socialMediaManagement: Share2,
  digitalMarketing: TrendingUp,
  searchEngineOptimization: Search,
  graphicsDesigning: Palette,
  mobileAppDevelopment: Smartphone,
  codedEcommerceWebsite: Code,
  wordpressWebsiteDevelopment: Code,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function ServicesPage() {
  // Convert the services object into an array we can map cleanly
  const servicesList = Object.keys(services).map((key) => ({
    slug: key,
    ...services[key],
  }));

  return (
    <div className="relative bg-white text-slate-900 overflow-hidden min-h-screen antialiased">
      {/* Premium Minimal Grid Layout Line Mask for Bright Canvases */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* ================= HERO INTRO BANNER ================= */}
      <section className="relative pt-36 lg:pt-44 pb-16 z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-inner mx-auto">
              <Sparkles size={12} className="animate-pulse" />
              <span>Core Capabilities</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Ecosystems Engineered for
              <span className="block mt-1 text-transparent bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-500 bg-clip-text">
                Sustainable Brand Scale.
              </span>
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed font-medium">
              We design, code, market, and optimize. Explore our specialized
              software solutions and digital frameworks built to drive baseline
              commercial velocity parameters.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= SERVICES DISPLAY GRID ================= */}
      <section className="pb-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {servicesList.map((service) => {
              const IconComponent = iconMap[service.slug] || Monitor;

              return (
                <motion.div
                  key={service.slug}
                  variants={cardVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-slate-200/80 rounded-[24px] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(29,78,216,0.03)] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-6">
                    {/* Icon Slot */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100/60 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <IconComponent size={20} />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                        {service.hero.badge}
                      </h3>
                      <p className="text-slate-500 text-xs md:text-sm leading-relaxed font-medium line-clamp-3">
                        {service.hero.description}
                      </p>
                    </div>
                  </div>

                  {/* Dynamic Inner Feature Micro Pills (Shows first 2 features as dynamic tags) */}
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {service.features?.slice(0, 2).map((feat, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md"
                      >
                        {feat.title}
                      </span>
                    ))}
                  </div>

                  {/* Route Dynamic Call to Action Link */}
                  <div className="mt-8 pt-4 border-t border-slate-150 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight
                        size={14}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </Link>
                    <span className="text-[10px] font-mono font-bold text-slate-300 tracking-wider">
                      // {service.slug.slice(0, 3).toUpperCase()}_01
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Primary Input Consultation Studio Form */}
      <Contact />
    </div>
  );
}
