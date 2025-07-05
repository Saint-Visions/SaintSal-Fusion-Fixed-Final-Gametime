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

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Link
              to="/console"
              className="empire-card hover:gold-glow transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-lg font-bold text-gold mb-2">AI Console</h3>
              <p className="text-gray-400 text-sm">
                Launch intelligent conversations
              </p>
            </Link>

            <Link
              to="/builder"
              className="empire-card hover:gold-glow transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-gold mb-2">Builder</h3>
              <p className="text-gray-400 text-sm">Create dynamic layouts</p>
            </Link>

            <Link
              to="/crm"
              className="empire-card hover:gold-glow transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-gold mb-2">CRM Tools</h3>
              <p className="text-gray-400 text-sm">Manage relationships</p>
            </Link>

            <Link
              to="/upgrade"
              className="empire-card hover:gold-glow transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-lg font-bold text-gold mb-2">Upgrade</h3>
              <p className="text-gray-400 text-sm">Unlock more power</p>
            </Link>
          </div>

          {/* Stats Grid */}
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
