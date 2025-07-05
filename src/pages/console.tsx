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
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Authority Header */}
          <div className="mb-8 p-6 bg-gradient-to-r from-black/90 to-black/70 rounded-xl border border-gold/30">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4ed3f8ee7b6049b2831f9879427f69e5?format=webp&width=800"
                  alt="Dual AI Architecture"
                  className="w-16 h-16 rounded-lg shadow-xl"
                />
                <div>
                  <h1 className="text-3xl font-bold text-white mb-1">
                    🧠 Empowered by{" "}
                    <span className="text-gold">SaintVision AI™</span> + Dual
                    Cognitive Architecture
                  </h1>
                  <p className="text-gray-300">
                    Azure Cognitive Search + OpenAI GPT-4o Turbo Integration
                  </p>
                </div>
              </div>
              <div className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                GPT-4o Turbo + Azure Cognitive Search • LIVE
              </div>
            </div>
          </div>

          {/* Dual AI Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {Object.entries(companions).map(([key, companion]) => (
              <div
                key={key}
                className={`bg-gradient-to-br ${companion.color} rounded-xl p-6 border-2 ${
                  currentChat === key ? "border-gold" : "border-gray-600"
                } cursor-pointer transition-all duration-300 hover:border-gold/70`}
                onClick={() => setCurrentChat(key)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl">🤖</div>
                  <div className="bg-white/20 text-white text-xs px-2 py-1 rounded font-bold">
                    {companion.status}
                  </div>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">
                  {companion.name}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {companion.subtitle}
                </p>
                <div className="text-white/90 text-sm leading-relaxed">
                  "The ultimate AI game changer - dual cognitive architecture
                  delivering search, action, and full AI magic in real-time."
                </div>
                {key === "azure" && (
                  <div className="mt-4 bg-yellow-500/20 text-yellow-200 p-3 rounded border border-yellow-500/30">
                    <div className="font-bold text-sm">
                      Godish Mode Activated
                    </div>
                    <div className="text-xs">
                      Ultimate business intelligence companion
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Active Chat Interface */}
          <div className="bg-gray-900 rounded-xl border border-gray-700 overflow-hidden">
            <div className="p-4 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-black font-bold">
                  {companions[currentChat as keyof typeof companions].name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold">
                    {companions[currentChat as keyof typeof companions].name}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {
                      companions[currentChat as keyof typeof companions]
                        .subtitle
                    }
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 h-96 overflow-y-auto">
              <div className="bg-gray-800 rounded-lg p-4 mb-4 border-l-4 border-gold">
                <div className="text-gray-300 leading-relaxed">
                  {
                    companions[currentChat as keyof typeof companions]
                      .description
                  }
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask your AI Empire Advisor anything..."
                  className="flex-1 bg-gray-700 text-white rounded-lg px-4 py-3 border border-gray-600 focus:border-gold focus:outline-none"
                />
                <button className="bg-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors">
                  Send to AI ⚡
                </button>
              </div>
              <div className="text-center mt-3">
                <span className="text-gray-400 text-sm">
                  Powered by SaintSal™ Dual Architecture
                </span>
                <div className="flex items-center justify-center gap-4 mt-2 text-xs">
                  <span className="text-blue-400">🔹 GPT-4o Turbo</span>
                  <span className="text-green-400">
                    🔹 Azure Cognitive Search
                  </span>
                  <span className="text-purple-400">
                    🔹 Enterprise Security
                  </span>
                  <span className="text-yellow-400">
                    🔹 Real-time Processing
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Enterprise Integration Status */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-900 p-4 rounded-lg border border-green-500/30">
              <div className="text-green-400 font-bold mb-2">
                Enterprise-Grade AI Development Team
              </div>
              <div className="text-gray-300 text-sm">
                Azure OpenAI + Custom fine-tuning for SAINTSAL™ Empire
                operations
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-blue-500/30">
              <div className="text-blue-400 font-bold mb-2">
                Real-time Integration Layer
              </div>
              <div className="text-gray-300 text-sm">
                Live data sync with CRM, lead discovery, and pipeline management
              </div>
            </div>
            <div className="bg-gray-900 p-4 rounded-lg border border-purple-500/30">
              <div className="text-purple-400 font-bold mb-2">
                Patent-Protected Architecture
              </div>
              <div className="text-gray-300 text-sm">
                HACP™ Protocol ensures competitive moat and enterprise
                compliance
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
