import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Navbar />

      {/* This is where your page content (Home, About, etc.) will render */}
      <main style={{ flex: 1, padding: "2rem" }}>{children}</main>

      <Footer />
    </div>
  );
}
