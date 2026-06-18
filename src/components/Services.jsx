import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Megaphone,
  Smartphone,
  PenTool,
  BarChart3,
} from "lucide-react";

const services = [
  {
    id: "01",
    title: "Website Development",
    icon: Globe,
    description:
      "Custom websites built for speed, performance, and conversions.",
  },
  {
    id: "02",
    title: "SEO Optimization",
    icon: Search,
    description: "Rank higher on Google and attract qualified organic traffic.",
  },
  {
    id: "03",
    title: "Performance Marketing",
    icon: Megaphone,
    description: "Google Ads and Meta campaigns focused on measurable ROI.",
  },
  {
    id: "04",
    title: "Mobile Applications",
    icon: Smartphone,
    description:
      "Scalable Android and iOS applications tailored to your business.",
  },
  {
    id: "05",
    title: "Brand Identity",
    icon: PenTool,
    description: "Professional branding that helps your business stand out.",
  },
  {
    id: "06",
    title: "Analytics & Reporting",
    icon: BarChart3,
    description: "Transparent reports and actionable business insights.",
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Services
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            Growth Services Built To Scale Businesses
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
            We help businesses grow through strategic digital solutions,
            marketing campaigns, and technology-driven innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="group bg-white rounded-[28px] p-8 border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center justify-between">
                  <Icon size={34} className="text-blue-600" />

                  <span className="text-slate-300 font-black text-2xl">
                    {service.id}
                  </span>
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-8 text-blue-600 font-semibold flex items-center gap-2">
                  Learn More →
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
