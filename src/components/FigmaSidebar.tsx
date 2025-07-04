import React from "react";
import { Link, useLocation } from "react-router-dom";

const FigmaSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "AI Companion", path: "/console" },
    { label: "Business", path: "/operations" },
    { label: "Notes", path: "/notes" },
    { label: "AI Tools", path: "/tools" },
    { label: "Generator", path: "/generator" },
    { label: "PartnerTech", path: "/partnertech" },
    { label: "Portal", path: "/portal" },
    { label: "Account", path: "/account" },
  ];

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        width: "280px",
        background: "#000000",
        border: "3px solid #FFD700",
        borderRadius: "24px",
        fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#FFD700]/20">
        <div className="flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb4d1baacd79944e59033e0f3fcf7229e?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-10 h-10 object-contain"
          />
          <h1
            className="text-base font-bold"
            style={{
              color: "#FDFFDC",
              fontWeight: 700,
            }}
          >
            SaintVisionAI
          </h1>
        </div>
        <div
          className="px-2 py-1 text-xs font-bold rounded-lg"
          style={{
            background: "#8B5CF6",
            color: "#FFFFFF",
            fontWeight: 600,
          }}
        >
          FREE
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-3 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center px-3 py-2 rounded-lg transition-all duration-200 hover:bg-[#18181B]"
              style={{
                background: isActive(item.path) ? "#18181B" : "transparent",
                color: isActive(item.path) ? "#FFD700" : "#A1A1AA",
                fontWeight: isActive(item.path) ? 600 : 400,
                fontSize: "14px",
                textDecoration: "none",
                borderLeft: isActive(item.path)
                  ? "3px solid #FFD700"
                  : "3px solid transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="p-3 border-t border-[#FFD700]/20">
        {/* Upgrade Button */}
        <Link
          to="/upgrade"
          className="flex items-center justify-center w-full py-3 mb-3 rounded-lg transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #FFD700, #FFA500)",
            color: "#000000",
            fontWeight: 700,
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          Upgrade to PRO
        </Link>

        {/* User Info */}
        <div className="flex items-center gap-2 p-2 rounded-lg bg-[#18181B]">
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{
              background: "#FFD700",
              color: "#000000",
            }}
          >
            SG
          </div>
          <div className="flex-1 min-w-0">
            <div
              className="text-sm font-medium truncate"
              style={{ color: "#FDFFDC" }}
            >
              Saint Gottaguy
            </div>
          </div>
          <Link
            to="/logout"
            className="text-xs text-[#A1A1AA] hover:text-[#FFD700] transition-colors"
            style={{ textDecoration: "none" }}
          >
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FigmaSidebar;
