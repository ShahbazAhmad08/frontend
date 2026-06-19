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
    <section className="relative py-24 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* IMAGE BLOCK */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-[28px] overflow-hidden shadow-[0_24px_50px_rgba(0,0,0,0.4)] border border-slate-900 aspect-video lg:aspect-square bg-slate-950">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-cover filter brightness-[0.85]"
              />
            </div>
          </div>

          {/* ASYMMETRIC CONTENT ENGINE */}
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
              Strategic Blueprint
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {data.title}
            </h2>

            <p className="mt-6 text-slate-400 text-sm md:text-base leading-relaxed font-medium">
              {data.description}
            </p>

            {/* BENEFITS BULLET MATRIX */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {benefits.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 text-slate-300 font-medium text-xs md:text-sm bg-slate-900/20 border border-slate-900/40 px-4 py-3 rounded-xl"
                >
                  <CheckCircle2 size={14} className="text-blue-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
