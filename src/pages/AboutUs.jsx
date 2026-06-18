// AboutUs.jsx

import { motion } from "framer-motion";
import { COLORS } from "../constants/theme";
import {
  Users,
  Award,
  CheckCircle,
  TrendingUp,
  HeartHandshake,
} from "lucide-react";
import Contact from "../components/Contact";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};
const cardClass =
  "bg-white border border-slate-200 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300";

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

const stats = aboutData.stats;

export default function AboutUs() {
  return (
    <div className="relative bg-white text-slate-900 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-0 left-0 h-96 w-96 rounded-full blur-3xl opacity-30"
          style={{ backgroundColor: COLORS.accent }}
        />

        <div
          className="absolute right-0 top-1/2 h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: COLORS.secondary }}
        />
      </div>

      {/* ================= ABOUT STORY ================= */}

      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <div
                className="relative h-125 rounded-3xl overflow-hidden border border-slate-200 shadow-sm"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.lightGray}, #EEF6FF)`,
                }}
              >
                <div
                  className="absolute top-10 left-10 h-32 w-32 rounded-full opacity-40"
                  style={{ backgroundColor: COLORS.accent }}
                />

                <div
                  className="absolute bottom-10 right-10 h-40 w-40 rounded-full opacity-20"
                  style={{ backgroundColor: COLORS.secondary }}
                />

                <div className="absolute inset-0 p-10 flex flex-col justify-center">
                  <span
                    className="text-sm font-semibold uppercase tracking-widest"
                    style={{ color: COLORS.primary }}
                  >
                    Since 2020
                  </span>

                  <h3 className="text-5xl font-bold mt-4 text-slate-900">
                    Building Digital
                    <br />
                    Success Stories
                  </h3>

                  <p className="text-slate-600 mt-6 max-w-sm">
                    Helping startups and businesses establish, grow, and scale
                    their online presence through modern digital solutions.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-10">
                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <h4
                        className="text-3xl font-bold"
                        style={{ color: COLORS.primary }}
                      >
                        100+
                      </h4>
                      <p className="text-sm text-slate-500">
                        Projects Delivered
                      </p>
                    </div>

                    <div className="bg-white rounded-2xl p-4 shadow-sm">
                      <h4
                        className="text-3xl font-bold"
                        style={{ color: COLORS.primary }}
                      >
                        98%
                      </h4>
                      <p className="text-sm text-slate-500">Repeat Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="font-medium" style={{ color: COLORS.primary }}>
                {aboutData.title}
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4">
                {aboutData.subtitle}
              </h2>

              {aboutData.paragraphs.map((text, index) => (
                <p
                  key={index}
                  className={`${index === 0 ? "mt-8" : "mt-6"} text-slate-600 leading-relaxed`}
                >
                  {text}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold">Numbers That Speak</h2>

            <p className="text-slate-500 mt-4">
              Our journey in digital transformation and business growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className={cardClass}
              >
                <h3
                  className="text-5xl font-bold"
                  style={{ color: COLORS.primary }}
                >
                  {item.number}
                </h3>

                <p className="text-slate-500 mt-3">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CORE VALUES ================= */}

      <section className="py-28" style={{ backgroundColor: COLORS.lightGray }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <span className="font-medium" style={{ color: COLORS.primary }}>
              Our Foundation
            </span>

            <h2 className="text-5xl font-bold mt-4">Core Values</h2>

            <p className="text-slate-500 mt-6 max-w-3xl mx-auto">
              Everything we do is guided by principles that help us build trust,
              deliver quality, and create long-term relationships with our
              clients.
            </p>
          </motion.div>

          {/* Bento Grid */}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <motion.div whileHover={{ scale: 1.03 }} className={cardClass}>
              <CheckCircle className="mb-5" style={{ color: COLORS.primary }} />

              <h3 className="text-xl font-semibold mb-3">
                Honesty & Transparency
              </h3>

              <p className="text-slate-500">
                We believe in clear communication and never make false promises.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className={cardClass}>
              <Users className="mb-5" style={{ color: COLORS.secondary }} />

              <h3 className="text-xl font-semibold mb-3">
                Client Satisfaction First
              </h3>

              <p className="text-slate-500">
                Every decision we make aims to deliver measurable value and
                results.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className={cardClass}>
              <HeartHandshake
                className="mb-5"
                style={{ color: COLORS.accent }}
              />

              <h3 className="text-xl font-semibold mb-3">
                Reliability & Support
              </h3>

              <p className="text-slate-500">
                We stand by our clients long after project delivery, ensuring
                continued success.
              </p>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} className={cardClass}>
              <TrendingUp className="text-orange-500 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Continuous Improvement
              </h3>

              <p className="text-slate-500">
                We constantly evolve our services to stay aligned with modern
                business needs.
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className={cardClass + " md:col-span-2"}
            >
              <Award className="text-yellow-500 mb-5" />

              <h3 className="text-xl font-semibold mb-3">
                Affordability with Quality
              </h3>

              <p className="text-slate-500">
                We prove that exceptional digital solutions don't have to come
                with premium pricing. Our goal is to make quality digital growth
                accessible to businesses of every size.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* FORM + INFO */}
      <Contact />
    </div>
  );
}
