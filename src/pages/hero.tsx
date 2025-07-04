import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(0,0,0,0.95) 0%, rgba(30,30,30,0.95) 50%, rgba(0,0,0,0.95) 100%), url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.03'%3E%3Cpolygon fill='%23000' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E\")",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Quote Bubble */}
      <div
        style={{
          background: "rgba(16, 22, 28, 0.9)",
          border: "2px solid #FFC700",
          borderRadius: "1rem",
          padding: "1.5rem 2rem",
          marginBottom: "3rem",
          maxWidth: "600px",
          position: "relative",
        }}
      >
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: "600",
            color: "#ffffff",
            margin: 0,
            lineHeight: "1.4",
          }}
        >
          "SaintSal™ AI doesn't just answer.
          <br />
          It adapts. It empowers. It becomes your...
          <br />
          <span
            style={{ color: "#FFC700", fontSize: "1.5rem", fontWeight: "900" }}
          >
            GOTTA GUY™!
          </span>
          "
        </p>

        {/* Arrow */}
        <div
          style={{
            position: "absolute",
            bottom: "-10px",
            left: "50%",
            transform: "translateX(-50%)",
            width: 0,
            height: 0,
            borderLeft: "10px solid transparent",
            borderRight: "10px solid transparent",
            borderTop: "10px solid #FFC700",
          }}
        />
      </div>

      {/* Circuit Brain Logo */}
      <div
        style={{
          width: "120px",
          height: "120px",
          background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
          borderRadius: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          position: "relative",
          boxShadow: "0 0 30px rgba(255, 199, 0, 0.4)",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            fontWeight: "900",
            color: "#000000",
          }}
        >
          Sv
        </div>
        {/* Circuit lines */}
        <div
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            right: "15px",
            bottom: "15px",
            border: "2px solid rgba(0,0,0,0.2)",
            borderRadius: "0.5rem",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "25px",
            left: "25px",
            right: "25px",
            bottom: "25px",
            border: "1px solid rgba(0,0,0,0.1)",
            borderRadius: "0.25rem",
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
          marginBottom: "2rem",
        }}
      >
        Cookin' Knowledge
      </div>

      {/* Main Title */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "900",
          background:
            "linear-gradient(135deg, #FFC700 0%, #FFD700 50%, #FFC700 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginBottom: "2rem",
          lineHeight: "1.1",
        }}
      >
        SaintVisionAI™
      </h1>

      {/* Main CTA */}
      <Link
        to="/operations"
        style={{
          background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
          color: "#000000",
          padding: "1rem 3rem",
          borderRadius: "1rem",
          fontSize: "1.25rem",
          fontWeight: "700",
          textDecoration: "none",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          marginBottom: "2rem",
          boxShadow: "0 10px 25px rgba(255, 199, 0, 0.3)",
          transition: "all 0.3s ease",
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        🔥 Start Cookin
      </Link>

      {/* Quick Access */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          marginBottom: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <Link
          to="/console"
          style={{
            background: "#1E40AF",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: "600",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          💬 AI Chat
        </Link>

        <Link
          to="/login"
          style={{
            background: "#16A34A",
            color: "#ffffff",
            padding: "0.75rem 1.5rem",
            borderRadius: "0.5rem",
            fontSize: "1rem",
            fontWeight: "600",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          🔑 Sign In
        </Link>
      </div>

      <p
        style={{
          fontSize: "0.875rem",
          color: "#9CA3AF",
          marginBottom: "1rem",
        }}
      >
        Quick Access:
      </p>

      <div
        style={{
          display: "flex",
          gap: "1rem",
          fontSize: "0.75rem",
          color: "#9CA3AF",
        }}
      >
        <Link
          to="/pricing"
          style={{ color: "#FFC700", textDecoration: "none" }}
        >
          🏛️ Pricing
        </Link>
        <Link to="/setup" style={{ color: "#FFC700", textDecoration: "none" }}>
          ⚙️ Setup
        </Link>
        <Link to="/crm" style={{ color: "#FFC700", textDecoration: "none" }}>
          📊 Help
        </Link>
      </div>

      {/* Features Grid */}
      <div
        style={{
          marginTop: "4rem",
          maxWidth: "1000px",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#FFC700",
            marginBottom: "2rem",
          }}
        >
          🔥 What's Inside These Walls
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          <div
            style={{
              background: "#1E40AF",
              padding: "1.5rem",
              borderRadius: "1rem",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔍</div>
            <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
              Lead Discovery
            </div>
            <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              AI-powered lookup
            </div>
          </div>

          <div
            style={{
              background: "#16A34A",
              padding: "1.5rem",
              borderRadius: "1rem",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔗</div>
            <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
              Referral Network
            </div>
            <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              Partner tracking
            </div>
          </div>

          <div
            style={{
              background: "#7C2D92",
              padding: "1.5rem",
              borderRadius: "1rem",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📊</div>
            <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
              AI Deal Analysis
            </div>
            <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              GPT-4 insights
            </div>
          </div>

          <div
            style={{
              background: "#BE185D",
              padding: "1.5rem",
              borderRadius: "1rem",
              textAlign: "center",
              color: "#ffffff",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>📱</div>
            <div style={{ fontWeight: "600", marginBottom: "0.25rem" }}>
              Mobile Export
            </div>
            <div style={{ fontSize: "0.75rem", opacity: 0.8 }}>
              iOS/Android apps
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div
        style={{
          marginTop: "4rem",
          padding: "2rem",
          background: "rgba(255, 199, 0, 0.1)",
          borderRadius: "1rem",
          border: "1px solid rgba(255, 199, 0, 0.3)",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: "700",
            color: "#FFC700",
            marginBottom: "0.5rem",
          }}
        >
          ✨ Elite AI Sanctuary • Ready for Saints
        </h3>
        <p
          style={{
            fontSize: "0.875rem",
            color: "#9CA3AF",
            marginBottom: "0",
          }}
        >
          Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
        </p>
      </div>
    </div>
  );
}
