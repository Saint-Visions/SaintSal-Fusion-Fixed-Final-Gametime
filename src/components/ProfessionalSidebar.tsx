import React from "react";
import { Link, useLocation } from "react-router-dom";

const ProfessionalSidebar = () => {
  const location = useLocation();

  const isProUser = false; // Dynamic user status

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const coreTools = [
    { label: "Dashboard", path: "/dashboard", icon: "📊" },
    { label: "AI Console", path: "/console", icon: "🤖" },
    { label: "Operations", path: "/operations", icon: "⚙️" },
    { label: "Knowledge", path: "/notes", icon: "📚" },
    { label: "Tools", path: "/tools", icon: "🔧" },
    { label: "Generator", path: "/generator", icon: "✨" },
  ];

  const integrations = [
    { label: "PartnerTech.ai", path: "/partnertech", icon: "🔗" },
    { label: "Client Portal", path: "/portal", icon: "👥" },
    { label: "Account", path: "/account", icon: "⚙️" },
  ];

  return (
    <div
      className="flex flex-col h-screen"
      style={{
        width: "280px",
        background: "linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 100%)",
        borderRight: "2px solid rgba(255, 215, 0, 0.2)",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Header */}
      <div
        className="p-6 border-b"
        style={{ borderColor: "rgba(255, 215, 0, 0.15)" }}
      >
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F94f9caa020024caeb9b1c197e1a02d2d?format=webp&width=800"
            alt="SaintVisionAI"
            className="w-10 h-10 rounded-lg"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(255, 215, 0, 0.3))",
            }}
          />
          <div>
            <h1
              className="text-lg font-semibold"
              style={{
                color: "#FFD700",
                fontWeight: "600",
              }}
            >
              SaintVisionAI
            </h1>
            <p
              className="text-sm"
              style={{
                color: "rgba(255, 215, 0, 0.7)",
              }}
            >
              AI Operating System
            </p>
          </div>
        </div>
      </div>

      {/* Core Tools */}
      <div className="flex-1 p-4">
        <div className="mb-8">
          <h3
            className="text-xs font-medium uppercase tracking-wide mb-4"
            style={{
              color: "rgba(255, 215, 0, 0.6)",
            }}
          >
            Core Tools
          </h3>
          <nav className="space-y-1">
            {coreTools.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  background: isActive(item.path)
                    ? "rgba(255, 215, 0, 0.1)"
                    : "transparent",
                  border: isActive(item.path)
                    ? "1px solid rgba(255, 215, 0, 0.3)"
                    : "1px solid transparent",
                  color: isActive(item.path)
                    ? "#FFD700"
                    : "rgba(255, 255, 255, 0.8)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background =
                      "rgba(255, 215, 0, 0.05)";
                    e.currentTarget.style.color = "rgba(255, 215, 0, 0.9)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }
                }}
              >
                <span
                  className="mr-3 text-base"
                  style={{
                    filter: isActive(item.path)
                      ? "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4))"
                      : "none",
                  }}
                >
                  {item.icon}
                </span>
                {item.label}
                {isActive(item.path) && (
                  <div
                    className="ml-auto w-2 h-2 rounded-full"
                    style={{
                      background: "#FFD700",
                      boxShadow: "0 0 8px rgba(255, 215, 0, 0.6)",
                    }}
                  />
                )}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-8">
          <h3
            className="text-xs font-medium uppercase tracking-wide mb-4"
            style={{
              color: "rgba(255, 215, 0, 0.6)",
            }}
          >
            Integrations
          </h3>
          <nav className="space-y-1">
            {integrations.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="group flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                style={{
                  background: isActive(item.path)
                    ? "rgba(255, 215, 0, 0.1)"
                    : "transparent",
                  border: isActive(item.path)
                    ? "1px solid rgba(255, 215, 0, 0.3)"
                    : "1px solid transparent",
                  color: isActive(item.path)
                    ? "#FFD700"
                    : "rgba(255, 255, 255, 0.8)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background =
                      "rgba(255, 215, 0, 0.05)";
                    e.currentTarget.style.color = "rgba(255, 215, 0, 0.9)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                  }
                }}
              >
                <span
                  className="mr-3 text-base"
                  style={{
                    filter: isActive(item.path)
                      ? "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.4))"
                      : "none",
                  }}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Upgrade Section */}
      {!isProUser && (
        <div
          className="p-4 border-t"
          style={{ borderColor: "rgba(255, 215, 0, 0.15)" }}
        >
          <Link
            to="/upgrade"
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold rounded-lg transition-all duration-200"
            style={{
              background: "linear-gradient(135deg, #FFD700 0%, #FFA500 100%)",
              color: "#000000",
              textDecoration: "none",
              boxShadow: "0 4px 12px rgba(255, 215, 0, 0.3)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow =
                "0 6px 16px rgba(255, 215, 0, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                "0 4px 12px rgba(255, 215, 0, 0.3)";
            }}
          >
            <span className="mr-2">⚡</span>
            Upgrade to Pro
          </Link>
        </div>
      )}

      {/* User Profile */}
      <div
        className="p-4 border-t"
        style={{ borderColor: "rgba(255, 215, 0, 0.15)" }}
      >
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F78d52a90ab9b43068c7d69b54e2111d6?format=webp&width=800"
            alt="Profile"
            className="w-10 h-10 rounded-full"
            style={{
              filter: "drop-shadow(0 2px 8px rgba(255, 215, 0, 0.3))",
            }}
          />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium" style={{ color: "#FFD700" }}>
              Saint Gottaguy
            </p>
            <p className="text-xs" style={{ color: "rgba(255, 215, 0, 0.6)" }}>
              Founder & CEO
            </p>
          </div>
          <Link
            to="/logout"
            className="text-sm transition-colors duration-200"
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "rgba(255, 215, 0, 0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
            }}
          >
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSidebar;
