import { useState, useEffect } from "react";

interface PushNotificationPromptProps {
  onClose?: () => void;
  onPermissionGranted?: () => void;
}

export default function PushNotificationPrompt({
  onClose,
  onPermissionGranted,
}: PushNotificationPromptProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  useEffect(() => {
    // Check if notifications are supported
    setIsSupported("Notification" in window && "serviceWorker" in navigator);

    // Show prompt after a delay if notifications aren't already granted
    const timer = setTimeout(() => {
      if (Notification.permission === "default") {
        setIsVisible(true);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const requestPermission = async () => {
    if (!isSupported) return;

    try {
      const permission = await Notification.requestPermission();

      if (permission === "granted") {
        // Register service worker for push notifications
        if ("serviceWorker" in navigator) {
          const registration = await navigator.serviceWorker.register("/sw.js");
          console.log("Service Worker registered:", registration);
        }

        // Show welcome notification
        new Notification("🔥 SaintSal™ Empire Ready!", {
          body: "You'll now receive alerts for leads, deals, and AI insights.",
          icon: "/icons/icon-192x192.png",
          badge: "/icons/icon-192x192.png",
        });

        onPermissionGranted?.();
      }

      setIsVisible(false);
      onClose?.();
    } catch (error) {
      console.error("Error requesting notification permission:", error);
    }
  };

  const dismiss = () => {
    setIsVisible(false);
    onClose?.();
  };

  if (!isVisible || !isSupported || Notification.permission === "granted") {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        fontFamily: "Inter, system-ui, sans-serif",
        padding: "1rem",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #10161C 0%, #1C2431 100%)",
          border: "2px solid #FFC700",
          borderRadius: "1.5rem",
          padding: "2rem",
          maxWidth: "400px",
          textAlign: "center",
          color: "#ffffff",
          animation: "slideIn 0.3s ease-out",
        }}
      >
        {/* Icon */}
        <div
          style={{
            fontSize: "3rem",
            marginBottom: "1rem",
          }}
        >
          🔔
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.5rem",
            fontWeight: "700",
            color: "#FFC700",
            marginBottom: "1rem",
          }}
        >
          Enable Empire Alerts
        </h3>

        {/* Description */}
        <p
          style={{
            color: "#D1D5DB",
            fontSize: "1rem",
            lineHeight: "1.5",
            marginBottom: "2rem",
          }}
        >
          Want alerts when your lead replies, a deal closes, or AI detects
          urgency?
        </p>

        {/* Features */}
        <div
          style={{
            textAlign: "left",
            marginBottom: "2rem",
            background: "rgba(255, 199, 0, 0.1)",
            padding: "1rem",
            borderRadius: "0.5rem",
            border: "1px solid rgba(255, 199, 0, 0.2)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: "#22C55E" }}>✅</span>
            <span style={{ fontSize: "0.875rem", color: "#D1D5DB" }}>
              Stripe payment confirmations
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            <span style={{ color: "#22C55E" }}>✅</span>
            <span style={{ fontSize: "0.875rem", color: "#D1D5DB" }}>
              CRM lead alerts
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span style={{ color: "#22C55E" }}>✅</span>
            <span style={{ fontSize: "0.875rem", color: "#D1D5DB" }}>
              AI assistant follow-ups
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          <button
            onClick={dismiss}
            style={{
              background: "transparent",
              border: "1px solid rgba(255, 199, 0, 0.3)",
              color: "#FFC700",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "600",
              cursor: "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
            }}
          >
            Maybe Later
          </button>

          <button
            onClick={requestPermission}
            style={{
              background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
              border: "none",
              color: "#000000",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              fontWeight: "700",
              cursor: "pointer",
              fontFamily: "Inter, system-ui, sans-serif",
              boxShadow: "0 4px 12px rgba(255, 199, 0, 0.3)",
            }}
          >
            🔔 Enable Alerts
          </button>
        </div>

        <p
          style={{
            fontSize: "0.75rem",
            color: "#9CA3AF",
            marginTop: "1rem",
            lineHeight: "1.4",
          }}
        >
          Fully works offline via next-pwa. You can disable anytime in settings.
        </p>
      </div>

      <style>{`
        @keyframes slideIn {
          from { 
            opacity: 0; 
            transform: translateY(-20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
      `}</style>
    </div>
  );
}
