import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { COLORS } from "../constants/theme";
const ContactInfo = ({ cardClass, fadeUp }) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cardClass}
    >
      <span className="font-medium" style={{ color: COLORS.primary }}>
        Contact Us
      </span>

      <h2 className="text-4xl font-bold mt-4 leading-tight">
        Partner with Us for
        <span className="block" style={{ color: COLORS.primary }}>
          Digital Marketing Needs
        </span>
      </h2>

      <p className="text-slate-600 mt-6 leading-relaxed">
        We're always happy to answer your questions and guide you in choosing
        the right solutions that best fit your business needs.
      </p>

      {/* Phone */}

      <div className="mt-8 flex items-center gap-4">
        <div
          className="h-12 w-12 rounded-xl flex items-center justify-center"
          style={{
            backgroundColor: `${COLORS.accent}20`,
          }}
        >
          <Phone size={20} style={{ color: COLORS.primary }} />
        </div>

        <div>
          <p className="text-sm text-slate-500">Call us at</p>

          <a href="tel:+919449617399" className="font-semibold text-lg">
            +91 94496 17399
          </a>
        </div>
      </div>

      {/* Benefits */}

      <div className="mt-10">
        <h3 className="font-semibold text-xl mb-5">Your Benefits</h3>

        <div className="grid grid-cols-2 gap-4">
          {[
            "Client-focused",
            "Innovative",
            "Reliable",
            "Results-driven",
            "Problem-solving",
            "Transparent",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{
                  backgroundColor: COLORS.primary,
                }}
              />

              <span className="text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Process */}

      <div className="mt-12">
        <h3 className="font-semibold text-xl mb-6">What Happens Next?</h3>

        <div className="space-y-5">
          {[
            "We Schedule a call at your convenience",
            "We do a consulting meeting",
            "We prepare a proposal",
          ].map((step, index) => (
            <div key={step} className="flex gap-4">
              <div
                className="h-10 w-10 rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                style={{
                  backgroundColor: COLORS.primary,
                }}
              >
                {index + 1}
              </div>

              <p className="text-slate-700 pt-2">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
