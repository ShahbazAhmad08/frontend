import { CheckCircle2 } from "lucide-react";

const features = [
  "ROI-Focused Strategies",
  "Transparent Reporting",
  "Dedicated Team Support",
  "Fast Project Delivery",
  "Long-Term Partnership",
  "Proven Track Record",
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Why Choose Nazra
            </span>

            <h2 className="mt-4 text-4xl md:text-6xl font-black text-slate-900">
             Your Growth Partner,

              <span className="block text-blue-600">Not Just Another Agency</span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              From strategy and design to development and marketing,
we help businesses acquire customers, increase revenue,
and scale sustainably.
            </p>
          </div>

          <div className="grid gap-5">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 bg-slate-50 border border-slate-100 rounded-2xl p-5"
              >
                <CheckCircle2 size={24} className="text-blue-600" />

                <span className="font-semibold text-slate-800">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
