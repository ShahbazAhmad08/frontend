import { COLORS } from "../constants/theme";

const stats = [
  {
    value: "100+",
    label: "Projects Delivered",
  },
  {
    value: "1000+",
    label: "Leads Generated",
  },
  {
    value: "120+",
    label: "Keywords Ranked",
  },
  {
    value: "98%",
    label: "Client Retention",
  },
];

const PortfolioStats = () => {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="
                bg-white
                border
                border-slate-200
                rounded-3xl
                p-8
                text-center
                shadow-sm
              "
            >
              <h3
                className="text-5xl font-bold"
                style={{
                  color: COLORS.primary,
                }}
              >
                {item.value}
              </h3>

              <p className="text-slate-600 mt-3">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioStats;
