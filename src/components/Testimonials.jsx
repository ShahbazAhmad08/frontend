import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Smith",
    company: "TG Consulting",
    review:
      "Nazra transformed our online presence and generated incredible leads.",
      
  },
  {
    name: "Sarah Khan",
    company: "GeneHelix",
    review:
      "Professional team, transparent communication, and outstanding results.",
  },
  {
    name: "Michael Lee",
    company: "Quantain",
    review:
      "Our traffic and conversions increased significantly within months.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
            What Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {reviews.map((review) => (
            <motion.div
              key={review.name}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[28px] p-8 shadow-sm"
            >
              <p className="text-slate-600 leading-relaxed">
                "{review.review}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-slate-900">
                  {review.name}
                </h4>

                <p className="text-slate-500">
                  {review.company}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}