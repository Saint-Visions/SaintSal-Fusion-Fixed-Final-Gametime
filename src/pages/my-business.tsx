import React from "react";

export default function MyBusiness() {
  const businessMetrics = [
    {
      label: "Total Revenue",
      value: "$125,750",
      change: "+12.5%",
      positive: true,
    },
    { label: "Active Leads", value: "347", change: "+8.2%", positive: true },
    {
      label: "Conversion Rate",
      value: "24.8%",
      change: "-2.1%",
      positive: false,
    },
    {
      label: "Client Satisfaction",
      value: "96.2%",
      change: "+1.5%",
      positive: true,
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">💼</span>
            <div>
              <h1 className="text-4xl font-black text-white">
                My <span className="text-gold">Business</span>
              </h1>
              <p className="text-gray-400 mt-2">
                Business analytics and management tools
              </p>
            </div>
          </div>
          <div className="bg-gray-900/30 p-4 rounded-lg border border-gold/20">
            <p className="text-sm text-gold">
              🔒 Protected by HACP™ + OPATENT™ · U.S. Patent No. 10,290,222
            </p>
          </div>
        </div>

        {/* Business Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {businessMetrics.map((metric, index) => (
            <div
              key={index}
              className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm"
            >
              <h3 className="text-sm text-gray-400 mb-2">{metric.label}</h3>
              <div className="flex items-end justify-between">
                <span className="text-2xl font-bold text-white">
                  {metric.value}
                </span>
                <span
                  className={`text-sm font-semibold ${metric.positive ? "text-green-400" : "text-red-400"}`}
                >
                  {metric.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Revenue Chart */}
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gold mb-4">
              📈 Revenue Trends
            </h2>
            <div className="h-64 flex items-center justify-center border-2 border-dashed border-gray-600 rounded-lg">
              <div className="text-center">
                <p className="text-gray-400 mb-2">
                  Chart visualization coming soon
                </p>
                <p className="text-sm text-gold">Powered by HACP™ Analytics</p>
              </div>
            </div>
          </div>

          {/* Lead Pipeline */}
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gold mb-4">
              🎯 Lead Pipeline
            </h2>
            <div className="space-y-4">
              {[
                "New Leads",
                "Qualified",
                "Proposal",
                "Negotiation",
                "Closed Won",
              ].map((stage, index) => (
                <div
                  key={stage}
                  className="flex justify-between items-center p-3 bg-gray-800/50 rounded-lg"
                >
                  <span className="text-white">{stage}</span>
                  <span className="text-gold font-bold">
                    {Math.floor(Math.random() * 50) + 10}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gold mb-4">
              🔔 Recent Activity
            </h2>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <span className="text-green-400">✅</span>
                <div>
                  <p className="text-white text-sm">New client onboarded</p>
                  <p className="text-gray-400 text-xs">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <span className="text-blue-400">📞</span>
                <div>
                  <p className="text-white text-sm">Follow-up call scheduled</p>
                  <p className="text-gray-400 text-xs">4 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-gray-800/30 rounded-lg">
                <span className="text-gold">💰</span>
                <div>
                  <p className="text-white text-sm">Invoice paid: $15,750</p>
                  <p className="text-gray-400 text-xs">1 day ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Tools */}
          <div className="bg-gray-900/40 p-6 rounded-xl border border-gold/20 backdrop-blur-sm">
            <h2 className="text-xl font-bold text-gold mb-4">
              🛠️ Business Tools
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Invoice Generator", icon: "📄" },
                { name: "Proposal Builder", icon: "📋" },
                { name: "Contact Manager", icon: "👥" },
                { name: "Task Tracker", icon: "✅" },
                { name: "Analytics", icon: "📊" },
                { name: "Reports", icon: "📈" },
              ].map((tool, index) => (
                <button
                  key={index}
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-colors text-left"
                >
                  <div className="flex items-center gap-2">
                    <span>{tool.icon}</span>
                    <span className="text-white text-sm">{tool.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
