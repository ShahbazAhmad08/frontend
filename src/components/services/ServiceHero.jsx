import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ServiceHero({ data }) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-white" />

      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              {data.badge}
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-7xl font-black leading-tight text-slate-900">
              {data.heading}
            </h1>

            <p className="mt-6 text-base lg:text-lg text-slate-600 leading-relaxed max-w-xl">
              {data.description}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition">
                Get Free Consultation
                <ArrowRight size={18} />
              </button>

              <button className="border border-slate-300 px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 transition">
                <Phone size={18} />
                Contact Us
              </button>
            </div>

            {/* Stats */}

            <div className="grid grid-cols-3 gap-5 mt-10">
              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
                  500+
                </h3>

                <p className="text-sm text-slate-500">Projects</p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
                  98%
                </h3>

                <p className="text-sm text-slate-500">Success Rate</p>
              </div>

              <div>
                <h3 className="text-2xl lg:text-3xl font-black text-slate-900">
                  24/7
                </h3>

                <p className="text-sm text-slate-500">Support</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src={data.image}
                alt={data.heading}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -bottom-5 -left-5 bg-white shadow-xl rounded-3xl p-5 hidden md:block">
              <h4 className="font-bold text-slate-900">Professional Service</h4>

              <p className="text-sm text-slate-500 mt-1">
                Tailored for business growth
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
