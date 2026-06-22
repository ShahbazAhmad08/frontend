import { motion } from "framer-motion";

const clients = [
  { name: "Client 1", logo: "/clients/client1.png" },
  { name: "Client 2", logo: "/clients/Client2.png" },
  { name: "Client 3", logo: "/clients/Client3.png" },
  { name: "Client 4", logo: "/clients/Client4.png" },
  { name: "Client 5", logo: "/clients/Client5.png" },
  { name: "Client 6", logo: "/clients/Client6.png" },
  { name: "Client 7", logo: "/clients/Client7.png" },
  { name: "Client 8", logo: "/clients/Client8.png" },
  { name: "Client 9", logo: "/clients/Client9.png" },
  { name: "Client 10", logo: "/clients/Client10.png" },
];

// Duplicate the array to create a seamless infinite marquee effect
const doubleClients = [...clients, ...clients];
export default function PremiumTrustedBrands() {
  return (
    <section className="py-16 lg:py-20 bg-white  overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header Block */}
        <p className="text-center text-[15px] text-slate-700 font-extrabold tracking-[0.25em] uppercase mb-12">
          Our Clients & Strategic Partners
        </p>

        {/* Infinite Moving Marquee Layout */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,#000_15%,#000_85%,transparent_100%)]">
          <motion.div
            className="flex items-center gap-16 md:gap-24 w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              duration: 30, // Relaxed time frame for smoother velocity tracking
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {doubleClients.map((client, index) => (
              <div
                key={index}
                className="h-16 md:h-20 w-auto flex items-center justify-center cursor-default select-none px-4"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} Logo`}
                  className="max-h-full max-w-full object-contain object-center"
                  loading="lazy"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
