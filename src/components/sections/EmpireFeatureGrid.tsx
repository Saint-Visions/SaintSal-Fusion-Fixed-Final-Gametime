import React from "react";
import { EmpireContainer } from "../layout/EmpireContainer";
import { EmpireGrid } from "../layout/EmpireGrid";
import { EmpireCard } from "../core/EmpireCard";

interface Feature {
  icon: string;
  title: string;
  description: string;
  color?: string;
}

interface EmpireFeatureGridProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  cols?: 1 | 2 | 3 | 4 | 6;
  className?: string;
}

export function EmpireFeatureGrid({
  title,
  subtitle,
  features,
  cols = 3,
  className = "",
}: EmpireFeatureGridProps) {
  return (
    <section className={`py-20 ${className}`}>
      <EmpireContainer>
        {(title || subtitle) && (
          <div className="text-center mb-16">
            {title && (
              <h2 className="text-4xl font-black text-white mb-6">{title}</h2>
            )}
            {subtitle && (
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        <EmpireGrid cols={cols}>
          {features.map((feature, index) => (
            <EmpireCard key={index} className="text-center">
              <div
                className="text-4xl font-black mb-4"
                style={{ color: feature.color || "#FFC700" }}
              >
                {feature.icon}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                {feature.title}
              </div>
              <div className="text-gray-400">{feature.description}</div>
            </EmpireCard>
          ))}
        </EmpireGrid>
      </EmpireContainer>
    </section>
  );
}
