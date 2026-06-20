import { useState, useEffect } from "react";
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../data/navigation";

export default function PremiumNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  // Prevents parent background body scroll leakage when mobile screen mode is toggled active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Collapse active menus instantly upon component window path updates
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl bg-white/80 backdrop-blur-xl border border-slate-200 rounded-2xl lg:rounded-full shadow-[0_24px_50px_-12px_rgba(0,0,0,0.1)] text-black">
      <div className="lg:pr-8 lg:pl-3 px-6">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO ENGINE MARK */}
          <Link to="/" className="group flex items-center">
            <div className="h-14 w-14 rounded-full bg-white border border-slate-200 group-hover:border-blue-500/40 flex items-center justify-center transition-all duration-300 relative shadow-md">
              <img
                src="/logo.png"
                alt="Nazra Logo"
                className="w-full h-full object-contain filter group-hover:scale-95 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION ROW CONTAINER */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isActive =
                location.pathname === item.path ||
                location.pathname.startsWith(item.path + "/");

              return hasDropdown ? (
                <div
                  key={item.title}
                  className="relative py-2"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm text-slate-600 hover:text-black hover:bg-slate-100/60 transition-all duration-200"
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${openDropdown === item.title ? "rotate-180 text-blue-600" : "text-slate-400"}`}
                    />
                  </Link>

                  {/* Premium Hover Dropdown Panel */}
                  <AnimatePresence>
                    {openDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-1 min-w-[320px] bg-white border border-slate-200 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-2xl p-2.5 z-50 overflow-hidden"
                      >
                        <div className="grid gap-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.path}
                              className="group/item flex flex-col p-3 rounded-xl hover:bg-slate-100 transition-colors duration-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-700 group-hover/item:text-blue-600 transition-colors">
                                  {subItem.title}
                                </span>
                                <ArrowRight
                                  size={14}
                                  className="text-slate-400 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all"
                                />
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.title}
                  to={item.path}
                  className={`relative px-4 py-2 font-medium text-sm transition-colors duration-200 ${isActive ? "text-black font-semibold" : "text-slate-600 hover:text-black"}`}
                >
                  <span>{item.title}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeTab"
                      className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-500 rounded-full"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* DESKTOP CALL TO ACTION ENTRANCE */}
          {/* 💡 FIXED: Wrapped desktop button in native phone trigger protocol */}
          <div className="hidden lg:block">
            <a href="tel:+919449617399" className="cursor-pointer">
              <button className="group relative inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-blue-600/10 transition-all duration-300">
                <span>Book a Call</span>
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </button>
            </a>
          </div>

          {/* MOBILE TOGGLE TRIGGER SYSTEM BUTTON */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:text-black hover:bg-slate-100/60 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY DROPDOWN INTERFACES FRAME */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-200 overflow-hidden max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain"
            >
              <div className="flex flex-col gap-1.5 py-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.title}
                      className="border-b border-slate-200 pb-1"
                    >
                      <div className="flex items-center justify-between w-full px-2">
                        <Link
                          to={item.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-3 flex-grow font-semibold text-sm text-black hover:text-blue-600 transition-colors"
                        >
                          {item.title}
                        </Link>
                        <button
                          onClick={() =>
                            setOpenDropdown(
                              openDropdown === item.title ? null : item.title,
                            )
                          }
                          className="p-3 text-slate-400 hover:text-slate-600 transition-colors"
                        >
                          <ChevronDown
                            size={16}
                            className={`transition-transform duration-300 ${openDropdown === item.title ? "rotate-180 text-blue-600" : ""}`}
                          />
                        </button>
                      </div>

                      <AnimatePresence initial={false}>
                        {openDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                            className="ml-4 pl-3 border-l border-slate-200 flex flex-col gap-1"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2.5 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      key={item.title}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 px-2 font-medium text-sm text-slate-700 hover:text-blue-600 transition-colors border-b border-slate-200 block"
                    >
                      {item.title}
                    </Link>
                  ),
                )}

                <a
                  href="tel:+919449617399"
                  className="w-full mt-6 block cursor-pointer"
                >
                  <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-semibold tracking-wide text-sm shadow-md transition-colors">
                    Book a Call
                  </button>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
