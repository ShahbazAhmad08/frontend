import { useState } from "react";
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../data/navigation";

export default function PremiumNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-7xl bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-2xl lg:rounded-full shadow-[0_24px_50px_-12px_rgba(0,0,0,0.7)] text-slate-100">
      <div className="px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* LOGO: Clean & Refined Typography */}
          <Link to="/" className="group flex items-center">
            {/* Elevated Glass Backdrop Wrapper - Scaled up for higher visibility */}
            <div className="h-20 w-20 rounded-full bg-slate-900 border border-slate-800 dark:border-slate-800/80 group-hover:border-blue-500/40 flex items-center justify-center  transition-all duration-300 relative shadow-2xl">
              <img
                src="/logo.png"
                alt="Nazra Logo"
                className="w-full h-full object-contain filter group-hover:scale-95 transition-transform duration-300"
              />
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => {
              const hasDropdown = !!item.dropdown;
              const isActive = location.pathname === item.path;

              return hasDropdown ? (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(item.title)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button className="flex items-center gap-1.5 px-4 py-2 rounded-full font-medium text-sm text-slate-300 hover:text-white hover:bg-slate-800/40 transition-all duration-200">
                    <span>{item.title}</span>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${openDropdown === item.title ? "rotate-180 text-blue-400" : "text-slate-500"}`}
                    />
                  </button>

                  {/* Premium Hover Dropdown Panel */}
                  <AnimatePresence>
                    {openDropdown === item.title && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full left-0 mt-2 min-w-[320px] bg-slate-900 border border-slate-800/80 shadow-[0_20px_40px_rgba(0,0,0,0.5)] rounded-2xl p-2.5 z-50 overflow-hidden"
                      >
                        <div className="grid gap-1">
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.title}
                              to={subItem.path}
                              className="group/item flex flex-col p-3 rounded-xl hover:bg-slate-800/50 transition-colors duration-200"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-sm font-semibold text-slate-200 group-hover/item:text-blue-400 transition-colors">
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
                  className={`relative px-4 py-2 font-medium text-sm transition-colors duration-200 ${isActive ? "text-white" : "text-slate-300 hover:text-white"}`}
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

          {/* DESKTOP CTA BUTTON */}
          <div className="hidden lg:block">
            <button className="group relative inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 text-white px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide shadow-md shadow-blue-600/10 hover:shadow-blue-500/20 transition-all duration-300">
              <span>Book a Call</span>
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </button>
          </div>

          {/* MOBILE TOGGLE BUTTON */}
          <button
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE OVERLAY INTERFACES */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden border-t border-slate-800 overflow-hidden"
            >
              <div className="flex flex-col gap-1.5 py-6">
                {navigation.map((item) =>
                  item.dropdown ? (
                    <div
                      key={item.title}
                      className="border-b border-slate-800/40 pb-1"
                    >
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === item.title ? null : item.title,
                          )
                        }
                        className="flex items-center justify-between w-full py-3 px-2 text-left font-semibold text-sm text-slate-100"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          size={16}
                          className={`text-slate-500 transition-transform duration-300 ${openDropdown === item.title ? "rotate-180 text-blue-400" : ""}`}
                        />
                      </button>

                      <AnimatePresence>
                        {openDropdown === item.title && (
                          <motion.div
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            className="ml-4 pl-2 border-l border-slate-800 flex flex-col gap-1"
                          >
                            {item.items.map((subItem) => (
                              <Link
                                key={subItem.title}
                                to={subItem.path}
                                onClick={() => setMobileMenuOpen(false)}
                                className="py-2.5 text-sm font-medium text-slate-400 hover:text-blue-400 transition-colors"
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
                      className="py-3 px-2 font-medium text-sm text-slate-200 hover:text-blue-400 transition-colors border-b border-slate-800/40"
                    >
                      {item.title}
                    </Link>
                  ),
                )}

                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-500 text-white py-3.5 rounded-xl font-semibold tracking-wide text-sm shadow-lg shadow-blue-600/10 transition-colors">
                  Book a Strategy Call
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
