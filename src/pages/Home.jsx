import PremiumHero from "../components/Hero";
import PremiumTrustedBrands from "../components/TrustedBrands";
import PremiumServices from "../components/Services";
import PremiumWhyChooseUs from "../components/WhyChooseUs";
import PremiumStats from "../components/Stats";
import PremiumCaseStudies from "../components/CaseStudies";
import PremiumTestimonials from "../components/Testimonials";
import PremiumCTA from "../components/CTA";
import FAQ from "../components/FAQ";
import PremiumContact from "../components/Contact";
import PremiumFadeUp from "../components/FadeUp"; // Using your optimized physics wrapper

export default function Home() {
  return (
    <main className="overflow-hidden bg-white min-h-screen text-black selection:bg-blue-500/20 selection:text-blue-600">
      {/* 01. HERO FRAME (No delay wrapper needed as it mounts instantly at top-of-fold) */}
      <PremiumHero />

      {/* 02. TRUSTED MARQUEE TICKER */}
      <PremiumFadeUp delay={0.1}>
        <PremiumTrustedBrands />
      </PremiumFadeUp>

      {/* 03. SERVICES BENTO GRID SYSTEM */}
      <PremiumFadeUp>
        <PremiumServices />
      </PremiumFadeUp>

      {/* 04. ASYMMETRIC WHY CHOOSE US LAYOUT */}
      <PremiumFadeUp>
        <PremiumWhyChooseUs />
      </PremiumFadeUp>

      {/* 05. DATA TELEMETRY STATS COUNTER */}
      <PremiumFadeUp>
        <PremiumStats />
      </PremiumFadeUp>

      {/* 06. PREMIUM PROJECT CASE STUDIES */}
      <PremiumFadeUp>
        <PremiumCaseStudies />
      </PremiumFadeUp>

      {/* 07. SOCIAL VERIFICATION & CLIENT REVIEWS */}
      <PremiumFadeUp>
        <PremiumTestimonials />
      </PremiumFadeUp>

      {/* 08. CLOSING HIGH-CONVERSION CTA OVERLAY CARD */}
      <PremiumFadeUp>
        <PremiumCTA />
      </PremiumFadeUp>

      {/* 09. ACCORDION FAQ ROW (Moved above contact to handle user concerns first) */}
      <PremiumFadeUp>
        <FAQ />
      </PremiumFadeUp>

      {/* 10. PRIMARY INPUT MATRIX / CONTACT FORM CLOSING VIEW */}
      <PremiumFadeUp>
        <PremiumContact />
      </PremiumFadeUp>
    </main>
  );
}
