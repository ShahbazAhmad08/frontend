import { motion } from "framer-motion";

export default function ProcessSection({ data }) {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
            Our Process
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-black text-slate-900">
            How We Deliver Results
          </h2>

          <p className="mt-5 text-slate-600 text-lg">
            A proven process that ensures quality, transparency and successful
            delivery.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {data.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="relative bg-slate-50 rounded-[30px] p-8 border border-slate-200"
            >
              {/* Number */}

              <div className="absolute -top-5 left-8">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                  {step.number}
                </div>
              </div>

              <div className="pt-8">
                <h3 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
