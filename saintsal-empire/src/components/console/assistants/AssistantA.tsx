"use client";

import { useState } from "react";

export function AssistantAComponent() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to SaintVision AI. I'm your cognitive knowledge partner. How can I help you build your empire today?",
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
          "Processing your request through SaintVision AI cognitive systems...",
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
                  ? "bg-yellow-500 text-black"
                  : "bg-gray-800 text-white border border-yellow-500/20"
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
          placeholder="Ask SaintVision AI..."
          className="flex-1 bg-gray-800 border border-yellow-500/30 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-yellow-500"
        />
        <button
          onClick={handleSend}
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-yellow-400 transition-colors"
        >
          Send
        </button>
      </div>
    </div>
  );
}
