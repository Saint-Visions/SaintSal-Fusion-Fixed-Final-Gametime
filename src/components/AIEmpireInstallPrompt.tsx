import React, { useState } from "react";

interface AIEmpireInstallPromptProps {
  onClose: () => void;
  onInstall: () => void;
}

const AIEmpireInstallPrompt: React.FC<AIEmpireInstallPromptProps> = ({
  onClose,
  onInstall,
}) => {
  return (
    <div className="fixed bottom-6 left-4 right-4 z-50">
      <div
        className="flex items-center justify-between px-4 py-3 rounded-xl shadow-2xl"
        style={{
          background: "linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)",
          border: "1px solid rgba(255, 199, 0, 0.2)",
          backdropFilter: "blur(10px)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        {/* Left side - Logo and text */}
        <div className="flex items-center gap-3">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb4d1baacd79944e59033e0f3fcf7229e?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-6 h-6 object-contain"
          />
          <div>
            <div
              className="text-base font-bold"
              style={{
                color: "#FFD700",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Install SaintSal🔥🔥 Empire
            </div>
            <div
              className="text-xs"
              style={{
                color: "#FFFFFF",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Full mobile access • voice commands • offline mode
            </div>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200"
            style={{
              color: "#FFFFFF",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
            }}
          >
            Later
          </button>
          <button
            onClick={onInstall}
            className="px-4 py-1.5 text-sm font-bold rounded-md transition-all duration-200"
            style={{
              background: "#FFD700",
              color: "#000000",
              border: "none",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#FFC107";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#FFD700";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIEmpireInstallPrompt;
