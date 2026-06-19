import { Monitor, Rocket, ShieldCheck, Smartphone } from "lucide-react";

const icons = [Monitor, Rocket, ShieldCheck, Smartphone];

export default function FeaturesSection({ data }) {
  return (
    <section className="relative py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Capabilities
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            Powerful Features For Your Business
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            Everything you need to scale your infrastructure layout online and
            pull past competing matrices.
          </p>
        </div>

        {/* FEATURES ROW GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mt-16">
          {data.map((feature, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={index}
                className="bg-slate-50/20 backdrop-blur-md rounded-2xl p-6 lg:p-7 border border-slate-200 hover:border-slate-300 transition-colors duration-300 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-white border border-slate-300 flex items-center justify-center text-slate-600">
                    <Icon size={18} className="text-blue-600" />
                  </div>

                  <h3 className="mt-6 text-lg font-bold tracking-tight text-black">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-xs md:text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
