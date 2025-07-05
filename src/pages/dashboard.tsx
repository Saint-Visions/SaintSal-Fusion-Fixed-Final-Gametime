import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Strategic Background Asset */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div
        className="relative z-10 p-8"
        style={{
          backgroundImage:
            "url(https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0c51add9770a483da3d69367347e4536)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: "0.7",
          fontWeight: "400",
        }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header with Authority Assets */}
          <div className="mb-12 relative">
            <div className="flex items-center gap-6 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4fc64208ddf14c6e898d03dab82562ec?format=webp&width=800"
                alt="SaintSal Empire Authority"
                className="w-16 h-16 rounded-xl"
                style={{
                  filter: "drop-shadow(0 0 15px rgba(255, 215, 0, 0.6))",
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
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
            <Link
              to="/console"
              className="group bg-gray-900/40 backdrop-blur-sm border border-gold/20 rounded-lg p-4 hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4fc64208ddf14c6e898d03dab82562ec?format=webp&width=800"
                  alt="AI"
                  className="w-8 h-8 rounded-lg"
                />
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                    Dual AI Console
                  </h3>
                  <p className="text-gray-400 text-sm">Azure + OpenAI GPT-4o</p>
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
              to="/partnertech"
              className="group bg-gray-900/40 backdrop-blur-sm border border-gold/20 rounded-lg p-4 hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-sm font-bold text-white">
                  ⚡
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                    PartnerTech.ai
                  </h3>
                  <p className="text-gray-400 text-sm">Lead Discovery</p>
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

            <Link
              to="/companion"
              className="group bg-gray-900/40 backdrop-blur-sm border border-gold/20 rounded-lg p-4 hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center text-sm font-bold text-white">
                  🤖
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                    My Companion
                  </h3>
                  <p className="text-gray-400 text-sm">AI Assistant</p>
                </div>
              </div>
            </Link>

            <Link
              to="/ai-tools"
              className="group bg-gray-900/40 backdrop-blur-sm border border-gold/20 rounded-lg p-4 hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center text-sm font-bold text-white">
                  🛠️
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-gold transition-colors">
                    AI Tools
                  </h3>
                  <p className="text-gray-400 text-sm">Automation</p>
                </div>
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
