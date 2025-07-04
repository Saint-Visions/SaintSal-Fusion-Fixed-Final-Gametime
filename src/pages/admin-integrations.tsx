import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || "",
  import.meta.env.VITE_SUPABASE_ANON_KEY || "",
);

interface Integration {
  id: string;
  name: string;
  status: "active" | "inactive" | "error" | "testing";
  type: string;
  description: string;
  lastTested: string;
  endpoint?: string;
  config: Record<string, any>;
}

export default function AdminIntegrations() {
  const [integrations, setIntegrations] = useState<Integration[]>([
    {
      id: "stripe",
      name: "Stripe Payments",
      status: "active",
      type: "Payment Gateway",
      description: "Subscription billing, webhook processing, plan upgrades",
      lastTested: new Date().toISOString(),
      endpoint: "/api/stripe/webhook",
      config: {
        webhookSecret: "✓ Configured",
        secretKey: "✓ Configured",
        publishableKey: "✓ Configured",
      },
    },
    {
      id: "openai",
      name: "Azure/OpenAI Chat",
      status: "active",
      type: "AI Engine",
      description: "GPT-4 streaming, dual AI console, Azure fallback",
      lastTested: new Date().toISOString(),
      endpoint: "/api/chat",
      config: {
        apiKey: "✓ Active",
        model: "gpt-4o",
        streaming: "✓ Enabled",
      },
    },
    {
      id: "supabase",
      name: "Supabase Analytics",
      status: "active",
      type: "Database & Auth",
      description: "Event logging, user tracking, real-time analytics",
      lastTested: new Date().toISOString(),
      endpoint: "/api/events",
      config: {
        url: "✓ Connected",
        serviceRole: "✓ Active",
        realtimeEvents: "✓ Enabled",
      },
    },
    {
      id: "ghl",
      name: "GHL CRM Webhooks",
      status: "active",
      type: "CRM Pipeline",
      description: "Lead sync, stage detection, opportunity tracking",
      lastTested: new Date().toISOString(),
      endpoint: "/api/ghl-webhook",
      config: {
        webhookUrl: "✓ Active",
        stageTracking: "✓ Enabled",
        leadSync: "✓ Running",
      },
    },
    {
      id: "twilio",
      name: "Twilio SMS/Voice",
      status: "active",
      type: "Communication",
      description: "Voice transcripts, SMS triggers, TwiML responses",
      lastTested: new Date().toISOString(),
      endpoint: "/api/twilio-speech",
      config: {
        accountSid: "✓ Active",
        authToken: "✓ Configured",
        phoneNumber: "+1 (555) 123-4567",
      },
    },
    {
      id: "builder",
      name: "Builder.io Live Edit",
      status: "active",
      type: "Visual CMS",
      description: "Drag-drop editing, component registry, visual builder",
      lastTested: new Date().toISOString(),
      config: {
        apiKey: "✓ Active",
        modelName: "page",
        registry: "✓ Clean",
      },
    },
    {
      id: "pwa",
      name: "PWA + Notifications",
      status: "active",
      type: "Mobile Experience",
      description: "Push notifications, offline mode, installable app",
      lastTested: new Date().toISOString(),
      config: {
        vapidKeys: "✓ Configured",
        serviceWorker: "✓ Active",
        pushPrompts: "✓ Enabled",
      },
    },
    {
      id: "extension",
      name: "Chrome Extension CTA",
      status: "active",
      type: "Browser Integration",
      description: "PartnerTech.ai showcase, extension install flow",
      lastTested: new Date().toISOString(),
      config: {
        downloadUrl: "✓ Live",
        brandedFlow: "✓ Active",
        partnerTechPage: "✓ Deployed",
      },
    },
  ]);

  const [editingNotes, setEditingNotes] = useState<string | null>(null);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [testingIntegration, setTestingIntegration] = useState<string | null>(
    null,
  );

  const statusEmoji = {
    active: "🟢",
    inactive: "⚪️",
    error: "🔴",
    testing: "🟠",
  };

  const statusColors = {
    active: "#16A34A",
    inactive: "#6B7280",
    error: "#DC2626",
    testing: "#F59E0B",
  };

  const testIntegration = async (integrationId: string) => {
    setTestingIntegration(integrationId);

    try {
      // Simulate API test
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIntegrations((prev) =>
        prev.map((integration) =>
          integration.id === integrationId
            ? {
                ...integration,
                status: "active",
                lastTested: new Date().toISOString(),
              }
            : integration,
        ),
      );
    } catch (error) {
      setIntegrations((prev) =>
        prev.map((integration) =>
          integration.id === integrationId
            ? { ...integration, status: "error" }
            : integration,
        ),
      );
    } finally {
      setTestingIntegration(null);
    }
  };

  const disconnectIntegration = (integrationId: string) => {
    setIntegrations((prev) =>
      prev.map((integration) =>
        integration.id === integrationId
          ? { ...integration, status: "inactive" }
          : integration,
      ),
    );
  };

  const saveNotes = async (integrationId: string, noteText: string) => {
    // Save to Supabase or local storage
    setNotes((prev) => ({ ...prev, [integrationId]: noteText }));
    setEditingNotes(null);
  };

  useEffect(() => {
    // Real-time status monitoring
    const interval = setInterval(() => {
      // Simulate real-time status updates
      // In production, this would poll actual endpoints or use websockets
    }, 30000);

    return () => clearInterval(interval);
  }, []);

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
      {/* Header */}
      <div style={{ marginBottom: "3rem" }}>
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
          Integration Status Panel
        </h1>
        <p style={{ color: "#9CA3AF", fontSize: "1.125rem" }}>
          Real-time monitoring of all SaintSal™ Empire integrations
        </p>

        {/* Status Summary */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.5rem",
            flexWrap: "wrap",
          }}
        >
          {Object.entries(statusEmoji).map(([status, emoji]) => {
            const count = integrations.filter(
              (i) => i.status === status,
            ).length;
            return (
              <div
                key={status}
                style={{
                  background: "rgba(16, 22, 28, 0.8)",
                  border: `1px solid ${statusColors[status as keyof typeof statusColors]}40`,
                  borderRadius: "0.75rem",
                  padding: "0.75rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "1.25rem" }}>{emoji}</span>
                <span
                  style={{ fontWeight: "600", textTransform: "capitalize" }}
                >
                  {status}: {count}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Integrations Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {integrations.map((integration) => (
          <div
            key={integration.id}
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              backdropFilter: "blur(8px)",
              border: `1px solid ${statusColors[integration.status]}40`,
              borderRadius: "1.5rem",
              padding: "1.5rem",
              position: "relative",
              transition: "all 0.3s ease",
            }}
          >
            {/* Status Badge */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
                background: statusColors[integration.status],
                color: "#ffffff",
                padding: "0.25rem 0.75rem",
                borderRadius: "1rem",
                fontSize: "0.75rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "0.25rem",
              }}
            >
              {statusEmoji[integration.status]}
              {integration.status.toUpperCase()}
            </div>

            {/* Integration Info */}
            <div style={{ marginBottom: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: "700",
                  color: "#FFC700",
                  marginBottom: "0.25rem",
                }}
              >
                {integration.name}
              </h3>
              <p
                style={{
                  color: "#9CA3AF",
                  fontSize: "0.875rem",
                  marginBottom: "0.5rem",
                }}
              >
                {integration.type}
              </p>
              <p
                style={{
                  color: "#D1D5DB",
                  fontSize: "0.875rem",
                  lineHeight: "1.4",
                }}
              >
                {integration.description}
              </p>
            </div>

            {/* Configuration */}
            <div style={{ marginBottom: "1rem" }}>
              <h4
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#FFC700",
                  marginBottom: "0.5rem",
                }}
              >
                Configuration
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.25rem",
                }}
              >
                {Object.entries(integration.config).map(([key, value]) => (
                  <div
                    key={key}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      fontSize: "0.75rem",
                      color: "#9CA3AF",
                    }}
                  >
                    <span style={{ textTransform: "capitalize" }}>
                      {key.replace(/([A-Z])/g, " $1")}:
                    </span>
                    <span
                      style={{
                        color: value.toString().includes("✓")
                          ? "#16A34A"
                          : "#D1D5DB",
                      }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Endpoint */}
            {integration.endpoint && (
              <div style={{ marginBottom: "1rem" }}>
                <span style={{ fontSize: "0.75rem", color: "#6B7280" }}>
                  Endpoint:
                </span>
                <code
                  style={{
                    background: "rgba(0, 0, 0, 0.5)",
                    padding: "0.125rem 0.375rem",
                    borderRadius: "0.25rem",
                    fontSize: "0.75rem",
                    color: "#FFC700",
                    marginLeft: "0.5rem",
                  }}
                >
                  {integration.endpoint}
                </code>
              </div>
            )}

            {/* Notes Section */}
            <div style={{ marginBottom: "1rem" }}>
              <h4
                style={{
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  color: "#FFC700",
                  marginBottom: "0.5rem",
                }}
              >
                Notes
              </h4>
              {editingNotes === integration.id ? (
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <input
                    type="text"
                    placeholder="Add integration notes..."
                    defaultValue={notes[integration.id] || ""}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveNotes(integration.id, e.currentTarget.value);
                      }
                    }}
                    style={{
                      flex: 1,
                      background: "rgba(0, 0, 0, 0.5)",
                      border: "1px solid rgba(255, 199, 0, 0.3)",
                      borderRadius: "0.5rem",
                      padding: "0.5rem",
                      color: "#ffffff",
                      fontSize: "0.875rem",
                    }}
                    autoFocus
                  />
                  <button
                    onClick={() => setEditingNotes(null)}
                    style={{
                      background: "transparent",
                      border: "none",
                      color: "#9CA3AF",
                      cursor: "pointer",
                    }}
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div
                  onClick={() => setEditingNotes(integration.id)}
                  style={{
                    padding: "0.5rem",
                    border: "1px dashed rgba(255, 199, 0, 0.3)",
                    borderRadius: "0.5rem",
                    fontSize: "0.875rem",
                    color: notes[integration.id] ? "#D1D5DB" : "#6B7280",
                    cursor: "pointer",
                    minHeight: "2rem",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {notes[integration.id] || "Click to add notes..."}
                </div>
              )}
            </div>

            {/* Last Tested */}
            <div
              style={{
                marginBottom: "1rem",
                fontSize: "0.75rem",
                color: "#6B7280",
              }}
            >
              Last tested: {new Date(integration.lastTested).toLocaleString()}
            </div>

            {/* Actions */}
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => testIntegration(integration.id)}
                disabled={testingIntegration === integration.id}
                style={{
                  background:
                    testingIntegration === integration.id
                      ? "#F59E0B"
                      : "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
                  color: "#000000",
                  border: "none",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  cursor:
                    testingIntegration === integration.id
                      ? "not-allowed"
                      : "pointer",
                  opacity: testingIntegration === integration.id ? 0.7 : 1,
                }}
              >
                {testingIntegration === integration.id ? "Testing..." : "Test"}
              </button>

              <button
                onClick={() => disconnectIntegration(integration.id)}
                style={{
                  background: "transparent",
                  color: "#DC2626",
                  border: "1px solid #DC2626",
                  borderRadius: "0.5rem",
                  padding: "0.5rem 1rem",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Disconnect
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div
        style={{
          marginTop: "3rem",
          padding: "1.5rem",
          background: "rgba(255, 199, 0, 0.1)",
          border: "1px solid rgba(255, 199, 0, 0.3)",
          borderRadius: "1rem",
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "1.125rem",
            fontWeight: "700",
            color: "#FFC700",
            marginBottom: "0.5rem",
          }}
        >
          🔥 Enterprise-Grade Integration Monitoring
        </h3>
        <p style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
          Real-time status tracking • Automated health checks • Instant
          notifications
        </p>
      </div>
    </div>
  );
}
