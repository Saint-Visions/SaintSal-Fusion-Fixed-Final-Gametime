"use client";

import { useState } from "react";

export function AssistantBComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Empire AI reporting for duty. I'm your strategic execution partner. Ready to scale operations and dominate markets.",
    },
  ]);

  const handleSend = () => {
    if (!message.trim()) return;

    const newMessages = [
      ...messages,
      { role: "user", content: message },
      {
        role: "assistant",
        content:
          "Analyzing strategic implications and generating empire-level execution plan...",
      },
    ];
    setMessages(newMessages);
    setMessage("");
  };

  return (
    <div className="h-96 flex flex-col">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 mb-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-3 rounded-lg ${
                msg.role === "user"
                  ? "bg-purple-500 text-white"
                  : "bg-gray-800 text-white border border-purple-500/20"
              }`}
            >
              <p className="text-sm">{msg.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="flex gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Command Empire AI..."
          className="flex-1 bg-gray-800 border border-purple-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-purple-500"
        />
        <button
          onClick={handleSend}
          className="bg-purple-500 text-white px-4 py-2 rounded-lg font-semibold text-sm hover:bg-purple-400 transition-colors"
        >
          Execute
        </button>
      </div>
    </div>
  );
}
