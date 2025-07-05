import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with error handling
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAuth = import.meta.env.VITE_SUPABASE_ANON_AUTH;
const supabase =
  supabaseUrl && supabaseKey ? createClient(supabaseUrl, supabaseKey) : null;

export default function Hero() {
  const [stats, setStats] = useState({
    leads: 247,
    partners: 18,
    mobileUsers: 89,
  });
  const [isVisible, setIsVisible] = useState({});
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  const heroRef = useRef(null);
  const quoteRef = useRef(null);
  const featuresRef = useRef(null);
  const techRef = useRef(null);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2 },
    );

    const refs = [heroRef, quoteRef, featuresRef, techRef];
    refs.forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Load live stats from Supabase
  useEffect(() => {
    const loadStats = async () => {
      if (!supabase) return;

      try {
        const { data: events } = await supabase
          .from("events")
          .select("event_type")
          .gte(
            "timestamp",
            new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          );

        if (events) {
          const leadEvents = events.filter(
            (e) => e.event_type === "lead_discovery",
          ).length;
          const partnerEvents = events.filter(
            (e) => e.event_type === "partner_referral",
          ).length;
          const mobileEvents = events.filter(
            (e) => e.event_type === "mobile_access",
          ).length;

          setStats({
            leads: leadEvents || 247,
            partners: partnerEvents || 18,
            mobileUsers: mobileEvents || 89,
          });
        }
      } catch (error) {
        console.log("Using demo stats - Supabase not configured");
      }
    };

    loadStats();
    const interval = setInterval(loadStats, 30000); // Update every 30s
    return () => clearInterval(interval);
  }, []);

  // PWA Install Detection
  useEffect(() => {
    const checkPWA = () => {
      if (window.matchMedia("(display-mode: browser)").matches) {
        setShowInstallPrompt(true);
      }
    };
    checkPWA();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `
          linear-gradient(135deg, rgba(16, 22, 28, 0.95) 0%, rgba(0, 0, 0, 0.98) 50%, rgba(16, 22, 28, 0.95) 100%),
          radial-gradient(circle at 20% 80%, rgba(255, 199, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(255, 199, 0, 0.05) 0%, transparent 50%)
        `,
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        overflow: "hidden auto",
      }}
    >
      {/* Animated Background Particles */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-opacity='0.02'%3E%3Cpolygon fill='%23FFC700' points='50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40'/%3E%3C/g%3E%3C/svg%3E")`,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "2rem",
          position: "relative",
          zIndex: 1,
          transform: isVisible.hero ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible.hero ? 1 : 0,
          transition: "all 1s ease-out",
        }}
      >
        {/* Live Stats Bar */}
        <div
          style={{
            position: "absolute",
            top: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            background: "rgba(16, 22, 28, 0.9)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 199, 0, 0.3)",
            borderRadius: "2rem",
            padding: "0.75rem 2rem",
            display: "flex",
            gap: "2rem",
            fontSize: "0.875rem",
            fontWeight: "600",
            color: "#FFC700",
          }}
        >
          <span>🚀 {stats.leads} leads discovered</span>
          <span>🤝 {stats.partners} active partners</span>
          <span>📱 {stats.mobileUsers} mobile users</span>
        </div>

        {/* Animated Logo */}
        <div
          style={{
            width: "140px",
            height: "140px",
            background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
            borderRadius: "1.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "2rem",
            position: "relative",
            boxShadow: "0 0 60px rgba(255, 199, 0, 0.4)",
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <div
            style={{
              fontSize: "3.5rem",
              fontWeight: "900",
              color: "#000000",
            }}
          >
            Sv
          </div>

          {/* Animated Glow Ring */}
          <div
            style={{
              position: "absolute",
              top: "-10px",
              left: "-10px",
              right: "-10px",
              bottom: "-10px",
              border: "2px solid transparent",
              borderTopColor: "#FFC700",
              borderRightColor: "#FFC700",
              borderRadius: "1.75rem",
              animation: "spin 4s linear infinite",
            }}
          />
        </div>

        <div
          style={{
            fontSize: "1.125rem",
            color: "#FFC700",
            fontWeight: "700",
            marginBottom: "0.5rem",
            letterSpacing: "0.1em",
          }}
        >
          SAINTSAI™
        </div>

        <div
          style={{
            fontSize: "1rem",
            color: "#FFC700",
            marginBottom: "3rem",
            opacity: 0.8,
          }}
        >
          Cookin' Knowledge
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "900",
            background:
              "linear-gradient(135deg, #FFC700 0%, #FFD700 50%, #FFC700 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
            lineHeight: "1.1",
            maxWidth: "900px",
          }}
        >
          SaintSal™ is your AI Empire in motion.
        </h1>

        <p
          style={{
            fontSize: "1.5rem",
            color: "#D1D5DB",
            marginBottom: "3rem",
            maxWidth: "600px",
            lineHeight: "1.6",
          }}
        >
          Built to Scale. Designed to Dominate. Your Dual AI. Ready to Close.
        </p>

        {/* CTA Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            marginBottom: "4rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            to="/signup"
            style={{
              background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
              color: "#000000",
              padding: "1.25rem 3rem",
              borderRadius: "1rem",
              fontSize: "1.25rem",
              fontWeight: "700",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              boxShadow: "0 10px 30px rgba(255, 199, 0, 0.3)",
              transition: "all 0.3s ease",
              animation: "pulse 2s infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(255, 199, 0, 0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 10px 30px rgba(255, 199, 0, 0.3)";
            }}
          >
            🔥 Start Cookin
          </Link>

          <Link
            to="/console"
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              color: "#FFC700",
              border: "2px solid #FFC700",
              padding: "1.25rem 2rem",
              borderRadius: "1rem",
              fontSize: "1.125rem",
              fontWeight: "600",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 199, 0, 0.1)";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(16, 22, 28, 0.8)";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            👁 See What's Inside
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            animation: "bounce 2s infinite",
          }}
        >
          <div
            style={{
              width: "2px",
              height: "30px",
              background: "#FFC700",
              borderRadius: "1px",
              opacity: 0.7,
            }}
          />
        </div>
      </section>

      {/* Quote Section */}
      <section
        ref={quoteRef}
        id="quote"
        style={{
          padding: "4rem 2rem",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          transform: isVisible.quote ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible.quote ? 1 : 0,
          transition: "all 1s ease-out 0.3s",
        }}
      >
        <div
          style={{
            position: "relative",
            background: "rgba(16, 22, 28, 0.9)",
            border: "2px solid #FFC700",
            borderRadius: "1.5rem",
            padding: "2rem 3rem",
            maxWidth: "700px",
            textAlign: "center",
            backdropFilter: "blur(12px)",
            boxShadow: "0 20px 60px rgba(0, 0, 0, 0.5)",
          }}
        >
          <p
            style={{
              fontSize: "clamp(1.125rem, 3vw, 1.5rem)",
              lineHeight: "1.4",
              fontWeight: "600",
              color: "#ffffff",
              margin: 0,
            }}
          >
            "SaintSal™ AI doesn't just answer.
            <br />
            It adapts. It empowers. It becomes your...
            <br />
            <span
              style={{
                color: "#FFC700",
                fontSize: "1.75em",
                fontWeight: "900",
                textShadow: "0 0 20px rgba(255, 199, 0, 0.5)",
              }}
            >
              GOTTA GUY™!
            </span>
            "
          </p>

          {/* Quote Arrow */}
          <div
            style={{
              position: "absolute",
              bottom: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderLeft: "12px solid transparent",
              borderRight: "12px solid transparent",
              borderTop: "12px solid #FFC700",
            }}
          />
        </div>
      </section>

      {/* Features Grid */}
      <section
        ref={featuresRef}
        id="features"
        style={{
          padding: "4rem 2rem",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            transform: isVisible.features
              ? "translateY(0)"
              : "translateY(50px)",
            opacity: isVisible.features ? 1 : 0,
            transition: "all 1s ease-out 0.5s",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: "900",
              color: "#FFC700",
              marginBottom: "1rem",
            }}
          >
            🔥 What's Inside These Walls
          </h2>
          <p
            style={{
              fontSize: "1.25rem",
              color: "#9CA3AF",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            This isn't automation — this is divine execution.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: "🔵",
              title: "Lead Discovery",
              subtitle: "AI-powered lookup",
              description:
                "Advanced company & contact intelligence with real-time data enrichment",
              color: "#1E40AF",
              route: "/dashboard?tab=leads",
            },
            {
              icon: "🟢",
              title: "Referral Network",
              subtitle: "Partner tracking",
              description:
                "Automated partner CRM pipeline with commission tracking & analytics",
              color: "#16A34A",
              route: "/dashboard?tab=referrals",
            },
            {
              icon: "🟣",
              title: "AI Deal Analysis",
              subtitle: "GPT-4 insights",
              description:
                "Document analysis, deal scoring, and predictive close probability",
              color: "#7C2D92",
              route: "/dashboard?tab=ai",
            },
            {
              icon: "🔴",
              title: "Mobile Export",
              subtitle: "iOS/Android apps",
              description:
                "Full PWA experience with voice commands & offline capabilities",
              color: "#BE185D",
              route: "/mobile",
            },
          ].map((feature, index) => (
            <Link
              key={feature.title}
              to={feature.route}
              style={{
                background: `linear-gradient(135deg, ${feature.color}20 0%, rgba(16, 22, 28, 0.8) 100%)`,
                border: `1px solid ${feature.color}40`,
                borderRadius: "1.5rem",
                padding: "2rem",
                textDecoration: "none",
                color: "inherit",
                position: "relative",
                overflow: "hidden",
                transition: "all 0.3s ease",
                transform: isVisible.features
                  ? "translateY(0)"
                  : "translateY(50px)",
                opacity: isVisible.features ? 1 : 0,
                transitionDelay: `${0.7 + index * 0.1}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px)";
                e.currentTarget.style.borderColor = feature.color;
                e.currentTarget.style.boxShadow = `0 20px 40px ${feature.color}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = `${feature.color}40`;
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#ffffff",
                  marginBottom: "0.5rem",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: feature.color,
                  fontWeight: "600",
                  marginBottom: "0.75rem",
                }}
              >
                {feature.subtitle}
              </p>
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "#D1D5DB",
                  lineHeight: "1.5",
                }}
              >
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* PartnerTech Integration */}
      <section
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            background: "rgba(16, 22, 28, 0.8)",
            border: "1px solid rgba(255, 199, 0, 0.3)",
            borderRadius: "2rem",
            padding: "3rem",
            backdropFilter: "blur(12px)",
          }}
        >
          <h3
            style={{
              fontSize: "2rem",
              fontWeight: "900",
              color: "#FFC700",
              marginBottom: "1rem",
            }}
          >
            PartnerTech.AI Integration
          </h3>
          <p
            style={{
              fontSize: "1.125rem",
              color: "#D1D5DB",
              marginBottom: "2rem",
              lineHeight: "1.6",
            }}
          >
            Chrome extension + enterprise AI tools working seamlessly with your
            SaintSal™ ecosystem
          </p>
          <Link
            to="/partnertech"
            style={{
              background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
              color: "#000000",
              padding: "1rem 2rem",
              borderRadius: "0.75rem",
              fontSize: "1rem",
              fontWeight: "700",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            🔗 Explore PartnerTech
          </Link>
        </div>
      </section>

      {/* Tech Stack Bar */}
      <section
        ref={techRef}
        id="tech"
        style={{
          padding: "4rem 2rem",
          position: "relative",
          zIndex: 1,
          transform: isVisible.tech ? "translateY(0)" : "translateY(50px)",
          opacity: isVisible.tech ? 1 : 0,
          transition: "all 1s ease-out",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
            marginBottom: "3rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              color: "#FFC700",
              marginBottom: "2rem",
            }}
          >
            Enterprise-Grade Infrastructure
          </h3>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "3rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { name: "Azure", color: "#0078D4" },
              { name: "OpenAI", color: "#10A37F" },
              { name: "Stripe", color: "#635BFF" },
              { name: "Supabase", color: "#3ECF8E" },
              { name: "Twilio", color: "#F22F46" },
              { name: "GHL", color: "#FFC700" },
            ].map((tech, index) => (
              <div
                key={tech.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  opacity: 0.7,
                  transition: "all 0.3s ease",
                  animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    background: tech.color,
                    borderRadius: "0.75rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: "700",
                    fontSize: "0.875rem",
                  }}
                >
                  {tech.name.slice(0, 2).toUpperCase()}
                </div>
                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "#9CA3AF",
                    fontWeight: "600",
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile PWA Prompts */}
      {showInstallPrompt && (
        <div
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            right: "2rem",
            background: "rgba(16, 22, 28, 0.95)",
            border: "2px solid #FFC700",
            borderRadius: "1rem",
            padding: "1rem",
            zIndex: 1000,
            backdropFilter: "blur(12px)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p
              style={{
                color: "#FFC700",
                fontWeight: "700",
                margin: 0,
                marginBottom: "0.25rem",
              }}
            >
              📱 Install SaintSal�� Empire
            </p>
            <p
              style={{
                color: "#9CA3AF",
                fontSize: "0.875rem",
                margin: 0,
              }}
            >
              Full mobile access + voice commands + offline mode
            </p>
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button
              onClick={() => setShowInstallPrompt(false)}
              style={{
                background: "transparent",
                border: "1px solid #6B7280",
                color: "#9CA3AF",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                cursor: "pointer",
              }}
            >
              Later
            </button>
            <button
              onClick={() => {
                // PWA install logic
                setShowInstallPrompt(false);
              }}
              style={{
                background: "#FFC700",
                border: "none",
                color: "#000000",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Install
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer
        style={{
          background: "rgba(0, 0, 0, 0.8)",
          borderTop: "1px solid rgba(255, 199, 0, 0.2)",
          padding: "4rem 2rem 2rem",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {/* CTA Section */}
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255, 199, 0, 0.1) 0%, rgba(16, 22, 28, 0.8) 100%)",
              border: "1px solid rgba(255, 199, 0, 0.3)",
              borderRadius: "2rem",
              padding: "3rem",
              marginBottom: "3rem",
            }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#FFC700",
                marginBottom: "1rem",
              }}
            >
              Enter Your Empire
            </h3>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#D1D5DB",
                marginBottom: "2rem",
                maxWidth: "600px",
                margin: "0 auto 2rem",
              }}
            >
              Ready to move smarter today than you did yesterday?
            </p>
            <Link
              to="/signup"
              style={{
                background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
                color: "#000000",
                padding: "1.25rem 3rem",
                borderRadius: "1rem",
                fontSize: "1.25rem",
                fontWeight: "700",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              🚀 Start Your Empire
            </Link>
          </div>

          {/* Quick Links */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "2rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { to: "/pricing", label: "Pricing" },
              { to: "/setup", label: "Setup" },
              { to: "/login", label: "Sign In" },
              { to: "/partnertech", label: "PartnerTech" },
              { to: "/admin/integrations", label: "Integrations" },
            ].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  color: "#9CA3AF",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: "500",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#FFC700";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#9CA3AF";
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Elite Badge & Legal */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "2rem",
              marginBottom: "2rem",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(255, 199, 0, 0.1)",
                border: "1px solid rgba(255, 199, 0, 0.3)",
                borderRadius: "2rem",
                padding: "0.5rem 1rem",
              }}
            >
              <span style={{ fontSize: "1rem" }}>🔒</span>
              <span
                style={{
                  color: "#FFC700",
                  fontSize: "0.875rem",
                  fontWeight: "700",
                }}
              >
                Elite Members
              </span>
            </div>

            <div
              style={{
                color: "#6B7280",
                fontSize: "0.75rem",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              <span>© 2025 SaintSal™ Empire</span>
              <span>Patent #10,290,222</span>
            </div>
          </div>

          {/* Logo */}
          <div
            style={{
              width: "60px",
              height: "60px",
              background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
              borderRadius: "1rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto",
              fontSize: "1.5rem",
              fontWeight: "900",
              color: "#000000",
            }}
          >
            Sv
          </div>
        </div>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0); }
          40%, 43% { transform: translateY(-10px); }
          70% { transform: translateY(-5px); }
          90% { transform: translateY(-2px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
