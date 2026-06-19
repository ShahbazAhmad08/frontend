import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
// import { ArrowUpRight, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-slate-200 text-slate-800 py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Brand Engine block */}
          <div className="lg:col-span-5 max-w-sm">
            <Link to="/" className="flex items-center gap-2 group">
              <img src="/logo.png" alt="Nazra Logo" className="h-20 w-20" />
            </Link>
            <p className="mt-5 text-xs md:text-sm text-slate-200 leading-relaxed">
              An architectural full-suite digital agency crafting modern node
              ecosystems, structural web systems, organic growth solutions, and
              clean computational transformations globally.
            </p>
            {/* Social Matrix Badges */}
            <div className="flex items-center gap-3 mt-6">
              {/* {[Twitter, Linkedin, Github].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="h-8 w-8 rounded-lg bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-200"
                >
                  <Icon size={14} />
                </a>
              ))} */}
            </div>
          </div>

          {/* Links System Module */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-xs font-bold uppercase tracking-widest text-gray-50 mb-4">
              Core specializations
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 font-medium">
              {[
                "Search Optimization",
                "Paid System Campaigns",
                "Custom Fullstack Apps",
                "User Interface Studio",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-400 inline-block transition-transform duration-200 hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-50 mb-4">
              Internal Node
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 font-medium">
              {[
                "About Infrastructure",
                "Product Portfolio",
                "Connect Studio",
              ].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="hover:text-blue-600 inline-block transition-transform duration-200 hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-50 mb-4">
              Secure Communications
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-300 font-medium">
              <li className=" font-semibold">info@nazrasoftware.com</li>
              <li className="text-slate-300 text-xs mt-1 border-t border-slate-200 pt-2 tracking-wide font-mono">
                +91 94496 17399
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Absolute Base Tag */}
        <div className="border-t border-slate-200 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-300">
          <div>
            © {currentYear} Nazra Software Solutions. All rights reserved.
            Registered private cluster architecture.
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="hover:text-slate-50 flex items-center gap-0.5"
            >
              <span>Privacy Node</span>
              <ArrowUpRight size={10} />
            </a>
            <span className="text-slate-100">|</span>
            <a
              href="#"
              className="hover:text-slate-50 flex items-center gap-0.5"
            >
              <span>Terms of Operation</span>
              <ArrowUpRight size={10} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
