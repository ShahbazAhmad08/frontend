import { Link } from "react-router-dom";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="text-center max-w-xl">
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
            <AlertTriangle className="w-12 h-12 text-blue-600" />
          </div>
        </div>

        <h1 className="text-7xl md:text-9xl font-black bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
          404
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          Looks like you've taken a wrong turn.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </section>
  );
}
