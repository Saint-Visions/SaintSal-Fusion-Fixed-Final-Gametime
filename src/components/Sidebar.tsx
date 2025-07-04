import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Start Cookin", icon: "🔥" },
    { path: "/operations", label: "Operations", icon: "📊" },
    { path: "/console", label: "AI Console", icon: "🤖" },
    { path: "/partnertech", label: "PartnerTech.AI", icon: "🚀" },
    { path: "/crm", label: "CRM Tools", icon: "👥" },
    { path: "/pricing", label: "Pricing", icon: "💎" },
    { path: "/setup", label: "Setup", icon: "⚙️" },
    { path: "/login", label: "Sign In", icon: "🔑" },
  ];

  return (
    <aside className="w-80 min-h-screen empire-gradient border-r border-gold/20 flex flex-col">
      {/* Brand Header */}
      <div className="p-8 border-b border-gold/20">
        <Link to="/" className="block">
          <h1 className="text-2xl font-black text-gold mb-2">SAINT VISION</h1>
          <p className="text-sm text-gray-400 font-medium">AI EMPIRE</p>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Partner Section */}
      <div className="p-6 border-t border-gold/20">
        <div className="empire-card text-center">
          <h3 className="text-lg font-bold text-gold mb-2">PARTNERTECH.AI</h3>
          <p className="text-sm text-gray-400 mb-4">Strategic Integrations</p>
          <Link
            to="/crm"
            className="text-xs bg-gold/20 text-gold px-3 py-2 rounded-lg hover:bg-gold/30 transition-all"
          >
            Explore Partners
          </Link>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 text-center">
        <p className="text-xs text-gray-500 font-medium">
          "Yeah... I GOTTA GUY™"
        </p>
      </div>
    </aside>
  );
}
