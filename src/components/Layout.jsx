import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PremiumLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 font-sans selection:bg-blue-500/20 selection:text-blue-300 antialiased">
      {/* Structural Layer Wrapper for Navigation */}
      <Navbar />

      {/* Main viewport frame layout wrapper */}
      {/* FIXED: Removed raw padding layers to prevent viewport width breakage across edge-to-edge heroes */}
      <main className="flex-grow w-full relative z-10">{children}</main>

      {/* Structured Footer Anchor */}
      <Footer />
    </div>
  );
}
