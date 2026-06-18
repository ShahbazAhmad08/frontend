import { COLORS } from "../constants/theme";

const PortfolioHero = () => {
  return (
    <section className="py-24 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <span className="font-medium" style={{ color: COLORS.primary }}>
          Our Work
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mt-5">
          Helping Businesses Grow Through
          <span className="block" style={{ color: COLORS.primary }}>
            Digital Innovation
          </span>
        </h1>

        <p className="text-slate-600 mt-8 max-w-3xl mx-auto">
          Explore some of the projects and digital success stories we've
          delivered for our clients across multiple industries.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
