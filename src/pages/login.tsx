import { Link } from "react-router-dom";

export default function Login() {
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
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          background: "rgba(16, 22, 28, 0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 199, 0, 0.2)",
          borderRadius: "1.5rem",
          padding: "2rem",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
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
            Welcome Back, Saint!
          </h1>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "0.875rem",
            }}
          >
            Your dual AI sanctuary awaits.
          </p>
        </div>

        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <input
            type="email"
            placeholder="you@example.com"
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
            placeholder="Password"
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
              background: "#FFC700",
              color: "#000000",
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
            🔥 Sign In & Start Cookin'
          </Link>
        </form>

        <div style={{ marginTop: "1.5rem", fontSize: "0.875rem" }}>
          <Link
            to="/signup"
            style={{ color: "#60A5FA", textDecoration: "none" }}
          >
            Start Your SaintSal Journey
          </Link>
        </div>
      </div>
    </div>
  );
}
