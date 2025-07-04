import React from "react";

interface EmpireBadgeProps {
  variant?: "gold" | "green" | "red" | "orange" | "gray";
  children: React.ReactNode;
  className?: string;
}

export function EmpireBadge({
  variant = "gold",
  children,
  className = "",
}: EmpireBadgeProps) {
  const baseClasses =
    "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";

  const variantClasses = {
    gold: "bg-gold/20 text-gold border border-gold/30",
    green: "bg-green-500/20 text-green-400 border border-green-500/30",
    red: "bg-red-500/20 text-red-400 border border-red-500/30",
    orange: "bg-orange-500/20 text-orange-400 border border-orange-500/30",
    gray: "bg-gray-500/20 text-gray-400 border border-gray-500/30",
  };

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
