export default function CTA() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto rounded-[40px] overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 p-10 md:p-16 relative">
        <div className="absolute right-0 top-0 h-full w-1/2 opacity-10">
          <div className="w-full h-full bg-[radial-gradient(circle,white_1px,transparent_1px)] bg-[length:24px_24px]" />
        </div>

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-['Anton'] text-white leading-none">
            READY TO
            <br />
            SCALE YOUR
            <br />
            BUSINESS?
          </h2>

          <p className="mt-6 text-blue-100 text-lg max-w-2xl">
            Let's build a growth engine that consistently attracts customers,
            generates qualified leads, and increases revenue.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center gap-3 bg-white text-blue-700 px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Book Strategy Call
              <span className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
                →
              </span>
            </button>

            <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold">
              View Success Stories
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
