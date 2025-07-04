import React from "react";
import { EmpireContainer } from "../layout/EmpireContainer";
import { EmpireButton } from "../core/EmpireButton";

interface EmpireHeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  tagline?: string;
  primaryAction?: {
    text: string;
    href: string;
  };
  secondaryAction?: {
    text: string;
    href: string;
  };
  backgroundImage?: string;
  className?: string;
}

export function EmpireHero({
  title,
  subtitle,
  description,
  tagline = "Yeah... I GOTTA GUY™",
  primaryAction,
  secondaryAction,
  backgroundImage,
  className = "",
}: EmpireHeroProps) {
  return (
    <section
      className={`relative empire-gradient pt-20 pb-32 ${className}`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {backgroundImage && <div className="absolute inset-0 bg-black/60" />}

      <EmpireContainer className="relative">
        <div className="text-center">
          <h1 className="hero-text mb-8 leading-tight">{title}</h1>

          {subtitle && (
            <h2 className="text-2xl font-bold text-gold mb-4">{subtitle}</h2>
          )}

          {description && (
            <p className="text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          <p className="text-xl text-gold font-semibold mb-12">{tagline}</p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
