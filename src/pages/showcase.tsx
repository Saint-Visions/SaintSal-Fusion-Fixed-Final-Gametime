import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Showcase() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: "intro",
      title: "Welcome to the SAINTSAL™ Empire",
      subtitle: "Patent-Protected AI Platform That Changes Lives",
      content: (
        <div className="text-center">
          <div className="mb-8">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fee347a3f9d0e4f03870013d52decc792?format=webp&width=800"
              alt="SaintSal Empire Authority"
              className="w-32 h-32 mx-auto rounded-xl shadow-2xl border-4 border-gold/50 mb-6"
            />
          </div>
          <h2 className="text-5xl font-black text-white mb-6">
            Beyond Data Collection
          </h2>
          <h3 className="text-3xl font-bold text-gold mb-8">
            We Execute Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-lg">
            <div className="bg-green-600/20 p-6 rounded-xl border border-green-500/30">
              <div className="text-2xl mb-3">🔥</div>
              <div className="text-green-400 font-bold">EXECUTION FOCUSED</div>
              <div className="text-gray-300 text-sm mt-2">Gets shit done</div>
            </div>
            <div className="bg-blue-600/20 p-6 rounded-xl border border-blue-500/30">
              <div className="text-2xl mb-3">🧬</div>
              <div className="text-blue-400 font-bold">PATENT PROTECTED</div>
              <div className="text-gray-300 text-sm mt-2">
                U.S. Patent 10,290,222
              </div>
            </div>
            <div className="bg-purple-600/20 p-6 rounded-xl border border-purple-500/30">
              <div className="text-2xl mb-3">⚡</div>
              <div className="text-purple-400 font-bold">AI EMPIRE</div>
              <div className="text-gray-300 text-sm mt-2">Azure + OpenAI</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "partnertech",
      title: "PartnerTech.ai",
      subtitle: "The Only Intent-Triggered SaaS That Executes Actions",
      content: (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-3xl font-bold text-gold mb-6">
                🚀 Chrome Extension Power
              </h3>
              <ul className="space-y-4 text-lg text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Seamless.ai-style lead discovery</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span>One-click GHL contact creation</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span>AI-powered qualification in 60 seconds</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span>Real-time pipeline automation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-gray-900 to-black p-6 rounded-xl border border-gold/30">
              <div className="text-center mb-4">
                <div className="text-4xl font-black text-gold mb-2">
                  $297-$1197
                </div>
                <div className="text-gray-300">Monthly SaaS Tiers</div>
              </div>
              <div className="space-y-3">
                <div className="bg-green-600/20 p-3 rounded border border-green-500/30">
                  <div className="text-green-400 font-bold">
                    ✅ Chrome Web Store Approved
                  </div>
                </div>
                <div className="bg-blue-600/20 p-3 rounded border border-blue-500/30">
                  <div className="text-blue-400 font-bold">
                    🚀 Multi-Tenant Ready
                  </div>
                </div>
                <div className="bg-purple-600/20 p-3 rounded border border-purple-500/30">
                  <div className="text-purple-400 font-bold">
                    🔒 Patent Protected
                  </div>
                </div>
              </div>
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
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Professional Background */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fac42e9eb2dfa4803b38dcbde07d04084?format=webp&width=800")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10">
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-black/90 to-black/70 border-b border-gold/30">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd83998c6a81f466db4fb83ab90c7ba25%2Fee347a3f9d0e4f03870013d52decc792?format=webp&width=800"
                alt="SaintSal Empire"
                className="w-12 h-12 rounded-lg shadow-xl"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">
                  SAINTSAL™ Empire Platform
                </h1>
                <p className="text-gold">
                  Patent-Protected AI That Changes Lives
                </p>
              </div>
            </div>
            <div className="text-gold font-bold">
              {currentSlide + 1} / {slides.length}
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

        {/* Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-black/90 border-t border-gold/30 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <button
                onClick={prevSlide}
                className="bg-gray-800 text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors disabled:opacity-50"
                disabled={currentSlide === 0}
              >
                ← Previous
              </button>

              {/* Slide Indicators */}
              <div className="flex gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentSlide ? "bg-gold" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                className="bg-gold text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors disabled:opacity-50"
                disabled={currentSlide === slides.length - 1}
              >
                Next →
              </button>
            </div>

            {/* Quick Actions */}
            <div className="flex justify-center gap-4 mt-4">
              <Link
                to="/partnertech"
                className="bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-500 transition-colors"
              >
                🚀 Get Extension
              </Link>
              <Link
                to="/console"
                className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-500 transition-colors"
              >
                🧠 AI Console
              </Link>
              <Link
                to="/pricing"
                className="bg-purple-600 text-white px-4 py-2 rounded font-bold hover:bg-purple-500 transition-colors"
              >
                👑 Full Access
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
