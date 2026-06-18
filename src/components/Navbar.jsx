import { useState } from "react";
import { Menu, ChevronDown, X } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation } from "../data/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header
      className="
      fixed
      top-4
      left-1/2
      -translate-x-1/2
      z-50
      w-[95%]
      max-w-7xl
      bg-white/80
      backdrop-blur-xl
      border
      border-slate-200
      rounded-3xl
      lg:rounded-full
      shadow-lg
    "
    >
      <div className="px-6 lg:px-8">
        {/* Top Navbar */}
        <div className="h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <h2 className="text-2xl font-black text-slate-900">
              Nazra
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.title} className="relative group">
                  <button className="flex items-center gap-1 font-medium text-slate-700 hover:text-blue-600 transition">
                    {item.title}
                    <ChevronDown size={16} />
                  </button>

                  <div
                    className="
                    absolute
                    top-full
                    left-0
                    mt-4
                    min-w-[280px]
                    bg-white
                    rounded-2xl
                    border
                    border-slate-200
                    shadow-xl
                    opacity-0
                    invisible
                    translate-y-2
                    group-hover:opacity-100
                    group-hover:visible
                    group-hover:translate-y-0
                    transition-all
                    duration-300
                    overflow-hidden
                  "
                  >
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.path}
                        className="
                          block
                          px-5
                          py-3
                          text-slate-700
                          hover:bg-blue-50
                          hover:text-blue-600
                          transition
                        "
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  to={item.path}
                  className="font-medium text-slate-700 hover:text-blue-600 transition"
                >
                  {item.title}
                </Link>
              )
            )}
          </nav>

          {/* CTA Button */}
          <button className="hidden lg:flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Book Call
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 py-4">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.dropdown ? (
                  <div key={item.title}>
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === item.title
                            ? null
                            : item.title
                        )
                      }
                      className="
                        flex
                        items-center
                        justify-between
                        w-full
                        py-3
                        text-left
                        font-semibold
                        text-slate-900
                      "
                    >
                      {item.title}

                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-300 ${
                          openDropdown === item.title
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>

                    {openDropdown === item.title && (
                      <div className="ml-4 pb-2 flex flex-col">
                        {item.items.map((subItem) => (
                          <Link
                            key={subItem.title}
                            to={subItem.path}
                            onClick={() =>
                              setMobileMenuOpen(false)
                            }
                            className="
                              py-2
                              text-slate-600
                              hover:text-blue-600
                            "
                          >
                            {subItem.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.title}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="
                      py-3
                      font-medium
                      text-slate-700
                      hover:text-blue-600
                    "
                  >
                    {item.title}
                  </Link>
                )
              )}

              <button className="mt-4 bg-blue-600 text-white py-3 rounded-full font-semibold">
                Book Call
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}