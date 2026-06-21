import { useState, useEffect } from "react";
import { fetchContactMessages, executeSignOut } from "../services/adminService";
import { parseMessageContent } from "../utils/messageParser";

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("overview");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchContactMessages()
      .then((data) => {
        setMessages(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* SIDEBAR WRAPPER */}
      <aside className="w-64 bg-[#0f172a] text-slate-400 flex flex-col justify-between shrink-0 border-r border-slate-900">
        <div>
          <div className="p-6 border-b border-slate-800/60 flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-600 rounded-lg flex items-center justify-center font-bold text-white text-xs">
              EIM
            </div>
            <div>
              <h1 className="text-xs font-black tracking-wider text-white uppercase">
                Excellence
              </h1>
              <p className="text-[10px] font-mono text-slate-500 uppercase">
                Admin Panel
              </p>
            </div>
          </div>

          <nav className="p-4 space-y-1">
            <button
              onClick={() => setActiveMenu("overview")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activeMenu === "overview"
                  ? "bg-slate-800 text-orange-500"
                  : "hover:bg-slate-800/40 hover:text-white"
              }`}
            >
              📊 Overview
            </button>
            <button
              onClick={() => setActiveMenu("contacts")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ${
                activeMenu === "contacts"
                  ? "bg-slate-800 text-orange-500"
                  : "hover:bg-slate-800/40 hover:text-white"
              }`}
            >
              💬 Contact Forms
            </button>
          </nav>
        </div>

        <div className="p-4 border-t border-slate-800/60">
          <button
            onClick={executeSignOut}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-red-400 hover:bg-red-500/10 transition-colors"
          >
            ↩ Sign Out
          </button>
        </div>
      </aside>

      {/* DASHBOARD GRID FLOW MAIN BODY */}
      <div className="flex-1 flex flex-col overflow-x-hidden">
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">
              Dashboard
            </h2>
            <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">
              Excellence Integrity Admin
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800">
                excellenceadmin@gmail.com
              </p>
              <p className="text-[10px] text-orange-600 font-bold uppercase tracking-wider">
                Superadmin
              </p>
            </div>
            <div className="w-10 h-10 bg-orange-600 rounded-full flex items-center justify-center font-bold text-white text-sm shadow-sm">
              E
            </div>
          </div>
        </header>

        <main className="p-8 flex-1 max-w-7xl w-full mx-auto">
          {activeMenu === "overview" ? (
            <div className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Total Form Entries
                    </p>
                    <p className="text-3xl font-black text-slate-900 mt-1">
                      {loading ? "..." : messages.length}
                    </p>
                  </div>
                  <span className="text-2xl p-3 bg-green-50 rounded-xl">
                    💬
                  </span>
                </div>
                <div className="bg-white border border-slate-200 p-6 rounded-2xl shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Active Live Modules
                    </p>
                    <p className="text-3xl font-black text-slate-900 mt-1">2</p>
                  </div>
                  <span className="text-2xl p-3 bg-blue-50 rounded-xl">⚙️</span>
                </div>
              </div>

              <div className="bg-[#0f172a] rounded-3xl p-8 text-white border border-slate-900 relative overflow-hidden shadow-xl">
                <div className="relative z-10 space-y-3 max-w-xl">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-green-400 bg-green-400/10 px-2.5 py-1 rounded-md inline-block">
                    ● System Online
                  </span>
                  <h3 className="text-3xl font-black tracking-tight leading-tight">
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
            <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
              <div className="p-6 border-b border-slate-100">
                <h3 className="text-base font-bold text-slate-900">
                  Incoming Form Messages
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Real-time review framework for global entries.
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[1000px]">
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
