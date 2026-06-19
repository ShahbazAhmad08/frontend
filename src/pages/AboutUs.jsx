import { motion } from "framer-motion";
import {
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  HeartHandshake,
  Sparkles,
} from "lucide-react";
import Contact from "../components/Contact";

const premiumFadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const premiumCardClass =
  "bg-slate-50/20 backdrop-blur-md border border-slate-200 rounded-[24px] p-6 lg:p-8 hover:border-slate-300 transition-all duration-300 shadow-xl relative overflow-hidden group";

const aboutData = {
  badge: "About Nazra Software Solutions",
  heading: "Your Trusted Digital Growth Partner",
  paragraphs: [
    "Nazra Software Solutions is a professional web development company in India providing complete end-to-end digital solutions that help businesses grow online.",
    "From website development, SEO, online advertising, branding, graphic design, and email marketing, we handle everything your business needs to build a strong digital presence.",
    "We specialize in helping startups and small businesses take their first step online while supporting established businesses with lead generation, visibility, and long-term digital growth.",
    "At Nazra Software Solutions, our success is measured by the success of our clients.",
  ],
  stats: [
    { number: "5+", label: "Years of Experience" },
    { number: "3+", label: "Countries Served" },
    { number: "98%", label: "Repeat Customers" },
    { number: "4+", label: "In-House Team" },
    { number: "100+", label: "Projects Delivered" },
    { number: "120+", label: "Keywords Ranked" },
    { number: "1000+", label: "Leads Generated" },
    { number: "24x6", label: "Operational Support" },
  ],
};

export default function AboutUs() {
  return (
    <div className="relative bg-white text-black overflow-hidden min-h-screen">
      {/* Dynamic Background Micro Grid & Glowing Ambient Blurs */}
      <div className="absolute inset-0 grid-pattern-dark mask-radial-top opacity-25 pointer-events-none" />
      <div className="absolute top-24 left-10 w-96 h-96 bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-indigo-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      {/* ================= SECTION 1: THE STORY ENGINE ================= */}
      <section className="pt-36 lg:pt-44 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* LEFT SIDE: OBSIDIAN CONTAINER */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={premiumFadeUp}
              className="lg:col-span-5 w-full"
            >
              <div className="relative bg-gradient-to-b from-slate-50 via-slate-50/90 to-white border border-slate-300 rounded-[32px] p-8 lg:p-10 overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.1)]">
                <div className="absolute -top-12 -left-12 h-32 w-32 bg-blue-500/10 blur-[50px] rounded-full pointer-events-none" />
                <div className="absolute -bottom-16 -right-16 h-40 w-40 bg-indigo-500/10 blur-[60px] rounded-full pointer-events-none" />

                <div className="relative z-10">
                  <span className="text-xs font-bold tracking-widest text-blue-400 uppercase">
                    Since 2020
                  </span>

                  <h3 className="text-3xl font-bold tracking-tight text-black mt-3">
                    Building Digital
                    <br />
                    Success Stories
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mt-4 font-medium">
                    Helping startups and enterprises establish, grow, and scale
                    their online presence through clean modern digital
                    solutions.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-300">
                    <div className="bg-slate-50/60 border border-slate-200 rounded-2xl p-4">
                      <h4 className="text-2xl font-bold text-black font-mono">
                        100+
                      </h4>
                      <p className="text-xs text-slate-600 font-semibold tracking-wide uppercase mt-1">
                        Deployments
                      </p>
                    </div>
                    <div className="bg-slate-50/60 border border-slate-200 rounded-2xl p-4">
                      <h4 className="text-2xl font-bold text-black font-mono">
                        98%
                      </h4>
                      <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase mt-1">
                        Retention
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE: COPY AND ESSAY BLOCKS */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={premiumFadeUp}
              className="lg:col-span-7 flex flex-col justify-center shadow-xl relative p-8 rounded-4xl bg-linear-to-b from-slate-50/20 to-white border border-slate-200 backdrop-blur-md"
            >
              <div className="inline-flex items-center gap-2 bg-blue-500/5 border border-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase w-fit mb-4 shadow-inner">
                <Sparkles size={12} className="animate-pulse" />
                <span>{aboutData.badge}</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-black leading-tight">
                {aboutData.heading}
              </h2>

              <div className="space-y-4 mt-6">
                {aboutData.paragraphs.map((text, index) => (
                  <p
                    key={index}
                    className="text-slate-600 text-sm md:text-base leading-relaxed font-medium"
                  >
                    {text}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: THE DATA TELEMETRY MATRIX ================= */}
      <section className="py-20 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={premiumFadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black">
              Numbers That Speak
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Our trackable history in global digital transformation and
              sustainable client brand growth velocity parameters.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {aboutData.stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="bg-gray-300 border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors"
              >
                <h3 className="text-3xl lg:text-4xl font-black text-blue-600 font-mono">
                  {item.number}
                </h3>
                <p className="text-slate-900 text-xs md:text-sm font-semibold tracking-tight mt-2">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: THE BENTO VALUES ================= */}
      <section className="py-24 border-t border-slate-200/60 bg-slate-50/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={premiumFadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
              Our Foundation
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-black mt-4">
              Core Architectural Values
            </h2>
            <p className="text-slate-600 text-sm mt-3 leading-relaxed">
              Everything we execute is dictated by core parameters that help us
              build secure client nodes, structural support lines, and
              transparent relationships.
            </p>
          </motion.div>

          {/* Core Bento System Box Alignment */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className={premiumCardClass}
            >
              <CheckCircle className="mb-4 text-blue-600" size={22} />
              <h3 className="text-lg font-bold tracking-tight text-black mb-2">
                Honesty & Absolute Transparency
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                We enforce completely transparent tracking parameters and clear
                engineering progress reporting pipelines. Zero hidden
                constraints.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={premiumCardClass}
            >
              <Users className="mb-4 text-indigo-600" size={22} />
              <h3 className="text-lg font-bold tracking-tight text-black mb-2">
                Client Conversion Velocity
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Every software build or strategic campaign asset is explicitly
                engineered to output verifiable baseline values and leads.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className={premiumCardClass}
            >
              <HeartHandshake className="mb-4 text-emerald-600" size={22} />
              <h3 className="text-lg font-bold tracking-tight text-black mb-2">
                Deterministic Operational Support
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                We maintain active operations supporting systems infrastructure
                and optimization checks long past initial framework deployment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={premiumCardClass}
            >
              <TrendingUp className="mb-4 text-amber-600" size={22} />
              <h3 className="text-lg font-bold tracking-tight text-black mb-2">
                Continuous Iteration Multiplier
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                Our engineering team constantly shifts core assets to adapt to
                evolving web algorithms, performance thresholds, and search
                metrics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              className={`${premiumCardClass} md:col-span-2`}
            >
              <Award className="mb-4 text-purple-600" size={22} />
              <h3 className="text-lg font-bold tracking-tight text-black mb-2">
                High-End Performance Access
              </h3>
              <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                We design and support exceptional software products and growth
                systems accessible to businesses of varying scales. We prove
                that elite custom web architecture doesn't require budget
                barriers to achieve market separation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renders your high-fidelity premium contact systems directly down-fold */}
      <Contact />
    </div>
  );
}
