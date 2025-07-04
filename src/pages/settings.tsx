import { useState } from "react";
import { Link } from "react-router-dom";

export default function Settings() {
  const [settings, setSettings] = useState({
    name: "Saint User",
    email: "saint@empire.com",
    workspace: "My Empire",
    model: "gpt-4",
    avatar: null as File | null,
    theme: "dark",
    notifications: true,
    voiceEnabled: true,
  });

  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSettings({ ...settings, avatar: file });

      // Create preview
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = async () => {
    setSaving(true);

    // Simulate API call to Supabase
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would call: supabase.from('profiles').update(settings)
    console.log("Saving settings:", settings);

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000000",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <Link
            to="/operations"
            style={{
              color: "#FFC700",
              textDecoration: "none",
              fontSize: "1.5rem",
              marginRight: "1rem",
            }}
          >
            ←
          </Link>
          <div>
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "900",
                background:
                  "linear-gradient(135deg, #FFC700 0%, #FFD700 50%, #FFC700 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "0.5rem",
              }}
            >
              ⚙️ Empire Settings
            </h1>
            <p style={{ color: "#9CA3AF", fontSize: "1rem" }}>
              Configure your SaintSal™ workspace and preferences
            </p>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          {/* Profile Section */}
          <div
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(255, 199, 0, 0.2)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                color: "#FFC700",
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              👤 Profile & Avatar
            </h2>

            {/* Avatar Upload */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: avatarPreview
                    ? `url(${avatarPreview}) center/cover`
                    : "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
                  margin: "0 auto 1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  fontWeight: "900",
                  color: "#000000",
                  cursor: "pointer",
                  border: "3px solid rgba(255, 199, 0, 0.3)",
                  transition: "all 0.3s ease",
                }}
              >
                {!avatarPreview && "S"}
              </div>

              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                style={{
                  background: "rgba(255, 199, 0, 0.1)",
                  border: "1px solid rgba(255, 199, 0, 0.3)",
                  color: "#FFC700",
                  padding: "0.5rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  cursor: "pointer",
                  fontFamily: "Inter, system-ui, sans-serif",
                }}
              >
                📸 Upload Avatar
              </label>
            </div>

            {/* Name & Email */}
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#D1D5DB",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Display Name
              </label>
              <input
                type="text"
                value={settings.name}
                onChange={(e) =>
                  setSettings({ ...settings, name: e.target.value })
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

            <div>
              <label
                style={{
                  display: "block",
                  color: "#D1D5DB",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Email
              </label>
              <input
                type="email"
                value={settings.email}
                onChange={(e) =>
                  setSettings({ ...settings, email: e.target.value })
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
          </div>

          {/* AI & Workspace Section */}
          <div
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(255, 199, 0, 0.2)",
              borderRadius: "1rem",
              padding: "2rem",
            }}
          >
            <h2
              style={{
                color: "#FFC700",
                fontSize: "1.25rem",
                fontWeight: "700",
                marginBottom: "1.5rem",
              }}
            >
              🤖 AI & Workspace
            </h2>

            {/* Workspace Name */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#D1D5DB",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                Workspace Name
              </label>
              <input
                type="text"
                value={settings.workspace}
                onChange={(e) =>
                  setSettings({ ...settings, workspace: e.target.value })
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

            {/* Model Preference */}
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  color: "#D1D5DB",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  marginBottom: "0.5rem",
                }}
              >
                AI Model Preference
              </label>
              <select
                value={settings.model}
                onChange={(e) =>
                  setSettings({ ...settings, model: e.target.value })
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
              >
                <option value="gpt-4">🧠 GPT-4 (Recommended)</option>
                <option value="azure">⚡ Azure OpenAI</option>
                <option value="gpt-3.5">💫 GPT-3.5 Turbo</option>
                <option value="dual">🚀 Dual AI (Enterprise)</option>
              </select>
            </div>

            {/* Toggle Options */}
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
                  checked={settings.notifications}
                  onChange={(e) =>
                    setSettings({
                      ...settings,
                      notifications: e.target.checked,
                    })
                  }
                />
                <span style={{ color: "#D1D5DB" }}>🔔 Push Notifications</span>
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
                  type="checkbox"
                  checked={settings.voiceEnabled}
                  onChange={(e) =>
                    setSettings({ ...settings, voiceEnabled: e.target.checked })
                  }
                />
                <span style={{ color: "#D1D5DB" }}>
                  🎤 Voice Input (Twilio)
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div
          style={{
            background: "rgba(16, 22, 28, 0.8)",
            border: "1px solid rgba(255, 199, 0, 0.2)",
            borderRadius: "1rem",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <button
            onClick={handleSave}
            disabled={saving}
            style={{
              background: saving
                ? "rgba(255, 199, 0, 0.5)"
                : "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
              color: "#000000",
              border: "none",
              padding: "1rem 3rem",
              borderRadius: "0.75rem",
              fontSize: "1.125rem",
              fontWeight: "700",
              cursor: saving ? "not-allowed" : "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
              transition: "all 0.3s ease",
              marginBottom: saved ? "1rem" : "0",
            }}
          >
            {saving ? "💾 Saving..." : "💾 Save Settings"}
          </button>

          {saved && (
            <p
              style={{
                color: "#22C55E",
                fontSize: "0.875rem",
                fontWeight: "600",
                margin: 0,
              }}
            >
              ✅ Settings saved successfully!
            </p>
          )}

          <p
            style={{
              color: "#9CA3AF",
              fontSize: "0.75rem",
              marginTop: "1rem",
              margin: 0,
            }}
          >
            Settings are automatically synced to your Supabase profile
          </p>
        </div>
      </div>
    </div>
  );
}
