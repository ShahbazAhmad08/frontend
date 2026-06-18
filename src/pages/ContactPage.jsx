import { motion } from "framer-motion";
import { COLORS } from "../constants/theme";
import { Phone, Mail, MapPin } from "lucide-react";
import Contact from "../components/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const contactData = {
  phone: "+91 XXXXX XXXXX",
  email: "info@nazrasoftware.com",
  address: "Prayagraj, Uttar Pradesh",
  workingHours: "Mon - Sat | 9:00 AM - 7:00 PM",

  stats: [
    {
      value: "100+",
      label: "Projects Delivered",
    },
    {
      value: "98%",
      label: "Client Retention",
    },
    {
      value: "3+",
      label: "Countries Served",
    },
  ],
};

const cardClass =
  "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300";

export default function ContactPage() {
  return (
    <div className="relative bg-white text-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: COLORS.accent }}
        />

        <div
          className="absolute right-0 top-1/2 h-96 w-96 rounded-full blur-3xl opacity-10"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      {/* HERO */}

      <section className="relative py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <span className="font-medium" style={{ color: COLORS.primary }}>
              Contact Us
            </span>

            <h1 className="text-5xl md:text-6xl font-bold mt-6">
              Let's Discuss Your
              <span className="block" style={{ color: COLORS.primary }}>
                Next Project
              </span>
            </h1>

            <p className="text-slate-600 max-w-2xl mx-auto mt-8 text-lg">
              Whether you need a website, SEO, branding, or digital marketing
              services, we're here to help you grow your business online.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CARDS */}

      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div whileHover={{ y: -5 }} className={cardClass}>
              <Phone size={32} style={{ color: COLORS.primary }} />

              <h3 className="font-semibold text-xl mt-5">Call Us</h3>

              <p className="text-slate-600 mt-2">{contactData.phone}</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className={cardClass}>
              <Mail size={32} style={{ color: COLORS.primary }} />

              <h3 className="font-semibold text-xl mt-5">Email Us</h3>

              <p className="text-slate-600 mt-2">{contactData.email}</p>
            </motion.div>

            <motion.div whileHover={{ y: -5 }} className={cardClass}>
              <MapPin size={32} style={{ color: COLORS.primary }} />

              <h3 className="font-semibold text-xl mt-5">Visit Us</h3>

              <p className="text-slate-600 mt-2">{contactData.address}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <Contact />
    </div>
  );
}
