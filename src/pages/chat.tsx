import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to the SaintSal™ Empire AI Command Center. I'm your cognitive companion, powered by dual Azure OpenAI 4o Turbo architecture. How may I assist you in expanding your empire today?",
    },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input },
      {
        role: "assistant",
        content:
          "Your enterprise-grade AI response powered by our dual cognitive architecture. This is where breakthrough insights emerge from the SaintSal™ intelligence matrix.",
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col pt-20 pb-40 px-6">
      {/* Luxury Header */}
      <div className="max-w-4xl mx-auto w-full mb-12 text-center">
        <div
          className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-2xl"
          style={{
            background:
              "linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 165, 0, 0.05))",
            border: "2px solid rgba(255, 215, 0, 0.3)",
            boxShadow: "0 12px 30px rgba(255, 215, 0, 0.15)",
          }}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F29856441de964e35a366faa6c7cd2b37?format=webp&width=800"
            alt="SaintSal Logo"
            className="w-12 h-12 object-contain"
            style={{
              filter: "drop-shadow(0 4px 8px rgba(255, 215, 0, 0.3))",
            }}
          />
          <div>
            <h1
              className="text-4xl font-black mb-2"
              style={{
                background:
                  "linear-gradient(135deg, #FFD700, #FFA500, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 4px 8px rgba(255, 215, 0, 0.3)",
              }}
            >
              AI Empire Concierge
            </h1>
            <p
              className="text-lg font-semibold"
              style={{
                color: "#FDFFDC",
                opacity: 0.9,
              }}
            >
              Empowered by SaintVision AI™ • Dual Cognitive Architecture
            </p>
          </div>
        </div>

        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl mb-8"
          style={{
            background: "rgba(34, 197, 94, 0.1)",
            border: "1px solid rgba(34, 197, 94, 0.3)",
          }}
        >
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-green-400 font-semibold text-sm">
            GPT-4o Turbo + Azure Cognitive Search • LIVE
          </span>
        </div>
      </div>

      {/* Sacred Chat Container */}
      <div className="max-w-4xl mx-auto w-full flex-1">
        <div
          className="rounded-2xl p-8 mb-8"
          style={{
            background: "linear-gradient(145deg, #111111, #1a1a1a)",
            border: "3px solid rgba(255, 215, 0, 0.4)",
            boxShadow:
              "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.1)",
          }}
        >
          {/* Chat Messages */}
          <div className="space-y-8 mb-8 max-h-[60vh] overflow-y-auto custom-scrollbar">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-3xl px-8 py-6 rounded-2xl ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-black font-semibold shadow-xl"
                      : "bg-[#111111] border border-[#FFD700]/40 text-white shadow-xl"
                  }`}
                  style={{
                    fontFamily:
                      "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  }}
                >
                  {message.role === "assistant" && (
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
                        style={{
                          background:
                            "linear-gradient(135deg, #FFD700, #FFA500)",
                          color: "#000000",
                        }}
                      >
                        AI
                      </div>
                      <span className="text-[#FFD700] font-semibold text-sm">
                        SaintSal™ Cognitive Companion
                      </span>
                    </div>
                  )}
                  <p
                    className={`leading-relaxed ${
                      message.role === "user" ? "text-black" : "text-white"
                    }`}
                    style={{
                      fontSize: "16px",
                      lineHeight: "1.6",
                    }}
                  >
                    {message.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Luxury Input Area */}
          <div
            className="border-t pt-8"
            style={{
              borderImage:
                "linear-gradient(90deg, transparent, #FFD700, transparent) 1",
            }}
          >
            <div className="flex gap-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask your AI Empire Advisor anything..."
                className="flex-1 rounded-full px-8 py-5 text-white placeholder-gray-400 focus:outline-none transition-all duration-300"
                style={{
                  background: "rgba(0, 0, 0, 0.8)",
                  border: "2px solid rgba(255, 215, 0, 0.4)",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  boxShadow: "inset 0 2px 10px rgba(0, 0, 0, 0.3)",
                }}
                onFocus={(e) => {
                  e.target.style.border = "2px solid #FFD700";
                  e.target.style.boxShadow = "0 0 20px rgba(255, 215, 0, 0.3)";
                }}
                onBlur={(e) => {
                  e.target.style.border = "2px solid rgba(255, 215, 0, 0.4)";
                  e.target.style.boxShadow =
                    "inset 0 2px 10px rgba(0, 0, 0, 0.3)";
                }}
              />
              <button
                onClick={handleSend}
                className="px-10 py-5 rounded-full font-bold transition-all duration-300 hover:scale-105 shadow-xl"
                style={{
                  background: "linear-gradient(135deg, #FFD700, #FFA500)",
                  color: "#000000",
                  fontFamily:
                    "Inter, -apple-system, Roboto, Helvetica, sans-serif",
                  fontSize: "16px",
                  boxShadow: "0 8px 25px rgba(255, 215, 0, 0.4)",
                }}
              >
                Send to AI 🚀
              </button>
            </div>

            {/* Premium Footer */}
            <div className="text-center mt-6">
              <p
                className="text-sm font-semibold mb-2"
                style={{ color: "#A1A1AA" }}
              >
                Powered by SaintSal™ Dual Architecture
              </p>
              <div
                className="flex items-center justify-center gap-4 text-xs"
                style={{ color: "#6B7280" }}
              >
                <span>🧠 GPT-4o Turbo</span>
                <span>•</span>
                <span>☁️ Azure Cognitive Search</span>
                <span>•</span>
                <span>🔒 Enterprise Security</span>
                <span>•</span>
                <span>⚡ Real-time Processing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Empire Signature */}
        <div className="text-center">
          <p
            className="text-sm font-bold tracking-wide"
            style={{
              background: "linear-gradient(135deg, #FFD700, #FFA500)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            This is SaintSal™ — not ChatGPT. Enterprise prestige, luxury AI
            experience.
          </p>
        </div>
      </div>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #ffd700, #ffa500);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffd700;
        }
      `}</style>
    </div>
  );
}
