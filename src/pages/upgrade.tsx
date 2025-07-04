import React from "react";
import { Link } from "react-router-dom";

export default function Upgrade() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <div className="empire-gradient pt-20 pb-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-black text-white mb-6">
            Unlock Your <span className="text-gold">AI Empire</span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Transform your business with enterprise-grade AI capabilities. Every
            upgrade is an investment in your competitive advantage.
          </p>
        </div>
      </div>

      {/* Upgrade Options */}
      <div className="py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pro Upgrade */}
            <div className="empire-card gold-glow">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-gold mb-4">
                  PRO EMPIRE
                </h3>
                <div className="text-5xl font-black text-white mb-2">$27</div>
                <div className="text-gray-400">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">⚡</span>
                  Unlimited AI Chat Sessions
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">💾</span>
                  Conversation History & Export
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">🤖</span>
                  AI Companion Mode
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">📊</span>
                  Advanced Analytics
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">🛡️</span>
                  Priority Support
                </li>
              </ul>

              <button className="btn-empire w-full text-center">
                Upgrade to Pro
              </button>
            </div>

            {/* Enterprise Upgrade */}
            <div className="empire-card border-2 border-gold relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-gold text-black px-3 py-1 rounded-full text-xs font-bold">
                MOST POPULAR
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-black text-gold mb-4">
                  ENTERPRISE
                </h3>
                <div className="text-5xl font-black text-white mb-2">$497</div>
                <div className="text-gray-400">per month</div>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">🚀</span>
                  Everything in Pro +
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">👥</span>
                  Advanced CRM Integration
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">⚙️</span>
                  Custom Webhook Automations
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">🏢</span>
                  White-label Solutions
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">📞</span>
                  Dedicated Account Manager
                </li>
                <li className="flex items-center gap-3 text-white">
                  <span className="text-gold">🔧</span>
                  Custom AI Model Training
                </li>
              </ul>

              <button className="btn-empire w-full">Go Enterprise</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="py-16 px-8 bg-charcoal/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Why Upgrade?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gold mb-2">
                Unlimited Power
              </h3>
              <p className="text-gray-400">
                Remove all usage limits and scale infinitely
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-gold mb-2">
                Custom Solutions
              </h3>
              <p className="text-gray-400">
                Tailored AI models for your specific needs
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gold mb-2">
                Enterprise Support
              </h3>
              <p className="text-gray-400">
                Dedicated team to ensure your success
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to="/pricing"
              className="border-2 border-gold text-gold px-8 py-4 rounded-xl font-bold hover:bg-gold hover:text-black transition-all duration-300"
            >
              Compare All Plans
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
