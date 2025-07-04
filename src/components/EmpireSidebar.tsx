import React from "react";
import { Link, useLocation } from "react-router-dom";

const EmpireSidebar = () => {
  const location = useLocation();

  // User status - you can make this dynamic later
  const isProUser = false; // Change to true for pro users
  const scriptLevel = "Level 3"; // Dynamic script level
  const empireMode = true; // Dynamic empire mode status

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainNavItems = [
    { label: "Empire Command Center", path: "/dashboard", icon: "🏛️" },
    { label: "AI Saint Companion", path: "/console", icon: "🧠" },
    { label: "Business Operations", path: "/operations", icon: "📊" },
    { label: "Sacred Knowledge", path: "/notes", icon: "📝" },
    { label: "AI Power Arsenal", path: "/tools", icon: "⚡" },
    { label: "Vision Generator", path: "/generator", icon: "🎨" },
    { label: "PartnerTech.ai Hub", path: "/partnertech", icon: "🤝" },
    { label: "Client Gateway", path: "/portal", icon: "🚪" },
    { label: "Empire Profile", path: "/account", icon: "👑" },
  ];

  const empireLinks = [
    {
      label: "🎓 SaintVisions Institution",
      url: "https://saintvisions.com",
      status: "COMING SOON",
      description: "Elite Learning Academy",
    },
    {
      label: "📈 SaintVision Brokerage",
      url: "https://saintvisiongroup.com",
      status: "ACTIVE",
      description: "Financial Empire",
    },
  ];

  return (
    <div
      className="flex flex-col h-screen relative overflow-hidden"
      style={{
        width: "340px",
        background:
          "linear-gradient(145deg, #0a0a0a 0%, #1a1a1a 30%, #0f0f0f 70%, #0a0a0a 100%)",
        border: "4px solid transparent",
        borderImage:
          "linear-gradient(145deg, #FFD700 0%, #FFA500 25%, #FFD700 50%, #FFA500 75%, #FFD700 100%) 1",
        borderRadius: "32px",
        fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
        fontWeight: "500",
        backdropFilter: "blur(20px)",
        boxShadow:
          "0 25px 50px rgba(0, 0, 0, 0.8), inset 0 1px 2px rgba(255, 215, 0, 0.1)",
      }}
    >
      {/* Circuit Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD700' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3Cpath d='M30 0v30M0 30h30M60 30H30M30 60V30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Empire Mode Status - Top Right */}
      {empireMode && (
        <div className="absolute top-3 right-3 flex items-center gap-2">
          <div
            className="w-3 h-3 rounded-full animate-pulse"
            style={{
              background: "#22C55E",
              boxShadow: "0 0 12px #22C55E",
            }}
          />
          <div
            className="px-2 py-1 text-xs font-bold rounded-lg"
            style={{
              background: "rgba(34, 197, 94, 0.2)",
              color: "#22C55E",
              border: "1px solid rgba(34, 197, 94, 0.4)",
            }}
          >
            EMPIRE MODE
          </div>
        </div>
      )}

      {/* Main Header Content */}
      <div className="flex items-center gap-3 mb-6 p-6 relative z-10">
        <img
          src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F94f9caa020024caeb9b1c197e1a02d2d?format=webp&width=800"
          alt="SaintVisionAI Logo"
          className="w-12 h-12 object-contain rounded-lg"
          style={{
            filter: "drop-shadow(0 4px 12px rgba(255, 215, 0, 0.4))",
          }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h1
              className="text-lg font-black tracking-tight leading-tight"
              style={{
                color: "#FDFFDC",
                textShadow: "0 2px 8px rgba(255, 215, 0, 0.3)",
                fontFamily: "Inter",
              }}
            >
              SaintVisionAI.com
            </h1>
          </div>
          <p
            className="text-xs font-bold tracking-widest uppercase"
            style={{
              color: "#FDFFDC",
              opacity: 0.9,
              letterSpacing: "0.1em",
            }}
          >
            EMPIRE HEADQUARTERS
          </p>
        </div>
      </div>

      {/* Empire Network Section */}
      <div className="relative z-10 p-4 border-b border-[#FFD700]/20 mb-4">
        <h3
          className="text-sm font-bold mb-3 tracking-wide uppercase"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 4px rgba(255, 215, 0, 0.3)",
          }}
        >
          ⚡ EMPIRE NETWORK
        </h3>
        <div className="space-y-2">
          {empireLinks.map((empire, index) => (
            <a
              key={index}
              href={empire.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-3 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background:
                  empire.status === "ACTIVE"
                    ? "linear-gradient(135deg, rgba(34, 197, 94, 0.15), rgba(22, 163, 74, 0.1))"
                    : "linear-gradient(135deg, rgba(255, 165, 0, 0.15), rgba(255, 215, 0, 0.1))",
                border:
                  empire.status === "ACTIVE"
                    ? "2px solid rgba(34, 197, 94, 0.4)"
                    : "2px solid rgba(255, 165, 0, 0.4)",
                textDecoration: "none",
              }}
            >
              <div className="flex-1">
                <div
                  className="text-sm font-bold mb-1"
                  style={{
                    color: empire.status === "ACTIVE" ? "#22C55E" : "#FFA500",
                  }}
                >
                  {empire.label}
                </div>
                <div
                  className="text-xs font-medium opacity-80"
                  style={{ color: "#A1A1AA" }}
                >
                  {empire.description}
                </div>
              </div>
              <div
                className="px-2 py-1 text-xs font-bold rounded-lg"
                style={{
                  background:
                    empire.status === "ACTIVE" ? "#22C55E" : "#FFA500",
                  color: "#000000",
                }}
              >
                {empire.status}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Main Navigation - More Spacious */}
      <div className="flex-1 p-4 overflow-y-auto relative z-10">
        <h3
          className="text-sm font-bold mb-4 tracking-wide uppercase"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 4px rgba(255, 215, 0, 0.3)",
          }}
        >
          🎛️ COMMAND CENTER
        </h3>
        <div className="space-y-3">
          {mainNavItems.map((item, index) => (
            <Link
              key={`nav-${index}`}
              to={item.path}
              className="group flex items-center px-4 py-4 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: isActive(item.path)
                  ? "linear-gradient(135deg, rgba(255, 215, 0, 0.2), rgba(255, 165, 0, 0.15))"
                  : "rgba(255, 255, 255, 0.03)",
                border: isActive(item.path)
                  ? "2px solid rgba(255, 215, 0, 0.6)"
                  : "2px solid transparent",
                color: isActive(item.path) ? "#FFD700" : "#A1A1AA",
                fontWeight: isActive(item.path) ? 700 : 500,
                fontSize: "14px",
                textDecoration: "none",
                boxShadow: isActive(item.path)
                  ? "0 8px 25px rgba(255, 215, 0, 0.25)"
                  : "none",
                transform: isActive(item.path)
                  ? "translateX(6px)"
                  : "translateX(0)",
              }}
            >
              <span
                className="mr-4 text-lg transition-transform duration-300 group-hover:scale-125"
                style={{
                  filter: isActive(item.path)
                    ? "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.6))"
                    : "none",
                }}
              >
                {item.icon}
              </span>
              <span className="font-semibold tracking-wide">{item.label}</span>
              {isActive(item.path) && (
                <div
                  className="ml-auto w-2.5 h-2.5 rounded-full animate-pulse"
                  style={{
                    background: "#FFD700",
                    boxShadow: "0 0 12px #FFD700",
                  }}
                />
              )}
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile Section - Clean & Easy to See */}
      <div className="p-5 relative z-10">
        {/* Unlock Empire Button for Non-Pro Users */}
        {!isProUser && (
          <div className="mb-4">
            <Link
              to="/upgrade"
              className="flex items-center justify-center w-full py-4 rounded-2xl font-black transition-all duration-300 hover:scale-105 group"
              style={{
                background:
                  "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
                color: "#000000",
                fontSize: "15px",
                textDecoration: "none",
                boxShadow:
                  "0 12px 30px rgba(255, 215, 0, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)",
                border: "2px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              <span className="mr-2 group-hover:animate-bounce">👑</span>
              UNLOCK EMPIRE
              <span className="ml-2 group-hover:animate-bounce">🚀</span>
            </Link>
          </div>
        )}

        {/* User Profile Card */}
        <div
          className="flex items-center gap-4 p-4 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(24, 24, 27, 0.9), rgba(39, 39, 42, 0.7))",
            border: "3px solid rgba(255, 215, 0, 0.3)",
            boxShadow: "0 12px 30px rgba(0, 0, 0, 0.4)",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F78d52a90ab9b43068c7d69b54e2111d6?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-14 h-14 object-contain"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(255, 215, 0, 0.4))",
            }}
          />
          <div className="flex-1 min-w-0">
            <div
              className="text-sm font-black mb-1"
              style={{
                color: "#FDFFDC",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                lineHeight: "1.2",
              }}
            >
              Saint Gottaguy
            </div>
            <div
              className="text-xs font-bold tracking-wide mb-2"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EMPIRE FOUNDER & CEO 👑
            </div>
            {/* Script Level */}
            <div
              className="text-xs font-semibold px-2 py-1 rounded-lg inline-block"
              style={{
                background: "rgba(34, 197, 94, 0.2)",
                color: "#22C55E",
                border: "1px solid rgba(34, 197, 94, 0.4)",
              }}
            >
              {scriptLevel}
            </div>
          </div>
          <Link
            to="/logout"
            className="text-xs font-bold hover:scale-110 transition-all duration-200 px-3 py-2 rounded-xl"
            style={{
              color: "#A1A1AA",
              textDecoration: "none",
              background: "rgba(255, 215, 0, 0.1)",
              border: "2px solid rgba(255, 215, 0, 0.3)",
            }}
          >
            Exit 🚪
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmpireSidebar;
