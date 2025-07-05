import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Showcase() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const slides = [
    {
      id: "intro",
      title: "This Is Not Just AI",
      subtitle: "Where Execution > Conversation",
      content: (
        <div className="relative">
          {/* Professional Background Layer */}
          <div
            className="absolute inset-0 opacity-30 rounded-2xl"
            style={{
              backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fac42e9eb2dfa4803b38dcbde07d04084?format=webp&width=800")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 text-center p-8">
            {/* Authority Header */}
            <div className="mb-12">
              <div className="flex items-center justify-center gap-6 mb-8">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fee347a3f9d0e4f03870013d52decc792?format=webp&width=800"
                  alt="SaintSal Empire Authority"
                  className="w-24 h-24 rounded-2xl shadow-2xl border-4 border-gold/70"
                />
                <div className="text-left">
                  <div className="text-6xl font-black bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent mb-2">
                    SAINTSAL™
                  </div>
                  <div className="text-xl text-white font-semibold">
                    Patent-Protected AI Empire
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Competitors Side */}
              <div className="bg-gradient-to-br from-red-900/30 to-gray-900/50 border-2 border-red-500/50 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-red-400 mb-6">
                  ❌ Other "AI" Platforms
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">
                      "Enhances data quality" 🙄
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">
                      "Provides perspectives" 📝
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">
                      "Reduces troubleshooting" 🔧
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-gray-300">Just talks, no action</span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-red-400 font-bold text-lg">
                    THEORY ONLY
                  </div>
                </div>
              </div>

              {/* SAINTSAL Side */}
              <div className="bg-gradient-to-br from-green-900/30 to-gold/20 border-2 border-gold/70 rounded-2xl p-8">
                <h3 className="text-3xl font-bold text-gold mb-6">
                  ✅ SAINTSAL™ Empire
                </h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white font-semibold">
                      EXECUTES real pipeline actions
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white font-semibold">
                      AI Companion handles tasks
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-white font-semibold">
                      Voice-to-action automation
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gold rounded-full"></div>
                    <span className="text-white font-semibold">
                      Patent-protected HACP™
                    </span>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <div className="text-green-400 font-bold text-lg">
                    GETS SHIT DONE 🔥
                  </div>
                </div>
              </div>
            </div>

            {/* Power Statement */}
            <div className="bg-gradient-to-r from-gold/20 via-yellow-500/20 to-gold/20 border-2 border-gold/50 rounded-2xl p-8">
              <h4 className="text-4xl font-black text-white mb-4">
                The <span className="text-gold">ONLY</span> Platform That
              </h4>
              <h5 className="text-3xl font-bold text-green-400">
                Executes Actions, Not Just Conversations
              </h5>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "patent",
      title: "Built Different",
      subtitle: "Patent-Pending HACP™ Protocol • Azure + OpenAI Architecture",
      content: (
        <div className="relative">
          {/* Wall Street Background */}
          <div
            className="absolute inset-0 opacity-25 rounded-2xl"
            style={{
              backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F912ce16de21d42798b26d423e361e376?format=webp&width=800")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <div className="relative z-10 p-8">
            {/* Patent Authority Center */}
            <div className="text-center mb-12">
              <div className="inline-block bg-gradient-to-r from-gold/30 to-yellow-500/30 border-4 border-gold/70 rounded-3xl p-8 mb-8 shadow-2xl">
                <div className="text-gold font-bold text-2xl mb-2">
                  🏛️ U.S. PATENT
                </div>
                <div className="text-white font-black text-6xl mb-2">
                  10,290,222
                </div>
                <div className="text-gold text-xl font-semibold">
                  HACP™ PROTOCOL
                </div>
                <div className="text-gray-300 text-sm mt-3">
                  COMPETITIVE MOAT SECURED
                </div>
              </div>
            </div>

            {/* Architecture Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="bg-gradient-to-br from-blue-900/40 to-blue-600/20 border-2 border-blue-500/50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h4 className="text-blue-400 font-bold text-xl mb-3">
                  AZURE ENTERPRISE
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Enterprise-grade infrastructure with cognitive search
                  capabilities and unlimited scale
                </p>
                <div className="mt-4 bg-blue-500/20 text-blue-300 px-3 py-1 rounded text-xs font-bold">
                  ENTERPRISE READY
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-900/40 to-green-600/20 border-2 border-green-500/50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🧠</div>
                <h4 className="text-green-400 font-bold text-xl mb-3">
                  OPENAI GPT-4O
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Latest cognitive AI with custom training on SAINTSAL™
                  methodologies and business execution
                </p>
                <div className="mt-4 bg-green-500/20 text-green-300 px-3 py-1 rounded text-xs font-bold">
                  TURBO POWERED
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-900/40 to-purple-600/20 border-2 border-purple-500/50 rounded-2xl p-6 text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-purple-400 font-bold text-xl mb-3">
                  HACP™ SECURITY
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Patent-protected protocol ensuring data integrity and
                  competitive advantage
                </p>
                <div className="mt-4 bg-purple-500/20 text-purple-300 px-3 py-1 rounded text-xs font-bold">
                  PATENT PROTECTED
                </div>
              </div>
            </div>

            {/* Authority Statement */}
            <div className="bg-gradient-to-r from-gold/20 via-yellow-500/30 to-gold/20 border-2 border-gold/70 rounded-2xl p-8 text-center">
              <h4 className="text-3xl font-bold text-white mb-4">
                🏰 <span className="text-gold">UNBREACHABLE</span> COMPETITIVE
                ADVANTAGE
              </h4>
              <p className="text-xl text-gray-300 leading-relaxed">
                While competitors offer "10 soft benefits," we deliver{" "}
                <strong className="text-green-400">REAL EXECUTION</strong> with
                legal protection that ensures market dominance.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "dual-ai",
      title: "Dual AI Companion System",
      subtitle: "Azure Cognitive Search + OpenAI GPT-4o Turbo",
      content: (
        <div>
          <div className="text-center mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F4ed3f8ee7b6049b2831f9879427f69e5?format=webp&width=800"
              alt="Dual AI Architecture"
              className="w-24 h-24 mx-auto rounded-lg shadow-xl mb-4"
            />
            <div className="bg-green-500 text-black px-4 py-2 rounded-lg font-bold inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              LIVE • Enterprise Ready
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 border-2 border-gold">
              <h4 className="text-white font-bold text-xl mb-3">
                🤖 SaintSal™ Cognitive Companion
              </h4>
              <p className="text-white/80 mb-4">
                Azure Cognitive Search + OpenAI GPT-4o Turbo
              </p>
              <div className="bg-yellow-500/20 text-yellow-200 p-3 rounded border border-yellow-500/30">
                <div className="font-bold text-sm">Godish Mode Activated</div>
                <div className="text-xs">
                  Ultimate business intelligence companion
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-600 to-green-800 rounded-xl p-6 border-2 border-gray-600">
              <h4 className="text-white font-bold text-xl mb-3">
                🧠 Empire AI Advisor
              </h4>
              <p className="text-white/80 mb-4">
                OpenAI GPT-4o Turbo + Custom Training
              </p>
              <div className="text-white/90 text-sm">
                "Trained specifically on SAINTSAL™ methodologies and
                patent-protected HACP™ protocols."
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-6 text-sm">
              <span className="text-blue-400">🔹 GPT-4o Turbo</span>
              <span className="text-green-400">🔹 Azure Cognitive Search</span>
              <span className="text-purple-400">🔹 Enterprise Security</span>
              <span className="text-yellow-400">🔹 Real-time Processing</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "dashboard",
      title: "Command Center Dashboard",
      subtitle: "Monitor, Manage, and Scale Your AI Empire",
      content: (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-blue-600 p-6 rounded-xl text-center">
              <div className="text-3xl font-black mb-2">247</div>
              <div className="text-lg font-bold mb-1">Leads Discovered</div>
              <div className="text-sm opacity-80">AI-powered lookup</div>
            </div>
            <div className="bg-green-600 p-6 rounded-xl text-center">
              <div className="text-3xl font-black mb-2">18</div>
              <div className="text-lg font-bold mb-1">Active Referrals</div>
              <div className="text-sm opacity-80">Partner tracking</div>
            </div>
            <div className="bg-purple-600 p-6 rounded-xl text-center">
              <div className="text-3xl font-black mb-2">156</div>
              <div className="text-lg font-bold mb-1">Deals Analyzed</div>
              <div className="text-sm opacity-80">GPT-4 insights</div>
            </div>
            <div className="bg-pink-600 p-6 rounded-xl text-center">
              <div className="text-3xl font-black mb-2">89</div>
              <div className="text-lg font-bold mb-1">Mobile Users</div>
              <div className="text-sm opacity-80">iOS/Android apps</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900 p-6 rounded-xl border border-green-500/30">
              <h4 className="text-green-400 font-bold text-lg mb-3">
                ✅ System Status
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>AI Chat System</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>CRM Integration</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
                <div className="flex justify-between">
                  <span>Lead Discovery</span>
                  <span className="text-green-400">ONLINE</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-blue-500/30">
              <h4 className="text-blue-400 font-bold text-lg mb-3">
                📊 Quick Metrics
              </h4>
              <div className="text-center space-y-3">
                <div>
                  <div className="text-2xl font-black text-gold">∞</div>
                  <div className="text-xs text-gray-400">AI Requests</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-gold">24/7</div>
                  <div className="text-xs text-gray-400">Uptime</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl border border-purple-500/30">
              <h4 className="text-purple-400 font-bold text-lg mb-3">
                🚀 Performance
              </h4>
              <div className="text-center">
                <div className="text-3xl font-black text-gold mb-2">🔥</div>
                <div className="text-sm text-gray-300">Enterprise Grade</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "integrations",
      title: "GHL Integration Spine",
      subtitle: "Real Pipeline Automation vs Theory",
      content: (
        <div>
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gold mb-4">
              🔥 ACTUAL EXECUTION vs BOOMI'S THEORY
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-green-900/20 p-6 rounded-xl border-2 border-green-500">
                <h4 className="text-green-400 font-bold text-xl mb-4">
                  ✅ SAINTSAL™ EMPIRE
                </h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>REAL GHL pipeline automation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>AI Companion EXECUTES tasks</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Whisper voice-to-action</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Patent-protected HACP™</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>ONE-CLICK contact creation</span>
                  </li>
                </ul>
              </div>

              <div className="bg-red-900/20 p-6 rounded-xl border-2 border-red-500">
                <h4 className="text-red-400 font-bold text-xl mb-4">
                  ❌ BOOMI
                </h4>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>"Enhances data quality" 🙄</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>"Provides perspectives" 🤷</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>"Contributes to development" 📝</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>"Reduces troubleshooting" 🔧</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span>NO ACTUAL EXECUTION</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="text-2xl font-bold text-gold mb-4">
              🧬 THE DIFFERENCE:
            </div>
            <div className="text-xl text-white bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-xl border border-gold/30">
              <strong>
                We don't just "enhance" - We EXECUTE and GET SHIT DONE! 🔥
              </strong>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "competitive",
      title: "Patent-Protected Competitive Moat",
      subtitle: "U.S. Patent 10,290,222 HACP™ Protocol",
      content: (
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2F43808ce2cd5142889ceab9015345e61a?format=webp&width=800"
              alt="Patent Authority"
              className="w-32 h-32 mx-auto rounded-xl shadow-2xl border-4 border-gold/50 mb-6"
            />
            <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 border-2 border-gold/50 rounded-xl p-6 inline-block">
              <div className="text-gold font-bold text-xl">U.S. Patent</div>
              <div className="text-white font-black text-4xl">10,290,222</div>
              <div className="text-gold text-lg">HACP™ Protocol</div>
            </div>
          </div>

          <h3 className="text-3xl font-bold text-white mb-6">
            🏰 UNBREACHABLE COMPETITIVE ADVANTAGE
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-purple-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-3xl mb-3">🛡️</div>
              <h4 className="text-purple-400 font-bold mb-2">
                LEGAL PROTECTION
              </h4>
              <p className="text-gray-300 text-sm">
                Patent-pending technology prevents competition from copying core
                functionality
              </p>
            </div>
            <div className="bg-blue-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="text-blue-400 font-bold mb-2">ENTERPRISE READY</h4>
              <p className="text-gray-300 text-sm">
                Azure infrastructure with enterprise-grade security and
                compliance
              </p>
            </div>
            <div className="bg-green-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-3xl mb-3">💎</div>
              <h4 className="text-green-400 font-bold mb-2">FIRST MOVER</h4>
              <p className="text-gray-300 text-sm">
                Intent-triggered automation that executes actions, not just data
                flow
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600/20 to-gold/20 p-8 rounded-xl border border-gold/30">
            <h4 className="text-2xl font-bold text-gold mb-4">
              🚀 MARKET POSITION
            </h4>
            <p className="text-xl text-white">
              While competitors offer "10 soft benefits," we deliver{" "}
              <strong className="text-green-400">REAL EXECUTION</strong> with
              legal protection that ensures market dominance.
            </p>
          </div>
        </div>
      ),
    },
    {
      id: "cta",
      title: "Join the SAINTSAL™ Empire",
      subtitle: "Transform Your Business with Patent-Protected AI",
      content: (
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-8">
            🔥 READY TO CHANGE LIVES? 🔥
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Link
              to="/partnertech"
              className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-xl border-2 border-green-500 hover:border-gold transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h4 className="text-white font-bold text-xl mb-3">
                Get Chrome Extension
              </h4>
              <p className="text-green-200 text-sm mb-4">
                Start with PartnerTech.ai
              </p>
              <div className="text-lg font-bold text-white">FREE TRIAL</div>
            </Link>

            <Link
              to="/console"
              className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-xl border-2 border-blue-500 hover:border-gold transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">🧠</div>
              <h4 className="text-white font-bold text-xl mb-3">
                AI Companion Access
              </h4>
              <p className="text-blue-200 text-sm mb-4">
                Dual cognitive architecture
              </p>
              <div className="text-lg font-bold text-white">ENTERPRISE</div>
            </Link>

            <Link
              to="/pricing"
              className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl border-2 border-purple-500 hover:border-gold transition-all transform hover:scale-105"
            >
              <div className="text-4xl mb-4">👑</div>
              <h4 className="text-white font-bold text-xl mb-3">
                Full Empire Access
              </h4>
              <p className="text-purple-200 text-sm mb-4">Complete platform</p>
              <div className="text-lg font-bold text-white">$297-$1197</div>
            </Link>
          </div>

          <div className="bg-gradient-to-r from-gold/20 to-yellow-500/20 p-8 rounded-xl border-2 border-gold/50 mb-8">
            <h4 className="text-2xl font-bold text-gold mb-4">
              ✨ WHAT YOU GET ✨
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Chrome extension (Web Store approved)</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Dual AI Companion system</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>GHL pipeline automation</span>
                </li>
              </ul>
              <ul className="space-y-2">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Patent-protected technology</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Voice-to-action capabilities</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>Enterprise-grade infrastructure</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-xl text-gray-300">
            <strong className="text-gold">Don't just collect data.</strong>
            <br />
            <strong className="text-green-400">Execute actions.</strong>
            <br />
            <strong className="text-white">Change lives.</strong>
          </div>
        </div>
      ),
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div
      className={`min-h-screen bg-black relative overflow-hidden transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      {/* Professional Background with Animation */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fac42e9eb2dfa4803b38dcbde07d04084?format=webp&width=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          animation: "subtle-zoom 20s ease-in-out infinite",
        }}
      />

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/90" />

      <div className="relative z-10">
        {/* Professional Header */}
        <div className="p-8 bg-gradient-to-r from-black/95 to-gray-900/90 border-b-2 border-gold/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fee347a3f9d0e4f03870013d52decc792?format=webp&width=800"
                alt="SaintSal Empire"
                className="w-16 h-16 rounded-xl shadow-2xl border-2 border-gold/50 hover:border-gold transition-all duration-300"
              />
              <div>
                <h1 className="text-3xl font-black bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent">
                  SAINTSAL™ EMPIRE SHOWCASE
                </h1>
                <p className="text-xl text-gray-300 font-semibold">
                  Patent-Protected AI That Changes Lives
                </p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-gold font-bold text-xl">
                {currentSlide + 1} / {slides.length}
              </div>
              <div className="text-gray-400 text-sm mt-1">
                Professional Presentation
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="p-8">
          <div className="max-w-7xl mx-auto">
            {/* Slide Header */}
            <div className="text-center mb-8">
              <h2 className="text-4xl font-black text-white mb-4">
                {slides[currentSlide].title}
              </h2>
              <p className="text-xl text-gold font-semibold">
                {slides[currentSlide].subtitle}
              </p>
            </div>

            {/* Slide Content */}
            <div className="min-h-[500px] flex items-center justify-center">
              {slides[currentSlide].content}
            </div>
          </div>
        </div>

        {/* Professional Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-black/95 to-gray-900/95 border-t-2 border-gold/40 backdrop-blur-md p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevSlide}
                className="group bg-gradient-to-r from-gray-800 to-gray-700 text-white px-8 py-4 rounded-xl font-bold hover:from-gray-700 hover:to-gray-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                disabled={currentSlide === 0}
              >
                <span className="flex items-center gap-2">
                  <span className="group-hover:-translate-x-1 transition-transform duration-300">
                    ←
                  </span>
                  Previous
                </span>
              </button>

              {/* Enhanced Slide Indicators */}
              <div className="flex gap-3">
                {slides.map((slide, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`group relative transition-all duration-300 ${
                      index === currentSlide
                        ? "w-12 h-4 bg-gold rounded-full shadow-lg"
                        : "w-4 h-4 bg-gray-600 rounded-full hover:bg-gray-500"
                    }`}
                    title={slide.title}
                  >
                    {index === currentSlide && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gold text-black px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
                        {slide.title}
                      </div>
                    )}
                  </button>
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="group bg-gradient-to-r from-gold to-yellow-500 text-black px-8 py-4 rounded-xl font-bold hover:from-yellow-400 hover:to-gold transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                disabled={currentSlide === slides.length - 1}
              >
                <span className="flex items-center gap-2">
                  Next
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </span>
              </button>
            </div>

            {/* Premium Action Buttons */}
            <div className="flex justify-center gap-6">
              <Link
                to="/partnertech"
                className="group bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-xl font-bold hover:from-green-500 hover:to-green-400 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  🚀 <span>Get Extension</span>
                </span>
              </Link>
              <Link
                to="/console"
                className="group bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-500 hover:to-blue-400 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  🧠 <span>AI Console</span>
                </span>
              </Link>
              <Link
                to="/pricing"
                className="group bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-3 rounded-xl font-bold hover:from-purple-500 hover:to-purple-400 transition-all duration-300 shadow-lg transform hover:scale-105"
              >
                <span className="flex items-center gap-2">
                  👑 <span>Full Access</span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Custom Animations */}
        <style jsx>{`
          @keyframes subtle-zoom {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          @keyframes slide-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </div>
    </div>
  );
}
