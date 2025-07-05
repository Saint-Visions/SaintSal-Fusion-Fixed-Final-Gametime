import React, { useState } from "react";

export default function Companion() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hello! I'm your SaintSal™ AI Companion. I'm here to help you manage tasks, follow-ups, and sync with your CRM. What can I assist you with today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [
      ...prev,
      { role: "user", content: inputValue },
      {
        role: "assistant",
        content:
          "I'm processing your request. This feature will be fully integrated with our HACP™ protocol soon.",
      },
    ]);
    setInputValue("");
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🤖</span>
            <div>
              <h1 className="text-4xl font-black text-white">
                My <span className="text-gold">Companion</span>
              </h1>
              <p className="text-gray-400 mt-2">
                Your personalized SaintSal™ AI assistant
              </p>
            </div>
          </div>
          <div className="bg-gray-900/30 p-4 rounded-lg border border-gold/20">
            <p className="text-sm text-gold">
              🔒 Protected by HACP™ + OPATENT™ · U.S. Patent No. 10,290,222
            </p>
          </div>
        </div>

        {/* AI Interface */}
        <div className="bg-gray-900/40 rounded-xl border border-gold/20 backdrop-blur-sm">
          {/* Chat Messages */}
          <div className="p-6 h-96 overflow-y-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-md p-4 rounded-lg ${
                    message.role === "user"
                      ? "bg-gold text-black"
                      : "bg-gray-800 text-white border border-gray-700"
                  }`}
                >
                  <p className="text-sm">{message.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-700 p-4">
            <div className="flex gap-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask your AI companion anything..."
                className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-600 focus:border-gold focus:outline-none"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <button
                onClick={handleSendMessage}
                className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-900/30 p-6 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-3">
              📋 Task Management
            </h3>
            <p className="text-gray-300 mb-4">
              Manage your daily tasks and follow-ups
            </p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              View Tasks
            </button>
          </div>

          <div className="bg-gray-900/30 p-6 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-3">🔄 CRM Sync</h3>
            <p className="text-gray-300 mb-4">Sync with PartnerTech.ai CRM</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              Sync Now
            </button>
          </div>

          <div className="bg-gray-900/30 p-6 rounded-lg border border-gold/20">
            <h3 className="text-xl font-bold text-gold mb-3">📊 Analytics</h3>
            <p className="text-gray-300 mb-4">
              View your productivity insights
            </p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
              View Stats
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
