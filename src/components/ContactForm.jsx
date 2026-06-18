import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { COLORS } from "../constants/theme";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState } from "react";

const ContactForm = ({ cardClass, fadeUp }) => {
  const [token, setToken] = useState(null);
  // console.log(import.meta.env.VITE_TURNSTILE_SITE_KEY);
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={cardClass}
    >
      <div className="mb-8">
        <span className="font-medium" style={{ color: COLORS.primary }}>
          Schedule a Free Consultation
        </span>

        <h2 className="text-3xl font-bold mt-2">
          Let's Talk About Your Project
        </h2>
      </div>

      <form className="space-y-5">
        <input
          type="text"
          placeholder="Name"
          className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Phone"
          className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Company Name"
          className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500"
        />
        <select className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none">
          <option>Select Option</option>
          <option>Phone Call</option>
          <option>WhatsApp</option>
          <option>Email</option>
          <option>Google Meet</option>
        </select>
        <textarea
          rows={5}
          placeholder="To better assist you, please describe how we can help..."
          className="w-full border border-slate-200 rounded-xl px-4 py-4 outline-none focus:border-blue-500 resize-none"
        />
        {/* Cloudflare Turnstile */}
        <div className="border border-slate-200 rounded-xl p-4 bg-slate-50">
          <Turnstile
            siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
            onSuccess={(token) => setToken(token)}
          />
        </div>
        <button
          type="submit"
          className="w-full py-4 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
          style={{
            backgroundColor: COLORS.primary,
          }}
        >
          <Send size={18} />
          Submit
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
