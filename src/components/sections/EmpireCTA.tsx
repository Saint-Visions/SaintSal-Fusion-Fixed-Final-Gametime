import React from "react";
import { EmpireContainer } from "../layout/EmpireContainer";
import { EmpireButton } from "../core/EmpireButton";

interface EmpireCTAProps {
  title: string;
  description?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  background?: "gradient" | "charcoal" | "black";
  className?: string;
}

export function EmpireCTA({
  title,
  description,
  primaryAction,
  secondaryAction,
  background = "gradient",
  className = "",
}: EmpireCTAProps) {
  const backgroundClasses = {
    gradient: "bg-gradient-to-r from-charcoal via-black to-charcoal",
    charcoal: "bg-charcoal/40",
    black: "bg-black",
  };

  return (
    <section className={`py-20 ${backgroundClasses[background]} ${className}`}>
      <EmpireContainer>
        <div className="text-center">
          <h2 className="text-4xl font-black text-white mb-6">{title}</h2>

          {description && (
            <p className="text-xl text-gray-300 mb-10 max-w-4xl mx-auto">
              {description}
            </p>
          )}

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {primaryAction && (
                <EmpireButton
                  as="a"
                  href={primaryAction.href}
                  variant="primary"
                >
                  {primaryAction.text}
                </EmpireButton>
              )}
              {secondaryAction && (
                <EmpireButton
                  as="a"
                  href={secondaryAction.href}
                  variant="secondary"
                >
                  {secondaryAction.text}
                </EmpireButton>
              )}
            </div>
          )}
        </div>
      </EmpireContainer>
    </section>
  );
}
