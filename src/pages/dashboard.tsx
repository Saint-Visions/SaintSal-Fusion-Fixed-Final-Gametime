import React from "react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-black text-white mb-4">
            Command <span className="text-gold">Center</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your AI empire at a glance. Monitor, manage, and scale your
            operations.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Link to="/chat" className="empire-card hover:gold-glow">
            <div className="text-3xl mb-4">💬</div>
            <h3 className="text-lg font-bold text-gold mb-2">AI Chat</h3>
            <p className="text-gray-400 text-sm">
              Launch intelligent conversations
            </p>
          </Link>

          <Link to="/builder" className="empire-card hover:gold-glow">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-gold mb-2">Builder</h3>
            <p className="text-gray-400 text-sm">Create dynamic layouts</p>
          </Link>

          <Link to="/crm" className="empire-card hover:gold-glow">
            <div className="text-3xl mb-4">👥</div>
            <h3 className="text-lg font-bold text-gold mb-2">CRM Tools</h3>
            <p className="text-gray-400 text-sm">Manage relationships</p>
          </Link>

          <Link to="/upgrade" className="empire-card hover:gold-glow">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-gold mb-2">Upgrade</h3>
            <p className="text-gray-400 text-sm">Unlock more power</p>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="empire-card">
              <h3 className="text-2xl font-bold text-white mb-6">
                System Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <span className="text-white">AI Chat System</span>
                  <span className="text-green-400 font-bold">✅ ONLINE</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <span className="text-white">Builder Platform</span>
                  <span className="text-green-400 font-bold">✅ ONLINE</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                  <span className="text-white">CRM Integration</span>
                  <span className="text-green-400 font-bold">✅ ONLINE</span>
                </div>
              </div>
            </div>
          </div>

          <div className="empire-card">
            <h3 className="text-2xl font-bold text-white mb-6">
              Quick Metrics
            </h3>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-black text-gold mb-2">∞</div>
                <div className="text-sm text-gray-400">AI Requests</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gold mb-2">24/7</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black text-gold mb-2">🚀</div>
                <div className="text-sm text-gray-400">Performance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
