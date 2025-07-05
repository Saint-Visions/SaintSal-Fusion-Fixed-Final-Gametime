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
          {/* Command Center Quick Access */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-8">
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
              className="group bg-gray-900/80 border border-gold/20 rounded-md p-2 hover:border-gold transition-all duration-200 text-center"
            >
              <div className="w-4 h-4 bg-blue-600 rounded-sm mx-auto mb-1 flex items-center justify-center text-xs">
                ⚡
              </div>
              <p className="text-xs text-white group-hover:text-gold">CRM</p>
            </Link>

            <Link
              to="/companion"
              className="group bg-gray-900/60 border border-gold/30 rounded-lg p-3 hover:border-gold transition-all duration-200 text-center"
            >
              <div className="w-6 h-6 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center text-xs">
                🤖
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-gold">
                Companion
              </h3>
              <p className="text-xs text-gray-400">Assistant</p>
            </Link>

            <Link
              to="/ai-tools"
              className="group bg-gray-900/60 border border-gold/30 rounded-lg p-3 hover:border-gold transition-all duration-200 text-center"
            >
              <div className="w-6 h-6 bg-purple-600 rounded mx-auto mb-2 flex items-center justify-center text-xs">
                🛠️
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-gold">
                AI Tools
              </h3>
              <p className="text-xs text-gray-400">Automation</p>
            </Link>

            <Link
              to="/my-business"
              className="group bg-gray-900/60 border border-gold/30 rounded-lg p-3 hover:border-gold transition-all duration-200 text-center"
            >
              <div className="w-6 h-6 bg-orange-600 rounded mx-auto mb-2 flex items-center justify-center text-xs">
                💼
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-gold">
                Business
              </h3>
              <p className="text-xs text-gray-400">Analytics</p>
            </Link>

            <Link
              to="/image-generator"
              className="group bg-gray-900/60 border border-gold/30 rounded-lg p-3 hover:border-gold transition-all duration-200 text-center"
            >
              <div className="w-6 h-6 bg-pink-600 rounded mx-auto mb-2 flex items-center justify-center text-xs">
                🎨
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-gold">
                Generator
              </h3>
              <p className="text-xs text-gray-400">Images</p>
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
