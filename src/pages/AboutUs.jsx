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

      {/* ========================================================================= */}
      {/* ======================= FOUNDERS & EXECUTIVE HUB ======================== */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-white border-t border-slate-100 relative overflow-hidden">
        {/* Soft Ambient Radial Backing Aura */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="space-y-20 lg:space-y-28">
            {/* FOUNDER CARD 1: LEFT IMAGE | RIGHT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div className="lg:col-span-5 relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-[32px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 aspect-square lg:aspect-[4/5] shadow-sm">
                  <img
                    src="/team/founder.jpg"
                    alt="Founder Name"
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.01] group-hover:scale-102 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  <span>Executive Leadership</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                  Meet Our Founder
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  Configuring scalable global strategies and orchestrating
                  structural technical ecosystems since foundation inception.
                  Dedicated to matching absolute transparency with programmatic
                  execution mechanics.
                </p>
                <div className="pt-2 border-l-2 border-blue-600 pl-4 font-mono text-xs text-slate-500 tracking-wide uppercase">
                  Nazra Executive Node // Core_Alpha
                </div>
              </div>
            </motion.div>

            {/* FOUNDER CARD 2: RIGHT IMAGE | LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
              <div className="lg:col-span-7 order-2 lg:order-1 space-y-6 text-left">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-widest text-blue-700 uppercase bg-blue-50 border border-blue-100 px-3 py-1 rounded-full">
                  <span>Operational Direction</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
                  Meet Our Co-Founder
                </h2>
                <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
                  Driving operational performance growth tracks and validating
                  system metrics. Overseeing end-to-end user growth vectors to
                  guarantee sustainable target results across local and global
                  clusters.
                </p>
                <div className="pt-2 border-l-2 border-blue-600 pl-4 font-mono text-xs text-slate-500 tracking-wide uppercase">
                  Nazra Executive Node // Operations_Beta
                </div>
              </div>
              <div className="lg:col-span-5 order-1 lg:order-2 relative group">
                <div className="absolute inset-0 bg-blue-600/5 rounded-[32px] -translate-x-4 translate-y-4 -z-10 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
                <div className="rounded-[32px] overflow-hidden border border-slate-200 bg-slate-50 aspect-square lg:aspect-[4/5] shadow-sm">
                  <img
                    src="/team/co-founder.jpg"
                    alt="Co-Founder Name"
                    className="w-full h-full object-cover filter brightness-[0.98] contrast-[1.01] group-hover:scale-102 transition-transform duration-700"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ========================= CORE ENGINEERING MATRIX ======================= */}
      {/* ========================================================================= */}
      <section className="py-24 lg:py-32 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* TEAM CORE HEADER */}
          <div className="max-w-3xl mb-16 lg:mb-20 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full inline-block">
              Our Team
            </span>
            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              The People Behind Your Growth
            </h2>
            <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              50+ specialists who eat, breathe, and sleep digital strategy. No
              generalists. No interns managing your campaigns.
            </p>
          </div>

          {/* RESPONSIBLY SEGMENTED 4-COLUMN TEAM GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Mohammad Amaan",
                role: "Software Engineer & Tech Lead",
                desc: "Leading teams, designing scalable architecture, and writing clean, efficient code to solve complex problems.",
                stack: ["System Design", "Scalability", "Clean Code"],
              },
              {
                name: "Faiz Akhter",
                role: "Mobile Application Developer",
                desc: "Mobile & Web Developer turning complex problems into elegant, high-performance applications.",
                stack: ["React Native", "Node.js", "MongoDB", "React.js"],
              },
              {
                name: "md umar",
                role: "Web Developer",
                desc: "Efficient web applications from frontend to backend. Turning complex problems into scalable code.",
                stack: ["Node.js", "MongoDB", "React.js", "Express.js"],
              },
              {
                name: "Anshuman Singh",
                role: "AI Agents & Automation Developer",
                desc: "Engineering autonomous workflows and intelligent full-stack applications that make software smarter and faster.",
                stack: ["LLM Integration", "AI Workflows", "Automation"],
              },
              {
                name: "Shahbaz Ahmad",
                role: "MERN Stack Developer",
                desc: "React.js & MERN Stack Developer passionate about building scalable web applications and intuitive experiences.",
                stack: [
                  "Node.js",
                  "MongoDB",
                  "React.js",
                  "Express.js",
                  "React Native",
                ],
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] hover:shadow-[0_20px_40px_rgba(29,78,216,0.03)] hover:border-blue-500/20 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Subtle Top Node Header Indicator */}
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                    <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                      // ENG_CORE_0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-pulse" />
                  </div>

                  <h3 className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-blue-700 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-blue-700 mt-1 uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-slate-500 text-xs md:text-sm mt-3 leading-relaxed font-medium">
                    {member.desc}
                  </p>
                </div>

                {/* HORIZONTAL METRIC MICRO SKILL STACK PILLS */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                  {member.stack.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-semibold text-slate-600 bg-slate-100 border border-slate-200/60 px-2 py-0.5 rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Renders your high-fidelity premium contact systems directly down-fold */}
      <Contact />
    </div>
  );
}
