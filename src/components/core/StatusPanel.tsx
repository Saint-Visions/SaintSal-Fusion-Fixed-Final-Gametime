import React from "react";
import { EmpireBadge } from "./EmpireBadge";

interface StatusPanelProps {
  title: string;
  status: "connected" | "disconnected" | "warning" | "pending";
  description?: string;
  children?: React.ReactNode;
  onTest?: () => void;
  onDisconnect?: () => void;
  className?: string;
}

export function StatusPanel({
  title,
  status,
  description,
  children,
  onTest,
  onDisconnect,
  className = "",
}: StatusPanelProps) {
  const statusConfig = {
    connected: { badge: "🟢", variant: "green" as const, text: "Connected" },
    disconnected: {
      badge: "🔴",
      variant: "red" as const,
      text: "Disconnected",
    },
    warning: { badge: "🟠", variant: "orange" as const, text: "Warning" },
    pending: { badge: "⚪", variant: "gray" as const, text: "Pending" },
  };

  const config = statusConfig[status];

  return (
    <div className={`empire-card p-6 ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <div className="flex items-center gap-2">
          <span className="text-lg">{config.badge}</span>
          <EmpireBadge variant={config.variant}>{config.text}</EmpireBadge>
        </div>
      </div>

      {description && (
        <p className="text-gray-400 text-sm mb-4">{description}</p>
      )}

      {children}

      {(onTest || onDisconnect) && (
        <div className="flex gap-3 mt-4">
          {onTest && (
            <button
              onClick={onTest}
              className="text-xs bg-gold/20 text-gold px-3 py-2 rounded-lg hover:bg-gold/30 transition-all"
            >
              Test Connection
            </button>
          )}
          {onDisconnect && (
            <button
              onClick={onDisconnect}
              className="text-xs bg-red-500/20 text-red-400 px-3 py-2 rounded-lg hover:bg-red-500/30 transition-all"
            >
              Disconnect
            </button>
          )}
        </div>
      )}
    </div>
  );
}
