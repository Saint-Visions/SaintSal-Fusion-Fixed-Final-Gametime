import { useEffect, useState } from "react";

interface LoadingProps {
  onComplete?: () => void;
}

export default function Loading({ onComplete }: LoadingProps) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState("Initializing SaintSal™ Empire...");

  useEffect(() => {
    const messages = [
      "Initializing SaintSal™ Empire...",
      "Loading Dual-AI Console...",
      "Connecting Azure + OpenAI...",
      "Preparing your empire...",
    ];

    let messageIndex = 0;
    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += Math.random() * 15 + 5;

      if (progressValue > 100) {
        progressValue = 100;
        clearInterval(interval);
        setTimeout(() => {
          onComplete?.();
        }, 500);
      }

      setProgress(progressValue);

      // Change message every 25% progress
      const newMessageIndex = Math.floor(progressValue / 25);
      if (
        newMessageIndex !== messageIndex &&
        newMessageIndex < messages.length
      ) {
        messageIndex = newMessageIndex;
        setMessage(messages[messageIndex]);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background:
          "linear-gradient(135deg, #000000 0%, #10161C 50%, #000000 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "#ffffff",
        fontFamily: "Inter, system-ui, sans-serif !important",
        zIndex: 9999,
      }}
    >
      {/* Animated SVG Emblem */}
      <div
        style={{
          position: "relative",
          marginBottom: "2rem",
          animation: "float 3s ease-in-out infinite",
        }}
      >
        {/* Spinning Aura Ring */}
        <div
          style={{
            position: "absolute",
            top: "-20px",
            left: "-20px",
            right: "-20px",
            bottom: "-20px",
            border: "2px solid transparent",
            borderTopColor: "#FFC700",
            borderRightColor: "#FFC700",
            borderRadius: "50%",
            animation: "spin 2s linear infinite",
          }}
        />

        {/* Main Emblem */}
        <div
          style={{
            width: "120px",
            height: "120px",
            background: "linear-gradient(135deg, #FFC700 0%, #FFD700 100%)",
            borderRadius: "1rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            boxShadow: "0 0 40px rgba(255, 199, 0, 0.4)",
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
      </div>

      {/* Brand Text */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "900",
            background:
              "linear-gradient(135deg, #FFC700 0%, #FFD700 50%, #FFC700 100%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "0.5rem",
          }}
        >
          SAINTSAI™
        </h1>
        <p
          style={{
            color: "#FFC700",
            fontSize: "0.875rem",
            fontWeight: "600",
          }}
        >
          Dual-AI Console
        </p>
      </div>

      {/* Progress Bar */}
      <div
        style={{
          width: "300px",
          height: "4px",
          background: "rgba(255, 199, 0, 0.2)",
          borderRadius: "2px",
          marginBottom: "1rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #FFC700 0%, #FFD700 100%)",
            borderRadius: "2px",
            transition: "width 0.3s ease",
            boxShadow: "0 0 10px rgba(255, 199, 0, 0.5)",
          }}
        />
      </div>

      {/* Loading Message */}
      <p
        style={{
          color: "#9CA3AF",
          fontSize: "0.875rem",
          textAlign: "center",
          maxWidth: "300px",
          animation: "pulse 2s infinite",
        }}
      >
        ⚡ {message}
      </p>

      {/* Percentage */}
      <p
        style={{
          color: "#FFC700",
          fontSize: "0.75rem",
          fontWeight: "600",
          marginTop: "0.5rem",
        }}
      >
        {Math.round(progress)}%
      </p>

      {/* CSS Animations */}
      <style>{`
        * {
          font-family: "Inter", system-ui, -apple-system, sans-serif !important;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </div>
  );
}
