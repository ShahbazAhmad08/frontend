import { motion } from "framer-motion";
import { Monitor, Rocket, ShieldCheck, Smartphone } from "lucide-react";

const icons = [Monitor, Rocket, ShieldCheck, Smartphone];

export default function FeaturesSection({ data }) {
  return (
    <section className="py-20 lg:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Features
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
            Powerful Features For Your Business
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            Everything you need to grow your business online and stay ahead of
            competitors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mt-16">
          {data.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                }}
                className="bg-white rounded-[28px] p-8 shadow-lg border border-slate-100 hover:-translate-y-2 transition duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                  <Icon size={28} className="text-blue-600" />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
