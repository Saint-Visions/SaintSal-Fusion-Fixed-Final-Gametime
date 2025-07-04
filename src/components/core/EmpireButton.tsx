import React from "react";

interface EmpireButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  animate?: boolean;
  as?: "button" | "a";
}

export function EmpireButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  icon,
  animate = true,
  as,
}: EmpireButtonProps) {
  const baseClasses =
    "font-semibold rounded-empire transition-all duration-300 flex items-center justify-center gap-2";

  const variantClasses = {
    primary: "bg-gold text-charcoal hover:bg-gold-hover empire-glow",
    secondary:
      "border-2 border-gold text-gold hover:bg-gold hover:text-charcoal",
    ghost: "text-gold hover:bg-gold/10",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
    xl: "px-10 py-5 text-xl",
  };

  const animateClasses = animate
    ? "transform hover:scale-105 active:scale-95"
    : "";

  const disabledClasses = disabled
    ? "opacity-50 cursor-not-allowed hover:scale-100 hover:bg-gold"
    : "cursor-pointer";

  const allClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${animateClasses}
    ${disabledClasses}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </>
  );

  if ((href || as === "a") && !disabled) {
    return (
      <a href={href} className={allClasses} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button className={allClasses} onClick={onClick} disabled={disabled}>
      {content}
    </button>
  );
}
