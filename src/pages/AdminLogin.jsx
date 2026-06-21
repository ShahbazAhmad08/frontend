import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { executeAdminLogin } from "../services/adminService";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    startTransition(async () => {
      try {
        const data = await executeAdminLogin(email, password);
        localStorage.setItem("adminToken", data.token);
        window.location.href = "/admin";
      } catch (err) {
        setError(err.message || "Could not connect to backend server.");
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-[#1e293b] border border-slate-800 rounded-2xl p-8 shadow-xl"
      >
        <div className="text-center mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
            Control Portal
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-white tracking-tight">
            EXCELLENCE ADMIN PANEL
          </h2>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold rounded-xl text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              required
              disabled={isPending}
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wide mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#0f172a] border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-orange-500 transition-colors"
              required
              disabled={isPending}
            />
          </div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-orange-600 hover:bg-orange-500 disabled:bg-slate-700 text-white font-bold text-sm py-3.5 rounded-xl transition-colors shadow-lg shadow-orange-600/10 mt-2 flex items-center justify-center gap-2"
          >
            {isPending ? "Verifying..." : "Sign In"}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
