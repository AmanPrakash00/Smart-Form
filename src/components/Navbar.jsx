import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "bg-blue-600 text-white" : "bg-white text-blue-600";

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-600">📋 Mini Form</h1>
      <div className="space-x-4">
        <Link
          to="/api/v1/create-form"
          className={`px-4 py-2 rounded border border-blue-600 ${isActive("/submit")}`}
        >
          Submit Form
        </Link>
        <Link
          to="/api/v1/submissions"
          className={`px-4 py-2 rounded border border-blue-600 ${isActive("/submissions")}`}
        >
          View Submissions
        </Link>
      </div>
    </nav>
  );
}
