import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
const Contact = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const cardClass =
    "bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-xl transition-all duration-300";

  return (
    <section className="pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-10">
          <ContactInfo cardClass={cardClass} fadeUp={fadeUp} />

          <ContactForm cardClass={cardClass} fadeUp={fadeUp} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
