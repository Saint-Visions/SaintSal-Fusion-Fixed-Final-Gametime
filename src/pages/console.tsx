import React, { useState } from "react";

export default function Console() {
  const [message, setMessage] = useState("");

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

      <div className="relative z-10 p-12">
        <div className="max-w-6xl mx-auto">
          {/* Clean Executive Header */}
          <div className="text-center mb-20">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F223dc8612ee14e9bb8159050e6235d76?format=webp&width=800"
              alt="SaintVision AI"
              className="w-20 h-20 mx-auto mb-8"
              style={{
                filter: "drop-shadow(0 0 25px rgba(255, 215, 0, 0.7))",
                mixBlendMode: "screen",
              }}
            />

            <h1 className="text-5xl font-black text-white mb-6">
              Executive <span className="text-gold">AI Console</span>
            </h1>

            <p className="text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Patent-protected dual cognitive architecture for strategic
              decision making
            </p>

            {/* Clean Patent Badge */}
            <div className="inline-block bg-gradient-to-r from-gold/10 to-yellow-500/10 border border-gold/40 rounded-2xl px-8 py-4">
              <div className="flex items-center gap-6">
                <span className="text-gold font-bold">
                  🏛️ U.S. Patent 10,290,222
                </span>
                <span className="w-1 h-1 bg-gold rounded-full"></span>
                <span className="text-green-400 font-bold">
                  LIVE Enterprise
                </span>
                <span className="w-1 h-1 bg-gold rounded-full"></span>
                <span className="text-white font-semibold">
                  We Own This Space
                </span>
              </div>
            </div>
          </div>

          {/* Single Executive AI Interface */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-gradient-to-br from-gray-900/40 to-black/60 backdrop-blur-xl border border-gold/30 rounded-3xl p-12 text-center">
              <div className="mb-10">
                <div className="w-24 h-24 bg-gradient-to-br from-gold to-yellow-400 rounded-3xl mx-auto mb-8 flex items-center justify-center shadow-2xl">
                  <span className="text-3xl font-black text-black">AI</span>
                </div>

                <h2 className="text-4xl font-bold text-white mb-6">
                  Azure + OpenAI{" "}
                  <span className="text-gold">Executive Suite</span>
                </h2>

                <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
                  Enterprise-grade cognitive architecture combining Azure's
                  infrastructure with OpenAI's most advanced models for
                  strategic intelligence.
                </p>

                <div className="flex items-center justify-center gap-8 mb-10">
                  <span className="bg-blue-500/20 border border-blue-500/40 text-blue-300 px-4 py-2 rounded-xl font-semibold">
                    Azure Enterprise
                  </span>
                  <span className="bg-green-500/20 border border-green-500/40 text-green-300 px-4 py-2 rounded-xl font-semibold">
                    GPT-4o Turbo
                  </span>
                  <span className="bg-gold/20 border border-gold/40 text-gold px-4 py-2 rounded-xl font-semibold">
                    Patent Protected
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
