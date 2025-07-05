import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "1rem",
        position: "relative",
        backgroundImage: `url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay for text contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8))",
          zIndex: 1,
        }}
      />
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(0, 0, 0, 0.85)",
          backdropFilter: "blur(12px)",
          border: "2px solid rgba(255, 199, 0, 0.4)",
          borderRadius: "1.5rem",
          padding: "2rem",
          boxShadow:
            "0 25px 50px -12px rgba(255, 199, 0, 0.25), 0 0 0 1px rgba(255, 199, 0, 0.1)",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              background: "#FFC700",
              borderRadius: "0.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 1rem",
              fontSize: "1.5rem",
              fontWeight: "900",
              color: "#000000",
            }}
          >
            S
          </div>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "0.5rem",
            }}
          >
            Become a Saint! ✨
          </h1>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "0.875rem",
              marginBottom: "1rem",
            }}
          >
            Join the elite community of AI-powered business leaders.
          </p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="email"
            placeholder="chef@yourbusiness.com"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 199, 0, 0.3)",
              color: "#ffffff",
              fontSize: "1rem",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          />
          <input
            type="password"
            placeholder="Make it strong 💪"
            style={{
              width: "100%",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              background: "rgba(0, 0, 0, 0.5)",
              border: "1px solid rgba(255, 199, 0, 0.3)",
              color: "#ffffff",
              fontSize: "1rem",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          />
          <Link
            to="/dashboard"
            style={{
              width: "100%",
              background: "#2563EB",
              color: "#ffffff",
              padding: "0.75rem",
              borderRadius: "0.5rem",
              fontWeight: "700",
              textDecoration: "none",
              display: "block",
              fontSize: "1rem",
              fontFamily: "Inter, system-ui, sans-serif",
              transition: "all 0.3s ease",
            }}
          >
            ��� Create Account & Start Free Trial
          </Link>
        </form>

        <p
          style={{
            marginTop: "1.5rem",
            fontSize: "0.75rem",
            color: "#9CA3AF",
            lineHeight: "1.5",
          }}
        >
          🔐 Dual AI access • GPT-4 + Azure • Smart onboarding • Upgrade anytime
        </p>

        <p
          style={{
            marginTop: "0.75rem",
            fontSize: "0.65rem",
            color: "#6B7280",
            textAlign: "center",
          }}
        >
          Powered by Saint Vision Protocols · Pat. 10,290,222
        </p>

        <div style={{ marginTop: "1rem", fontSize: "0.875rem" }}>
          <Link
            to="/login"
            style={{ color: "#60A5FA", textDecoration: "none" }}
          >
            Already a Saint? Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
