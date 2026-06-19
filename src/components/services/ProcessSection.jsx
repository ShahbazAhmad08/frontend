export default function ProcessSection({ data }) {
  return (
    <section className="relative py-24 bg-slate-950 text-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-400 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Ecosystem Pipeline
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            How We Deliver Results
          </h2>
          <p className="mt-4 text-slate-400 text-sm md:text-base leading-relaxed font-medium">
            A deterministic deployment blueprint that safeguards asset quality,
            metrics reporting transparency, and turn-key delivery.
          </p>
        </div>

        {/* TIMELINE PATH MATRICES */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.map((step, index) => (
            <div
              key={index}
              className="relative bg-slate-900/10 border border-slate-900 rounded-2xl p-6 lg:p-8 flex flex-col justify-between group hover:border-slate-800 transition-colors duration-300 min-h-[260px]"
            >
              {/* Dynamic Number Node badge placement */}
              <div className="absolute -top-4 left-6">
                <div className="w-9 h-9 rounded-xl bg-slate-950 border border-slate-800 text-blue-400 flex items-center justify-center font-mono text-xs font-bold group-hover:border-blue-500/30 transition-colors">
                  {step.number || `0${index + 1}`}
                </div>
              </div>

              <div className="pt-4 flex flex-col justify-between h-full">
                <h3 className="text-lg font-bold tracking-tight text-white group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-400 text-xs md:text-sm leading-relaxed font-medium flex-grow">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
