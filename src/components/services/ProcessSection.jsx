export default function ProcessSection({ data }) {
  // console.log("ProcessSection data:", data); // Debugging line to check the data structure
  return (
    <section className="relative py-24 bg-white text-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 bg-blue-500/5 border border-blue-500/10 px-4 py-1.5 rounded-full inline-block">
            Ecosystem Pipeline
          </span>
          <h2 className="mt-6 text-3xl md:text-5xl font-extrabold tracking-tight text-black">
            How We Deliver Results
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            A deterministic deployment blueprint that safeguards asset quality,
            metrics reporting transparency, and turn-key delivery.
          </p>
        </div>

        {/* TIMELINE PATH MATRICES */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.map((step, index) => (
            <div
              key={index}
              className="relative bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-lg transition-all duration-300 group"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 left-5">
                <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center text-xs font-bold">
                  {step.number || `0${index + 1}`}
                </div>
              </div>

              <div className="pt-4">
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
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
