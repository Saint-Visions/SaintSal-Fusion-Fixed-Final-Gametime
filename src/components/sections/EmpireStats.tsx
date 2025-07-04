import React from "react";
import { EmpireContainer } from "../layout/EmpireContainer";
import { EmpireGrid } from "../layout/EmpireGrid";
import { EmpireCard } from "../core/EmpireCard";

interface Stat {
  value: string;
  label: string;
  description?: string;
  icon?: string;
}

interface EmpireStatsProps {
  title?: string;
  stats: Stat[];
  cols?: 1 | 2 | 3 | 4 | 6;
  className?: string;
}

export function EmpireStats({
  title,
  stats,
  cols = 3,
  className = "",
}: EmpireStatsProps) {
  return (
    <section className={`py-20 ${className}`}>
      <EmpireContainer>
        {title && (
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-white mb-6">{title}</h2>
          </div>
        )}

        <EmpireGrid cols={cols}>
          {stats.map((stat, index) => (
            <EmpireCard key={index} className="text-center">
              {stat.icon && (
                <div className="text-4xl font-black text-gold mb-4">
                  {stat.icon}
                </div>
              )}
              <div className="text-4xl font-black text-gold mb-4">
                {stat.value}
              </div>
              <div className="text-xl font-bold text-white mb-2">
                {stat.label}
              </div>
              {stat.description && (
                <div className="text-gray-400">{stat.description}</div>
              )}
            </EmpireCard>
          ))}
        </EmpireGrid>
      </EmpireContainer>
    </section>
  );
}
