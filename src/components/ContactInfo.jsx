import { motion } from "framer-motion";
import { Phone, CheckCircle2 } from "lucide-react";

const ContactInfo = ({ cardClass, fadeUp }) => {
  return (
    <motion.div
      variants={fadeUp}
      className={`${cardClass} flex flex-col justify-between h-full`}
    >
      <div>
        <span className="text-xs font-bold tracking-widest text-blue-600 uppercase">
          Contact Us
        </span>

        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-black mt-2 leading-tight">
          Partner with Us for{" "}
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text">
            Digital Growth
          </span>
        </h2>

        <p className="text-slate-600 mt-4 text-sm lg:text-base leading-relaxed">
          We're always happy to answer your questions and guide you in choosing
          the right solutions that best fit your business infrastructure.
        </p>

        {/* Connection Link Card */}
        <div className="mt-8 bg-white/40 border border-slate-200/60 p-4 rounded-xl flex items-center gap-4 group/link hover:border-slate-300/80 transition-colors">
          <div className="h-11 w-11 rounded-lg bg-blue-500/10 border border-blue-600/20 flex items-center justify-center text-blue-600 group-hover/link:bg-blue-600 group-hover/link:text-white transition-all duration-300">
            <Phone size={18} />
          </div>

          <div>
            <p className="text-[11px] text-slate-700 uppercase tracking-wider font-semibold">
              Direct Voice Line
            </p>
            <a
              href="tel:+919449617399"
              className="font-bold text-lg text-black tracking-tight hover:text-blue-600 transition-colors block mt-0.5"
            >
              +91 94496 17399
            </a>
          </div>
        </div>

        {/* Benefits Structural Blocks */}
        <div className="mt-10">
          <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-4">
            Your Benefits
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {[
              "Client-focused",
              "Innovative",
              "Reliable",
              "Results-driven",
              "Problem-solving",
              "Transparent",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-slate-700 font-medium text-xs bg-white/20 border border-slate-200/40 px-3 py-2 rounded-xl"
              >
                <CheckCircle2 size={14} className="text-blue-600 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Process Sequence */}
      <div className="mt-12 border-t border-slate-200/60 pt-8">
        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-700 mb-6">
          What Happens Next?
        </h4>

        <div className="relative space-y-6 before:absolute before:top-2 before:left-4 before:bottom-2 before:w-px before:bg-slate-300/80">
          {[
            "We schedule a discovery session at your convenience",
            "We hold a collaborative architectural consultation",
            "We engineer and deliver a tailored roadmap proposal",
          ].map((step, index) => (
            <div key={step} className="flex gap-4 relative z-10 group/step">
              <div className="h-8 w-8 rounded-full bg-white border border-slate-300 text-slate-600 font-mono text-xs font-bold flex items-center justify-center shrink-0 group-hover/step:border-blue-600/50 group-hover/step:text-blue-600 transition-colors duration-300">
                0{index + 1}
              </div>
              <p className="text-slate-700 text-xs sm:text-sm pt-1.5 leading-relaxed">
                {step}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ContactInfo;
