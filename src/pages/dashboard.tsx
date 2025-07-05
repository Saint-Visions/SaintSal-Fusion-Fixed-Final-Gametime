import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Strategic Background Asset */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fac42e9eb2dfa4803b38dcbde07d04084?format=webp&width=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with Authority Assets */}
          <div className="mb-12 relative">
            <div className="flex items-center gap-6 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F223dc8612ee14e9bb8159050e6235d76?format=webp&width=800"
                alt="SaintSal Empire Authority"
                className="w-16 h-16 rounded-xl"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))",
                  mixBlendMode: "screen",
                }}
              />
              <div>
                <h1 className="text-4xl font-black text-white mb-2">
                  Command <span className="text-gold">Center</span>
                </h1>
                <p className="text-xl text-gray-300 mb-2">
                  Your AI empire at a glance. Monitor, manage, and scale your
                  operations.
                </p>
                <div className="flex items-center gap-3 text-gold font-semibold">
                  <span>Powered by SAINTSAL™ Empire</span>
                  <div className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold">
                    LIVE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Quick Access */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
            <Link
              to="/console"
              className="group bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-xl border border-gold/30 rounded-3xl p-12 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-gold to-yellow-400 rounded-2xl flex items-center justify-center text-2xl font-black text-black shadow-xl">
                  AI
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    Dual AI Console
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Azure Cognitive + OpenAI GPT-4o Turbo
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Enterprise-grade AI companion for strategic decision making and
                intelligent automation.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  LIVE
                </span>
                <span className="text-gold text-sm font-semibold">
                  Patent Protected
                </span>
              </div>
            </Link>

            <Link
              to="/crm"
              className="group bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-xl border border-gold/30 rounded-3xl p-12 hover:border-gold/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gold/20"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-black text-white shadow-xl">
                  ⚡
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gold transition-colors">
                    PartnerTech.ai
                  </h3>
                  <p className="text-gray-400 text-lg">
                    Lead Discovery & Pipeline
                  </p>
                </div>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed">
                Intent-triggered SaaS platform that executes actions, not just
                collects data.
              </p>
              <div className="flex items-center gap-3 mt-6">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  ACTIVE
                </span>
                <span className="text-gold text-sm font-semibold">
                  U.S. Patent 10,290,222
                </span>
              </div>
            </Link>
          </div>

          {/* Patent Authority Statement */}
          <div className="mb-16">
            <div className="bg-gradient-to-r from-gold/10 via-yellow-500/10 to-gold/10 border-2 border-gold/40 rounded-3xl p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                🏛️ We <span className="text-gold">OWN</span> This Space
              </h2>
              <p className="text-xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed">
                Protected by{" "}
                <strong className="text-gold">
                  U.S. Patent No. 10,290,222
                </strong>{" "}
                - HACP™ Protocol. The only platform that executes intelligent
                actions, not just conversations.
              </p>
              <div className="flex items-center justify-center gap-8 text-sm">
                <span className="text-blue-400">🔹 Azure Enterprise</span>
                <span className="text-green-400">🔹 OpenAI GPT-4o Turbo</span>
                <span className="text-purple-400">🔹 Patent Protected</span>
                <span className="text-gold">🔹 Market Leading</span>
              </div>
            </div>
          </div>

          {/* Executive Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="empire-card">
                <h3 className="text-2xl font-bold text-white mb-6">
                  System Status
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <span className="text-white">AI Chat System</span>
                    <span className="text-green-400 font-bold">✅ ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <span className="text-white">Builder Platform</span>
                    <span className="text-green-400 font-bold">✅ ONLINE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <span className="text-white">CRM Integration</span>
                    <span className="text-green-400 font-bold">✅ ONLINE</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="empire-card">
              <h3 className="text-2xl font-bold text-white mb-6">
                Quick Metrics
              </h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-black text-gold mb-2">∞</div>
                  <div className="text-sm text-gray-400">AI Requests</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gold mb-2">24/7</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-black text-gold mb-2">🚀</div>
                  <div className="text-sm text-gray-400">Performance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Patent Footer */}
        <div className="text-center mt-16">
          <p className="text-xs text-gray-600">
            HACP™ Engine · Patent 10,290,222
          </p>
        </div>
      </div>
    </div>
  );
}
