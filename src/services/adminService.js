// Change this configuration variable when moving to production environments
const BASE_API_URL = import.meta.env.VITE_BACKEND_URL;

/**
 * Global helper to extract and inject authorization credentials into headers
 */
const getAuthHeaders = () => {
  const token = localStorage.getItem("adminToken");
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};

/**
 * Handles security submissions for the Admin Login Form view
 */
export const executeAdminLogin = async (email, password) => {
  const res = await fetch(`${BASE_API_URL}/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok)
    throw new Error(data.message || "Invalid credentials architecture match");
  return data;
};

/**
 * Queries incoming contact form collections from the backend storage clusters
 */
export const fetchContactMessages = async () => {
  const res = await fetch(`${BASE_API_URL}/contacts`, {
    method: "GET",
    headers: getAuthHeaders(),
  });

  if (res.status === 401 || res.status === 403) {
    localStorage.removeItem("adminToken");
    window.location.href = "/login";
    return [];
  }

  if (!res.ok) throw new Error(`HTTP Error Status: ${res.status}`);
  return await res.json();
};

/**
 * Handles session flushing and client redirection steps
 */
export const executeSignOut = () => {
  localStorage.removeItem("adminToken");
  localStorage.removeItem("adminProfile");
  window.location.href = "/login";
};
