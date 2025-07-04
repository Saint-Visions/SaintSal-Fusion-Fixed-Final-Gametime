import React from "react";

interface EmpireSectionProps {
  children: React.ReactNode;
  background?: "black" | "gradient" | "charcoal" | "transparent";
  className?: string;
}

export function EmpireSection({
  children,
  background = "transparent",
  className = "",
}: EmpireSectionProps) {
  const backgroundClasses = {
    black: "bg-black",
    gradient: "empire-gradient",
    charcoal: "bg-charcoal/40",
    transparent: "",
  };

  return (
    <section className={`${backgroundClasses[background]} ${className}`}>
      {children}
    </section>
  );
}
