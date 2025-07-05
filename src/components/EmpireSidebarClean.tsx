import React from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Dashboard", path: "/dashboard" },
  { label: "Console", path: "/console" },
  { label: "CRM", path: "/crm" },
  { label: "Operations", path: "/operations" },
  { label: "PartnerTech.AI", path: "/partnertech" },
];

export default function EmpireSidebarClean() {
  const location = useLocation();
  return (
    <aside className="bg-black text-white h-screen p-4 w-64">
      <h2 className="text-xl font-bold mb-4">EmpireNav™</h2>
      <nav className="space-y-2">
        {navLinks.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`block px-4 py-2 rounded hover:bg-gray-800 ${
              location.pathname === path
                ? "bg-yellow-500 text-black"
                : "text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
