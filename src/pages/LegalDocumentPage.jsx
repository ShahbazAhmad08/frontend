import { motion } from "framer-motion";
import {
  Scale,
  ShieldAlert,
  BadgeInfo,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { legalContent } from "../data/legalData";
import Contact from "../components/Contact";

export default function LegalDocumentPage({ type }) {
  const data = legalContent[type];

  // Fallback engine check
  if (!data)
    return (
      <div className="py-40 text-center text-slate-500">
        Document data block not found.
      </div>
    );

  // Icon switcher depending on document context
  const getHeaderIcon = () => {
    if (type === "terms") return <Scale size={28} className="text-blue-600" />;
    if (type === "privacy")
      return <BadgeInfo size={28} className="text-blue-600" />;
    return <ShieldAlert size={28} className="text-blue-600" />;
  };

  return (
    <div className="relative bg-white text-slate-900 overflow-hidden min-h-screen antialiased">
      {/* Structural Minimal Grid Mask Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

      {/* DOCUMENT TOP HEADER ARCHITECTURE */}
      <section className="pt-36 lg:pt-44 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto px-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="space-y-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-2 shadow-sm">
              {getHeaderIcon()}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
              {data.title}
            </h1>
            <p className="text-xs font-mono font-bold text-blue-700 uppercase tracking-widest bg-blue-50 border border-blue-100/60 w-fit px-3 py-1 rounded-md">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* CORE BODY MARKS ACCORDION */}
      <section className="pb-24 relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="bg-white border border-slate-200 rounded-[28px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.015)] space-y-8"
          >
            {/* Primary Intro Statement Block */}
            <p className="text-slate-700 text-sm md:text-base leading-relaxed font-semibold border-b border-slate-100 pb-6">
              {data.intro}
            </p>

            {/* Meta Block Parsing for Long Subtexts */}
            {data.meta && (
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed whitespace-pre-wrap bg-slate-50 border border-slate-100 p-5 rounded-2xl">
                {data.meta}
              </p>
            )}

            {/* Map Dynamic Body Clause Array Sections */}
            <div className="space-y-8 pt-2">
              {data.sections.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h3 className="text-base md:text-lg font-bold text-slate-950 tracking-tight">
                    {section.heading}
                  </h3>
                  <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Privacy Custom Micro-Grid Contact Pill (Renders only if contacts object exists) */}
            {data.footerContacts && (
              <div className="mt-10 pt-8 border-t border-slate-100 grid gap-4 sm:grid-cols-3 text-xs md:text-sm text-slate-600">
                <a
                  href={`mailto:${data.footerContacts.email}`}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Mail size={16} className="text-blue-600 shrink-0" />
                  <span className="truncate">{data.footerContacts.email}</span>
                </a>
                <a
                  href={`tel:${data.footerContacts.phone.replace(/\s+/g, "")}`}
                  className="flex items-center gap-2 hover:text-blue-600 transition-colors"
                >
                  <Phone size={16} className="text-blue-600 shrink-0" />
                  <span>{data.footerContacts.phone}</span>
                </a>
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-tight">
                    {data.footerContacts.address}
                  </span>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Direct Contact Layout component hook */}
      <Contact />
    </div>
  );
}
