import React from "react";

export default function AITools() {
  const aiTools = [
    {
      name: "Lead Discovery AI",
      description: "Automatically discover and qualify high-value leads",
      icon: "🎯",
      status: "Active",
      color: "bg-green-500",
    },
    {
      name: "Deal Analysis AI",
      description: "AI-powered analysis of deal probability and value",
      icon: "💰",
      status: "Active",
      color: "bg-green-500",
    },
    {
      name: "Content Generator",
      description: "Generate proposals, emails, and marketing content",
      icon: "✍️",
      status: "Active",
      color: "bg-green-500",
    },
    {
      name: "Sentiment Analysis",
      description: "Analyze client communication sentiment and mood",
      icon: "😊",
      status: "Beta",
      color: "bg-orange-500",
    },
    {
      name: "Price Optimizer",
      description: "AI-driven pricing recommendations and strategies",
      icon: "📊",
      status: "Coming Soon",
      color: "bg-gray-500",
    },
    {
      name: "Risk Assessment",
      description: "Evaluate deal risks and mitigation strategies",
      icon: "⚠️",
      status: "Coming Soon",
      color: "bg-gray-500",
    },
  ];

  const automationRules = [
    { name: "Auto-respond to leads", status: "On", triggers: 47 },
    { name: "Deal stage progression", status: "On", triggers: 23 },
    { name: "Follow-up reminders", status: "On", triggers: 156 },
    { name: "Priority scoring", status: "Off", triggers: 0 },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">🛠️</span>
            <div>
              <h1 className="text-4xl font-black text-white">
                AI <span className="text-gold">Tools</span>
              </h1>
              <p className="text-gray-400 mt-2">
                Advanced AI utilities and automation
              </p>
            </div>
          </div>
          <div className="bg-gray-900/30 p-4 rounded-lg border border-gold/20">
            <p className="text-sm text-gold">
              🔒 Protected by HACP™ + OPATENT™ · U.S. Patent No. 10,290,222
            </p>
          </div>
        </div>

        {/* AI Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {aiTools.map((tool, index) => (
            <div
              key={index}
              className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm hover:border-gold/40 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{tool.icon}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs text-white ${tool.color}`}
                >
                  {tool.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-gold mb-2">{tool.name}</h3>
              <p className="text-gray-300 text-sm mb-4">{tool.description}</p>

              <button
                className={`w-full py-2 px-4 rounded-lg font-semibold transition-colors ${
                  tool.status === "Active"
                    ? "bg-gold text-black hover:bg-yellow-400"
                    : "bg-gray-700 text-gray-400 cursor-not-allowed"
                }`}
                disabled={tool.status !== "Active"}
              >
                {tool.status === "Active" ? "Launch Tool" : tool.status}
              </button>
            </div>
          ))}
        </div>

        {/* Automation Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gold mb-4">
              🤖 Automation Rules
            </h2>
            <div className="space-y-4">
              {automationRules.map((rule, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg"
                >
                  <div>
                    <p className="text-white font-medium">{rule.name}</p>
                    <p className="text-gray-400 text-sm">
                      {rule.triggers} triggers today
                    </p>
                  </div>
                  <button
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      rule.status === "On"
                        ? "bg-green-500 text-white"
                        : "bg-gray-600 text-gray-300"
                    }`}
                  >
                    {rule.status}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gold mb-4">
              📈 AI Performance
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Lead Discovery Rate</span>
                  <span className="text-gold font-bold">87%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gold h-2 rounded-full"
                    style={{ width: "87%" }}
                  ></div>
                </div>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Deal Accuracy</span>
                  <span className="text-gold font-bold">94%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gold h-2 rounded-full"
                    style={{ width: "94%" }}
                  ></div>
                </div>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white">Response Time</span>
                  <span className="text-gold font-bold">0.8s</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gold h-2 rounded-full"
                    style={{ width: "96%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
          <h2 className="text-xl font-bold text-gold mb-4">⚡ Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Run Lead Scan", icon: "🔍" },
              { name: "Generate Report", icon: "📄" },
              { name: "Sync CRM Data", icon: "🔄" },
              { name: "Update Rules", icon: "⚙️" },
            ].map((action, index) => (
              <button
                key={index}
                className="p-4 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors text-center"
              >
                <span className="text-2xl block mb-2">{action.icon}</span>
                <span className="text-white text-sm">{action.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
