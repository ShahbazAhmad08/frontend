import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Calibrated 3.5 seconds delay before popping up
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  const cardClass =
    "bg-white border border-slate-200 rounded-2xl p-4 md:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.12)] transition-all duration-300 relative overflow-hidden";

  const fadeUp = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Glass Overlay Backdrop Blur */}
          <div
            className="fixed inset-0 bg-slate-900/30 backdrop-blur-[2px] z-[9998] transition-opacity duration-300"
            onClick={() => setIsOpen(false)} // Clicking outside closes it too
          />

          {/* Fixed Floating Center Modal Panel Container */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[9999] pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl bg-white rounded-[28px] border border-slate-200 shadow-[0_30px_70px_rgba(0,0,0,0.15)] p-6 md:p-8 pointer-events-auto relative"
            >
              {/* Floating Close Cross System Anchor */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-slate-50 border border-slate-150 hover:bg-slate-100 hover:text-black text-slate-500 flex items-center justify-center transition-colors shadow-sm"
              >
                <X size={16} />
              </button>

              {/* Title Header */}
              <div className="mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full inline-block mb-3">
                  Limited Availability
                </span>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
                  Schedule a Free Strategy Call
                </h3>
                <p className="text-slate-500 text-xs md:text-sm font-medium mt-1">
                  Fill in your project parameters below to sync directly with
                  our core engineering cell.
                </p>
              </div>

              {/* Re-using your exact interactive Input Form structure */}
              <div className="max-h-[60vh] overflow-y-auto pr-1">
                <ContactForm cardClass={cardClass} fadeUp={fadeUp} />
              </div>

              {/* Quick Communication Fallback Track Footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-400">
                <a
                  href="tel:+919449617399"
                  className="hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <Phone size={12} />
                  <span>+91 94496 17399</span>
                </a>
                <a
                  href="mailto:info@nazrasoftware.com"
                  className="hover:text-blue-600 flex items-center gap-1 transition-colors"
                >
                  <Mail size={12} />
                  <span>info@nazrasoftware.com</span>
                </a>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
