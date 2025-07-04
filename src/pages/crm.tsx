import React from "react";

export default function Crm() {
  const partners = [
    { name: "Supabase", status: "Connected", type: "Database", color: "green" },
    { name: "OpenAI", status: "Active", type: "AI Engine", color: "green" },
    { name: "Stripe", status: "Configured", type: "Payments", color: "green" },
    { name: "Builder.io", status: "Integrated", type: "CMS", color: "green" },
  ];

  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-4">
            PARTNER<span className="text-gold">TECH.AI</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Strategic integrations that power your AI empire. Manage
            relationships, automate workflows, and scale operations through
            intelligent partnerships.
          </p>
        </div>

        {/* Integration Status */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="empire-card">
            <h3 className="text-2xl font-bold text-gold mb-6">
              Active Integrations
            </h3>
            <div className="space-y-4">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-green-900/10 rounded-lg border border-green-500/20"
                >
                  <div>
                    <h4 className="text-white font-semibold">{partner.name}</h4>
                    <p className="text-sm text-gray-400">{partner.type}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-green-400 font-bold text-sm">
                      ✅ {partner.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="empire-card">
            <h3 className="text-2xl font-bold text-gold mb-6">
              Webhook Automations
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-gold/10 rounded-lg border border-gold/20">
                <h4 className="text-white font-semibold mb-2">
                  User Registration
                </h4>
                <p className="text-sm text-gray-400">
                  Auto-trigger welcome sequences via Supabase
                </p>
              </div>
              <div className="p-4 bg-gold/10 rounded-lg border border-gold/20">
                <h4 className="text-white font-semibold mb-2">
                  Payment Processing
                </h4>
                <p className="text-sm text-gray-400">
                  Stripe webhooks �� Account upgrades
                </p>
              </div>
              <div className="p-4 bg-gold/10 rounded-lg border border-gold/20">
                <h4 className="text-white font-semibold mb-2">Content Sync</h4>
                <p className="text-sm text-gray-400">
                  Builder.io → Dynamic page updates
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CRM Tools */}
        <div className="empire-card">
          <h3 className="text-2xl font-bold text-gold mb-8">
            Enterprise CRM Tools
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-charcoal/30 rounded-xl">
              <div className="text-4xl mb-4">📊</div>
              <h4 className="text-lg font-bold text-white mb-2">
                Analytics Hub
              </h4>
              <p className="text-gray-400 text-sm">
                Real-time customer insights and engagement metrics
              </p>
            </div>
            <div className="text-center p-6 bg-charcoal/30 rounded-xl">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-lg font-bold text-white mb-2">
                AI Assistant
              </h4>
              <p className="text-gray-400 text-sm">
                Automated customer support and lead qualification
              </p>
            </div>
            <div className="text-center p-6 bg-charcoal/30 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-lg font-bold text-white mb-2">
                Workflow Engine
              </h4>
              <p className="text-gray-400 text-sm">
                Custom automation pipelines and integrations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
