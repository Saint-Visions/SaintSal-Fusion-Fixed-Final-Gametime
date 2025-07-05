import { Link } from "react-router-dom";

function StatCard({
  label,
  value,
  color,
  description,
}: {
  label: string;
  value: string;
  color: string;
  description: string;
}) {
  const colorStyles = {
    blue: { background: "#1E40AF", border: "1px solid #3B82F6" },
    green: { background: "#166534", border: "1px solid #22C55E" },
    purple: { background: "#7C2D92", border: "1px solid #A855F7" },
    pink: { background: "#BE185D", border: "1px solid #EC4899" },
  };

  return (
    <div
      style={{
        ...colorStyles[color as keyof typeof colorStyles],
        borderRadius: "1rem",
        padding: "1.5rem",
        textAlign: "center",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
      }}
    >
      <div
        style={{
          fontSize: "2.5rem",
          fontWeight: "900",
          marginBottom: "0.5rem",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "1.125rem",
          fontWeight: "600",
          marginBottom: "0.25rem",
        }}
      >
        {label}
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          opacity: 0.8,
        }}
      >
        {description}
      </div>
    </div>
  );
}

export default function Operations() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Professional Background Asset */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F43808ce2cd5142889ceab9015345e61a?format=webp&width=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Enhanced Header with Authority */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            marginBottom: "3rem",
            padding: "1.5rem",
            background: "rgba(0,0,0,0.8)",
            borderRadius: "1rem",
            border: "1px solid rgba(255, 199, 0, 0.3)",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F223dc8612ee14e9bb8159050e6235d76?format=webp&width=800"
            alt="SaintSal Operations Authority"
            style={{
              width: "60px",
              height: "60px",
              filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.7))",
              mixBlendMode: "screen",
            }}
          />
          <div>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "900",
                background:
                  "linear-gradient(135deg, #FFC700 0%, #FDE68A 50%, #FFC700 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              🔥 SaintSal™ Operations Dashboard
            </h1>
            <div
              style={{
                fontSize: "1.25rem",
                color: "#FFC700",
                fontWeight: "600",
              }}
            >
              Strategic Integrations • Empire Partners • Live Analytics
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <StatCard
            label="Leads Discovered"
            value="247"
            color="blue"
            description="AI-powered lookup"
          />
          <StatCard
            label="Active Referrals"
            value="18"
            color="green"
            description="Partner tracking"
          />
          <StatCard
            label="Deals Analyzed"
            value="156"
            color="purple"
            description="GPT-4 insights"
          />
          <StatCard
            label="Mobile Users"
            value="89"
            color="pink"
            description="iOS/Android apps"
          />
        </div>

        {/* Quick Access Modules */}
        <section style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#FFC700",
              marginBottom: "1.5rem",
            }}
          >
            Quick Access Modules
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <Link
              to="/console"
              style={{
                background: "rgba(16, 22, 28, 0.8)",
                border: "1px solid rgba(255, 199, 0, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🧠</div>
              <h3
                style={{
                  color: "#FFC700",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Dual AI Console
              </h3>
              <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                SaintVision AI + Empire AI chat interface
              </p>
            </Link>

            <Link
              to="/crm"
              style={{
                background: "rgba(16, 22, 28, 0.8)",
                border: "1px solid rgba(34, 197, 94, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>👥</div>
              <h3
                style={{
                  color: "#22C55E",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                CRM Integration
              </h3>
              <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                GHL pipeline management and lead routing
              </p>
            </Link>

            <Link
              to="/partnertech"
              style={{
                background: "rgba(16, 22, 28, 0.8)",
                border: "1px solid rgba(168, 85, 247, 0.2)",
                borderRadius: "1rem",
                padding: "1.5rem",
                textDecoration: "none",
                color: "inherit",
                transition: "all 0.3s ease",
              }}
            >
              <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚀</div>
              <h3
                style={{
                  color: "#A855F7",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                PartnerTech.AI
              </h3>
              <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                Chrome extension and SaaS tier pricing
              </p>
            </Link>
          </div>
        </section>

        {/* Referral Network */}
        <section>
          <h2
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#ffffff",
              marginBottom: "1rem",
            }}
          >
            Referral Network
          </h2>
          <div
            style={{
              background: "rgba(255, 255, 255, 0.05)",
              borderRadius: "1rem",
              padding: "1.5rem",
              border: "1px solid rgba(255, 199, 0, 0.2)",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
                textAlign: "center",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: "#FFC700",
                  }}
                >
                  18
                </div>
                <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  Total Referrals
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: "#22C55E",
                  }}
                >
                  12.5%
                </div>
                <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  Conversion Rate
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontSize: "2rem",
                    fontWeight: "900",
                    color: "#3B82F6",
                  }}
                >
                  $47K
                </div>
                <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  Revenue Generated
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
