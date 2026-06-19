import { motion } from "framer-motion";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const PremiumContact = () => {
  // Enhanced, micro-calibrated motion curves for premium look-and-feel
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1], // Custom premium cubic bezier ease
      },
    },
  };

  // Re-engineered card design system utilizing precise internal box shadows and ambient neon borders
  const cardClass =
    "bg-slate-50 backdrop-blur-xl border border-slate-200 rounded-[28px] p-6 lg:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group";

  return (
    <section className="relative py-28 lg:py-36 bg-white text-black overflow-hidden">
      {/* Decorative High-End Core Lighting Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-500/5 to-indigo-500/5 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* STRUCTURAL HEADER WRAPPER */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/20 px-4 py-1.5 rounded-full inline-block"
          >
            Connect With Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight"
          >
            Let's Build Something Exceptional Together
          </motion.h2>
        </div>

        {/* CORE INTERACTIVE SYSTEM GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start"
        >
          {/* Contact Details Engine */}
          <div className="lg:col-span-5 h-full">
            <ContactInfo cardClass={cardClass} fadeUp={fadeUp} />
          </div>

          {/* Interactive Input Form Control */}
          <div className="lg:col-span-7">
            <ContactForm cardClass={cardClass} fadeUp={fadeUp} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumContact;
