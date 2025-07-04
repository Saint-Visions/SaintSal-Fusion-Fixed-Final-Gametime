"use client";

import { useState } from "react";
import { AssistantAComponent } from "./assistants/AssistantA";
import { AssistantBComponent } from "./assistants/AssistantB";

export function DualChatInterfaceComponent() {
  const [activeAssistant, setActiveAssistant] = useState<"a" | "b">("a");

  return (
    <div className="empire-card p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-black text-white mb-2">
            Dual AI <span className="empire-text-gradient">Command Center</span>
          </h2>
          <p className="text-gray-400">Elite AI Sanctuary • Ready for Saints</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-sm font-semibold">
              Azure Cognitive Services
            </span>
          </div>
          <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-lg">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span className="text-blue-400 text-sm font-semibold">
              OpenAI GPT-4o
            </span>
          </div>
        </div>
      </div>

      {/* Assistant Selector */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveAssistant("a")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeAssistant === "a"
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          🏛️ SaintVision AI
        </button>
        <button
          onClick={() => setActiveAssistant("b")}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
            activeAssistant === "b"
              ? "bg-yellow-500 text-black"
              : "bg-gray-800 text-gray-300 hover:bg-gray-700"
          }`}
        >
          ⚡ Empire AI
        </button>
      </div>

      {/* Dual Chat Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* SaintVision AI */}
        <div className="bg-gray-900/50 rounded-2xl border border-yellow-500/20 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-yellow-500 rounded-xl flex items-center justify-center">
              <span className="text-black font-bold">S</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">SaintVision AI</h3>
              <p className="text-yellow-500 text-sm">Cognitive Knowledge</p>
            </div>
          </div>
          <AssistantAComponent />
        </div>

        {/* Empire AI */}
        <div className="bg-gray-900/50 rounded-2xl border border-purple-500/20 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-purple-500 rounded-xl flex items-center justify-center">
              <span className="text-white font-bold">E</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Empire AI</h3>
              <p className="text-purple-400 text-sm">Strategic Execution</p>
            </div>
          </div>
          <AssistantBComponent />
        </div>
      </div>

      {/* Quick Access */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-900/30 p-4 rounded-xl border border-blue-500/20 text-center">
          <div className="text-2xl mb-2">🔍</div>
          <div className="text-blue-400 font-semibold text-sm">
            Lead Discovery
          </div>
          <div className="text-gray-400 text-xs">AI-powered lookup</div>
        </div>
        <div className="bg-green-900/30 p-4 rounded-xl border border-green-500/20 text-center">
          <div className="text-2xl mb-2">🔗</div>
          <div className="text-green-400 font-semibold text-sm">
            Referral Network
          </div>
          <div className="text-gray-400 text-xs">Partner tracking</div>
        </div>
        <div className="bg-purple-900/30 p-4 rounded-xl border border-purple-500/20 text-center">
          <div className="text-2xl mb-2">📊</div>
          <div className="text-purple-400 font-semibold text-sm">
            AI Deal Analysis
          </div>
          <div className="text-gray-400 text-xs">GPT-4 insights</div>
        </div>
        <div className="bg-pink-900/30 p-4 rounded-xl border border-pink-500/20 text-center">
          <div className="text-2xl mb-2">📱</div>
          <div className="text-pink-400 font-semibold text-sm">
            Mobile Export
          </div>
          <div className="text-gray-400 text-xs">iOS/Android apps</div>
        </div>
      </div>
    </div>
  );
}
