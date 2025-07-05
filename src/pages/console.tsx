import React, { useState } from "react";

export default function Console() {
  const [currentChat, setCurrentChat] = useState("azure");
  const [message, setMessage] = useState("");

  const companions = {
    azure: {
      name: "SaintSal™ Cognitive Companion",
      subtitle: "Azure Cognitive Search + OpenAI GPT-4o Turbo",
      status: "Enterprise Ready",
      color: "from-blue-600 to-blue-800",
      description:
        "Welcome to the SaintSal™ Empire AI Command Center. I'm your cognitive companion, powered by dual Azure OpenAI 4o Turbo architecture. How may I assist you in expanding your empire today?",
    },
    openai: {
      name: "Empire AI Advisor",
      subtitle: "OpenAI GPT-4o Turbo + Custom Training",
      status: "Live",
      color: "from-green-600 to-green-800",
      description:
        "Greetings! I'm your Empire AI Advisor, trained specifically on SAINTSAL™ methodologies and patent-protected HACP™ protocols. Ready to execute high-level strategic operations?",
    },
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Professional Background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F0af8b173487f46b5bcd14fa868c21dca?format=webp&width=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Executive Authority Header */}
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-4 mb-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F223dc8612ee14e9bb8159050e6235d76?format=webp&width=800"
                alt="SaintVision AI"
                className="w-16 h-16"
                style={{
                  filter: "drop-shadow(0 0 20px rgba(255, 215, 0, 0.6))",
                  mixBlendMode: "screen",
                }}
              />
              <div className="text-left">
                <h1 className="text-4xl font-black text-white mb-2">
                  <span className="text-gold">SaintVision AI™</span> Executive
                  Console
                </h1>
                <p className="text-xl text-gray-300">
                  Patent-Protected Dual Cognitive Architecture
                </p>
              </div>
            </div>

            {/* Patent Authority Badge */}
            <div className="inline-flex items-center gap-6 bg-gradient-to-r from-gold/20 to-yellow-500/20 border-2 border-gold/50 rounded-2xl px-8 py-4">
              <div className="text-center">
                <div className="text-gold font-bold text-lg">
                  🏛️ U.S. PATENT
                </div>
                <div className="text-white font-black text-2xl">10,290,222</div>
              </div>
              <div className="w-px h-12 bg-gold/30"></div>
              <div className="flex items-center gap-4">
                <span className="bg-green-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                  LIVE
                </span>
                <span className="text-gold font-semibold">
                  WE OWN THIS SPACE
                </span>
              </div>
            </div>
          </div>

          {/* Executive AI Modules */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="group bg-gradient-to-br from-blue-900/30 to-blue-600/20 backdrop-blur-xl border-2 border-blue-500/40 rounded-3xl p-10 hover:border-gold/60 transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-black text-white">AI</span>
                </div>
                <div className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-bold border border-blue-500/30">
                  ENTERPRISE READY
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                Azure Cognitive Engine
              </h3>
              <p className="text-blue-200 text-lg mb-6">
                Enterprise-grade cognitive search with OpenAI GPT-4o Turbo
                integration
              </p>

              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-6">
                <div className="text-yellow-300 font-bold text-lg mb-2">
                  🎯 Executive Mode Active
                </div>
                <div className="text-yellow-200 text-sm">
                  Advanced intelligence for strategic decision making
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-green-900/30 to-green-600/20 backdrop-blur-xl border-2 border-green-500/40 rounded-3xl p-10 hover:border-gold/60 transition-all duration-500 cursor-pointer">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center shadow-xl">
                  <span className="text-2xl font-black text-white">⚡</span>
                </div>
                <div className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-bold border border-green-500/30">
                  LIVE
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-gold transition-colors">
                Empire AI Advisor
              </h3>
              <p className="text-green-200 text-lg mb-6">
                Custom-trained on SAINTSAL™ methodologies and patent-protected
                protocols
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-300 text-sm">
                    Real-time execution capabilities
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-green-300 text-sm">
                    HACP™ Protocol protected
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Executive Command Interface */}
          <div className="bg-gradient-to-br from-gray-900/50 to-black/70 backdrop-blur-xl border-2 border-gold/30 rounded-3xl overflow-hidden shadow-2xl">
            <div className="p-8 bg-gradient-to-r from-gray-800/80 to-gray-900/80 border-b border-gold/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-gold to-yellow-400 rounded-2xl flex items-center justify-center shadow-xl">
                    <span className="text-xl font-black text-black">AI</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      Executive AI Console
                    </h3>
                    <p className="text-gray-400">
                      Azure Cognitive + OpenAI GPT-4o Turbo
                    </p>
                  </div>
                </div>
                <div className="bg-green-500/20 border border-green-500/40 text-green-300 px-4 py-2 rounded-xl font-bold">
                  🔹 ENTERPRISE ACTIVE
                </div>
              </div>
            </div>

            <div className="p-8 min-h-[300px]">
              <div className="bg-gradient-to-r from-gold/10 to-yellow-500/10 border border-gold/30 rounded-2xl p-6 mb-6">
                <div className="text-white text-lg leading-relaxed">
                  <strong className="text-gold">
                    Welcome to your Executive AI Console.
                  </strong>
                  This patent-protected system combines Azure's enterprise
                  infrastructure with OpenAI's most advanced models to deliver
                  intelligent automation for strategic decision making.
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border-t border-gold/20">
              <div className="flex gap-4 mb-4">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter your executive query..."
                  className="flex-1 bg-black/50 text-white rounded-xl px-6 py-4 border border-gold/30 focus:border-gold focus:outline-none text-lg backdrop-blur-sm"
                />
                <button className="bg-gradient-to-r from-gold to-yellow-400 text-black px-8 py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300">
                  Execute ⚡
                </button>
              </div>
              <div className="text-center">
                <span className="text-gray-400 text-sm">
                  Powered by Patent No. 10,290,222 • HACP™ Protocol
                </span>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-900/60 to-black/60 backdrop-blur-xl border border-gold/20 rounded-2xl px-12 py-6">
              <div className="text-center">
                <div className="text-2xl font-black text-green-400 mb-1">
                  ✅
                </div>
                <div className="text-white font-semibold text-sm">
                  Enterprise Ready
                </div>
              </div>
              <div className="w-px h-8 bg-gold/30"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-blue-400 mb-1">⚡</div>
                <div className="text-white font-semibold text-sm">
                  Real-time Sync
                </div>
              </div>
              <div className="w-px h-8 bg-gold/30"></div>
              <div className="text-center">
                <div className="text-2xl font-black text-gold mb-1">🏛️</div>
                <div className="text-white font-semibold text-sm">
                  Patent Protected
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
