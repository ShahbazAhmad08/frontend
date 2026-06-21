import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("adminToken");

  // If no auth token is detected, force redirection back to the login gateway
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
