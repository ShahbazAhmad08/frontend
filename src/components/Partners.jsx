const partners = [
  "/partners/microsoft.webp",
  "/partners/pci.webp",
  "/partners/meta.webp",
  "/partners/linkedin.webp",
  "/partners/google.webp",
  "/partners/ssl.webp",
];

export default function Partners() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
          Trusted Partners
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-16 items-center">
            {[...partners, ...partners].map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-48 h-24 flex items-center justify-center"
              >
                <img
                  src={logo}
                  alt="Partner Logo"
                  className="max-h-20 w-auto object-contain grayscale-75 hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
