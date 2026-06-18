import Hero from "../components/Hero";
import TrustedBrands from "../components/TrustedBrands";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import CaseStudies from "../components/CaseStudies";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden bg-white">
      <Hero />
      <TrustedBrands />
      <Services />
      <WhyChooseUs />
      <Stats />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Contact />
      <FAQ />
    </main>
  );
}
