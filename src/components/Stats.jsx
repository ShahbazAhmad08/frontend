import { motion } from "framer-motion";

const stats = [
  {
    number: "100+",
    label: "Projects Delivered",
  },
  {
    number: "60+",
    label: "Brands Served",
  },
  {
    number: "300%",
    label: "Average Growth",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                scale: 1.03,
              }}
              className="bg-slate-200 rounded-[28px] p-10 text-center border border-slate-200"
            >
              <h3 className="text-5xl font-black text-blue-600">
                {item.number}
              </h3>

              <p className="mt-4 text-slate-800">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
