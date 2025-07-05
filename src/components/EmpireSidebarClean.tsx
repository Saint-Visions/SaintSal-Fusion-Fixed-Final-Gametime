import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Main Dashboard", path: "/dashboard" },
  { label: "Start Cookin'", path: "/search" },
  { label: "My Companion", path: "/companion" },
  { label: "Dual AI Console", path: "/console" },
  { label: "AI Tools", path: "/ai-tools" },
  { label: "Image Generator", path: "/image-generator" },
  { label: "My Business", path: "/my-business" },
  { label: "Sticky Notes", path: "/sticky-notes" },
  { label: "PartnerTech.ai CRM", path: "/partnertech" },
  { label: "Client Portal", path: "/client-portal" },
  { label: "SVG Launchpad", path: "/svg-launchpad" },
  { label: "Feedback & Help", path: "/help" },
  { label: "SVT Institute of AI", path: "/institution" },
  { label: "Upgrade Tier", path: "/upgrade" },
  { label: "My Account", path: "/account" },
  { label: "Logout", path: "/logout" },
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
        className={`relative w-80 h-screen bg-[#0D1117] text-white px-6 py-10 overflow-hidden border-r border-gold/20 fixed lg:relative z-40 transform transition-transform ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
      >
        {/* Cookin' Knowledge Watermark - Corrected Placement & Opacity */}
        <div className="absolute inset-0 flex justify-center items-end pointer-events-none">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F33bf8d6300414c609f7ec7f4433536a6?format=webp&width=800"
            alt=""
            className="w-[120px] opacity-[0.03] mb-6"
          />
        </div>
        <div className="relative z-10 flex items-center gap-3 mb-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F5430f28bed284f988e7c62c0ed586ceb?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-16 h-16"
            style={{
              filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.8))",
            }}
          />
          <div>
            <h2 className="text-xl font-bold text-gold">SaintSal™</h2>
            <p className="text-xs text-gray-400">Empire Platform</p>
          </div>
        </div>

        <nav className="space-y-4 text-sm font-medium text-gray-300 relative z-10 overflow-y-auto max-h-[calc(100vh-200px)]">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              to={path}
              onClick={() => setIsMobileOpen(false)}
              className={`block px-4 py-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200 text-sm font-medium ${
                location.pathname === path
                  ? "bg-gold text-black font-semibold"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Patent Authority Footer */}
        <div className="absolute bottom-4 left-0 w-full px-6 z-10">
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
