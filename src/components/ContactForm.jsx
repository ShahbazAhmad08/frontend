import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

const ContactForm = ({ cardClass, fadeUp }) => {
  const [token, setToken] = useState(null);

  // High-end input styling class variable
  const inputClass =
    "w-full bg-slate-50 border border-slate-300 text-black rounded-xl px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 font-medium text-sm";

  return (
    <motion.div variants={fadeUp} className={cardClass}>
      {/* Decorative localized light streak */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="mb-8 relative z-10">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Schedule a Free Consultation
        </span>
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight text-black mt-2">
          Let's Talk About Your Project
        </h2>
      </div>

      <form
        className="space-y-4 relative z-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Name" className={inputClass} />
          <input type="text" placeholder="Phone" className={inputClass} />
        </div>

        <input
          type="email"
          placeholder="Email Address"
          className={inputClass}
        />

        <input type="text" placeholder="Company Name" className={inputClass} />

        <div className="relative">
          <select
            className={`${inputClass} appearance-none cursor-pointer text-slate-600`}
          >
            <option className="bg-white text-slate-600">
              Preferred Connection Mode
            </option>
            <option className="bg-white text-slate-900">Phone Call</option>
            <option className="bg-white text-slate-900">WhatsApp</option>
            <option className="bg-white text-slate-900">Email</option>
            <option className="bg-white text-slate-900">Google Meet</option>
          </select>
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-slate-400">
            <span className="text-[10px]">▼</span>
          </div>
        </div>

        <textarea
          rows={4}
          placeholder="To better assist you, please describe how we can help..."
          className={`${inputClass} resize-none`}
        />

        {/* Cloudflare Turnstile Verification */}
        <div className="border border-slate-200 bg-slate-50 rounded-xl p-3.5 flex justify-center items-center backdrop-blur-md">
          <Turnstile
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={(token) => setToken(token)}
            options={{ theme: "light" }}
          />
        </div>

        <button
          type="submit"
          className="w-full group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white py-4 rounded-xl font-semibold tracking-wide text-sm shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
        >
          <Send
            size={15}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
          <span>Submit Project Request</span>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
