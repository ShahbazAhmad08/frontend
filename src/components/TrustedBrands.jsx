import { motion } from "framer-motion";

const brands = [
  "Google",
  "Meta",
  "Shopify",
  "HubSpot",
  "AWS",
  "Microsoft",
  "Google",
  "Meta",
  "Shopify",
  "HubSpot",
  "AWS",
  "Microsoft",
];

export default function PremiumTrustedBrands() {
  return (
    <section className="py-16 lg:py-20 bg-white border-y border-slate-200/60 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-[11px] text-slate-700 font-bold tracking-[0.25em] uppercase mb-12">
          Engineered Integrations & Global Ecosystem Alignment
        </p>

        {/* Infinite CSS/Framer Linear Horizontal Loop */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
          <motion.div
            className="flex items-center gap-16 md:gap-24 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-2xl md:text-3xl font-extrabold tracking-tight text-blue-600 hover:text-blue-700 transition-colors cursor-default select-none font-sans"
              >
                {brand}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
