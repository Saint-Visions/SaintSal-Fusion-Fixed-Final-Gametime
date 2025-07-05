import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Main Dashboard", path: "/dashboard", icon: "🏢" },
  { label: "My Companion", path: "/companion", icon: "🤖" },
  { label: "My Business", path: "/my-business", icon: "💼" },
  { label: "Sticky Notes", path: "/sticky-notes", icon: "📝" },
  { label: "AI Tools", path: "/ai-tools", icon: "🛠️" },
  { label: "Image Generator", path: "/image-generator", icon: "🎨" },
  { label: "SVG Launchpad", path: "/svg-launchpad", icon: "🚀" },
  { label: "Feedback & Help", path: "/help", icon: "💬" },
  { label: "PartnerTech.ai CRM", path: "/partnertech", icon: "⚡" },
  { label: "Client Portal", path: "/client-portal", icon: "👥" },
  { label: "SVT Institute of AI", path: "/institution", icon: "🎓" },
  { label: "Upgrade Tier", path: "/upgrade", icon: "⭐" },
  { label: "My Account", path: "/account", icon: "👤" },
  { label: "Logout", path: "/logout", icon: "🚪" },
];

export default function EmpireSidebarClean() {
  const location = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile Hamburger Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-black/80 text-gold p-2 rounded-lg"
        onClick={() => setIsMobileOpen(!isMobileOpen)}
      >
        <div className="w-6 h-6 flex flex-col justify-center items-center">
          <span
            className={`block w-5 h-0.5 bg-gold transition-all ${isMobileOpen ? "rotate-45 translate-y-1.5" : ""}`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gold mt-1 transition-all ${isMobileOpen ? "opacity-0" : ""}`}
          ></span>
          <span
            className={`block w-5 h-0.5 bg-gold mt-1 transition-all ${isMobileOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
          ></span>
        </div>
      </button>

      {/* Sidebar */}
      <aside
        className={`bg-black text-white h-screen p-6 w-80 border-r border-gold/20 fixed lg:relative z-40 transform transition-transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        <div className="flex items-center gap-3 mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fcfd2c4e2166d45d29a7b5b02d7a5672f?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-12 h-12"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
              mixBlendMode: "screen",
            }}
          />
          <div>
            <h2 className="text-xl font-bold text-gold">SaintSal™</h2>
            <p className="text-xs text-gray-400">Empire Platform</p>
          </div>
        </div>

        <nav className="space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navLinks.map(({ label, path, icon }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 text-sm ${
                location.pathname === path
                  ? "bg-gold text-black font-semibold"
                  : "text-white hover:text-gold"
              }`}
            >
              <span className="text-lg">{icon}</span>
              <span className="truncate">{label}</span>
            </Link>
          ))}
        </nav>

        {/* Patent Authority Footer */}
        <div className="absolute bottom-6 left-6 right-6">
          <div className="bg-gray-900/50 p-3 rounded-lg border border-gold/20">
            <p className="text-xs text-gold font-semibold">
              HACP™ + OPATENT™
            </p>
            <p className="text-xs text-gray-400">U.S. Patent No. 10,290,222</p>
            <p className="text-xs text-gold mt-1">
              Patent Protected Technology
            </p>
          </div>
        </div>
      </aside>

      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-30"
          onClick={() => setIsMobileOpen(false)}
        />
      )}
    </>
  );
}
