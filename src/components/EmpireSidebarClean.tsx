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
    <aside className="bg-black text-white h-screen p-6 w-80 border-r border-gold/20">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F27da5006e3a04e8ba553a4250058d4e9?format=webp&width=800"
          alt="SV Logo"
          className="w-8 h-8"
          style={{
            filter: "drop-shadow(0 0 10px rgba(255, 215, 0, 0.5))",
            mixBlendMode: "screen",
          }}
        />
        <h2 className="text-xl font-bold text-gold">EmpireNav™</h2>
      </div>
      <nav className="space-y-3">
        {navLinks.map(({ label, path }) => (
          <Link
            key={path}
            to={path}
            className={`block px-6 py-4 rounded-lg hover:bg-gray-800 transition-all duration-200 ${
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
