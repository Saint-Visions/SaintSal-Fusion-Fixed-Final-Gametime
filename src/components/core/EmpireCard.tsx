import React from "react";

interface EmpireCardProps {
  children: React.ReactNode;
  variant?: "default" | "glass" | "glow" | "premium";
  padding?: "sm" | "md" | "lg" | "xl";
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export function EmpireCard({
  children,
  variant = "default",
  padding = "lg",
  className = "",
  onClick,
  hoverable = false,
}: EmpireCardProps) {
  const baseClasses = "rounded-empire transition-all duration-300";

  const variantClasses = {
    default: "bg-charcoal/80 border border-gold/20 shadow-xl",
    glass: "empire-glass shadow-2xl",
    glow: "bg-charcoal/80 border border-gold/30 empire-glow",
    premium:
      "bg-gradient-to-br from-charcoal via-empire-light to-charcoal border-2 border-gold/40 shadow-2xl empire-glow",
  };

  const paddingClasses = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
    xl: "p-10",
  };

  const hoverClasses = hoverable
    ? "hover:border-gold/40 hover:shadow-2xl transform hover:scale-[1.02] cursor-pointer"
    : "";

  const clickableClasses = onClick ? "cursor-pointer" : "";

  const allClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${paddingClasses[padding]}
    ${hoverClasses}
    ${clickableClasses}
    ${className}
  `.trim();

  return (
    <div className={allClasses} onClick={onClick}>
      {children}
    </div>
  );
}
