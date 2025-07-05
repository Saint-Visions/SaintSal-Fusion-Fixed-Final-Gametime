import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#10161C" }}>
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Command Center Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold" style={{ color: "#FFD700" }}>
            Command Center
          </h1>
          <p className="text-lg text-gray-400 mt-2">
            Your AI empire at a glance. Monitor, manage, scale.
          </p>
        </div>

        {/* Command Center Grid */}
        <div className="grid grid-cols-2 gap-6 mt-12">
          {/* Dual AI Console Card */}
          <Link
            to="/console"
            className="bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-yellow-500/20 hover:border-yellow-500/50 max-w-md min-h-[240px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Dual AI Console</h3>
              <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold">
                LIVE
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Azure Cognitive + OpenAI GPT-4o Turbo execution engine
            </p>
            <div className="text-yellow-500 text-sm font-semibold">
              Patent Protected →
            </div>
          </Link>

          {/* PartnerTech.ai Card */}
          <Link
            to="/partnertech"
            className="bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-yellow-500/20 hover:border-yellow-500/50 max-w-md min-h-[240px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">PartnerTech.ai</h3>
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold">
                ACTIVE
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Intent-triggered SaaS platform for lead discovery
            </p>
            <div className="text-yellow-500 text-sm font-semibold">
              U.S. Patent 10,290,222 →
            </div>
          </Link>

          {/* My Companion Card */}
          <Link
            to="/companion"
            className="bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-yellow-500/20 hover:border-yellow-500/50 max-w-md min-h-[240px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">My Companion</h3>
              <span className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold">
                READY
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Personalized AI assistant for task management
            </p>
            <div className="text-yellow-500 text-sm font-semibold">
              HACP™ Protocol →
            </div>
          </Link>

          {/* AI Tools Card */}
          <Link
            to="/ai-tools"
            className="bg-gray-900 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-yellow-500/20 hover:border-yellow-500/50 max-w-md min-h-[240px]"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">AI Tools</h3>
              <span className="bg-purple-500 text-white px-2 py-1 rounded text-xs font-bold">
                TOOLS
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              Advanced AI utilities and automation suite
            </p>
            <div className="text-yellow-500 text-sm font-semibold">
              Enterprise Grade →
            </div>
          </Link>
        </div>

        {/* Bottom Status */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            SAINTSAL™ Empire • Patent Protected Technology
          </p>
        </div>
      </div>
    </div>
  );
}
