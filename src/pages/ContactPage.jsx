import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Sparkles } from "lucide-react";
import Contact from "../components/Contact";

const premiumFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const contactData = {
  phone: "+91 94496 17399", // Unmasked your verified support line from the previous block
  email: "info@nazrasoftware.com",
  address: "Kammavari Pete, Bengaluru, Karnataka", // Updated to match your formal headquarters data cleanly
  workingHours: "Mon - Sat | 9:00 AM - 7:00 PM",
};

const premiumCardClass =
  "bg-slate-900/30 backdrop-blur-md border border-slate-900 rounded-[24px] p-6 lg:p-8 flex flex-col items-start hover:border-slate-800 hover:bg-slate-900/50 transition-all duration-300 shadow-xl group";

export default function ContactPage() {
  return (
    <div className="relative bg-slate-950 text-slate-100 overflow-hidden min-h-screen">
      {/* Background Micro Grid Layer & Ambient Radiance */}
      <div className="absolute inset-0 grid-pattern-dark mask-radial-top opacity-25 pointer-events-none" />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* ================= HERO INTRO SECTION ================= */}
      <section className="relative pt-36 lg:pt-44 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={premiumFadeUp}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase shadow-inner mx-auto">
              <Sparkles size={12} className="animate-pulse" />
              <span>Studio Communications</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Let's Discuss Your
              <span className="block mt-1 text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-200 bg-clip-text">
                Next Digital Initiative.
              </span>
            </h1>

            <p className="text-slate-400 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-relaxed font-medium">
              Whether you are looking to engineer a production-ready custom web
              framework, scale organic index signals, or launch high-conversion
              advertising assets, we are built to support your roadmap.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= HIGH-END MEDIA GRID ================= */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CALL LINK CARD */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -4 }}
              className={premiumCardClass}
            >
              <div className="h-11 w-11 rounded-xl bg-blue-500/5 border border-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                <Phone size={18} />
              </div>
              <h3 className="font-bold text-lg text-white mt-6 tracking-tight">
                Voice Connection
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Direct Voice Infrastructure
              </p>
              <a
                href={`tel:${contactData.phone.replace(/\s+/g, "")}`}
                className="text-slate-300 group-hover:text-blue-400 transition-colors mt-4 text-sm font-semibold tracking-tight block"
              >
                {contactData.phone}
              </a>
            </motion.div>

            {/* EMAIL LINK CARD */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -4 }}
              className={premiumCardClass}
            >
              <div className="h-11 w-11 rounded-xl bg-indigo-500/5 border border-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <Mail size={18} />
              </div>
              <h3 className="font-bold text-lg text-white mt-6 tracking-tight">
                Secure Mail
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Enterprise Inquiries
              </p>
              <a
                href={`mailto:${contactData.email}`}
                className="text-slate-300 group-hover:text-blue-400 transition-colors mt-4 text-sm font-semibold tracking-tight block break-all"
              >
                {contactData.email}
              </a>
            </motion.div>

            {/* GEOLOCATION CARD */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              whileHover={{ y: -4 }}
              className={`${premiumCardClass} sm:col-span-2 lg:col-span-1`}
            >
              <div className="h-11 w-11 rounded-xl bg-purple-500/5 border border-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300">
                <MapPin size={18} />
              </div>
              <h3 className="font-bold text-lg text-white mt-6 tracking-tight">
                HQ Coordinates
              </h3>
              <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                Studio Node Location
              </p>
              <p className="text-slate-300 mt-4 text-sm font-semibold tracking-tight leading-relaxed">
                {contactData.address}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Embedded High-Fidelity Form + Info Sections */}
      <Contact />
    </div>
  );
}
