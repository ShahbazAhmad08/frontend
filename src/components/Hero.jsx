import { motion } from "framer-motion";
import {
  Search,
  TrendingUp,
  Globe,
  Smartphone,
  BarChart3,
  Code,
  Palette,
  ShoppingCart,
} from "lucide-react";

export default function Hero() {
  const pills = [
    {
      label: "Website Design",
      icon: Globe,
      className: "-top-5 left-20",
    },
    {
      label: "Custom Coded Website",
      icon: Code,
      className: "top-98 -left-8",
    },
    {
      label: "Social Media Management",
      icon: BarChart3,
      className: "top-58 -right-8",
    },
    {
      label: "Digital Marketing",
      icon: TrendingUp,
      className: "bottom-44 -right-8",
    },
    {
      label: "Search Engine Optimisation",
      icon: Search,
      className: "-bottom-0 left-1/2 -translate-x-1/2",
    },
    {
      label: "Graphics Designing",
      icon: Palette,
      className: "top-15 -left-16",
    },
    {
      label: "Mobile App Development",
      icon: Smartphone,
      className: "bottom-30 -left-16",
    },
    {
      label: "Coded E-Commerce Website",
      icon: ShoppingCart,
      className: "top-10 -right-16",
    },
  ];

  return (
    <section className="relative pt-24 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bg-white">
      {/* Grid Background */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `
            linear-gradient(#e5e7eb 1px, transparent 1px),
            linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}

          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-full text-sm font-semibold"
            >
              ★★★★★ TRUSTED BY 16,000+ CLIENTS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-8 text-5xl md:text-6xl lg:text-8xl font-black leading-[0.95] tracking-tight text-slate-900"
            >
              Your Success
              <br />
              Story Starts
              <br />
              <span className="text-blue-600"> Now!.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed"
            >
              Nazra Software Solutions is a full-suite digital marketing agency,
              offering a wide range of digital marketing services globally.
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 text-base lg:text-lg text-slate-600 max-w-xl leading-relaxed font-bold"
            >
              A division of Excellence Integrity Management Private Limited
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold transition text-sm lg:text-base">
                Get a Free Strategy Call →
              </button>

              <button className="border-2 border-slate-300 px-6 lg:px-8 py-3 lg:py-4 rounded-2xl font-semibold hover:bg-slate-50 transition text-sm lg:text-base">
                Explore All Services →
              </button>
            </motion.div>

            {/* Bottom Stats */}

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 mt-10 lg:mt-14 border-t pt-6 lg:pt-8">
              <div>
                <h4 className="font-bold text-lg">16,000+ Clients</h4>

                <p className="text-slate-500 text-sm">★★★★★ 4.9/5 Rating</p>
              </div>

              <div className="text-slate-600 font-medium">
                ✓ No Lock-in Contracts
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Floating Pills */}

            <div className="grid grid-cols-2 gap-3 lg:hidden mb-8">
              {pills.map((pill, index) => {
                const Icon = pill.icon;

                return (
                  <div
                    key={index}
                    className="bg-white border border-slate-200 p-3 rounded-2xl shadow-sm flex items-center gap-2"
                  >
                    <Icon size={16} className="text-blue-600 flex-shrink-0" />
                    <span className="text-xs font-medium leading-tight">
                      {pill.label}
                    </span>
                  </div>
                );
              })}
            </div>
            <div className="hidden lg:block">
              {pills.map((pill, index) => {
                const Icon = pill.icon;

                return (
                  <motion.div
                    key={index}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 4 + index,
                      repeat: Infinity,
                    }}
                    className={`absolute ${pill.className} bg-white border border-slate-200 px-5 py-3 rounded-full shadow-md flex items-center gap-2 z-20`}
                  >
                    <Icon size={16} className="text-blue-600" />
                    <span className="text-sm font-medium">{pill.label}</span>
                  </motion.div>
                );
              })}
            </div>

            {/* Dashboard */}

            <div className="bg-white rounded-[24px] lg:rounded-[40px] border border-slate-200 shadow-xl p-4 sm:p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-2.5 h-2.5 rounded-full bg-green-500" />

                <span className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                  Live Dashboard
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 lg:gap-5">
                <div className="border border-slate-200 rounded-2xl lg:rounded-3xl p-3 sm:p-4 lg:p-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    16,000+
                  </h3>

                  <p className="text-slate-500 mt-1 text-xs sm:text-sm lg:text-base">
                    Global Clients
                  </p>

                  <span className="text-green-600 text-xs sm:text-sm font-semibold">
                    +18% this year
                  </span>
                </div>

                <div className="border border-slate-200 rounded-3xl p-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    98.4%
                  </h3>

                  <p className="text-slate-500 mt-2">Success Rate</p>

                  <span className="text-green-600 text-sm font-semibold">
                    +2.1% this year
                  </span>
                </div>

                <div className="border border-slate-200 rounded-3xl p-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    $50M+
                  </h3>

                  <p className="text-slate-500 mt-2">Revenue Generated</p>

                  <span className="text-green-600 text-sm font-semibold">
                    +34% this year
                  </span>
                </div>

                <div className="border border-slate-200 rounded-3xl p-6">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black">
                    285%
                  </h3>

                  <p className="text-slate-500 mt-2">Avg Traffic Growth</p>

                  <span className="text-green-600 text-sm font-semibold">
                    +62% this year
                  </span>
                </div>
              </div>

              {/* Revenue Graph */}

              <div className="mt-5 lg:mt-8 border border-slate-200 rounded-2xl lg:rounded-3xl p-4 lg:p-6">
                <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-6">
                  Monthly Revenue Growth
                </h4>

                <div className="flex items-end gap-1 sm:gap-2 lg:gap-3 h-20 sm:h-24 lg:h-28">
                  {[30, 40, 35, 50, 45, 55, 52, 60, 70, 82, 80, 90].map(
                    (height, index) => (
                      <div
                        key={index}
                        className={`flex-1 rounded-lg ${
                          index === 11 ? "bg-blue-600" : "bg-slate-300"
                        }`}
                        style={{
                          height: `${height}%`,
                        }}
                      />
                    ),
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
