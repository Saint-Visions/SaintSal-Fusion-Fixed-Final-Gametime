import React from "react";
import { Link } from "react-router-dom";

const CommandTile = ({
  title,
  badge,
  description,
  to,
  badgeColor = "bg-green-600",
}: {
  title: string;
  badge: string;
  description: string;
  to: string;
  badgeColor?: string;
}) => (
  <Link to={to}>
    <div className="relative w-full max-w-[420px] p-6 bg-[#121212] text-white rounded-2xl border border-yellow-400/20 hover:shadow-xl transition cursor-pointer">
      <div className="text-lg font-semibold mb-1">{title}</div>
      <div className="text-sm text-gray-400">{description}</div>
      <span
        className={`absolute top-4 right-4 text-xs px-2 py-1 rounded-md font-semibold ${badgeColor} text-white`}
      >
        {badge}
      </span>
    </div>
  </Link>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#10161C] text-white">
      {/* Hero Section with Wall Street Background */}
      <div className="relative bg-[url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0cb04442c273431d870617f9f63e0177?format=webp&width=800')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 py-24 text-center px-6 sm:px-12">
          <h1 className="text-[#FFD700] text-4xl sm:text-5xl font-bold">
            Command Center
          </h1>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Your AI empire at a glance. Monitor, manage, scale.
          </p>
        </div>
      </div>

      {/* CRM Snapshot Bar */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-[#181818] mt-12 rounded-xl p-4 grid grid-cols-2 sm:grid-cols-4 text-center text-white text-sm font-medium">
          <div>
            <strong>12</strong> Leads
          </div>
          <div>
            <strong>4</strong> Docs Pending
          </div>
          <div>
            <strong>7</strong> Sent to Lender
          </div>
          <div>
            <strong>3</strong> Funded
          </div>
        </div>
      </div>

      {/* Command Tiles Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <CommandTile
          title="Dual AI Console"
          badge="LIVE"
          description="Azure Cognitive + OpenAI GPT-4o Turbo execution engine"
          to="/console"
          badgeColor="bg-green-600"
        />
        <CommandTile
          title="PartnerTech.ai"
          badge="ACTIVE"
          description="Intent-triggered SaaS platform for lead discovery"
          to="/partnertech"
          badgeColor="bg-blue-600"
        />
        <CommandTile
          title="My Companion"
          badge="READY"
          description="Personalized AI assistant for task management"
          to="/companion"
          badgeColor="bg-green-600"
        />
        <CommandTile
          title="AI Tools"
          badge="TOOLS"
          description="Advanced AI utilities and automation suite"
          to="/ai-tools"
          badgeColor="bg-purple-600"
        />
      </div>
    </div>
  );
}
