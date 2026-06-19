import PremiumPortfolioHero from "../components/PortfolioHero";
import PremiumStats from "../components/Stats"; // Reusing your high-fidelity premium stats counter smoothly
import PortfolioProjectCard from "../components/PortfolioProjectCard";
import PremiumContact from "../components/Contact";
import PremiumFadeUp from "../components/FadeUp";
import { portfolioProjects } from "../data/portfolioData";

const OurWork = () => {
  return (
    <div className="bg-white min-h-screen text-black selection:bg-blue-500/20 selection:text-blue-600">
      {/* 01. PORTFOLIO TYPOGRAPHY HERO HEADER */}
      <PremiumPortfolioHero />

      {/* 02. METRIC DATA TELEMETRY OVERLAY BAR */}
      <PremiumFadeUp delay={0.1}>
        <PremiumStats />
      </PremiumFadeUp>

      {/* 03. CASE STUDIES FLOW MATRIX */}
      <section className="py-24 lg:py-32 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12 md:space-y-16">
            {portfolioProjects.map((project, index) => (
              <PremiumFadeUp key={project.id || index}>
                <PortfolioProjectCard project={project} index={index} />
              </PremiumFadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* 04. INTERACTIVE INPUT PIPELINE / CONSULTATION STUDIO */}
      <PremiumFadeUp>
        <PremiumContact />
      </PremiumFadeUp>
    </div>
  );
};

export default OurWork;
