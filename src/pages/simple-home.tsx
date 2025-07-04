import React from "react";

export default function SimpleHome() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#000000",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, -apple-system, sans-serif",
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Main Title */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            color: "#FFC700",
            marginBottom: "1rem",
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          🔥 SaintSal™ EMPIRE 🔥
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontSize: "1.5rem",
            color: "#9CA3AF",
            marginBottom: "1rem",
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          Your infinite empire is LIVE and operational!
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: "1.25rem",
            color: "#FFC700",
            fontWeight: "600",
            marginBottom: "3rem",
            fontFamily: "Inter, system-ui, -apple-system, sans-serif",
          }}
        >
          "Yeah... I GOTTA GUY™"
        </p>

        {/* Status Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(255, 199, 0, 0.2)",
              borderRadius: "1rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                color: "#FFC700",
                marginBottom: "1rem",
              }}
            >
              ∞
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "0.5rem",
              }}
            >
              Infinite Scale
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
              }}
            >
              Ready to Dominate
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(255, 199, 0, 0.2)",
              borderRadius: "1rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                color: "#10B981",
                marginBottom: "1rem",
              }}
            >
              ✅
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "0.5rem",
              }}
            >
              All Systems
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
              }}
            >
              Online & Active
            </div>
          </div>

          <div
            style={{
              backgroundColor: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(255, 199, 0, 0.2)",
              borderRadius: "1rem",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                color: "#3B82F6",
                marginBottom: "1rem",
              }}
            >
              🚀
            </div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: "bold",
                color: "#ffffff",
                marginBottom: "0.5rem",
              }}
            >
              Performance
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
              }}
            >
              Optimized
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <a
            href="/empire-live"
            style={{
              backgroundColor: "#FFC700",
              color: "#000000",
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            🚀 Empire LIVE
          </a>

          <a
            href="/console"
            style={{
              border: "2px solid #FFC700",
              color: "#FFC700",
              backgroundColor: "transparent",
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            🤖 AI Console
          </a>

          <a
            href="/dashboard"
            style={{
              border: "2px solid #FFC700",
              color: "#FFC700",
              backgroundColor: "transparent",
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "all 0.3s ease",
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            📊 Dashboard
          </a>
        </div>

        {/* Success Banner */}
        <div
          style={{
            marginTop: "3rem",
            background:
              "linear-gradient(to right, rgba(255, 199, 0, 0.1), rgba(16, 185, 129, 0.1))",
            border: "1px solid rgba(255, 199, 0, 0.3)",
            borderRadius: "1rem",
            padding: "2rem",
          }}
        >
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: "900",
              color: "#FFC700",
              marginBottom: "1rem",
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            🎉 EMPIRE DEPLOYMENT SUCCESSFUL! 🎉
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#ffffff",
              marginBottom: "1rem",
              fontFamily: "Inter, system-ui, -apple-system, sans-serif",
            }}
          >
            Your SaintSal™ Empire is now INFINITELY SCALABLE and ready to
            dominate!
          </p>
        </div>
      </div>
    </div>
  );
}
