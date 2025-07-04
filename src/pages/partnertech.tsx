export default function PartnerTech() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.6)), url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fa0de47a13f81485185ab52961085693d?format=webp&width=800')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "2rem 1rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        position: "relative",
      }}
    >
      {/* Premium AI Lab Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "linear-gradient(145deg, rgba(0,0,0,0.3) 0%, rgba(10,10,10,0.5) 50%, rgba(0,0,0,0.7) 100%)",
          backdropFilter: "blur(1px)",
          zIndex: 1,
        }}
      />

      {/* Content Container */}
      <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
        {/* Premium Logo with Natural Styling */}
        <div
          style={{
            width: "160px",
            height: "160px",
            background:
              "linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)",
            borderRadius: "2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "1.5rem",
            position: "relative",
            boxShadow:
              "0 20px 40px rgba(255, 215, 0, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.2)",
            border: "3px solid rgba(255, 215, 0, 0.3)",
            margin: "0 auto 1.5rem auto",
            padding: "1rem",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F29856441de964e35a366faa6c7cd2b37?format=webp&width=800"
            alt="Sv. Cookin' Knowledge Logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
            }}
          />
          {/* Premium circuit effect */}
          <div
            style={{
              position: "absolute",
              top: "15px",
              left: "15px",
              right: "15px",
              bottom: "15px",
              border: "3px solid rgba(0,0,0,0.1)",
              borderRadius: "1rem",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "1rem",
            color: "#FFC700",
            fontWeight: "600",
            marginBottom: "0.5rem",
          }}
        >
          SAINTSAI™
        </div>
        <div
          style={{
            fontSize: "0.875rem",
            color: "#FFC700",
            marginBottom: "3rem",
          }}
        >
          Cookin' Knowledge
        </div>

        {/* Main Heading */}
        <h1
          style={{
            fontSize: "4rem",
            fontWeight: "900",
            background:
              "linear-gradient(135deg, #FFC700 0%, #FFD700 50%, #FFC700 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
            lineHeight: "1.1",
          }}
        >
          PartnerTech.ai
        </h1>

        <div
          style={{
            fontSize: "1.25rem",
            color: "#FFC700",
            fontWeight: "600",
            marginBottom: "2rem",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          Powered by SAINTSAI™
          <span
            style={{
              background: "#22C55E",
              color: "#ffffff",
              padding: "0.25rem 0.5rem",
              borderRadius: "0.25rem",
              fontSize: "0.75rem",
              fontWeight: "700",
            }}
          >
            LIVE
          </span>
        </div>

        {/* Tagline */}
        <p
          style={{
            fontSize: "1.5rem",
            lineHeight: "1.4",
            maxWidth: "800px",
            marginBottom: "3rem",
            color: "#ffffff",
          }}
        >
          The only{" "}
          <span style={{ color: "#FFC700", fontWeight: "700" }}>
            intent-triggered
          </span>{" "}
          SaaS platform that{" "}
          <span style={{ color: "#22C55E", fontWeight: "700" }}>
            executes actions
          </span>
          , <span style={{ fontStyle: "italic" }}>not just</span> collects data.
        </p>

        <div
          style={{
            fontSize: "1rem",
            marginBottom: "3rem",
            display: "flex",
            gap: "2rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "#EF4444" }}>Seamless.ai-style</span>
          <span style={{ color: "#ffffff" }}>+</span>
          <span style={{ color: "#22C55E" }}>AI Automation</span>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
            width: "100%",
            maxWidth: "1000px",
            marginBottom: "3rem",
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
              color: "#ffffff",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              border: "none",
              fontSize: "1.125rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            ⬇ Get Chrome Extension
          </button>

          <button
            style={{
              background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
              color: "#000000",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              border: "none",
              fontSize: "1.125rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            🔥 Start Cookin Operations
          </button>

          <button
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              color: "#ffffff",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              border: "none",
              fontSize: "1.125rem",
              fontWeight: "700",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            🚀 SaaS Multi-Tenant Setup
          </button>
        </div>

        <button
          style={{
            background: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
            color: "#ffffff",
            padding: "1rem 3rem",
            borderRadius: "1rem",
            border: "none",
            fontSize: "1.25rem",
            fontWeight: "700",
            cursor: "pointer",
            marginBottom: "2rem",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          💞 Smart Lead Intake 💞
        </button>

        <p
          style={{
            fontSize: "1rem",
            color: "#9CA3AF",
            marginBottom: "3rem",
          }}
        >
          AI-powered routing • Get qualified in 60 seconds
        </p>

        {/* Pricing Tiers */}
        <div
          style={{
            display: "flex",
            gap: "3rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "4rem",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#22C55E",
                marginBottom: "0.5rem",
              }}
            >
              $297-$1197
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
              }}
            >
              Monthly SaaS Tiers
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#3B82F6",
                marginBottom: "0.5rem",
              }}
            >
              Azure Enterprise
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
              }}
            >
              Infrastructure Ready
            </div>
          </div>

          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#A855F7",
                marginBottom: "0.5rem",
              }}
            >
              Patent Protected
            </div>
            <div
              style={{
                fontSize: "0.875rem",
                color: "#9CA3AF",
              }}
            >
              Competitive Moat
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            color: "#ffffff",
            marginBottom: "1rem",
          }}
        >
          Ready to Transform Your Lead Generation?
        </h2>

        <p
          style={{
            fontSize: "1.125rem",
            color: "#9CA3AF",
            marginBottom: "2rem",
            maxWidth: "600px",
          }}
        >
          Join the patent-protected platform that goes beyond data collection to{" "}
          <span style={{ color: "#22C55E" }}>
            execute real business actions
          </span>
          .
        </p>

        {/* Final CTAs */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <button
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #16A34A 100%)",
              color: "#ffffff",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            ⬇ Get Extension
            <br />
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              Instant access
            </span>
          </button>

          <button
            style={{
              background: "linear-gradient(135deg, #EC4899 0%, #BE185D 100%)",
              color: "#ffffff",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            💞 Get Qualified
            <br />
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              60-second intake
            </span>
          </button>

          <button
            style={{
              background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
              color: "#ffffff",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              border: "none",
              fontSize: "1rem",
              fontWeight: "700",
              cursor: "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            🚀 Full Platform
            <br />
            <span style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              Multi-tenant SaaS
            </span>
          </button>
        </div>

        <div
          style={{
            fontSize: "0.875rem",
            color: "#9CA3AF",
            marginBottom: "1rem",
          }}
        >
          14-day free trial • No credit card required • Chrome Web Store
          approved
        </div>

        <div
          style={{
            fontSize: "0.75rem",
            color: "#6B7280",
          }}
        >
          © 2024 SaintSal™ Empire • Patent info 290.222 • Enterprise Ready
        </div>
      </div>
    </div>
  );
}
