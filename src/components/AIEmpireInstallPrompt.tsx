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
    <div className="fixed bottom-4 left-4 right-4 z-50 flex justify-center">
      <div
        className="flex items-center justify-between px-6 py-4 rounded-2xl shadow-2xl max-w-md w-full"
        style={{
          background: "linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)",
          border: "2px solid rgba(255, 199, 0, 0.3)",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Left side - Logo and text */}
        <div className="flex items-center gap-4">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fb4d1baacd79944e59033e0f3fcf7229e?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-8 h-8 object-contain"
          />
          <div>
            <div
              className="text-lg font-bold"
              style={{
                color: "#FFD700",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Install SaintSal🔥🔥 Empire
            </div>
            <div
              className="text-sm"
              style={{
                color: "#9CA3AF",
                fontFamily:
                  "Inter, -apple-system, Roboto, Helvetica, sans-serif",
              }}
            >
              Full mobile access • voice commands • offline mode
            </div>
          </div>
        </div>

        {/* Right side - Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
            style={{
              color: "#9CA3AF",
              background: "transparent",
              border: "1px solid rgba(156, 163, 175, 0.3)",
              fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(156, 163, 175, 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
            }}
          >
            Later
          </button>
          <button
            onClick={onInstall}
            className="px-6 py-2 text-sm font-bold rounded-lg transition-all duration-200"
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
