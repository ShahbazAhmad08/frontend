import PortfolioHero from "../components/PortfolioHero";
import PortfolioStats from "../components/PortfolioStats";
import PortfolioProjectCard from "../components/PortfolioProjectCard";

import { portfolioProjects } from "../data/portfolioData";
import Contact from "../components/Contact";

const OurWork = () => {
  return (
    <div className="bg-white">
      <PortfolioHero />

      <PortfolioStats />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-10">
            {portfolioProjects.map((project, index) => (
              <PortfolioProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default OurWork;
