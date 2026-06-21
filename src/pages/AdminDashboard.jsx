import { useState, useEffect } from "react";
import { fetchContactMessages, executeSignOut } from "../services/adminService";
import { parseMessageContent } from "../utils/messageParser";
import { Menu, X, BarChart3, MessageSquare, LogOut } from "lucide-react";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("overview");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const [adminProfile] = useState(() => {
    try {
      const saved = localStorage.getItem("adminProfile");

      // 💡 CHECK: Ensure data exists, isn't empty, and isn't the literal string "undefined"
      if (saved && saved !== "undefined" && saved !== "null") {
        return JSON.parse(saved);
      }
    } catch (error) {
      console.error("Failed to parse admin profile from storage:", error);
    }

    // 🟢 Safe dynamic fallback: used if anything goes wrong
    return {
      name: "Super Admin",
      email: "admin@nazra.com",
      role: "superadmin",
    };
  });

  useEffect(() => {
    fetchContactMessages()
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Prevent background scrolling on mobile overlay states
  useEffect(() => {
    if (mobileSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileSidebarOpen]);

  const NavigationLinks = () => (
    <nav className="space-y-1">
      <button
        onClick={() => {
          setActiveMenu("overview");
          setMobileSidebarOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
          activeMenu === "overview"
            ? "bg-slate-800 text-orange-500"
            : "hover:bg-slate-800/40 hover:text-white"
        }`}
      >
        <BarChart3 size={16} /> Overview
      </button>
      <button
        onClick={() => {
          setActiveMenu("contacts");
          setMobileSidebarOpen(false);
        }}
        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
          activeMenu === "contacts"
            ? "bg-slate-800 text-orange-500"
            : "hover:bg-slate-800/40 hover:text-white"
        }`}
      >
        <MessageSquare size={16} /> Contact Forms
      </button>
    </nav>
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col lg:flex-row">
      {/* MOBILE HEADER BAR DISPLAY */}
      <header className="lg:hidden bg-[#0f172a] text-white px-4 py-3 flex items-center justify-between border-b border-slate-900 sticky top-0 z-40 shadow-md">
        <div className="flex items-center gap-2.5">
          <img
            src="/logo.png"
            alt="Nazra Logo"
            className="h-9 w-9 object-contain"
          />
          <div>
            <h1 className="text-xs font-black tracking-wider uppercase">
              Nazra Software
            </h1>
            <p className="text-[9px] font-mono text-slate-500 uppercase">
              Admin Panel
            </p>
          </div>
        </div>
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-1.5 bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
        >
          {mobileSidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* MOBILE OVERLAY BACKGROUND SIDEBAR BACKDROP */}
      {mobileSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}

      {/* SIDEBAR SIDEBAR WRAPPER LAYOUT FRAME */}
      <aside
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-[#0f172a] text-slate-400 flex flex-col justify-between shrink-0 border-r border-slate-900 transform transition-transform duration-300 ease-in-out
        lg:translate-x-0 lg:static lg:h-screen
        ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div>
          {/* Brand Identity Branding Frame */}
          <div className="p-6 border-b border-slate-800/60 hidden lg:flex items-center gap-3">
            <div className="w-12 h-12 flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Nazra Logo"
                className="h-14 w-14 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xs font-black tracking-wider text-white uppercase">
                Nazra Software
              </h1>
              <p className="text-[10px] font-mono text-slate-500 uppercase">
                Admin Panel
              </p>
            </div>
          </div>

          {/* Mobile Sidebar Inside Identification Header */}
          <div className="lg:hidden p-4 border-b border-slate-800/60 flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
              Navigation Navigation
            </span>
            <button
              onClick={() => setMobileSidebarOpen(false)}
              className="text-slate-500 hover:text-white"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-4">
            <NavigationLinks />
          </div>
        </div>

        <div className="p-4 border-t border-slate-800/60">
          <button
            onClick={executeSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* DASHBOARD GRID FLOW MAIN BODY */}
      <div className="flex-1 flex flex-col overflow-x-hidden min-h-screen">
        {/* DESKTOP ROW STICKY SUB-HEADER SUBBAR */}
        <header className="hidden lg:flex bg-white border-b border-slate-200 px-8 py-5 items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Dashboard Workspace
            </h2>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Nazra Software System Admin
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">
                {adminProfile.name} Space
              </p>
            </div>
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-md">
              N
            </div>
          </div>
        </header>

        {/* SUB-CONTENT SCROLL CONTAINER PANEL FRAME */}
        <main className="p-4 md:p-8 flex-1 max-w-7xl w-full mx-auto space-y-6">
          {activeMenu === "overview" ? (
            <div className="space-y-6 md:space-y-8">
              {/* STATUS INDICATOR METRICS PANEL ROW CARD HOVER GRIDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-2xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Total Form Entries
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
                      {loading ? "..." : messages.length}
                    </p>
                  </div>
                  <span className="text-xl md:text-2xl p-2.5 md:p-3 bg-green-50 rounded-xl">
                    💬
                  </span>
                </div>
                <div className="bg-white border border-slate-200 p-5 md:p-6 rounded-2xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Active Live Modules
                    </p>
                    <p className="text-2xl md:text-3xl font-black text-slate-900 mt-1">
                      2
                    </p>
                  </div>
                  <span className="text-xl md:text-2xl p-2.5 md:p-3 bg-blue-50 rounded-xl">
                    ⚙️
                  </span>
                </div>
              </div>

              {/* ACTION CALL SYSTEM INFRASTRUCTURE COVER HEADER BOX */}
              <div className="bg-[#0f172a] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white border border-slate-900 relative overflow-hidden shadow-xl">
                <div className="relative z-10 space-y-3 max-w-xl">
                  <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-green-400 bg-green-400/10 px-2.5 py-1 rounded-md inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 bg-green-400 rounded-full animate-pulse" />{" "}
                    System Online
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-tight">
                    Welcome to the{" "}
                    <span className="text-orange-500">
                      Admin Control Center
                    </span>
                  </h3>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
                    Manage your incoming form collections dynamically, inspect
                    secure storage nodes, and control deployment pipelines from
                    this interface.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            /* INCOMING LISTS RESPONSIVE GRID BOX ENCLOSURE PANEL */
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-5 md:p-6 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">
                  Incoming Form Messages
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time review framework for global database entries.
                </p>
              </div>

              {/* RESPONSIVE SCROLL DATA ENGINE AREA TABLE PORT */}
              <div className="overflow-x-auto w-full">
                <table className="w-full text-left border-collapse min-w-[900px]">
                  <thead>
                    <tr className="bg-slate-50/70 border-b border-slate-100 text-[11px] font-bold uppercase tracking-wider text-slate-500">
                      <th className="p-4 pl-6">Name</th>
                      <th className="p-4">Phone</th>
                      <th className="p-4">Email</th>
                      <th className="p-4">Company</th>
                      <th className="p-4">Preferred Mode</th>
                      <th className="p-4">Message Context</th>
                      <th className="p-4 pr-6 text-right">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-600">
                    {loading ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="p-8 text-center text-slate-400"
                        >
                          Loading incoming transmissions...
                        </td>
                      </tr>
                    ) : messages.length === 0 ? (
                      <tr>
                        <td
                          colSpan={7}
                          className="p-8 text-center text-slate-400 font-normal"
                        >
                          No contact inquiries submitted yet.
                        </td>
                      </tr>
                    ) : (
                      messages.map((msg) => {
                        const parsed = parseMessageContent(msg.message);
                        return (
                          <tr
                            key={msg._id}
                            className="hover:bg-slate-50/50 transition-colors"
                          >
                            <td className="p-4 pl-6 font-bold text-slate-900 whitespace-nowrap">
                              {msg.name}
                            </td>
                            <td className="p-4 text-slate-700 font-mono text-[11px] whitespace-nowrap">
                              {parsed.phone}
                            </td>
                            <td className="p-4 text-blue-600 whitespace-nowrap">
                              {msg.email}
                            </td>
                            <td className="p-4 text-slate-700 font-semibold whitespace-nowrap">
                              {parsed.company}
                            </td>
                            <td className="p-4">
                              <span className="px-2.5 py-1 text-[10px] font-bold rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                                {parsed.mode}
                              </span>
                            </td>
                            <td className="p-4">
                              <div className="max-w-xs max-h-24 overflow-y-auto whitespace-normal break-words pr-1 text-slate-500 leading-relaxed scrollbar-thin">
                                {parsed.text}
                              </div>
                            </td>
                            <td className="p-4 pr-6 text-right text-slate-400 font-mono text-[11px] whitespace-nowrap">
                              {new Date(msg.createdAt).toLocaleDateString()}
                            </td>
                          </tr>
                        );
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
