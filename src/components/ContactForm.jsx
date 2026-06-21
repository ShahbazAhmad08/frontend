import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { Turnstile } from "@marsidev/react-turnstile";
import { useState, useTransition } from "react";

const ContactForm = ({ cardClass, fadeUp }) => {
  const [token, setToken] = useState(null);
  const [isPending, startTransition] = useTransition();

  // Controlled State Elements linked to database expectations
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    companyName: "",
    connectionMode: "Preferred Connection Mode",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", message: "" });

  const inputClass =
    "w-full bg-slate-50 border border-slate-300 text-black rounded-xl px-4 py-3 sm:py-3.5 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600/30 font-medium text-sm disabled:opacity-60";

  // Clean-up styling strings safely
  const cleanCardClass = cardClass
    ? cardClass.replace(/p-\d|lg:p-\d/g, "").trim()
    : "";

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    // Validate if Cloudflare block is completed
    if (!token) {
      setStatus({
        type: "error",
        message: "Please complete the security check.",
      });
      return;
    }

    startTransition(async () => {
      try {
        const res = await fetch("http://localhost:5000/api/contacts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          // Send name, email, and bundle information into the expected backend format
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: `[Phone: ${formData.phone}] [Company: ${formData.companyName}] [Preferred Mode: ${formData.connectionMode}] ${formData.message}`,
          }),
        });

        const data = await res.json();

        if (res.ok) {
          setStatus({
            type: "success",
            message: "Project request submitted successfully!",
          });
          // Reset form contents cleanly
          setFormData({
            name: "",
            phone: "",
            email: "",
            companyName: "",
            connectionMode: "Preferred Connection Mode",
            message: "",
          });
        } else {
          setStatus({
            type: "error",
            message: data.message || "Something went wrong.",
          });
        }
      } catch (err) {
        setStatus({
          type: "error",
          message: "Unable to connect to the server.",
        });
        console.error("Submission fail:", err);
      }
    });
  };

  return (
    <motion.div
      variants={fadeUp}
      className={`${cleanCardClass} p-4 sm:p-6 lg:p-8 w-full box-border relative`}
    >
      {/* Decorative localized light streak */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[60px] rounded-full pointer-events-none" />

      <div className="mb-6 sm:mb-8 relative z-10">
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Schedule a Free Consultation
        </span>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-black mt-1.5">
          Let's Talk About Your Project
        </h2>
      </div>

      {status.message && (
        <div
          className={`mb-4 p-3 rounded-xl text-xs font-semibold border text-center ${
            status.type === "success"
              ? "bg-green-500/10 border-green-500/20 text-green-600"
              : "bg-red-500/10 border-red-500/20 text-red-600"
          }`}
        >
          {status.message}
        </div>
      )}

      <form className="space-y-4 relative z-10" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={inputClass}
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isPending}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className={inputClass}
            value={formData.phone}
            onChange={handleChange}
            disabled={isPending}
          />
        </div>

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className={inputClass}
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isPending}
        />

        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          className={inputClass}
          value={formData.companyName}
          onChange={handleChange}
          disabled={isPending}
        />

        <div className="relative">
          <select
            name="connectionMode"
            className={`${inputClass} appearance-none cursor-pointer text-slate-600`}
            value={formData.connectionMode}
            onChange={handleChange}
            disabled={isPending}
          >
            <option className="bg-white text-slate-600" disabled>
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
          name="message"
          placeholder="To better assist you, please describe how we can help..."
          className={`${inputClass} resize-none`}
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isPending}
        />

        {/* Cloudflare Turnstile Verification Containment Box */}
        <div className="border border-slate-200 bg-slate-50 rounded-xl p-2 sm:p-3.5 flex justify-center items-center backdrop-blur-md overflow-hidden max-w-full">
          <div className="scale-90 xs:scale-100 origin-center">
            <Turnstile
              siteKey={import.meta.env.VITE_TURNSTILE_SITE_KEY}
              onSuccess={(token) => setToken(token)}
              options={{ theme: "light" }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full group inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-300 text-white py-4 rounded-xl font-semibold tracking-wide text-sm shadow-lg shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300 overflow-hidden"
        >
          <Send
            size={15}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
          <span>
            {isPending ? "Transmitting..." : "Submit Project Request"}
          </span>
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
