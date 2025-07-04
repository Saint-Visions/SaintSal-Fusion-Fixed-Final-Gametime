import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function FigmaSidebar() {
  const location = useLocation();

  const navItems = [
    {
      path: "/",
      label: "🏠 Start Cookin",
      icon: "🔥",
      active: location.pathname === "/",
    },
    {
      path: "/empire-live",
      label: "🚀 Empire LIVE",
      icon: "⚡",
      active: location.pathname === "/empire-live",
    },
    {
      path: "/operations",
      label: "📊 Operations",
      icon: "📊",
      active: location.pathname === "/operations",
    },
    {
      path: "/console",
      label: "🤖 AI Console",
      icon: "🤖",
      active: location.pathname === "/console",
    },
    {
      path: "/partnertech",
      label: "🚀 PartnerTech.AI",
      icon: "���",
      active: location.pathname === "/partnertech",
    },
    {
      path: "/crm",
      label: "👥 CRM Tools",
      icon: "👥",
      active: location.pathname === "/crm",
    },
    {
      path: "/pricing",
      label: "💎 Pricing",
      icon: "💎",
      active: location.pathname === "/pricing",
    },
    {
      path: "/settings",
      label: "⚙️ Settings",
      icon: "⚙️",
      active: location.pathname === "/settings",
    },
    {
      path: "/login",
      label: "🔑 Sign In",
      icon: "🔑",
      active: location.pathname === "/login",
    },
  ];

  return (
    <div
      style={{
        width: "320px",
        minHeight: "100vh",
        background: "linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 100%)",
        borderRight: "1px solid rgba(255, 199, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
      }}
    >
      {/* Brand Header - Matching your Figma exactly */}
      <div
        style={{
          padding: "32px 24px",
          borderBottom: "1px solid rgba(255, 199, 0, 0.2)",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none",
            display: "block",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: "900",
              color: "#FFC700",
              marginBottom: "8px",
              fontFamily:
                "Inter, system-ui, -apple-system, sans-serif !important",
              letterSpacing: "-0.02em",
            }}
          >
            SaintSal™
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: "#9CA3AF",
              fontWeight: "500",
              fontFamily:
                "Inter, system-ui, -apple-system, sans-serif !important",
            }}
          >
            EMPIRE
          </p>
        </Link>
      </div>

      {/* Navigation - Matching your Figma design */}
      <nav
        style={{
          flex: 1,
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "12px 16px",
              borderRadius: "12px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              background: item.active
                ? "rgba(255, 199, 0, 0.15)"
                : "transparent",
              border: item.active
                ? "1px solid rgba(255, 199, 0, 0.3)"
                : "1px solid transparent",
              fontFamily:
                "Inter, system-ui, -apple-system, sans-serif !important",
            }}
            onMouseEnter={(e) => {
              if (!item.active) {
                e.currentTarget.style.background = "rgba(255, 199, 0, 0.08)";
              }
            }}
            onMouseLeave={(e) => {
              if (!item.active) {
                e.currentTarget.style.background = "transparent";
              }
            }}
          >
            <span
              style={{
                fontSize: "20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "24px",
                height: "24px",
              }}
            >
              {item.icon}
            </span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: item.active ? "600" : "500",
                color: item.active ? "#FFC700" : "#FFFFFF",
                fontFamily:
                  "Inter, system-ui, -apple-system, sans-serif !important",
              }}
            >
              {item.label}
            </span>
          </Link>
        ))}
      </nav>

      {/* Partner Section - Matching your Figma */}
      <div
        style={{
          padding: "24px",
          borderTop: "1px solid rgba(255, 199, 0, 0.2)",
        }}
      >
        <div
          style={{
            background: "rgba(255, 199, 0, 0.1)",
            border: "1px solid rgba(255, 199, 0, 0.2)",
            borderRadius: "16px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "700",
              color: "#FFC700",
              marginBottom: "8px",
              fontFamily:
                "Inter, system-ui, -apple-system, sans-serif !important",
            }}
          >
            PARTNERTECH.AI
          </h3>
          <p
            style={{
              fontSize: "13px",
              color: "#9CA3AF",
              marginBottom: "16px",
              fontFamily:
                "Inter, system-ui, -apple-system, sans-serif !important",
            }}
          >
            Strategic Integrations
          </p>
          <Link
            to="/crm"
            style={{
              display: "inline-block",
              fontSize: "12px",
              background: "rgba(255, 199, 0, 0.2)",
              color: "#FFC700",
              padding: "8px 12px",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              fontFamily:
                "Inter, system-ui, -apple-system, sans-serif !important",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 199, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 199, 0, 0.2)";
            }}
          >
            Explore Partners
          </Link>
        </div>
      </div>

      {/* Footer - Your signature tagline */}
      <div
        style={{
          padding: "24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: "12px",
            color: "#6B7280",
            fontWeight: "500",
            fontFamily:
              "Inter, system-ui, -apple-system, sans-serif !important",
          }}
        >
          "Yeah... I GOTTA GUY™"
        </p>
      </div>
    </div>
  );
}
