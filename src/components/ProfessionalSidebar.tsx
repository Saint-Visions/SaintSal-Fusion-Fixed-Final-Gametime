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
    { label: "Tools", path: "/tools", icon: "��" },
    { label: "Generator", path: "/generator", icon: "✨" },
  ];

  const integrations = [
    { label: "PartnerTech.ai", path: "/partnertech", icon: "🔗" },
    { label: "Client Portal", path: "/portal", icon: "👥" },
    { label: "Account", path: "/account", icon: "⚙️" },
  ];

  return (
    <div
      className="flex flex-col h-screen bg-white border-r border-gray-200"
      style={{
        width: "280px",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
      }}
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F94f9caa020024caeb9b1c197e1a02d2d?format=webp&width=800"
            alt="SaintVisionAI"
            className="w-8 h-8 rounded"
          />
          <div>
            <h1 className="text-lg font-semibold text-gray-900">
              SaintVisionAI
            </h1>
            <p className="text-sm text-gray-500">AI Operating System</p>
          </div>
        </div>
      </div>

      {/* Core Tools */}
      <div className="flex-1 p-4">
        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            Core Tools
          </h3>
          <nav className="space-y-1">
            {coreTools.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="mr-3 text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide mb-3">
            Integrations
          </h3>
          <nav className="space-y-1">
            {integrations.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`group flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                }`}
              >
                <span className="mr-3 text-base">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* Upgrade Section */}
      {!isProUser && (
        <div className="p-4 border-t border-gray-100">
          <Link
            to="/upgrade"
            className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-800 transition-colors"
          >
            <span className="mr-2">⚡</span>
            Upgrade to Pro
          </Link>
        </div>
      )}

      {/* User Profile */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F78d52a90ab9b43068c7d69b54e2111d6?format=webp&width=800"
            alt="Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-900">Saint Gottaguy</p>
            <p className="text-xs text-gray-500">Founder & CEO</p>
          </div>
          <Link
            to="/logout"
            className="text-gray-400 hover:text-gray-600 text-sm"
          >
            Exit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSidebar;
