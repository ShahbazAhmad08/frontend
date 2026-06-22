import { ArrowUpRight, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialMatrix = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/nazrasoft/",
      icon: FaLinkedinIn,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/people/Nazra-Software-Solutions/61554502484953/",
      icon: FaFacebookF,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/nazrasoftware/",
      icon: FaInstagram,
    },
    {
      name: "X / Twitter",
      href: "https://x.com/NazraSoft",
      icon: FaXTwitter,
    },
  ];

  return (
    <footer className="relative bg-black border-t border-slate-900 text-slate-400 py-20 lg:py-24 overflow-hidden">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* 1. BRAND ENGINE BLOCK (STAYS LEFT) */}
          <div className="lg:col-span-4 max-w-sm">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="Nazra Logo"
                className="h-16 w-16 object-contain"
              />
            </Link>
            <p className="mt-5 text-xs md:text-sm text-slate-400 leading-relaxed font-medium">
              An architectural full-suite digital agency crafting modern node
              ecosystems, structural web systems, organic growth solutions, and
              clean computational transformations globally.
            </p>

            {/* Font Awesome Social Matrix Badges */}
            <div className="flex items-center gap-3 mt-6">
              {socialMatrix.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="h-9 w-9 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-blue-500/30 text-slate-400 hover:text-white flex items-center justify-center transition-all duration-300 shadow-inner"
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                </a>
              ))}
            </div>
          </div>

          {/* 2. CORE SPECIALIZATIONS (SHIFTED LEFT-CENTER) */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Core Specializations
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400 font-medium">
              {[
                { label: "Website Design", path: "/services/website-design" },
                {
                  label: "Custom Coded Website",
                  path: "/services/custom-coded-website",
                },
                {
                  label: "Social Media Management",
                  path: "/services/social-media-management",
                },
                {
                  label: "Digital Marketing",
                  path: "/services/digital-marketing",
                },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 inline-block transition-transform duration-200 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. INTERNAL NODE (SHIFTED RIGHT-CENTER) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Internal Node
            </h4>
            <ul className="space-y-2.5 text-xs md:text-sm text-slate-400 font-medium">
              {[
                { label: "About Infrastructure", path: "/about" },
                { label: "Product Portfolio", path: "/our-work" },
                { label: "Connect Studio", path: "/contact" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-blue-500 inline-block transition-transform duration-200 hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. SECURE COMMUNICATIONS + MAP (NOW ON FAR RIGHT SIDE) */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-4">
              Secure Communications
            </h4>
            <ul className="space-y-3 text-xs md:text-sm text-slate-400 font-medium">
              {/* Mail Native Route */}
              <li>
                <a
                  href="mailto:info@nazrasoftware.com"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors"
                >
                  <Mail size={14} className="text-blue-500" />
                  <span>info@nazrasoftware.com</span>
                </a>
              </li>
              {/* Tel Native Route */}
              <li>
                <a
                  href="tel:+919449617399"
                  className="flex items-center gap-2 hover:text-blue-500 transition-colors tracking-wide font-mono"
                >
                  <Phone size={14} className="text-blue-500" />
                  <span>+91 94496 17399</span>
                </a>
              </li>
              {/* Maps Location Anchor Trigger */}
              <li className="pt-2 border-t border-slate-900 mt-2">
                <a
                  href="https://maps.google.com/?q=Kammavari+Pete,+Hoskote,+Karnataka+562114"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 hover:text-blue-500 transition-colors leading-relaxed"
                >
                  <MapPin size={14} className="text-blue-500 mt-0.5 shrink-0" />
                  <span>Kammavari Pete, Hoskote, Karnataka 562114</span>
                </a>
              </li>

              {/* Embedded Small Map Widget */}
              <li className="pt-3">
                <div className="w-full h-28 rounded-xl overflow-hidden border border-slate-800/80 bg-slate-900/40 relative group">
                  <iframe
                    title="Footer Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.253684177309!2d77.7955513!3d13.019478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0579910c1dbb%3A0x6bde9d3a8609b51!2sKammavari%20Pete%2C%20Hoskote%2C%20Karnataka%20562114!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                    className="w-full h-full border-0 grayscale invert opacity-40 group-hover:opacity-80 group-hover:grayscale-0 group-hover:invert-0 transition-all duration-500 pointer-events-none"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Dynamic Absolute Base Tag */}
        <div className="border-t border-slate-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {currentYear} Nazra Software Solutions. All Rights Reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link
              to="/terms"
              className="hover:text-white flex items-center gap-0.5 transition-colors"
            >
              <span>Prime Terms & Conditions</span>
              <ArrowUpRight size={10} />
            </Link>

            <span className="text-slate-800 hidden sm:inline">|</span>

            <Link
              to="/privacy"
              className="hover:text-white flex items-center gap-0.5 transition-colors"
            >
              <span>Privacy Policy</span>
              <ArrowUpRight size={10} />
            </Link>

            <span className="text-slate-800 hidden sm:inline">|</span>

            <Link
              to="/refund"
              className="hover:text-white flex items-center gap-0.5 transition-colors"
            >
              <span>Refund Policy</span>
              <ArrowUpRight size={10} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
