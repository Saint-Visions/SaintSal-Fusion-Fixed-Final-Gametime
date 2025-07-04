import React from "react";
import { Link } from "react-router-dom";

export default function SaintSalHome() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Circuit Pattern Background */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <defs>
            <pattern
              id="circuit"
              x="0"
              y="0"
              width="120"
              height="120"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M60 10 L60 30 L80 30 L80 50 L100 50"
                stroke="#FFD700"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M20 40 L40 40 L40 60 L60 60 L60 80"
                stroke="#FFD700"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M80 20 L100 20 L100 40 L120 40"
                stroke="#FFD700"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="60" cy="30" r="3" fill="#FFD700" />
              <circle cx="80" cy="50" r="3" fill="#FFD700" />
              <circle cx="40" cy="60" r="3" fill="#FFD700" />
              <circle cx="100" cy="40" r="3" fill="#FFD700" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section with SaintVisionAI learning session - handsome Italian guy and team */}
        <section
          className="min-h-screen flex items-center justify-center px-4 py-20 relative"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F59428e4360c94e2b8301dc3886f4cf56?format=webp&width=800')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark overlay to ensure text readability */}
          <div className="absolute inset-0 bg-black/60"></div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Your actual SaintVisionAI logo */}
            <div className="mb-12 relative">
              <div className="w-80 h-80 mx-auto relative flex items-center justify-center">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fac436fc84fcc40789c93464d58a120d4?format=webp&width=800"
                  alt="SaintVisionAI™ Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Pulsing glow effect */}
              <div className="absolute inset-0 w-80 h-80 mx-auto rounded-full bg-gradient-radial from-gold/20 via-transparent to-transparent animate-pulse"></div>
            </div>

            {/* Main Brand Text */}
            <div className="mb-12">
              <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-gold via-yellow-300 to-gold bg-clip-text text-transparent">
                SaintVisionAI™
              </h1>
              <div className="text-2xl md:text-3xl text-gold font-light tracking-wide mb-6">
                AI RESEARCH & DEVELOPMENT
              </div>
              <div className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                AI doesn't just answer. It adapts. It empowers. It becomes
                yours.
              </div>
            </div>

            {/* Quote Bubble */}
            <div className="mb-16 relative">
              <div className="bg-charcoal/80 backdrop-blur-lg border border-gold/30 rounded-2xl p-8 max-w-2xl mx-auto relative">
                <div className="text-xl text-gold font-semibold mb-2">
                  "SaintVisionAI™ doesn't just answer."
                </div>
                <div className="text-xl text-gold font-semibold mb-2">
                  It adapts. It empowers. It becomes yours...
                </div>
                <div className="text-3xl font-black text-yellow-400">
                  GOTTA GUY™!
                </div>

                {/* Speech bubble tail */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gold/30"></div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
              <Link
                to="/chat"
                className="bg-gold text-black px-12 py-5 rounded-xl text-xl font-bold hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-2xl flex items-center gap-3"
              >
                <span>⚡</span>
                Start Cooking
              </Link>
              <Link
                to="/pricing"
                className="border-2 border-gold text-gold px-12 py-5 rounded-xl text-xl font-bold hover:bg-gold hover:text-black transition-all duration-300"
              >
                View Plans
              </Link>
            </div>

            {/* Quick Access */}
            <div className="text-gray-400 mb-4">Quick Access:</div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/chat"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <span>💬</span> AI Chat
              </Link>
              <Link
                to="/pricing"
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
              >
                <span>💰</span> Pricing
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <span>📊</span> Help
              </Link>
            </div>
          </div>
        </section>

        {/* What's Inside These Walls Section */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-charcoal/20 to-transparent">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-gold mb-6 flex items-center justify-center gap-4">
                <span>🔧</span> What's Inside These Walls
              </h2>
              <div className="text-xl text-gray-300 max-w-3xl mx-auto">
                Inside these walls, AI doesn't just answer. It adapts. It
                empowers. It becomes yours.
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Lead Discovery */}
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-xl p-6 hover:border-blue-400 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="text-xl font-bold text-blue-400 mb-2 text-center">
                  Lead Discovery
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  AI-powered lookup
                </p>
              </div>

              {/* Referral Network */}
              <div className="bg-green-900/30 border border-green-500/50 rounded-xl p-6 hover:border-green-400 transition-colors">
                <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">🌐</span>
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2 text-center">
                  Referral Network
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  Partner tracking
                </p>
              </div>

              {/* AI Deal Analysis */}
              <div className="bg-purple-900/30 border border-purple-500/50 rounded-xl p-6 hover:border-purple-400 transition-colors">
                <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-purple-400 mb-2 text-center">
                  AI Deal Analysis
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  GPT-4 insights
                </p>
              </div>

              {/* Mobile Export */}
              <div className="bg-red-900/30 border border-red-500/50 rounded-xl p-6 hover:border-red-400 transition-colors">
                <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <span className="text-2xl">📱</span>
                </div>
                <h3 className="text-xl font-bold text-red-400 mb-2 text-center">
                  Mobile Export
                </h3>
                <p className="text-gray-300 text-sm text-center">
                  iOS/Android apps
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Elite AI Sanctuary */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-black text-gold mb-6 flex items-center justify-center gap-4">
              <span>✨</span> Elite AI Sanctuary • Ready for Saints
            </h2>
            <div className="text-lg text-gray-300 mb-8">
              Azure Cognitive Services + OpenAI GPT-4o + Premium Infrastructure
            </div>
            <div className="bg-charcoal/60 backdrop-blur-lg border border-gold/30 rounded-2xl p-8">
              <div className="text-2xl font-bold text-white mb-4">
                WELCOME TO SAINTVISIONAI™
              </div>
              <div className="text-lg text-gold mb-4">
                YOUR STRATEGIC PARTNER FOR A SMARTER, BOLDER FUTURE
              </div>
              <div className="text-gray-300 leading-relaxed">
                INSIDE THESE WALLS, AI DOESN'T JUST ANSWER.
                <br />
                IT ADAPTS. IT EMPOWERS. IT BECOMES YOURS.
              </div>
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="flex items-center gap-2 text-gold">
                  <span>🧠</span> REAL KNOWLEDGE
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <span>📈</span> REAL GROWTH
                </div>
                <div className="flex items-center gap-2 text-gold">
                  <span>⚡</span> REAL POWER
                </div>
              </div>
              <div className="text-xl font-bold text-yellow-400 mt-4">
                READY TO MOVE SMARTER TODAY THAN YOU DID YESTERDAY?
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-16 px-4 border-t border-gold/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="md:col-span-2">
                <div className="text-3xl font-black text-gold mb-4">
                  SaintSal™
                </div>
                <div className="text-lg text-gray-300 mb-4">
                  Cookin' Knowledge.
                </div>
                <div className="text-gray-400">
                  The premier AI platform for strategic business intelligence
                  and automation.
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4">Platform</h4>
                <div className="space-y-2 text-gray-400">
                  <div>AI Chat</div>
                  <div>Dashboard</div>
                  <div>Analytics</div>
                  <div>Integrations</div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-white mb-4">Company</h4>
                <div className="space-y-2 text-gray-400">
                  <div>About</div>
                  <div>Pricing</div>
                  <div>Support</div>
                  <div>Legal</div>
                </div>
              </div>
            </div>

            <div className="border-t border-gold/20 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 mb-4 md:mb-0">
                © 2025 SaintVisionAI | Saint Vision Group LLC. All Rights
                Reserved.
              </div>
              <div className="flex items-center gap-6 text-gray-400">
                <div>U.S. Patent 10,200,522</div>
                <div>Intent Engine™ Technology</div>
                <div>Enterprise-Grade Infrastructure</div>
                <div>AI Rights Reserved</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
