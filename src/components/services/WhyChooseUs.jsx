import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs({ data }) {
  const benefits = [
    "Experienced Team",
    "Modern Technologies",
    "Fast Project Delivery",
    "Transparent Communication",
    "Business Focused Approach",
    "Ongoing Support",
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[32px] overflow-hidden shadow-xl">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
              {data.title}
            </h2>

            <p className="mt-6 text-slate-600 leading-relaxed text-lg">
              {data.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              {benefits.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-blue-600" />

                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
