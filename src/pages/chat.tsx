import React, { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to Saint Vision AI. How can I help you build your empire today?",
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
          "Your AI response will appear here. This is where the magic happens.",
      },
    ];
    setMessages(newMessages);
    setInput("");
  };

  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <div className="empire-gradient p-6 border-b border-gold/20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-black text-white mb-2">
            AI <span className="text-gold">Conversation</span>
          </h1>
          <p className="text-gray-300">
            Powered by Saint Vision AI • Enterprise Intelligence
          </p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 max-w-4xl mx-auto w-full p-6">
        <div className="space-y-6 mb-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-3xl px-6 py-4 rounded-2xl ${
                  message.role === "user"
                    ? "bg-gold text-black font-medium"
                    : "empire-card border-gold/30"
                }`}
              >
                <p
                  className={
                    message.role === "user" ? "text-black" : "text-white"
                  }
                >
                  {message.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="border-t border-gold/20 pt-6">
          <div className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Ask Saint Vision AI anything..."
              className="flex-1 bg-charcoal/50 border border-gold/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
            <button onClick={handleSend} className="btn-empire px-8">
              Send
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3 text-center">
            Powered by GPT-4 • Enterprise-grade AI responses
          </p>
        </div>
      </div>
    </div>
  );
}
