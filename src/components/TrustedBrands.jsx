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

export default function TrustedBrands() {
  return (
    <section className="py-24 lg:py-32 border-y border-slate-100">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-slate-500 font-medium mb-12">
          TRUSTED BY 60+ BRANDS ACROSS INDIA
        </p>

        <div className="overflow-hidden">
          <motion.div
            className="flex gap-20"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {brands.map((brand, index) => (
              <div
                key={index}
                className="text-3xl font-black text-slate-300 whitespace-nowrap"
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
