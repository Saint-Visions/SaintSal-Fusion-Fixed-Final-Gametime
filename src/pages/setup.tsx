import { useState } from "react";
import { Link } from "react-router-dom";

export default function Setup() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    aiModel: "gpt-4",
    accessToken: "",
    avatar: "saint",
    voiceEnabled: true,
    name: "",
    workspace: "",
  });

  const totalSteps = 4;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "rgba(16, 22, 28, 0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid rgba(255, 199, 0, 0.2)",
          borderRadius: "1.5rem",
          padding: "2rem",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
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
            Setup Your SaintSal™ Empire
          </h1>
          <p
            style={{
              color: "#9CA3AF",
              fontSize: "0.875rem",
              marginBottom: "0.5rem",
            }}
          >
            Step {step} of {totalSteps} • Multi-step onboarding wizard
          </p>
          <p
            style={{
              color: "#6B7280",
              fontSize: "0.75rem",
            }}
          >
            Escalation logic backed by OPATENT™
          </p>
        </div>

        {/* Progress Bar */}
        <div
          style={{
            width: "100%",
            height: "4px",
            background: "rgba(255, 199, 0, 0.2)",
            borderRadius: "2px",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              width: `${(step / totalSteps) * 100}%`,
              height: "100%",
              background: "#FFC700",
              borderRadius: "2px",
              transition: "width 0.3s ease",
            }}
          />
        </div>

        {/* Step Content */}
        {step === 1 && (
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#FFC700",
              }}
            >
              Choose Your Assistant Models
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="aiModel"
                  value="gpt-4"
                  checked={formData.aiModel === "gpt-4"}
                  onChange={(e) =>
                    setFormData({ ...formData, aiModel: e.target.value })
                  }
                />
                <span style={{ color: "#ffffff" }}>🧠 GPT-4 (Recommended)</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="aiModel"
                  value="azure"
                  checked={formData.aiModel === "azure"}
                  onChange={(e) =>
                    setFormData({ ...formData, aiModel: e.target.value })
                  }
                />
                <span style={{ color: "#ffffff" }}>⚡ Azure OpenAI</span>
              </label>
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="radio"
                  name="aiModel"
                  value="both"
                  checked={formData.aiModel === "both"}
                  onChange={(e) =>
                    setFormData({ ...formData, aiModel: e.target.value })
                  }
                />
                <span style={{ color: "#ffffff" }}>
                  🚀 Dual AI (Enterprise)
                </span>
              </label>
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#FFC700",
              }}
            >
              API Configuration (Optional)
            </h2>
            <input
              type="password"
              placeholder="Your OpenAI Access Token (optional)"
              value={formData.accessToken}
              onChange={(e) =>
                setFormData({ ...formData, accessToken: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 199, 0, 0.3)",
                color: "#ffffff",
                fontSize: "1rem",
                fontFamily: "Inter, system-ui, sans-serif",
                marginBottom: "1rem",
              }}
            />
            <p style={{ fontSize: "0.75rem", color: "#9CA3AF" }}>
              Leave blank to use our enterprise keys. Add your own for unlimited
              usage.
            </p>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#FFC700",
              }}
            >
              Workspace Preferences
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              style={{
                width: "100%",
                padding: "0.75rem",
                borderRadius: "0.5rem",
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(255, 199, 0, 0.3)",
                color: "#ffffff",
                fontSize: "1rem",
                fontFamily: "Inter, system-ui, sans-serif",
                marginBottom: "1rem",
              }}
            />
            <input
              type="text"
              placeholder="Workspace Name"
              value={formData.workspace}
              onChange={(e) =>
                setFormData({ ...formData, workspace: e.target.value })
              }
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
          </div>
        )}

        {step === 4 && (
          <div>
            <h2
              style={{
                fontSize: "1.25rem",
                fontWeight: "600",
                marginBottom: "1rem",
                color: "#FFC700",
              }}
            >
              Final Setup
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={formData.voiceEnabled}
                  onChange={(e) =>
                    setFormData({ ...formData, voiceEnabled: e.target.checked })
                  }
                />
                <span style={{ color: "#ffffff" }}>
                  🎤 Enable Voice Input (Twilio)
                </span>
              </label>

              <div
                style={{
                  background: "rgba(255, 199, 0, 0.1)",
                  border: "1px solid rgba(255, 199, 0, 0.3)",
                  borderRadius: "0.5rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#FFC700",
                    fontWeight: "600",
                    marginBottom: "0.5rem",
                  }}
                >
                  🔥 Setup Complete!
                </p>
                <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  Your SaintSal™ empire is ready to launch.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "2rem",
          }}
        >
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              style={{
                background: "transparent",
                border: "1px solid rgba(255, 199, 0, 0.3)",
                color: "#FFC700",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "600",
                cursor: "pointer",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              onClick={() => setStep(step + 1)}
              style={{
                background: "#FFC700",
                color: "#000000",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "700",
                cursor: "pointer",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              Continue →
            </button>
          ) : (
            <Link
              to="/operations"
              style={{
                background: "#FFC700",
                color: "#000000",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                fontWeight: "700",
                textDecoration: "none",
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              🚀 Launch Empire
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
