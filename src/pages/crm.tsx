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
    {
      name: "Seamless.ai",
      status: "Ready",
      type: "Leads",
      calls: "534",
      color: "yellow",
    },
    {
      name: "Supabase",
      status: "Connected",
      type: "Database",
      calls: "2,105",
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
      status: "Qualified",
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

  const pipelineData = [
    { stage: "Discovery", count: 23, value: "$580K" },
    { stage: "Qualified", count: 18, value: "$450K" },
    { stage: "Proposal", count: 12, value: "$320K" },
    { stage: "Closed", count: 8, value: "$240K" },
  ];

  return (
    <div className="min-h-screen bg-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-gold to-yellow-500 rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-xl">PT</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">
                PartnerTech.ai <span className="text-gold">Command Center</span>
              </h1>
              <p className="text-gray-400">
                Lead discovery, CRM automation, and partner management
              </p>
            </div>
          </div>
        </div>

        {/* Lead Discovery Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>🔍</span> Lead Discovery
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
                      <div className="text-xs text-gray-400">Lead Score</div>
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
                    <div>
                      <span className="text-gray-400">Revenue:</span>
                      <span className="text-white ml-2">
                        {leadData.revenue}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400">Location:</span>
                      <span className="text-white ml-2">
                        {leadData.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">
                    {leadData.description}
                  </p>

                  <button
                    onClick={handlePushToGHL}
                    disabled={isPushing}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {isPushing ? "Pushing to GHL..." : "🚀 Push to GoHighLevel"}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Pipeline Overview */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>📊</span> Pipeline Overview
            </h3>

            <div className="space-y-4">
              {pipelineData.map((stage, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black rounded-lg"
                >
                  <div>
                    <div className="text-white font-medium">{stage.stage}</div>
                    <div className="text-gray-400 text-sm">
                      {stage.count} deals
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-gold font-bold">{stage.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-gold/10 to-yellow-500/10 rounded-lg border border-gold/30">
              <div className="text-center">
                <div className="text-2xl font-bold text-gold">$1.59M</div>
                <div className="text-gray-400 text-sm">
                  Total Pipeline Value
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Integration Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>🔗</span> Active Integrations
            </h3>

            <div className="space-y-3">
              {integrations.map((integration, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-black rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        integration.color === "green"
                          ? "bg-green-500"
                          : "bg-yellow-500"
                      }`}
                    ></div>
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
                    <div className="text-gray-400 text-xs">API calls</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
              <span>⚡</span> Recent Leads
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
                          : lead.status === "Scheduled"
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

        {/* Quick Actions */}
        <div className="bg-gray-900 rounded-xl p-6 border border-gold/20">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <span>🚀</span> Quick Actions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button className="p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-medium hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">📋</div>
              Bulk Import
            </button>
            <button className="p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-lg text-white font-medium hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">🤖</div>
              AI Scoring
            </button>
            <button className="p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-lg text-white font-medium hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">📞</div>
              Schedule Calls
            </button>
            <button className="p-4 bg-gradient-to-r from-gold to-yellow-500 rounded-lg text-black font-medium hover:shadow-lg transition-all">
              <div className="text-2xl mb-2">📈</div>
              Generate Report
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
