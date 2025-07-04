import React from "react";
import { Link, useLocation } from "react-router-dom";

const FigmaSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { label: "Main Dashboard", path: "/" },
    { label: "AI Companion 🧠", path: "/console" },
    { label: "My Business 📁", path: "/operations" },
    { label: "Sticky Notes ✍️", path: "/notes" },
    { label: "AI Tools 🛠️", path: "/tools" },
    { label: "Image Generator 🤖", path: "/generator" },
    { label: "SVG Launchpad 🚀", path: "/launchpad" },
    { label: "PartnerTech CRM", path: "/partnertech" },
    { label: "Client Portal 🏟️", path: "/portal" },
    { label: "Upgrade Tier ⚡️", path: "/upgrade" },
    { label: "My Account 💫", path: "/account" },
    { label: "Logout 👀", path: "/logout" },
  ];

  return (
    <div
      className="flex flex-col min-h-screen relative"
      style={{
        width: "331px",
        background: "#000000",
        border: "4px solid #FDFFDC",
        borderRadius: "32px",
        fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
      }}
    >
      {/* Header with Logo */}
      <div
        className="flex items-center justify-center p-4 relative"
        style={{
          height: "84px",
          borderBottom: "1px solid #FDFFDC",
          borderRadius: "32px 32px 0 0",
        }}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb4d1baacd79944e59033e0f3fcf7229e?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-16 h-16 object-contain"
          />
          <div>
            <h1
              className="text-lg font-bold tracking-tight"
              style={{
                color: "#FDFFDC",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight: 700,
              }}
            >
              SaintVisionAI.com
            </h1>
          </div>
        </div>
        <div
          className="absolute top-3 right-3 px-2 py-1 text-xs font-bold rounded-full"
          style={{
            background: "#8B5CF6",
            color: "#FFFFFF",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 700,
          }}
        >
          FREE🔥
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-2 overflow-y-auto">
        <div className="space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="flex items-center gap-4 px-4 py-4 rounded-[32px] border transition-all duration-200"
              style={{
                height: "56px",
                margin: "2px 0",
                background:
                  isActive(item.path) || (index === 0 && isActive("/"))
                    ? "#71717A"
                    : "#18181B",
                borderColor: "#FDFFDC",
                opacity:
                  isActive(item.path) || (index === 0 && isActive("/"))
                    ? 1
                    : 0.3,
                color: "#FDFFDC",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                fontWeight:
                  isActive(item.path) || (index === 0 && isActive("/"))
                    ? 600
                    : 400,
                fontSize: "16px",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                if (!(isActive(item.path) || (index === 0 && isActive("/")))) {
                  e.currentTarget.style.opacity = "1";
                }
              }}
              onMouseLeave={(e) => {
                if (!(isActive(item.path) || (index === 0 && isActive("/")))) {
                  e.currentTarget.style.opacity = "0.3";
                }
              }}
            >
              <span style={{ lineHeight: "24px" }}>{item.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Logo */}
      <div className="p-4 flex justify-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fac436fc84fcc40789c93464d58a120d4?format=webp&width=800"
          alt="SaintVisionAI Logo"
          className="w-20 h-28 object-contain border-4 border-[#FDFFDC] rounded-[24px] shadow-lg"
          style={{
            transform: "rotate(-0.304deg)",
            aspectRatio: "81.54/116.08",
          }}
        />
      </div>

      {/* Upgrade Section */}
      <div className="p-6 border-t border-[#FDFFDC]">
        <div className="text-center mb-4">
          <div
            className="text-lg font-bold mb-2"
            style={{
              color: "#FDFFDC",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "18px",
            }}
          >
            Upgrade to Unlimited
          </div>
          <div
            className="text-sm mb-4"
            style={{
              color: "#A1A1AA",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "20px",
            }}
          >
            Generate Premium Content by upgrading to an unlimited plan!
          </div>
        </div>
        <button
          className="w-full py-4 px-4 rounded-[32px] font-bold mb-4"
          style={{
            background: "#FDFFDC",
            color: "#09090B",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            lineHeight: "24px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Get started with PRO
        </button>
        <div
          className="text-center text-sm"
          style={{
            color: "#A1A1AA",
            fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "20px",
          }}
        >
          Join 80,000+ users now
        </div>
      </div>

      {/* User Section */}
      <div className="flex items-center justify-between p-4 border border-[#FDFFDC] rounded-[32px] mx-2 mb-4">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-[#FDFFDC] font-bold"
            style={{
              background: "#A1A1AA",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            AP
          </div>
          <div
            className="text-sm font-semibold"
            style={{
              color: "#FDFFDC",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Saint Gottaguy
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaSidebar;
