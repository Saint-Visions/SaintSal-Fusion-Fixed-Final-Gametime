import React, { useState } from "react";

export default function Console() {
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Professional Background */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=2125")`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 p-12">
        <div className="max-w-6xl mx-auto">
          {/* Clean Executive Header */}
          <div className="text-center mb-20">
            <img
              src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?q=80&w=800"
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

          {/* Clean Executive Command Interface */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-900/30 to-black/50 backdrop-blur-xl border border-gold/20 rounded-3xl p-12">
              {/* Welcome Message */}
              <div className="text-center mb-12">
                <div className="text-2xl text-white mb-6 leading-relaxed max-w-3xl mx-auto">
                  <span className="text-gold font-semibold">
                    Executive AI at your command.
                  </span>
                  Patent-protected intelligence for strategic decision making.
                </div>
              </div>

              {/* Executive Input */}
              <div className="mb-8">
                <div className="flex gap-6">
                  <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Enter strategic query or command..."
                    className="flex-1 bg-black/30 text-white rounded-2xl px-8 py-6 border border-gold/20 focus:border-gold/50 focus:outline-none text-xl placeholder-gray-400 backdrop-blur-sm"
                  />
                  <button className="bg-gradient-to-r from-gold to-yellow-400 text-black px-12 py-6 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-gold/40 transition-all duration-300 transform hover:scale-105">
                    Execute
                  </button>
                </div>
              </div>

              {/* Executive Status Bar */}
              <div className="flex items-center justify-center gap-12 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">
                    Azure Enterprise Live
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400 font-semibold">
                    GPT-4o Turbo Active
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-gold font-semibold">
                    Patent 10,290,222
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Clean Authority Footer */}
          <div className="mt-20 text-center">
            <p className="text-gray-400 text-lg">
              We own this space.{" "}
              <span className="text-gold">Patent No. 10,290,222</span> ensures
              market leadership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
