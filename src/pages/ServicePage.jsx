import ServiceHero from "../components/services/ServiceHero";
import WhyChooseUs from "../components/services/WhyChooseUs";
import FeaturesSection from "../components/services/FeaturesSection";
import ProcessSection from "../components/services/ProcessSection";
import FAQSection from "../components/services/FAQSection";
import Contact from "../components/Contact";
import PremiumFadeUp from "../components/FadeUp";

export default function ServicePage({ data }) {
  if (!data) return null;

  return (
    <main className="overflow-hidden bg-slate-950 min-h-screen text-slate-100 selection:bg-blue-500/20 selection:text-blue-300">
      {/* 01. HERO (Mounts instantly at top-of-fold) */}
      <ServiceHero data={data.hero} />

      {/* 02. WHY CHOOSE US ROW */}
      <PremiumFadeUp>
        <WhyChooseUs data={data.whyChooseUs} />
      </PremiumFadeUp>

      {/* 03. CAPABILITIES BENTO-STYLE FEATURES SECTION */}
      <PremiumFadeUp>
        <FeaturesSection data={data.features} />
      </PremiumFadeUp>

      {/* 04. STEPS PIPELINE LAYOUT */}
      <PremiumFadeUp>
        <ProcessSection data={data.process} />
      </PremiumFadeUp>

      {/* 05. ACCORDION FAQ BLOCK (Rendered above contact form for conversions) */}
      {data.faq?.length > 0 && (
        <PremiumFadeUp>
          <FAQSection data={data.faq} />
        </PremiumFadeUp>
      )}

      {/* 06. CONNECT STUDIO SYSTEM */}
      <PremiumFadeUp>
        <Contact />
      </PremiumFadeUp>
    </main>
  );
}
