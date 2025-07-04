import { useState, useEffect } from "react";

interface LogEvent {
  id: string;
  event_type: string;
  user_id: string;
  timestamp: string;
  details: any;
  assistant_type?: string;
}

export default function AdminLogs() {
  const [logs, setLogs] = useState<LogEvent[]>([
    {
      id: "1",
      event_type: "ai_query",
      user_id: "user_123",
      timestamp: new Date().toISOString(),
      details: { message: "How do I scale my business?" },
      assistant_type: "saintvision",
    },
    {
      id: "2",
      event_type: "crm_viewed",
      user_id: "user_456",
      timestamp: new Date(Date.now() - 300000).toISOString(),
      details: { page: "dashboard" },
    },
    {
      id: "3",
      event_type: "upgrade_clicked",
      user_id: "user_789",
      timestamp: new Date(Date.now() - 600000).toISOString(),
      details: { plan: "enterprise" },
    },
  ]);

  const [filter, setFilter] = useState("all");

  const eventTypeColors = {
    ai_query: "#3B82F6",
    ai_response: "#10B981",
    crm_viewed: "#8B5CF6",
    upgrade_clicked: "#F59E0B",
    error: "#EF4444",
    login: "#06B6D4",
  };

  const filteredLogs =
    filter === "all" ? logs : logs.filter((log) => log.event_type === filter);

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
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
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
              📈 Admin Event Logs
            </h1>
            <p style={{ color: "#9CA3AF", fontSize: "1rem" }}>
              Real-time Supabase analytics and system events
            </p>
          </div>

          <div
            style={{
              background: "rgba(34, 197, 94, 0.2)",
              border: "1px solid #22C55E",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                background: "#22C55E",
                borderRadius: "50%",
                animation: "pulse 2s infinite",
              }}
            />
            <span
              style={{
                color: "#22C55E",
                fontSize: "0.875rem",
                fontWeight: "600",
              }}
            >
              LIVE
            </span>
          </div>
        </div>

        {/* Filters */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {[
            "all",
            "ai_query",
            "ai_response",
            "crm_viewed",
            "upgrade_clicked",
            "error",
          ].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              style={{
                background:
                  filter === type ? "#FFC700" : "rgba(255, 199, 0, 0.1)",
                color: filter === type ? "#000000" : "#FFC700",
                border: "1px solid rgba(255, 199, 0, 0.3)",
                padding: "0.5rem 1rem",
                borderRadius: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "600",
                cursor: "pointer",
                fontFamily: "Inter, system-ui, sans-serif",
                textTransform: "capitalize",
              }}
            >
              {type.replace("_", " ")}
            </button>
          ))}
        </div>

        {/* Stats Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(255, 199, 0, 0.2)",
              borderRadius: "1rem",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#FFC700",
                marginBottom: "0.5rem",
              }}
            >
              {logs.length}
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
              Total Events
            </div>
          </div>

          <div
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(59, 130, 246, 0.2)",
              borderRadius: "1rem",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#3B82F6",
                marginBottom: "0.5rem",
              }}
            >
              {logs.filter((l) => l.event_type === "ai_query").length}
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
              AI Queries
            </div>
          </div>

          <div
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(139, 92, 246, 0.2)",
              borderRadius: "1rem",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#8B5CF6",
                marginBottom: "0.5rem",
              }}
            >
              {logs.filter((l) => l.event_type === "crm_viewed").length}
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
              CRM Views
            </div>
          </div>

          <div
            style={{
              background: "rgba(16, 22, 28, 0.8)",
              border: "1px solid rgba(34, 197, 94, 0.2)",
              borderRadius: "1rem",
              padding: "1.5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                fontWeight: "900",
                color: "#22C55E",
                marginBottom: "0.5rem",
              }}
            >
              98.5%
            </div>
            <div style={{ color: "#9CA3AF", fontSize: "0.875rem" }}>Uptime</div>
          </div>
        </div>

        {/* Events Table */}
        <div
          style={{
            background: "rgba(16, 22, 28, 0.8)",
            border: "1px solid rgba(255, 199, 0, 0.2)",
            borderRadius: "1rem",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "rgba(255, 199, 0, 0.1)",
              padding: "1rem",
              borderBottom: "1px solid rgba(255, 199, 0, 0.2)",
            }}
          >
            <h3
              style={{
                color: "#FFC700",
                fontSize: "1.125rem",
                fontWeight: "600",
                margin: 0,
              }}
            >
              Recent Events ({filteredLogs.length})
            </h3>
          </div>

          <div style={{ maxHeight: "400px", overflowY: "auto" }}>
            {filteredLogs.map((log) => (
              <div
                key={log.id}
                style={{
                  padding: "1rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background:
                      eventTypeColors[
                        log.event_type as keyof typeof eventTypeColors
                      ] || "#9CA3AF",
                    flexShrink: 0,
                  }}
                />

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "0.25rem",
                    }}
                  >
                    <span
                      style={{
                        color: "#ffffff",
                        fontWeight: "600",
                        textTransform: "capitalize",
                      }}
                    >
                      {log.event_type.replace("_", " ")}
                    </span>
                    <span
                      style={{
                        color: "#9CA3AF",
                        fontSize: "0.75rem",
                      }}
                    >
                      {new Date(log.timestamp).toLocaleTimeString()}
                    </span>
                  </div>

                  <div
                    style={{
                      color: "#9CA3AF",
                      fontSize: "0.875rem",
                      display: "flex",
                      gap: "1rem",
                    }}
                  >
                    <span>User: {log.user_id}</span>
                    {log.assistant_type && (
                      <span>Assistant: {log.assistant_type}</span>
                    )}
                    {log.details?.message && (
                      <span>"{log.details.message.substring(0, 50)}..."</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
