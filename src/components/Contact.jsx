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

  const cardClass =
    "bg-slate-50 backdrop-blur-xl border border-slate-200 rounded-[28px] shadow-[0_20px_40px_rgba(0,0,0,0.05)] hover:border-slate-300 transition-all duration-300 relative overflow-hidden group";

  return (
    <section className="relative py-20 lg:py-36 bg-white text-black overflow-hidden w-full box-border">
      {/* Decorative High-End Core Lighting Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-100 bg-linear-to-r from-blue-500/5 to-indigo-500/5 blur-[140px] rounded-full pointer-events-none mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10 w-full box-border">
        {/* STRUCTURAL HEADER WRAPPER */}
        <div className="max-w-3xl mb-12 lg:mb-24">
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
            className="mt-6 text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black leading-tight"
          >
            Let's Build Something Exceptional Together
          </motion.h2>
        </div>

        {/* CORE INTERACTIVE SYSTEM GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-start w-full box-border"
        >
          {/* Contact Details Engine */}
          <div className="lg:col-span-5 h-auto w-full">
            <ContactInfo cardClass={cardClass} fadeUp={fadeUp} />
          </div>

          {/* Interactive Input Form Control */}
          <div className="lg:col-span-7 w-full">
            <ContactForm cardClass={cardClass} fadeUp={fadeUp} />
            <motion.div
              variants={fadeUp}
              className="lg:col-span-12 w-full mt-4"
            >
              <div className={cardClass}>
                {/* Subtle top ambient light line for the map card */}
                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/10 to-transparent" />

                <div className="p-2 sm:p-3">
                  <iframe
                    title="Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.253684177309!2d77.7955513!3d13.019478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0579910c1dbb%3A0x6bde9d3a8609b51!2sKammavari%20Pete%2C%20Hoskote%2C%20Karnataka%20562114!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    className="w-full h-[350px] sm:h-[300px] rounded-[20px] border-0 grayscale-[20%] contrast-[110%] opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Embedded Map Container Block */}
        </motion.div>
      </div>
    </section>
  );
};

export default PremiumContact;
