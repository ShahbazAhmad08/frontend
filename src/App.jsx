import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import OurWork from "./pages/OurWork";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import ServicePage from "./pages/ServicePage";
import { services } from "./data/services";
import ServicesPage from "./pages/ServicesPage";
import LegalDocumentPage from "./pages/LegalDocumentPage";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import ClientTestimonials from "./pages/ClientTestimonials";

export default function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Routes>
        {/* 🌐 PUBLIC PAGES CONTAINER (Wrapped in Layout shell) */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/client-testimonials" element={<ClientTestimonials />} />

          <Route
            path="/services/website-design"
            element={<ServicePage data={services.websiteDesign} />}
          />
          <Route
            path="/services/custom-coded-website"
            element={<ServicePage data={services.customCodedWebsite} />}
          />
          <Route
            path="/services/social-media-management"
            element={<ServicePage data={services.socialMediaManagement} />}
          />
          <Route
            path="/services/digital-marketing"
            element={<ServicePage data={services.digitalMarketing} />}
          />
          <Route
            path="/services/search-engine-optimisation"
            element={<ServicePage data={services.searchEngineOptimization} />}
          />
          <Route
            path="/services/graphics-designing"
            element={<ServicePage data={services.graphicsDesigning} />}
          />
          <Route
            path="/services/mobile-app-development"
            element={<ServicePage data={services.mobileAppDevelopment} />}
          />
          <Route
            path="/services/coded-e-commerce-website"
            element={<ServicePage data={services.codedEcommerceWebsite} />}
          />

          <Route path="/terms" element={<LegalDocumentPage type="terms" />} />
          <Route
            path="/privacy"
            element={<LegalDocumentPage type="privacy" />}
          />
          <Route path="/refund" element={<LegalDocumentPage type="refund" />} />

          {/* Catch-all Not Found pages keep consumer navbar/footer context */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* 🔐 ISOLATED ADMIN STACK (Completely bypasses the Layout shell) */}
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}
