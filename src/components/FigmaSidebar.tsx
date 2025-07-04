import React from "react";
import { Link, useLocation } from "react-router-dom";

const FigmaSidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const mainNavItems = [
    { label: "🏛️ Empire Command Center", path: "/dashboard", icon: "🏛️" },
    { label: "🧠 AI Saint Companion", path: "/console", icon: "🧠" },
    { label: "📊 Business Operations", path: "/operations", icon: "📊" },
    { label: "📝 Sacred Knowledge", path: "/notes", icon: "📝" },
    { label: "⚡ AI Power Arsenal", path: "/tools", icon: "⚡" },
    { label: "🎨 Vision Generator", path: "/generator", icon: "🎨" },
    { label: "🤝 PartnerTech.ai Hub", path: "/partnertech", icon: "🤝" },
    { label: "🚪 Client Gateway", path: "/portal", icon: "🚪" },
    { label: "👑 Empire Profile", path: "/account", icon: "👑" },
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
        boxShadow:
          "0 30px 60px -12px rgba(255, 215, 0, 0.4), inset 0 1px 0 rgba(255, 215, 0, 0.15)",
      }}
    >
      {/* Empire Header */}
      <div
        className="relative z-10 p-6 border-b"
        style={{
          borderImage:
            "linear-gradient(90deg, transparent, #FFD700, transparent) 1",
          background:
            "linear-gradient(135deg, rgba(255, 215, 0, 0.12), rgba(255, 165, 0, 0.08))",
        }}
      >
        {/* FREE Badge - Top Right */}
        <div className="absolute top-3 right-3">
          <div
            className="px-2 py-1 text-xs font-bold rounded-lg animate-pulse"
            style={{
              background: "linear-gradient(135deg, #8B5CF6, #A855F7)",
              color: "#FFFFFF",
              boxShadow: "0 4px 12px rgba(139, 92, 246, 0.4)",
              border: "1px solid rgba(255, 215, 0, 0.3)",
            }}
          >
            FREE 🔥
          </div>
        </div>

        {/* Main Header Content */}
        <div className="flex items-center gap-3 mb-4 pr-12">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F94f9caa020024caeb9b1c197e1a02d2d?format=webp&width=800"
            alt="SaintSal Empire Logo"
            className="w-14 h-14 object-contain"
            style={{
              filter: "drop-shadow(0 4px 12px rgba(255, 215, 0, 0.4))",
            }}
          />
          <div className="flex-1">
            <h1
              className="text-xl font-black tracking-tight leading-tight"
              style={{
                background:
                  "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 900,
                textShadow: "0 4px 8px rgba(255, 215, 0, 0.4)",
              }}
            >
              SaintVisionAI.com
            </h1>
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
      </div>

      {/* Empire Network Section */}
      <div className="relative z-10 p-4 border-b border-[#FFD700]/20">
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

      {/* Main Navigation */}
      <div className="flex-1 p-4 overflow-y-auto relative z-10">
        <h3
          className="text-sm font-bold mb-3 tracking-wide uppercase"
          style={{
            color: "#FFD700",
            textShadow: "0 2px 4px rgba(255, 215, 0, 0.3)",
          }}
        >
          🎛️ COMMAND CENTER
        </h3>
        <div className="space-y-2">
          {mainNavItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="group flex items-center px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105"
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
                className="mr-3 text-lg transition-transform duration-300 group-hover:scale-125"
                style={{
                  filter: isActive(item.path)
                    ? "drop-shadow(0 2px 4px rgba(255, 215, 0, 0.6))"
                    : "none",
                }}
              >
                {item.icon}
              </span>
              <span className="font-semibold tracking-wide">
                {item.label.replace(item.icon + " ", "")}
              </span>
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

      {/* Elite Upgrade Section */}
      <div className="p-5 relative z-10">
        <div
          className="p-5 rounded-2xl mb-4"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 165, 0, 0.1))",
            border: "3px solid rgba(255, 215, 0, 0.4)",
            boxShadow: "0 16px 40px rgba(255, 215, 0, 0.2)",
          }}
        >
          <div className="text-center mb-4">
            <div
              className="text-lg font-black mb-2"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              👑 ASCEND TO EMPIRE ELITE
            </div>
            <div
              className="text-xs font-semibold leading-relaxed"
              style={{
                color: "#A1A1AA",
                lineHeight: "1.5",
              }}
            >
              Unlock unlimited AI power, premium features, and exclusive access
              to the Saint Empire network
            </div>
          </div>
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
            UNLOCK EMPIRE POWER
            <span className="ml-2 group-hover:animate-bounce">🚀</span>
          </Link>
        </div>

        {/* Empire Founder Profile */}
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
              className="text-sm font-black"
              style={{
                color: "#FDFFDC",
                textShadow: "0 2px 4px rgba(0, 0, 0, 0.5)",
                lineHeight: "1.2",
              }}
            >
              Saint Gottaguy
            </div>
            <div
              className="text-xs font-bold tracking-wide"
              style={{
                background: "linear-gradient(135deg, #FFD700, #FFA500)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              EMPIRE FOUNDER & CEO 👑
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

export default FigmaSidebar;
