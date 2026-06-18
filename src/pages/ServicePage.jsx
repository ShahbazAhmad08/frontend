import ServiceHero from "../components/services/ServiceHero";
import WhyChooseUs from "../components/services/WhyChooseUs";
import FeaturesSection from "../components/services/FeaturesSection";
import ProcessSection from "../components/services/ProcessSection";
import FAQSection from "../components/services/FAQSection";
import Contact from "../components/Contact";

export default function ServicePage({ data }) {
  //   console.log(data);
  if (!data) return null;
  return (
    <main className="overflow-hidden">
      <ServiceHero data={data.hero} />
      <WhyChooseUs data={data.whyChooseUs} />
      <FeaturesSection data={data.features} />
      <ProcessSection data={data.process} />
      // Safe: It will cleanly render nothing or skip the loop if faq is missing
      {data.faq?.length > 0 && <FAQSection data={data.faq} />}
      <Contact />
    </main>
  );
}
