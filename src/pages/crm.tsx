import React, { useState } from "react";

export default function Crm() {
  const [searchQuery, setSearchQuery] = useState("");
  const [leadData, setLeadData] = useState(null);
  const [isSearching, setIsSearching] = useState(false);
  const [isPushing, setIsPushing] = useState(false);

  const handleLeadSearch = async () => {
    if (!searchQuery.trim()) return;

    setIsSearching(true);
    // Simulate API call - replace with actual Clearbit/Seamless API
    setTimeout(() => {
      setLeadData({
        company: searchQuery,
        domain: `${searchQuery.toLowerCase().replace(/\s+/g, "")}.com`,
        industry: "Technology",
        employees: "50-200",
        revenue: "$10M-50M",
        location: "San Francisco, CA",
        description:
          "Innovative technology company focused on digital transformation",
        score: 92,
      });
      setIsSearching(false);
    }, 1500);
  };

  const handlePushToGHL = async () => {
    setIsPushing(true);
    // Simulate GHL API push
    setTimeout(() => {
      setIsPushing(false);
      alert("Contact successfully pushed to GoHighLevel!");
    }, 1000);
  };

  const integrations = [
    {
      name: "Azure Cognitive",
      status: "Connected",
      type: "AI Engine",
      calls: "2,847",
      color: "green",
    },
    {
      name: "OpenAI GPT-4o",
      status: "Active",
      type: "LLM",
      calls: "1,592",
      color: "green",
    },
    {
      name: "GoHighLevel",
      status: "Connected",
      type: "CRM",
      calls: "1,247",
      color: "green",
    },
    {
      name: "Clearbit",
      status: "Active",
      type: "Data",
      calls: "892",
      color: "green",
    },
  ];

  const recentLeads = [
    {
      company: "TechCorp Inc",
      score: 95,
      status: "Pushed to GHL",
      date: "2 hours ago",
    },
    {
      company: "Digital Solutions",
      score: 88,
      status: "AI Qualified",
      date: "4 hours ago",
    },
    {
      company: "Innovation Labs",
      score: 92,
      status: "Scheduled",
      date: "6 hours ago",
    },
    {
      company: "Future Systems",
      score: 85,
      status: "Contacted",
      date: "8 hours ago",
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Patent Authority Header */}
      <div className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 p-6 bg-gradient-to-r from-black/90 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                  alt="SaintVisionAI Authority"
                  className="w-16 h-16 rounded-lg shadow-xl"
                />
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    PartnerTech.ai{" "}
                    <span className="text-gold">Command Center</span>
                  </h1>
                  <p className="text-xl text-gold font-semibold">
                    Powered by Patent-Pending HACP™ Protocol
                  </p>
                </div>
              </div>

              {/* Patent Authority Badge */}
              <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 border-2 border-gold/50 rounded-xl p-4 text-center">
                <div className="text-gold font-bold text-lg">U.S. Patent</div>
                <div className="text-white font-black text-2xl">10,290,222</div>
                <div className="text-gold text-sm">HACP™ Protocol</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6">
        {/* Dual AI Companion Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-gray-900 to-black rounded-xl p-6 border border-gold/30 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">🧠</span>
                Dual AI Companion
              </h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 p-3 bg-blue-500/20 rounded-lg border border-blue-500/30">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">
                    Azure Cognitive Search
                  </span>
                  <span className="ml-auto text-blue-400 text-sm">
                    Enterprise Ready
                  </span>
                </div>
                <div className="flex items-center gap-3 p-3 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-white font-semibold">
                    OpenAI GPT-4o Turbo
                  </span>
                  <span className="ml-auto text-green-400 text-sm">Live</span>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                The ultimate AI game changer - dual cognitive architecture
                delivering search, action, and full AI magic in real-time.
              </p>
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-4">
                <div className="text-gold font-bold text-lg">
                  Godish Mode Activated
                </div>
                <div className="text-white text-sm">
                  Ultimate business intelligence companion
                </div>
              </div>
            </div>
          </div>

          {/* Lead Discovery Enhanced */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20 relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
                <span>🔍</span> Lead Discovery Engine
              </h3>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter company name or domain..."
                    className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-gold focus:outline-none"
                    onKeyPress={(e) => e.key === "Enter" && handleLeadSearch()}
                  />
                  <button
                    onClick={handleLeadSearch}
                    disabled={isSearching}
                    className="px-6 py-3 bg-gradient-to-r from-gold to-yellow-500 text-black font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isSearching ? "Searching..." : "Search"}
                  </button>
                </div>

                {leadData && (
                  <div className="mt-6 p-4 bg-black rounded-lg border border-green-500/30">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-white">
                          {leadData.company}
                        </h4>
                        <p className="text-gray-400">{leadData.domain}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-green-400">
                          {leadData.score}
                        </div>
                        <div className="text-xs text-gray-400">AI Score</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div>
                        <span className="text-gray-400">Industry:</span>
                        <span className="text-white ml-2">
                          {leadData.industry}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400">Employees:</span>
                        <span className="text-white ml-2">
                          {leadData.employees}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={handlePushToGHL}
                      disabled={isPushing}
                      className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {isPushing
                        ? "Pushing to GHL..."
                        : "🚀 Push to GoHighLevel"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Professional Team Showcase */}
        <div className="mb-8">
          <div
            className="relative rounded-xl overflow-hidden"
            style={{
              backgroundImage: `url("https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "300px",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex items-center">
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  Enterprise-Grade AI Development Team
                </h2>
                <p className="text-xl text-gold mb-6">
                  SaintVisionAI™ - Where Innovation Meets Authority
                </p>
                <div className="flex items-center gap-6">
                  <div className="bg-gold/20 border border-gold/50 rounded-lg p-3">
                    <div className="text-white font-bold">15+ Months</div>
                    <div className="text-gold text-sm">Development</div>
                  </div>
                  <div className="bg-gold/20 border border-gold/50 rounded-lg p-3">
                    <div className="text-white font-bold">Patent Pending</div>
                    <div className="text-gold text-sm">HACP™ Protocol</div>
                  </div>
                  <div className="bg-gold/20 border border-gold/50 rounded-lg p-3">
                    <div className="text-white font-bold">Wall Street</div>
                    <div className="text-gold text-sm">Ready</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Status & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>🔗</span> AI Integrations
            </h3>

            <div className="space-y-3">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <div>
                      <div className="text-white font-medium">
                        {integration.name}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {integration.type}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">
                      {integration.calls}
                    </div>
                    <div className="text-gray-400 text-xs">API calls today</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>⚡</span> Recent AI Activity
            </h3>

            <div className="space-y-3">
              {recentLeads.map((lead, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black rounded-lg"
                >
                  <div>
                    <div className="text-white font-medium">{lead.company}</div>
                    <div className="text-gray-400 text-sm">{lead.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-bold">{lead.score}</div>
                    <div
                      className={`text-xs px-2 py-1 rounded ${
                        lead.status === "Pushed to GHL"
                          ? "bg-green-500/20 text-green-400"
                          : lead.status === "AI Qualified"
                            ? "bg-blue-500/20 text-blue-400"
                            : "bg-yellow-500/20 text-yellow-400"
                      }`}
                    >
                      {lead.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Authority Section */}
        <div className="bg-gradient-to-r from-gray-900 to-black rounded-xl p-6 border-2 border-gold/30">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
                alt="Thank You SaintVisionAI"
                className="w-24 h-16 object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Built with Authority. Delivered with Purpose.
                </h3>
                <p className="text-gold">
                  Patent-pending HACP™ Protocol • Enterprise Infrastructure •
                  AI Excellence
                </p>
              </div>
            </div>

            <div className="text-right">
              <div className="text-gold text-sm font-semibold">
                U.S. Patent No.
              </div>
              <div className="text-white text-3xl font-black">10,290,222</div>
              <div className="text-gold text-sm">HACP™ Authority</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
